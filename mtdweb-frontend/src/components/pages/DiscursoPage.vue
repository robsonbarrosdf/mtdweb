<template>
    <div id='discursoPage' class='conteudo2'>

        <Menu v-show='isMenuVisible' 
            :showSearchParams='false' 
            :discursosDoUsuario='discursosDoUsuario'
            @click-discurso='clickDiscurso' />

        <div class='conteudoLateral'>
            <MenuButton />
            <PageTitle />
            <DiscursoForm ref='discursoForm'/>
        </div> 
        
    </div> 
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import Menu from '@/components/template/Menu'
import MenuButton from '@/components/pages/MenuButton'
import PageTitle from '../template/PageTitle'
import DiscursoForm from './DiscursoForm'
export default {
    name: 'DiscursoPage',
    components: { Menu, MenuButton, PageTitle, DiscursoForm },
    data: function() {
        return {
            discursoCorrente: {},
            discursosDoUsuario: []
        }
    },
    computed: mapState(['isMenuVisible']),
    methods: {
        loadDiscursosDoUsuario() {
            
            axios.get("http://localhost:4000/discursos/usuario/6406")
            .then(res => {

                this.discursosDoUsuario = res.data;

                this.discursosDoUsuario = this.discursosDoUsuario.map(d => {
                    return {
                        ...d,
                        tituloDiscurso: d.txtTipoEncontro + ' ' + d.numEncontro + (d.txtTipoEncontro=='Sessão' ? '.' + d.anoEncontro : '') + ' - Discurso ' + d.nuOrdem                       
                    }
                })          

            })

        },        

        // async clickDiscurso(discurso) {
        //     let encontro = await this.getEncontro(346)
        //     this.discursoCorrente = discurso
        //     this.$refs.discursoForm.updateDiscursoSelecionado(discurso, encontro)
        // },

        clickDiscurso(discurso) {
            this.getEncontro(346)
                .then(encontro => {
                    this.discursoCorrente = discurso
                    this.$refs.discursoForm.updateDiscursoSelecionado(discurso, encontro)
                })
        },

        getEncontro(codEncontro) {
            return axios.get(`http://localhost:4000/encontros/${codEncontro}`)
                .then(res => res.data)
        }        
    },
    beforeCreate() {
        // this.$store.commit("setPerfilSelecionado", 'Discurso');
        const rota = this.$route.path
        this.$store.commit("setPerfilSelecionado", rota);
    },
    created() {
        this.loadDiscursosDoUsuario()
    }

}
</script>

<style>

</style>
