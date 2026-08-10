package com.alvearclub.backend.repositories;

import com.alvearclub.backend.models.Categoria; 
import org.springframework.data.jpa.repository.JpaRepository; 

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
}