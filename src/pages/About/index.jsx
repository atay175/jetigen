import { useEffect } from 'react'
import styles from './styles.module.scss'
import Header from './components/Header/'
import CompanyDescription from './components/CompanyDescription'
import CompanyObjects from './components/CompanyObjects'
import CompanyProjects from './components/CompanyProjects'
import RequestCall from './components/RequestCall'
import Map from '../../components/Map'
import Footer from '../../components/Footer'
import ApartmentCard from './components/ApartmentCard'
import apartment3d54 from '../../assets/images/apartment3d54,76.png'
import apartment3d51 from '../../assets/images/apartment3d51,39.png'
import apartment3d43 from '../../assets/images/apartment3d43,19.png'
import apartment3d32 from '../../assets/images/apartment3d32,89.png'
import { clickToAboutCompanyBlock, clickToContcatsBlock, clickToCompanyProjectsBlock, clickToCompanyObjectsBlock } from '../../utils/helpers'
import { useParams } from 'react-router-dom'

function About() {
    const data = [
        {
            apartmentScheme: apartment3d32,
            title: "Квартира 1 комната",
            area: "Общая площадь 32,89 м",
            description: "Все квартиры оснащены природным газом, горячим и холодным водоснабжением, центральной системой канализации",
            link: "#"
        },
        {
            apartmentScheme: apartment3d54,
            title: "Квартира 2 комнаты",
            area: "Общая площадь 54,76 м",
            description: "Все квартиры оснащены природным газом, горячим и холодным водоснабжением, центральной системой канализации",
            link: "#"
        },
        {
            apartmentScheme: apartment3d43,
            title: "Квартира 1 комната",
            area: "Общая площадь 43,19 м",
            description: "Все квартиры оснащены природным газом, горячим и холодным водоснабжением, центральной системой канализации",
            link: "#"
        },
        {
            apartmentScheme: apartment3d51,
            title: "Квартира 2 комнаты",
            area: "Общая площадь 51,39 м",
            description: "Все квартиры оснащены природным газом, горячим и холодным водоснабжением, центральной системой канализации",
            link: "#"
        }
    ]

    const { component } = useParams()

    useEffect(() => {
        if (component === 'company') {
            clickToAboutCompanyBlock()
        } else if (component === 'projects') {
            clickToCompanyProjectsBlock()
        } else if (component === 'contacts') { 
            clickToContcatsBlock()
        } else if (component === 'objects') {
            clickToCompanyObjectsBlock()
        }
    }, [])

    console.log(component)

    return (
        <div className={styles.container}>
            <Header />
            <CompanyDescription />
            <CompanyObjects />

            <div className={styles.cardWrapper}>
                <div className={styles.titleBlock}>
                    <h1 className={styles.title}><span>квартиры</span> jetigen</h1>
                </div>
                <div className={styles.card}>
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
            </div>
      
            <CompanyProjects />
            <RequestCall />
            <Map />
            <Footer />
        </div>
    )
}

export default About