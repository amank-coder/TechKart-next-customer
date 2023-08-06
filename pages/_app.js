import '@/styles/globals.css';
import { CartContextProvider } from './components/CartContext';

export default function App({
  Component, pageProps: { session, ...pageProps }
}) {
  return (
      <CartContextProvider>
        <Component {...pageProps}/>
      </CartContextProvider>
      
  )
}