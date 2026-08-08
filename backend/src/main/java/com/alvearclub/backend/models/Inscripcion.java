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
    @JoinColumn(name = "torneo_id_fk")
    private Torneo torneo;
    @ManyToOne
    @JoinColumn(name = "grupo_id_fk")
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
    public Torneo getTorneo() {
        return torneo;
    }
    public void setTorneo(Torneo torneo) {
        this.torneo = torneo;
    }
    public Grupo getGrupo() {
        return grupo;
    }
    public void setGrupo(Grupo grupo) {
        this.grupo = grupo;
    }
}
