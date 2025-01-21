import React from 'react'
import styled from '@emotion/styled'
import { formatNumberWithComma } from '@/utils/common'

const CardContainer = styled.div`
	width: 350px;
	height: 130px;
	background: rgba(255, 255, 255, 0.1);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.2);
	box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.87);
	overflow: hidden;
	padding: 25px;
	flex-direction: column;
	display: flex;
	justify-content: space-between;
`

const CardHeader = styled.div`
	font-size: 1.1rem;
	font-weight: bold;
	text-align: center;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: rgba(210, 255, 231, 1);
`

const More = styled.span`
	color: #fff;
	font-size: 0.8rem;
`

const CardBody = styled.div`
	display: flex;
	gap: 0;
`

const LeftSection = styled.div`
	flex: 1;
	border-radius: 5px 0 0 5px;
	text-align: center;
`

const RightSection = styled.div`
	flex: 1;
	border-radius: 0 5px 5px 0;
	text-align: center;
`
const ListSection = styled.div`
	flex: 1;
	border-radius: 0 5px 5px 0;
	text-align: center;
`

const Divider = styled.div`
	width: 2px;
	background-color: #d9d9d9;
	margin: 0 15px;
`

const Num = styled.span`
	color: #262626;
	background-color: #fff;
	width: 24px;
	height: 24px;
	border-radius: 99px;
	display: inline-block;
	margin-right: 8px;
	font-weight: 600;
`

const SubTit = styled.p`
	color: rgba(38, 38, 38, 1);
	padding: 8px;
	border-radius: 99px;
	font-weight: 700;
	font-size: 1rem;
	background-color: #fff;
`

const Card = ({ title, content, more, type, subTit01, subTit02, ico }) => {
	return (
		<CardContainer>
			<CardHeader>
				<span style={{ display: 'flex' }}>
					<img
						src={`src/assets/mdf/${ico}.svg`}
						alt={ico || 'default-icon'}
					/>
					<span style={{ marginLeft: '10px' }}>{title}</span>
				</span>
				{more && <More>더보기</More>}
			</CardHeader>

			{type === 'section' ? (
				<>
					<CardBody>
						{content ? (
							<>
								<LeftSection>
									<SubTit>{subTit01 || new Date().toLocaleString('ko-KR', { month: 'long' })}</SubTit>{' '}
									{content['value'] ? formatNumberWithComma(content['value']) : '업데이트예정'}
								</LeftSection>
								<Divider />
								<RightSection>
									<SubTit>
										{subTit02 ||
											new Date(new Date().setMonth(new Date().getMonth() + 1)).toLocaleString(
												'ko-KR',
												{ month: 'long' },
											)}
									</SubTit>{' '}
									{content['accuracy'] ? formatNumberWithComma(content['accuracy']) : '업데이트예정'}
								</RightSection>
							</>
						) : (
							<div>에러가 발생하였습니다.</div>
						)}
					</CardBody>
				</>
			) : (
				<>
					<CardBody>
						<ListSection>
							{content.slice(0, 3).map((item, idx) => (
								<div
									key={idx}
									style={{ height: '30px' }}
								>
									<Num>{idx + 1}</Num>
									{item}
								</div>
							))}
						</ListSection>
					</CardBody>
				</>
			)}
		</CardContainer>
	)
}

export default Card
