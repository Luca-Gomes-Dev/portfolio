
import { Link } from 'react-router-dom'
import styles from './Home.module.css'
export default function Home() {
    return (
        <>
            
                <section className={styles.home}>
                    <div className={styles.apresentacao}>
                        <p>
                            Olá, sou <br />
                            <span>Luca_Dev</span>
                        </p>
                        <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
                            Saiba mais sobre mim
                        </Link>
                    </div>
                    <figure className={styles.fig}>
                        <img className={styles.img_home} src="/dev.jpg" alt="Imagem de Home" />
                        <span>Procurando um Programador Junior</span>
                    </figure>

                </section>
            


        


        </>
    )
}