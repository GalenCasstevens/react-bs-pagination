import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '../features/pokemons/pokemonSlice';
import paginationReducer from '../features/pagination/paginationSlice';

export const store = configureStore({
	reducer: {
		pokemons: pokemonReducer,
		pagination: paginationReducer,
	},
});
