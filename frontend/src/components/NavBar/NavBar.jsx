import { useState, useEffect } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import './NavBar.css'
import { Login } from '../Login/Login'
import { Link, useLocation, useNavigate } from 'react-router-dom'



export function NavBar({usuarioLogueado, setUsuarioLogueado}) {

    

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const handleCloseMenu = () => setIsMenuOpen(false)
    
    const handleLoginClick = (e) => {
        e.preventDefault();
        handleCloseMenu(); 
        setIsLoginOpen(true);
    }

    const handleLogout = (e) => {
        e.preventDefault();
        const confirmacion = confirm("Seguro que desea cerrar sesion?")
        if (confirmacion) {
            localStorage.removeItem('usuarioLogueado');
            setUsuarioLogueado(null);
            handleCloseMenu()
        }
    }

    const handleCloseLogin = () => setIsLoginOpen(false);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Si el estado de la navegación pide abrir el login
        if (location.state?.abrirLogin) {
            setIsLoginOpen(true); // Ejecutás tu función existente para abrir el modal
            
            // Limpiamos el estado para que no se reabra solo si el usuario interactúa con el menú
            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location, navigate]);

    return (
        <nav className={`nav ${isMenuOpen ? 'nav-open':''}`}>
            <button className="nav__toggle" aria-label="Abrir menú"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span className="nav__hamburger"></span>
            </button>
            <ul className={`nav__list ${isMenuOpen ? 'nav__menu-visible':''}`}>
                <li className="nav__item"><NavHashLink smooth to="/#inicio" className="nav__link" onClick={handleCloseMenu}>Inicio</NavHashLink></li>
                <li className="nav__item"><NavHashLink smooth to="/#sobre-nosotros" className="nav__link" onClick={handleCloseMenu}>Sobre Nosotros</NavHashLink></li>
                <li className="nav__item"><NavHashLink smooth to="/#torneos" className="nav__link" onClick={handleCloseMenu}>Torneos</NavHashLink></li>
                <li className="nav__item"><a href="https://www.tenisdemesaparatodos.com/clubes_ampliar.asp?codigo=16"
                    className="nav__link" target="_blank" rel="noopener noreferrer" onClick={handleCloseMenu}>TMT</a></li>
                {usuarioLogueado && (
                    <li className="nav__item">
                        <Link className="nav__link" to="/perfil" onClick={handleCloseMenu}>
                            Mi Perfil
                        </Link>
                    </li>
                )}
                <li className="nav__item"><button className="nav__link link--login" onClick={(e) => {
                    usuarioLogueado ? handleLogout(e) : handleLoginClick(e);
                    }}>{usuarioLogueado ? 'Cerrar sesión' : 'Iniciar Sesion'}</button></li>
                
            </ul>
            {isLoginOpen && <Login onClose={handleCloseLogin} setUsuarioLogueado={setUsuarioLogueado}/>}
        </nav>
    )
}