// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'
// import '@fortawesome/fontawesome-svg-core/styles.css';
// import { config } from '@fortawesome/fontawesome-svg-core';
// import Layout from '@/component/layout';
// import { useState } from 'react';
// import { Provider } from 'react-redux';
// import store from '@/redux/store';
// import { Provider } from 'next-auth/providers';
// config.autoAddCss = false;
// type SessionWrap = Provider;

// export default function App({ Component, pageProps }: AppProps) {
//   const[side, setside] = useState(true)
//     const changicon = () => {
//         setside(!side)
//     }
//   return (
//     <SessionWrap>
//       <Provider store={store}>
//       <Layout side = {side} changeicon = {changicon}>
//         <Component {...pageProps} side={side} />
//       </Layout>
//       </Provider>
//     </SessionWrap>
//   )
// }

"use client"
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Layout from '@/component/layout';
import { useState } from 'react';
import { Provider as ReduxProvider } from 'react-redux'; // Rename the Redux provider
import store from '@/redux/store';
import { SessionProvider } from 'next-auth/react'


config.autoAddCss = false;

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  const [side, setside] = useState(true);

  const changicon = () => {
    setside(!side);
  }

  return (
    <SessionProvider session={session}>
      <ReduxProvider store={store}>
        <Layout side={side} changeicon={changicon}>
          <Component {...pageProps} side={side} />
        </Layout>
      </ReduxProvider>
    </SessionProvider>
  )
}
