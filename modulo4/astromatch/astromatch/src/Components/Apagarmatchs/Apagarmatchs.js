import axios from 'axios'
import React from 'react'

function Apagarmatchs() {
	const onClickApagarMatch = () => {
		axios
			.put(
				'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-personhttps://us-central1-missao-newton.cloudfunctions.net/astroMatch/alan/choose-person'
			)
			.then((response) => {})
	}
	return (
		<div>
			<button onClick={onClickApagarMatch}>Apagar Matchs</button>
		</div>
	)
}

export default Apagarmatchs
