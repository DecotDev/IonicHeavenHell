<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <div class="settings-container">
          <img src="@/assets/logo_round.png" class="logo" />
  
          <h1>Settings</h1>
  
          <div class="volume-control">
            <label>Volume</label>
            <ion-range min="0" max="100" step="1" v-model="volume"></ion-range>
          </div>
  
          <ion-toggle v-model="notifications">Receive Notifications</ion-toggle>
          <ion-toggle v-model="autoUpdate">Auto Update</ion-toggle>
          <ion-toggle v-model="diagnosticData">Send Diagnostic Data</ion-toggle>
  
          <ion-button expand="full" @click="goToHelp">HELP</ion-button>
          <ion-button expand="full" color="danger" @click="logout">LOG OUT</ion-button>
        </div>
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
  
  const goToHelp = () => {
    router.push('/tabs/tab3/help');
  };
  
  const logout = () => {
    router.push('/login');
  };
  </script>
  
  <style scoped>
  .settings-container {
    text-align: center;
    padding: 20px;
    background: url('@/assets/red_wave.svg') no-repeat bottom;
    background-size: cover;
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
  