import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import Header from './components/Header'
import About from './components/About'
import ApartmentBlock from './components/ApartmentBlock'
import Location from './components/Location'
import RequestCall from './components/RequestCall'
import Map from './components/Map'
import Footer from '../../components/Footer'

function MainPage() {
    return (
        <div className={styles.container}>
            {/* <p>as</p>
            <Link to='/about'>about</Link>
            <br />
            <a href="/about">about</a> */}

            <Header />

            <About />

            <ApartmentBlock />

            <Location />

            <RequestCall />

            <Map />

            <Footer />
        </div>
    )
}

export default MainPage