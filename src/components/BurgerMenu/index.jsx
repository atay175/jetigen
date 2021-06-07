import styles from './styles.module.scss'
import classNames from 'classnames'
import closeModal from '../../assets/icons/close-modal.svg'
import requestcallSmall from '../../assets/icons/requestcallSmall.svg'
import { Link } from 'react-router-dom'


function burgerMenu ({active, setActive}) {

    return(
        <div 
            className={classNames(styles.burgerMenu, {
            [styles.active]: active
        })}
        onClick={() => setActive(false)}
        >
            <div className={styles.wrapper}>
                <div className={styles.burger__content} onClick={e => e.stopPropagation()}>
                    <button className={styles.closeButton} onClick={() => setActive(false)}><img src={closeModal} alt="" /></button>
                    <div className={styles.menu}>
                    <a className={styles.navigationLink} href="#">о компании</a>
                    <Link to='../../../About/index.jsx' className={styles.navigationLink}>жетиген</Link>
                    <a className={styles.navigationLink} href="#">проекты</a>
                    <a className={styles.navigationLink} href="#">контакты</a>
                    <p className={styles.navigationText}>+996 509 505 508<br /> +996 559 505 508</p>

                    </div>
                </div>
            </div> 
        </div>
    )
}

export default burgerMenu