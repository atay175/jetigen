import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import instagram from '../../../../assets/icons/instagram.svg'
import facebook from '../../../../assets/icons/facebook.svg'
import requestCall from '../../../../assets/icons/requestcallSmall.svg'

function Map() {

    return (
     <div className={styles.container}>

        <div className={styles.wrapper}>
            <h1 className={styles.tittle}>контакты</h1>
            <div className={styles.number}><img src={requestCall} alt="" /><p>0 509 505 508</p></div>
            <div className={styles.number}><img src={requestCall} alt="" /><p>0 559 505 508</p></div>
            <p className={styles.text}>e-mail: aaastroygroup@gmail.com</p>
            <p className={styles.text}>Адрес: Токтонолиева, 6</p>
            <div className={styles.social}>
                <a href="https://www.facebook.com/aaastroygroup.kg"><img src={facebook} alt="" /></a>
                <a href="https://www.instagram.com/aaa.stroy.group/"><img src={instagram} alt="" /></a>
            </div>                
        </div>

    </div>
    )
}

export default Map