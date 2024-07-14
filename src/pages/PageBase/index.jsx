import Container from '../../components/Container'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Outlet } from 'react-router-dom'
export default function PageBase () {
    return(
        <main>
            <Header />
            <Container>
                <Outlet />               
            </Container>
            <Footer />
        </main>
    )
}