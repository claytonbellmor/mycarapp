<template>
  <div>
    <div v-for="(car, carIndex) in cars" :key="carIndex">
      <h3 class="mb-3">{{ car.year + " " + car.make + " " + car.model }} Parts</h3>
    </div>
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
          :headers="headers"
          :items="products"
          :search="search"
        ></v-data-table>
      </v-card>
  </div>
</template>

<script>
export default {
  props: ["cars"],
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
      ],
      products: [
        {
          name: "Clutch Plate and Cover",
          partnum: "MU722211 (03L141015P, 92703)",
          price: 117.79,
          vendor: "RockAuto",
          description: "For HGR/KPF transmission, includes: cover assembly, clutch disc, release bearing, Pilot bearing/bushing, alignment tool",
          link: "",
        },
        {
          name: "Moly",
          partnum: "B01BSMMJ2A",
          price: 7.51,
          vendor: "Liqui Moly",
          description: "Liqui Moly 2003 Mos2 100ml, Made in Germany, for bell housing and other high heat applications",
          link: "",
        },
        {
          name: "Axle Bearing Grease",
          partnum: "B000CQ4DK0",
          price: 7.79,
          vendor: "Valvoline",
          description: "Valvoline SynPower Synthetic 14.1oz",
          link: "",
        },
        {
          name: "Flange Bolt",
          partnum: "02J409359 (ES#272379)",
          price: 5.49,
          vendor: "ECS Tuning",
          description: "connects flange to drive shafts, replace every time",
          link: "https://www.ecstuning.com/b-genuine-volkswagen-audi-parts/bolt-priced-each/02j409359/",
        },
        {
          name: "Manual Transmission Fluid",
          partnum: "88900333",
          price: 11.08,
          vendor: "ACDelco",
          description: "ACDelco 10-4006 Synchromesh (1 quart price), for transmission with brass synchronizers",
          link: "",
        },
        {
          name: "Flywheel Bolts",
          partnum: "N90665001",
          price: 1.59,
          vendor: "Anywhere",
          description: "Measurements: M10x1x22.3, Required (9) bolts, Recommended to replace with Loctite every time",
          link: "",
        },
        {
          name: "Inner CV Gasket",
          partnum: "8D0407309",
          price: 10.50,
          vendor: "ECS Tuning",
          description: "Axle gasket, replace everytime",
          link: "",
        },
        {
          name: "Upper Joining Bolts (engine to transmission)",
          partnum: "N10552402",
          price: 5.00,
          vendor: "Anywhere",
          description: "12mm x 1.5 x 70mm Full-Thread w/ Shoulder Flange, replace every time",
          link: "",
        },
        {
          name: "Upper Joining Bolts (engine to transmission)",
          partnum: "Universal",
          price: 5.00,
          vendor: "Anywhere",
          description: "14mm x 1.5 x 65mm Full-Thread w/ Shoulder Flange, Replacement for stripped tap, retapped to next size up @ 14mm",
          link: "",
        },
        {
          name: "Starter Mounts (engine to transmission) (2)",
          partnum: "N91037901",
          price: 4.58,
          vendor: "Anywhere",
          description: "M12 x 170mm (M8x16)",
          link: "https://www.ecstuning.com/b-genuine-volkswagen-audi-parts/bolt-priced-each/n91037901/",
        },
        {
          name: "Lower Joining Bolts (engine to transmission) (2)",
          partnum: "N90597005 (need to check fitment when package arrives)",
          price: 5.26,
          vendor: "Anywhere",
          description: "M10x70x32",
          link: "",
        }
      ]
    }
  }
}
</script>

<style>

</style>