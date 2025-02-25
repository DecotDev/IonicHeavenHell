<template>
  <ion-page class="page">
    <ion-header class="real_header" >
      <ion-toolbar class="header">
        
        <div class="toolbar-container">
            
          <ion-buttons slot="start">
            <!--<ion-button router-link="/tabs/tab3/profile">Profile
              
            </ion-button>-->
            <img class="profile" @click="goToProfile" src="@/assets/user_icon.png" alt="User">
          
          </ion-buttons>

          <!-- Centered title -->
          <div class="title-container">
            <img src="@/assets/logo_round.png" alt="App Logo" class="logo" />

            <!--<ion-title>Home</ion-title>-->
          </div>

          <ion-buttons slot="end">
            <img class="settings" @click="goToSettings" src="@/assets/settings_icon.png" alt="User">
             <!--<ion-button router-link="/tabs/tab3/settings">Settings</ion-button>           -->
          </ion-buttons>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ExploreContainer name="Tab 5 page" />
      <img class="title" src="@/assets/title_map.png" alt="Map">

      
    </ion-content>
  </ion-page>
</template>

<style scoped>
.title {
  margin: 10px 0px -4px 13px;
}
.settings {
  margin-right: 8px;
}
.profile {
  margin-left: 12px;
}
.header {
  height: 100%;
}
.real_header {
  height: 90px;
}
/* Ensures the toolbar content is correctly aligned */
.toolbar-container {
  display: flex;
  height: 94px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

/* Centers the title properly */
.title-container {
  position: absolute;
  max-width: 24%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  padding: 8px 0px 0px 0px;
}
.logo {
  width: auto;
  align-items: center;
  height: 100%;
}
.content {
  color: rgb(255, 255, 255);
  background-color: rgb(19, 19, 19);
  font-size: 1.6rem;
  border-radius: 10px;
  padding: 8px 0px 4px 16px;
  margin-left: 0px;
  margin-right: -0px;
}
.card {
  color: red;
  background-color: rgb(37, 37, 37);
}
.page {
  color: rgb(255, 0, 0);
  background-color: rgb(255, 0, 0);
}
</style>

<script setup lang="ts">
import { image } from 'ionicons/icons';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonCard, IonCardContent, IonCardTitle} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
  
  // Navigate to LoginPage.vue on tap
  const goToProfile = () => {
    router.push('/tabs/tab5/profile');
  };
  const goToSettings = () => {
    router.push('/tabs/tab5/settings');
  };
</script>

<!--
      <ion-card @click="goToNew">


import { useRouter } from 'vue-router';

const router = useRouter();
  
  // Navigate to LoginPage.vue on tap
  const goToNew = () => {
    router.push('/login');
  };

-->