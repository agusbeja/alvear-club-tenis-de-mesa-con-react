package com.alvearclub.backend.services;

import org.springframework.stereotype.Service;

import com.alvearclub.backend.models.Jugador;
import com.alvearclub.backend.repositories.JugadorRepository;

import java.util.List;

@Service
public class JugadorService {
    
    private final JugadorRepository jugadorRepository;


    public JugadorService(JugadorRepository jugadorRepository) {
        this.jugadorRepository = jugadorRepository;
    }

    public List<Jugador> obtenerTodos() {
        return jugadorRepository.findAll();
    }

    public Jugador guardarJugador(Jugador jugador) {
        return jugadorRepository.save(jugador);
    }
}
