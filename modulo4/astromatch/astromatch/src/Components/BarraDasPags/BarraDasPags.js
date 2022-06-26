import React from 'react'
import styled from 'styled-components'

const BarraContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 9px;
	border-bottom: 1px solid #ccc;
	background-color: purple;
`

function BarraDasPags(props) {
	return (
		<BarraContainer>
			<button onClick={'props.botaoParaEncontrarPessoas'}>
				escolher matchs
			</button>
			<h2>AstroMatch</h2>
			<button onClick={'props.botaoParaListaDeMatchs'}>Seus matchs</button>
		</BarraContainer>
	)
}

export default BarraDasPags
