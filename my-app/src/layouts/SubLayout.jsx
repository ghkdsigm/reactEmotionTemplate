import styled from '@emotion/styled'
import Header from '@/components/layout/header.jsx'

const Main = styled.main`
	// padding: 2rem;
	// background-color: #f0f8ff;
`

function SubLayout({ children }) {
	return (
		<div>
			<Header />
			<Main>{children}</Main>
		</div>
	)
}

export default SubLayout
