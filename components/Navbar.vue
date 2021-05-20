<template>
    <div>
    <!-- navigation mobile -->
    <v-navigation-drawer 
      v-model="sidebar" 
      app
    >

      <v-list>
        <v-list-item
          class="primary--text"
          v-for="item in menuItems"
          :key="item.title"
          @click="$vuetify.goTo(item.path, linkOptions)"
        >
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
    <!-- <v-app-bar fixed shrink-on-scroll lg> -->
    <v-app-bar app>

      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
      </span>

      <v-toolbar-title >
        <router-link to="/" style="cursor: pointer;">
        <v-img
          lazy-src="img/logojab.jpg"
          max-height="55"
          max-width="55"
          src="img/logojab.jpg"
        ></v-img>
        
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
          @click="$vuetify.goTo(item.path, linkOptions)"
          
        >
      <!-- :to="item.path" -->
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

    </v-app-bar>
    
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
        { title: 'Accueil', path: '#Home', icon: 'mdi-home' },
        { title: 'Services', path: '#Services', icon: 'mdi-face' },
        { title: 'Actu !', path: '#Actu', icon: 'mdi-home' },
        { title: 'Galerie', path: '#Galerie', icon: 'mdi-home' },
        { title: 'Produits', path: '#Produits', icon: 'mdi-home' },
        { title: 'Témoignages', path: '#Temoignages', icon: 'mdi-home' },
        { title: 'Contact', path: '#Contact', icon: 'mdi-home' }
      ],
      linkOptions: { 
        duration: 1000, 
        offset: 0 
      }
    }
  },
};

</script>
