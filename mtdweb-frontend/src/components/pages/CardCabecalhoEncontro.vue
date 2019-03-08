<template>
    <div id="infoEncontro">

        <div id='cabecalho1'>
            {{ encontro.codTipoEncontro==1 ? 'Reunião ' + encontro.numEncontro : 'Sessão ' + encontro.numEncontro + '/' + encontro.anoEncontro }}
        </div>
        <div id='cabecalho2'>
            {{ encontro.tipoSessaoReuniao}}
        </div>
        <div id='cabecalho2'>
            {{ encontro.dataHora}}
        </div>
    </div>    
</template>

<script>
export default {
    name: 'CardCabecalhoEncontro',
    props: ['encontro']
}
</script>

<style>

    #infoEncontro {
        background-color: rgb(146, 199, 146);
        color: #000;
        padding: 10px 10px 20px 20px; 
        border-radius: 10px;
        margin-bottom: 10px;
        font-size: 2rem;
        font-weight: 400;
        /* text-align: center; */
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);
    }

    #cabecalho2 {
        font-size: 1rem;
        color: rgb(50,50,50);
    }



</style>
