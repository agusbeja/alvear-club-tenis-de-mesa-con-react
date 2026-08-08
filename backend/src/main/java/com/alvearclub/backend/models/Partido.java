package com.alvearclub.backend.models;

import jakarta.persistence.*;

@Entity
@Table(name = "partidos")
public class Partido {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long partidoId;
    private String fase;
    private String estado;
    @ManyToOne
    @JoinColumn(name = "torneo_id_fk")
    private Torneo torneo;
    
    public Long getPartidoId() {
        return partidoId;
    }
    public void setPartidoId(Long partidoId) {
        this.partidoId = partidoId;
    }
    public String getFase() {
        return fase;
    }
    public void setFase(String fase) {
        this.fase = fase;
    }
    public String getEstado() {
        return estado;
    }
    public void setEstado(String estado) {
        this.estado = estado;
    }
    public Torneo getTorneo() {
        return torneo;
    }
    public void setTorneo(Torneo torneo) {
        this.torneo = torneo;
    }
}
