package com.alvearclub.backend.services;

import org.springframework.stereotype.Service;
import com.alvearclub.backend.models.Partido;
import com.alvearclub.backend.repositories.PartidoRepository;
import java.util.List;

@Service
public class PartidoService {
    
    private final PartidoRepository partidoRepository;

    public PartidoService(PartidoRepository partidoRepository) {
        this.partidoRepository = partidoRepository;
    }

    public List<Partido> obtenerTodos(){
        return partidoRepository.findAll();
    }

    public Partido guardarPartido(Partido partido) {
        return partidoRepository.save(partido);
    }

}
