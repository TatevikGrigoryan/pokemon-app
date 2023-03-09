import { AppBar, Toolbar, Typography } from '@mui/material'
import PokemonSearch from './PokemonSearch'
import { useSelector,useDispatch } from 'react-redux'
import { setSearch } from '../store/slice/pokemonsSlice'

const PokemonHeader  = () => {
	const search = useSelector((state) => state.pokemons.search);
	const dispatch = useDispatch();

	return (
		<AppBar position="fixed">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					POKEMON
				</Typography>

				<PokemonSearch
					search={search}
					changeSearch={(value) => {dispatch(setSearch(value))}}
				/>
			</Toolbar>
		</AppBar>
	)
}

export default PokemonHeader