import { configureStore } from '@reduxjs/toolkit'
import pokemonsSlice from './slice/pokemonsSlice'
import modalSlice from './slice/modalSlice'
import pokemonDetailsSlice from './slice/pokemonDetailsSlice'

export default configureStore({
	reducer: {
		pokemons: pokemonsSlice,
		pokemonDetails: pokemonDetailsSlice,
		modal: modalSlice
	}
})