import React, { useState } from 'react';
import '../styles/Resume.css';
import '../styles/App.css';

const Resume = () => {
    const [language, setLanguage] = useState('pt'); // Estado para o idioma da página

    // Alterna entre português e inglês
    const toggleLanguage = () => {
        setLanguage(language === 'pt' ? 'en' : 'pt');
    };

    // Definindo o arquivo do currículo com base no idioma
    const resumeFile = language === 'pt' 
        ? '/MarcosSousa-CV-Estagio.pdf'  // Currículo em português
        : '/MarcosSousa-CV-Internship.pdf'; // Currículo em inglês

    return (
        <div className="resume-container">
            {/* Botão de alternância de idioma */}
            <button className="language-toggle" onClick={toggleLanguage}>
                <img src="https://cdn-icons-png.flaticon.com/512/44/44386.png" alt="Idioma" className="icon-globe" />
                <span className="language-text">
                    {language === 'pt' ? 'Português' : 'English'}
                </span>
            </button>

            {/* Título da página */}
            <h2 className="resume-title">
                {language === 'pt' ? 'Meu Currículo' : 'My Resume'}
            </h2>

            {/* Descrição do currículo */}
            <p className="resume-description">
                {language === 'pt'
                    ? 'Aqui você encontrará meu currículo detalhado, que resume minha formação e experiência. Estou em busca de oportunidades na área de análise de dados e automação.' 
                    : 'Here you will find my detailed resume, summarizing my education and experience. I am seeking opportunities in data analysis and automation.'}
            </p>

            {/* Link para download do currículo */}
            <a 
                href={resumeFile} 
                download 
                className="resume-download-btn"
                target="_blank"
                rel="noopener noreferrer"
            >
                {language === 'pt' ? 'Baixar Currículo' : 'Download Resume'}
            </a>

            {/* Link para LinkedIn */}
            <p className="linkedin-link">
                {language === 'pt'
                    ? 'Para mais informações, acesse meu LinkedIn:' 
                    : 'For more information, visit my LinkedIn:'}
                <a href="https://www.linkedin.com/in/marcos-sousa-616375249/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
                    {language === 'pt' ? 'Meu LinkedIn' : 'My LinkedIn'}
                </a>
            </p>
        </div>
    );
};

export default Resume;
