import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../src/components/Header/Header'
import { ThemeProvider } from '@mui/material'
import theme from '../src/themes/theme'


function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Component {...pageProps} />
    </ ThemeProvider>
  )
  
  
}

export default MyApp
