import styled from 'styled-components';
import footerImg from '../../../public/images/footerImage.png';
import footerImageMobile from '../../../public/images/footerImageMobile.png';

export const Container = styled.div`
  background-image: url(${footerImg.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  height: 550px;
  @media (max-width: 768px) {
    background-image: url(${footerImageMobile.src});
    flex-direction: column-reverse;
    align-items: flex-end;
    height: auto;
    .itemLeft {
      width: 100% !important;
      height: 300px;
    }
  }

  width: 100%;
  .itemLeft {
    width: 40%;
  }
`;

export const ItemRight = styled.div`
  width: 60%;
  background: linear-gradient(
    6 270deg,
    rgba(29, 37, 39, 0.6) 0%,
    rgba(29, 37, 39, 0.6) 24.79%,
    rgba(29, 37, 39, 0.534) 54.48%,
    rgba(29, 37, 39, 0.006) 78.67%,
    rgba(29, 37, 39, 0) 100%
  );
  backdrop-filter: blur(10px);
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  h1 {
    color: white;
    font-size: 56px;
    font-weight: 400;
  }
  p {
    color: white;
    text-align: right;
    font-size: 20px;
    font-weight: 300;
  }
  button {
    background-color: transparent;
    padding: 8px 96px;
    gap: 10px;
    color: ${(props) => props.theme.colors.white};
    font-weight: 500;
    font-size: 16px;
    border: 1px solid #ebeff2;
    border-radius: 4px;
  }
  @media (max-width: 768px) {
    background: linear-gradient(
      270deg,
      rgba(29, 37, 39, 0.6) 15.42%,
      rgba(29, 37, 39, 0.552) 35.73%,
      rgba(29, 37, 39, 0.156) 78.67%,
      rgba(29, 37, 39, 0) 100%
    );
    backdrop-filter: blur(0.6679px);
    width: 100%;
    height: 50%;
    h1 {
      font-size: 32px;
    }
    p {
      font-size: 16px;
    }
  }
`;
