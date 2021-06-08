import styles from './styles.module.scss'
import Header from './components/Header/'
import CompanyDescriptione from './components/CompanyDescription'
import CompanyObjects from './components/CompanyObjects'
import CompanyProjects from './components/CompanyProjects'
import RequestCall from './components/RequestCall'
import Map from '../../components/Map'
import Footer from '../../components/Footer'
import ApartmentCard from './components/ApartmentCard'
import apartmentScheme from '../../assets/images/apartment3d.png'

function About() {
    const data = [
        {
            apartmentScheme: apartmentScheme,
            title: "Квартира 1 комната",
            area: "Общая площадь 32,89 м",
            description: "Все квартиры оснащены природным газом, горячим и холодным водоснабжением, центральной системой канализации",
            link: "#"
        },
        {
            apartmentScheme: apartmentScheme,
            title: "Квартира 1 комната",
            area: "Общая площадь 32,89 м",
            description: "Все квартиры оснащены природным газом, горячим и холодным водоснабжением, центральной системой канализации",
            link: "#"
        },
        {
            apartmentScheme: apartmentScheme,
            title: "Квартира 1 комната",
            area: "Общая площадь 32,89 м",
            description: "Все квартиры оснащены природным газом, горячим и холодным водоснабжением, центральной системой канализации",
            link: "#"
        },
        {
            apartmentScheme: apartmentScheme,
            title: "Квартира 1 комната",
            area: "Общая площадь 32,89 м",
            description: "Все квартиры оснащены природным газом, горячим и холодным водоснабжением, центральной системой канализации",
            link: "#"
        }
    ]


    return (
        <div className={styles.container}>

            <Header />

            <CompanyDescriptione />

            <CompanyObjects />

            <div className={styles.wrapper}>

                <div className={styles.apartmentCards}>
                    {data.map(item => 
                        <ApartmentCard
                            apartmentScheme={item.apartmentScheme}
                            title={item.title}
                            area={item.area}
                            description={item.description}
                            link={item.link}
                        />
                    )}
                </div>

            </div>

            <CompanyProjects />

            <RequestCall />

            <Map />

            <Footer />

        </div>
    )
}

export default About