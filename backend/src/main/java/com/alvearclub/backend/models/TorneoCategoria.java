package com.alvearclub.backend.models;

import java.math.BigDecimal;
import java.time.LocalTime;

import jakarta.persistence.*;

@Entity
@Table(name = "torneo_categoria")
public class TorneoCategoria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long torneoCategoriaId;
    private LocalTime horario;
    private BigDecimal precio;
    private int cuposDisponibles;
    @ManyToOne
    @JoinColumn(name = "torneo_id_fk")
    private Torneo torneo;
    @ManyToOne
    @JoinColumn(name = "categoria_id_fk")
    private Categoria categoria;
    
    public Long getTorneoCategoriaId() {
        return torneoCategoriaId;
    }
    public void setTorneoCategoriaId(Long torneoCategoriaId) {
        this.torneoCategoriaId = torneoCategoriaId;
    }
    public LocalTime getHorario() {
        return horario;
    }
    public void setHorario(LocalTime horario) {
        this.horario = horario;
    }
    public BigDecimal getPrecio() {
        return precio;
    }
    public void setPrecio(BigDecimal precio) {
        this.precio = precio;
    }
    public int getCuposDisponibles() {
        return cuposDisponibles;
    }
    public void setCuposDisponibles(int cuposDisponibles) {
        this.cuposDisponibles = cuposDisponibles;
    }
    public Torneo getTorneo() {
        return torneo;
    }
    public void setTorneo(Torneo torneo) {
        this.torneo = torneo;
    }
    public Categoria getCategoria() {
        return categoria;
    }
    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

}
