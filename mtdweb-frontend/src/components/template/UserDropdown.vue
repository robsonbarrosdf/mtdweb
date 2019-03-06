<template>
  <div class="user-dropdown">
    <div class="user-button">
      <i class="fa fa-user"></i>
      <span class="pl-1 d-none d-sm-block">{{ user.name }}</span>
      <span class="px-1">({{ user.ponto }})</span>
      <i class="fa fa-angle-down"></i>
    </div>

    <div class="user-dropdown-content">
      <!-- <router-link @click.native='clickPerfil' class="router-link" v-for="perfil in user.perfis" :key="perfil" :perfil='perfil' :to='linkPerfil(perfil)'> -->
      <router-link class="router-link" v-for="perfil in user.perfis" :key="perfil" :perfil='perfil' :to='linkPerfil(perfil)'>
        <i class="fa" :class="icon(perfil)" :perfil='perfil'></i>
        <span class="pl-1" :perfil='perfil'>{{perfil}}</span>
      </router-link>

      <a id='itemSair'>
        <i class="fa fa-sign-out"></i>
        <span class="perfil">Sair</span>
      </a>
    </div>

    <!-- <div class="user-button">
      <i class="fa fa-user"></i>
      <span class="pl-1 d-none d-sm-block">{{ user.name }}</span>
      <span class="px-1">({{ user.ponto }})</span>

      <b-dropdown id="ddown1" text right class="m-md-2">

        <b-dropdown-item v-for="perfil in user.perfis" :key="perfil">            

          <router-link class='user-dropdown-content' :to="linkPerfil(perfil)">
            <i :class="icon(perfil)"></i>
            {{ perfil }}
          </router-link>

        </b-dropdown-item>

        <b-dropdown-divider/>
        
        <b-dropdown-item>
          <i class="fa fa-sign-out"></i>
          Sair
        </b-dropdown-item>
    </b-dropdown>-->
  </div>
</template>

<script>
import { mapState } from "vuex";
import { perfis } from "@/global/global";
export default {
  name: "UserDropdown",
  computed: mapState(["user"]),
  methods: {
    icon(perfil) {
      return perfis.getPerfilByNomeOuUrl(perfil).icone;
    },
    linkPerfil(perfil) {
      return perfis.getPerfilByNomeOuUrl(perfil).url;
    },
    // clickPerfil(e) {
    //   const perfil = e.target.getAttribute("perfil");
    //   this.$store.commit("setPerfilSelecionado", perfil);
    // }
  }
};
</script>

<style>
.user-dropdown {
  position: relative;
  height: 100%;
}

.user-button {
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 100;
  height: 100%;
  padding: 0px 20px;
}

.user-dropdown:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.user-dropdown-content {
  position: absolute;
  right: 0px;
  background-color: #f9f9f9;
  min-width: 170px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 1;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
}

.user-dropdown:hover .user-dropdown-content {
  visibility: visible;
  opacity: 1;
}

.user-dropdown-content a {
  text-decoration: none;
  color: #000;
  padding: 10px;
}

.user-dropdown-content a:hover {
  background-color: #ededed;
  text-decoration: none;
}

#itemSair {
    background-color: #dbd6d6;
}
</style>
