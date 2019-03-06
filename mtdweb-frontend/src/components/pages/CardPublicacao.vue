<template>
    <div id="cardPublicacao">

        <b-button variant="primary" v-b-toggle.publicacao class='toggleButtonCard' id="toggleButtonPublicacao">Publicação</b-button>
        <b-collapse id="publicacao">
            <b-card class='cardFields'>

                <b-row>
                <b-col lg='7' sm='12'>
                <b-form-group label-size='sm' label='Fonte:' label-for='fonte'>
                    <b-form-select id='fonte' v-model="selectedFonte" :options="optionsFonte" size="sm" />
                </b-form-group>
                </b-col>

                <b-col lg='3' sm='6'>
                <b-form-group label-size='sm' label='Dt. de Pub.:' label-for='dataPublicacao'>
                    <b-form-input size='sm' type='date' placeholder='...'></b-form-input>
                </b-form-group>
                </b-col>

                <b-col lg='2' sm='6'>
                <b-form-group label-size='sm' label='Página:' label-for='pagina'>
                    <b-form-input size='sm' type='text' placeholder='...'></b-form-input>
                </b-form-group>
                </b-col>
                </b-row>

            </b-card>
        </b-collapse>

    </div>
</template>

<script>
export default {
    name: 'CardPublicacao',
    data() {
      return {
        selectedFonte: null,
        optionsFonte: [
          { value: null, text: '' },
          { value: '1', text: 'Diário da Câmara dos Deputados' },
          { value: '2', text: 'Diário do Congresso Nacional' }
        ]
      }
    }
}
</script>

<style>

</style>
