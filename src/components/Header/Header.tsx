import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PATH } from 'constants/path';

const Header = () => {
  return (
    <Wrapper>
      <span>a11y-airline Header</span>
      <Nav>
        <NavContainer>
          <NavItem>
            <Link to={PATH.PASSENGER_SELECTION}>승객 선택</Link>
          </NavItem>
          <NavItem>
            <Link to={PATH.TRAVEL_RECOMMENDATION}>여행지 추천</Link>
          </NavItem>
        </NavContainer>
      </Nav>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;
`;

const Nav = styled.nav`
  flex-grow: 1;
  margin-left: 20px;
`;

const NavContainer = styled.ul`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.li`
  font-weight: 700;
`;
