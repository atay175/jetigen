import styles from './styles.module.scss'
import AVAWhite from '../../../../assets/icons/AVAWhite.svg'
import berekeWhite from '../../../../assets/icons/berekeWhite.svg'
import berekeWhite1 from '../../../../assets/icons/berekeWhite1.svg'
import keremetConstruction from '../../../../assets/icons/keremetConstruction.svg'
import jetigenWhite from '../../../../assets/icons/jetigenWhite.svg'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([Navigation, Scrollbar, A11y]);

function CompanyProjects() {

    return (
        <div id="projects" className={styles.container}>
            <div className={styles.wrapper}>
            <div className={styles.tittleBlock}>
              <h1 className={styles.title}>наши проекты</h1>
              <p className={styles.subTitle}>На протяжении 6 лет компания </p>
            </div>
            <div className={styles.slider}>
              <Swiper
                spaceBetween={30}
                slidesPerView={2.5}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              >
                <SwiperSlide>
                  <div className={styles.cardOne}>
                    <div className={styles.blur} />
                    <div className={styles.content}>
                      <div className={styles.img}>
                        <img src={jetigenWhite} alt="" />
                      </div>
                      <button className={styles.button}>Подробнее</button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.cardTwo}>
                    <div className={styles.blur} />
                    <div className={styles.content}>
                      <div className={styles.img}>
                        <img src={berekeWhite} alt="" />
                      </div>
                      {/* <button className={styles.button}>Подробнее</button> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.cardThree}>
                    <div className={styles.blur} />
                    <div className={styles.content}>
                      <div className={styles.img}>
                        <img src={berekeWhite1} alt="" />
                      </div>
                      {/* <button className={styles.button}>Подробнее</button> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.cardFour}>
                    <div className={styles.blur} />
                    <div className={styles.content}>
                      <div className={styles.img}>
                        <img src={keremetConstruction} alt="" />
                      </div>
                      {/* <button className={styles.button}>Подробнее</button> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.cardFive}>
                    <div className={styles.blur} />
                    <div className={styles.content}>
                      <div className={styles.img}>
                        <img  src={AVAWhite} alt="" />
                      </div>
                      {/* <button className={styles.button}>Подробнее</button> */}
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            </div>
        </div>

    )
}


export default CompanyProjects