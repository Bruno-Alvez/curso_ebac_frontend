//funcão para retornar Olá+nome
function saudacao(nome: string,): string {
    return `Olá ${nome}`;
};
const seuNome = "Bruno";
const saudacaoSeuNome = saudacao(seuNome);
console.log(saudacaoSeuNome);