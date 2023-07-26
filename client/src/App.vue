<template>
  <v-app>
    <v-main :style="{
      '--v-layout-left': '0px',
      '--v-layout-right': '0px',
      '--v-layout-top': '0px',
      '--v-layout-bottom': '0px',
    }">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
