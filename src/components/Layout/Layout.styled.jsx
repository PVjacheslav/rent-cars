import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  max-width: 375px;
  margin: 0 auto;
  padding: 0 10px;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 50px;
    max-width: 1440px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const Link = styled(NavLink)`
  font-family: inherit;
  font-weight: 500;
  font-size: 25px;
  line-height: 1.1;
  color: var(--accent-color);
  padding: 20px 0;
  transition: var(--main-transition);
  
  &:hover {
    color: #94B3FF;
  }
  
  &:active {
    color: #94B3FF;
  }
`;

export const Container = styled.main`
  max-width: 375px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;