import { createSlice } from '@reduxjs/toolkit';
const pokemons = require('json-pokemon');

const initialState = {
	pokemons: pokemons,
};

export const pokemonSlice = createSlice({
	name: 'pokemon',
	initialState,
	reducers: {},
});

export default pokemonSlice.reducer;
