import '../styles/globals.css'
import {ChakraProvider} from "@chakra-ui/react"
import Header from '../components/Navbar'
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }) {
  return(
    <ChakraProvider>
      <Header/>
       <Component {...pageProps} />
      <Footer/>
       {/*footer to go here */}
    </ChakraProvider>

  )
}

export default MyApp

