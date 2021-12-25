import '../styles/globals.css'
import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <div className='text-white container mx-auto'>
    <NavBar />
    </div>
    <Component {...pageProps} />
    </>
  ) 
  
}

export default MyApp
