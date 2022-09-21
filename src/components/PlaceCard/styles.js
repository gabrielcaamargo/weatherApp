import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;
  color: rgba(0, 0, 0, 0.8);
  background-color: ${({ theme }) => theme.placeCard};
  padding: 24px 16px;
  border-radius: 12px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 24px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  div {
    p {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.dark};
    }
  }

  .delete {
    background: transparent;
    border: none;
    outline: none;
    transition: all .2s ease-in;

    &:hover {
      filter: brightness(0.3);
    }
  }

  & + & {
    margin-top: 12px;
  }
`;
