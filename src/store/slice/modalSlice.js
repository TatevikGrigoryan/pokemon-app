import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
	name: 'modals',

	initialState: {
		pokemonDetailsModal: false
	},

	reducers: {
		openModal: (state, action) => {
			state[action.payload.type] = action.payload.value;
		},

	}
});

export const { openModal } = modalSlice.actions;
export default modalSlice.reducer;