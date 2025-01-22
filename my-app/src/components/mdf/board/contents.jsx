import styled from '@emotion/styled'
import { box01, box02 } from '@/styles/common'
import { useState } from 'react'
import { CustomSelect } from '@/components/common/index'

const Section = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 20px;
	width: 100%;
`

const SummaryInfo = styled.div`
	width: 733px;
	> .box {
		${box01}
		margin-bottom:25px;
		&:nth-of-type(1) {
			.header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				strong {
					color: #00b0b9;
					font-weight: 700;
				}
				span {
					font-size: 0.8rem;
					color: #262626;
				}
			}
			.content {
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
				font-size: 0.8rem;
				margin-top: 4px;
			}
		}
		&:nth-of-type(2) {
			.header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 20px;
				strong {
					color: ##262626;
					font-weight: 700;
					font-size: 20px;
				}
				span {
					font-size: 0.8rem;
					color: #262626;
				}
			}
			.content {
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
			}
		}
	}
`

const AnalysisInfo = styled.div`
	flex: 1;
	min-width: 400px;
	> .box {
		${box02}
		margin-bottom: 25px;
		&:nth-of-type(1) {
			display: block;
			justify-content: space-between;
			align-items: center;

			select {
				width: 70%;
				padding: 8px;
				border: 1px solid #ccc;
				border-radius: 4px;
			}

			span {
				cursor: pointer;
				color: #007bff;
				text-decoration: none;
			}

			/* 선택된 플래그 리스트 */
			.selected-items {
				display: flex;
				flex-wrap: wrap;
				gap: 8px;

				.flag {
					display: flex;
					align-items: center;
					padding: 6px 12px;
					background-color: #fff;
					border: 1px solid #ccc;
					border-radius: 100px;

					span {
						margin-right: 8px;
						color: #262626;
					}

					.button-remove {
						width: 18px;
						height: 18px;
						display: flex;
						align-items: center;
						justify-content: center;
						cursor: pointer;
						background-color: #555555;
						color: #fff;
						border-radius: 100px;
						font-weight: bold;
						font-size: 1rem;
					}
				}
			}

			button {
				padding: 0;
				margin: 0;
				font-size: 0.8rem;
				&:hover {
					border: 1px solid transparent;
				}
			}
		}

		&:nth-of-type(2) {
		}
	}
`

const BoardContents = () => {
	const [selectedOptions, setSelectedOptions] = useState([])

	const options = ['항목 1', '항목 2', '항목 3', '항목 4', '항목 5']

	// 옵션 선택
	const handleSelectChange = value => {
		if (value && !selectedOptions.includes(value)) {
			setSelectedOptions([...selectedOptions, value])
		}
	}

	// 초기화
	const handleReset = () => {
		setSelectedOptions([])
	}

	// 옵션 제거
	const handleRemove = option => {
		setSelectedOptions(selectedOptions.filter(item => item !== option))
	}

	// 마지막 선택된 항목과 추가 항목 개수 계산
	const getSelectDisplayValue = () => {
		const lastSelected = selectedOptions[selectedOptions.length - 1]
		const remainingCount = selectedOptions.length - 1

		if (!lastSelected) {
			return '선택'
		}

		return (
			<>
				{lastSelected}
				{remainingCount > 0 && (
					<span style={{ marginLeft: '4px', color: '#ff4d4f', fontWeight: 'bold', backgroundColor: 'red' }}>
						+{remainingCount}
					</span>
				)}
			</>
		)
	}

	return (
		<>
			<Section>
				<SummaryInfo>
					<div className="box">
						<div className="header">
							<strong>예측 결과 요약</strong>
							<span>더보기</span>
						</div>
						<p className="content">
							완만한 상승세를 보일 가능성이 있음. 특히 부동산 및 주택 시장 소비 심리지수가 긍정적인 으로
							움직이는 상황에서 MDF 또한 비슷하게 움직일 가능성이 높음. 하지만 금리 및 정책 변화 등
							불확실성이 존재할 수 있음 더 길어지면 줄임말 표시{' '}
						</p>
					</div>
					<div className="box">
						<div className="header">
							<strong>보드 예측 결과</strong>
							<span>상세보기</span>
						</div>
						<div className="content">
							{/* 차트영역 */}
							<div style={{ width: '100%', height: '300px', backgroundColor: '#ebe3f5' }}></div>
						</div>
					</div>
				</SummaryInfo>
				<AnalysisInfo>
					<div className="box">
						<div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
							<CustomSelect
								options={options}
								selectedOptions={selectedOptions}
								onSelect={handleSelectChange}
							/>
							<button onClick={handleReset}>
								<img
									src="src/assets/mdf/ico_refresh.svg"
									alt="초기화"
								/>{' '}
								초기화
							</button>
						</div>

						<div>
							<div
								className="selected-items"
								style={{
									marginTop: selectedOptions.length === 0 ? '0' : '15px',
								}}
							>
								{selectedOptions.map(option => (
									<div
										className="flag"
										key={option}
									>
										<span>{option}</span>
										<span
											className="button-remove"
											onClick={() => handleRemove(option)}
										>
											x
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="box"></div>
				</AnalysisInfo>
			</Section>
		</>
	)
}

export default BoardContents
