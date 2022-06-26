import { Typography } from '@mui/material'
import React from 'react'

const ComponentInfoViagens = (props) => {
	return (
		<Typography variant={'subtitle2'}>
			<strong>{props.informacaoDaViagem}</strong>:{props.informacao}
		</Typography>
	)
}
export default ComponentInfoViagens
