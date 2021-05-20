<template>
  <v-container fluid app id="container">
    <v-layout row wrap>
      <v-flex xs12 class="text-center" mt-16 >
        <!-- <Home class="bg-parallax"/> -->
        <Home/>
        <Services />
        <Actu/>
        <Galerie/>
        <Produits/>
        <Temoignages/>
        <Contact/>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  //name: 'Home'
};
</script>
<style scoped>
  .bg-parallax {
    height: calc(100vh - 180px);
  }

  .menu-space {
    padding-top: 80px;
  }

  .container {
    scroll-behavior: smooth;
  }
</style>