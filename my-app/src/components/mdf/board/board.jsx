import styled from '@emotion/styled'
import { CardBox } from '@/components/common/index'

const Search = styled.div`
	display: flex;
`

const SearchResult = styled.div`
	display: flex;
	justify-content: space-between;
`

const Board = () => {
	const content1 = { value: 36209, accuracy: 150 }
	const content2 = { value: 46209, accuracy: null }
	const content3 = [
		'동행종합지수_변동량',
		'주택매매시장소비심리지수',
		'부동산시장소비심리지수 변동량1',
		'부동산시장소비심리지수 변동량2',
	]

	return (
		<>
			<Search />
			<SearchResult>
				<CardBox
					title="이달의 MDF 예측"
					ico="ico_bar_graph01"
					subTit01="예측값"
					subTit02="정확도"
					content={content1}
					type="section"
					more={false}
				></CardBox>
				<CardBox
					title="이달의 예측오차"
					ico="ico_bar_graph02"
					content={content2}
					type="section"
					more={false}
				></CardBox>
				<CardBox
					title="이달의 영향인자 Top3"
					ico="ico_bar_graph03"
					content={content3}
					type="list"
					more={true}
				></CardBox>
			</SearchResult>
		</>
	)
}

export default Board
