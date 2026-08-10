package com.alvearclub.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alvearclub.backend.models.TorneoCategoria;

public interface TorneoCategoriaRepository extends JpaRepository<TorneoCategoria, Long> {
    
}
