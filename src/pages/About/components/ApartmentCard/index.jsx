import styles from './styles.module.scss'

function ApartmentCard({apartmentScheme, title, area, description, link}) {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <img className={styles.img} src={apartmentScheme} alt="" />
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.area}>{area}</p>
                <p className={styles.description}>{description}</p>
                <a className={styles.link} href={link}>Подробнее</a>
            </div> 
        </div>
    )
}

export default ApartmentCard