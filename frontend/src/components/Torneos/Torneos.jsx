import React from 'react';
import './Torneos.css';

const torneosIniciales = [
    {   
        id: 1,
        fecha: "VIERNES - 26/06/26", 
        categorias: [
            { id: "6ta-10hs", nombre: "6ta División", horario: "10hs", cuposDisponibles: 48, precio: 5000 },
            { id: "5ta-13hs", nombre: "5ta División", horario: "13hs", cuposDisponibles: 48, precio: 6000 },
            { id: "4ta-16hs", nombre: "4ta División", horario: "16hs", cuposDisponibles: 48, precio: 7000 },
            { id: "3ra-19hs", nombre: "3ra División", horario: "19hs", cuposDisponibles: 48, precio: 8000 }
        ]
    },
    {   
        id: 2,
        fecha: "SÁBADO - 27/06/26", 
        categorias: [
            { id: "4ta-10hs", nombre: "4ta División", horario: "10hs", cuposDisponibles: 48, precio: 7000 },
            { id: "3ra-13hs", nombre: "3ra División", horario: "13hs", cuposDisponibles: 48, precio: 8000 },
            { id: "2da-16hs", nombre: "2da División", horario: "16hs", cuposDisponibles: 48, precio: 9000 },
            { id: "1ra-19hs", nombre: "1ra División", horario: "19hs", cuposDisponibles: 48, precio: 10000 }
        ]
    },
    {   
        id: 3,
        fecha: "DOMINGO - 28/06/26", 
        categorias: [
            { id: "6ta-10hs", nombre: "6ta División", horario: "10hs", cuposDisponibles: 48, precio: 5000 },
            { id: "4ta-13hs", nombre: "4ta División", horario: "13hs", cuposDisponibles: 48, precio: 7000 },
            { id: "2da-16hs", nombre: "2da División", horario: "16hs", cuposDisponibles: 48, precio: 9000 },
            { id: "1ra-19hs", nombre: "1ra División", horario: "19hs", cuposDisponibles: 48, precio: 10000 }
        ]
    }
];

export function Torneos() {
    return (
        <section className="torneos__section">
            <h2 className="torneos__title">TORNEOS DISPONIBLES</h2>
            <div className="torneos__container">
                {torneosIniciales.map((torneo) => (
                    <article key={torneo.id} className="torneo-card">
                        <h3 className="torneo-card__title">{torneo.fecha}</h3>
                        <ul className="torneo-card__list">
                            {torneo.categorias.map((cat) => (
                                <li key={cat.id} className="torneo-card__item">
                                    {cat.nombre} - {cat.horario} - {cat.cuposDisponibles} cupos - ${cat.precio}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}