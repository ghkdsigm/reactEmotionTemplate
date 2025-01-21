import styled from '@emotion/styled'

const LogoContainer = styled.div`
	display: flex;
	align-items: center;

	img {
		max-width: 90px;
		height: 20px;
		cursor: pointer;
	}
	div {
		color: #262626;
		font-size: 0.8rem;
		border: 1px solid #e6e6e6;
		padding: 5px 10px;
		margin-left: 8px;
		border-radius: 55px;
	}
`

const CommonFooter = () => {
	return (
		<LogoContainer>
			<img
				src="/src/assets/logo.svg"
				alt="로고"
			/>
			<div>S&OP 수량 예측</div>
		</LogoContainer>
	)
}

export default CommonFooter
