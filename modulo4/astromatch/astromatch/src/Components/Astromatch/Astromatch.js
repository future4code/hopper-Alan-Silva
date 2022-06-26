import React, { useState } from 'react'
import BarraDasPags from '../BarraDasPags/BarraDasPags'
import EncontrarPessoas from '../EncontrarPessoas/EncontrarPessoas'
import ListaDeMatchs from '../ListaDeMatchs/ListaDeMatchs'
import styled from 'styled-components'

const AstroMatchContainer = styled.div`
	border: 4px solid purple;
	border-radius: 3px;
	margin: 30px;
	width: 400px;
	height: 600px;
	display: flex;
	flex-direction: column;
`

function Astromatch() {
	const [escolherPag, setescolherpag] = useState('trocarDePag')

	const funEscolherPag = () => {
		switch (escolherPag) {
			case 'trocarDePag':
				return <EncontrarPessoas />
			case 'listaDeMatchs':
				return <ListaDeMatchs />
			default:
				return <EncontrarPessoas />
		}
	}

	const botaoParaEncontrarPessoas = () => {
		setescolherpag('trocarDePag')
	}
	const botaoParaListaDeMatchs = () => {
		setescolherpag('listaDeMatchs')
	}

	return (
		<AstroMatchContainer>
			<BarraDasPags
				botaoParaEncontrarPessoas={botaoParaEncontrarPessoas}
				botaoParaListaDeMatchs={botaoParaListaDeMatchs}
			/>
			{funEscolherPag()}
		</AstroMatchContainer>
	)
}

export default Astromatch
