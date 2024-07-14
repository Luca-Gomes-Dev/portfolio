import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import styles from './Projetos.module.css';

export default function Projetos() {
    const [repositorios, setRepositorios] = useState([]);

    useEffect(() => {
        const buscarRepositorios = async () => {
            const response = await fetch('https://api.github.com/users/Luca-Gomes-Dev/repos?page=1&per_page=50');
            const data = await response.json();
            setRepositorios(data);
        };
        buscarRepositorios();
    }, []);

    return (
        <section className={styles.projetos}>
            <h2>Projetos</h2>
            {
                repositorios.length > 0 ? (
                    <section className={styles.lista}>
                        {
                            repositorios.map((repo) => (
                                <Card 
                                    key={repo.id} 
                                    name={repo.name} 
                                    description={repo.description} 
                                    html_url={repo.html_url} 
                                />
                            ))
                        }
                    </section>
                ) : (
                    <p>Carregando repositórios...</p>
                )
            }
        </section>
    );
}
