import React, { useState } from 'react'
import './select01.css'

const CustomSelect = ({ options, selectedOptions, onSelect }) => {
	const [isOpen, setIsOpen] = useState(false)

	// 마지막 선택된 값과 나머지 개수 계산
	const getSelectDisplayValue = () => {
		//const lastSelected = selectedOptions[selectedOptions.length - 1]
		const lastSelected = '주요 영향인자 분석'
		const remainingCount = selectedOptions.length - 1

		if (!lastSelected) {
			return '선택'
		}

		return (
			<>
				{lastSelected}
				{remainingCount > 0 && (
					<span
						style={{
							marginLeft: '4px',
							color: '#fff',
							fontWeight: 'bold',
							backgroundColor: 'red',
							borderRadius: '12px',
							width: '34px',
							height: '22px',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							textDecoration: 'none',
						}}
					>
						+{remainingCount + 1}
					</span>
				)}
			</>
		)
	}

	// 항목 클릭 시 선택
	const handleOptionClick = option => {
		onSelect(option)
		setIsOpen(false)
	}

	return (
		<div className="custom-select-wrapper">
			{/* 드롭다운 헤더 */}
			<div
				className="custom-select-header"
				onClick={() => setIsOpen(!isOpen)}
			>
				{getSelectDisplayValue()}
			</div>

			{/* 드롭다운 리스트 */}
			{isOpen && (
				<ul className="custom-select-list">
					{options.map((option, index) => (
						<li
							key={index}
							className="custom-select-item"
							onClick={() => handleOptionClick(option)}
						>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default CustomSelect
