import { AppBar, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'
import PokemonHeader from '../components/PokemonHeader'

function MainLayout () {
	return (
		<div className="MainLayout">
			<PokemonHeader />

			<Outlet />
		</div>
	)
}

export default MainLayout
