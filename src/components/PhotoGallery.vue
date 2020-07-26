<template>
  <div>
      <h3 class="mb-3">Photos</h3>
      <v-card
      v-for="(cars, index) in garage"
      :key="index"
      >
      <span v-for="car in cars" :key="car.id">
      <v-container v-if="car.selectedCar!=null">
      <v-row 
      cols="12"
      >
      <v-col
      cols="4"
      v-for="(photo, index) in car.photos"
      :key="index"
      >
      <v-card
      flat 
      tile 
      class="d-flex child-flex grey"
      >            
      <v-img
      :src="photo.src"                
      aspect-ratio="1"
      @click="openGallery(index)"
      >
      <div class="fill-height bottom-gradient">
      </div>
      </v-img>
      <template v-slot:placeholder>
      <v-row
      class="fill-height ma-0"
      align="center"
      justify="center"
      >
      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
      </v-row>
      </template>
      </v-card>
      </v-col>
      </v-row>
      </v-container>
      </span>
      </v-card>

          
    <LightBox
      ref="lightbox"
      :media="media"
      :show-caption="true"
      :show-light-box="false"
    />      

  </div>
</template>

<script>
import LightBox from 'vue-image-lightbox'

export default {
  props: {
    garage: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      media: [
        
      ]
    }
  },
  computed: {

  },
  components: {
    LightBox
  },
  methods: {
    openGallery(index) {
      this.$refs.lightbox.showImage(index)
    }
  }
}
</script>