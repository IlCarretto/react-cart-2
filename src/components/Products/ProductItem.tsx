import React, {useState} from 'react'
import { Product } from '../../redux/Product/type'
import { Button, Card, Image, MsBox, Select, TextContainer } from './style'
import formatNumber from '../../utils/formatNumber'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { GetAvailableQty, addToCart, updateChosenSize } from '../../redux/Product/Slice'

// Tipizzo la props product per prenderle dal genitore
interface Props {
  product: Product
}

const ProductItem = ({product}: Props) => {
  const dispatch = useAppDispatch();
  const [size, setSize] = useState<null | number>(null);

  // Function per ottenere la quantità disponibile per ogni prodotto
  const useAvailableQty = (productId: number) => {
    const availableQty = useAppSelector(state => GetAvailableQty(state, productId));
    return availableQty;
  };

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
        <p>Qty: {useAvailableQty(product.id)}</p>
        <p>Price: {formatNumber(product.price)}</p>
        <MsBox>
          <Select
          required
          onChange={ (e) => {
            if(e.target.value) {
              setSize(Number(e.target.value));
              console.log(size);
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
            disabled={useAvailableQty(product.id) === 0}
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