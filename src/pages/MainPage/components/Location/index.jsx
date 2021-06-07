import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import title from '../../../../assets/images/locationTitle.png'

function Location () {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <img className={styles.title} src={title} alt="" />
                    <p className={styles.description}>Клубный дом «ЖЕТИГЕН» представляет собой 7-этажный дом, в самом сердце микрорайона Джал, который располагает 1-2 комнатными уютными квартирами, площадью от 32 до 55 кв.м. </p>
                </div>
                <div className={styles.body}>
                    <div className={styles.cardOne}><p className={styles.overlayText}>Детская больница</p></div>
                    <div className={styles.cardTwo}><p className={styles.overlayText}>Кафе и рестораны</p></div>
                    <div className={styles.cardThree}><p className={styles.overlayText}>Школа №72</p></div>
                    <div className={styles.cardFour}><p className={styles.overlayText}>Магазины</p></div>
                </div>
            </div>
        </div>
    )
}

export default Location 