import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/MainLayout' // Layout 컴포넌트
import SubLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import User from './pages/User' // 동적 라우팅을 사용할 User 컴포넌트

import styled from '@emotion/styled'

// 레이아웃 매핑
const layouts = {
	DefaultLayout,
	SubLayout,
}

// App 컴포넌트 스타일 추가 (필요한 경우)
const AppContainer = styled.div`
	font-family: Arial, sans-serif;
	background-color: #f0f0f0;
	min-height: 100vh;
`

function App() {
	const getLayout = Component => {
		const DefaultLayout = layouts[Component.layout] || React.Fragment
		return props => (
			<DefaultLayout>
				<Component {...props} />
			</DefaultLayout>
		)
	}

	return (
		<Router>
			<AppContainer>
				<DefaultLayout>
					{' '}
					{/* 전체 레이아웃을 감싸는 컴포넌트 */}
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
						/>{' '}
						{/* 동적 라우팅 */}
					</Routes>
				</DefaultLayout>
			</AppContainer>
		</Router>
	)
}

export default App
