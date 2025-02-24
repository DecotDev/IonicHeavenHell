<template>
  <ion-page class="page">
    <ion-header>
      <ion-toolbar>
        
        <div class="toolbar-container">
          <!-- Left-aligned button -->
          <ion-buttons slot="start">
            <ion-button router-link="/tabs/tab3/profile">Profile</ion-button>
          </ion-buttons>

          <!-- Centered title -->
          <div class="title-container">
            <img src="@/assets/logo.png" alt="App Logo" class="logo" />

            <!--<ion-title>Home</ion-title>-->
          </div>

          <!-- Right-aligned button -->
          <ion-buttons slot="end">
            <ion-button router-link="/tabs/tab3/settings">Settings</ion-button>
          </ion-buttons>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ExploreContainer name="Tab 3 page" />
      <ion-card @click="goToNew" class="card">
        <ion-card-content>
          <img src="@/assets/new01.png" alt="New Image">
          <p class="content">Ver 0.42 - Coyote Jump is here!</p>
        </ion-card-content>
      </ion-card>
      <ion-card @click="goToNew2" class="card">
        <ion-card-content>
          <img src="@/assets/new02.png" alt="New Image">
          <p class="content">Ver 0.41 - Code refactor</p>
        </ion-card-content>
      </ion-card>
      <ion-card @click="goToNew3" class="card">
        <ion-card-content>
          <img src="@/assets/new03.png" alt="New Image">
          <p class="content">Ver 0.38 - Wall Slide!</p>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<style scoped>
/* Ensures the toolbar content is correctly aligned */
.toolbar-container {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

/* Centers the title properly */
.title-container {
  position: absolute;
  max-width: 16%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  padding: 20px 0px 12px 0px;
}
.logo {
  width: auto;
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
  const goToNew = () => {
    router.push('/tabs/tab3/new');
  };
  const goToNew2 = () => {
    router.push('/tabs/tab3/new2');
  };
  const goToNew3 = () => {
    router.push('/tabs/tab3/new3');
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