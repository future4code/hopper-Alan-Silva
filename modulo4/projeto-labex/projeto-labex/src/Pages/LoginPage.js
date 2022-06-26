import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'

const ContainerFormulario = styled.section`
	display: grid;
`

const LoginPage = () => {
	const [formulario, setformulario] = useState({
		email: '',
		senha: '',
	})

	const botaoLoginEnviar = (event) => {
		event.preventDefault()

		const body = {
			email: formulario.email,
			password: formulario.senha,
		}
		axios
			.post(
				`https://us-central1-labenu-apis.cloudfunctions.net/labeX/alan-hopper/login
		`,
				body
			)
			.then((response) => {
				window.localStorage.setItem('token', response.data.token)
			})
	}

	const onChangeInput = (event) => {
		const novoValor = event.target.value
		const names = event.target.name
		setformulario({ ...formulario, [names]: novoValor })
	}

	return (
		<div>
			<Typography variant='h2' align={'center'} color={'purple'} gutterBottom>
				Bem vindo ao Labex
			</Typography>
			<ContainerFormulario onSubmit={botaoLoginEnviar}>
				<TextField
					label={'Email'}
					type={'email'}
					onChangeInput={onChangeInput}
					value={formulario['email']}
					name={'email'}
				></TextField>
				<TextField
					label={'Senha'}
					type={'password'}
					onChangeInput={onChangeInput}
					value={formulario['password']}
					name={'password'}
				></TextField>
				<Button type={'submit'} variant={'contained'} color={'secondary'}>
					Login
				</Button>
			</ContainerFormulario>
		</div>
	)
}

export default LoginPage
