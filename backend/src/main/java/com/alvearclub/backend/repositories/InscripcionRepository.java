package com.alvearclub.backend.repositories;

import com.alvearclub.backend.models.Inscripcion;
import org.springframework.data.jpa.repository.JpaRepository;


public interface InscripcionRepository extends JpaRepository<Inscripcion, Long> {
    
}
