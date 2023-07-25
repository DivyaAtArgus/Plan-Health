<template>
    <v-app-bar app color="blue" dark flat class="px-12" >
      <v-btn >
        <v-icon color="red" left class="mr-2">fas fa-heart</v-icon> 
        Plan Health
      </v-btn>
      
  
      <v-spacer></v-spacer>
      <v-btn text @click="reserve" to="/" class="text-yellow">Home</v-btn>
      <div class="d-flex justify-space-around">
        <v-menu
      transition="slide-x-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="white"
          v-bind="props"
        >
          Departments
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(department, i) in departments"
          :key="i"
        >
          <v-list-item-title>{{ department.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
      </div>
      <v-btn >
        <v-icon color="black" left class="mr-2"><i class="fa fa-sign-in" aria-hidden="true"></i></v-icon> 
        Login
      </v-btn>
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