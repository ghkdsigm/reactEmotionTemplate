import React from 'react'
import styled from '@emotion/styled'
import Header from '../components/common/Header'

const Main = styled.main`
	padding: 2rem;
	background-color: #e3f2fd; /* 서브 레이아웃 2 배경 */
`

function SubLayout2({ children }) {
	return (
		<div>
			<Header />
			<Main>{children}</Main>
		</div>
	)
}

export default SubLayout2
