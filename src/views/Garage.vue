<template>
  <v-container>
    <h1>Garage</h1>
    <v-row>
      <v-col cols="4" v-for="car in cars" :key="car.id">
        <v-card class="px-5">
          {{ car.model }}
          <div v-if="car.images">
            <img :src="car.images[0]" alt="" width="120">
          </div>
        </v-card>
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
        },
        {
          "model": "Taurus",
          "id": 2
        },
        {
          "model": "Prius",
          "id": 3
        },
        {
          "model": "Jeep",
          "id": 4
        }
      ]
    }
  }
}
</script>

<style>

</style>