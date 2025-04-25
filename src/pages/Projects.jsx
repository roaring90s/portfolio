import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { translations } from "../translations";

const Projects = ({ language: initialLanguage = 'pt' }) => {
    const [currentLanguage, setCurrentLanguage] = useState(initialLanguage);
    const [isButtonVisible, setIsButtonVisible] = useState(true);

    const toggleLanguage = () => {
        setCurrentLanguage(currentLanguage === 'pt' ? 'en' : 'pt');
    };

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsButtonVisible(false);  // Esconde o botão após rolar 100px
        } else {
            setIsButtonVisible(true);  // Exibe o botão quando a rolagem voltar para o topo
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="projects-page">
            <div className="projects-header">
                <button 
                    className={`language-toggle ${isButtonVisible ? '' : 'hidden'}`} 
                    onClick={toggleLanguage}
                >
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/44/44386.png" 
                        alt="Idioma" 
                        className="icon-globe" 
                    />
                    <span className="language-text">
                        {currentLanguage === 'pt' ? 'Português' : 'English'}
                    </span>
                </button>
                <h1 className="projects-title">
                    {currentLanguage === 'pt' ? 'Meus Projetos' : 'My Projects'}
                </h1>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card-wrapper small-card">
                        <ProjectCard 
                            title={project.title}
                            image={project.image}
                            type={`${translations[currentLanguage].projectType}: ${project.type}`}
                            tools={`${translations[currentLanguage].tools}: ${project.tools}`}
                            languageLabel={`${translations[currentLanguage].languageLabel}: ${project.language}`}
                            repoLink={project.repoLink}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
