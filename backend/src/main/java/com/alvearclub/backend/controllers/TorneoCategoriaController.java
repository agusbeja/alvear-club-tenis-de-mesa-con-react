package com.alvearclub.backend.controllers;

import com.alvearclub.backend.models.TorneoCategoria;
import com.alvearclub.backend.services.TorneoCategoriaService;
import java.util.List;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(name = "/api/torneo_categoria")
@CrossOrigin(origins = "*")
public class TorneoCategoriaController {
    
    private final TorneoCategoriaService torneoCategoriaService;

    public TorneoCategoriaController(TorneoCategoriaService torneoCategoriaService) {
        this.torneoCategoriaService = torneoCategoriaService;
    }

    @GetMapping
    public List<TorneoCategoria> obtenerTodos() {
        return torneoCategoriaService.obtenerTodos();
    }

    @PostMapping
    public TorneoCategoria guardarTorneoCategoria(@RequestBody TorneoCategoria torneoCategoria) {
        return torneoCategoriaService.guardarTorneoCategoria(torneoCategoria);
    }

}
