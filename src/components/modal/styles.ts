import styled from 'styled-components';
import { Modal as M } from 'react-bootstrap';
import checkerImg from '../../../public/images/checker.png';

export const Modal = styled(M)`
  .modalDialogCustom {
    min-width: fit-content !important;
  }
  .modal-content {
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: 0px 6px 24px 3px rgba(0, 0, 0, 0.25);
    border-radius: 24px;
    padding: 40px;
    width: auto;
  }
  .modal-header {
    border: none !important;
  }
  .modal-body {
    border: none !important;
  }
  .modal-footer {
    border: none !important;
  }
  @media (max-width: 768px) {
    .modal-content {
      padding: 20px;
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;

  .imgInput {
    label {
      margin-top: 16px;
      font-weight: 500;
      font-size: 16px;
      color: ${(props) => props.theme.colors.primary};
      cursor: pointer;
    }
    input {
      display: none;
    }
  }
  .form {
    margin-left: 40px;
    display: flex;
    flex-direction: column;

    label {
      display: flex;
      flex-direction: column;
      font-weight: 400;
      font-size: 16px;
      color: #808080;
      margin-bottom: 8px;
      input {
        border: 1px solid ${(props) => props.theme.colors.secondary};
        border-radius: 6px;
        background-color: transparent;

        padding: 8px 10px;
        color: #afafaf;
      }
      input:focus {
        border: 1px solid ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.primary};
      }
      input:disabled {
      }
    }
    .containerButtons {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      .buttonCancel {
        margin-right: 28px;
        background-color: transparent;
        border: none;
        font-weight: 500;
        font-size: 16px;
        text-align: center;
      }
    }
    .helperText {
      font-size: 14px;
      color: red;
      margin-top: 8px;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .form {
      margin-left: 0;
      .containerButtons {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .buttonCancel {
          margin-right: 0px;
        }
      }
    }
  }
`;

interface IImgPreview {
  imgUrl: string | undefined;
}
export const ImgPreview = styled.div<IImgPreview>`
  background-image: ${(props) =>
    props.imgUrl ? `url(${props.imgUrl} )` : `url(${checkerImg.src} )`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 225px;
  height: 225px;
`;
