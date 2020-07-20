<template>
  <v-app>
    <NavBar :links="links"/>
    <v-main>
        <router-view></router-view>
    </v-main>
    <Footer :links="links"/>
  </v-app>  
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import Footer from "@/components/Footer.vue"
export default {
  name: 'App',
  data () {
    return {
      links: [
        {
          label: 'My Car',
          url: '/MyCar'
        },
        {
          label: 'Garage',
          url: '/garage'
        },
        {
          label: 'Settings',
          url: '/settings'
        },
        {
          label: 'Logout',
          url: '/logout'
        }
      ]
    }
  },
  components: {
    NavBar,
    Footer
  }	
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  .theme--light .v-main__wrap {
    background-color: #bed9f4;
  }
</style>
