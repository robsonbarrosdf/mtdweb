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
        { key: "codTipo", thClass: "d-none", tdClass: "d-none" },
        { key: "codEncontro", thClass: "d-none", tdClass: "d-none" },
        {
          key: "titulo",
          label: "Encontros",
          sortable: true,
          thClass: "cabecalho",
          tdClass: "dados"
        },
        { key: "numero", thClass: "d-none", tdClass: "d-none" },
        { key: "ano", thClass: "d-none", tdClass: "d-none" }, //label: 'Ano', sortable: true},
        { key: "dataHora", thClass: "d-none", tdClass: "d-none" },
        { key: "codSileg", thClass: "d-none", tdClass: "d-none" }
        //{key: 'actions', label: 'Ações'}
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
          this.encontrosParaDistribuir = this.encontrosParaDistribuir.filter(
            e => e.importada == "S"
          );
          this.count = this.encontrosParaDistribuir.length;
        });
    },

    pesquisar(parametros) {
      this.page = 1;
      this.parametros = { ...parametros };
      this.loadEncontros();
    },

    onRowClicked(item) { //onRowClicked(item, index, event) {
      this.itemSelecionado = item;
      this.$store.state.displayResultComponent.displayItemSelecionado(item);
    }
  },
  watch: {
    page() {
      this.loadEncontros();
    }
  },
  created() {
    //this.$store.state.currentComponentPage = this;
    this.$store.state.searchComponent = this;
  },
  mounted() {
    this.loadEncontros();
  }
};
</script>

<style>
#listaEncontros {
  /* background-color: red; */
  color: #fff;
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
}

.cabecalho:hover,
.dados:hover {
  background-color: rgb(56, 170, 185);
}

#listaEncontros hr {
    background-color: red;
}
</style>
