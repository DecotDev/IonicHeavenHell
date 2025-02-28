<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <div class="settings-container">
          <img src="@/assets/logo_round.png" class="logo" />
  
          <h1 class="set">Settings</h1>
  
          <div class="volume-control">
            <label class="vol">Volume</label>
            <ion-range min="0" max="100" step="1" v-model="volume"></ion-range>
          </div>
          <div class="togles">
          <ion-toggle class="notis" v-model="notifications">Receive Notifications</ion-toggle>
          <ion-toggle class="notis" v-model="autoUpdate">Auto Update</ion-toggle>
          <ion-toggle class="notis" v-model="diagnosticData">Send Diagnostic Data</ion-toggle>
          </div>
          <div>
          <ion-button class="logoutclass" expand="full" @click="logout">LOG OUT</ion-button>
          </div>
        </div>
        <div class="down_part"></div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { IonPage, IonContent, IonButton, IonToggle, IonRange } from '@ionic/vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const volume = ref(50);
  const notifications = ref(false);
  const autoUpdate = ref(true);
  const diagnosticData = ref(false);
  

  const logout = () => {
    router.replace('/login');
  };
  </script>
  
  <style scoped>
  .set {
    font-family: 'Inknut Antiqua';
    font-weight: bolder;
    font-size: 36px;
    color: red;
  }
  .vol {
    font-family: 'Inknut Antiqua';
    font-size: 22px;

  }
  .logoutclass {
    font-family: 'Inknut Antiqua';
    font-size: 36px;
    font-weight: bolder;
    margin-top: 60px;
    color: rgb(0, 0, 0) !important;
    font-size: 20px !important;
    
  }
  .togles {
  align-content: end;
  }
  .notis{
    font-family: 'Inknut Antiqua';
    color: black;
    font-size: 22px;
    font-weight: bold;
  }
  .settings-container {
    text-align: center;
    padding: 40px;
    background: url('@/assets/red_wave.svg') no-repeat bottom;
    background-size: cover;
  }
  .down_part {
    background: #b20003;
    margin-top: -39%;
    width: 100%;
    height: 59%;
    z-index: -10;
  }
  
  .logo {
    width: 100px;
  }
  
  .volume-control {
    margin: 20px 0;
  }
  
  ion-button {
    margin-top: 10px;
  }
  </style>
  