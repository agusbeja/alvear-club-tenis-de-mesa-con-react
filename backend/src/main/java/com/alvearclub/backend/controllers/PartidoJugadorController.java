package com.alvearclub.backend.controllers;

import com.alvearclub.backend.models.PartidoJugador;
import com.alvearclub.backend.services.PartidoJugadorService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/partido_jugador")
@CrossOrigin(origins = "*")
public class PartidoJugadorController {
    
    private final PartidoJugadorService partido_JugadorService;

    public PartidoJugadorController(PartidoJugadorService partido_JugadorService) {
        this.partido_JugadorService = partido_JugadorService;
    }

    @GetMapping
    public List<PartidoJugador> obtenerTodos() {
        return partido_JugadorService.obtenerTodos();
    }

    @PostMapping
    public PartidoJugador guardarPartido_Jugador(@RequestBody PartidoJugador partido_Jugador) {
        return partido_JugadorService.guardarPartido_Jugador(partido_Jugador);
    }

}
