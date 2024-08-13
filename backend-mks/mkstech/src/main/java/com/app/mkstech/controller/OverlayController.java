package com.app.mkstech.controller;

import com.app.mkstech.model.Overlay;
import com.app.mkstech.service.OverlayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/overlay")
public class OverlayController {

    @Autowired
    private OverlayService overlayService;

    @GetMapping
    public List<Overlay> getAllOverlays() {
        return overlayService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Overlay> getOverlayById(@PathVariable Long id) {
        Optional<Overlay> overlay = overlayService.findById(id);
        return overlay.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Overlay createOverlay(@RequestBody Overlay overlay) {
        return overlayService.save(overlay);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Overlay> updateOverlay(@PathVariable Long id, @RequestBody Overlay overlay) {
        if (overlayService.findById(id).isPresent()) {
            overlay.setId(id);
            return ResponseEntity.ok(overlayService.save(overlay));
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOverlay(@PathVariable Long id) {
        if (overlayService.findById(id).isPresent()) {
            overlayService.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
