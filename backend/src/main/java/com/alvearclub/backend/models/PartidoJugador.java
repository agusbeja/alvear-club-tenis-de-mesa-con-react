package com.alvearclub.backend.models;

import jakarta.persistence.*;

@Entity
@Table(name = "partido_jugador")
public class PartidoJugador {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long partidoJugadorId;
    private int numeroJugador;
    @ManyToOne
    @JoinColumn(name = "partido_id_fk")
    private Partido partido;
    @ManyToOne
    @JoinColumn(name = "jugador_id_fk")
    private Jugador jugador;


    
    public Long getPartidoJugadorId() {
        return partidoJugadorId;
    }
    public void setPartidoJugadorId(Long partidoJugadorId) {
        this.partidoJugadorId = partidoJugadorId;
    }
    public int getNumeroJugador() {
        return numeroJugador;
    }
    public void setNumeroJugador(int numeroJugador) {
        this.numeroJugador = numeroJugador;
    }
    public Partido getPartido() {
        return partido;
    }
    public void setPartido(Partido partido) {
        this.partido = partido;
    }
    public Jugador getJugador() {
        return jugador;
    }
    public void setJugador(Jugador jugador) {
        this.jugador = jugador;
    }
}
