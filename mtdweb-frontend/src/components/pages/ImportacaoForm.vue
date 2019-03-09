<template>
    <div class="importacao-form">
        <b-table small hover :items='encontros' :fields='colunas' class='tableImportacao'>
            <!-- <template slot="status" slot-scope="data">
                <i class="fa fa-circle" style='color: red;' v-if='data.item.pendente=="S"'></i>
                <i class="fa fa-circle" style='color: green;' v-if='data.item.pendente=="N"'></i>
            </template>          -->

            <template slot="actions" slot-scope="data">
                <b-button size='sm' id='btnImportar' v-b-tooltip.hover title="Importar Encontro do Escriba" variant="warning" @click="importarEncontroEscriba(data.item)" class="mr-2" v-if='data.item.importada=="N"'>
                    <i class="fa fa-arrow-right"></i>
                </b-button>
                <b-button size='sm' id='btnRemover' v-b-tooltip.hover title="Remover Encontro do MTD" variant="danger" @click="removerEncontroMTD(data.item)" v-if='data.item.importada=="S"'>
                    <i class="fa fa-trash"></i>
                </b-button>
            </template>            
        </b-table>

        <b-pagination size="md" v-model="page" :total-rows="count" :per-page="limit" />
        <!-- <b-pagination size="sm" v-model="page" :total-rows="count" :per-page="limit" /> -->
    </div>
</template>

<script>
import axios from 'axios'
import {getDataFormatada, getHoraFormatada} from '@/global/utils'
//import {getHoraFormatada} from '@/global/utils'
//import {baseApiUrl} from '@/global/global'
//import {encontrosFake} from '@/global/fakeData'
export default {
    name: 'ImportacaoForm',
    data: function() {
        return {
            parametros: {
                reuniao: true,
                sessao: true,
                dataInicial: new Date(),
                dataFinal: new Date(),
                titulo: null
            },
            page: 1,
            limit: 0,
            count: 0,
            encontros: [],
            colunas: [
                {key: 'titulo', label: 'Encontro', sortable: true},
                {key: 'dataHora', label: 'Data', sortable: true, formatter: value => getDataFormatada(value) + ' ' + getHoraFormatada(value).substr(0,5)}, 
                {key: 'tipoSessaoReuniao', label: 'Tipo', sortable: true},
                {key: 'nomOrgao', label: 'Órgão', sortable: true},
                {key: 'pendente', label: 'Pendente', sortable: true, tdClass: 'pendente importada', formatter: value => value=='N' ? 'Não' : 'Sim'},
                // {key: 'status', label: 'Status'},
                {key: 'importada', label: 'Importada', sortable: true, tdClass: 'importada', formatter: value => value=='N' ? 'Não' : 'Sim'},
                {key: 'actions', label: 'Ações'}
            ]
        }
    },
    methods: {
        loadEncontros() {

            axios.get('http://localhost:4000/encontros', {
                params: {
                    ...this.parametros, 
                    pagina: this.page
                    // limit: this.limit
                }
            })
            .then(res => {
                this.encontros = res.data.data
                this.count = res.data.count
                this.limit = res.data.limit

                this.encontros = this.encontros.map(e => {
                    return {
                        ...e,
                        titulo: (e.codTipoEncontro==1 ? 'Reunião ' + e.numEncontro : 'Sessão ' + e.numEncontro + '.' + e.anoEncontro)                        
                        //dataHora: trataDataHora(e)
                    }
                })
            })
        },

        pesquisar(parametros) {
            this.page = 1
            this.parametros = {...parametros,
                    reuniao: parametros.tipoEncontroSelecionado.indexOf('reunião') >= 0,
                    sessao: parametros.tipoEncontroSelecionado.indexOf('sessão') >= 0}
            this.loadEncontros()
        }
    },
    watch: {
        page() {
            this.loadEncontros()
        }
    },
    created() {
        //this.$store.state.currentComponentPage = this
        this.$store.state.displayResultComponent = this
        this.$store.state.searchComponent = this
    },    
    mounted() {
        this.loadEncontros()
    }
}
</script>

<style>
    .tipoEncontro {
        width: 20px;
        font-weight: bold;
        text-align: center;
    }

    .importacao-form {
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        background-color: #fff;
        padding: 10px;
        border: 1px solid rgba(0,0,0,0.2);
        box-shadow: 0 1px 5px rgba(0,0,0,0.15);
        overflow: hidden;
    }

    .tableImportacao {
        font-size: .9rem;
    }

    .pendente {
        text-align: center;
    }

    .importada {
        text-align: center;
    }

</style>
