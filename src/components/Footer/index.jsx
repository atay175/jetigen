import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import FooterLogo from '../../assets/images/FooterLogo.png'
import mail from '../../assets/icons/mailLogoFooter.svg'
import phone from '../../assets/icons/requestcallSmall.svg'
import location from '../../assets/icons/locationVectorFooter.svg'
import React, { useState } from 'react'
import Modal from '../../components/Modal'
import instagram from '../../assets/icons/instagram.svg'
import facebook from '../../assets/icons/facebook.svg'

function Footer() {
    const [modalActive, setModalActive] = useState(false)

    return (
        <div id="contacts" className={styles.container}>

            <div className={styles.wrapper}>
                <div className={styles.contentBlockOne}>
                    <div className={styles.logo}><img className={styles.logoImg} src={FooterLogo} alt="" /></div>
                    <div className={styles.textBlock}>
                        <Link to='/company' className={styles.title}>о нас</Link>
                        <Link to='/company' className={styles.text}>о компании</Link>
                        <Link to='/objects' className={styles.text}>объекты</Link>
                        <Link to='/' className={styles.text}>jetigen</Link>
                        <Link to='#' className={styles.text}>новости</Link>
                        <Link to='#' className={styles.text}>контакты</Link>
                    </div>
                    <div className={styles.textBlock}>
                        <p className={styles.title}>объекты</p>
                        <p className={styles.text}>jetigen</p>
                        <p className={styles.text}>элебаева(скоро)</p>
                        <p className={styles.text}>sky(сокро)</p>
                    </div>
                </div>
                <div className={styles.contentBlockTwo}>
                    <div className={styles.mobileLogo}><img className={styles.mobileLogo} src={FooterLogo} alt="" /></div>
                    <div className={styles.contacts}><img src={location} alt="" /><p className={styles.contactsText}>Кыргызстан г. Бишкек </p></div>
                    <div className={styles.contacts}><img src={phone} alt="" width="14px"/><p className={styles.contactsText}>+996 509 505 508<br /> +996 559 505 508</p></div>
                    <div className={styles.contacts}><img src={mail} alt="" /><p className={styles.contactsText}>aaastroygroup@gmail.com</p></div>
                    <button className={styles.button} onClick={() => setModalActive(true)}>Заказать звонок</button>
                    <div className={styles.social}>
                        <a className={styles.socialLink} href="https://www.facebook.com/aaastroygroup.kg"><img src={facebook} alt="" /></a>
                        <a className={styles.socialLink} href="https://www.instagram.com/aaa.stroy.group/"><img src={instagram} alt="" /></a>
                    </div>
                </div>
                <Modal active={modalActive} setActive={setModalActive}/>
            </div>
        </div>
    )
}

export default Footer