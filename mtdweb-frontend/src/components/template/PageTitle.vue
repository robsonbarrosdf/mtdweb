<template>
  <div class="page-title pl-2">
    <!-- <h1>
      <i v-if="icon" :class="icon"></i>
      <i v-if="!icon" :class="perfilSelecionado.icone"></i>
      {{ main || perfilSelecionado.titulo }}
    </h1>
    <h2>{{ sub || perfilSelecionado.subTitulo }}</h2>
    <hr> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "PageTitle",
  props: ["icon", "main", "sub", "perfil"],
  computed: mapState(['perfilSelecionado']),
};
</script>

<style>

  /* .page-title {
    background-color: #efefef;
  } */

  .page-title h1 {
    margin: 0;
  }

  .page-title h2 {
    color: #777;
    margin-top: 5px;
    font-size: 1.3rem;
  }

</style>
