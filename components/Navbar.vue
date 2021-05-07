<template>
    <div>
    <!-- navigation mobile -->
    <v-navigation-drawer v-model="sidebar" app>

      <v-list>
        
        <v-list-item
          class="primary--text"
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          
          <v-list-item-action>
            <v-icon            >
              {{ item.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
      
    </v-navigation-drawer>
      <!-- Fin navigation mobile -->


    <!-- navigation classique -->
    <v-toolbar>

      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar">
        </v-app-bar-nav-icon>
      </span>

      <v-toolbar-title >
        <router-link to="/" tag="span" style="cursor: pointer;">
        JAB
        
          <!-- <img style="margin-top: 130px;" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f4bd7a6-f763-4518-9b81-bdfd40ce3fc9/d26yer1-421bb5b8-9fc2-4d5a-b2d1-1e1f81b26b82.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVmNGJkN2E2LWY3NjMtNDUxOC05YjgxLWJkZmQ0MGNlM2ZjOVwvZDI2eWVyMS00MjFiYjViOC05ZmMyLTRkNWEtYjJkMS0xZTFmODFiMjZiODIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.p5vfqGmq9kIylfG3glHGa20CAPUtoWlAxKEGpIvGOi8"> -->
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only" >
        <v-btn
          class="primary--text"
          elevation="0"
          raised
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>

      </v-toolbar-items>
      <v-toolbar-items class="hidden-xs-only pl-3">
          <v-switch
            class="mt-5"
            v-model="$vuetify.theme.dark"
            prepend-icon="mdi-white-balance-sunny"
            append-icon="mdi-moon-waxing-crescent"
            color="#fff"
          ></v-switch>
        </v-toolbar-items>
      <!-- switch theme -->

    </v-toolbar>
    
    <!-- Fin navigation classique -->

  </div>
</template>
<script>
export default {

  name: "App",
  data(){
    return {
      appTitle: 'Awesome App',
      sidebar: false,
      menuItems: [
          { title: 'Accueil', path: '/', icon: 'mdi-home' },
          { title: 'Services', path: '/services', icon: 'mdi-face' },
          { title: 'Actu !', path: '/actu', icon: 'mdi-home' },
          { title: 'Galerie', path: '/galerie', icon: 'mdi-home' },
          { title: 'Produits', path: '/produits', icon: 'mdi-home' },
          { title: 'Témoignages', path: '/temoignages', icon: 'mdi-home' },
          { title: 'Contact', path: '/contact', icon: 'mdi-home' }
     ]
    }
  },
};

</script>
