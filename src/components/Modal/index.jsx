import styles from './styles.module.scss'
import classNames from 'classnames'
import closeModal from '../../assets/icons/close-modal.svg'
import IMask from 'imask';



const Modal = ({active, setActive}) => {

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
     <div 
        className={classNames(styles.modal, {
            [styles.active]: active
        })}
        onClick={() => setActive(false)}
    >
         <div className={styles.wrapper}>
            <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={() => setActive(false)}><img src={closeModal} alt="" /></button>
                <div className={styles.inputBlock}>
                    <p className={styles.modalText}>Введите имя</p>
                    <input
                    id='userName'
                    className={classNames(
                         styles.input,
                         styles.userName
                    )} 
                    type="text"
                    placeholder='Ваше имя'
                    />
                </div>
                <div className={styles.inputBlock}>
                    <p className={styles.modalText}>Введите номер телефона</p>
                    <input 
                    id='phoneMask'
                    className={classNames(
                        styles.input,
                        styles.phoneMask
                    )} 
                    onClick={phoneMask}
                    type="text"  
                    placeholder='+996 _ _ _   _ _ _  _ _ _'
                    />
                </div>
                <button className={styles.modalButton} onClick={addPost}>Оставить заявку</button>
            </div>
         </div>
     </div> 
    )
}

export default Modal