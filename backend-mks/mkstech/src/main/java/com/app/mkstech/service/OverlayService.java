package com.app.mkstech.service;

import com.app.mkstech.model.Overlay;
import com.app.mkstech.repository.OverlayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OverlayService {

    @Autowired
    private OverlayRepository overlayRepository;

    public List<Overlay> findAll() {
        return overlayRepository.findAll();
    }

    public Optional<Overlay> findById(Long id) {
        return overlayRepository.findById(id);
    }

    public Overlay save(Overlay overlay) {
        return overlayRepository.save(overlay);
    }

    public void deleteById(Long id) {
        overlayRepository.deleteById(id);
    }
}
