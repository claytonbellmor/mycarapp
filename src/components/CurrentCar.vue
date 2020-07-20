<template>
  <div>
    <span v-for="car in cars" :key="car.id">
    <h3 class="mb-3">{{ car.year }} {{ car.make }} {{ car.model }}</h3>

      <v-card>
        
      <v-list-item>
        <v-list-item-content v-if="car.photos">
          <v-list-item-title>
            <img :src="car.photos[0]" alt="" width="120">
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

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
        </span>
  </div>
</template>

<script>
export default {
  props: ['cars']
}
</script>

<style>

</style>