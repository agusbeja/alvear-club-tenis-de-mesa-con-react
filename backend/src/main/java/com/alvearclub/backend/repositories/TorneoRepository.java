package com.alvearclub.backend.repositories;

import com.alvearclub.backend.models.Torneo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TorneoRepository extends JpaRepository<Torneo, Long> {
    
}
