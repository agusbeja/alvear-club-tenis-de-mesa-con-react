package com.alvearclub.backend.services;

import com.alvearclub.backend.models.Grupo;
import com.alvearclub.backend.repositories.GrupoRepository;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class GrupoService {

    private final GrupoRepository grupoRepository;

    public GrupoService(GrupoRepository grupoRepository) {
        this.grupoRepository = grupoRepository;
    }

    public List<Grupo> obtenerTodos (){
        return grupoRepository.findAll();
    }

    public Grupo guardarGrupo(Grupo grupo){
        return grupoRepository.save(grupo);
    }

}
