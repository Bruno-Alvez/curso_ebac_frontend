class Aluno {
    constructor(nomeDoAluno, notaDoAluno) {
        this.nome = nomeDoAluno;
        this.nota = notaDoAluno;
    }
}

const listaDosAlunos = [
    new Aluno("Ana", 10),
    new Aluno("Lucas", 4.5),
    new Aluno("Carla", 5.5),
    new Aluno("Bruno", 7.5),
    new Aluno("Matias", 5),
    new Aluno("Pedro",8.8)
]

function alunosAprovados(listaDosAlunos) {
    return listaDosAlunos.filter(aluno => aluno.nota >= 6);
}

const aprovados = alunosAprovados(listaDosAlunos);

console.log(aprovados)