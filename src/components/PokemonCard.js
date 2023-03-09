import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography
} from '@mui/material'
import pokemonColors from '../helpers/PokemonColors'
import '../assets/pockemonCard.css'
import PokemonBadge from './PokemonBadge'
import * as React from 'react'

const PokemonCard = ({ pokemon, openDetails }) => {
	return (
		<Card sx={{ maxWidth: 250, width: '100%' }}>
			<CardContent>
				<div
					className={'pokemonCardHeaderContent'}
					style={{background: `${pokemon.types[0] ? pokemonColors[pokemon.types[0].type.name] + '9e': ''} `}}
				>
					<Typography gutterBottom variant="h5" component="div" mt={'20px'}>
						{pokemon.name}
					</Typography>

					<div className={'pokemonCardMediaWrap'} style={{borderColor: `${pokemon.types[0] ? pokemonColors[pokemon.types[0].type.name] : ''}`}}>
						<img
							height={70}
							src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg?w=164&h=164&fit=crop&auto=format`}
							srcSet={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
							alt={pokemon.name}
							loading="lazy"
						/>
					</div>
				</div>

				<div className={'pokemonCardMain'}>
					<div className={'pokemonCardMainContent'}>
						<div className={'pokemonCardBadgeWrap'}>
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