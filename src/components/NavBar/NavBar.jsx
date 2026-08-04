import { useState } from 'react';
import './NavBar.css'
import { Login } from '../Login/Login'



export function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const handleCloseMenu = () => setIsMenuOpen(false)
    
    const handleLoginClick = (e) => {
        e.preventDefault();
        handleCloseMenu(); 
        setIsLoginOpen(true);
    }

    const handleCloseLogin = () => setIsLoginOpen(false);

    return (
        <nav className={`nav ${isMenuOpen ? 'nav-open':''}`}>
            <button className="nav__toggle" aria-label="Abrir menú"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span className="nav__hamburger"></span>
            </button>
            <ul className={`nav__list ${isMenuOpen ? 'nav__menu-visible':''}`}>
                <li className="nav__item"><a href="#inicio" className="nav__link" onClick={handleCloseMenu}>Inicio</a></li>
                <li className="nav__item"><a href="#sobre-nosotros" className="nav__link" onClick={handleCloseMenu}>Sobre Nosotros</a></li>
                <li className="nav__item"><a href="#torneos" className="nav__link" onClick={handleCloseMenu}>Torneos</a></li>
                <li className="nav__item"><a href="https://www.tenisdemesaparatodos.com/clubes_ampliar.asp?codigo=16"
                    className="nav__link" target="_blank" onClick={handleCloseMenu}>TMT</a></li>
                <li className="nav__item"><button className="nav__link link--login" onClick={handleLoginClick}>Iniciar
                    Sesión</button></li>
            </ul>
            {isLoginOpen && <Login onClose={handleCloseLogin} />}
        </nav>
    )
}