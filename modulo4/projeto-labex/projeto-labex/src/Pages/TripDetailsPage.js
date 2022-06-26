import React from 'react'
import {
	Typography,
	Card,
	CardContent,
	CssBaseline,
	List,
	ListItem,
	ListItemText,
	ListItemSecondaryAction,
	IconButton,
} from '@mui/material'
import Styled from 'styled-components'
import ComponentInfoViagens from './ComponentInfoViagens'
import CheckIcon from '@mui/icons-material/Check'
import DeleteIcon from '@mui/icons-material/Delete'

const ContainerInformacoes = Styled.div`
	display: grid;
	grid-auto-flow: colum;
	gap: 30px;
	grid-template-colum:1fr 1fr;`

const TripDetailsPage = () => {
	return (
		<div>
			<CssBaseline />
			<Typography variant='h2' align='center' color='purple' gutterBottom>
				Viagens
			</Typography>
			<ContainerInformacoes>
				<section>
					<Card>
						<CardContent>
							<Typography variant='h5' gutterBottom color='purple'>
								Lista de candidatos
							</Typography>
							<List>
								<ListItem>
									<ListItemText primary='Candidato a vaga' />
									<ListItemSecondaryAction>
										<IconButton>
											<CheckIcon />
										</IconButton>
										<IconButton>
											<DeleteIcon />
										</IconButton>
									</ListItemSecondaryAction>
								</ListItem>
							</List>
							<List>
								<ListItem>
									<ListItemText primary='Candidato a vaga' />
									<ListItemSecondaryAction>
										<IconButton>
											<CheckIcon />
										</IconButton>
										<IconButton>
											<DeleteIcon />
										</IconButton>
									</ListItemSecondaryAction>
								</ListItem>
							</List>
							<List>
								<ListItem>
									<ListItemText primary='Candidato a vaga' />
									<ListItemSecondaryAction>
										<IconButton>
											<CheckIcon />
										</IconButton>
										<IconButton>
											<DeleteIcon />
										</IconButton>
									</ListItemSecondaryAction>
								</ListItem>
							</List>
							<List>
								<ListItem>
									<ListItemText primary='Candidato a vaga' />
									<ListItemSecondaryAction>
										<IconButton>
											<CheckIcon />
										</IconButton>
										<IconButton>
											<DeleteIcon />
										</IconButton>
									</ListItemSecondaryAction>
								</ListItem>
							</List>
						</CardContent>
					</Card>
				</section>
				<section>
					<Card>
						<CardContent>
							<Typography variant='h5' color='purple' gutterBottom>
								Lista de viagens
							</Typography>
							<Typography>
								<ComponentInfoViagens
									informacaoDaViagem={'Nome'}
									informacao={'jupiter'}
								/>
								<ComponentInfoViagens
									informacaoDaViagem={'Planeta'}
									informacao={'jupiter'}
								/>
								<ComponentInfoViagens
									informacaoDaViagem={'Data'}
									informacao={'25/06/2022'}
								/>
								<ComponentInfoViagens
									informacaoDaViagem={'Descrição'}
									informacao={'jupiter é legal'}
								/>
								<ComponentInfoViagens
									informacaoDaViagem={'Duração em dias'}
									informacao={'60'}
								/>
							</Typography>
						</CardContent>
					</Card>
				</section>
			</ContainerInformacoes>
		</div>
	)
}

export default TripDetailsPage
