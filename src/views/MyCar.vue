<template>
  <v-container>
    <v-row>
      <v-col>
        <h3 class="mb-3">Current Car</h3>

        <v-card
        class="mx-auto"
        max-width="500"
        v-for="car in cars" :key="car.id">

          <!-- <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Current Car</v-list-item-title>
            </v-list-item-content>
          </v-list-item> -->

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
        <v-expansion-panels class="mx-auto" focusable style="max-width: 500px">
          <h3 class="pb-3">Maintenance History</h3>
          <v-expansion-panel>
            <v-expansion-panel-header>March 2018: Purchased Car</v-expansion-panel-header>
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>March 2018: Purchased Car</v-expansion-panel-header>
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>March 2018: Purchased Car</v-expansion-panel-header>
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>March 2018: Purchased Car</v-expansion-panel-header>
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
      ]
    }
  }
}
</script>

<style lang="scss">
  .theme--dark h3 {
    color: #2196f3;
  }  
</style>