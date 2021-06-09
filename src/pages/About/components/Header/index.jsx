import styles from './styles.module.scss'
import AAALogo from '../../../../assets/images/AAALogo.png'
import jetigenlogo from '../../../../assets/icons/jetigenlogo.svg'
import requestcallBig from '../../../../assets/icons/requestcallBig.svg'
import requestcallSmall from '../../../../assets/icons/requestcallSmall.svg'
import React, { useState } from 'react'
import Modal from '../../../../components/Modal'
import { Link } from 'react-router-dom'

function Header() {
    const [modalActive, setModalActive] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <header>
                    <Link className={styles.linkToMainPage} to='/'>
                        <div className={styles.logo}>
                            <img src={AAALogo} alt="" />  
                        </div>
                    </Link>
                    <div className={styles.navigation}>
                        <a className={styles.navigationLink} href="#">о компании</a>
                        <a className={styles.navigationLink} href="#">жетиген</a>
                        <Link to='/projects' className={styles.navigationLink}>проекты</Link>
                        <a className={styles.navigationLink} href="#">контакты</a>
                        <button className={styles.navigationButton} onClick={() => setModalActive(true)}><img className={styles.requestcallSmall} src={requestcallSmall} alt="" />Заказать звонок</button>
                        <p className={styles.navigationText}>+996 509 505 508<br /> +996 559 505 508</p>
                    </div>
                </header>
                <div className={styles.body}>
                    <img src={jetigenlogo} alt="" />
                    <button className={styles.bodyButton}>Подробнее</button>
                </div>
                <footer>
                    <button className={styles.footerButton} onClick={() => setModalActive(true)}><img src={requestcallBig} alt="" /></button>
                </footer>
            </div>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    )
}

export default Header;