<template>
    <aside class="menu">
        <ParametrosPesquisa container='div-on-menu' v-if='showSearchParams'/>
        <ListaEncontros v-if='perfilSelecionado.nome=="Distribuição"' />
        <ListaDiscursos v-if='["Discurso","Sumário","Revisão"].indexOf(perfilSelecionado.nome)>-1' />
    </aside>
</template>

<script>
import { mapState } from 'vuex'
import ParametrosPesquisa from '../pages/ParametrosPesquisa'
import ListaEncontros from '../pages/ListaEncontros'
import ListaDiscursos from '../pages/ListaDiscursos'
export default {
    name: 'Menu',
    props: ['showSearchParams'],
    components: { ParametrosPesquisa, ListaEncontros, ListaDiscursos },
    computed: mapState(['isMenuVisible', 'perfilSelecionado'])
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
