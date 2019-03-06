<template>
    <div id='importacaoPage' class='conteudo2'>

        <Menu v-show='isMenuVisible' :showSearchParams='true'/>

        <div class='conteudoLateral'>
            <MenuButton />
            <PageTitle />
            <!-- <ParametrosPesquisa /> -->
            <ImportacaoForm />
        </div> 
        
    </div>    
</template>

<script>
import { mapState } from 'vuex'
import Menu from '@/components/template/Menu'
import MenuButton from '@/components/pages/MenuButton'
import PageTitle from '../template/PageTitle'
import ImportacaoForm from './ImportacaoForm'
// import ParametrosPesquisa from './ParametrosPesquisa'
export default {
    name: 'ImportacaoPage',
    // components: { Menu, MenuButton, PageTitle, ParametrosPesquisa, ImportacaoForm },
    components: { Menu, MenuButton, PageTitle, ImportacaoForm },
    computed: mapState(['isMenuVisible']),
    beforeCreate() {
        this.$store.commit("setPerfilSelecionado", 'Importação');
    },
}
</script>

<style>
    
</style>
