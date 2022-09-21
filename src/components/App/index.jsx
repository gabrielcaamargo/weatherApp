import { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { Moon, Sun } from 'phosphor-react';
import GlobalStyles from '../../assets/styles/global';

import darkTheme from '../../assets/styles/themes/dark';
import lightTheme from '../../assets/styles/themes/light';
import { SwitchThemeContainer } from './styles';
import Weather from '../Weather';

export default function App() {
  const [theme, setTheme] = useState('dark');

  const handleToggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <SwitchThemeContainer>
        <button type="button" onClick={handleToggleTheme}>
          {
            theme === 'dark'
              ? <Sun size={32} color={darkTheme.textColor} />
              : <Moon size={32} color={lightTheme.textColor} />
          }
        </button>
      </SwitchThemeContainer>
      <Weather theme={theme} />
    </ThemeProvider>
  );
}
