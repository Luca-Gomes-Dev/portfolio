import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header (){
    return(
        <header className={styles.header}>
            <Link to="/">
            <span>Luca_dev</span>
            </Link>
            
            <nav>
               <Link to="/">Home</Link>
               <Link to="/sobre">Sobre</Link>
               <Link to="/projetos">Projetos</Link>
               <Link to="/contatos">Contatos</Link>

            </nav>
        </header>
    )
}
 