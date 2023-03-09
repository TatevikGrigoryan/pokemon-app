import '../assets/pokemonBadge.css'

const PokemonBadge = ({value, color}) => {
	return (
		<div
			className={'pokemonBadge'}
			style={{background: color}}
		>
			{value}
		</div>
	)
}

export default PokemonBadge