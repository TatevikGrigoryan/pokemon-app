import FilterByType from './FilterByType'
import '../../assets/filter/pokemonFilter.scss'

const PokemonFilter = ({ handleSelect, selectedTypes }) => {
	return (
		<div className="pokemon-filter">
			<FilterByType
				handleSelect={handleSelect}
				selectedTypes={selectedTypes}
			/>
		</div>
	)
}

export default PokemonFilter