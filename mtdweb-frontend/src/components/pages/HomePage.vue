<template>
    <div class='home'>
         <PageTitle icon='fa fa-home' main='Quadro Geral' sub='Acompanhamento' />
         <div class="stats">
             <Stat title='Sessões prontas para importação' :value='stat.value' icon='fa fa-users' color='green' />
             <Stat title='Reuniões prontas para importação' :value='stat.value' icon='fa fa-users' color='#0040f0' />
             <Stat title='Discursos aguardando distribuição' :value='stat.value' icon='fa fa-sitemap' color='#f19900' />
             <Stat title='Discursos pendentes' :value='stat.value' icon='fa fa-commenting-o' color='#d54d50' />
             <Stat title='Sumários pendentes' :value='stat.value' icon='fa fa-file-text-o' color='#d54d50' />
             <Stat title='Revisões pendentes' :value='stat.value' icon='fa fa-check-circle-o' color='#d54d50' />
         </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import Stat from './Stat'
//import axios from 'axios'
//import { baseApiUrl } from '@/global/global'
import {statFake} from '@/global/fakeData'
export default {
    name: 'HomePage',
    components: { PageTitle, Stat },
    data: function() {
        return {
            stat: statFake
        }
    },
    methods: {
        getStats() {
            /*
            Sessoes prontas para serem importadas
            Reunioes prontas para serem importadas

            Discursos para fazer (de Sessoes e Reuniões)
            Sumários para fazer (de Sessões)
            Revisões para fazer (de sessões)
            */

            // axios.get(`${baseApiUrl}/stats`)
            // .then(res => this.stat = res.data)
        }
    },
    beforeCreate() {
        this.$store.commit("setPerfilSelecionado", null);
    },
    mounted() {
        this.getStats()
    }
}
</script>

<style>

    .stats {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .home {
        padding: 20px;
    }

</style>
