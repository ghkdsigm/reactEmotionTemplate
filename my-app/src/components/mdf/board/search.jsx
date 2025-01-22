import styled from '@emotion/styled'
import { SelectBox } from '@/components/common/index'

const SearchContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	div {
		&:nth-of-type(1) {
			font-weight: 500;
			font-size: 1.2rem;
			//padding-left: 10px;
		}
		&:nth-of-type(2) {
			font-size: 0.8rem;
		}
	}
`

const BoardSearch = () => {
	const arr = [
		{
			value: '',
			title: '전체',
		},
		{
			value: 'item1',
			title: 'ITEM1',
		},
		{
			value: 'item2',
			title: 'ITEM2',
		},
	]
	const month = [
		{
			value: '11',
			title: '11',
		},
		{
			value: '22',
			title: '22',
		},
	]
	return (
		<SearchContainer>
			<div>
				<label
					htmlFor="product"
					style={{ marginRight: '10px', fontSize: '0.8rem' }}
				>
					제품
				</label>
				<SelectBox
					id="product"
					options={arr}
				/>

				<label
					htmlFor="month"
					style={{ margin: '0 10px', fontSize: '0.8rem' }}
				>
					기준월
				</label>
				<SelectBox
					id="month"
					options={month}
				/>
				<span style={{ marginLeft: '20px' }}>보드 수량 예측 결과입니다.</span>
			</div>
			<div>(2024 12월 ~ 25년 5월 월별 예측 예상)</div>
		</SearchContainer>
	)
}

export default BoardSearch
