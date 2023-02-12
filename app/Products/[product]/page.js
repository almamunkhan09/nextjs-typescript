'use client';
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { width } from '@mui/system';
import Image from 'next/image';

const products = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.3,
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
  },
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    price: 55.99,
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
  },
  {
    id: 4,
    title: 'Mens Casual Slim Fit',
    price: 15.99,
    description:
      'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
  },
];

export default function product({ params }) {
  console.log(params);
  const [singleItem] = products.filter(
    (element) => element.id === parseInt(params.product),
  );
  console.log(singleItem);
  return (
    <Box
      height="80vh"
      margin="8rem"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Grid sx={{ flexGrow: 1 }} container spacing={2} mt={4}>
        <Grid
          item
          xs={6}
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <img
            src={singleItem.image}
            alt="hello"
            height={'200px'}
            width={'200px'}
          />
        </Grid>
        <Grid item xs={6}>
          <Paper
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <Stack justifyContent="center" alignItems="center">
              <Typography variant="title" fontWeight={700}>
                {' '}
                {singleItem.title}{' '}
              </Typography>
            </Stack>{' '}
            <Stack
              m={2}
              p={2}
              alignContent="center"
              justifyContent="flex-start"
            >
              {' '}
              {singleItem.description}
            </Stack>
            <Stack
              m={2}
              p={2}
              alignContent="center"
              justifyContent="flex-start"
            >
              <Button variant="text" color="success">
                {' '}
                <Typography variant="h4"> ${singleItem.price}</Typography>{' '}
              </Button>
              <Button variant="contained">Add to Cart</Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
