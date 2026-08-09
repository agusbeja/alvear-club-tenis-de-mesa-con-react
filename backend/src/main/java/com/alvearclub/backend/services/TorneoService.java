package com.alvearclub.backend.services;

import org.springframework.stereotype.Service;
import com.alvearclub.backend.models.Torneo;
import com.alvearclub.backend.repositories.TorneoRepository;
import java.util.List;

@Service
public class TorneoService {
    
    private final TorneoRepository torneoRepository;

    public TorneoService(TorneoRepository torneoRepository) {
        this.torneoRepository = torneoRepository;
    }

    public List<Torneo> obtenerTodos() {
        return torneoRepository.findAll();
    }

    public Torneo guardarTorneo(Torneo torneo) {
        return torneoRepository.save(torneo);
    }

}
