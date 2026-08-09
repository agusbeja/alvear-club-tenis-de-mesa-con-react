package com.alvearclub.backend.services;

import com.alvearclub.backend.models.PartidoJugador;
import com.alvearclub.backend.repositories.PartidoJugadorRepository;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class PartidoJugadorService {
    
    private final PartidoJugadorRepository partido_JugadorRepository;

    public PartidoJugadorService(PartidoJugadorRepository partido_JugadorRepository) {
        this.partido_JugadorRepository = partido_JugadorRepository;
    }

    public List<PartidoJugador> obtenerTodos() {
        return partido_JugadorRepository.findAll();
    }

    public PartidoJugador guardarPartido_Jugador(PartidoJugador partido_Jugador) {
        return partido_JugadorRepository.save(partido_Jugador);
    }

}
