import { InputAdornment, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'
import '../assets/pokemonSearch.scss'
import { useState } from 'react'

const PokemonSearch = ({ changeSearch, search}) => {
	const [searchValue, setSearch] = useState(search);

	const keyPress = (e) => {
		if(e.keyCode === 13){
			changeSearch(e.target.value)
		}
	}

	const handleSearch = () => {
		if (search !== searchValue) {
			changeSearch(searchValue)
		}
	}

	const handleChange = (e) => {
		setSearch(e.target.value)
	}

	return (
		<TextField
			id="input-with-icon-textfield"
			InputProps={{
				classes: {
					input: 'pokemon-search',
				},
				placeholder: 'Enter valid name or id',
				startAdornment: (
					<InputAdornment position="start">
						<Search sx={{ color: '#FFFFFF', cursor: 'pointer' }} onClick={handleSearch} />
					</InputAdornment>
				),
			}}
			variant="standard"
			onKeyDown={keyPress}
			onChange={handleChange}
			value={searchValue}
		/>
	)
 }

export default PokemonSearch