export const userFake = {
    name: 'Robson Barros',
    ponto: 'P_6406',
    email: 'teste@teste.com.br',
    perfis: [
        'Importação',
        'Distribuição',
        'Discurso',
        'Sumário',
        'Revisão'
    ]
}

export const statFake = {
    value: 5
}

class Encontro {
    constructor(codTipo, codEncontro, titulo, numero, ano, dataHora, codSileg) {
        this.codTipo = codTipo
        this.codEncontro = codEncontro
        this.titulo =  titulo
        this.numero = numero
        this.ano = ano
        this.dataHora = dataHora
        this.codSileg = codSileg
    }
}
export const encontrosFake = [
    new Encontro(1, 1, 'COM 11111/2019', 11111, 2019, new Date(2019, 11, 24, 10, 33, 30), 11111),
    new Encontro(1, 1, 'COM 11111/2019', 11111, 2019, new Date(2019, 11, 24, 10, 33, 30), 11111),
    new Encontro(1, 1, 'COM 11111/2019', 11111, 2019, new Date(2019, 11, 24, 10, 33, 30), 11111),
    new Encontro(2, 2, 'PLEN 219/2019', 1, 2019, new Date(2019, 11, 24, 10, 33, 30), 55555),
    new Encontro(2, 2, 'PLEN 219/2019', 1, 2019, new Date(2019, 11, 24, 10, 33, 30), 55555),
    new Encontro(2, 2, 'PLEN 219/2019', 1, 2019, new Date(2019, 11, 24, 10, 33, 30), 55555)
]

export class Discurso {
    constructor(codTipoEncontro, codEncontro, tituloEncontro, codDiscurso, numeroDiscurso, indexador, sumarista, revisor) {
        this.codTipoEncontro = codTipoEncontro
        this.codEncontro = codEncontro
        this.tituloEncontro = tituloEncontro
        this.codDiscurso = codDiscurso
        this.numeroDiscurso = numeroDiscurso
        this.indexador = indexador
        this.sumarista = sumarista
        this.revisor = revisor
    }
}

// export const discursosFake = [
//     new Discurso(1, 1, 'COM 11111/2019', 1, 1, 'Indexador A', 'Sumarista B', 'Revisor C'),
//     new Discurso(1, 1, 'COM 11111/2019', 2, 2, 'Indexador A', 'Sumarista B', 'Revisor C'),
//     new Discurso(1, 1, 'COM 11111/2019', 3, 3, 'Indexador A', 'Sumarista B', 'Revisor C'),
//     new Discurso(1, 1, 'COM 11111/2019', 4, 4, 'Indexador A', 'Sumarista B', 'Revisor C'),
//     new Discurso(1, 1, 'COM 11111/2019', 5, 5, 'Indexador A', 'Sumarista B', 'Revisor C'),
//     new Discurso(1, 1, 'COM 11111/2019', 6, 6, 'Indexador A', 'Sumarista B', 'Revisor C'),
//     new Discurso(1, 1, 'COM 11111/2019', 7, 7, 'Indexador A', 'Sumarista B', 'Revisor C'),
//     new Discurso(1, 1, 'COM 11111/2019', 8, 8, 'Indexador A', 'Sumarista B', 'Revisor C'),
//     new Discurso(1, 1, 'COM 11111/2019', 9, 9, 'Indexador A', 'Sumarista B', 'Revisor C'),
//     new Discurso(1, 1, 'COM 11111/2019', 10, 10, 'Indexador A', 'Sumarista B', 'Revisor C'),
//     new Discurso(1, 1, 'COM 11111/2019', 11, 11, 'Indexador A', 'Sumarista B', 'Revisor C'),
//     new Discurso(1, 1, 'COM 11111/2019', 12, 12, 'Indexador A', 'Sumarista B', 'Revisor C'),
//     new Discurso(2, 2, 'PLEN 219/2019', 20, 1, 'Indexador A', 'Sumarista B', 'Revisor C'),
//     new Discurso(2, 2, 'PLEN 219/2019', 21, 2, 'Indexador A', 'Sumarista B', 'Revisor C'),
//     new Discurso(2, 2, 'PLEN 219/2019', 22, 3, 'Indexador A', 'Sumarista B', 'Revisor C'),
//     new Discurso(2, 2, 'PLEN 219/2019', 23, 5, 'Indexador A', 'Sumarista B', 'Revisor C'),
//     new Discurso(2, 2, 'PLEN 219/2019', 24, 5, 'Indexador A', 'Sumarista B', 'Revisor C'),
//     new Discurso(2, 2, 'PLEN 219/2019', 25, 6, 'Indexador A', 'Sumarista B', 'Revisor C'),
//     new Discurso(2, 2, 'PLEN 219/2019', 26, 7, 'Indexador A', 'Sumarista B', 'Revisor C')
// ]

export const discursosFake = [
    new Discurso(1, 1, 'COM 11111/2019', 1, 1, 'Indexador A', 'Sumarista B', 'Revisor C'),
    new Discurso(2, 2, 'PLEN 219/2019', 20, 1, 'Indexador A', 'Sumarista B', 'Revisor C') 
]