<template>
    <div>
        <NavBarDetail />
        <v-container fluid>
        <div class="head">
          <v-row>
            <v-col cols="5">
              <div style="position: relative" class="mt-16">
                <h1 class="text-yellow" size="x-large" style="font-family: 'Times New Roman', Times, serif;" v-bind="hospitalDetails" >{{hospitalDetails.hospital_name}}</h1>
                <h1 class="text-white" style="font-family: 'Times New Roman', Times, serif;">Welcomes You! </h1>
                <span class="text-yellow" style="font-family: 'Times New Roman', Times, serif;">Your well wisher</span><br/>
                <v-icon  class="mt-16" size="xxx-large"> fas fa-hand-holding-medical</v-icon><br />
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
                <v-img src="" contain max-height="300"></v-img>
              </div>
            </v-col>
          </v-row>
        </div>

        <v-col cols="12" class="mt-16" id="">
          <div>
            <v-row>
              <v-col cols="12" sm="6">
                <div class="egg">
                  <v-img src="https://www.shutterstock.com/shutterstock/photos/212251981/display_1500/stock-photo-modern-hospital-style-building-212251981.jpg" max-height="200" class=""></v-img>
                </div>
              </v-col>
              <v-col cols="12" sm="6">
                <h2 class="text-blue" style="font-family: 'Times New Roman', Times, serif;"  v-bind="hospitalDetails">{{hospitalDetails.hospital_name }}</h2>
                <div style="width: 120px">
                  &nbsp; 
                </div>
                <h3 class="text-blue" style="font-family: 'Times New Roman', Times, serif;">Hospital Description</h3>
                <p class="text-black" style="font-family: 'Times New Roman', Times, serif;
                font-size: 18px;" v-bind="hospitalDetails">
                  {{hospitalDetails.description}}
                </p>
                <br />
                <p class="text-black" v-bind="hospitalDetails">
                  Contact: {{hospitalDetails.contact}}, Website: {{hospitalDetails.website}}
                </p>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <div class="text-center mt-4">
          <h2>Treatments</h2>
          <div style="width: 120px; margin: 0 auto">
            <v-slider
              v-model="slider2"
              color="yellow"
              label=""
            ></v-slider>
          </div>
        </div>
        <v-card
                class="mx-auto"
                max-width="60%"
            >
                <v-toolbar color="black">
                <v-btn variant="text" ><i class="fas fa-tooth"></i></v-btn>

                <v-toolbar-title color="white" v-bind="hospitalDetails">{{ hospitalDetails.department_name }}</v-toolbar-title>
                </v-toolbar>
                <div v-for="(cardData, index) in procedureList" :key="index" item-props
                    lines="three">
                  <div>{{procedureList[index].title}}</div>
                  <v-spacer></v-spacer>
                <v-card-actions>
                        <v-btn variant="outlined" color="black" right>
                          {{procedureList[index].price}}
                        </v-btn>
                    </v-card-actions>
                  <!-- <div>{{procedureList[index].price}}</div> -->
                    <!-- <v-list
                    :items="procedureList"
                    item-props
                    lines="three"
                    > -->
                    <!-- <template v-slot:title=""> -->
                        <!-- <div>{{procedureList[index].title}}</div>
                        <div>{{procedureList[index].price}}</div> -->
                    <!-- <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn variant="outlined" color="black" right>
                          {{procedureList.price}}
                        </v-btn>
                    </v-card-actions>
                    </template> -->
                    <!-- </v-list> -->
                </div>
            </v-card>
        </v-container>
        <FooterView />
        </div>
</template>
<script>
import { defineComponent } from 'vue';
import NavBarDetail from "../components/NavBarDetail.vue";
import FooterView from "../components/FooterView.vue";
import axios from 'axios';

export default defineComponent({
    name: "HospitalDetailView",
    components: {
      NavBarDetail,
      FooterView
  },
  data: () => ({
    proCard:null,
    hospitalDetails:{},
    apiURL:"/hospital/filter1",
    procedureData: {}, //empty obj
    procedureList: [
        // {
        //   type: 'subheader', title: new Date().toLocaleString(),
        //   prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        //   title: 'dfg',// need to display
        //   subtitle: 'text',
        // },
      ],
    }),
  computed: {
  queryParams() {
     return {
      hospname: 'Mahatma hospital',
      department: 'Gastroenterology',
      city: 'Jaipur',
      minPrice:0,
      maxPrice: 5000,
      rating: 1,
    };
   },
  },
  created() {
    // Call the API when the component is created
    this.showProcedures();
  },
  methods: {
  async showProcedures() {
  try {
    console.log("listing procedures...");
    console.log(this.apiURL, this.queryParams);
    const response = await axios.get(this.apiURL, { params: this.queryParams });
    this.procedureData = response?.data;
    console.log(this.procedureData);
    console.log(this.procedureData.name, this.procedureData[0] );
    this.hospitalDetails=this.procedureData[0]
    for (const card in this.procedureData) {
      this.proCard = {title:this.procedureData[card].name,
                      price:this.procedureData[card].price};//each row of data
      console.log(this.proCard);

      
      this.procedureList.push(this.proCard);
    }
    console.log(this.procedureList); 
    return response?.data;
  }
  catch (error) {
    console.error('Error fetching data:', error);
    alert('An error occurred while fetching data. Please try again later.');
    throw error; 
  }
  },
  },
})
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
    height: 360px;
    width: 100%;
    margin-top: 0px;
    color: rgb(236, 227, 227);
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 100px;
    margin-top: 50px;
    width: 356px;
    height: 300px;
    background-color: #f2d648;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  }
  .egg .center-image {
    max-height: 180px;
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
  </style>