<template>
    <div id='sumarioPage' class='conteudo2'>

        <Menu v-show='isMenuVisible' :showSearchParams='false' />

        <div class='conteudoLateral'>
            <MenuButton />
            <PageTitle />
            <DiscursoForm />
        </div> 
        
    </div> 
</template>

<script>
import { mapState } from 'vuex'
import Menu from '@/components/template/Menu'
import MenuButton from '@/components/pages/MenuButton'
import PageTitle from '../template/PageTitle'
import DiscursoForm from './DiscursoForm'
export default {
    name: 'SumarioPage',
    components: { Menu, MenuButton, PageTitle, DiscursoForm },
    computed: mapState(['isMenuVisible']),
    beforeCreate() {
        this.$store.commit("setPerfilSelecionado", 'Sumário');
    },

}
</script>

<style>

</style>
