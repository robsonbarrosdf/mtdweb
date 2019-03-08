<template>
    <div class="distribuicao-form">
        <CardCabecalhoEncontro :encontro='encontroSelecionado'/>
        <b-table class='tableDistribuicao' small hover :items='discursos' :fields='colunas'></b-table>
    </div>
</template>

<script>
import axios from 'axios'
//import {baseApiUrl} from '@/global/global'
import {discursosFake, Discurso} from '@/global/fakeData'
import CardCabecalhoEncontro from './CardCabecalhoEncontro'
export default {
    name: 'DistribuicaoForm',
    components: {CardCabecalhoEncontro},
    data: function() {
        return {
            encontroSelecionado: {
                numEncontro: '--',
                anoEncontro: '--',
                tipoSessaoReuniao: '-----',
                dataHora: '00/00/00 00:00:00'
            },
            discursos: [],
            colunas: [
                {key: 'numeroDiscurso', label: '#'},
                {key: 'parlamentar', label: 'Orador'},
                {key: 'indexador', sortable: true},
                {key: 'sumarista', sortable: true},
                {key: 'revisor', sortable: true},
                //{key: 'acoes', label: 'Ações'},
            ]
        }
    },
    methods: {
        loadDiscursos() {
            // axios.get(`${baseApiUrl}/encontros`)
            // .then(res => this.stat = res.data)
            this.discursos = discursosFake
            //let data = new Date();
            //console.log(data.toISOString().substr(0, 10).split('-').reverse().join('/'));
        }, 
        pesquisar() {
            this.encontroSelecionado = {
                numEncontro: '--',
                anoEncontro: '--',
                tipoSessaoReuniao: '-----',
                dataHora: '00/00/00 00:00:00'
            }
            this.discursos = []
            this.discursos.push(new Discurso(1, 1, 'COM 11111/2019', 1, 1, 'Indexador A', 'Sumarista B', 'Revisor C'))
            this.discursos.push(new Discurso(2, 2, 'PLEN 219/2019', 20, 1, 'Indexador A', 'Sumarista B', 'Revisor C'))
        },
        
        displayItemSelecionado(encontro) {
            this.loadDiscursosEncontro(encontro)
        },

        loadDiscursosEncontro(encontro) {
            this.encontroSelecionado = encontro
            if (encontro.numEncontro==230) {
                // axios.get(`http://localhost:4000/encontros/${encontro.codEncontro}`)
                // .then(res => {
                //     this.encontroSelecionado = res.data
                // })

                axios.get('http://localhost:4000/discursosparadistribuir', {
                    params:{
                        codEncontro: encontro.codEncontro
                    }
                })
                .then(res => {
                    this.discursos=res.data
                    this.discursos = this.discursos.map(d => {
                        return {
                            ...d,
                            parlamentar: (d.nmOrador + ' (' + d.sgPartido + '/' + d.sgUf + ')')
                        }
                    })
                })
            } else if (encontro.numEncontro % 2 == 0) {
                this.pesquisar()
            } else {
                axios.get('http://localhost:4000/discursosparadistribuir', {
                    params:{
                        codEncontro: encontro.codEncontro
                    }
                }).then(res => this.discursos=res.data)
            }
        }


    },
    created() {
        //this.$store.state.currentComponentPage = this
        this.$store.state.displayResultComponent = this
    },
    mounted() {
        this.loadDiscursos()
    }
}
</script>

<style>
    .tipoEncontro {
        width: 20px;
        font-weight: bold;
        text-align: center;
    }

    .distribuicao-form {
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        background-color: #fff;
        padding: 10px;
        border: 1px solid rgba(0,0,0,0.2);
        box-shadow: 0 1px 5px rgba(0,0,0,0.15);
        overflow: hidden;    
    }

    .tableDistribuicao {
        font-size: .9rem;
    }
</style>
