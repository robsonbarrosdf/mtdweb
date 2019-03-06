<template>
    <div id="encontro">
        {{ encontro.titulo + ' - ' + encontro.dataHora }}
    </div>    
</template>

<script>
export default {
    name: 'CardCabecalhoEncontro',
    props: ['encontro']
}
</script>

<style>

    #encontro {
        background-color: rgb(146, 199, 146);
        color: #000;
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 10px;
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);
    }

</style>
