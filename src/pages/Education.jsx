import React, { useState } from 'react';
import '../styles/Education.css';
import '../styles/App.css';

const Education = () => {
    const [language, setLanguage] = useState('pt');
    // Alterna o idioma
    const toggleLanguage = () => {
        setLanguage(language === 'pt' ? 'en' : 'pt');
    };


    return (
        <div className="education-section">
            <button className="language-toggle" onClick={toggleLanguage}>
                <img src="https://cdn-icons-png.flaticon.com/512/44/44386.png" alt="Idioma" className="icon-globe" />
                <span className="language-text">
                    {language === 'pt' ? 'Português' : 'English'}
                </span>
            </button>

            <h2>{language === 'pt' ? 'Educação' : 'Education'}</h2>

            <div className="education-block">
                <h3>{language === 'pt' ? 'Análise e Desenvolvimento de Sistemas' : 'Systems Analysis and Development'}</h3>
                <p className="education-details">
                    {language === 'pt'
                        ? 'Universidade Católica – Bolsista ProUni · Cursando (Out. 2024 - Nov/Dez 2026)'
                        : 'Universidade Católica – ProUni Scholarship · In Progress (Oct.2024 - Nov/Dec. 2026)'}
                </p>
            </div>

            <div className="education-block">
                <h3>{language === 'pt' ? 'Técnico em Informática' : 'Technical Degree in IT'}</h3>
                <p className="education-details">
                    {language === 'pt'
                        ? 'Escola Técnica de Brasília · (2023-2024)'
                        : 'Escola Técnica de Brasília · (2023-2024)'}
                </p>
            </div>

            <div className="education-block">
    <h3>{language === 'pt' ? 'Certificações' : 'Certifications'}</h3>
    <ul className="certification-list">
        <li>
            {language === 'pt' 
                ? 'Google Data Analytics – Coursera' 
                : 'Google Data Analytics – Coursera'}
        </li>
        <li>
            {language === 'pt' 
                ? 'Certificado de Proficiência Voxy - Inglês Avançado - recebido em 2024'
                : 'Voxy Proficiency Achievement Certificate - Advanced English - received in 2024'}
        </li>
        <li>
            {language === 'pt' 
                ? 'Alura - Oracle Next Education – Escola de Data Science'
                : 'Alura - Oracle Next Education – Data Science School'}
        </li>
        <li>
            {language === 'pt' 
                ? 'BootCamp Angular Developer da DIO, com Angular, TypeScript e práticas de front-end, em parceria com o iFood'
                : 'Angular Developer BootCamp by DIO, focused on Angular, TypeScript, and front-end practices – powered by iFood'}
        </li>
        <li>
            {language === 'pt' 
                ? 'Fundamentos de SCRUM e desenvolvimento corporativo com GitHub – certificado pela Universidade Católica de Brasília (2024)'
                : 'SCRUM Fundamentals and Corporate Development using GitHub – certified by Universidade Católica de Brasília (2024)'}
        </li>
    </ul>
</div>



            <div className="education-block">
                <h3>{language === 'pt' ? 'Idiomas' : 'Languages'}</h3>
                <ul>
                    <li>{language === 'pt' ? 'Português – Nativo' : 'Portuguese – Native'}</li>
                    <li>{language === 'pt' ? 'Inglês – Fluente' : 'English – Fluent'}</li>
                </ul>
            </div>
        </div>
    );
};

export default Education;
