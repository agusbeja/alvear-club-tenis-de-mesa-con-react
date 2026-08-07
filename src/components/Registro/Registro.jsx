import { useState } from 'react';
import './Registro.css'

function validarCodigo(codigo) {
    return codigo.length > 1 && codigo.length < 10;
}

function validarNombre(nombre) {
    return nombre.length >= 2 && nombre.length <= 50;
}

function validarApellido(apellido) {
    return apellido.length >= 2 && apellido.length <= 50;
}

function validarFechaNac(fechaNacimiento) {
    const hoy = new Date().toISOString().split('T')[0];
    return fechaNacimiento < hoy;
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarTelefono(telefono) {
    return telefono.length === 10;
}

function validarDomicilio(domicilio) {
    return domicilio.length > 5 && domicilio.length < 100;
}

function validarPais(pais) {
    return (pais !== "pais")
}

function validarContrasenia(contrasenia) {
    return (contrasenia.length >= 8 && (/[A-Z]/.test(contrasenia)) && (/\d/.test(contrasenia)) && (/[@$!%*?&]/.test(contrasenia))) 
}

export function Registro({setUsuarioLogueado}) {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    
        const changePasswordVisibility = (e) => {
            e.preventDefault();
            setIsPasswordVisible(!isPasswordVisible);
        };

    const [datosFormulario, setDatosFormulario] = useState({
        codigo : '',
        nombre : '',
        apellido : '',
        fechaNacimiento : '',
        email : '',
        telefono : '',
        domicilio : '',
        pais : '',
        contrasenia : ''
    })

    const handleChange = (e) => {
        setDatosFormulario({
            ...datosFormulario,
            [e.target.name]: e.target.value
        })
        console.log(datosFormulario)
    }   

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validarCodigo(datosFormulario.codigo)) {
            alert("Ingrese un codigo correcto.")
            return;
        }

        if (!validarNombre(datosFormulario.nombre)) {
            alert('Ingrese un nombre válido.')
            return;
        }

        if (!validarApellido(datosFormulario.apellido)) {
            alert("Ingrese un apellido válido.");
            return;
        }

        if (!validarFechaNac(datosFormulario.fechaNacimiento)) {
            alert("Ingrese una fecha válida.");
            return;
        }

        if (!validarEmail(datosFormulario.email)) {
            alert("Ingrese un email válido.")
            return;
        }

        if (!validarTelefono(datosFormulario.telefono)) {
            alert("Ingrese un teléfono válido.")
            return;
        }

        if (!validarDomicilio(datosFormulario.domicilio)) {
            alert("Ingrese un domicilio válido")
            return;
        }

        if (!validarPais(datosFormulario.pais)) {
            alert("Ingrese un país válido")
            return;
        }

        if (!validarContrasenia(datosFormulario.contrasenia)) {
            alert("La contraseña debe tener al menos 8 caracteres, 1 mayúscula, 1 número, 1 símbolo")
            return;
        }

        let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios')) || [];

        if (listaUsuarios.find(usuario => usuario.codigo === datosFormulario.codigo)) {
            alert(`Ya existe una cuenta con el código ${datosFormulario.codigo}`)
            return;
        }

        if (listaUsuarios.find(usuario => usuario.email === datosFormulario.email)) {
            alert(`Ya existe una cuenta con el email ${datosFormulario.email}`)
            return;
        }

        listaUsuarios.push(datosFormulario);

        localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));

        setUsuarioLogueado(datosFormulario);

        localStorage.setItem('usuarioLogueado', JSON.stringify(datosFormulario))


        alert(`Registro exitoso! Bienvenido, ${datosFormulario.nombre}!`)

        setDatosFormulario({
            codigo : '',
            nombre : '',
            apellido : '',
            fechaNacimiento : '',
            email : '',
            telefono : '',
            domicilio : '',
            pais : '',
            contrasenia : ''
        })
    }

    return (
        <main className='registro__container'>
            <form className="registro__form" onSubmit={handleSubmit}>

                <div className="registro__group">
                    <label htmlFor="codigo" className="registro__label">Codigo de jugador (TMT) *</label>
                    <input type="number" id="codigo" name="codigo" className="registro__input" placeholder="00000" required value={datosFormulario.codigo} onChange={handleChange}/>
                </div>
                <div className="registro__group">
                    <label htmlFor="nombre" className="registro__label">Nombre *</label>
                    <input type="text" id="nombre" name="nombre" className="registro__input" placeholder="Juan" required value={datosFormulario.nombre} onChange={handleChange}/>
                </div>
                <div className="registro__group">
                    <label htmlFor="apellido" className="registro__label">Apellido *</label>
                    <input type="text" id="apellido" name="apellido" className="registro__input" placeholder="Perez" required value={datosFormulario.apellido} onChange={handleChange}/>
                </div>
                <div className="registro__group">
                    <label htmlFor="fechaNacimiento" className="registro__label">Fecha de nacimiento *</label>
                    <input type="date" id="fechaNacimiento" name="fechaNacimiento" className="registro__input" required value={datosFormulario.fechaNacimiento} onChange={handleChange}/>
                </div>
                <div className="registro__group">
                    <label htmlFor="email" className="registro__label">E-mail *</label>
                    <input type="email" id="email" name="email" className="registro__input" placeholder="juanperez@gmail.com" required value={datosFormulario.email} onChange={handleChange}/>
                </div>
                <div className="registro__group">
                    <label htmlFor="telefono" className="registro__label">Teléfono *</label>
                    <input type="tel" id="telefono" name="telefono" className="registro__input" placeholder="1112345678" required value={datosFormulario.telefono} onChange={handleChange}/>
                </div>
                <div className="registro__group">
                    <label htmlFor="domicilio" className="registro__label">Domicilio *</label>
                    <input type="text" id="domicilio" name="domicilio" className="registro__input" placeholder="José E. Rodó 4170" required value={datosFormulario.domicilio} onChange={handleChange}/>
                </div>
                <div className="registro__group">
                    <label htmlFor="pais" className="registro__label">País *</label>
                    <select name="pais" id="pais" defaultValue="" required value={datosFormulario.pais} onChange={handleChange}>
                        <option value="" disabled>Selecciona un país:</option>
                        <option value="argentina">Argentina</option>
                        <option value="bolivia">Bolivia</option>
                        <option value="brasil" className="form-option">Brasil</option>
                        <option value="chile" className="form-option">Chile</option>
                        <option value="colombia" className="form-option">Colombia</option>
                        <option value="ecuador" className="form-option">Ecuador</option>
                        <option value="espania" className="form-option">España</option>
                        <option value="paraguay" className="form-option">Paraguay</option>
                        <option value="peru" className="form-option">Peru</option>
                        <option value="uruguay" className="form-option">Uruguay</option>
                        <option value="venezuela" className="form-option">Venezuela</option>
                        <option value="otro" className="form-option">Otro</option>
                    </select>
                </div>
                <div className="registro__group">
                    <label htmlFor="contrasenia" className="registro__label">Contraseña *</label>
                    <div className="registro__password-container">
                        <input type={isPasswordVisible ? 'text' : 'password'} id="contrasenia" name="contrasenia" className="registro__input" placeholder='***********' required value={datosFormulario.contrasenia} onChange={handleChange}/>
                        <button type="button" id="togglePassword" onClick={changePasswordVisibility}>
                            {isPasswordVisible ? '🙈' : '👁️'}
                        </button>
                    </div>
                </div>
                <button type="submit" className="registro__submit-button">
                    Registrarse
                </button>
            </form>
        </main>
    )
}