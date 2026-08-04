import { useState } from 'react';
import './NavBar.css'



export function NavBar() {

    const [isOpen, setIsOpen] = useState(false);
    const handleCloseMenu = () => setIsOpen(false)

    return (
        <nav className={`nav ${isOpen ? 'nav-open':''}`}>
            <button className="nav__toggle" aria-label="Abrir menú"
            onClick={() => setIsOpen(!isOpen)}>
                <span className="nav__hamburger"></span>
            </button>
            <ul className={`nav__list ${isOpen ? 'nav__menu-visible':''}`}>
                <li className="nav__item"><a href="#inicio" className="nav__link" onClick={handleCloseMenu}>Inicio</a></li>
                <li className="nav__item"><a href="#sobre-nosotros" className="nav__link" onClick={handleCloseMenu}>Sobre Nosotros</a></li>
                <li className="nav__item"><a href="#torneos" className="nav__link" onClick={handleCloseMenu}>Torneos</a></li>
                <li className="nav__item"><a href="https://www.tenisdemesaparatodos.com/clubes_ampliar.asp?codigo=16"
                    className="nav__link" target="_blank" onClick={handleCloseMenu}>TMT</a></li>
                <li className="nav__item"><a href="" className="nav__link link--login" onClick={handleCloseMenu}>Iniciar
                    Sesión</a></li>
            </ul>
        </nav>
    )
}