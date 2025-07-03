import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
      <header className="header">
        <div className="header-logo">
          <img 
            src="https://www.hei.school/wp-content/uploads/2022/09/cropped-Logo-e1662790239183.png" 
            alt="HEI Logo"
          />
        </div>
        <nav className="header-nav">
          <a href="#accueil" className="nav-link nav-link-accent">ACCUEIL</a>
          <a href="#actualites" className="nav-link">ACTUALITÉS</a>
          <a href="#bourse-etudes" className="nav-link">BOURSE D'ÉTUDES</a>
          <a href="#inscription" className="nav-link">INSCRIPTION</a>
          <button className="nav-button">INTRANET</button>
        </nav>
      </header>

      <section 
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(30, 58, 138, 0.8)), url('https://hei.school/wp-content/uploads/2024/09/hei-banner-1.webp')`
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Haute École d'Informatique</h1>
          <p className="hero-text">
            Une infrastructure de qualité et un programme pédagogique qui répond au besoin du marché pour l'employabilité de nos étudiants.
          </p>
          <div className="hero-buttons">
            <button className="hero-button hero-button-primary">Inscrivez-vous ici</button>
            <button className="hero-button hero-button-secondary">Emploi du temps</button>
            <button className="hero-button hero-button-tertiary">Programme pédagogique</button>
          </div>
        </div>
      <button className="hero-arrow hero-arrow-left">‹</button>
      <button className="hero-arrow hero-arrow-right">›</button>
      </section>

      <section className="about-section">
        <div className="about-content">
          <div className="about-images">
            <img src="https://hei.school/wp-content/uploads/2024/11/A-propos-left-1.webp" alt="Image" className="about-image" />
          </div>
          <div className="about-text">
            <h2 className="section-title">À propos de nous</h2>
            <div className="about-item">
              <span className="about-icon">Icon 1</span>
              <h3 className="about-subtitle">+3ans</h3>
              <p className="section-text">Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l’informatique. Nous sommes un groupe d’experts, de professionnels et des passionnés de l’informatique de Madagascar et du monde entier.</p>
            </div>
            <div className="about-item">
              <span className="about-icon">Icon 2</span>
              <h3 className="about-subtitle">+250 étudiants</h3>
              <p className="section-text">Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà fait confiance à notre formation habilitée par l’État malgache. Avec eux tous, nous sommes fiers de pouvoir parler de la “grande famille HEI”.</p>
            </div>
            <div className="about-item">
              <span className="about-icon">Icon 3</span>
              <h3 className="about-subtitle">Notre mission</h3>
              <p className="section-text">Notre mission est d’amener des jeunes malgaches sur des domaines porteurs comme l’intelligence artificielle, la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="careers-section">
        <h2 className="section-title">Quelques débouchés</h2>
        <p className="section-text">Formez-vous à une panoplie de métiers du numérique avec nous et venez acquérir les fondements de la programmation (qui vous servira pour les différents métiers) ! Ce sont des métiers porteurs, des métiers du présent, des métiers du futur…</p>
        <p className="careers-text">Développeur back end, développeur front end, développeurs mobile, chefs de projet, exploitants cloud, analystes cybersécurité, pentesters, auditeur technique SSI, auditeur organisationnel SSI, administrateur système et réseau, développeur de sécurité…</p>
        <div className="careers-image">
          <img src="https://hei.school/wp-content/uploads/2024/11/IMG-02-e1720543344824-987x1024-1.webp" alt="Student" className="careers-student-image" />
        </div>
      </section>

      <section className="domains-section">
        <h2 className="section-title">Domaines</h2>
        <p className="section-text">Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l'avenir :</p>
        <div className="domains-list">
          <div className="domain-card">
            <img src="https://img.icons8.com/ios-filled/50/000000/cloud.png" alt="Cloud" />
            <h3 className="domain-title">Cloud et cybersécurité</h3>
            <p className="domain-text">Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages (comme sur AWS). Ou encore, devenez maître de la sécurisation des données en ligne ou des programmes et applications contre les cybermenaces. Chez HEI, vous allez vous former dans le domaine du cloud et de la cybersécurité.</p>
          </div>
          <div className="domain-card">
            <img src="https://img.icons8.com/ios-filled/50/000000/brain.png" alt="AI" />
            <h3 className="domain-title">Intelligence artificielle</h3>
            <p className="domain-text">Le monde de la reconnaissance faciale ou la détection d'obstacles par les voitures semi-autonomes vous fascinent ? Ce n'est pas sorcier, cela s'apprend. Apprenez les bases de l'intelligence artificielle lors de vos cours chez HEI.</p>
          </div>
          <div className="domain-card">
            <img src="https://img.icons8.com/ios-filled/50/000000/code.png" alt="Engineering" />
            <h3 className="domain-title">Ingénierie logicielle</h3>
            <p className="domain-text">Apprenez les principes de la conception du développement de programmes et d'applications web et mobile et explorez le monde fascinant des "codes". À la fin de votre formation, vous serez aptes à proposer des solutions pratiques, créatives et innovantes à des particuliers ou des entreprises pour leurs besoins numériques.</p>
          </div>
        </div>
      </section>

      <section className="admission-section">
        <h2 className="section-title">Admission</h2>
        <p className="section-text">Ouverte aux bacheliers de toutes les séries, l'admission chez HEI se fait par test de niveau : une épreuve de français niveau B2 et d'une épreuve de mathématiques niveau Terminale D.</p>
        <div className="admission-steps">
          <div className="admission-step">
            <h3 className="step-number">01</h3>
            <p className="step-text">Dépôt de dossiers : pour les bacheliers de toutes séries sans limite d'âge</p>
          </div>
          <div className="admission-step admission-step-middle">
            <h3 className="step-number">02</h3>
            <p className="step-text">Test de niveau : composé d'une épreuve de français niveau B2 et d'une épreuve de mathématiques niveau Terminale D</p>
          </div>
          <div className="admission-step admission-step-last">
            <h3 className="step-number">03</h3>
            <p className="step-text">Inscription définitive (si test réussi)</p>
          </div>
        </div>
        <div className="admission-buttons">
          <button className="admission-button">Inscrivez-vous ici</button>
          <button className="admission-button">Résultat concours</button>
        </div>
      </section>


    </div>
  )
}

export default App
