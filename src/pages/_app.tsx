import type { AppProps } from 'next/app'
import * as themes from '../styles/themes'
import GlobalStyles from '../styles/global'
import { ThemeProvider } from 'styled-components'
import Header from '../components/Header'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={themes.dark}>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
