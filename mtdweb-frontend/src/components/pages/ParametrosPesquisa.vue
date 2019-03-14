<template>
    <div id='parametrosPesquisa'>
        <b-form id='formPesquisa' class='p-2' :class='container || "div-on-form"'>
            <b-form-checkbox-group switches class='mb-3' size='sm' v-model='parametros.tipoEncontroSelecionado' name='tipoEncontro' :options='tiposEncontro' />                

            <b-form-group label-cols-md='4' label-size='sm' label='Data inicial:' label-for='dataInicial'>
                <b-form-input size='sm' id='dataInicial' type='date' v-model='parametros.dataInicial'/>
            </b-form-group>

            <b-form-group label-cols-md='4' label-size='sm' label='Data final:' label-for='dataFinal'>
                <b-form-input size='sm' id='dataFinal' type='date' v-model='parametros.dataFinal'/>
            </b-form-group>

            <b-form-group label-cols-md='3' label-size='sm' label='Título:' label-for='titulo'>
                <b-form-input size='sm' id='titulo' type='text' placeholder='...' v-model='parametros.titulo'/>
            </b-form-group>
            
            <b-button size='sm' type='submit' variant="primary" @click.prevent="pesquisar">Pesquisar</b-button>
            <!-- <b-button type='submit' variant="primary">Pesquisar</b-button> -->
        </b-form>
    </div>    
</template>

<script>
export default {
    name: 'ParametrosPesquisa',
    props: ['container'],
    data: function() {
        return {
            tiposEncontro: [
                {text: 'Sessão', value:'sessão'},
                {text: 'Reunião', value: 'reunião'}
            ],

            parametros: {
                // sessao: true,
                // reuniao: true,
                tipoEncontroSelecionado: ['sessão', 'reunião'],
                dataInicial: (new Date()).toISOString().substring(0, 10),
                dataFinal: (new Date()).toISOString().substring(0, 10),
                titulo: null
            }
        }
    },
    methods: {
        pesquisar(e) {
            // e.preventDefault()
            let comp = this.$store.getters['eventHandler']('pesquisar')
            if (comp) {
                comp.pesquisar(this.parametros)
            }
        }
    }
}
</script>

<style>
    #parametrosPesquisa {
        height: 260px;
    }

    .div-on-form {
        display: flex;
        border-radius: 8px;
        margin-bottom: 20px;
        background-color: #fff;
        padding: 10px;
        border: 1px solid rgba(0,0,0,0.2);
        box-shadow: 0 1px 5px rgba(0,0,0,0.15);
    }        

    .div-on-menu {
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        margin-bottom: 0px;
        color: #fff;
        /* color: black; */
        padding: 0;
    }        

</style>
