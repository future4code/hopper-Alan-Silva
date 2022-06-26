import React, { useState, useEffect } from 'react'
import BotoesDeMatch from './BotoesDeMatch'
import CardDosParceiros from './CardDosParceiros'
import axios from 'axios'

function EncontrarPessoas() {
	const [perfilDoUsuario, setperfilDoUsuario] = useState({})

	const funGetperfilDoUsuario = () => {
		axios
			.get(
				'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alan/person'
			)
			.then((response) => {
				setperfilDoUsuario(response.data.profile)
			})
	}

	const funSim = (choice) => {
		const body = {
			id: perfilDoUsuario.id,
			choice: false,
		}
		axios
			.post(
				'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alan/choose-person',
				body
			)
			.then((response) => {
				funGetperfilDoUsuario()
			})
	}

	useEffect(() => {
		funGetperfilDoUsuario()
	}, [])

	const onClickNaoMatch = () => {
		funSim(false)
	}
	const onClickMatch = () => {
		funSim(true)
	}

	return (
		<div>
			<CardDosParceiros perfil={perfilDoUsuario} />
			<BotoesDeMatch
				onClickNaoMatch={onClickNaoMatch}
				onClickMatch={onClickMatch}
			/>
		</div>
	)
}

export default EncontrarPessoas
