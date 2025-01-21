import styled from '@emotion/styled'

const FooterContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 1rem 2rem;
	display: flex;
	align-items: center;
	color: white;
	background-color: #f8f8f8;
	img {
		max-width: 90px;
		height: 20px;
		cursor: pointer;
	}
	div {
		color: #000;
		background: #fff;
		font-size: 0.8rem;
		border: 1px solid #fff;
		padding: 5px 10px;
		margin-left: 8px;
		border-radius: 55px;
	}
`

const CommonLogo = () => {
	return (
		<FooterContainer>
			<img
				src="/src/assets/logo.svg"
				alt="로고"
			/>
			<div>보드 수량 예측 결과</div>
		</FooterContainer>
	)
}

export default CommonLogo
