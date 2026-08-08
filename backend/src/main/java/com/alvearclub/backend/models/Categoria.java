package com.alvearclub.backend.models;

import jakarta.persistence.*;

@Entity // Esto le dice a Spring: "Che, creame una tabla para esta clase"
@Table(name = "categorias") // Opcional: para que la tabla quede en plural en la base
public class Categoria {
    @Id // Marca que esta es la Clave Primaria (PK)
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Hace que el ID sea autoincremental (1, 2, 3...)
    private Long cateogiraId;
    private String nombre;
    private int puntajeMinimo;
    private int puntajeMaximo;
    
    public Long getCateogiraId() {
        return cateogiraId;
    }
    public void setCateogiraId(Long cateogiraId) {
        this.cateogiraId = cateogiraId;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public int getPuntajeMinimo() {
        return puntajeMinimo;
    }
    public void setPuntajeMinimo(int puntajeMinimo) {
        this.puntajeMinimo = puntajeMinimo;
    }
    public int getPuntajeMaximo() {
        return puntajeMaximo;
    }
    public void setPuntajeMaximo(int puntajeMaximo) {
        this.puntajeMaximo = puntajeMaximo;
    }
}
