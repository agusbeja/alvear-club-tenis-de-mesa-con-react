package com.alvearclub.backend.controllers;

import com.alvearclub.backend.models.Jugador;
import com.alvearclub.backend.services.JugadorService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/jugadores")
@CrossOrigin(origins = "*")
public class JugadorController {
    
    private final JugadorService jugadorService;

    public JugadorController(JugadorService jugadorService) {
        this.jugadorService = jugadorService;
    }

    @GetMapping
    public List<Jugador> obtenerTodos() {
        return jugadorService.obtenerTodos();
    }

    @PostMapping
    public Jugador guardarJugador(@RequestBody Jugador jugador) {
        return jugadorService.guardarJugador(jugador);
    }
}
