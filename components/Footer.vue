<template>
  <v-card>
    <v-footer
      fixed
      padless
      
    >
    <!-- TODO : linear gradient -->
      <v-card
        flat
        tile
        width="100%"
        :class="$vuetify.theme.dark ? 'dark blue--text flex text-center' : 'blue lighten-3 flex text-center'"
        
      >
        <v-card-text class="pa-1">
          <v-btn
            v-for="item in footerItems"
            :key="item.title"
            class="mx-2"
            :href="item.path"
            target="_blank"
            icon
          >
            <v-icon size="20px">
              {{ item.icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <div class="subheading">Suivez-nous sur les résaux !</div>

        <v-divider></v-divider>

        <v-card-text 
          class="white--text pa-2"
        >
          <v-icon size="20px">mdi-boxing-glove</v-icon>
          {{ new Date().getFullYear() }} — <strong>JAB & Training</strong>
          <v-icon size="20px">mdi-boxing-glove</v-icon>
        </v-card-text>
      </v-card>
    </v-footer>

  </v-card>
</template>

<script>
  export default {
    data: () => ({
      footerItems: [
          { title: 'Jab Facebook', path: 'https://www.facebook.com/coach.sportif.thonon/', icon: 'mdi-facebook' },
          { title: 'Jab Instagram', path: 'https://www.instagram.com', icon: 'mdi-instagram' },
          { title: 'Jab Youtube', path: 'https://www.youtube.com/channel/UClowyrqpLYqYg6BTEh2EK3Q', icon: 'mdi-youtube' }
     ]
    })
  }
</script>