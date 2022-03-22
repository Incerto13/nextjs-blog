import '../styles/globals.css'
import type { AppProps } from 'next/app'
import TagManager from 'react-gtm-module'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-PX2X5M3' })
  }, [])  
  return <Component {...pageProps} />
}

export default MyApp
