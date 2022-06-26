import React from 'react'
import Styled from 'styled-components'
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Botoes = Styled.section`
	display: grid;
	grid-auto-flow: column;
	gap: 16px;
	text-decoration: none;
	a {
		text-decoration: none;
	}
`

const HomePage = () => {
	return (
		<div>
			<Typography variant='h2' align={'center'} color={'purple'} gutterBottom>
				Viage com a Labex
			</Typography>
			<Botoes>
				<Link to={'/login'}>
					<Button variant={'contained'} color={'secondary'}>
						Login
					</Button>
				</Link>
				<Link to={'/inscricao'}>
					<Button variant={'contained'} color={'secondary'}>
						Gerenciar viagens
					</Button>
				</Link>
			</Botoes>
		</div>
	)
}

export default HomePage
