import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Skeleton,
} from "@mui/material";

const Skeletons = () => {
  return (
    <Container maxWidth="false">
      <Grid container spacing={4} paddingTop="2em">
        {Array.from(Array(50)).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <CardActionArea>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Skeleton width={210} height={220} animation="wave" />

                    <Box display="flex" alignItems="center">
                      <Skeleton width={200} height={70} animation="wave" />
                    </Box>
                  </Box>
                </CardActionArea>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skeletons;
