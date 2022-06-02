import styled from 'styled-components';

// import logoImg from '../../assets/images/logo.svg';
import logoImg from '../../../public/images/logo.svg';

interface IHeaderContainer {
  path: string;
}

export const HeaderContainer = styled.header<IHeaderContainer>`
  width: 100%;
  padding: 30px;
  position: ${(props) => (props.path === '/' ? 'absolute' : 'relative')};
  z-index: 2;
  background-color: ${(props) =>
    props.path === '/table' ? props.theme.colors.primary : ''};
  .headerWeb {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
      display: none;
    }
    ul {
      display: flex;
      justify-content: space-between;
    }
    li {
      list-style: none;
    }
  }

  a {
    font-size: 20px;
    text-decoration: none;
    color: white;
    font-weight: 500;
  }
  a:hover {
    border-bottom: 2px solid #ffffff;
  }
  .active a {
    border-bottom: 2px solid #ffffff;
  }
  .containerProfile {
    display: flex;
    align-items: center;
    a {
      margin: 0 24px;
    }
  }
`;
export const Logo = styled.div`
  background-image: url(${logoImg.src});
  background-size: cover;
  background-position: center;
  width: 48.75px;
  height: 48.75px;
`;
export const NavContainer = styled.nav``;
