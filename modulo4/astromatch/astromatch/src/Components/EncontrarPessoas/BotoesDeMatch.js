import React from 'react'
import styled from 'styled-components'

const BotoesContainer = styled.div`
	display: flex;
	justify-content: space-around;
`

export default function BotoesDeMatch(props) {
	return (
		<BotoesContainer>
			<button onClick={props.onClickMatch}>Match</button>
			<button onClick={props.onClickNaoMatch}>Não Match</button>
		</BotoesContainer>
	)
}
