<template>
    <div id='discursoPage' class='conteudo2'>

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
    name: 'DiscursoPage',
    components: { Menu, MenuButton, PageTitle, DiscursoForm },
    computed: mapState(['isMenuVisible']),
    beforeCreate() {
        // this.$store.commit("setPerfilSelecionado", 'Discurso');
        const rota = this.$route.path
        this.$store.commit("setPerfilSelecionado", rota);
    },

}
</script>

<style>

</style>
