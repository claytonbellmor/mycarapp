<template>
  <div>
    <h3 
      class="pb-3"
    >
      Maintenance History
    </h3>
    
    <span v-for="(cars, index) in garage" :key="index">
      <span v-for="car in cars" :key="car.id">
        <span v-if="car.selectedCar!=null">

          <v-expansion-panels focusable v-if="car.selectedCar!=null">

            <v-expansion-panel v-for="entry in car.entries" :key="entry.id">
              
              <v-expansion-panel-header>
                
                {{ entry.date }}
                
                <v-chip-group>
                  
                  <v-chip class="ml-2" :class="typeClass(entry.type)">
                  
                    {{ entry.type }}
                  
                  </v-chip>
                
                </v-chip-group>
              
              </v-expansion-panel-header>
              
              <v-expansion-panel-content class="mt-4">
              
                {{ entry.body }}

              </v-expansion-panel-content>

            </v-expansion-panel>

          </v-expansion-panels>

        </span>
      </span>
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      garage: {
        type: Object,
        required: true
      }
    },
    methods: {
      typeClass(e) {
        if(this.$vuetify.theme.dark) return 'dark-mode-chip'
        if(this.$vuetify.theme.themes.light && e === 'Maintenance') return 'success'
        if(this.$vuetify.theme.themes.light && e === 'Repair') return 'error'
        if(this.$vuetify.theme.themes.light && e === 'Misc') return 'primary'
      }
    }
  }
</script>