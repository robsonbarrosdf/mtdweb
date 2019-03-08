const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const encontros = require('./dados/encontros.json')
const discursos748 = require('./dados/discursos748.json')
const discursos346 = require('./dados/discursos346.json')

const resultadosPorPagina = 8

// app.use(function(req, res, next) {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //     next();
    //   });
    

const fnTrataEncontro = e => {

    let anoEncontro = (new Date(e.datEncontro)).getFullYear()

    return {
        codTipoEncontro: e.codTipoEncontro,
        codEncontro: e.codEncontro,
        prefixo : (e.codTipoEncontro == 1 ? 'COM ' : 'PLEN '),
        numEncontro: e.numEncontro,
        anoEncontro: anoEncontro,
        dataHora: new Date(e.datEncontro),
        dataHoraInicio: new Date(e.dtHoraInicio),
        dataHoraFim: new Date(e.dtHoraFim),
        codSileg: e.codSileg,
        importada: (e.Importada==1 ? 'S' : 'N'),
        pendente: (e.Pendente=='S' ? 'S' : 'N'),
        nomOrgao: (e.nomOrgao ? e.nomOrgao.trim() : e.nomOrgao),
        tipoSessaoReuniao: (e.tipoEncontro ? e.tipoEncontro.trim() : e.tipoEncontro)
    }
}

app.use(bodyParser.json())
app.use(cors())

app.get('/discursos/usuario/:ponto', (req, res) => {

    let ponto = req.query.ponto
    let discursosAux
    if (ponto=6406) {
        discursosAux = discursos346
    } else {
        discursosAux = discursos748
    }

    let discursos2 = discursosAux.map((d, index) => {
        return {
            //new Discurso(1, 1, 'COM 11111/2019', 1, 1, 'Indexador A', 'Sumarista B', 'Revisor C'),
            // tituloEncontro: 'PLEN 1/2019',

            ...d,
            codEncontro: d.cod_encontro,
            codTipoEncontro: 2, 
            numeroDiscurso: d.nuOrdem,
            codDiscurso: index
        }
    })
    res.send(discursos2)

})

app.get('/discursos/:id', (req, res) => {
    let id = req.query.id
    let discursosAux = discursos346
    discursosAux = discursosAux.filter(d => d.nuOrdem == id)
    res.send(discursosAux)
})

app.get('/discursosparadistribuir', (req, res) => {
    let codEncontro = req.query.codEncontro
    let discursosAux
    if (codEncontro==346) {
        discursosAux = discursos346
    } else {
        discursosAux = discursos748
    }
    let discursos2 = discursosAux.map((d, index) => {
        return {
            //new Discurso(1, 1, 'COM 11111/2019', 1, 1, 'Indexador A', 'Sumarista B', 'Revisor C'),
            // tituloEncontro: 'PLEN 1/2019',

            ...d,
            codEncontro: d.cod_encontro,
            codTipoEncontro: 2, 
            numeroDiscurso: d.nuOrdem,
            codDiscurso: index,
            indexador: 'Indexador ' + codEncontro,
            sumarista: 'Sumarista ' + codEncontro,
            revisor: 'Revisor ' + codEncontro  
        }
    })
    res.send(discursos2)
})

app.get('/encontros/:id', (req, res) => {
    // console.log('testeee', req.params)
    let encontrosAux = encontros.filter(e => e.codEncontro == req.params.id)
    encontrosAux = encontrosAux.map(fnTrataEncontro)
    if (encontrosAux && encontrosAux.length > 0 ) encontrosAux = encontrosAux[0]
    res.send(encontrosAux)
})

app.get('/encontros', (req, res) => {

    let dtIni = req.query['dataInicial']
    let dtFim = req.query['dataFinal']

    let texto = req.query['titulo']
 
    let bReuniao = true //req.query['reuniao'] === 'true'
    let bSessao = true //req.query['sessao'] === 'true'

    let tipoEncontroSelecionado = req.query['tipoEncontroSelecionado']
    if (tipoEncontroSelecionado && tipoEncontroSelecionado.length>0) {
        bReuniao = tipoEncontroSelecionado.indexOf('reunião')>-1
        bSessao = tipoEncontroSelecionado.indexOf('sessão')>-1
    }

    let encontros2 = encontros.map(fnTrataEncontro)

    // console.log("")
    // console.log("Parâmetros: ", req.query)
    // console.log('Resultado Inicial: ' + encontros2.length)

    let encontros3 = encontros2.filter(e => {
        let result = true
        // if (!!dtIni) {
        //     result = result && e.dataHora>=(new Date(dtIni))
        // }

        // if (!!dtFim) {
        //     result = result && e.dataHora<=(new Date(dtFim))
        // }

        if (texto) {
            if (e.numEncontro) {
                result = result && e.numEncontro.toString().concat('.', e.anoEncontro).search(texto)>=0 
            } else {
                result = false
            }
        }

        if(bReuniao && bSessao) {
            result = result && (e.codTipoEncontro==1 || e.codTipoEncontro==2)
        } else if(bReuniao) {
            result = result && e.codTipoEncontro==1
        } else if(bSessao) {
            result = result && e.codTipoEncontro==2
        }

        return result
    })

    let pagina = req.query.pagina || 1
    let localResultadosPorPagina = req.query.resultadosPorPagina || resultadosPorPagina
    let indexInicial = (pagina-1) * resultadosPorPagina
    let contador = 0
    let encontros4 = encontros3.filter((e, index) => {
        if (index>=indexInicial && contador < localResultadosPorPagina) {
            contador++
            return true
        } else {
            return false
        }
    })

    
    res.send({
        data:encontros4,
        count: encontros3.length, 
        limit:localResultadosPorPagina
    })
    
    // console.log(encontros4)
    // console.log(pagina)
    // console.log(localResultadosPorPagina)
    // console.log('Resultado Final: ' + encontros3.length)
    // console.log('Resultado Final2: ' + encontros4.length)
    // console.log(encontros4[0])
    // console.log(req.query)
    
})

app.listen(4000, () => {
    console.log('Backend executando...')
})

// module.exports = app => {
//     app.use(bodyParser.json())
//     app.use(cors())
// }

