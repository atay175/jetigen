import styles from './styles.module.scss'
import CompanyObjectsIMG1 from '../../../../assets/images/CompanyObjectsIMG1.png'
import CompanyObjectsIMG2 from '../../../../assets/images/CompanyObjectsIMG2.png'
import CompanyObjectsIMG3 from '../../../../assets/images/CompanyObjectsIMG3.png'
import locationVector from '../../../../assets/icons/locationVector.svg'


function CompanyObjects() {
    return (
        <div className={styles.container}>

            <div className={styles.wrapper}>

            <div className={styles.card}>
                <div className={styles.imgBlock}>
                    <img src={CompanyObjectsIMG1} alt="" />
                </div>

                <div className={styles.textBlock}>
                    <h2 className={styles.title}>jetigen</h2>
                    <p className={styles.description}>Клубный дом «ЖЕТИГЕН» представляет собой 7-этажный дом, который располагает 1-2 комнатными уютными квартирами, площадью от 32 до 54 кв.м. </p>
                    <p className={styles.location}><img className={styles.locationVector} src={locationVector} alt="" /> Расположение: Микрорайон Джал</p>
                    <button className={styles.button}>Подробнее</button>
                </div>
            </div>

            <div className={styles.cardRevers}>
                <div className={styles.textBlock}>
                    <h2 className={styles.title}>элебаева</h2>
                    <p className={styles.description}>Новый современный клубный дом «Элебаева» — это комфортабельный 8-этажный дом. Располагается он на пересечении улиц Элебаева и Медерова. Удобное расположение c одной стороны даёт возможность быстро добраться до центра города, а с другой стороны оставаться в экологически чистом районе. </p>
                    <p className={styles.extraText}>скоро</p>
                </div>

                <div className={styles.imgBlock}>
                    <img src={CompanyObjectsIMG2} alt="" />
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.imgBlock}>
                    <img src={CompanyObjectsIMG3} alt="" />
                </div>

                <div className={styles.textBlock}>
                    <h2 className={styles.title}>sky</h2>
                    <p className={styles.description}>Клубный дом «Sky» создан для тех, кто хочет уюта, тепла и спокойствия. объект распологается по Южной Магистрали недалеко от Ботанического сада. Наслаждайтесь прекрасным панорамным пейзажем и горным воздухом в сочетании с современной европейской архитектурой. </p>
                    <p className={styles.extraText}>скоро</p>
                </div>
            </div>
                
            </div>

        </div>
    )
}

export default CompanyObjects