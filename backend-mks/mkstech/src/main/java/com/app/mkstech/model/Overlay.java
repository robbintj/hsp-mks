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

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIdProduto() {
        return idProduto;
    }

    public void setIdProduto(String idProduto) {
        this.idProduto = idProduto;
    }

    public String getParedeFornalha() {
        return paredeFornalha;
    }

    public void setParedeFornalha(String paredeFornalha) {
        this.paredeFornalha = paredeFornalha;
    }

    public String getLocal() {
        return local;
    }

    public void setLocal(String local) {
        this.local = local;
    }

    public int getNumeroTubo() {
        return numeroTubo;
    }

    public void setNumeroTubo(int numeroTubo) {
        this.numeroTubo = numeroTubo;
    }

    public String getNumeroTuboAdjacente() {
        return numeroTuboAdjacente;
    }

    public void setNumeroTuboAdjacente(String numeroTuboAdjacente) {
        this.numeroTuboAdjacente = numeroTuboAdjacente;
    }

    public int getElevacaoInferior() {
        return elevacaoInferior;
    }

    public void setElevacaoInferior(int elevacaoInferior) {
        this.elevacaoInferior = elevacaoInferior;
    }

    public int getElevacaoSuperior() {
        return elevacaoSuperior;
    }

    public void setElevacaoSuperior(int elevacaoSuperior) {
        this.elevacaoSuperior = elevacaoSuperior;
    }

    public int getDimensao() {
        return dimensao;
    }

    public void setDimensao(int dimensao) {
        this.dimensao = dimensao;
    }

    public String getEscopo() {
        return escopo;
    }

    public void setEscopo(String escopo) {
        this.escopo = escopo;
    }

    public String getLado() {
        return lado;
    }

    public void setLado(String lado) {
        this.lado = lado;
    }

    public String getTipoEscopo() {
        return tipoEscopo;
    }

    public void setTipoEscopo(String tipoEscopo) {
        this.tipoEscopo = tipoEscopo;
    }

    public String getLiberadoGeral() {
        return liberadoGeral;
    }

    public void setLiberadoGeral(String liberadoGeral) {
        this.liberadoGeral = liberadoGeral;
    }

    public String getPendenteGeralParceiro() {
        return pendenteGeralParceiro;
    }

    public void setPendenteGeralParceiro(String pendenteGeralParceiro) {
        this.pendenteGeralParceiro = pendenteGeralParceiro;
    }

    public String getPendenteGeralMKS() {
        return pendenteGeralMKS;
    }

    public void setPendenteGeralMKS(String pendenteGeralMKS) {
        this.pendenteGeralMKS = pendenteGeralMKS;
    }

    public int getExecutadoSoldaMKS() {
        return executadoSoldaMKS;
    }

    public void setExecutadoSoldaMKS(int executadoSoldaMKS) {
        this.executadoSoldaMKS = executadoSoldaMKS;
    }

    public Date getTerminoMKS() {
        return terminoMKS;
    }

    public void setTerminoMKS(Date terminoMKS) {
        this.terminoMKS = terminoMKS;
    }

    public int getValidacaoCQMKS() {
        return validacaoCQMKS;
    }

    public void setValidacaoCQMKS(int validacaoCQMKS) {
        this.validacaoCQMKS = validacaoCQMKS;
    }

    public Date getValidacaoMKS() {
        return validacaoMKS;
    }

    public void setValidacaoMKS(Date validacaoMKS) {
        this.validacaoMKS = validacaoMKS;
    }

    public int getValidadoParceiro() {
        return validadoParceiro;
    }

    public void setValidadoParceiro(int validadoParceiro) {
        this.validadoParceiro = validadoParceiro;
    }

    public int getVsParceiro() {
        return vsParceiro;
    }

    public void setVsParceiro(int vsParceiro) {
        this.vsParceiro = vsParceiro;
    }

    public int getLpParceiro() {
        return lpParceiro;
    }

    public void setLpParceiro(int lpParceiro) {
        this.lpParceiro = lpParceiro;
    }

    public String getLiberadoParceiro() {
        return liberadoParceiro;
    }

    public void setLiberadoParceiro(String liberadoParceiro) {
        this.liberadoParceiro = liberadoParceiro;
    }

    public Date getDataLiberadoParceiro() {
        return dataLiberadoParceiro;
    }

    public void setDataLiberadoParceiro(Date dataLiberadoParceiro) {
        this.dataLiberadoParceiro = dataLiberadoParceiro;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getObservacaoAlumar() {
        return observacaoAlumar;
    }

    public void setObservacaoAlumar(String observacaoAlumar) {
        this.observacaoAlumar = observacaoAlumar;
    }

    public String getObservacaoMKS() {
        return observacaoMKS;
    }

    public void setObservacaoMKS(String observacaoMKS) {
        this.observacaoMKS = observacaoMKS;
    }

    public String getObservacaoParceiro() {
        return observacaoParceiro;
    }

    public void setObservacaoParceiro(String observacaoParceiro) {
        this.observacaoParceiro = observacaoParceiro;
    }

    @Override
    public String toString() {
        return "Overlay{" +
                "id=" + id +
                ", idProduto='" + idProduto + '\'' +
                ", paredeFornalha='" + paredeFornalha + '\'' +
                ", local='" + local + '\'' +
                ", numeroTubo=" + numeroTubo +
                ", numeroTuboAdjacente='" + numeroTuboAdjacente + '\'' +
                ", elevacaoInferior=" + elevacaoInferior +
                ", elevacaoSuperior=" + elevacaoSuperior +
                ", dimensao=" + dimensao +
                ", escopo='" + escopo + '\'' +
                ", lado='" + lado + '\'' +
                ", tipoEscopo='" + tipoEscopo + '\'' +
                ", liberadoGeral='" + liberadoGeral + '\'' +
                ", pendenteGeralParceiro='" + pendenteGeralParceiro + '\'' +
                ", pendenteGeralMKS='" + pendenteGeralMKS + '\'' +
                ", executadoSoldaMKS=" + executadoSoldaMKS +
                ", terminoMKS=" + terminoMKS +
                ", validacaoCQMKS=" + validacaoCQMKS +
                ", validacaoMKS=" + validacaoMKS +
                ", validadoParceiro=" + validadoParceiro +
                ", vsParceiro=" + vsParceiro +
                ", lpParceiro=" + lpParceiro +
                ", liberadoParceiro='" + liberadoParceiro + '\'' +
                ", dataLiberadoParceiro=" + dataLiberadoParceiro +
                ", status='" + status + '\'' +
                ", observacaoAlumar='" + observacaoAlumar + '\'' +
                ", observacaoMKS='" + observacaoMKS + '\'' +
                ", observacaoParceiro='" + observacaoParceiro + '\'' +
                '}';
    }
}
