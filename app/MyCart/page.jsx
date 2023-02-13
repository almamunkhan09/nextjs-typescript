'use client';

import { Box, Button, Stack, Typography } from '@mui/material';
import Cookies from 'js-cookie';
import Link from 'next/link';
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

  const totalAmount = (cart) => {
    const initialValue = 0;
    const totalPrice = cart.reduce(
      (accumulator, currentValue, currentIndex) =>
        accumulator +
        cart[currentIndex].pricePerUnit * cart[currentIndex].count,
      initialValue,
    );

    return totalPrice;
  };
  return (
    <Box sx={{ marginTop: '10rem', height: '90vh' }}>
      <Stack m={2} display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h6"> My Cart </Typography>
      </Stack>
      {console.log(cartList)}
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

      <Stack
        mt={5}
        spacing={4}
        display="flex"
        justifyContent="space around"
        alignItems="center"
      >
        <Stack> Total Price is {totalAmount(cartList).toFixed(2)}</Stack>
        <Link href={'/checkout'} style={{ textDecoration: 'none' }}>
          {' '}
          <Button variant="contained"> Checkout </Button>
        </Link>
      </Stack>
    </Box>
  );
}
