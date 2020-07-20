<template>
  <div>
    <h3 class="mb-3">Photos</h3>
    <v-card>
      <v-container fluid>
        <v-row>
          <v-col 
            class="d-flex child-flex"
            cols="4"
            v-for="(image, imageSource, index) in cars"
            :key="index"
          >
            <v-card 
              flat 
              tile 
              class="d-flex grey"            
            >
              <v-img
                :src="image.src"
                aspect-ratio="1"
                @click="openGallery(index)"
              >
                <div class="fill-height bottom-gradient"></div>
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
  components: {
    LightBox
  },
  data() {
    return {
      media: [
        {
          thumb: '/car/2009-volkswagen-jetta-s-sedan-angular-rear.png',
          src: '/car/2009-volkswagen-jetta-s-sedan-angular-rear.png',
          caption: '<h4>Rear</h4>'
        },
        {
          thumb: '/car/2009-volkswagen-jetta-s-sedan-angular-front.webp',
          src: '/car/2009-volkswagen-jetta-s-sedan-angular-front.webp',
          caption: '<h4>Front</h4>'
        },
        {
          thumb: '/car/2009-volkswagen-jetta-s-sedan-side-view.png',
          src: '/car/2009-volkswagen-jetta-s-sedan-side-view.png',
          caption: '<h4>Side View</h4>'
        },
        {
          thumb: '/car/2009-volkswagen-jetta-se-sedan-clutch-plate-cover.jpeg',
          src: '/car/2009-volkswagen-jetta-se-sedan-clutch-plate-cover.jpeg',
          caption: '<h4>Clutch Plate Cover</h4>'
        },
        {
          thumb: '/car/2009-volkswagen-jetta-se-sedan-kpf-transmission.jpeg',
          src: '/car/2009-volkswagen-jetta-se-sedan-kpf-transmission.jpeg',
          caption: '<h4>Clutch Fork with Bearing in KPF Transmission</h4>'
        },
        {
          thumb: '/car/2009-volkswagen-jetta-se-sedan-kpf-transmission-bolt-labels.jpeg',
          src: '/car/2009-volkswagen-jetta-se-sedan-kpf-transmission-bolt-labels.jpeg',
          caption: '<h4>Bolt Labels</h4>'
        },
        {
          thumb: '/car/2009-volkswagen-jetta-se-sedan-kpf-transmission-clutch-cover.jpeg',
          src: '/car/2009-volkswagen-jetta-se-sedan-kpf-transmission-clutch-cover.jpeg',
          caption: '<h4>Clutch</h4>'
        },
        {
          thumb: '/car/2009-volkswagen-jetta-se-sedan-kpf-transmission-clutch-scratch.jpeg',
          src: '/car/2009-volkswagen-jetta-se-sedan-kpf-transmission-clutch-scratch.jpeg',
          caption: '<h4>Replacing KPF with original HGR transmission; not same size</h4>'
        },
        {
          thumb: '/car/2009-volkswagen-jetta-se-sedan-kpf-transmission-damage-bellhousing.jpeg',
          src: '/car/2009-volkswagen-jetta-se-sedan-kpf-transmission-damage-bellhousing.jpeg',
          caption: '<h4>Wear after 75,000 miles with replacement KPF transmission</h4>'
        }
        // {
        //   thumb: '/car/2009-volkswagen-jetta-s-sedan-angular-rear.png',
        //   src: '/car/2009-volkswagen-jetta-tdi-sedan-audio-system.png',
        //   caption: '<h4>Audio System</h4>'
        // },
        // {
        //   thumb: '/car/2009-volkswagen-jetta-s-sedan-engine.png',
        //   src: '/car/2009-volkswagen-jetta-s-sedan-engine.png',
        //   caption: '<h4>Engine</h4>'
        // }
      ]
    }
  },
  methods: {
    openGallery(index) {
      this.$refs.lightbox.showImage(index)
    }
  }
}
</script>

<style>

</style>