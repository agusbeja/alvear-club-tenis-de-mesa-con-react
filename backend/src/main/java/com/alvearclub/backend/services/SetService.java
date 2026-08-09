package com.alvearclub.backend.services;

import com.alvearclub.backend.models.Set;
import com.alvearclub.backend.repositories.SetRepository;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class SetService {
    
    private final SetRepository setRepository;

    public SetService(SetRepository setRepository) {
        this.setRepository = setRepository;
    }

    public List<Set> obtenerTodos() {
        return setRepository.findAll();
    }

    public Set guardarSet(Set set) {
        return setRepository.save(set);
    }

}
