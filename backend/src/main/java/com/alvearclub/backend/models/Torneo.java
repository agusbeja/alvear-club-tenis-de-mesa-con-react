package com.alvearclub.backend.models;

import java.time.LocalDate;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity
@Table(name = "torneos")
public class Torneo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long torneoId;
    private String nombre;
    private LocalDate fecha;
    @OneToMany(mappedBy = "torneo", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("torneo")
    private List<TorneoCategoria> torneoCategorias;

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

    public List<TorneoCategoria> getTorneoCategorias() {
        return torneoCategorias;
    }
    public void setTorneoCategorias(List<TorneoCategoria> torneoCategorias) {
        this.torneoCategorias = torneoCategorias;
    }
}