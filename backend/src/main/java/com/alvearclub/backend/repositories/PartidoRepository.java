package com.alvearclub.backend.repositories;

import com.alvearclub.backend.models.Partido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PartidoRepository extends JpaRepository<Partido, Long> {
    
}
