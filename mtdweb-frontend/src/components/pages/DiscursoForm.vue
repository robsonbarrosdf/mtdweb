<template>
    <div id="discursoForm">
        <!-- <div v-for="id in [1,2,3,4]" :key='id'>
            <b-button block v-b-toggle="'accordion-' + id" variant="info">
                Accordion {{ id }}
            </b-button>
        </div>         -->

        <CardCabecalhoEncontro :encontro='encontro'/>
        <CardNavegacaoDiscurso />

        <b-form>

            <CardOradorDiscurso />
            <div class="mb-2"></div>
            <CardPublicacao />
            <div class="mb-2"></div>
            <CardTextoDiscurso />
            <div class="mb-2"></div>
            <CardIndexacao />            

            <div class="mb-2"></div>
            <b-button v-b-toggle.outros class='toggleButtonCard' id="toggleButtonOutros">Outros</b-button>
            <b-collapse visible id="outros">
                <b-card class='cardFields'>

                    <b-form-group label-size='sm' label-cols-md='2' label='Data inicial:' label-for='dataInicial'>
                        <b-form-input id='dataInicial' type='date' size='sm' />
                    </b-form-group>

                    <b-row>
                        <b-col md='4' sm='12'>
                            <div class='data'>
                                <b-form-group label='Data final:' label-for='dataFinal'>
                                    <b-form-input id='dataFinal' type='date' />
                                </b-form-group>
                            </div>
                        </b-col>
                        <b-col md='4' sm='12'>
                            <div class='pr-2'>
                                <b-form-group label='Título:' label-for='titulo'>
                                    <b-form-input id='titulo' type='text' placeholder='...' />
                                </b-form-group>
                            </div>
                        </b-col>
                    </b-row>

                </b-card>                
            </b-collapse>

        </b-form>

    </div>
</template>

<script>
import CardCabecalhoEncontro from './CardCabecalhoEncontro'
import CardNavegacaoDiscurso from './CardNavegacaoDiscurso'
import CardOradorDiscurso from './CardOradorDiscurso'
import CardTextoDiscurso from './CardTextoDiscurso'
import CardPublicacao from './CardPublicacao'
import CardIndexacao from './CardIndexacao'

export default {
    name: 'DiscursoForm',
    components: { CardCabecalhoEncontro, CardNavegacaoDiscurso, CardOradorDiscurso, CardTextoDiscurso, CardPublicacao, CardIndexacao },
    data: function() {
        return {
            encontro: {
                titulo: '000',
                dataHora: '00/00/00 00:00:00'
            }
        }
    }
}
</script>

<style>
    .toggleButtonCard {
        width:100%;
        text-align: start;
        background-color: rgb(119, 119, 119);
    }
    
    .cardFields {
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    }

</style>
