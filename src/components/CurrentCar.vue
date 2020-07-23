<template>
  <div>
    <div v-for="car in cars" :key="car.id">   
      <div v-if="car.selectedCar!=null">
        <h3 class="mb-3">{{ car.info.year }} {{ car.info.make }} {{ car.info.model }}</h3>
          <v-card>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <img :src="car.garageInfo" alt="" width="120">
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Year</v-list-item-title>
              <v-list-item-subtitle>{{ car.info.year }}</v-list-item-subtitle>
            </v-list-item-content>
            
            <v-list-item-content>
              <v-list-item-title>Make</v-list-item-title>
              <v-list-item-subtitle>{{ car.info.make }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-content>
              <v-list-item-title>Model</v-list-item-title>
              <v-list-item-subtitle>{{ car.info.model }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Exterior</v-list-item-title>
              <v-list-item-subtitle>{{ car.info.color }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-content>
              <v-list-item-title>Mileage</v-list-item-title>
              <v-list-item-subtitle>{{ car.info.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </div>   
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cars: {
      type: Array,
      required: true
    }
  }
}
</script>