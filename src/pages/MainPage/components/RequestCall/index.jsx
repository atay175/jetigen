import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import logo from '../../../../assets/images/requestCallLogo.png'
import IMask from 'imask';


function requestCall() {

    function phoneMask () {
        let element = document.getElementById('phoneMask');
        let maskOptions = {
        mask: '+{996}(000)000-000'
        };
        let mask = IMask(element, maskOptions);
    }

   



    function addPost(e){
        e.preventDefault();

        let userName = document.getElementById('userName').value;
        let phoneNumber = document.getElementById('phoneMask').value;

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method:'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            },
            body:JSON.stringify({userName:userName, phoneNumber:phoneNumber})
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
    }
        
    
       
    
    return (
        <div className={styles.container}>
         
            <div className={styles.wrapper}>

                <div className={styles.headerBlock}>
                    <div className={styles.logo}>
                        <img src={logo} alt="" />
                    </div>
                    <div className={styles.textBlock}>
                            <h1 className={styles.title}>Клубный дом «ЖЕТИГЕН» - дом, где вы сможете спрятаться от городской суеты и почувствуете свободу в купе с современной архитектурой</h1>
                            <p className={styles.subTitle}>Мы свяжемся с вами для личной консультации</p>
                    </div>
                </div>
               

                <div className={styles.body}>
              
                    <div className={styles.actionBlock}>

                        <div className={styles.inputBlock}>
                            <p className={styles.text}>Введите имя</p>
                            <input type="text" id="userName" placeholder='Ваше имя' />
                        </div>

                        <div className={styles.inputBlock}>
                            <p className={styles.text}>Введите номер телефона</p>
                            <input onClick={phoneMask} id="phoneMask" type="text" placeholder='+996 _ _ _   _ _ _  _ _ _' />
                        </div>

                        <button onClick={addPost} className={styles.bodyButton} value="submit">Оставить заявку</button>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default requestCall