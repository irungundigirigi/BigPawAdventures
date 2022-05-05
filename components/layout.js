import Navbar from './navbar'
import Footer from './footer'
import Whatsapp from './Whatsapp'



export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Whatsapp />
      <Footer />
    </>
  )
}