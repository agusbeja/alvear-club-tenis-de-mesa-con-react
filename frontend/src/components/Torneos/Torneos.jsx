import React, { useState, useEffect } from 'react';
import './Torneos.css';

export function Torneos() {
    const [torneos, setTorneos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8080/api/torneos')
            .then((response) => response.json())
            .then((data) => {
                setTorneos(data);
                setCargando(false);
            })
            .catch((error) => {
                console.error('Error al cargar torneos:', error);
                setCargando(false);
            });
    }, []);

    if (cargando) return <p>Cargando torneos...</p>;

    return (
        <section className="torneos__section">
            <h2 className="torneos__title">TORNEOS DISPONIBLES</h2>
            <div className="torneos__container">
                {torneos.map((torneo) => (
                    <article key={torneo.torneoId} className="torneos__card">
                        <h3 className="torneos__card-title">{torneo.nombre}</h3>
                        <ul className="torneos__card-list">
                            <li className="torneos__card-item">Fecha: {torneo.fecha} - {torneo.horario}</li>
                            <li className='torneos__card-item'>Categoría: {torneo.categoria?.nombre}</li>
                            <li className='torneos__card-item'>Precio: ${torneo.precio}</li>
                            <li className='torneos__card-item'>Cupos: {torneo.cuposDisponibles}</li>
                            
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}