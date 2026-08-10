package com.alvearclub.backend.models;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "inscripciones")
public class Inscripcion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long inscripcionId;
    private String estadoPago;
    private LocalDate fechaInscripcion;
    @ManyToOne
    @JoinColumn(name = "jugador_id_fk")
    private Jugador jugador;
    @ManyToOne
    @JoinColumn(name = "torneo_categoria_id_fk")
    private TorneoCategoria torneoCategoria;
    @ManyToOne
    @JoinColumn(name = "grupo_id_fk", nullable = true)
    private Grupo grupo;



    public Long getInscripcionId() {
        return inscripcionId;
    }
    public void setInscripcionId(Long inscripcionId) {
        this.inscripcionId = inscripcionId;
    }
    public String getEstadoPago() {
        return estadoPago;
    }
    public void setEstadoPago(String estadoPago) {
        this.estadoPago = estadoPago;
    }
    public LocalDate getFechaInscripcion() {
        return fechaInscripcion;
    }
    public void setFechaInscripcion(LocalDate fechaInscripcion) {
        this.fechaInscripcion = fechaInscripcion;
    }
    public Jugador getJugador() {
        return jugador;
    }
    public void setJugador(Jugador jugador) {
        this.jugador = jugador;
    }
    public TorneoCategoria getTorneoCategoria() {
        return torneoCategoria;
    }
    public void setTorneoCategoria(TorneoCategoria torneoCategoria) {
        this.torneoCategoria = torneoCategoria;
    }
    public Grupo getGrupo() {
        return grupo;
    }
    public void setGrupo(Grupo grupo) {
        this.grupo = grupo;
    }    
}
