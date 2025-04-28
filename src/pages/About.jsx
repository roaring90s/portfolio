import React, { useState } from 'react';
import '../styles/About.css';
import '../styles/App.css';
import profilePic from '../assets/profile-pic.jpeg';
import tccPic from '../assets/tcc-pic.jpeg';


const About = () => {
    const [language, setLanguage] = useState('pt'); // Estado para o idioma da página

    // Alterna entre português e inglês
    const toggleLanguage = () => {
        setLanguage(language === 'pt' ? 'en' : 'pt');
    };

    return (
        <div className="education-section">
            {/* Botão de alternância de idioma */}
            <button className="language-toggle" onClick={toggleLanguage}>
                <img src="https://cdn-icons-png.flaticon.com/512/44/44386.png" alt="Idioma" className="icon-globe" />
                <span className="language-text">
                    {language === 'pt' ? 'Português' : 'English'}
                </span>
            </button>

            <h2>{language === 'pt' ? 'Sobre Mim' : 'About Me'}</h2>

            {/* Espaço para imagem */}
            <div className="about-image">
        <img src={profilePic} alt="Foto de Marcos" className="intro-image" />
            </div>

            <p>
                {language === 'pt'
                    ? 'Meu nome é Marcos Sousa. Sou um estudante apaixonado por tecnologia e dados, atualmente cursando Análise e Desenvolvimento de Sistemas na Universidade Católica de Brasília, onde sou bolsista ProUni. Com formação técnica em Informática, venho expandindo minha experiência através de cursos, bootcamps e projetos pessoais que envolvem análise de dados, automação e desenvolvimento web.'
                    : 'My name is Marcos Sousa. I’m a tech and data enthusiast currently studying Systems Analysis and Development at Universidade Católica de Brasília, where I’m a ProUni scholarship holder. With a technical background in IT, I’ve been expanding my experience through courses, bootcamps, and personal projects involving data analysis, automation, and web development.'}
            </p>
            <p>
                {language === 'pt'
                    ? 'Sou movido pela curiosidade e pelo desejo de usar dados para resolver problemas reais. Gosto de transformar informação em soluções práticas, com um olhar voltado à eficiência e à inovação.'
                    : 'I’m driven by curiosity and the desire to use data to solve real-world problems. I enjoy turning information into practical solutions with a focus on efficiency and innovation.'}
            </p>
            <p>
                {language === 'pt'
                    ? 'Fora do mundo dos códigos, adoro poesia, música e boas conversas. Acredito no poder da colaboração, da empatia e da construção de pontes entre diferentes áreas e pessoas.'
                    : 'Outside the world of code, I love poetry, music, and deep conversations. I believe in the power of collaboration, empathy, and building bridges between different fields and people.'}
            </p>

            {/* Seção sobre o TCC */}
            <div className="tcc-section">
                <h3>{language === 'pt' ? 'Sobre o meu TCC' : 'About my Final Project'}</h3>

                <div className="tcc-image">
                    <img src={tccPic} alt="Imagem do TCC" />
                </div>

                <p>
                    {language === 'pt'
                        ? 'Apresentei meu TCC do curso Técnico em Informática em dezembro de 2024, obtendo nota 9,90. Desenvolvi um Sistema de Compra e Venda com foco em documentação e gestão de TI. Aguardo apenas a realização do estágio obrigatório (carga horária reduzida e em período noturno), etapa final para a certificação pela Escola Técnica de Brasília (ETB), sem impacto na disponibilidade para atuação profissional.'
                        : 'I presented my Final Project for the IT Technician course in December 2024, achieving a grade of 9.90. I developed a Purchase and Sale System focused on documentation and IT management practices. I am currently awaiting the completion of a mandatory short-term, night-time internship, the final requirement for certification by the Escola Técnica de Brasília (ETB), with no impact on my professional availability.'}
                </p>
            </div>
        </div>
    );
};

export default About;
