import React, { useState, useEffect } from "react"; 
import { useSwipeable } from 'react-swipeable';
import ProjectCard from '../components/ProjectCard';
import { translations } from '../translations';
import { projects } from '../data/projects'; 
import profilePic from '../assets/profile-pic.jpeg';

const Home = () => {
    const [language, setLanguage] = useState('pt');
    const [currentProject, setCurrentProject] = useState(0);  
    const [isVisible, setIsVisible] = useState(false);

    // Alterna o idioma
    const toggleLanguage = () => {
        setLanguage(language === 'pt' ? 'en' : 'pt');
    };

    // Efeito de fade-in após o carregamento
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // Delay de 100ms para iniciar o efeito
        return () => clearTimeout(timer);
    }, []);
 
    const featuredProjects = projects.slice(0, 3);

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => {
            setCurrentProject((prev) =>
                prev < featuredProjects.length - 1 ? prev + 1 : prev
            );
        },
        onSwipedRight: () => {
            setCurrentProject((prev) => (prev > 0 ? prev - 1 : prev));
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });



    const cardWidth = 300;  // Ajuste a largura do card conforme necessário
    const gap = 40; // Ajuste o gap entre os cards

    return (
        <div className="Home">
            <h1>{translations[language].title}</h1>

            <button className="language-toggle" onClick={toggleLanguage}>
                <img src="https://cdn-icons-png.flaticon.com/512/44/44386.png" alt="Idioma" className="icon-globe" />
                <span className="language-text">
                    {language === 'pt' ? 'Português' : 'English'}
                </span>
            </button>

            {/* Introdução */}
            <div className={`intro-container ${isVisible ? 'visible' : ''}`}>
            <img src={profilePic} alt="Foto de Marcos" />
                <h1 className="intro-title">Marcos Sousa</h1>
                <h3 className="intro-subtitle">
                    {language === 'pt'
                        ? 'Aspirante a Analista de Dados'
                        : 'Aspiring Data Analyst'}            
                </h3>
                <p className="intro-text">
                    {language === 'pt'
                        ? 'Olá! Sou Marcos, estudante e entusiasta de dados, com paixão por transformar informação em soluções inteligentes.'
                        : 'Hey there! I\'m Marcos, a data enthusiast and student, passionate about turning information into smart solutions.'}
                </p>
            </div>


    {/* Divisória com texto estilizado */}
    <div className="divider-container">
        <span className="divider-text">
            {language === 'pt' ? 'Projetos em destaque' : 'Featured projects'}
        </span>
        <div className="divider-line"></div>
    </div>

            <div className="project-list" {...swipeHandlers}>
            <div className="project-card-container"
     style={{
         transform: `translateX(-${currentProject * (cardWidth + gap)}px)`,
         transition: "transform 0.5s ease-in-out"
     }}>
    {featuredProjects.map((project, index) => (
        <div key={index} className="project-card-wrapper">
            <ProjectCard
                title={project.title}
                image={project.image}
                type={`${translations[language].projectType}: ${project.type}`}
                tools={`${translations[language].tools}: ${project.tools}`}
                languageLabel={`${translations[language].languageLabel}: ${project.language}`}
                repoLink={project.repoLink}
            />
        </div>
    ))}
</div>
            </div>
        </div>
    );
};

export default Home;
