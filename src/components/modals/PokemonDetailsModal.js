import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../../store/slice/modalSlice'
import { useEffect, useState } from 'react'
import { getPokemonSpaces } from '../../api/PokemonApi'
import '../../assets/modal/pokemonDetails.scss'
import { setPokemon } from '../../store/slice/pokemonDetailsSlice'

const style = {
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: 4,
}

const PokemonDetailsModal = () => {
	const [species, setSpecies] = useState({})
	const isOpen = useSelector(state => state.modal.pokemonDetailsModal)
	const pokemon = useSelector(state => state.pokemonDetails.currentPokemon)
	const dispatch = useDispatch()

	const handleClose = () => {
		dispatch(openModal({ type: 'pokemonDetailsModal', value: false }))
		dispatch(setPokemon({}))
	}

	const getSpecies = async (id) => {
		try {
			const data = await getPokemonSpaces(id)
			setSpecies(data)
		} catch (e) {
			setSpecies({})
		}
	}

	useEffect(() => {
		if (isOpen) {
			getSpecies(pokemon.id)
		}

	}, [isOpen])

	return (
		<Modal
			keepMounted
			open={isOpen}
			onClose={handleClose}
			aria-labelledby="keep-mounted-modal-title"
			aria-describedby="keep-mounted-modal-description"
		>
			<Box sx={style} className="details-modal">
				<div>
					<Typography variant="h6" component="h2" className="details-modal__title" mb={'20px'}>
						{pokemon.name}
					</Typography>

					<img
						height={100}
						src={pokemon.name ? `https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`: ''}
						alt={pokemon.name}
						loading="lazy"
					/>
				</div>

				<div className="details-modal__info">
					<Typography variant="body2" color="text.secondary" mt={'5px'}>
						Happiness - {species.base_happiness}
					</Typography>

					<Typography variant="body2" color="text.secondary" mt={'5px'}>
						Capture rate - {species.capture_rate}
					</Typography>

					<Typography variant="body2" color="text.secondary" mt={'5px'}>
						Evolves from - {species?.evolves_from_species?.name}
					</Typography>

					<Typography variant="body2" color="text.secondary" mt={'5px'}>
						Legendary - {species.is_legendary ? 'YES' : 'NO'}
					</Typography>

					<Typography variant="body2" color="text.secondary" mt={'5px'}>
						Baby - {species.is_baby ? 'YES' : 'NO'}
					</Typography>
				</div>
			</Box>
		</Modal>
	)
}

export default PokemonDetailsModal