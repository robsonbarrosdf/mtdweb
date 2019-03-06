<template>
    <aside class="menu">
        <ParametrosPesquisa container='div-on-menu' v-if='showSearchParams'/>
        <ListaEncontros v-if='perfilSelecionado.nome=="Distribuição"' />
    </aside>
</template>

<script>
import { mapState } from 'vuex'
import ParametrosPesquisa from '../pages/ParametrosPesquisa'
import ListaEncontros from '../pages/ListaEncontros'
export default {
    name: 'Menu',
    props: ['showSearchParams'],
    components: { ParametrosPesquisa, ListaEncontros },
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
        width: 300px;

        /* overflow: hidden; */
    }

</style>
