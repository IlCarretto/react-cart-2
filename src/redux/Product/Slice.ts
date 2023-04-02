import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Product, CartProduct } from "./type";
import { store } from "../store";

export const Slice = createSlice({
    name: "slice",
    initialState: {
      products: [] as Product[],
      cart: [] as CartProduct[]
    },
    reducers: {
        addToProducts: (state, action: PayloadAction<Product[]>) => {
          action.payload.forEach((product) => {
            const index = state.products.findIndex((p) => p.id === product.id);
            if (index === -1) {
              state.products.push(product);
            }
          });
        },
        addToCart: (state, {payload}: PayloadAction<{product: Product, size: number}>) => {
          const {product} = payload;
          const productIndex = state.cart.findIndex((product) => product.id === product.id);
          if (productIndex !== -1) {
            const selectedSizeIndex = state.cart[productIndex].sizes.findIndex(singleSize => singleSize.size_number === payload.size);
              state.cart[productIndex].qty += 1;
              state.cart[productIndex].selectedSizeName = state.cart[productIndex].sizes[selectedSizeIndex].size_number;
          } else {
              state.cart.push({...product, qty: 1});
          }
        },
        updateChosenSize: (state, {payload}: PayloadAction<{productId: number, size: number}>) => {
          const {productId, size} = payload;
          const product = state.products.find(({id}) => id === productId);
          const cart = state.cart.find(({id}) => id === productId);
          const productSizes = product?.sizes;
          const cartSizes = cart?.sizes;
          if (!productSizes && !cartSizes) {
            return
          }
          const productSelectedSize = productSizes?.find(({size_number}) => size_number === size);
          const cartSelectedSize = cartSizes?.find(({size_number}) => size_number === size);
          if (productSelectedSize && cartSelectedSize) {
            productSelectedSize.qty_of_size -= 1;
            productSelectedSize.selectedSizeQty +=1;
            cartSelectedSize.qty_of_size -= 1;
            cartSelectedSize.selectedSizeQty +=1;
            // state.cart[productId].selectedSizeName = cartSelectedSize;
          }
        }
    }
})

export type RootState = ReturnType<typeof store.getState>
export const getTotalPrice = (state: RootState) => state.slice.cart.reduce((total, item) => total +=(item.qty * item.price), 0);
export const getTotalItems = (state: RootState) => state.slice.cart.reduce((total, item) => total + item.qty, 0);

export const {addToProducts, addToCart, updateChosenSize} = Slice.actions;