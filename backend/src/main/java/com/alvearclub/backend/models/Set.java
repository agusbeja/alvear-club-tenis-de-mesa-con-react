package com.alvearclub.backend.models;

import jakarta.persistence.*;

@Entity
@Table(name = "sets")
public class Set {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long setId;
    private int numeroSet;
    private int puntosJ1;
    private int puntosJ2;
    @ManyToOne
    @JoinColumn(name = "partido_id_fk")
    private Partido partido;
    
    public Long getSetId() {
        return setId;
    }
    public void setSetId(Long setId) {
        this.setId = setId;
    }
    public int getNumeroSet() {
        return numeroSet;
    }
    public void setNumeroSet(int numeroSet) {
        this.numeroSet = numeroSet;
    }
    public int getPuntosJ1() {
        return puntosJ1;
    }
    public void setPuntosJ1(int puntosJ1) {
        this.puntosJ1 = puntosJ1;
    }
    public int getPuntosJ2() {
        return puntosJ2;
    }
    public void setPuntosJ2(int puntosJ2) {
        this.puntosJ2 = puntosJ2;
    }
    public Partido getPartido() {
        return partido;
    }
    public void setPartido(Partido partido) {
        this.partido = partido;
    }
}
