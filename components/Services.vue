<template>

  <v-item-group id="Services">
    <h1>Ce que je vous propose</h1>

    <v-container>
      <v-row>
        <v-col
          v-for="n in 3"
          :key="n"
          cols="12"
          md="4"
        
        >
          <v-item v-slot="{ active, toggle }">
            <v-card
              :color="active ? 'primary' : ''"
              class="d-flex align-center"
              dark
              height="200"
              @click="toggle"
            >
              <v-scroll-y-transition>
                <div
                  v-if="active"
                  class="display-3 flex-grow-1 text-center"
                >
                  Active
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>

</template>
<script>
export default {

  name: "Services",
  data(){
    return {
    }
  },
};
</script>
