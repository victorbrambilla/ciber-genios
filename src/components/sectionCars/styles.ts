import styled from 'styled-components';
import car1 from '../../../public/images/car1.png';
export const Container = styled.div`
  width: 100%;
  margin: 50px 0;
  display: flex;

  .containerCarousel {
    width: 100%;
    margin: 50px 0;
  }
  .react-multi-carousel-track {
    margin: 70px 0;
  }

  .ContainerCar {
    position: relative;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
  }
  @media (max-width: 359px) {
    .react-multi-carousel-item react-multi-carousel-item--active {
      width: 358px;
    }
  }
`;

interface ICar {
  linkImg?: string;
}
export const CarImg = styled.div<ICar>`
  position: absolute;
  width: 200px;
  height: 100px;
  background-image: ${(props) =>
    props.linkImg ? `url(${props.linkImg} )` : `url(${car1.src} )`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  top: -15%;
`;
export const Cars = styled.div`
  border-radius: 32px;
  width: 281px;

  border: 1px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.white} !important;
  display: flex;
  flex-direction: column;

  padding: 24px 32px 24px 32px;
  gap: 10px;

  h3 {
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.primary};
  }
  .cardBody {
    margin: 20px 0;
    span {
      display: flex;
      margin-bottom: 24px;
      p {
        font-size: 16px;
        margin-left: 25px;
        font-weight: 400;
      }
    }
    .icon {
      font-size: 16px;
    }
  }
  a {
    font-size: 16px;
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
    font-weight: 500;
    border-radius: 21px;
    border: 1px solid ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.white};
    line-height: 32px;
  }
  a:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }
  @media (max-width: 768px) {
    width: 260px;
  }
`;
