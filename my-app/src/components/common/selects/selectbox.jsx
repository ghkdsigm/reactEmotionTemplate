// src/components/SelectBox.jsx
import React from 'react'
import styled from '@emotion/styled'

// 셀렉트박스 스타일
const StyledSelect = styled.select`
	background-color: #3b3b3b;
	color: rgba(210, 255, 231, 1);
	padding: 8px 12px;
	border-radius: 4px;
	border: 1px solid #ffffff87;
	box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.5);
	font-size: 1rem;
	font-weight: 600;
	min-width: 140px;
`

const SelectBox = ({ id, options }) => {
	return (
		<StyledSelect id={id}>
			{options.map((option, idx) => (
				<option
					key={idx}
					value={option.value}
				>
					{option.title}
				</option>
			))}
		</StyledSelect>
	)
}

export default SelectBox
