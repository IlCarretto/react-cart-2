import React from 'react'
import { useAppSelector } from '../../redux/store';
import { Box, Button } from './style';
import { getTotalItems } from '../../redux/Product/Slice';

const Checkout = () => {
  const totalItems = useAppSelector(getTotalItems);

  return (
    <Box>
      <h4 className='mb-2'>Thank you!</h4>
      <h4 className='mb-4'>Your {totalItems} {totalItems === 1 ? 'product' : 'products'} will be shipped soon</h4>
      <Button href="/">
        Buy more
      </Button>
    </Box>
  )
}

export default Checkout