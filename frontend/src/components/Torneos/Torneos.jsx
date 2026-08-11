import React, { useState, useEffect } from 'react';
import './Torneos.css';

// Convierte '2026-08-31' a '31 de agosto de 2026'
const formatearFecha = (fechaStr) => {
    if (!fechaStr) return '';
    const [year, month, day] = fechaStr.split('-');
    const fecha = new Date(year, month - 1, day);
    return fecha.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
};

// Convierte '10:00:00' a '10:00 Hs'
const formatearHorario = (horarioStr) => {
    if (!horarioStr) return '';
    return `${horarioStr.substring(0, 5)} Hs`;
};

export function Torneos() {
    const [torneos, setTorneos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8080/api/torneo_categoria").then((response) => response.json()).then((data) => {
            const torneosAgrupados = data.reduce((acc, item) => {
                const idTorneo = item.torneo.torneoId;

                if (!acc[idTorneo]) {
                    acc[idTorneo] = {
                        torneoId: idTorneo,
                        nombre: item.torneo.nombre,
                        fecha: item.torneo.fecha,
                        categorias: []
                    }
                }

                acc[idTorneo].categorias.push({
                    categoriaId: item.categoria.categoriaId,
                    nombre: item.categoria.nombre,
                    horario: item.horario,
                    precio: item.precio,
                    cupos: item.cuposDisponibles
                })
                

                return acc;

            },{});

            const torneosArray = Object.values(torneosAgrupados);
            setTorneos(torneosArray);
            setCargando(false)

        })
        .catch((error) => {
            console.error("Error al cargar los torneos", error);
            setCargando(false);
        })
    }, []);

    if (cargando) return <p>Cargando torneos...</p>;

    return (
        <section className='torneos__section'>
            <h2 className='torneos__title'>TORNEOS DISPONIBLES</h2>
            <div className='torneos__container'>
                {torneos.map((torneo) => (
                    <article key={torneo.torneoId} className='torneos__card'>
                        <h3 className='torneos__card-title'>{torneo.nombre}</h3>
                        <h4 className='torneos__card-date'>{formatearFecha(torneo.fecha)}</h4>
                        <ul className='torneos__card-list'>
                            {torneo.categorias.map((cat) => (
                                <li key={cat.categoriaId} className='torneos__card-item'>
                                    {cat.nombre} - {formatearHorario(cat.horario)} - {cat.cupos} cupos - ${cat.precio}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}