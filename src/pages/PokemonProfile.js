import { Box, Container, Divider, Paper, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import PokeTable from "../components/PokeTable";

const PokemonProfile = ({ pokemonData }) => {
  const { name, sprites, id } = pokemonData;
  console.log(pokemonData);
  return (
    <>
      <NavBar hideSearch />
      <Container>
        <Paper elevation={4}>
          <Box display="flex" flexDirection="column" alignItems="center" >
            <Typography variant="h4" marginTop={4}>{name} </Typography>
            <Typography variant="h6" color={"DimGray"}> Nº{id}</Typography>
            
            <Box display="flex" margin={10} width="100%" alignItems="space-evenly">
              <Box component="img" src={sprites.front_default} width="100%" height="100%" />
              <PokeTable pokemonData= {pokemonData}/>
            </Box>
            <Box width="100%">
            <Divider>Variante</Divider>
                <Box>
                    <Box component="img" src={sprites.front_female} width="30%" height="30%" />
                    <Box component="img" src={sprites.front_shiny} width="30%" height="30%" />
                    <Box component="img" src={sprites.front_shiny_female} width="30%" height="30%" />

                </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default PokemonProfile;
