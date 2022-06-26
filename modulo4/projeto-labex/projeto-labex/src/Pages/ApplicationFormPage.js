import styled from 'styled-components'
import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ContainerFormulario = styled.section`
	display: grid;
	gap: 10px;
	.styledSelect {
		padding: 20px;
	}
`
const ApplicationFormPage = () => {
	const [viagens, setViagens] = useState([])
	const [formulario, setformulario] = useState({
		nome: '',
		idade: 0,
		descricaoDoCandidato: '',
		profissao: '',
		paises: '',
		viagem: null,
	})

	const onChangeInput = (event) => {
		const novoValor = event.target.value
		const names = event.target.name
		setformulario({ ...formulario, [names]: novoValor })
	}

	useEffect(() => {
		axios
			.get(
				'https://us-central1-labenu-apis.cloudfunctions.net/labeX/alan-hopper/trips'
			)
			.then((response) => {
				console.log(response.data)
				setViagens(response.data.trips)
			})
	}, [])

	const botaoEnviarApi = (event) => {
		event.preventDevault()
		const body = {
			name: formulario.name,
			age: formulario.idade,
			applicationText: formulario.descricaoDoCandidato,
			profession: formulario.profissao,
			country: formulario.paises,
		}
		axios.post(
			`https://us-central1-labenu-apis.cloudfunctions.net/labeX/alan-hopper/trips/${formulario.trip.id}/apply
		`,
			body
		)
	}

	return (
		<div>
			<Typography variant='h2' align={'center'} color={'purple'} gutterBottom>
				Inscreva - se
			</Typography>
			<ContainerFormulario onSubmit={botaoEnviarApi}>
				<TextField
					label={'Nome'}
					onChange={onChangeInput}
					value={formulario['name']}
					name={'name'}
				/>
				<TextField
					label={'Idade'}
					type={'number'}
					onChange={onChangeInput}
					value={formulario['idade']}
					name={'idade'}
				/>
				<TextField
					label={'Fale um pouco sobre você'}
					onChange={onChangeInput}
					value={formulario['descricaoDoCandidato']}
					name={'descricaoDoCandidato'}
				/>
				<TextField
					label={'Profissão'}
					onChange={onChangeInput}
					value={formulario['profissao']}
					name={'profissao'}
				/>
				<FormControl>
					<InputLabel id='select-pais'>País</InputLabel>
					<Select
						labelId='select-paises'
						onChange={onChangeInput}
						value={formulario['paises']}
						name={'paises'}
					>
						<MenuItem className='styledSelect' value={'brasil'}>
							Brasil
						</MenuItem>
						<MenuItem className='styledSelect' value={'japao'}>
							Japão
						</MenuItem>
						<MenuItem className='styledSelect' value={'inglaterra'}>
							Inglaterra
						</MenuItem>
					</Select>
				</FormControl>
				<FormControl>
					<InputLabel id='select-planetas'>Escolha uma viagem</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						onChange={onChangeInput}
						value={formulario['viagem']}
						name={'viagem'}
					>
						{viagens.map((viagens) => {
							return (
								<MenuItem className='styledSelect' value={viagens}>
									{viagens.name}
								</MenuItem>
							)
						})}
					</Select>
				</FormControl>
				<Button type={'submit'} variant={'contained'} color={'secondary'}>
					Enviar
				</Button>
			</ContainerFormulario>
		</div>
	)
}

export default ApplicationFormPage
