import { Button, Nav, Offcanvas } from 'react-bootstrap';
import styled from 'styled-components';
import logoImg from '../../../public/images/logoMobile.svg';

export const MenuButton = styled(Button)`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
  &:focus {
    outline: none;
    background-color: transparent;
    border: none;
    box-shadow: none;
  }
  &:hover {
    outline: none;
    background-color: transparent;
  }
`;
export const MenuContainer = styled(Offcanvas)`
  width: 70vw;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;
export const Logo = styled.div`
  background-image: url(${logoImg.src});
  background-size: cover;
  background-position: center;
  width: 48.75px;
  height: 48.75px;
`;

export const NavContainer = styled(Nav)`
  display: flex;
  flex-direction: column;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    margin: 32px 0;
  }
  a {
    text-decoration: none;
    font-weight: 500;
    font-size: 20px;
    color: #1d2527;
  }
  .active a {
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  }
`;
