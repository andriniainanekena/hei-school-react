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
      </section>


    </div>
  )
}

export default App
