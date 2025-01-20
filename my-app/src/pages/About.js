import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
	text-align: center;
`

const Title = styled.h1`
	color: #ff6347;
`

const Paragraph = styled.p`
	font-size: 1.2rem;
`

function About() {
	return (
		<Container>
			<Title>About Page</Title>
			<Paragraph>Welcome to the About Page!</Paragraph>
		</Container>
	)
}

About.layout = 'SubLayout1'

export default About
