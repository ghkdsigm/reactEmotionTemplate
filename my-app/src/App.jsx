import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/MainLayout.jsx'
import SubLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import User from './pages/User.jsx'
import styled from '@emotion/styled'

const AppContainer = styled.div`
	font-family: 'Pretendard', sans-serif;
	background-color: #fff;
	min-height: 100vh;
	width: 100vw;
	margin: 0;
	padding: 0;
`

function App() {
	const layouts = {
		DefaultLayout,
		SubLayout,
	}

	const getLayout = Component => {
		const DefaultLayout = layouts[Component.layout] || React.Fragment
		// eslint-disable-next-line react/display-name
		return props => (
			<DefaultLayout>
				<Component {...props} />
			</DefaultLayout>
		)
	}

	return (
		<Router>
			<AppContainer>
				<Routes>
					<Route
						path="/"
						element={getLayout(Home)()}
					/>
					<Route
						path="/about"
						element={getLayout(About)()}
					/>
					<Route
						path="/user/:id"
						element={getLayout(User)()}
					/>
				</Routes>
			</AppContainer>
		</Router>
	)
}

export default App
