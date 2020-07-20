<template>
  <div>
  <h3 class="pb-3">Maintenance History</h3>
    <v-expansion-panels 
      focusable 
    >
      <v-expansion-panel
        v-for="entry in entries"
        :key="entry.id"
      >
        <v-expansion-panel-header>
          {{ entry.date }}
          <v-chip-group>
            <v-chip 
              class="ml-2" 
              :class="typeClass(entry.type)"
            >
              {{ entry.type }}
            </v-chip>
          </v-chip-group>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          {{ entry.body }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
  export default {
    methods: {
      typeClass(e) {
        if(this.$vuetify.theme.dark) return 'dark-mode-chip'
        if(this.$vuetify.theme.themes.light && e === 'Maintenance') return 'success'
        if(this.$vuetify.theme.themes.light && e === 'Repair') return 'error'
        if(this.$vuetify.theme.themes.light && e === 'Misc') return 'primary'
      }
    },
    data() {
      return {
        entries: [
        {
          "id": 1,
          "date": "March 20 2018",
          "type": "Maintenance",
          "body": "Nihil tenetur numquam nihil ad dignissimos sapiente. Voluptatem officiis asperiores. Qui maxime iusto omnis dolorem quidem. Numquam quia minus accusamus et in rerum provident. Odio id nihil ducimus similique. Voluptatem ea dolorem ratione impedit."
        },
        {
          "id": 2,
          "date": "June 12 2016",
          "type": "Repair",
          "body": "Nihil tenetur numquam nihil ad dignissimos sapiente. Voluptatem officiis asperiores. Qui maxime iusto omnis dolorem quidem. Numquam quia minus accusamus et in rerum provident. Odio id nihil ducimus similique. Voluptatem ea dolorem ratione impedit."
        },
        {
          "id": 3,
          "date": "May 03 2015",
          "type": "Repair",
          "body": "Nihil tenetur numquam nihil ad dignissimos sapiente. Voluptatem officiis asperiores. Qui maxime iusto omnis dolorem quidem. Numquam quia minus accusamus et in rerum provident. Odio id nihil ducimus similique. Voluptatem ea dolorem ratione impedit."
        },
        {
          "id": 4,
          "date": "March 20 2009",
          "type": "Misc",
          "body": "Nihil tenetur numquam nihil ad dignissimos sapiente. Voluptatem officiis asperiores. Qui maxime iusto omnis dolorem quidem. Numquam quia minus accusamus et in rerum provident. Odio id nihil ducimus similique. Voluptatem ea dolorem ratione impedit."
        }
      ]
      }
    }
  }
</script>

<style>

</style>