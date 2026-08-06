import './SobreNosotros.css'
import fetembaLogo from '../../assets/img/icon/fetemba.png'

export function SobreNosotros() {
    return (
        <section className="sobre-nosotros__container">
            <h2 className='sobre-nosotros__title'>
                ¡Sobre Nosotros!
            </h2>
            <div className="sobre-nosotros__group">
                <h3 className="sobre-nosotros__h3">
                    Dirección
                </h3>
                <div className="sobre-nosotros__content">
                    <p className="sobre-nosotros__text">
                        José E. Rodó 4170, Parque Avellaneda, CABA,
                        <a href="https://www.google.com/maps/place/Alvear+Club/@-34.6426726,-58.4817994,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcc99e949ec475:0x14935a9dd6dcfc79!8m2!3d-34.6426726!4d-58.4817994!16s%2Fg%2F11f55l5_9v?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D" className="sobre-nosotros__link" target='_blank' rel="noopener noreferrer"> Google Maps
                        </a>
                    </p>
                </div>
            </div>
            
            <div className="sobre-nosotros__group">
                <h3 className="sobre-nosotros__h3">
                Entrenadores
                </h3>
                <div className="sobre-nosotros__content">
                    <p className="sobre-nosotros__text">
                        Diego Temperley
                    </p>
                    <p className="sobre-nosotros__text">
                        Leandro Yamamoto
                    </p>
                    <p className="sobre-nosotros__text">
                        Nicolas Gibo
                    </p>
                </div>
            </div>
            <div className="sobre-nosotros__group">
                <h3 className="sobre-nosotros__h3">
                    Contacto
                </h3>
                <div className="sobre-nosotros__content">
                    <p className="sobre-nosotros__text">
                        Leandro Yamamoto: 1531233776 | Yamamotoleandrok@gmail.com
                    </p>
                    <p className="sobre-nosotros__text">
                        Miguel Marcelo Badui: 1151770384 | marcelobadui@gmail.com
                    </p>
                </div>
            </div>
            <div className="sobre-nosotros__group">
                <h3 className="sobre-nosotros__h3">
                Horarios
                </h3>
                <div className="sobre-nosotros__content">
                    <p className="sobre-nosotros__text">
                        Principiantes y aficionados: Miércoles y Viernes: 16 a 18hs / 18 a 20hs / 20 a 22hs
                    </p>
                    <p className="sobre-nosotros__text">
                        Federados: Lunes, Martes y jueves: 16:30 a 21hs
                    </p>
                </div>
            </div>
            <div className="sobre-nosotros__group">
                <h3 className="sobre-nosotros__h3">
                    Mesas
                </h3>
                <div className="sobre-nosotros__content">
                    <p className="sobre-nosotros__text">
                        8 Mesas (3 DHS y 5 Almar C-25)
                    </p>
                </div>
            </div>
            <div className="sobre-nosotros__group">
                <h3 className="sobre-nosotros__h3">
                    Asociación
                </h3>
                <div className="sobre-nosotros__content">
                    <p className="sobre-nosotros__text">
                        <a href="https://www.fetemba.org.ar/" target="_blank" rel="noopener noreferrer" className='sobre-nosotros__link'>
                            <img src={fetembaLogo} alt="fetemba" className="fetemba-logo sobre-nosotros__text"/>
                            FeTemBa
                        </a>
                    </p>
                </div>
            </div>
            <div className="sobre-nosotros__group sobre-nosotros__group--full">
                <h3 className="sobre-nosotros__h3">
                    Cómo llegar
                </h3>
                <div className="sobre-nosotros__content">
                    <p className="sobre-nosotros__text">
                        Nuestro club está situado en la Calle J. E Rodo 4190, a dos cuadras de la Av. Juan B. Alberdi, una de Av. Directorio y seis cuadras de la Av. Rivadavia. Algunas de las líneas de colectivos que te acercan al Club son: 114, 182, 92, 55, 5, 104, 4, 126, 107, 36.
                    </p>
                </div>
            </div>
        </section>
    )
}