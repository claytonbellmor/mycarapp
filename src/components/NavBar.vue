<template>
  <div>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title 
        @click="$router.push('/')"
        style="cursor: pointer"
      >
        My Car App
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-header-link`"
        class="mx-1"
        text
        rounded
        :to="link.url"
      >
        {{ link.label }}
      </v-btn>
      <v-btn @click="toggleTheme" text rounded>Toggle Theme</v-btn>
    </v-app-bar>

  </div>
</template>

<script>
  export default {
  props: {
    links: {
      type: Array,
      required: true
    }
  },
    data() {
      return {                
      }
    },
    methods: {
      toggleTheme () {
        this.$vuetify.theme.themes.dark.anchor = '#41B883'
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      }
    }
  }
</script>
