import React, {useState} from 'react'
import { Product } from '../../redux/Product/type'
import { Button, Card, Image, MsBox, Select, TextContainer } from './style'
import formatNumber from '../../utils/formatNumber'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { addToCart, updateChosenSize } from '../../redux/Product/Slice'

// Tipizzo la props product per prenderle dal genitore
interface Props {
  product: Product
}

const ProductItem = ({product}: Props) => {
  const dispatch = useAppDispatch();
  const [size, setSize] = useState<null | number>(null);

  const handleChange = (e: any) => {
    console.log(e.target.value);
    setSize(e.target.value);
  }

  // Funzione di handle per aggiungere i prodotti al carrello
  const handleAddToCart = (product: Product, size: number) => {
    dispatch(addToCart({product, size}));
    dispatch(updateChosenSize({productId: product.id, size}));
  }
  
  return (
    <Card>
      <div>
        <Image src={product.image_url} alt={product.name} />
      </div>
      <TextContainer>
        <h4>{product.name}</h4>
        <p>{product.code_number}</p>
        <p>Qty: {product.itemsInStock}</p>
        <p>Price: {formatNumber(product.price)}</p>
        <MsBox>
          <Select
          required
          onChange={ (e) => {
            if(e.target.value) {
              setSize(Number(e.target.value));
            }
          }}
          // onChange={(singleSize) => handleSelectSize(singleSize.size_number, product)}
          >
            <option disabled selected>Select size</option>
            {product.sizes.map((singleSize, index) => {
              return (
                <option
                value={singleSize.size_number}
                key={index}
                disabled={singleSize.qty_of_size === 0}>
                  {singleSize.size_number}mm {singleSize.qty_of_size} pz.
                </option>
              )
            })}
          </Select>
          <Button
            onClick={() => 
              {
                size !== null && handleAddToCart(product, size)}
              }>
            Add
          </Button>
        </MsBox>
      </TextContainer>
    </Card>
  )
}

export default ProductItem