import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import apartmentPlan54 from '../../../../assets/images/apartmentPlan54,76.png'
import apartmentPlan51 from '../../../../assets/images/apartmentPlan51,39.png'
import apartmentPlan44 from '../../../../assets/images/apartmentPlan43,81.png'
import apartmentPlan43 from '../../../../assets/images/apartmentPlan43,19.png'
import apartmentPlan32 from '../../../../assets/images/apartmentPlan32,89.png'
import apartment3d54 from '../../../../assets/images/apartment3d54,76.png'
import apartment3d51 from '../../../../assets/images/apartment3d51,39.png'
import apartment3d44 from '../../../../assets/images/apartment3d43,81.png'
import apartment3d43 from '../../../../assets/images/apartment3d43,19.png'
import apartment3d32 from '../../../../assets/images/apartment3d32,89.png'
import pdf from '../../../../assets/appartments-plan PDF.pdf'
import Modal from '../../../../components/Modal'
import apartmentSchem from '../../../../assets/icons/apartmentBlockSchem.svg'

SwiperCore.use([Navigation, Pagination, A11y]);

function ApartmentBlock({flatNumber, area, img, }) {
    const [rooms, setRooms] = useState(1)
    const [isScheme, setScheme] = useState('plan')
    const [modalActive, setModalActive] = useState(false)

    const data = [
        {
            rooms : 1,
            numOfpartment: 7,
            area: 32,
            scheme: {
                plan: apartmentPlan32,
                '3d': apartment3d32
            }
        },
        {
            rooms : 2,
            numOfpartment: 8,
            area: 54,
            scheme: {
                plan: apartmentPlan54,
                '3d': apartment3d54
            }
        },
        {
            rooms : 1,
            numOfpartment: 9,
            area: 44,
            scheme: {
                plan: apartmentPlan44,
                '3d': apartment3d44
            }
        },
        {
            rooms : 2,
            numOfpartment: 10,
            area: 51,
            scheme: {
                plan: apartmentPlan51,
                '3d': apartment3d51
            }
        },
        {
            rooms : 1,
            numOfpartment: 11,
            area: 43,
            scheme: {
                plan: apartmentPlan43,
                '3d': apartment3d43
            }
        }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                        <div className={styles.headerBlock}>
                            <h1 className={styles.title}>выбор квартиры</h1>
                            <div className={styles.actionBlock}>
                                <div className={styles.flatChoose}>
                                    <p className={styles.flatChooseTitle}>комнат</p>
                                    <button 
                                        className={classNames(styles.flatChooseButton, {
                                            [styles.activeFlatChooseButton]: rooms === 1
                                        })}
                                        onClick={() => setRooms(1)}
                                    >
                                        1
                                    </button>
                                    <button 
                                        className={classNames(styles.flatChooseButton, {
                                            [styles.activeFlatChooseButton]: rooms === 2
                                        })}
                                        onClick={() => setRooms(2)}
                                    >
                                        2
                                    </button>
                                </div>
                                <div className={styles.planChoose}>
                                    {/* <button 
                                        className={classNames(styles.planChooseButton, {
                                            [styles.activePlanChooseButton]: scheme === 
                                        })} 
                                        onClick={() => setScheme('plan')}
                                    >
                                        планировка
                                    </button> */}
                                    <button className={styles.planChooseButton} onClick={() => setScheme('plan')}>планировка</button>
                                    <button className={styles.planChooseButton} onClick={() => setScheme('3d')}>3D</button>
                                </div>
                            </div>
                        </div>

                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    >
                        {data.map(item => item.rooms === rooms && (
                            <SwiperSlide>
                                <div className={styles.slide}>
                                    <div className={styles.description}>
                                        <p className={styles.text}>квартира <span>№{item.numOfpartment}</span></p>
                                        <p className={styles.text}>комнат <span>{item.rooms}</span></p>
                                        <p className={styles.text}>площадь<span>{item.area} м<sup>2</sup></span></p>
                                    </div>
                                    <div className={styles.imgBlock}>
                                        <img src={item.scheme[isScheme]} alt="">{img}</img>
                                    </div>
                                    <div className={styles.block}>
                                        <div className={styles.apartmentBlockSchemImg}>
                                            <img className={styles.apartmentBlockSchem} src={apartmentSchem} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>

                <div className={styles.footerBlock}>
                    <button className={styles.footerButton} onClick={() => setModalActive(true)}>Заявка на бронь</button>
                    <a className={styles.download} href={pdf} target="_blank" download="Планировка квартир">Скачать PDF</a>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}/>
         
        </div>
           
    )
}

export default ApartmentBlock