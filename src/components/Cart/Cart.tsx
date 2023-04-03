import React from 'react'
import styled from 'styled-components'
import { addToCart, getTotalItems, getTotalPrice, updateChosenSize } from '../../redux/Product/Slice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import formatNumber from '../../utils/formatNumber';
import { CartHeader, Section } from './style';
import { useDispatch } from 'react-redux';
import { CartProduct } from '../../redux/Product/type';

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useAppSelector((state) => state.slice.cart);  
  const totalPrice = useAppSelector(getTotalPrice);
  const totalItems = useAppSelector(getTotalItems);

  const handleAddToCart = (product: CartProduct, size: number) => {
    const productIndex = cartProducts.findIndex(cartProduct => cartProduct.id === product.id);
    const selectedSizeIndex = cartProducts[productIndex].sizes.findIndex(singleSize => singleSize.size_number === size);
    if (cartProducts[productIndex].sizes[selectedSizeIndex].qty_of_size > 0) {
      dispatch(addToCart({product, size}));
      dispatch(updateChosenSize({productId: product.id, size}));
    }
  }

  return (
    <>
      <CartHeader>
        <h3>CART</h3>
        <p>{cartProducts.length} products added</p>
      </CartHeader>
      <Section className='p-3'>
        { cartProducts.length === 0 ? (<h3>Your cart is empty</h3>) : (<h3>Your cart contains:</h3>)}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Model</th>
              <th scope="col">SKU</th>
              <th scope="col">Size</th>
              <th scope="col">Qty</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
              {
                cartProducts.map(product => {
                  return (
                    <>  
                      <tr>
                        <td className="align-middle">
                          <div className='d-flex justify-content-between'>
                            <p>{product.name}</p>
                            <button className='btn btn-danger'>Remove</button>
                          </div>
                        </td>
                        <td className="align-middle">{product.code_number}</td>
                        <td className="align-middle">{product.selectedSizeName}mm</td>
                        {/* <td className="align-middle">{product.selectedSize?.size}</td> */}
                        <td className="align-middle">
                          <div className='d-flex justify-content-between'>
                            <p>{product.qty}</p>
                            <button
                            className='btn btn-primary'
                            onClick={() => handleAddToCart(product, product.selectedSizeName ?? 0)}>Add</button>
                          </div>
                        </td>
                        <td className="align-middle">{formatNumber(product.price)}</td>
                      </tr>
                    </>
                  )
                })
              }
          </tbody>
        </table>
        <div className='text-end' style={{textDecoration: 'underline'}}>Total pieces: {totalItems}</div>
        <div className='text-end' style={{textDecoration: 'underline'}}>Total price: {formatNumber(totalPrice)}</div>
      </Section>
    </>
  )
}

export default Cart