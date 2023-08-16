
import './globals.scss'
import Aos from './aos'
import Header from '@/components/header/Header_alisa'
import NavbarWeather from '@/components/header/NavbarWeather_alisa'
import Footer from '@/components/footer/Footer_alisa'
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Aos/>
                <Header/>
                <NavbarWeather/>
                {children}
                <Footer/>
            </body>
        </html>
    )
}