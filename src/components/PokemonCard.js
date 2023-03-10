import {
	Button,
	Card,
	CardActions,
	CardContent,
	Typography
} from '@mui/material'
import pokemonColors from '../helpers/PokemonColors'
import '../assets/pockemonCard.scss'
import PokemonBadge from './PokemonBadge'
import * as React from 'react'

const PokemonCard = ({ pokemon, openDetails }) => {
	return (
		<Card sx={{ maxWidth: 250, width: '100%' }}>
			<CardContent className="pokemon-card">
				<div
					className="pokemon-card__header"
					style={{background: `${pokemon.types[0] ? pokemonColors[pokemon.types[0].type.name] + '9e': ''} `}}
				>
					<Typography gutterBottom variant="h5" component="div" mt={'20px'}>
						{pokemon.name}
					</Typography>

					<div
						className="pokemon-card__media"
						style={{borderColor: `${pokemon.types[0] ? pokemonColors[pokemon.types[0].type.name] : ''}`}}
					>
						<img
							height={70}
							src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
							alt={pokemon.name}
						/>
					</div>
				</div>

				<div className="pokemon-card__main">
					<div className="pokemon-card__main__content">
						<div className="pokemon-card__main__badge">
							{pokemon.types.map((item, index) => (
								<PokemonBadge
									key={index}
									value={item.type.name}
									color={pokemonColors[item.type.name]}
								/>
							))}
						</div>

						<Typography variant="body2" color="text.secondary" mt={'5px'}>
							base_experience - {pokemon.base_experience}
						</Typography>

						<Typography variant="body2" color="text.secondary" mt={'5px'}>
							weight - {pokemon.weight}
						</Typography>
					</div>
				</div>
			</CardContent>

			<CardActions>
				<Button size="small" onClick={() => openDetails(pokemon)}>Learn More</Button>
			</CardActions>
		</Card>
	)
}

export default PokemonCard