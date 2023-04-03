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
          const productIndex = state.cart.findIndex(cartProduct => cartProduct.id === product.id && cartProduct.selectedSizeName === payload.size);
          let selectedSizeIndex = -1;
          if (product && product.sizes) {
            if (selectedSizeIndex !== -1) {
              state.cart[productIndex].selectedSizeName = state.cart[productIndex].sizes[selectedSizeIndex].size_number;
            }
          }
          if (productIndex !== -1) {
            const selectedSizeIndex = state.cart[productIndex].sizes.findIndex(singleSize => singleSize.size_number === payload.size);
            state.cart[productIndex].selectedSizeName = state.cart[productIndex].sizes[selectedSizeIndex].size_number;
            state.cart[productIndex].qty += 1;
            // state.products[productIndex].itemsInStock--;
          } else {
            if (product && product.sizes) {
              const newProduct = {
                ...product,
                qty: 1,
                selectedSizeName: selectedSizeIndex !== -1 ? product.sizes[selectedSizeIndex].size_number : payload.size,
                // itemsInStock: product.itemsInStock - 1
              };
              state.cart.push(newProduct);
            }
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
            if (productSelectedSize.qty_of_size > 0 && cartSelectedSize.qty_of_size > 0) {
              productSelectedSize.qty_of_size -= 1;
              productSelectedSize.selectedSizeQty +=1;
              cartSelectedSize.qty_of_size -= 1;
              cartSelectedSize.selectedSizeQty +=1;
            }
          }
        }
        // increaseStock: (state, action: PayloadAction<number>) => {
        //   const productIndex = state.findIndex(product => product.id === action.payload);
        //   state[productIndex].itemsInStock++;
        //   console.log(productIndex);
        // },
    }
})

export type RootState = ReturnType<typeof store.getState>
export const GetAvailableQty = (state: RootState, productId: number) => {
  const productIndex = state.slice.products.findIndex(product => product.id === productId);
  const totalQty = state.slice.products[productIndex].sizes.reduce((acc, curr) => acc + curr.qty_of_size, 0);
  return totalQty;
};
export const getTotalPrice = (state: RootState) => state.slice.cart.reduce((total, item) => total +=(item.qty * item.price), 0);
export const getTotalItems = (state: RootState) => state.slice.cart.reduce((total, item) => total + item.qty, 0);

export const {addToProducts, addToCart, updateChosenSize} = Slice.actions;