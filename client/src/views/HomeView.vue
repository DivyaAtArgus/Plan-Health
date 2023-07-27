<template>
    <v-app id="home">
      <NavBar />
      <v-container fluid>
        <div class="head">
          <v-row>
            <v-col cols="5">
              <div style="position: relative" class="mt-16">
                 <h1 class="text-yellow" style="font-family: 'Times New Roman', Times, serif;">We Welcome You To</h1>
                 <h1 class="text-white" style="font-family:'Times New Roman', Times, serif;">Plan Health</h1>
                 <span class="text-" style="font-family: 'Times New Roman', Times, serif;" >Your well wisher</span><br />
  
                <v-btn tile dark class="text-yellow mt-8" variant="outlined">
                  Contact us
                </v-btn>
              </div>
            </v-col>
            <v-col cols="2">
              <div
                style="
                  position: absolute;
                  z-index: 9999;
                  bottom: 0;
                  margin-left: auto;
                  margin-right: auto;
                  left: 0;
                  right: 0;
                  text-align: center;
                "
                class="mt-16"
              >
                <v-icon>fas fa-angle-double-down</v-icon>
              </div>
            </v-col>
            <v-col cols="5">
              <div style="position: relative; z-index: 9999" class="mt-16">
                <v-img src="i1.png" contain max-height="300"></v-img>
              </div>
            </v-col>
          </v-row>
        </div>
        
        <v-col cols="12" class="mt-16" id="about">
          <div>
            <v-row>
              <v-col cols="12" sm="6">
                <div class="egg">
                  <v-img src="../assets/logo.png" max-height="180" class="center-image"></v-img>
                </div>
              </v-col>
              <v-col cols="12" sm="6">
                <h3 class="text mt-n4 text-blue" aria-setsize="32" style="font-family: 'Times New Roman', Times, serif;">About Us</h3>
                <div style="width: 120px">
                  <v-slider
                    v-model="slider2"
                    color="yellow"
                    label=""
                  ></v-slider>
                </div>
                <h4 class="mt-n4 text-blue" style="font-family: 'Times New Roman', Times, serif;">We are Plan Health</h4>
                <p class="text-black" style="font-family: 'Times New Roman', Times, serif;">
                Our dedicated team is committed to helping you lead a healthier and happier life.
                </p>
                <br />
                <h4 class="text mt-n4 text-blue" style="font-family: 'Times New Roman', Times, serif;">Our Mission</h4>
                <p class="text-black" style="font-family: 'Times New Roman', Times, serif;">
                Our mission is to empower individuals to take control of their health by providing the knowledge, tools, and support needed to make informed decisions. We believe that a proactive approach to health is the key to preventing illness and achieving long-term well-being.
                </p>
                <v-btn @click="showMore = !showMore" tile dark color="yellow" class="mt-4" target="_blank" to="">
                  More ...
                </v-btn>
                <div v-if="showMore">
                  <h4 class="text-blue" style="font-family: 'Times New Roman', Times, serif;">What We Offer</h4>
                  <v-list class="text-black" style="font-family: 'Times New Roman', Times, serif;">
                    <v-list-item v-for="(offer,index) in offers" :key="offer.id">
                      {{ index + 1 }}.{{ offer }}
                    </v-list-item>
                  </v-list>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <div class="text-center mt-4">
          <h1 class="text-blue" style="font-family: 'Times New Roman', Times, serif;">May i Help You?</h1>
          <div style="width: 120px; margin: 0 auto">
            <v-slider
              v-model="slider2"
              color="yellow"
              label=""
            ></v-slider>
          </div>
        </div>

        <v-col cols="12" sm="12" id="services">
          <div class="d-flex justify-center mb-6">
            <div class="text-center">
                  <v-menu
                    open-on-click
                  >
                    <template v-slot:activator="{ props }">
                      <v-btn
                        color="#FBDF7E" 
                        outlined
                        v-bind="props"
                        class="mr-2"
                      >
                        All
                      </v-btn>
                    </template>
                    <v-list >
                      <v-list-item v-for="department in departmentList" :key="department" @click="selectDepartment(department)">
                        <v-list-item-title>{{ department }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                    <select v-model="selectedDepartment" >
                      <option :value=department></option>
                    </select>
                  </v-menu>
                </div> 
            <v-btn v-model="selectedDepartment" @click="selectDepartment('medicine')" class="mr-2" variant="tonal"> Medicine</v-btn>
            <v-btn v-model="selectedDepartment" @click="selectDepartment('dental')" class="mr-2" variant="tonal">Dental</v-btn>
            <v-btn v-model="selectedDepartment" @click="selectDepartment('gastrology')" class="mr-2" variant="tonal">Gastrology</v-btn>
            <v-btn v-model="selectedDepartment" @click="selectDepartment('cardiology')" variant="tonal"> Cardiology</v-btn>
          </div>
        </v-col>
        <v-col cols="12" sm="12" >
        <div class="d-flex justify-center mb-6">
          <v-container>
              <v-row align="center" justify="center">
                <div>
                  <v-toolbar color="white" outlined>
                  <v-btn variant="text" size="medium" color="black"><i class="mdi mdi-magnify"></i></v-btn>
                  <div class="text-center">
                  <v-menu
                    open-on-click
                  >
                    <template v-slot:activator="{  props }">
                      <v-text-field
                    label="Enter a location"
                    v-model="searchQuery" 
                    @input="handleInput"
                    @keyup.enter="selectOption"
                    :rules="rules"
                    hide-details="auto"
                    size="x-small"
                    class="mr-0"
                    color="lightgrey" 
                    v-bind="props"
                  >
                  </v-text-field>
                    </template>
                    <v-list v-if="isDropdownOpen && filteredOptions.length > 0">
                    <v-list >
                      <v-list-item v-for="(option, index) in filteredOptions" :key="index" @click="selectOption(option.cityN)">
                        <v-list-item-title>{{ option.cityN }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                    </v-list>
                  </v-menu>
                </div>
                  
                  <v-btn variant="text" size="medium" color="black" @click="noCity"><i class="mdi mdi-close"></i></v-btn>
                  </v-toolbar>
                </div>

                <div class="text-center">
                  <v-menu
                    open-on-hover
                  >
                    <template v-slot:activator="{ props }">
                      <v-btn
                        color="blue" 
                        outlined
                        v-bind="props"
                        class="mr-2"
                      >
                        Price range
                      </v-btn>
                    </template>

                    <v-list>
                      <v-list-item
                        v-for="(price, index) in prices"
                        :key="index"
                        @click="selectPrice(price)"
                      >
                        <v-list-item-title>{{ price.priceLevel }}</v-list-item-title>
                    </v-list-item>
                    </v-list>
                    <select v-model="selectedPrice">
                        <option :value=price ></option>
                    </select>
                    </v-menu>
                   </div>
                <div class="text-center">
                  <v-menu
                    open-on-hover
                  >
                    <template v-slot:activator="{ props }">
                      <v-btn
                        color="blue"
                        v-bind="props"
                        class="mr-2"
                      >
                        Rating
                      </v-btn>
                    </template>

                    <div class="text-center">
                      <v-rating
                        v-model="selectedRating"
                        bg-color="orange-lighten-1"
                        color="blue"
                        outlined
                        class="ma-2"
                        density="compact"
                      ></v-rating>
                    </div>
                  </v-menu>
                </div>
                <v-col cols="auto">
                  <v-btn block rounded="sm" elevation="8" color="blue" size="x-large" class="mr-2">Search</v-btn>
                </v-col>
              </v-row>
          </v-container>
        </div>
        </v-col>
      <v-container>
        <section id="hospitalsList">
          <v-card
            :loading="loading"
            class="mx-auto my-12"
            max-width="374"
          >
            <template v-slot:loader="{ isActive }">
              <v-progress-linear
                :active="isActive"
                color="deep-purple"
                height="4"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img
              cover
              height="250"
              src="https://www.shutterstock.com/shutterstock/photos/212251981/display_1500/stock-photo-modern-hospital-style-building-212251981.jpg"
            ></v-img>

            <v-card-item>
              <v-card-title> Mahatma Hospital</v-card-title>

              <v-card-subtitle>
                <span class="me-1">""</span>

                <v-icon
                  color="error"
                  icon="mdi-fire-circle"
                  size="small"
                ></v-icon>
              </v-card-subtitle>
            </v-card-item>

            <v-card-text>
              <v-row
                align="center"
                class="mx-0"
              >
                <v-rating
                  :model-value="4.5"
                  color="amber"
                  density="compact"
                  half-increments
                  readonly
                  size="small"
                ></v-rating>

                <div class="text-grey ms-4">
                  4.5 (413)
                </div>
              </v-row>

              <div class="my-4 text-subtitle-1">
                 Jaipur, Rajasthan
              </div>

              <div> Healthcare institution providing patient treatment with specialized health science and auxiliary healthcare staff and medical equipment.</div>
            </v-card-text>

            <v-divider class="mx-4 mb-1"></v-divider>

            <v-card-title>Dental</v-card-title>

            <div class="px-4">
              <v-chip-group v-model="selection">
                <v-chip>Fee: 250 /-</v-chip>
              </v-chip-group>
            </div>

            <v-card-actions>
              <v-btn
                color="deep-purple-lighten-2"
                variant="text"
                @click="reserve"
                to="/details"
              >
                View
              </v-btn>
            </v-card-actions>
          </v-card>
        </section>
      </v-container>
        <v-col cols="12" sm="12">
          <div class="d-flex justify-center mb-6">
            <v-btn color="#FBDF7E" class="mt-4">Load More</v-btn>
          </div>
        </v-col>
        <v-col cols="12" sm="12" class="px-16" id="contact">
          <v-row>
            <v-col cols="12" sm="4">
              <div class="child">
                <h1>Contact info.</h1>
                <v-btn
                  icon="fas fa-map-marker-alt"
                  color=""
                  class="mt-10"
                  variant="outlined"
                ></v-btn
                ><br />
                <span class="text-caption">GIDC,Sector 25 </span
                ><br />
                <v-btn
                  icon="fas fa-phone-alt"
                  color=""
                  class="mt-10"
                  variant="outlined"
                ></v-btn
                ><br />
                <span class="text-caption">00235 - 6521 </span> <br />
                <span class="text-caption">00235 - 6521 </span> <br />
                <v-btn
                  icon="fas fa-envelope"
                  color=""
                  class="mt-10"
                  variant="outlined"
                ></v-btn
                ><br />
                <span class="text-caption">planhealth@gmail.com </span> <br />
                <span class="text-caption">planhealth@gmail.com </span> <br />
              </div>
            </v-col>
            <div class="container" id="contactform">
            <v-col cols="12" sm="8">
              <h1 class="mt-8">Send your message</h1>
              <v-divider></v-divider>
              <span class="text-caption"
                >Feel free to send your query here!</span
              >
              <form @submit.prevent="sendEmail">
                <v-row class="mt-10">
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Name"
                    v-model="name"
                    name="name"
                    persistent-hint
                    variant="outlined"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Phone No"
                    v-model="phone"
                    name="phone"
                    persistent-hint
                    variant="outlined"
                  ></v-text-field>
                </v-col>
                </v-row>
                <v-row >
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Email"
                    v-model="email"
                    name="email"
                    persistent-hint
                    variant="outlined"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="City"
                    v-model="city"
                    name="city"
                    persistent-hint
                    variant="outlined"
                  ></v-text-field>
                </v-col>
                </v-row>
                <v-textarea
                  label="Message"
                  v-model="message"
                  name="message"
                  persistent-hint
                  variant="outlined"
                ></v-textarea>
                <v-btn type="submit" color="#FBDF7E" class="mt-2">Submit Now</v-btn>
              </form>
            </v-col>
            </div>
          </v-row>
        </v-col>
      </v-container>
      <FooterView />
    </v-app>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import NavBar from "../components/NavBar.vue";
  import FooterView from "../components/FooterView.vue";
  import emailjs from 'emailjs-com';
  //import AddGoogleMap from "../components/AddGoogleMap";

  export default defineComponent({
    name: "HomeView",
    components: {
      NavBar,
      FooterView
  },
   data: () => { return {
    //contact form var
      name: '',
      phone: '',
      email: '',
      city: '',
      message: '',
      searchQuery: '', //location query
      selectedDepartment: 'medicine',
      isDropdownOpen: false,
      showMore: false,
      selectedPrice: 'All',
      selectedRating: 0,
      departmentList: ["Emergency Department (ER)", "Internal Medicine", "Pediatrics", "Gastroenterology",
                        "Surgery", "Oncology", "Radiology", "Obstetrics and Gynecology (OB/GYN)", "Cardiology", 
                        "Orthopedics", "Neurology", "Dermatology", "ENT (Ear, Nose, and Throat)", "Intensive Care Unit (ICU)"
    ],
      prices: [
        {priceLevel: 'All'},
        { priceLevel: '0 - 500' },
        { priceLevel: 'upto 1000' },
        { priceLevel: 'upto 10000' },
        { priceLevel: 'Above 10000' },
      ],
      cities: [
        {cityN: 'Ahemdabad'},
        { cityN: 'Bhubaneswar' },
        { cityN: 'Dwarka' },
        { cityN: 'Gandhinagar' },
        { cityN: 'Godhra' },
        { cityN: 'Jaipur' },
      ],
      offers: [
      "Personalized Health Assessments: We begin by understanding your specific health goals, lifestyle, and medical history to create a personalized health plan.",

      "Nutrition and Diet Guidance: Our nutritionists will guide you towards a balanced and sustainable diet, ensuring you get the right nutrients for your body.",

      "Fitness Programs: Our fitness trainers design customized workout plans to help you achieve your fitness goals, whether it's weight loss, muscle gain, or overall fitness.",

      "Mental Health Support: Taking care of your mental well-being is equally important. Our counselors offer counseling and mindfulness techniques to manage stress and improve mental health.",

      "Health Workshops and Seminars: Join our interactive workshops and seminars to learn about various health topics and gain valuable insights from our experts.",

      "Online Resources: Access a wealth of health-related articles, tips, and resources on our website to stay informed and inspired on your wellness journey.",
      ]
    } },
    computed: {
    filteredOptions() {
      // Filter the options based on the search query
      return this.cities.filter(option => option.cityN.toLowerCase().includes(this.searchQuery.toLowerCase()));
    },
  },
  methods: {
    handleInput() {
      // This method handles the @input event
      // You can perform any action or call any method here based on the input value
      this.filterOptions(); // Call the method to filter the options
      this.openDropdown(); // Call the method to open the dropdown
    },
    filterOptions() {
    },
    openDropdown() {
      // Open the dropdown when the input field is clicked
      this.isDropdownOpen = true;
    },
    selectOption(option) {
      // This method handles the selection when the user clicks on an option.
      this.searchQuery = option;
    },
    selectDepartment(department) {
      // This method handles the selection when the user clicks on an option.
      this.selectedDepartment = department;
      console.log(this.selectedDepartment);
    },
    selectPrice(price) {
      // This method handles the selection when the user clicks on an option.
      this.selectedPrice = price;
      console.log(this.selectedPrice, this.selectedRating);

    },
    noCity() {
      this.searchQuery = '';
    },
    searchHospitals() {

    },
    sendEmail(e) {
      try {
        emailjs.sendForm('service_e4qhdug', 'template_957tsrd', e.target,
        'wdOzEHAPjg9eNSLdj', {
          name: this.name,
          email: this.email,
          phone: this.phone,
          city: this.city,
          message: this.message
        })

      } catch(err) {
        if (err instanceof ReferenceError) {
            alert( "JSON Error: " + err.message );
           } else {
            throw err; // rethrow
           }      
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.phone = ''
      this.city = ''
      this.message = ''
    },
  }
  });
  </script>
  <style scoped>
  .v-container {
    padding: 16px 0 16px 0;
  }
  
  .head {
    position: relative;
    text-align: center;
    padding: 12px;
    margin-bottom: 6px;
    height: 400px;
    width: 100%;
    color: white;
  }
  .head:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    background: black;
    transform: skew(0deg, 6deg);
  }
  .head:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
    background: black;
    transform: skew(0deg, -6deg);
  }
  .egg {
    display: block;
    margin-left: 100px;
    margin-top: 50px;
    width: 356px;
    height: 300px;
    background-color: #fbdf7e;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  }
  .first {
    width: 100%;
    height: 280px;
    text-align: center;
    padding: 2rem 2rem;
  }
  .child {
    display: inline-block;
    padding: 2rem 1rem;
    vertical-align: middle;
    text-align: center;
    margin-right: 8px;
  }
  .imgHover {
    padding: 0 200px;
  }
  .pre {
    width: 100%;
    height: 380px;
    text-align: center;
    padding: 0 200px;
    background-color: #f5f5f5;
  }
  .hire {
    width: 100%;
    height: 200px;
    padding: 0 200px;
    background-color: #e9e9e9;
    margin-top: -24px;
  }
  
  #hospitalsList {
    top: 0;
    right: 0;
    height: 80%;
    width: 100%;
    background: rgb(243, 234, 234);
  }
  #contactform {
    top: 0;
    right: 0;
    height: 80%;
    width: 60%;
  }
  </style>
