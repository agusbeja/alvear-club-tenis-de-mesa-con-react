import './Header.css'
import logoAlvear from '../../assets/img/icon/logoAlvear.png'
import { Flecha } from './Flecha'

export function Header() {
    const goToInicio =  () => { 
        const separadorInicio = document.getElementById('inicio');
        if(separadorInicio) {
            separadorInicio.scrollIntoView({behavior: 'smooth'})
        }  
    }
    return (
        <header>
            <div className="header__layout">
                <img className="header__img" src={logoAlvear} alt="Escudo de Alvear Club Tenis De Mesa" />
                <h1 className="header__title">Alvear Club Tenis De Mesa</h1>
                <button className='header__button' onClick={goToInicio}>
                    <Flecha />
                </button>
            </div>
        </header>
    )
}