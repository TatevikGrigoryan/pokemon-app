import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import pokemonColors from '../../helpers/PokemonColors'
import '../../assets/filter/byType.scss'
import { KeyboardArrowDown, KeyboardArrowRight } from '@mui/icons-material'
import { useState } from 'react'

const FilterByType = ({ selectedTypes = [], handleSelect }) => {
	const [open, setOpen] = useState(true)
	const pokemonTypes = Object.keys(pokemonColors)

	const renderLabel = (value) => {
		return (
			<div className="filter-by-type__label">
				<div className="filter-by-type__label__color" style={{ background: pokemonColors[value] }} />
				<span>{value}</span>
			</div>
		)
	}

	return (
		<FormGroup className="filter-by-type">
			<div className="filter-by-type__header">
				<span>Filter by type</span>
				<div onClick={() => {setOpen(!open)}}>
					{open ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
				</div>
			</div>

			{open ? (
				pokemonTypes.map((type, index) => (
					<FormControlLabel
						key={index}
						control={<Checkbox checked={selectedTypes.includes(type)} />}
						label={renderLabel(type)}
						onChange={(e) => handleSelect(type, e.target.checked)}
					/>
				))
			) : null }
		</FormGroup>
	)
}

export default FilterByType