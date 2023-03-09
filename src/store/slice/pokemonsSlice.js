import { createSlice } from '@reduxjs/toolkit';

const pokemonsSlice = createSlice({
	name: 'pokemons',

	initialState: {
		search: ''
	},

	reducers: {
		setSearch: (state, action) => {
			state.search = action.payload;
		},

	}
});

export const { setSearch } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;