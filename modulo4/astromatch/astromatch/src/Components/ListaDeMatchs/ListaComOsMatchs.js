import React from 'react'
import styled from 'styled-components'

const MatchsContainer = styled.div`
	display: flex;
	align-items: center;
	border-bottom: 1px solid gray;
	:hover {
		background-color: purple;
	}
`
const ImagensDosMatchs = styled.img`
	border-radius: 50%;
	margin-right: 8px;
	height: 30px;
	width: 30px;
`

export default function ListaComOsMatchs(props) {
	const perfil = props.perfil
	return (
		<MatchsContainer>
			<ImagensDosMatchs src={perfil.photo} />
			<p>{perfil.name}</p>
		</MatchsContainer>
	)
}
