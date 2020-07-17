<template>
  <v-container>
    <v-row>
      <v-col>
        <h3 class="mb-3">Current Car</h3>

        <v-card
        class="mx-auto"
        max-width="500"
        v-for="car in cars" :key="car.id">

          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Year</v-list-item-title>
              <v-list-item-subtitle>{{ car.year }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title>Make</v-list-item-title>
              <v-list-item-subtitle>{{ car.make }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title>Model</v-list-item-title>
              <v-list-item-subtitle>{{ car.model }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Exterior</v-list-item-title>
              <v-list-item-subtitle>{{ car.color }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title>Mileage</v-list-item-title>
              <v-list-item-subtitle>{{ car.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>

        <h3 class="pb-3">Maintenance History</h3>

        <v-expansion-panels 
          class="mx-auto" 
          focusable 
          style="max-width: 500px"
        >

          <v-expansion-panel
            v-for="(entry, entryIndex) in entries"
            :key="entryIndex"
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {   
      cars: [
        {
          "make": "Volkswagen",
          "model": "Jetta",
          "year": 2009,
          "color": "black",
          "mileage": 125000,
          "id": 1,
          "images": [
            "car/2009-volkswagen-jetta-s-sedan-angular-front.webp",
            "car/2009-volkswagen-jetta-s-sedan-angular-rear.png",
            "car/2009-volkswagen-jetta-s-sedan-engine.png",
            "car/2009-volkswagen-jetta-s-sedan-side-view.png",
            "car/2009-volkswagen-jetta-tdi-sedan-audio-system.png"    
          ]
        }
      ],
      entries: [
        {
          "date": "March 20 2018",
          "type": "Maintenance",
          "body": "Nihil tenetur numquam nihil ad dignissimos sapiente. Voluptatem officiis asperiores. Qui maxime iusto omnis dolorem quidem. Numquam quia minus accusamus et in rerum provident. Odio id nihil ducimus similique. Voluptatem ea dolorem ratione impedit."
        },
        {
          "date": "June 12 2016",
          "type": "Repair",
          "body": "Nihil tenetur numquam nihil ad dignissimos sapiente. Voluptatem officiis asperiores. Qui maxime iusto omnis dolorem quidem. Numquam quia minus accusamus et in rerum provident. Odio id nihil ducimus similique. Voluptatem ea dolorem ratione impedit."
        },
        {
          "date": "May 03 2015",
          "type": "Repair",
          "body": "Nihil tenetur numquam nihil ad dignissimos sapiente. Voluptatem officiis asperiores. Qui maxime iusto omnis dolorem quidem. Numquam quia minus accusamus et in rerum provident. Odio id nihil ducimus similique. Voluptatem ea dolorem ratione impedit."
        },
        {
          "date": "March 20 2009",
          "type": "Misc",
          "body": "Nihil tenetur numquam nihil ad dignissimos sapiente. Voluptatem officiis asperiores. Qui maxime iusto omnis dolorem quidem. Numquam quia minus accusamus et in rerum provident. Odio id nihil ducimus similique. Voluptatem ea dolorem ratione impedit."
        }
      ]
    }
  },
  methods: {
    typeClass(e) {
      if(this.$vuetify.theme.dark) return 'thisColor'
      if(this.$vuetify.theme.themes.light && e === 'Maintenance') return 'success'
      if(this.$vuetify.theme.themes.light && e === 'Repair') return 'error'
      if(this.$vuetify.theme.themes.light && e === 'Misc') return 'primary'
    }
  }
}
</script>

<style lang="scss">

  .theme--dark h3 {
    color: #2196f3;
  }
  .thisColor {
    background-color: #2196f3 !important;
  }

</style>