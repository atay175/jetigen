import styles from './styles.module.scss'
import apartmentCardCircleTopRight from '../../../../assets/images/apartmentCardCircleTopRight.png'
import apartmentCardCircleMiddleLeft from '../../../../assets/images/apartmentCardCircleMiddleLeft.png'
import apartmentCardCircleBottomRight from '../../../../assets/images/apartmentCardCircleBottomRight.png'

function ApartmentCard({apartmentScheme, title, area, description, link}) {
    return (
        <div className={styles.container}>
                <img className={styles.apartmentCardCircleTopRight} src={apartmentCardCircleTopRight} alt="" />
                <img className={styles.apartmentCardCircleMiddleLeft} src={apartmentCardCircleMiddleLeft} alt="" />
                <img className={styles.apartmentCardCircleBottomRight} src={apartmentCardCircleBottomRight} alt="" />
            
            <div className={styles.wrapper}>
                <div className={styles.card}>
                    <img className={styles.img} src={apartmentScheme} alt="" />
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.area}>{area}</p>
                    <p className={styles.description}>{description}</p>
                    <a className={styles.link} href={link}>Подробнее</a>
                </div> 
            </div>
        </div>
    )
}

export default ApartmentCard