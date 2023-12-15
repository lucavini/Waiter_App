import GlobalStyles from './Styles/global';
import { ThemeProvider } from 'styled-components';
import styledTheme from '~Styles/Themes/defaults';
import Router from './Routes/router';

function App() {
  return (
    <ThemeProvider theme={styledTheme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
