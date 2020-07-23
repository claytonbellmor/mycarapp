<template>
  <div>
    <div v-for="(car, index) in cars" :key="index">
      <div v-if="car.selectedCar!=null">
      <h3 class="mb-3">{{ car.info.year + " " + car.info.make + " " + car.info.model }} Parts</h3>    
        <v-card>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            height="400"
            :headers="headers"
            :items="car.parts"
            :search="search"
          ></v-data-table>
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
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Part(s)", align: "start", value: "name"
        },
        { text: "Part Number", value: "partnum", filterable: false },
        { text: "Price", value: "price", filterable: false },
        { text: "Vendor/MFR", value: "vendor", filterable: false },
        { text: "Description", value: "description" },
        { text: "Purchase Link", value: "link", filterable: false },
      ]
    }
  }
}
</script>

<style>

</style>