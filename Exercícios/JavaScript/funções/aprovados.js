const alunos = [
    {
        nome: 'Peterson',
        nota: 10,
        turma: 'A1',
    },
    {
        nome: 'Claus',
        nota: 4,
        turma: 'A1',
    },
    {
        nome: 'Ferdnand',
        nota: 6,
        turma: 'C2',
    },
];

function alunosAprovados(arr, media) {
    let aprovados = [];

    for(let i = 0; i < arr.length; i++) {

        const {nota, nome} = arr[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5))