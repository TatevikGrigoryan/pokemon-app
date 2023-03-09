import {
	FormControl,
	MenuItem,
	Pagination,
	Select,
} from '@mui/material'
import '../assets/pokemonPagination.css'

const PokemonPagination = ({
	count,
	page,
	handleChange,
	perPage,
	changePerPage,
	option,
	disable
}) => {
	return (
		<div className={'pokemonPagination'}>
			<Pagination count={count} page={page} onChange={handleChange} siblingCount={0} disabled={!!disable} />

			<FormControl variant="standard" sx={{ m: 1, maxWidth: 80 }} disabled={!!disable}>
				<Select
					labelId="demo-simple-select-standard-label"
					id="demo-simple-select-standard"
					value={perPage}
					onChange={(event) => {changePerPage(event.target)}}
				>
					{option.map((item, index) => <MenuItem value={item.value} key={index}>{item.name}</MenuItem>)}
				</Select>
			</FormControl>
		</div>
	);
}

export default PokemonPagination