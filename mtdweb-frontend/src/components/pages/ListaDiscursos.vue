<template>
    <div id="listaDiscursos">
        <b-table small borderless :items="discursosDoUsuario" :fields="colunas" @row-clicked="onRowClicked"></b-table>
    </div>
</template>

<script>
export default {
    name: "ListaDiscursos",
    props: ['discursosDoUsuario'],
    data: function() {
        return {
            discursoSelecionado: {},
            colunas: [
                {
                    key: "tituloDiscurso",
                    label: "Discursos",
                    sortable: true,
                    thClass: "cabecalho",
                    tdClass: "dados"
                }
            ]
        }
    },
    methods: {
        onRowClicked(item) {
            //onRowClicked(item, index, event) {
            this.discursoSelecionado = item;
            this.$emit("click-discurso", item);
        }
    }
}
</script>

<style>
    #listaDiscursos {
        height: 800px;
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
</style>
