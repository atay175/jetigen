import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import styles from './styles.module.scss'
import AAALogo from '../../../../assets/images/AAALogo.png'
import jetigenlogo from '../../../../assets/icons/jetigenlogo.svg'
import requestcallBig from '../../../../assets/icons/requestcallBig.svg'
import requestcallSmall from '../../../../assets/icons/requestcallSmall.svg'
import AAAWhite from '../../../../assets/icons/AAAWhite.svg'
import companyProjectsLogo from '../../../../assets/icons/companyProjectsLogo.svg'
import instagram from '../../../../assets/icons/instagram.svg'
import facebook from '../../../../assets/icons/facebook.svg'
import Modal from '../../../../components/Modal'
import SwiperCore, { Navigation, Pagination, Autoplay, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import burgerIcon from '../../../../assets/icons/burgerMenu.svg'
import BurgerMenu from '../../../../components/BurgerMenu'

SwiperCore.use([Navigation, Pagination, Autoplay, A11y])



function Header() {
    const [modalActive, setModalActive] = useState(false)
    const [burgerMenuActive, setBurgerMenuActive] = useState(false)
    return (
        <div className={styles.container}>
                <Swiper className={styles.swiper}
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    autoplay= {{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    >
                        <SwiperSlide><div className={styles.firstSlide} /></SwiperSlide>
                        <SwiperSlide><div className={styles.secondSlide} /></SwiperSlide>
                        <SwiperSlide><div className={styles.thirdSlide} /></SwiperSlide>
                </Swiper>
            <div className={styles.wrapper}>
                <header>
                    <div className={styles.logo}>
                        <img src={AAALogo} alt="" />
                    </div>
                    <div className={styles.navigation}>
                        <Link to='/company' className={styles.navigationLink}>о компании</Link>
                        <Link to='/about' className={styles.navigationLink}>жетиген</Link>
                        <Link to='/projects' className={styles.navigationLink}>проекты</Link>
                        <Link to='/contacts' className={styles.navigationLink}>контакты</Link>
                        <button className={styles.navigationButton} onClick={() => setModalActive(true)}><img className={styles.buttonImg} src={requestcallSmall} alt="" />Заказать звонок</button>
                        <p className={styles.navigationText}>+996 509 505 508<br /> +996 559 505 508</p>
                    </div>
                    <div className={styles.burgerMenu} onClick={() => setBurgerMenuActive(true)}><img src={burgerIcon} alt="" /></div>
                </header>
                <div className={styles.body}>
                        <img src={jetigenlogo} alt="JetigenLogo" />
                        <Link to='/about'><button className={styles.bodyButton}>Подробнее</button></Link> 
                </div>
                <footer className={styles.footer}>
                    <div className={styles.companyContentBlock}>
                        <div className={styles.companyProjects}><img src={companyProjectsLogo} alt="" /><p className={styles.text}>Наши проекты</p></div>
                        <div className={styles.companyLogoFooter}><img src={AAAWhite} alt="" /><p className={styles.text}>A.A.A <br />STROY GROUP</p></div>
                    </div>
                    <div className={styles.linkBlock}>
                        <a className={styles.social} href="#"><img className={styles.socialImg} src={facebook} alt="" /></a>
                        <a className={styles.social} href="#"><img className={styles.socialImg} src={instagram} alt="" /></a>
                        <button className={styles.modalButton}><img src={requestcallBig} onClick={() => setModalActive(true)} alt="" /></button>
                    </div>
                </footer>

            </div>
            <div className={styles.gradient} />
            <BurgerMenu active={burgerMenuActive} setActive={setBurgerMenuActive} />
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    )
}

export default Header;