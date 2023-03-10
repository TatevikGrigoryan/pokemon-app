import { CircularProgress, Typography } from '@mui/material'
import PokemonCard from '../components/PokemonCard'
import { useEffect, useState } from 'react'
import { getPokemonByName, getPokemons } from '../api/PokemonApi'
import api from '../api/AxiosApi'
import '../assets/pokemonsList.scss'
import PokemonPagination from '../components/PokemonPagination'
import { useDispatch, useSelector } from 'react-redux'
import PokemonFilter from '../components/filter/PokemonFilter'
import PokemonDetailsModal from '../components/modals/PokemonDetailsModal'
import { openModal } from '../store/slice/modalSlice'
import { setPokemon } from '../store/slice/pokemonDetailsSlice'
import PokemonHeader from '../components/PokemonHeader'

const PokemonList = () => {
	const search = useSelector((state) => state.pokemons.search)
	const dispatch = useDispatch()
	const [pokemons, setPokemons] = useState([])
	const [filteredPokemons, setFilteredPokemons] = useState([])
	const [selectedTypes, setSelectedTypes] = useState([])
	const [loading, setLoading] = useState(false)
	const [page, setPage] = useState(1)
	const [perPage, setPerPage] = useState(10)
	const [total, setTotal] = useState(0)
	const perPageOption = [
		{ value: 10, name: 10 },
		{ value: 20, name: 20 },
		{ value: 50, name: 50 },
	]

	const loadPokemonByUrl = async (url) => {
		const response = await api.get(url)

		return response.data
	}

	const handleOpen = (pokemon) => {
		dispatch(openModal({type: 'pokemonDetailsModal', value: true }))
		dispatch(setPokemon(pokemon))
	}

	const getFilteredPokemons = (pokemons) => {
		if (selectedTypes.length) {
			return pokemons.filter(pokemon => pokemon.types.some(item => selectedTypes.includes(item.type.name)))
		}

		return pokemons
	}

	const loadPokemonsDetails = (data, response) => {
		let newPokemons = []

		data.forEach(async (item) => {
			newPokemons.push(await loadPokemonByUrl(item.url))

			if (data.length === newPokemons.length) {
				setPokemons(newPokemons)
				setFilteredPokemons(getFilteredPokemons(newPokemons))
				setTotal(response.count)
				setLoading(false)
			}
		})
	}

	const loadPokemon = async () => {
		setLoading(true)

		try {
			const data = await getPokemonByName(search)
			setPokemons([data])
		} catch (e) {
			setPokemons([])
		} finally {
			setLoading(false)
		}
	}

	const loadPokemons = async () => {
		setLoading(true)
		const data = await getPokemons(perPage, (page - 1) * perPage)
		loadPokemonsDetails(data.results, data)
	}

	useEffect(() => {
		if (search) {
			setFilteredPokemons(pokemons)
		} else {
			setFilteredPokemons(getFilteredPokemons(pokemons))
		}
	}, [selectedTypes, pokemons])

	useEffect(() => {
		if (!search) {
			loadPokemons()
		} else {
			loadPokemon()
		}

	}, [page, perPage, search])

	const renderLoading = () => {
		return (
			<div className="pokemon-list__no-pokemon">
				<CircularProgress color="primary" />
			</div>
		)
	}

	const handleSelect = (value, isChecked) => {
		if (isChecked) {
			setSelectedTypes([...selectedTypes, value])
		} else {
			setSelectedTypes(selectedTypes.filter(type => type !== value))
		}
	}

	const renderNoPokemon = () => {
		if (search) {
			return (
				<div className="pokemon-list__no-pokemon">
					<Typography color="text.secondary" >
						No pokemon found for name "{search}"
					</Typography>
				</div>
			)
		}

		return (
			<div className="pokemon-list__no-pokemon">
				<Typography color="text.secondary">No pokemon</Typography>
			</div>
		)
	}

	return (
		<>
			<PokemonHeader />

			<div className="pokemon-list">
				<PokemonFilter
					handleSelect={handleSelect}
					selectedTypes={selectedTypes}
				/>
				<div className="pokemon-list__main">
					{ !loading && !filteredPokemons.length && renderNoPokemon() }

					{ filteredPokemons.length > 0 && (
						<div className="pokemon-list__main__wrapper">
							<div className="pokemon-list__main__wrapper__cards">
								{ loading ? renderLoading() : (
									filteredPokemons.map((pokemon) => (
										<div key={pokemon.id}>
											<PokemonCard pokemon={pokemon} openDetails={handleOpen} />
										</div>
									)))}
							</div>

							<PokemonPagination
								count={total}
								page={page}
								perPage={perPage}
								handleChange={(event, value) => {setPage(value)}}
								changePerPage={(value) => {setPerPage(value.value)}}
								option={perPageOption}
								disable={search}
							/>
						</div>
					)}
				</div>

				<PokemonDetailsModal />
			</div>
		</>
	)
}

export default PokemonList