import './Perfil.css'
import fotoPerfilDefault from '../../assets/img/perfil-default/image.png'

function calcularEdad(fecha) {
    if (!fecha) return '';

    const fechaActual = new Date();
    const anioNacimiento = new Date(fecha).getFullYear();
    const mesNacimiento = new Date(fecha).getMonth();
    const diaNacimiento = Number(fecha.split('-')[2]);

    if (fechaActual.getMonth() > mesNacimiento) {
        return fechaActual.getFullYear() - anioNacimiento;
    } 
    else if (fechaActual.getMonth() == mesNacimiento) {
        if (fechaActual.getDate() >= diaNacimiento) {
            return fechaActual.getFullYear() - anioNacimiento;
        }
        else {
            return (fechaActual.getFullYear() - anioNacimiento) - 1;
        }
    }
    else {
        return (fechaActual.getFullYear() - anioNacimiento) - 1;
    }
}

function capitalizar(string) {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function Perfil({ usuarioLogueado, setUsuarioLogueado }) {

    const handleCambiarFoto = (e) => {
        const archivo = e.target.files[0];
        if (archivo) {
            const lector = new FileReader();
            lector.onload = function(eventoDeLectura) {
                const nuevaImg = eventoDeLectura.target.result;
                
                const usuarioActualizado = { ...usuarioLogueado, imgPerfil: nuevaImg };
                
                localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioActualizado));
                
                setUsuarioLogueado(usuarioActualizado);
            }
            lector.readAsDataURL(archivo);
        }
    };

    return (
        <main className='perfil__container'>
            <div className="perfil__datos-container">
                <div className="div-codigo datos-div">
                    <h3 className="datos-h3 codigo-title">Código:</h3>
                    <p className="datos-p codigo-p">{usuarioLogueado?.codigo}</p>
                </div>
                <div className="div-nombre datos-div">
                    <h3 className="datos-h3 nombre-title">Nombre:</h3>
                    <p className="datos-p nombre-p">{capitalizar(usuarioLogueado?.nombre)}</p>
                </div>
                <div className="div-apellido datos-div">
                    <h3 className="datos-h3 apellido-title">Apellido:</h3>
                    <p className="datos-p apellido-p">{capitalizar(usuarioLogueado?.apellido)}</p>
                </div>
                <div className="div-fecha-nac datos-div">
                    <h3 className="datos-h3 fecha-nac-title">Nacimiento:</h3>
                    <p className="datos-p fecha-nac-p">{usuarioLogueado?.fechaNacimiento}</p>
                </div>
                <div className="div-edad datos-div">
                    <h3 className="datos-h3 edad-title">Edad:</h3>
                    <p className="datos-p edad-p">{calcularEdad(usuarioLogueado?.fechaNacimiento)}</p>
                </div>
                <div className="div-email datos-div">
                    <h3 className="datos-h3 email-title">E-mail:</h3>
                    <p className="datos-p email-p">{usuarioLogueado?.email}</p>
                </div>
                <div className="div-telefono datos-div">
                    <h3 className="datos-h3 telefono-title">Teléfono:</h3>
                    <p className="datos-p telefono-p">{usuarioLogueado?.telefono}</p>
                </div>
                <div className="div-domicilio datos-div">
                    <h3 className="datos-h3 domicilio-title">Domicilio:</h3>
                    <p className="datos-p domicilio-p">{capitalizar(usuarioLogueado?.domicilio)}</p>
                </div>
                <div className="div-nacionalidad datos-div">
                    <h3 className="datos-h3 nacionalidad-title">Nacionalidad:</h3>
                    <p className="datos-p nacionalidad-p">{capitalizar(usuarioLogueado?.pais)}</p>
                </div>
                <div className="div-torneos datos-div">
                    <h3 className="datos-h3 torneos-title">Torneos:</h3>
                    <ul className="datos-p torneos-ul">{}</ul>
                </div>
            </div>
            <div className="foto-container">
                <img className="img-perfil" src={usuarioLogueado?.imgPerfil || fotoPerfilDefault} alt="foto de perfil"/>
                <label htmlFor="input-foto" className="btn-subir-foto">Cambiar foto</label>
                <input type="file" id="input-foto" className="input-foto" accept="image/*" onChange={handleCambiarFoto}/>
            </div>
        </main>
    )
}