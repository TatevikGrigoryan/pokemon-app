import FilterByType from './FilterByType'
import '../../assets/pokemonFilter.css'

const PokemonFilter = ({ handleSelect, selectedTypes }) => {
	return (
		<div className={'pokemonFilter'}>
			<FilterByType
				handleSelect={handleSelect}
				selectedTypes={selectedTypes}
			/>
		</div>
	)
}

export default PokemonFilter