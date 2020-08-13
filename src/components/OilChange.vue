<template>
  <div>
    <h3 class="pb-3">Oil Change Log</h3>
    <v-timeline v-for="cars in garage" :key="cars.id">
      <span v-for="car in cars" :key="car.id">
        <span v-for="entry in car.oilChangeData" :key="entry.date">
          <v-timeline-item v-if="car.selectedCar != null" right>
            <div slot="opposite">{{ entry.date }}</div>
            <div slot="opposite">
              <strong
                >@
                {{
                  entry.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }}</strong
              >
            </div>
            <v-card
              class="elevation-2"
              width="max-content"
              style="text-align: left;"
            >
              <v-card-text>
                <v-row>
                  <v-col>
                    <strong>Amount:</strong>
                    {{ entry.quantity + " " + entry.units }}
                  </v-col>
                </v-row>

                <v-row v-if="entry.additives">
                  <v-col>
                    <strong>Additives Used:</strong> {{ entry.additives }}
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <strong>Next Change:</strong>
                    {{ nextMileage(entry.mileage) }} miles
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </span>
      </span>
    </v-timeline>
  </div>
</template>

<script>
export default {
  name: "OilChange",
  props: {
    garage: {
      type: Object,
      required: true,
    },
  },
  methods: {
    nextMileage(e) {
      return (e + 35000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style>
#app .v-timeline-item__opposite {
  color: #2196f3;
}
</style>