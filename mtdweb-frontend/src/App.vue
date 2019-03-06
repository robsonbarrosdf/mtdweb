<template>
  <div id="app">
    <Header title = 'MTD Web' :hideToggle='true' />
    <Content />
    <Footer />
  </div>
</template>

<script>

import { mapState } from "vuex"
import Header from '@/components/template/Header'
import Content from '@/components/template/Content'
import Footer from '@/components/template/Footer'

export default {
  name: 'App',
  components: {
    Header, Content, Footer
  },
  computed: mapState(['isMenuVisible', 'user', 'perfilSelecionado'])
}
</script>

<style>
  * {
    font-family: 'Verdana', sans-serif;
  }

  body {
    margin: 0;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    height: 100vh;
    display: grid;

    grid-template-rows: 60px 1fr 40px;
    grid-template-columns: 1fr;
    /*
    grid-template-columns: 300px 1fr;
    grid-template-areas: 
      'header header'
      'menu content'
      'menu footer'
    */
    grid-template-areas: 
      'header'
      'content'
      'footer'

  }

/*
  #app.hide-menu {
		grid-template-areas:
			"header header"
			"content content"
			"footer footer";
	}
*/
</style>
