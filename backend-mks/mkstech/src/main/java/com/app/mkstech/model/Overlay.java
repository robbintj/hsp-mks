package com.app.mkstech.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
public class Overlay {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String idProduto;
    private String paredeFornalha;
    private String local;
    private int numeroTubo;
    private String numeroTuboAdjacente;
    private int elevacaoInferior;
    private int elevacaoSuperior;
    private int dimensao;
    private String escopo;
    private String lado;
    private String tipoEscopo;
    private String liberadoGeral;
    private String pendenteGeralParceiro;
    private String pendenteGeralMKS;
    private int executadoSoldaMKS;
    private Date terminoMKS;
    private int validacaoCQMKS;
    private Date validacaoMKS;
    private int validadoParceiro;
    private int vsParceiro;
    private int lpParceiro;
    private String liberadoParceiro;
    private Date dataLiberadoParceiro;
    private String status;
    private String observacaoAlumar;
    private String observacaoMKS;
    private String observacaoParceiro;

    public void setId(Long id) {
    }

    // Getters and Setters
}
