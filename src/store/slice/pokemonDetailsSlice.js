import { createSlice } from '@reduxjs/toolkit';

const pokemonDetailsSlice = createSlice({
	name: 'pokemonDetails',

	initialState: {
		currentPokemon: {}
	},

	reducers: {
		setPokemon: (state, action) => {
			state.currentPokemon = action.payload;
		},

	}
});

export const { setPokemon } = pokemonDetailsSlice.actions;
export default pokemonDetailsSlice.reducer;