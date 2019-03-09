<template>
  <div id="listaDiscursos">
    <b-table small borderless :items="meusDiscursos" :fields="colunas" @row-clicked="onRowClicked"></b-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ListaDiscursos",
  data: function() {
    return {
      discursoComponentPage: {},
      itemSelecionado: {},
      meusDiscursos: [],
    //   parametros: {
    //     reuniao: true,
    //     sessao: true,
    //     dataInicial: new Date(),
    //     dataFinal: new Date(),
    //     titulo: null
    //   },
    //   page: 1,
    //   count: 0,
      colunas: [
        { key: "tituloDiscurso", label: "Discursos", sortable: true, thClass: "cabecalho", tdClass: "dados"}
      ]
    };
  },
  methods: {

    loadDiscursos() {
        
        axios.get("http://localhost:4000/discursos/usuario/6406")
        .then(res => {

            this.meusDiscursos = res.data;

            this.meusDiscursos = this.meusDiscursos.map(d => {
                return {
                    ...d,
                    tituloDiscurso: d.txtTipoEncontro + ' ' + d.numEncontro + (d.txtTipoEncontro=='Sessão' ? '.' + d.anoEncontro : '') + ' - Discurso ' + d.nuOrdem                       
                }
            })          

            this.count = this.meusDiscursos.length;

        })

    },

    // pesquisar(parametros) {
    //   this.page = 1;
    //   this.parametros = { ...parametros };
    //   // console.log(this.parametros)
    //   this.loadDiscursos();
    // },

    onRowClicked(item) { //onRowClicked(item, index, event) {
      this.itemSelecionado = item;
      this.$store.state.displayResultComponent.displayItemSelecionado(item);
    }
  },
  created() {

  },
  mounted() {
    this.loadDiscursos();
  }
};
</script>

<style>
    #listaDiscursos {
      height: 800px;;
      display: block;
      overflow: auto;
      padding-top: 10px;
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
