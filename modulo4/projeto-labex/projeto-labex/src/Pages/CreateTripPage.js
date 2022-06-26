import styled from 'styled-components'
import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const ContainerFormulario = styled.section`
	display: grid;
`

const CreateTripPage = () => {
	return (
		<div>
			<Typography variant='h2' align={'center'} color={'purple'} gutterBottom>
				Criar viagem
			</Typography>
			<ContainerFormulario>
				<TextField label={'Nome'} />
				<TextField label={'Descrição'} />
				<TextField label={'Planeta'} />
				<TextField label={'Data'} />
				<TextField label={'Duração da viagem'} type={'number'} />
				<Button type={'submit'} variant={'contained'} color={'secondary'}>
					Criar
				</Button>
			</ContainerFormulario>
		</div>
	)
}

export default CreateTripPage
