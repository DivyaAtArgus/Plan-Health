<template>
    <v-app-bar app color="blue" dark flat class="px-12" >
      <v-btn >
        <v-icon color="red" left class="mr-2">fas fa-heart</v-icon> 
        Plan Health
      </v-btn>
      
  
      <v-spacer></v-spacer>
      <v-btn text @click="scroll('home')" class="text-yellow">Home</v-btn>
      <v-btn text @click="scroll('about')"  >About</v-btn>
      <v-btn text @click="scroll('services')" > Services</v-btn>
      <v-btn text @click="scroll('contact')"  > Contact</v-btn>
      <v-btn >
        <v-icon color="black" left class="mr-2"><i class="fa fa-sign-in" aria-hidden="true"></i></v-icon> 
        Login
      </v-btn>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    methods: {
      scroll(refName) {
        const element = document.getElementById(refName);
        element.scrollIntoView({ behavior: "smooth" });
      },
    },
  };
  </script>
  
  <style>
  </style>