import React from 'react'
import styled from '@emotion/styled'
import Header from '../components/layout/Header'

const Main = styled.main`
	padding: 2rem;
	background-color: #f0f8ff; /* 메인 페이지 배경 */
`

function MainLayout({ children }) {
	return (
		<div>
			<Header />
			<Main>{children}</Main>
		</div>
	)
}

export default MainLayout
