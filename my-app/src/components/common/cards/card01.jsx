import React from 'react'
import styled from '@emotion/styled'
import { formatNumberWithComma } from '@/utils/common'

const CardContainer = styled.div`
	width: 350px;
	height: 135px;
	background: rgba(255, 255, 255, 0.1);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.2);
	box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.87);
	overflow: hidden;
	padding: 20px 30px;
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
	font-weight: 100;
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
	width: 1px;
	height: 62px;
	top: 15px;
	background-color: #d9d9d9;
	margin: 0 15px;
	position: relative;
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
	padding: 5px 20px;
	border-radius: 99px;
	font-weight: 700;
	font-size: 1rem;
	background-color: #fff;
	width: auto;
	display: inline-block;
`

const SubContent = styled.p`
	font-size: ${props => (props.isEmpty ? '1.45rem' : '1rem')};
	font-weight: ${props => (props.isEmpty ? 'bold' : 'normal')};
	margin-top: 10px;
	height: 34px;
	display: flex;
	justify-content: center;
	align-items: center;
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
									<SubContent isEmpty={content['value']}>
										{content['value'] ? (
											<>
												{formatNumberWithComma(content['value'])}{' '}
												<em style={{ marginLeft: '5px' }}>m3</em>
											</>
										) : (
											'업데이트예정'
										)}
									</SubContent>
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
									<SubContent isEmpty={content['accuracy']}>
										{content['accuracy'] ? (
											<>
												{formatNumberWithComma(content['accuracy'])}{' '}
												<span style={{ marginLeft: '3px' }}>%</span>
												<span
													style={{ fontSize: '0.8rem', fontWeight: '400', marginLeft: '5px' }}
												>
													( 6383 m3 )
												</span>
											</>
										) : (
											'업데이트예정'
										)}
									</SubContent>
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
									style={{ height: '26px' }}
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
