<template>
    <v-app-bar app color="blue" dark flat class="px-12" >
      <v-btn >
        <v-icon color="red" left class="mr-2">fas fa-heart</v-icon> 
        Plan Health
      </v-btn>
      
  
      <v-spacer></v-spacer>
      <v-btn text @click="reserve" to="/" class="text-yellow">Home</v-btn>
      
    </v-app-bar>
</template>
<script>
export default {
  data: () => ({
    departments: [
      { name: 'Pediatrics' },
      { name: 'Gastroenterology' },
      { name: 'Internal Medicine' },
      { name: 'Emergency Department (ER)' },
    ],
  }),
}
</script>
