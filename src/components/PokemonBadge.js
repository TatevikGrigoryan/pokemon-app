import '../assets/pokemonBadge.scss'

const PokemonBadge = ({value, color}) => {
	return (
		<div
			className="pokemon_badge"
			style={{background: color}}
		>
			{value}
		</div>
	)
}

export default PokemonBadge