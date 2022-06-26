import React, { useState, useEffect } from 'react'
import ListaComOsMatchs from './ListaComOsMatchs'
import styled from 'styled-components'
import axios from 'axios'

const ListaContainer = styled.div`
	padding: 8px;
`

function ListaDeMatchs() {
	const [matchsDoUsuario, setmatchsDoUsuario] = useState([])

	useEffect(() => {
		axios
			.get(
				'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alan/matches'
			)
			.then((response) => {
				setmatchsDoUsuario(response.data.matches)
			})
	}, [])

	return (
		<ListaContainer>
			{matchsDoUsuario.map((perfil) => {
				return <ListaComOsMatchs perfil={perfil} />
			})}
		</ListaContainer>
	)
}

export default ListaDeMatchs
