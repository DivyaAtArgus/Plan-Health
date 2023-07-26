<template>
    <div>
        <NavBarDetail />
        <v-container fluid>
        <div class="head">
          <v-row>
            <v-col cols="5">
              <div style="position: relative" class="mt-16">
                <h1 class="text-white" size="x-large">Mahatma Hospital</h1>
                <h1 class="text-white">Welcomes You! </h1>
                <span class="text-grey">Your well wisher</span><br/>
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
                <v-img src="i1.png" contain max-height="300"></v-img>
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
                <h3 class="mt-16" >Mahatma Hospital </h3>
                <div style="width: 120px">
                  <v-slider
                    v-model="slider2"
                    color="yellow"
                    label=""
                  ></v-slider>
                </div>
                <h4 class="mt-n4">Hospital Description</h4>
                <p class="text-grey">
                  description
                </p>
                <br />
                <p class="text-grey">
                  contact, website...
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

                <v-toolbar-title>Dental </v-toolbar-title>
                </v-toolbar>

                <v-list
                :items="procedureList"
                item-props
                lines="three"
                >
                <template v-slot:subtitle="{ subtitle }">
                    <div v-html="subtitle"></div>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn variant="outlined" color="black" right>
                        Price
                    </v-btn>
                </v-card-actions>
                </template>
                </v-list>
            </v-card>
        </v-container>
        <FooterView />
        </div>
</template>
<script>
import { defineComponent } from 'vue';
import NavBarDetail from "../components/NavBarDetail.vue";
import FooterView from "../components/FooterView.vue";

export default defineComponent({
    name: "HospitalDetailView",
    components: {
      NavBarDetail,
      FooterView
  },
  data: () => ({
    procedureList: [
        { type: 'subheader', title: new Date().toLocaleString() },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'P1',
          subtitle: 'text',
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'P1',
          subtitle: 'text',
        },
      ],
    }),
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
  </style>
