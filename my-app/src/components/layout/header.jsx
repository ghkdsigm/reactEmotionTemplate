import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { FaBell, FaUserCircle, FaCog } from 'react-icons/fa' // 아이콘 패키지 사용
import { CommonLogo } from '@/components/common/index'

const HeaderContainer = styled.header`
	background-color: #fff;
	padding: 1rem 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: white;
`

const Nav = styled.nav`
	flex: 1;
	max-width: 1280px;
	display: flex;
	justify-content: left;
`

const NavList = styled.ul`
	list-style-type: none;
	display: flex;
	gap: 2rem;
	margin: 0;
	padding: 0;
`

const NavItem = styled.li`
	font-size: 1rem;

	a {
		color: #262626;
		text-decoration: none;
		transition: color 0.3s;

		&:hover {
			color: #00b0b9;
			font-weight: 700;
		}
	}
`

// 아이콘 컨테이너 스타일
const IconContainer = styled.div`
	display: flex;
	gap: 1rem;

	svg {
		cursor: pointer;
		font-size: 1.5rem;
		transition: color 0.3s;

		&:hover {
			color: #00bcd4;
		}
	}
`

const Header = () => {
	return (
		<HeaderContainer>
			<CommonLogo />

			<Nav>
				<NavList>
					<NavItem>
						<Link to="/">MDF</Link>
					</NavItem>
					<NavItem>
						<Link to="/about">PB</Link>
					</NavItem>
					<NavItem>
						<Link to="/services">건장재(시판)</Link>
					</NavItem>
					<NavItem>
						<Link to="/contact">경기지표트렌드</Link>
					</NavItem>
					<NavItem>
						<Link to="/contact">데이터업데이트</Link>
					</NavItem>
				</NavList>
			</Nav>

			<IconContainer>
				<FaBell title="Notifications" />
				<FaCog title="Settings" />
				<FaUserCircle title="Profile" />
			</IconContainer>
		</HeaderContainer>
	)
}

export default Header
