import styles from './styles.module.scss'
import IMask from 'imask';


function RequestCall() {

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

               <div className={styles.textBlock}>
                    <h1 className={styles.tittle}>Остались еще вопросы?</h1>
                    <p className={styles.subtittle}>Оставьте заявку на обратный звонок</p>
               </div>
                <div className={styles.inputBlock}>
                    <div className={styles.inputArea}>
                        <p className={styles.inputArea__text}>Введите имя</p>
                        <input id="userName" className={styles.input} type="text" placeholder='Ваше имя' />
                    </div>
                    <div className={styles.inputArea}>
                        <p className={styles.inputArea__text}>Введите номер телефона</p>
                        <input onClick={phoneMask} id="phoneMask" className={styles.input} type="text" placeholder='+996 _ _ _   _ _ _  _ _ _' />
                    </div>

                    <button onClick={addPost} value="submit" className={styles.button}>Оставить заявку</button>
                </div>
            </div>

        </div>
    )
}

export default RequestCall