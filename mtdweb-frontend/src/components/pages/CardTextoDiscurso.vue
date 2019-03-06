<template>
    <div id='cardTexto'>

        <b-button variant="primary" v-b-toggle.textoDiscurso class='toggleButtonCard' id="toggleButtonTexto">Texto do Discurso</b-button>
        <b-collapse visible id="textoDiscurso">
            <b-card class='cardFields'>

                <b-form-group label-size='sm' label="Texto:" label-for="texto-discurso">
                    <VueEditor placeholder="Texto do discurso..." :editorToolbar='customToolbar' />
                </b-form-group>      

                <b-tabs card>
                    <b-tab title='Sumário' active>
                        <VueEditor placeholder="Sumário do discurso..." />
                    </b-tab>
                    <b-tab title='Revisão'>
                        <VueEditor placeholder="Revisão do sumário..." />
                    </b-tab>
                </b-tabs>

            </b-card>
        </b-collapse>

    </div>
    
</template>

<script>
import { VueEditor } from "vue2-editor"
export default {
    name: 'CardTextoDiscurso',
    components: { VueEditor },
    data() {
        return {
            customToolbar: [
                ['bold', 'italic', 'underline'],
                [{ 'script': 'sub'}, { 'script': 'super' }],
                [{ 'indent': '-1'}, { 'indent': '+1' }],
                [{ 'align': [] }],
                [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }]
            ]            
        }
    }
}
</script>

<style>

</style>
