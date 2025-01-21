import styled from '@emotion/styled'
import Header from '@/components/layout/header.jsx'
import Footer from '@/components/layout/footer.jsx'

const LayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`

const Main = styled.main`
	width: 100%;
	flex: 1;
	overflow-y: auto;
	background-color: #fff;
`

function MainLayout({ children }) {
	return (
		<LayoutContainer>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</LayoutContainer>
	)
}

export default MainLayout
