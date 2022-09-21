import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  background-color: #FFF;
  color: rgba(0, 0, 0, 0.8);
  padding: 24px 16px;
  border-radius: 12px;
  width: 100%;
  max-width: 550px;

  h1 {
    font-size: 26px;
    span {
      color: #F00;
    }
  }

  p {
    font-size: 18px;
    span {
      color: #F00;
      font-weight: bold;
    }
  }

  .user-actions {
    margin-top: 32px;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    width: 100%;

    button {
      border: none;
      font-size: 16px;
      font-weight: bold;

      &:first-child {
        color: #CCC;
        background: transparent;
      }

      &:last-child {
        background: #F00;
        color: #FFF;
        padding: 8px 16px;
        border-radius: 6px;

        &:hover {
          background-color: #910000;
        }

        &:active {
          background-color: #FC6A6A;
        }
      }
    }
  }
`;
