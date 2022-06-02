import styled from 'styled-components';
import banner from '../../../public/images/banner.jpg';

export const BannerContainer = styled.div`
  width: 100%;
  padding-bottom: 50px;
  height: 90vh;
  overflow: hidden;
  .rounded {
    border-bottom-left-radius: 50% 120px !important;
    border-bottom-right-radius: 50% 120px !important;
    position: relative;
    overflow: hidden;
    width: 104%;
    margin-bottom: -50px;
    left: -2%;
    background-color: #e5e5e5;
    background-image: url(${banner.src});
    background-position: center 70%;
    background-size: cover;
    background-repeat: no-repeat;
    height: 90vh;
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
  }
  h1 {
    color: ${(props) => props.theme.colors.white};
    margin-bottom: 13%;
    font-size: 10vw;
    font-family: 'Bebas Neue';
  }
  @media (max-width: 768px) {
    height: 40vh;
    .rounded {
      height: 40vh;
      border-bottom-left-radius: 50% 50px !important;
      border-bottom-right-radius: 50% 50px !important;
    }
    h1 {
      margin-bottom: 12%;
    }
  }
  @media (max-width: 500px) {
    h1 {
      margin-bottom: 1%;
      font-size: 13vw;
    }
  }
`;
