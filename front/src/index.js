import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/';
import Header from './components/Header';
import Exercices from './pages/Exercices';
import Login from './pages/Login';
import { createGlobalStyle } from 'styled-components';
import grille from './assets/grille.jpg';
import Footer from './components/Footer';
import Classement from './pages/Classement'
import Apropos from './pages/Apropos'

const GlobalStyle = createGlobalStyle`
    body {
        background-color: rgb(24, 24, 27);
        color: rgb(255, 255, 255);
        position: relative;
        z-index: 0;
        align-items: center;
    }
    
    body::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 300px; /* Hauteur de l'image de fond */
        background-image: url(${grille});
        background-repeat: no-repeat;
        background-position: top center;
        background-size: cover;
        background-color: rgb(24, 24, 27); /* Couleur de fond en bas */
        mask-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)); /* Dégradé pour fondre l'image */
        -webkit-mask-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)); /* Compatibilité avec WebKit */
        z-index: -1; /* Pour s'assurer que le pseudo-élément est derrière le contenu */
    }
`;

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercices" element={<Exercices />} />
                <Route path='/login' element={<Login />} />
                <Route path='/classement' element={<Classement />} />
                <Route path='/apropos' element={<Apropos />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
