function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: 'Daiane',
    idade: 28,
};

const pessoa2 = {
    nome: 'Breno',
    idade: 7,
};

console.log(calculaIdade.call(pessoa1, 2)) //Sendo call a idade pode ser inserida normalmente.
console.log(calculaIdade.apply(pessoa2, [2])) //Sendo apply é preciso adicionar a idade com o [].