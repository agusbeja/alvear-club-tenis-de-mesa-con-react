import './Footer.css'
import logoInstagram from '../../assets/img/redes/instagram.png'
import logoFacebook from '../../assets/img/redes/facebook.png'
import logoYoutube from '../../assets/img/redes/youtube.png'
import logoWhatsapp from '../../assets/img/redes/whatsapp.png'
import logoMaps from '../../assets/img/redes/maps.png'
import logoEmail from '../../assets/img/redes/email.png'

export function Footer() {

    const anioActual = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__redes-container">
                <a 
                    href="https://www.instagram.com/alvearclubtdm/" 
                    className="footer__link" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <img 
                            src={logoInstagram} 
                            alt="Instagram" 
                            className="footer__img"
                        />
                </a>
                <a 
                    href="https://www.facebook.com/alvearclubtenisdemesa" 
                    className="footer__link" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <img 
                            src={logoFacebook} 
                            alt='Facebook'
                            className="footer__img"
                        />
                </a>
                <a 
                    href="https://www.youtube.com/@alvearclubtenisdemesa4185" 
                    className="footer__link" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <img 
                            src={logoYoutube} 
                            alt='Youtube'
                            className="footer__img"
                        />
                </a>
                <a 
                    href="https://api.whatsapp.com/send?phone=1140895274" 
                    className="footer__link" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <img 
                            src={logoWhatsapp} 
                            alt="Whatsapp" 
                            className="footer__img"
                        />
                </a>
                <a 
                    href="https://www.google.com/maps/place/Alvear+Tenis+Club/@-34.641637,-58.4851575,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcc9eb3c951c0d:0x684616ce2abbb9d!8m2!3d-34.6416414!4d-58.4825826!16s%2Fg%2F11k5jj6crf?entry=ttu"
                    className="footer__link" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <img 
                            src={logoMaps} 
                            alt="Google Maps"
                            className="footer__img"
                        />
                </a>
                <a 
                    href="mailto:agustin.bejarano98@gmail.com" 
                    className="footer__link" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        <img 
                            src={logoEmail} 
                            alt="Email" 
                            className="footer__img"
                        />
                </a>
            </div>
            <div className="footer__copy-container">
                <p>Alvear Club TDM - @Copyright {anioActual}</p>
            </div>
        </footer>
    )
}