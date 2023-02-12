import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';

export default function ProductCardff({ title, price, image }) {
  return (
    <Container maxWidth="xl" sx={{ marginTop: '15rem' }}>
      <Grid container spacing={2}>
        <Grid xs={6} md={4} xl={4} sx={{ padding: '20px' }}>
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CardMedia
              image={image}
              title={title}
              sx={{ paddingTop: '100%' }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5"> {title}</Typography>
              <Typography> {price}</Typography>
            </CardContent>

            <CardActions>
              <Button variant="contained" onClick={() => {}}>
                Details
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
