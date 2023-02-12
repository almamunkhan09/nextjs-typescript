'use client';

import { Box, List, ListItem, Stack, Typography } from '@mui/material';
import CartListItem from '../../components/CartListItem';
import TableCart from '../../components/TableCart';

export default function Cart() {
  const cartList = [
    {
      productTitle: 'Man Cotton Shirt',
      pricePerUnit: 3,
      count: 3,
      totalPrice: 4,
    },
    {
      productTitle: 'Women Wool Shirt',
      pricePerUnit: 3,
      count: 3,
      totalPrice: 4,
    },
  ];
  return (
    <Box sx={{ marginTop: '10rem' }}>
      <Stack m={2} display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h6"> My Cart </Typography>
      </Stack>
      {cartList.map((item) => {
        return (
          <Stack
            key={item.productTitle}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ width: '100%', display: 'block', margin: 'auto' }}
            maxWidth="md"
          >
            <CartListItem
              title={item.productTitle}
              pricePerUnit={item.pricePerUnit}
              count={item.count}
            />
          </Stack>
        );
      })}
    </Box>
  );
}
