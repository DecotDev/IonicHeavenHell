<template>
  <ion-page>
    <ion-content class="logging-content">
      <!-- Red Wave Background -->
      <div class="red-wave"></div>

      <!-- App Logo -->
      <img src="@/assets/logo.png" alt="App Logo" class="logo" />

      <!-- Text Section -->
      <div class="text-container">
        <h1 class="main-text">Logging in progress, <br> please wait.</h1>
        <p class="sub-text">Preparing your experience...<br>This will take a few seconds.</p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    router.push('/terms'); // Redirects to Terms page after 3 seconds
  }, 3000);
});
</script>

<style scoped>
/* Full-screen content */
.logging-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  position: relative;
  background-color: white;
}

/* Red Wave Background - Now Repeats */
.red-wave {
  position: absolute;
  top: 0;
  width: 100%;
  height: 90%;
  background: url("@/assets/red_wave3.svg") repeat-x center top;
  background-size: contain; /* Ensures the waves fit */
  transform: scaleY(-1); /* Inverts the wave */
  z-index: -1;
}

/* Logo */
.logo {
  max-width: 70%;
  margin-top: 15%;
}

/* Text Container */
.text-container {
  position: absolute;
  bottom: 12%;
  width: 80%;
}

/* Main Text - Big */
.main-text {
  font-size: 3.4vh;
  font-weight: bold;
  color: black;
  margin-bottom: 10%;
}

/* Sub Text - Smaller & Near Bottom */
.sub-text {
  font-size: 2vh;
  color: black;
}
</style>
