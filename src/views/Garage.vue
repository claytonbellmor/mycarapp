<template>
  <v-container>
    <h1>Garage</h1>
    <v-row v-for="(cars, index) in garage" :key="index" cols="12">
      <v-col
        v-for="car in cars"
        :key="car.id"
        lg="3"
        offset-md="0"
        md="4"
        cols="6"
        offset-sm="3"
        @click="changeProp(car, cars)"
      >
        <v-hover v-slot:default="{ hover }" style="cursor: pointer;">
          <v-card :elevation="hover ? 16 : 2">
            <v-row>
              <v-col cols="12">
                <h3>
                  <span style="opacity: 0.7; font-weight: lighter;">{{
                    car.info.year
                  }}</span>
                  {{ car.info.model }}
                </h3>
              </v-col>
              <v-col>
                <template v-if="car.garageInfo">
                  <v-img
                    :src="car.garageInfo"
                    :alt="car.info.model"
                    height="150"
                    contain
                  ></v-img>
                </template>
              </v-col>
            </v-row>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import garage from "../data/garage.json";

export default {
  name: "garage",
  data() {
    return {
      garage: garage,
    };
  },
  methods: {
    changeProp(car, cars) {
      cars.map((e) => {
        e.selectedCar = null;
      });
      car.selectedCar = true;
      this.$router.push("/mycar");
    },
  },
};
</script>