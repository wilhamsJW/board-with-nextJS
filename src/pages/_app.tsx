import { AppProps } from 'next/app'

import '../styles/global.scss'
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header /> {/** Dessa forma o Header ficará em todas as pages da minha aplicação, estpu fazendo isso pq ele de fato vai existir em todas as pages*/}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
