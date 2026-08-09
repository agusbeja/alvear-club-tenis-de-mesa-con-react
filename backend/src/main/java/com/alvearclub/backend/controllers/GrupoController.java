package com.alvearclub.backend.controllers;

import com.alvearclub.backend.models.Grupo;
import com.alvearclub.backend.services.GrupoService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/grupos")
@CrossOrigin(origins = "*")
public class GrupoController {

    private final GrupoService grupoService;

    public GrupoController(GrupoService grupoService) {
        this.grupoService = grupoService;
    }

    @GetMapping
    public List<Grupo> obtenerTodos(){
        return grupoService.obtenerTodos();
    }

    @PostMapping
    public Grupo guardarGrupo(@RequestBody Grupo grupo) {
        return grupoService.guardarGrupo(grupo);
    }
    
}
