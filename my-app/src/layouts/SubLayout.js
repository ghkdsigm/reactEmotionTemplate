import React from 'react'
import styled from '@emotion/styled'

const Main = styled.main`
	padding: 2rem;
	background-color: #fff8e1; /* 서브 레이아웃 1 배경 */
`

function SubLayout1({ children }) {
	return (
		<div>
			<Main>{children}</Main>
		</div>
	)
}

export default SubLayout1
