import styled from 'styled-components';

export const SwitchThemeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 48px;

  button {
    background: transparent;
    border: none;
    outline: none;
    transition: all ease-in-out 0.2s;
    &:hover {
      filter: brightness(0.6);
    }
  }
`;
