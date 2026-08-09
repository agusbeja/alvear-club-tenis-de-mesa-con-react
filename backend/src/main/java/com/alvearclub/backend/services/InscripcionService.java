package com.alvearclub.backend.services;

import com.alvearclub.backend.models.Inscripcion;
import com.alvearclub.backend.repositories.InscripcionRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class InscripcionService {

    private final InscripcionRepository inscripcionRepository;

    public InscripcionService(InscripcionRepository inscripcionRepository) {
        this.inscripcionRepository = inscripcionRepository;
    }

    public List<Inscripcion> obtenerTodas(){
        return inscripcionRepository.findAll();
    }

    public Inscripcion guardarInscripcion(Inscripcion inscripcion) {
        return inscripcionRepository.save(inscripcion);
    }
}
