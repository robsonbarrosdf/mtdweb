<template>
    <div id="navegacaoDiscurso" class='my-2'>
        <div id='pageInfo' class='p-1'>
            <b-pagination-nav size='sm' total-rows='100' :number-of-pages='1' />
        </div>
        <div id='discursoInfo' class='p-1'>
            <h3>{{discurso.nmOrador + '(' + discurso.sgPartido + '-' + discurso.sgUf + ')'}}</h3>
            <h5>{{discurso.dtHoraInicioDiscurso}}</h5>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardNavegacaoDiscurso',
    props: ['discurso'],
}
</script>

<style>
    #navegacaoDiscurso {
        display: flex;
        height: 80px;
        border-top: 1px solid lightgray;
        border-bottom: 1px solid grey;
        /* border: 1px solid grey; */
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); 
        border-radius: 4px;
        border-radius: 3px;
    }

    #pageInfo {
        /* background-color: #f00; */
        /* border-radius: 3px; */
        flex-grow: 0;        
        width: 135px;
    }

    #discursoInfo {
        /* background-color: #0f0; */
        flex-grow: 1;
        overflow: hidden;
    }

    #discursoInfo h3 {
        font-size: 1.2rem;
    }

    #discursoInfo h5 {
        font-size: 1.0rem;
    }    
</style>
