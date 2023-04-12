import '@/styles/globals.css'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router';
import { useEffect } from 'react';





export default function App({
  Component, pageProps: {
    session, ...pageProps },
}) {

  return (
    <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </>
  )
}
