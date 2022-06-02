import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';
import { GlobalStorage } from '../context/store';
import { theme } from '../theme/theme';

const GlobalStyle = createGlobalStyle`
*{
  font-family: 'Montserrat';
  box-sizing: border-box;
  margin:0 ;
  padding: 0;

}

`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStorage>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </GlobalStorage>
  );
}

export default MyApp;
