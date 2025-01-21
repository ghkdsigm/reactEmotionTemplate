import React from 'react'
import styled from '@emotion/styled'
import Header from '../components/common/Header.jsx'

const Main = styled.main`
	padding: 2rem;
	background-color: #e3f2fd;
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
