<template>
    <div id='cardOrador'>

        <b-button variant="primary" v-b-toggle.orador class='toggleButtonCard' id="toggleButtonOrador">Fase | Orador</b-button>
        <b-collapse visible id="orador">
            <b-card class='cardFields'>

                <b-form-checkbox size='sm' id='chkInternet'>Exibir na internet</b-form-checkbox>

                <b-row>
                    <b-col md='6' sm='12'>
                    <b-form-group label-size='sm' label='Fase:' label-for='fase'>
                        <b-form-select id='fase' v-model="selectedFase" :options="optionsFase" size="sm" />
                    </b-form-group>
                    </b-col>

                    <b-col md='6' sm='12'>
                    <b-form-group label-size='sm' label='Papel:' label-for='papel'>
                        <b-form-select id='papel' v-model="selectedPapel" :options="optionsPapel" size="sm" />
                    </b-form-group>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col lg='6' sm='12'>
                    <b-form-group label-size='sm' label='Orador:' label-for='orador'>
                        <b-form-input size='sm' label='sm' id='orador' type='text' placeholder='...' />
                    </b-form-group>
                    </b-col>

                    <b-col lg='2' sm='5'>
                    <b-form-group label-size='sm' label='Partido:' label-for='partido'>
                        <b-form-select id='partido' v-model="selectedPartido" :options="optionsPartido" size="sm" />
                    </b-form-group>
                    </b-col>

                    <b-col lg='2' sm='3'>
                    <b-form-group label-size='sm' label='UF:' label-for='uf'>
                        <b-form-select id='uf' v-model="selectedUF" :options="optionsUF" size="sm" />
                    </b-form-group>
                    </b-col>

                    <b-col lg='2' sm='4'>
                    <b-form-group label-size='sm' label='Sexo:' label-for='sexo'>
                        <b-form-select id='sexo' v-model="selectedSexo" :options="optionsSexo" size="sm" />
                    </b-form-group>
                    </b-col>
                </b-row>

            </b-card>
        </b-collapse>

    </div>
</template>

<script>
export default {
    name: 'CardOradorDiscurso',
    data() {
      return {
        selectedFase: null,
        optionsFase: [
          { value: null, text: '' },
          { value: 'PE', text: 'Pequeno Expediente' },
          { value: 'GE', text: 'Grande Expediente' },
          { value: 'OD', text: 'Ordem do Dia' },
          { value: 'EN', text: 'Encerramento', disabled: true }
        ],
        selectedPapel: null,
        optionsPapel: [
          { value: null, text: '' },
          { value: 'presidente', text: 'Presidente' },
          { value: 'orador', text: 'Orador' },
          { value: 'aparteante', text: 'Aparteante' }
        ],
        selectedPartido: null,
        optionsPartido: [
          { value: null, text: '' },
          { value: 'DEM', text: 'DEM' },
          { value: 'NOVO', text: 'NOVO' },
          { value: 'PSL', text: 'PSL' }
        ],
        selectedUF: null,
        optionsUF: [
          { value: null, text: '' },
          { value: 'DF', text: 'DF' },
          { value: 'RJ', text: 'RJ' },
          { value: 'SP', text: 'SP' }
        ],
        selectedSexo: null,
        optionsSexo: [
          { value: null, text: '' },
          { value: 'F', text: 'F' },
          { value: 'M', text: 'M' }
        ]

      }    
    }
}

</script>

<style>

</style>
