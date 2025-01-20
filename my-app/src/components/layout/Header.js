import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

// 네비게이션 스타일
const Nav = styled.nav`
	background-color: #282c34;
	padding: 1rem;
`

const NavList = styled.ul`
	list-style-type: none;
	display: flex;
	gap: 1rem;
`

const NavItem = styled.li`
	color: white;
	font-size: 1.2rem;

	&:hover {
		text-decoration: underline;
	}
`

const Header = () => {
	return (
		<Nav>
			<NavList>
				<NavItem>
					<Link
						to="/"
						style={{ color: 'inherit', textDecoration: 'none' }}
					>
						Home
					</Link>
				</NavItem>
				<NavItem>
					<Link
						to="/about"
						style={{ color: 'inherit', textDecoration: 'none' }}
					>
						About
					</Link>
				</NavItem>
				<NavItem>
					<Link
						to="/user/1"
						style={{ color: 'inherit', textDecoration: 'none' }}
					>
						User 1
					</Link>
				</NavItem>
				<NavItem>
					<Link
						to="/user/2"
						style={{ color: 'inherit', textDecoration: 'none' }}
					>
						User 2
					</Link>
				</NavItem>
			</NavList>
		</Nav>
	)
}

export default Header
