import React, {useEffect} from 'react'
import styled from 'styled-components'
import { Products } from '../../redux/Product/products'
import { Product } from "../../redux/Product/type";
import { addToProducts } from '../../redux/Product/Slice'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import ProductItem from './ProductItem';
import { Row } from './style';
import { Col } from './style';

const ProductHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid black;
`

const ProductsList = () => {
  const dispatch = useAppDispatch();
  // Richiamo lo stato dei prodotti
  const products = useAppSelector((state) => state.slice.products);
  
  // Al mutamento di products e dispatch prendo i prodotti dallo store di redux
  useEffect(() => {
    dispatch(addToProducts(Products));
  }, [Products, dispatch])

  return (
    <>
      <section>
        <ProductHeader>
          <h3>LAST PRODUCTS AVAILABLE</h3>
          <p>{products.length} products available</p>
        </ProductHeader>
        <div className='products-list'>
          <Row>
            {
              products.map((product) => {
                return (
                  <>
                    <Col>
                      <ProductItem key={product.id} product={product}/>
                    </Col>
                  </>
                )
              })
            }
          </Row>
        </div>
      </section>
    </>
  )
}

export default ProductsList