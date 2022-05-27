import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { ChakraProvider } from '@chakra-ui/react'


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
    <Component {...pageProps} />
    </ChakraProvider>
  )
 
}

export default MyApp
