<template>
  <div id="listaEncontros">
    <hr/>
    <b-table
      id="tabela"
      small
      borderless
      :items="encontrosParaDistribuir"
      :fields="colunas"
      @row-clicked="onRowClicked"
    ></b-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ListaEncontros",
  data: function() {
    return {
      distribuicaoComponentPage: {},
      encontroSelecionado: {},
      encontrosParaDistribuir: [],
      parametros: {
        reuniao: true,
        sessao: true,
        dataInicial: new Date(),
        dataFinal: new Date(),
        titulo: null
      },
      page: 1,
      count: 0,
      colunas: [
        { key: "titulo", label: "Encontros", sortable: true, thClass: "cabecalho", tdClass: "dados"}
      ]
    };
  },
  methods: {
    loadEncontros() {
      axios
        .get("http://localhost:4000/encontros", {
          params: {
            ...this.parametros,
            pagina: this.page,
            resultadosPorPagina: 9000
          }
        })
        .then(res => {

          this.encontrosParaDistribuir = res.data.data;
          // this.encontrosParaDistribuir = this.encontrosParaDistribuir.filter(
          //   e => e.importada == "S"
          // )

          this.encontrosParaDistribuir = this.encontrosParaDistribuir.map(e => {
              return {
                  ...e,
                  titulo: (e.codTipoEncontro==1 ? 'Reunião ' + e.numEncontro : 'Sessão ' + e.numEncontro + '.' + e.anoEncontro)                        
                  //dataHora: trataDataHora(e)
              }
          })          

          this.count = this.encontrosParaDistribuir.length;

        })

    },

    pesquisar(parametros) {
      this.page = 1;
      this.parametros = { ...parametros };
      // console.log(this.parametros)
      this.loadEncontros();
    },

    onRowClicked(item) { //onRowClicked(item, index, event) {
      this.itemSelecionado = item;
      this.$store.getters['eventHandler']('exibirDados').exibirDados(item)
    }
  },
  watch: {
    page() {
      this.loadEncontros();
    }
  },
    created() {
        },
    mounted() {
        this.$store.commit('setEventHandler', {eventName: 'pesquisar', handler: this})
        this.loadEncontros();
    }
};
</script>

<style>
  #listaEncontros {
    /* background-color: red; */
    /* color: #fff; */
    color: #000;
    /* height: 400px;
          overflow: hidden; */
  }

  #tabela {
    /* overflow: hidden; */
    /* height: 400px; */
    border: none;
  }

  .cabecalho,
  .dados {
  color: #fff;
    /* color: #000; */
  }

  .cabecalho:hover,
  .dados:hover {
    background-color: rgb(255, 56, 83);
  }

  #listaEncontros hr {
      background-color: red;
  }
</style>
