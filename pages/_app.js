
import {useState, useEffect} from "react"
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { ChakraProvider } from '@chakra-ui/react'


function MyApp({ Component, pageProps }) {

  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  if (typeof window === 'undefined') {
    return <></>;
  } else{
    return (
      <ChakraProvider>
      <Component {...pageProps} />
      </ChakraProvider>
    )
  }

 
}

export default MyApp
