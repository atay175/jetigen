import styles from './styles.module.scss'
import Header from './components/Header'
import About from './components/About'
import ApartmentBlock from './components/ApartmentBlock'
import Location from './components/Location'
import RequestCall from './components/RequestCall'
import Map from '../../components/Map'
import Footer from '../../components/Footer'
import { useEffect } from 'react'
import { clickToApartmentBlock } from '../../utils/helpers'
import { useParams } from 'react-router-dom'

function MainPage() {
    const { component } = useParams()

    // useEffect(() => {
    //     if (component === 'apartmentBlock') {
    //         clickToApartmentBlock()
    //     }
    // }, [])
    
    return (
        <div className={styles.container}>
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