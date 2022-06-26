import { Button, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'

const ContainerLista = Styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
const Botoes = Styled.section`
	a {
		text-decoration: none;
	}
`

const ListTripsPage = () => {
	return (
		<ContainerLista>
			<Typography variant='h2' align={'center'} gutterBotom>
				Lista de Viagens
			</Typography>

			<List component='nav' arial-label='secondary mailbox folders'>
				<Botoes>
					<Link to={'/viagens/detalhes'}>
						<ListItem button>
							<ListItemText primary='viagem' />
						</ListItem>
					</Link>
				</Botoes>
				<Botoes>
					<Link to={'/viagens/detalhes'}>
						<ListItem button>
							<ListItemText primary='viagem 2' />
						</ListItem>
					</Link>
				</Botoes>
			</List>
			<Botoes>
				<Link to={'/viagens/criar-viagens'}>
					<Button variant={'contained'} color={'secondary'}>
						Criar viagens
					</Button>
				</Link>
			</Botoes>
		</ContainerLista>
	)
}

export default ListTripsPage
