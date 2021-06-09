import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import logo from '../../../../assets/icons/jetigenGoldLogo.svg'
import security from '../../../../assets/icons/security.svg'
import playground from '../../../../assets/icons/playground.svg'
import parking from '../../../../assets/icons/parking.svg'
import aboutCircleTopRight from '../../../../assets/images/aboutCircleTopRight.png'
import aboutCircleBottomLeft from '../../../../assets/images/aboutCircleBottomLeft.png'

function About() {
    return (
        <div className={styles.container}>
            {/* <img className={styles.aboutCircleTopRight} src={aboutCircleTopRight} alt="" />
            <img className={styles.aboutCircleBottomLeft} src={aboutCircleBottomLeft} alt="" /> */}
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <img className={styles.logo} src={logo} alt="" />
                    <p className={styles.description}>Клубный дом «ЖЕТИГЕН» представляет собой 7-этажный дом, в самом сердце микрорайона Джал, который располагает 1-2 комнатными уютными квартирами, площадью от 32 до 55 кв.м. </p>
                </div>
                <div className={styles.body}>
                    <div className={styles.card}>
                        <img className={styles.small__img} src={security} alt="" />
                        <p className={styles.cardDescription}>комфорт и безопасность</p>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.large__img} src={playground} alt="" />
                        <p className={styles.cardDescription}>современная игровая площадка</p>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.small__img} src={parking} alt="" />
                        <p className={styles.cardDescription}>удобный дворовой паркинг</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About