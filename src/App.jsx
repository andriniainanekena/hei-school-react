import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
      <header>
        <div className='header'>
        <img src="https://www.hei.school/wp-content/uploads/2022/09/cropped-Logo-e1662790239183.png" alt="HEI Logo" />
        </div>
        <nav className='header-nav'>
          <a href="#accueil" className='nav-link'>ACCUEIL</a>
          <a href="#actualites" className='nav-link'>ACTUALITÉS</a>
          <a href="#bourse-etudes" className="nav-link">BOURSE D'ÉTUDES</a>
          <a href="#inscription" className="nav-link">INSCRIPTION</a>
          <button className="nav-button">INTRANET</button>
        </nav>
      </header>

      <section className='hero-section'>
      <div className='hero-content'>
      <h1 className='hero-title'>Haute École d'Informatique</h1>
      <p className="hero-text">
        Une infrastructure de qualité et un programme pédagogique qui répond au besoin du marché pour l'employabilité de nos étudiants.
      </p>
      <div className='hero-buttons'>
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
