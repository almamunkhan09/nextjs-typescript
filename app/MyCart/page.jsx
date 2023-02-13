'use client';

import { Box, Stack, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import { useState } from 'react';
import CartListItem from '../../components/CartListItem';

export default function Cart() {
  const isCookieExist = Cookies.get('myCart')
    ? JSON.parse(Cookies.get('myCart'))
    : [];
  const [cartList, setCartList] = useState([...isCookieExist]);

  const removeItem = (id) => {
    const newCart = cartList.filter((item) => !(item.id === id));
    setCartList(newCart);
    Cookies.set('myCart', JSON.stringify(newCart));
  };

  const addOne = (id) => {
    const newCart = [...cartList];
    newCart.find((item) => item.id === id).count += 1;
    setCartList(newCart);
    Cookies.set('myCart', JSON.stringify(newCart));
  };
  const removeOne = (id) => {
    const newCart = [...cartList];
    newCart.find((item) => item.id === id).count -= 1;
    setCartList(newCart);
    Cookies.set('myCart', JSON.stringify(newCart));
  };
  return (
    <Box sx={{ marginTop: '10rem', height: '90vh' }}>
      <Stack m={2} display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h6"> My Cart </Typography>
      </Stack>
      {cartList.map((item) => {
        return (
          <Stack
            key={item.id}
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
              id={item.id}
              maxAmount={item.maxAmount}
              removeItem={removeItem}
              addOne={addOne}
              removeOne={removeOne}
            />
          </Stack>
        );
      })}
    </Box>
  );
}
