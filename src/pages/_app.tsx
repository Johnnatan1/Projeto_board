import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

import '../styles/global.scss'

import { Provider as NextAuthProvider } from 'next-auth/client'

const initialOptions = {
  "client-id": "Af1hmYXCo1z0sLH-Xgi4TYU5HgOhqxsrw4sCwynwDIda7IoZ75OQGXNsLAM0y-H5qElrwzy8V5yR1eV4",
  currency: "BRL",
  intent: "capture"
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
    <PayPalScriptProvider options={initialOptions}>  
       <Header />
       <Component {...pageProps} />
    </PayPalScriptProvider>
    </NextAuthProvider>
  )
}

export default MyApp
