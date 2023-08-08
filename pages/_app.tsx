import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Layout from '@/component/layout';
import { useState } from 'react';
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  const[side, setside] = useState(true)
    const changicon = () => {
        setside(!side)
    }
  return (
    <Layout side = {side} changeicon = {changicon}>
      <Component {...pageProps} side={side} />
    </Layout>
  )
}
