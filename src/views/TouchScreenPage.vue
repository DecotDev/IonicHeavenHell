<template>
    <ion-page @click="goToLogin">
      <ion-content class="touchscreen-content">
        <!-- Wave Background -->
        <div class="wave-background"></div>
  
        <!-- Flame Image -->
        <img src="@/assets/flame.png" alt="Flame" class="flame" />
  
        <!-- Start Text -->
        <p class="start-text">Press anywhere to start</p>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonContent } from '@ionic/vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  // Navigate to LoginPage.vue on tap
  const goToLogin = () => {
    router.push('/login');
  };
  </script>
  
  <style scoped>
  /* Full-screen content */
  .touchscreen-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    position: relative;
    background-color: white;
  }
  
  /* Wave Background */
  .wave-background {
    position: absolute;
    top: -35%;
    bottom: 0;
    width: 100%;
    height: 136%;
    background: url("@/assets/red_wave.svg") no-repeat center bottom;
    background-size: cover;
    z-index: -1;
  }
  
  /* Flame Image */
  .flame {
    max-width: 140%;
    height: auto;
    margin-top: 30%;
    margin-bottom: 20px;
  }
  
  /* Start Text */
  .start-text {
    font-size: 3vh;
    font-weight: bold;
    color: black;
  }
  </style>
  