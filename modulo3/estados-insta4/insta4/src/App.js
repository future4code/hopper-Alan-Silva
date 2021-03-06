import React from 'react'
import styled from 'styled-components'
import Post from './components/Post/Post'

const MainContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`
class PostComponent extends React.Component {
	render() {
		return (
			<Post>
				{this.props.nomeUsuario}
				{this.props.fotoUsuario}
				{this.props.fotoPost}
			</Post>
		)
	}
}
class App extends React.Component {
	state = {
		posts: [
			{
				nomeUsuario: 'Paulinha',
				fotoUsuario: 'https://picsum.photos/50/50',
				fotoPost: 'https://picsum.photos/200/150',
			},
			{
				nomeUsuario: 'Alan',
				fotoUsuario: 'https://picsum.photos/40/40',
				fotoPost: 'https://picsum.photos/200/150',
			},
			{
				nomeUsuario: 'Darth Vader',
				fotoUsuario: 'https://picsum.photos/30/30',
				fotoPost: 'https://picsum.photos/200/160',
			},
			{
				nomeUsuario: 'Luke skywalker',
				fotoUsuario: 'https://picsum.photos/20/20',
				fotoPost: 'https://picsum.photos/200/165',
			},
		],
	}
	render() {
		return (
			<MainContainer>
				{this.state.posts.map((post, indice) => {
					return (
						<PostComponent
							key={indice}
							nomeUsuario={post.nomeUsuario}
							fotoUsuario={post.fotoUsuario}
							fotoPost={post.fotoPost}
						/>
					)
				})}
			</MainContainer>
		)
	}
	// render() {
	// 	return (
	// 		<MainContainer>
	// 			<Post
	// 				nomeUsuario={'Paulinha'}
	// 				fotoUsuario={'https://picsum.photos/50/50'}
	// 				fotoPost={'https://picsum.photos/200/155'}
	// 			/>
	// 			<Post
	// 				nomeUsuario={'Alan'}
	// 				fotoUsuario={'https://picsum.photos/40/40'}
	// 				fotoPost={'https://picsum.photos/200/150'}
	// 			/>
	// 			<Post
	// 				nomeUsuario={'Darth Vader'}
	// 				fotoUsuario={'https://picsum.photos/30/30'}
	// 				fotoPost={'https://picsum.photos/200/160'}
	// 			/>
	// 			<Post
	// 				nomeUsuario={'Luke skywalker'}
	// 				fotoUsuario={'https://picsum.photos/20/20'}
	// 				fotoPost={'https://picsum.photos/200/165'}
	// 			/>
	// 		</MainContainer>
	// 	)
	// }
}

export default App
