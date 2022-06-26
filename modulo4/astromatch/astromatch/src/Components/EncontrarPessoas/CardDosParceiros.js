import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
	margin: 16px;
	border: 4px solid purple;
`
const FotosDosUsuarios = styled.img`
	width: 100%;
	display: block;
	max-height: 350px;
`
const InformaçõesDosUsuarios = styled.div`
	padding: 0 16px;
`

export default function CardDosParceiros(props) {
	const perfil = props.perfil
	return (
		<CardContainer>
			<FotosDosUsuarios src={perfil.photo} />
			<InformaçõesDosUsuarios>
				<p>
					{perfil.name},{perfil.age}
				</p>
				<p>{perfil.bio}</p>
			</InformaçõesDosUsuarios>
		</CardContainer>
	)
}
