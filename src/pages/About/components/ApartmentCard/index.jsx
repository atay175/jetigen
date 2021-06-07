import styles from './styles.module.scss'
import apartmentScheme from '../../../../assets/images/apartment3d.png'

function ApartmentCard({apartmentScheme, title, area, description, link}) {
    return (
       <div className={styles.card}>
            <img className={styles.img} src={apartmentScheme} alt="" />
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.area}>{area}</p>
            <p className={styles.description}>{description}</p>
            <a className={styles.link} href={link}>Подробнее</a>
        </div> 
    )
}

export default ApartmentCard