package com.alvearclub.backend.repositories;

import com.alvearclub.backend.models.Categoria; //importar el modelo
import org.springframework.data.jpa.repository.JpaRepository; //// Importar la interfaz JpaRepository que provee todas las operaciones CRUD predefinidas

// Declara la interfaz CategoriaRepository extendiendo JpaRepository para manejar Categoria con ID de tipo Long
public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
}