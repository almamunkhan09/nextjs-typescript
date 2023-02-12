'use client';

import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import { Divider, IconButton, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { type } from 'os';
import * as React from 'react';

export default function CartListItem({
  id,
  title,
  pricePerUnit,
  count,
  removeItem,
  addOne,
  removeOne,
  maxAmount,
}) {
  return (
    <Stack
      maxWidth="md"
      bgcolor="#aed581"
      display="flex"
      justifyContent="center"
      sx={{ border: 'solid 1px', borderRadius: '5px', marginBottom: '.2rem' }}
      p={1}
      spacing={1}
    >
      <Grid2
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        rowSpacing={1}
        columnSpacing={1}
      >
        <Grid xs={6}>{title}</Grid>
        <Grid xs={4} justifyContent="center" display="flex">
          <Stack direction="row" justifyContent="flex-end" alignItems="center">
            <IconButton
              color="error"
              onClick={() => {
                if (count > 1) {
                  removeOne(id);
                } else {
                  alert('Reched Minimum Amount');
                }
              }}
            >
              <RemoveIcon />
            </IconButton>
            <Typography variant="button" fontWeight="bold">
              {count}
            </Typography>
            <IconButton
              color="primary"
              onClick={() => {
                if (count < maxAmount) {
                  addOne(id);
                } else {
                  alert('You reached maximum amount for this Item');
                }
              }}
            >
              <AddIcon />
            </IconButton>
          </Stack>
        </Grid>
        <Grid xs={2} justifyContent="space-around" display="flex">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              sx={{ margin: 'Auto' }}
              variant="button"
              fontWeight="bold"
            >
              {count * pricePerUnit}
            </Typography>

            <IconButton
              color="error"
              size="small"
              onClick={() => {
                console.log(id);
                removeItem(id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid2>
    </Stack>
  );
}
