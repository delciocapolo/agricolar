export type IBIOrNIF = {
    nome: string;
    nif: string;
    numero: string;
    pai_nome_completo: string;
    mae_nome_completo: string;
    genero: "M" | "F";
    data_emissao: Date | string;
    data_nasc: Date | string;
    emissao_local: string;
    estado_civil: string;
    naturalidade: string;
};

export enum GenderEnum {
    M,
    F
}