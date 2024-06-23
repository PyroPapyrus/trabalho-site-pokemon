import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pokedex from "../pages/Pokedex";
import PokemonProfile from "../pages/PokemonProfile";
import { Fragment, useState } from "react";
import LogIn from "../pages/LogIn";

const Router = () => {

    const [pokemonData, setPokemonData] = useState();

    return (
        <BrowserRouter>
        <Fragment>
        <Routes>
            <Route path="/profile" element={<PokemonProfile pokemonData={pokemonData}/>}/>;
            <Route path="/pokedex" element={<Pokedex setPokemonData={setPokemonData}/>}/>; 
            <Route path="/" element={<LogIn/>}/>;
        </Routes>
        </Fragment>
        </BrowserRouter>
    );
}

export default Router;