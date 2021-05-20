<template>
  <!-- <v-parallax
    class="full-height"
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    fluid
  > -->

    <v-container 
      fluid 
      id="Home" 
      class="full-height"
    >
      <v-layout row wrap>
        
        <v-flex xs12 class="text-center" mt-5>
          <h1>Jonathan Dugarry - Coach sportif</h1>
        </v-flex>
        <v-flex md7 class="text-justify" mt-3 pa-5>
          <v-card
            class="mx-auto"
          >
            <v-card-title>
              <v-icon
                large
                left
              >
                mdi-mixed-martial-arts
              </v-icon>
              <span class="title">Qui je suis</span>
            </v-card-title>

            <v-card-text class="text--primary">
              <p class="text-justify">
                Très jeune, <b>le sport a rythmé mon quotidien</b>. 
                J'ai eu la chance de pratiquer de nombreux sports : foot, rugby, volley ball, boxe et aussi l'athlétisme.
              </p>
              <p class="text-justify">
                C'est donc tout naturellement que je me suis tournée vers une carrière d'<b>animateur sportif</b> dans les sports collectifs et d'oppositions. Diplômé pour la pratique de ses deux disciplines je peux accompagner petits et grands. 
              </p>
              <p class="text-justify">
                J'ai complété ma formation en devenant <b>instructeur de Pilates</b> et <b>préparateur physique</b>.
              </p>
              <p class="text-justify">
                Ma passion pour la boxe ne m'a jamais quitté, j'ai décroché le titre de <b>champion de France 2017</b> en amateur 
                et mon <b>diplôme d'instructeur en boxe américaine</b> me permet de transmettre ma passion.
              </p>
              <p class="text-justify">
                Me contacter
              </p>
              <p class="text-justify">
                L'une des disciplines que j'enseigne vous intéresse ? N'hésitez pas à me contacter par téléphone ou par email (jonathandugarry@gmail.com).
              </p>          
            </v-card-text>

          </v-card>

        </v-flex>
        <v-flex align-self-center md5 mt-3 pa-5>
          <v-img
            lazy-src="img/home.jpg"
            max-height="100vh"
            max-width="100vw"
            class="rounded"
            src="img/home.jpg"
          ></v-img>
        </v-flex>
      </v-layout>
    </v-container>
  <!-- </v-parallax> -->


</template>
<script>
</script>
<style scoped>
  .full-height {
    min-height: 90vh;
  }
</style>
