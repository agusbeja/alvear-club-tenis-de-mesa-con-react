package com.alvearclub.backend.models;

import java.time.LocalDate;

import jakarta.persistence.*;

@Entity
@Table(name = "torneos")
public class Torneo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long torneoId;
    private String nombre;
    private LocalDate fecha;
    @ManyToOne
    @JoinColumn(name = "categoria_id_fk")
    private Categoria categoria;
    
    public Long getTorneoId() {
        return torneoId;
    }
    public void setTorneoId(Long torneoId) {
        this.torneoId = torneoId;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public LocalDate getFecha() {
        return fecha;
    }
    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }
    public Categoria getCategoria() {
        return categoria;
    }
    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }
}
