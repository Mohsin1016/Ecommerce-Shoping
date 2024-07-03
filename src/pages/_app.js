import '@/styles/globals.css'
import Navbar from "@/components/navbar/Navbar"
import { Poppins } from 'next/font/google'
import Footer from '@/components/footer/Footer';
import 'antd/dist/reset.css';
const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});
export default function App({ Component, pageProps }) {
  return (
    <div className={font.className}>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}
