package com.alvearclub.backend.repositories;

import com.alvearclub.backend.models.Jugador;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JugadorRepository extends JpaRepository <Jugador, Long> {

    
}