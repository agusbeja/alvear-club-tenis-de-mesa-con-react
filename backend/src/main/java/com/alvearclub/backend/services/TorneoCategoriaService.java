package com.alvearclub.backend.services;

import com.alvearclub.backend.models.TorneoCategoria;

import org.springframework.stereotype.Service;

import com.alvearclub.backend.repositories.TorneoCategoriaRepository;

import java.util.List;

@Service
public class TorneoCategoriaService {
    
    private final TorneoCategoriaRepository torneoCategoriaRepository;

    public TorneoCategoriaService(TorneoCategoriaRepository torneoCategoriaRepository) {
        this.torneoCategoriaRepository = torneoCategoriaRepository;
    }

    public List<TorneoCategoria> obtenerTodos() {
        return torneoCategoriaRepository.findAll();
    }

    public TorneoCategoria guardarTorneoCategoria(TorneoCategoria torneoCategoria) {
        return torneoCategoriaRepository.save(torneoCategoria);
    }
}
