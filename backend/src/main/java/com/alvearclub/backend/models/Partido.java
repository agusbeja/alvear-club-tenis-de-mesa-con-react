package com.alvearclub.backend.models;

import jakarta.persistence.*;

@Entity
@Table(name = "partidos")
public class Partido {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long partidoId;
    @Column(nullable = false)
    private String fase;
    @Column(nullable = false)
    private String estado;
    private int setsGanadosJ1;
    private int setsGanadosJ2;
    @ManyToOne
    @JoinColumn(name = "grupo_id_fk", nullable = true)
    private Grupo grupo;



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
    public int getSetsGanadosJ1() {
        return setsGanadosJ1;
    }
    public void setSetsGanadosJ1(int setsGanadosJ1) {
        this.setsGanadosJ1 = setsGanadosJ1;
    }
    public int getSetsGanadosJ2() {
        return setsGanadosJ2;
    }
    public void setSetsGanadosJ2(int setsGanadosJ2) {
        this.setsGanadosJ2 = setsGanadosJ2;
    }
    public Grupo getGrupo() {
        return grupo;
    }
    public void setGrupo(Grupo grupo) {
        this.grupo = grupo;
    }
    
    
}
