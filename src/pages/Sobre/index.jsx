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

                    <div className={styles.textos_sobre}>
                        <p><strong>Sou um Desenvolvedor Junior apaixonado em transformar ideias em realidade digital.</strong></p>

                        <p><strong>Meu nome é Luiz Carlos e estou em transição de carreira para a área de desenvolvimento, um campo pelo qual sempre tive grande interesse. Recentemente, concluí os cursos Fast Transição de Carreiras de Dados (2023) e Fast Front End (2024) na Cesar School, aprimorando ainda mais minhas habilidades na área de desenvolvimento.</strong></p>

                        <p>Durante minha transição, participei também do curso Profissão Programador em 2020, onde desenvolvi diversos projetos, incluindo a página <strong>“Projeto Batman”</strong>, que simula a venda de ingressos e a apresentação de filmes na web. Além disso, criei e desenvolvi minha <strong>“página de portfólio”</strong>, onde apresento os projetos realizados ao longo do curso e as tecnologias que aprendi e domino.</p>

                        <p><strong>Trabalho como freelancer com manutenção de computadores, fazendo instalação de programas como Windows, Linux, software open source, instalação de peças (placa mãe, placa de vídeo, SSD, entre outras). Também realizo serviços gráficos diversos utilizando CorelDRAW e Photoshop como ferramentas.</strong></p>

                        <p>Tenho uma sólida experiência de oito anos como balconista em farmácia, além de quatro anos como digitador e operador de computador no Hospital Jayme da Fonte. Também atuei como vendedor de produtos de informática na NetBox por muitos anos.</p>



                    </div>
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