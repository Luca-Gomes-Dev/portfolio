import styles from './Contatos.module.css'
import { GoMail } from "react-icons/go";
import { BsInstagram, BsWhatsapp, BsGithub, BsLinkedin } from "react-icons/bs";
export default function Contatos () {
    return(
        <>
            
            <section className={styles.contatos}>
                <h2>Contatos</h2>
                <h3>Entre em contato</h3>
                <p>Para que possamos conversar mais sobre.</p>

                <div className={styles.icones}>
                    <a href="mailto:lcgvasconcelos2@gmail.com" target='_blank' rel="noopener noreferrer">
                    <GoMail className={styles.icone} />
                    </a>
                    <a href="https://www.instagram.com/luizca001/" target='_blank' rel="noopener noreferrer">
                    <BsInstagram className={styles.icone}/>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5581984176248&text=Oi,%20posso%20ajudar?" target='_blank' rel="noopener noreferrer">
                    <BsWhatsapp className={styles.icone}/>
                    </a>
                    <a href="https://github.com/Luca-Gomes-Dev" target='_blank' rel="noopener noreferrer">
                    <BsGithub className={styles.icone} />
                    </a>
                    <a href="https://www.linkedin.com/in/luiz-carlos-gomes-032001171/" target='_blank' rel="noopener noreferrer">
                    <BsLinkedin className={styles.icone} />
                    </a>
                </div>
            </section>
            

        </>
        
    )
}