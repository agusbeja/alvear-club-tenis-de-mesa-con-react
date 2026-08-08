package com.alvearclub.backend.models;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity // Esto le dice a Spring: "Che, creame una tabla para esta clase"
@Table(name = "jugadores") // Opcional: para que la tabla quede en plural en la base
public class Jugador {

    @Id // Marca que esta es la Clave Primaria (PK)
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Hace que el ID sea autoincremental (1, 2, 3...)
    private Long jugadorId;
    private String codigo;
    private String nombre;
    private String apellido;
    private LocalDate fechaNacimiento;
    private String email;
    private String telefono;
    private LocalDate fechaUltimaActualizacion;
    private String nacionalidad;
    private String domicilioCalle;
    private String domicilioAltura;
    private String domicilioDpto;
    private String domicilioZona;
    private String domicilioCp;
    private int puntaje;
    private String manoHabil;
    @ManyToOne
    @JoinColumn(name = "categoria_id_fk")
    private Categoria categoria;
    
    public Long getJugadorId() {
        return jugadorId;
    }
    public void setJugadorId(Long jugadorId) {
        this.jugadorId = jugadorId;
    }
    public String getCodigo() {
        return codigo;
    }
    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getApellido() {
        return apellido;
    }
    public void setApellido(String apellido) {
        this.apellido = apellido;
    }
    public LocalDate getFechaNacimiento() {
        return fechaNacimiento;
    }
    public void setFechaNacimiento(LocalDate fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getTelefono() {
        return telefono;
    }
    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
    public LocalDate getFechaUltimaActualizacion() {
        return fechaUltimaActualizacion;
    }
    public void setFechaUltimaActualizacion(LocalDate fechaUltimaActualizacion) {
        this.fechaUltimaActualizacion = fechaUltimaActualizacion;
    }
    public String getNacionalidad() {
        return nacionalidad;
    }
    public void setNacionalidad(String nacionalidad) {
        this.nacionalidad = nacionalidad;
    }
    public String getDomicilioCalle() {
        return domicilioCalle;
    }
    public void setDomicilioCalle(String domicilioCalle) {
        this.domicilioCalle = domicilioCalle;
    }
    public String getDomicilioAltura() {
        return domicilioAltura;
    }
    public void setDomicilioAltura(String domicilioAltura) {
        this.domicilioAltura = domicilioAltura;
    }
    public String getDomicilioDpto() {
        return domicilioDpto;
    }
    public void setDomicilioDpto(String domicilioDpto) {
        this.domicilioDpto = domicilioDpto;
    }
    public String getDomicilioZona() {
        return domicilioZona;
    }
    public void setDomicilioZona(String domicilioZona) {
        this.domicilioZona = domicilioZona;
    }
    public String getDomicilioCp() {
        return domicilioCp;
    }
    public void setDomicilioCp(String domicilioCp) {
        this.domicilioCp = domicilioCp;
    }
    public int getPuntaje() {
        return puntaje;
    }
    public void setPuntaje(int puntaje) {
        this.puntaje = puntaje;
    }
    public String getManoHabil() {
        return manoHabil;
    }
    public void setManoHabil(String manoHabil) {
        this.manoHabil = manoHabil;
    }
    public Categoria getCategoria() {
        return categoria;
    }
    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }
}