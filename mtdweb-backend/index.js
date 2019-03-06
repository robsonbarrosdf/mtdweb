const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const encontros = require('./dados/encontros.json')
const discursos = require('./dados/discursos748.json')

const resultadosPorPagina = 8

// app.use(function(req, res, next) {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //     next();
    //   });
    
app.use(bodyParser.json())
app.use(cors())

app.get('/discursosparadistribuir', (req, res) => {
    let codEncontro = req.query.codEncontro
    let discursos2 = discursos.map((d, index) => {
        return {
            //new Discurso(1, 1, 'COM 11111/2019', 1, 1, 'Indexador A', 'Sumarista B', 'Revisor C'),
            codTipoEncontro: 2,
            codEncontro: d.cod_encontro,
            tituloEncontro: 'PLEN 1/2019',
            codDiscurso: index,
            numeroDiscurso: d.nuOrdem,
            indexador: 'indexador 748',
            sumarista: 'sumarista 748',
            revisor: 'revisor 748'  
        }
    })
    res.send(discursos2)
    //console.log('TESTEEEEEEEE')
})

app.get('/encontros', (req, res) => {
    //console.log(encontros)

    let dtIni = req.query['dataInicial']
    let dtFim = req.query['dataFinal']
    let texto = req.query['titulo']
    let bReuniao = req.query['reuniao'] === 'true'
    let bSessao = req.query['sessao'] === 'true'

    let encontros2 = encontros.map(e => {
        let anoEncontro = (new Date(e.datEncontro)).getFullYear()
        let titEncontro = (e.codTipoEncontro == 1 ? 'COM ' : 'PLEN ') + e.numEncontro.trim() + '/' + anoEncontro
        let numEncontro = !e.numEncontro ? e.numEncontro : Number(e.numEncontro.trim())
        titEncontro = !titEncontro ? titEncontro : titEncontro.trim() 
        return {
            codTipo: e.codTipoEncontro,
            codEncontro: e.codEncontro,
            titulo : titEncontro,
            numero: numEncontro,
            ano: anoEncontro,
            dataHora: new Date(e.datEncontro),
            codSileg: e.codSileg,
            importada: (e.Importada==1 ? 'S' : 'N'),
            pendente: (e.Pendente=='S' ? 'S' : 'N')
        }
    })

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

        if (!!texto) {
            result = result && e.titulo.search(texto)>=0
        }

        if(bReuniao && bSessao) {
            result = result && (e.codTipo==1 || e.codTipo==2)
        } else if(bReuniao) {
            result = result && e.codTipo==1
        } else if(bSessao) {
            result = result && e.codTipo==2
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
        data:encontros4, count: encontros3.length, limit:localResultadosPorPagina
    })
    
    // console.log(encontros4)
    // console.log(pagina)
    // console.log(localResultadosPorPagina)
    // console.log('Resultado Final: ' + encontros3.length)
    // console.log('Resultado Final2: ' + encontros4.length)
    // console.log(req.query)

})

app.listen(4000, () => {
    console.log('Backend executando...')
})

// module.exports = app => {
//     app.use(bodyParser.json())
//     app.use(cors())
// }

