<template>
    <div id='cardIndexacao'>

        <b-button variant="primary" v-b-toggle.indexacao class='toggleButtonCard' id="toggleButtonTexto">Indexação</b-button>
        <b-collapse visible id="indexacao">
            <b-card class='cardFields'>

                <b-row>
                    <b-col md='6' sm='12'>
                        <!-- <b-form-group label-size='sm' label='Indexação (TECAD):' label-for='indexacaoTecad'>
                            <b-form-textarea id="indexacaoTecad" size="sm" type="text" placeholder="..." />
                        </b-form-group> -->
                        <div>
                            <a class='textoLabel textoLabelComLink' href="#" v-b-tooltip.hover title="Acessar Tecad" >Indexação&nbsp;
                                <i class="fa fa-external-link"></i>
                            </a>
                        </div>
                        <!-- <textarea class="edit-sumario"></textarea> -->
                        <b-form-textarea id="indexacaoTecad" size="sm" placeholder="..." />
                    </b-col>


                    <b-col md='6' sm='12'>
                        <!-- <b-form-group label-size='sm' label='Indexação Livre:' label-for='indexacaoLivre'>
                            <b-form-textarea id="indexacaoLivre" size="sm" placeholder="..." />
                        </b-form-group> -->
                        <label class='textoLabel' for='indexacaoLivre'>Indexação Livre</label>
                        <b-form-textarea id="indexacaoLivre" size="sm" placeholder="..." />

                    </b-col>
                </b-row>

                <b-row>
                    <b-col md='6' sm='12'>
                        <b-form-group label-size='sm' label='Temas:' label-for='temas'>
                            <b-form-select multiple :select-size="4" v-model="temas" :options="optionsTemas" />
                        </b-form-group>
                    </b-col>

                    <b-col md='6' sm='12'>
                        <b-form-group label-size='sm' label='Proposições:' label-for='proposicoes'>
                            <b-form-select multiple :select-size="4" v-model="proposicoes" :options="optionsProposicoes" />
                        </b-form-group>
                    </b-col>
                </b-row>

            </b-card>
        </b-collapse>

    </div>
    
</template>

<script>
export default {
    name: 'CardIndexacaoDiscurso',
    data() {
      return {
        temas: [],
        optionsTemas: [
          { value: '1', text: 'Administração Pública' },
          { value: '2', text: 'Processo Legislativo' },
          { value: '3', text: 'Direito do Trabalho' },
          { value: '4', text: 'Direito Previdenciário', disabled: true }
        ],
        proposicoes: [],
        optionsProposicoes: [
          { value: '1', text: 'PL 1/2019' },
          { value: '2', text: 'PEC 1/2010' },
          { value: '3', text: 'PL 2/2019' },
          { value: '4', text: 'PL 3/2015', disabled: true }
        ]
      }
    }
}
</script>

<style>

</style>
