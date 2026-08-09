package com.alvearclub.backend.repositories;

import com.alvearclub.backend.models.PartidoJugador;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PartidoJugadorRepository extends JpaRepository<PartidoJugador, Long> {
    
}
