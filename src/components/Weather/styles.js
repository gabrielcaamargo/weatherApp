import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 48px;

  .search-area {
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 8px;
    margin-top: 12px;

    button, input {
      border: 2px solid ${({ theme }) => theme.background};
      padding: 12px 16px;
      border-radius: 6px;
      font-size: 16px;
      outline: none;
      transition: all 0.2s ease-in;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.07);
    }

    input {
      &:focus {
        border: 2px solid ${({ theme }) => theme.colors.light};
      }
    }

    button {
      background-color: ${({ theme }) => theme.colors.main};
      color: ${({ theme }) => theme.textColor};
      font-weight: bold;

      &:hover {
        background-color: ${({ theme }) => theme.colors.dark};
      }

      &:active {
        background-color: ${({ theme }) => theme.colors.light};
      }

      &[disabled] {
        background-color: #BBB;
        cursor: default;
      }
    }

  }
`;

export const WeatherWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
  padding: 24px 16px;
  border-radius: 12px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .location {
    display: flex;
    gap: 8px;
    align-items: center;

    button {
      background: transparent;
      border: none;
      transition: all 0.2s ease-in;
      &:hover {
        filter: brightness(0.6);
      }
    }
  }

  .weather {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const SavedPlaces = styled.div`
  margin-top: 32px;

  h2 {
    font-size: 28px;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1.5fr;
    gap: 12px;
    &::after {
      content: '';
      display: inline-block;
      background-color: #CCC;
      height: 2px;
      border-radius: 8px;
      width: auto;
    }
  }
`;
