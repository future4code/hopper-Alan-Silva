import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import ApplicationFormPage from './Pages/ApplicationFormPage'
import CreateTripPage from './Pages/CreateTripPage'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import TripDetailsPage from './Pages/TripDetailsPage'
import ListTripsPage from './Pages/ListTripsPage'

const AppContainerGeral = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
`

const App = () => {
	return (
		<AppContainerGeral>
			<BrowserRouter>
				<Routes>
					<Route path={'/'} element={<HomePage />} />
					<Route path={'/login'} element={<LoginPage />} />
					<Route path={'/inscricao'} element={<ApplicationFormPage />} />
					<Route path={'/viagens/criar-viagens'} element={<CreateTripPage />} />
					<Route path={'/viagens/detalhes'} element={<TripDetailsPage />} />
					<Route path={'/viagens/lista'} element={<ListTripsPage />} />
				</Routes>
			</BrowserRouter>
		</AppContainerGeral>
	)
}

export default App
