<template>
    <aside class="menu">
        <ParametrosPesquisa 
            v-if='showSearchParams'
            @click-pesquisar='clickPesquisar' 
            container='div-on-menu' />

        <ListaEncontros 
            v-if='perfilSelecionado.nome=="Distribuição"'
            ref='listaEncontros' />

        <ListaDiscursos 
            v-if='["Discurso","Sumário","Revisão"].indexOf(perfilSelecionado.nome)>-1' 
            :discursosDoUsuario='discursosDoUsuario'
            @click-discurso='clickDiscurso' />
    </aside>
</template>

<script>
import { mapState } from 'vuex'
import ParametrosPesquisa from '../pages/ParametrosPesquisa'
import ListaEncontros from '../pages/ListaEncontros'
import ListaDiscursos from '../pages/ListaDiscursos'
export default {
    name: 'Menu',
    props: ['showSearchParams', 'discursosDoUsuario'],
    components: { ParametrosPesquisa, ListaEncontros, ListaDiscursos },
    computed: mapState(['isMenuVisible', 'perfilSelecionado']),
    methods: {
        clickDiscurso(discurso) {
            this.$emit('click-discurso', discurso)
        },
        clickPesquisar(parametros, resultado) {
            this.$emit('click-pesquisar', parametros, resultado, this.$refs.listaEncontros)
        }
    }
}
</script>

<style>

    .menu {
        grid-area: menu;
        background: linear-gradient(to right, #232526, #414345);

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        /* width: 300px; */
        min-width: 300px;
        /* overflow: hidden; */
    }

</style>
