package com.alvearclub.backend.models;

import jakarta.persistence.*;;

@Entity
@Table(name = "grupos")
public class Grupo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long grupoId;
    private String nombre;
    @ManyToOne
    @JoinColumn(name = "torneo_id_fk")
    private Torneo torneo;

    public Long getGrupoId() {
        return grupoId;
    }
    public void setGrupoId(Long grupoId) {
        this.grupoId = grupoId;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public Torneo getTorneo() {
        return torneo;
    }
    public void setTorneo(Torneo torneo) {
        this.torneo = torneo;
    }
}
