<template>
  <div>
    <h3 class="pb-3">Oil Change Log</h3>
    <v-timeline>
        <v-timeline-item
          v-for="(data, dataIndex) in oilChangeData"
          :key="dataIndex"
          right
        >
          <div slot="opposite">{{ data.date }}</div>
          <div slot="opposite"><strong>@ {{ data.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</strong></div>
          <v-card class="elevation-2" width="max-content" style="text-align: left;">
            <v-card-text>

              <v-row>
                <v-col>
                  <strong>Amount:</strong> {{ data.quantity + ' ' + data.units }}
                </v-col>
              </v-row>

              <v-row v-if="data.additives">
                <v-col>
                  <strong>Additives Used:</strong> {{ data.additives }}
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <strong>Next Change:</strong> {{ nextMileage(data.mileage) }} miles
                </v-col>
              </v-row>

            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
  </div>    
</template>

<script>
export default {
  name: 'OilChange',
  data() {
    return {
      oilChangeData: [
        {
          "date": "March 2020",
          "summary": "Oil Change",
          "quantity": 5,
          "units": "quarts",
          "additives": "Lucas Oil",
          "mileage": 125000
        },
        {
          "date": "September 2019",
          "summary": "Oil Change",
          "quantity": 5,
          "units": "quarts",
          "additives": "Lucas Oil",
          "mileage": 112731
        },
        {
          "date": "June 2019",
          "summary": "Oil Change",
          "quantity": 5,
          "units": "quarts",
          "additives": "Lucas Oil",
          "mileage": 102750
        },
        {
          "date": "August 2018",
          "summary": "Oil Change",
          "quantity": 5,
          "units": "quarts",
          "additives": "Lucas Oil",
          "mileage": 88000
        },
        {
          "date": "January 2018",
          "summary": "Oil Change",
          "quantity": 5,
          "units": "quarts",
          "additives": "Lucas Oil",
          "mileage": 54012
        }
      ]
    }
  },
  methods: {
    nextMileage(e) {
      return (e + 35000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
  }
}
</script>

<style>
  #app .v-timeline-item__opposite {
    color: #2196f3;
  }
</style>