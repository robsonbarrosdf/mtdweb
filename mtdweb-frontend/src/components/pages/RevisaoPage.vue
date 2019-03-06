<template>
    <div id='revisaoPage' class='conteudo2'>

        <Menu v-show='isMenuVisible' :showSearchParams='false' />

        <div class='conteudoLateral'>
            <MenuButton />
            <PageTitle />
        </div> 
        
    </div> 
</template>

<script>
import { mapState } from 'vuex'
import Menu from '@/components/template/Menu'
import MenuButton from '@/components/pages/MenuButton'
import PageTitle from '../template/PageTitle'
export default {
    name: 'RevisaoPage',
    components: { Menu, MenuButton, PageTitle },
    computed: mapState(['isMenuVisible']),
    beforeCreate() {
        this.$store.commit("setPerfilSelecionado", 'Revisão');
    },

}
</script>

<style>

</style>
