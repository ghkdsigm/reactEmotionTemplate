import styled from '@emotion/styled'
import { Board, BoardSearch } from '@/components/mdf/index'

const Container = styled.div`
	background-color: rgba(38, 38, 38, 1);
`

const Paragraph = styled.p`
	font-size: 1.2rem;
`

const BoardContainer = styled.div`
	max-width: 1280px;
	margin: 0 auto;
	padding: 0 1rem 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	color: white;
	padding: 40px 0;
`

function Home() {
	return (
		<Container>
			<BoardContainer>
				<div style={{ marginBottom: '40px' }}>
					<BoardSearch />
				</div>
				<Board />
			</BoardContainer>
			<Paragraph>test!</Paragraph>
		</Container>
	)
}

Home.layout = 'DefaultLayout'

export default Home
