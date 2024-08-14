export interface Overlay {
    id?: number;
    idProduto: string;
    paredeFornalha: string;
    local: string;
    numeroTubo: number;
    numeroTuboAdjacente: string;
    elevacaoInferior: number;
    elevacaoSuperior: number;
    dimensao: number;
    escopo: string;
    lado: string;
    tipoEscopo: string;
    liberadoGeral: string;
    pendenteGeralParceiro: string;
    pendenteGeralMKS: string;
    executadoSoldaMKS: number;
    terminoMKS: Date;
    validacaoCQMKS: number;
    validacaoMKS: Date;
    validadoParceiro: number;
    vsParceiro: number;
    lpParceiro: number;
    liberadoParceiro: string;
    dataLiberadoParceiro: Date;
    status: string;
    observacaoAlumar: string;
    observacaoMKS: string;
    observacaoParceiro: string;
  }
  