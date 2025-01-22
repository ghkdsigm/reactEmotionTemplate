/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { Board, BoardSearch, BoardContents } from '@/components/mdf/index'

const Container = styled.div``

const BoardContainer = styled.div``

const Inner = styled.div`
	max-width: 1280px;
	margin: 0 auto;
	padding: 0 1rem 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	color: white;
	padding: 40px 0;
`

const BoardTop = styled.div`
	background-color: rgba(38, 38, 38, 1);
`
function Home() {
	return (
		<Container>
			<BoardContainer>
				<BoardTop>
					<Inner>
						<div style={{ marginBottom: '40px' }}>
							<BoardSearch />
						</div>
						<Board />
					</Inner>
				</BoardTop>
				<Inner>
					<BoardContents />
				</Inner>
			</BoardContainer>
		</Container>
	)
}

Home.layout = 'DefaultLayout'

export default Home
