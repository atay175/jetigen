import styles from './styles.module.scss'
import companyDescriptioneIMG from '../../../../assets/images/companyDescriptioneIMG.png'

function CompanyDescription() {
    return (
        <div id={styles.aboutCompany} className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.CompanyDescription}>
                    <div className={styles.imgBlock}>
                        <div className={styles.img}><img src={companyDescriptioneIMG} alt="" /></div>
                    </div>
                    <div className={styles.textBlock}>
                        <h1 className={styles.title}> о компании</h1>
                        <div className={styles.descriptionBlock}>
                        <p className={styles.description}>Строительная компания «ААA СТРОЙ ГРУПП» была основана в 2015 году. Реализует крупнейшие по масштабам проекты жилой и коммерческой недвижимости на рынке Кыргызстана. </p>
                        <p className={styles.description}>Наша строительная компания предоставляет полный комплекс услуг по строительству, сдаче в аренду объектов жилой и коммерческой недвижимости.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyDescription