// 3자리마다 콤마를 추가하는 함수
export const formatNumberWithComma = num => {
	if (isNaN(num)) return num // 숫자가 아닌 값일 경우 원래 값 반환
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
