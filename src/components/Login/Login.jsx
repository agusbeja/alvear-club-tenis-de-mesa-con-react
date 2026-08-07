import { useState, useEffect } from 'react';
import logoAlvear from '../../assets/img/icon/logoAlvear.png';
import { Link } from 'react-router-dom';
import './Login.css';

export function Login({ onClose }) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const changePasswordVisibility = (e) => {
        e.preventDefault();
        setIsPasswordVisible(!isPasswordVisible);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <section className="login__container" onClick={onClose}>
            <div className="login__card" onClick={(e) => e.stopPropagation()}>
                <button className="login__close-button" onClick={onClose} aria-label="Cerrar">
                    X
                </button>
                <div className="login__escudo">
                    <img src={logoAlvear} alt="Escudo Alvear Club" />
                    <div>
                        <p className="login__parrafo">Alvear Club Tenis de Mesa</p>
                    </div>
                </div>
                <form action="" className="login__form">
                    <label htmlFor="codigo" className="login__label">Código de jugador:</label>
                    <input type="number" id="codigo" name="codigo" className="login__input" />
                    <label htmlFor="contrasenia" className="login__label">Contraseña:</label>
                    <div className="login__password-container">
                        <input type={isPasswordVisible ? 'text' : 'password'} id="contrasenia" name="contrasenia" className="login__input" required />
                        <button onClick={changePasswordVisibility} type="button" id="togglePassword">
                            {isPasswordVisible ? '🙈' : '👁️'}
                        </button>
                    </div>
                    <div className="login__register-container">
                        <Link to='/registro' className="login__register-button" onClick={onClose}>Registrarse</Link>
                        <button className="login__register-button" type="submit">Iniciar Sesión</button>
                    </div>
                </form>            
            </div>
        </section> 
    );
}