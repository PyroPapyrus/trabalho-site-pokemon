import PokemonCard from "../components/PokemonCard";
import NavBar from "../components/NavBar";
import { Box, Container, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Skeletons from "../components/Skeletons";
import { useNavigate } from "react-router-dom";

const Pokedex = ({ setPokemonData }) => {
  const [pokemons, setPokemons] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getPokemons();
    
  }, []);

  const getPokemons =async () => {
    try {
      var endPoints = [];
      for (var i = 1; i < 1000; i++) {
        endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }
      
      await axios.all(endPoints.map((endPoint) => axios.get(endPoint))).then((res) => setPokemons(res));
    
    } catch (error) {
      console.log(error);
    }
  };

  
  const pokemonFilter = (name) => {
    var filteredPokemons = [];

    if (name === "") {
      getPokemons();
    }

    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i]);
      }
    }
    setPokemons(filteredPokemons);
  };


  const pokemonChoiceHandler = (pokemonData) => {
    setPokemonData(pokemonData);
    navigate("/profile");
  }

  return (
    <div>
      <NavBar pokemonFilter={pokemonFilter} />
      <Container maxWidth="false">
        <Grid container spacing={4}>
          {pokemons.length === 0 ? (
            <Skeletons />
          ) : (
            pokemons.map((pokemon, key) => (
              <Grid item xs={12} sm={6} md={4} lg={2.4} key={key}>
                <Box onClick = {() => pokemonChoiceHandler(pokemon.data)}>
                <PokemonCard
                  name={pokemon.data.name}
                  img={pokemon.data.sprites.front_default}
                  types={pokemon.data.types}
                  id={pokemon.data.id}
                />

                </Box>
              </Grid>
            ))
          )}
          ;
        </Grid>
      </Container>
    </div>
  );
};

export default Pokedex;
