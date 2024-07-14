import styles from './Sobre.module.css'
import avatar from './img/avatar.png'
import html from './img/icon-html.svg'
import css from './img/icon-css.svg'
import js from './img/icon-js.svg'
import react from './img/icon-react.svg'
import node from './img/icon-node.svg'
import sql from './img/icon-sql.svg'
export default function Sobre() {
    return (


        <section className={styles.sobre}>

            <div className={styles.bio}>
                <img src={avatar} alt="Avatar" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>
                    <p><span>Sou Luca_Dev </span></p><br /> <br />

                    <p> <strong>Sou um Desenvolvedor Junior apaixonado
                        em transformar ideias em realidade digital.</strong></p>

                    <p>Meu nome é Luiz Carlos e estou em transição de carreira para a área de desenvolvimento, um campo pelo qual sempre tive grande interesse. Tenho uma sólida experiência de sete anos como Balconista em farmácia, além de quatro anos como digitador e operador de computador no Hospital Jayme da Fonte. Também atuei como vendedor de produtos de informática na NetBOx por muitos anos.

                        Durante minha transição, participei do curso Profissão Programador, onde desenvolvi diversos projetos, incluindo a página “Projeto Batman”, que simula a venda de ingressos e a apresentação de filmes na web. Além disso, criei e desenvolvi minha própria página de portfólio, onde apresento os projetos realizados ao longo do curso e as tecnologias que aprendi e domino.

                        <strong>Recentemente, concluí os cursos Fast Transição de Carreiras de Dados (2023) e Fast Front End (2024) na Cesar School, aprimorando ainda mais minhas habilidades na área de desenvolvimento.</strong></p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Icone do html" />
                    <img src={css} alt="Icone do css" />
                    <img src={js} alt="Icone do js" />
                    <img src={react} alt="Icone do react" />
                    <img src={node} alt="Icone do node" />
                    <img src={sql} alt="Icone do sql" />
                </div>
            </div>
        </section>




    )
}