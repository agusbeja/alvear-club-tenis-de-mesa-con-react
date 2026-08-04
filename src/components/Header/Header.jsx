import './Header.css'
import logoAlvear from '../../assets/img/icon/logoAlvear.png'
import { Flecha } from './Flecha'

export function Header() {
    return (
        <header>
            <div className="header__layout">
                <img className="header__img" src={logoAlvear} alt="Escudo de Alvear Club Tenis De Mesa" />
                <h1 className="header__title">Alvear Club Tenis De Mesa</h1>
                <button className='header__button'>
                    <Flecha />
                </button>
            </div>
        </header>
    )
}