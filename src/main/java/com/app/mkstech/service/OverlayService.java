package com.app.mkstech.service;

import com.app.mkstech.model.Overlay;
import com.app.mkstech.repository.OverlayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

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
        // Calcula o status
        String status = calculateStatus(overlay);
        overlay.setStatus(status);

        // Salva o overlay no banco de dados
        return overlayRepository.save(overlay);
    }

    public void deleteById(Long id) {
        overlayRepository.deleteById(id);
    }

    private String calculateStatus(Overlay overlay) {
        // Campos obrigatórios
        boolean allRequiredFieldsFilled = Stream.of(
                overlay.getParedeFornalha(),
                overlay.getLocal(),
                overlay.getNumeroTubo(),
                overlay.getNumeroTuboAdjacente(),
                overlay.getElevacaoInferior(),
                overlay.getElevacaoSuperior(),
                overlay.getDimensao(),
                overlay.getEscopo(),
                overlay.getLado(),
                overlay.getTipoEscopo(),
                overlay.getLiberadoGeral(),
                overlay.getPendenteGeralParceiro(),
                overlay.getPendenteGeralMKS(),
                overlay.getExecutadoSoldaMKS(),
                overlay.getTerminoMKS()
        ).allMatch(field -> field != null && !field.toString().trim().isEmpty());

        // Campos obrigatórios e não obrigatórios
        boolean allFieldsFilled = Stream.of(
                overlay.getParedeFornalha(),
                overlay.getLocal(),
                overlay.getNumeroTubo(),
                overlay.getNumeroTuboAdjacente(),
                overlay.getElevacaoInferior(),
                overlay.getElevacaoSuperior(),
                overlay.getDimensao(),
                overlay.getEscopo(),
                overlay.getLado(),
                overlay.getTipoEscopo(),
                overlay.getLiberadoGeral(),
                overlay.getPendenteGeralParceiro(),
                overlay.getPendenteGeralMKS(),
                overlay.getExecutadoSoldaMKS(),
                overlay.getTerminoMKS(),
                overlay.getValidacaoCQMKS(),
                overlay.getValidacaoMKS(),
                overlay.getValidadoParceiro(),
                overlay.getVsParceiro(),
                overlay.getLpParceiro(),
                overlay.getLiberadoParceiro(),
                overlay.getDataLiberadoParceiro(),
                overlay.getObservacaoAlumar(),
                overlay.getObservacaoMKS(),
                overlay.getObservacaoParceiro()
        ).allMatch(field -> field != null && !field.toString().trim().isEmpty());

        if (allFieldsFilled) {
            return "CONCLUIDO";
        } else if (allRequiredFieldsFilled) {
            return "ANDAMENTO";
        } else {
            return "PENDENTE"; // Status padrão caso não atenda nem a condição de "ANDAMENTO"
        }
    }
}



/*
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
*/
