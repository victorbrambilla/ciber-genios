import styled from 'styled-components';

interface IButton {
  darkBg: boolean | undefined;
}
export const Button = styled.button<IButton>`
  background-color: ${(props) =>
    props.darkBg ? props.theme.colors.primary : 'transparent'};
  border-radius: 21px;
  padding: 8px 72px;
  gap: 10px;
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.primary};
  color: ${(props) =>
    props.darkBg ? props.theme.colors.white : props.theme.colors.primary};
  max-width: 300px;
  @media (max-width: 460px) {
    padding: 4px 40px;
  }

  //hover
  &:hover {
    color: ${(props) =>
      props.darkBg ? props.theme.colors.primary : props.theme.colors.white};
    background-color: ${(props) =>
      props.darkBg ? 'transparent' : props.theme.colors.primary};
  }
`;
