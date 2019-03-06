<template>
    <div id='distribuicaoPage' class='conteudo2'>

        <Menu v-show='isMenuVisible' :showSearchParams='true'/>

        <div class='conteudoLateral'>
            <MenuButton />
            <PageTitle />
            <!-- <ParametrosPesquisa /> -->
            <DistribuicaoForm />
        </div> 

    </div>    
</template>

<script>
import { mapState } from 'vuex'
import Menu from '@/components/template/Menu'
import MenuButton from '@/components/pages/MenuButton'
import PageTitle from '../template/PageTitle'
import DistribuicaoForm from './DistribuicaoForm'
// import ParametrosPesquisa from './ParametrosPesquisa'
export default {
    name: 'DistribuicaoPage',
    // components: { Menu, MenuButton, PageTitle, ParametrosPesquisa, DistribuicaoForm },
    components: { Menu, MenuButton, PageTitle, DistribuicaoForm },
    computed: mapState(['isMenuVisible']),
    beforeCreate() {
        this.$store.commit("setPerfilSelecionado", 'Distribuição');
    }
}
</script>

<style>

</style>
