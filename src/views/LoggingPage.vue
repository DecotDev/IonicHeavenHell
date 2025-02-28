<template>
    <ion-page @click="nextPage">
      <ion-content class="logging-content">
        <!-- Red Wave Background -->
        <div class="red-wave"></div>
  
        <!-- App Logo -->
        <img src="@/assets/logo.png" alt="App Logo" class="logo" />
  
        <!-- Text Section -->
        <div class="text-container">
          <h1 class="main-text">Logging in in progress, <br> please wait.</h1>
          <p class="sub-text">Preparing your experience...<br>This will take up to a couple of seconds.</p>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonContent } from '@ionic/vue';
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const nextPage = () => {
    router.push('/terms/');
  };

  onMounted(() => {
    setTimeout(() => {
      router.push('/terms'); // Redirects to Terms page after 5 seconds
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
    background-color: rgb(255, 0, 0);

  }
  
  /* Red Wave Background - Covers 90% & is Inverted */
  .red-wave {
    position: absolute;
    top: 0;
    width: 100%;
    height: 124%;
    background: url("@/assets/red_wave3.svg") repeat-x center top;
    background-size: cover;
    transform: scaleY(-1); /* Inverts the wave */
    z-index: -1;
  }
  
  /* Logo */
  .logo {
    max-width: 94%;

    margin-top: 12%; /* Pushes the logo downward */
  }
  
  /* Text Container */
  .text-container {
    position: absolute;
    bottom: 35%;
    width: 100%;
  }
  
  /* Main Text - Big */
  .main-text {
    font-family: 'Inknut Antiqua';
    font-size: 36px;
    font-weight: bold;
    color: black;
    margin-bottom: 16%;
  }
  
  /* Sub Text - Smaller & Near Bottom */
  .sub-text {
    font-family: 'Inknut Antiqua';
    font-size: 22px;
    color: black;

  }
  </style>
  


<!--<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Logging page</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-button router-link="/terms">Help (RL)</ion-button>
        </ion-content>
    </ion-page>
</template>
  
<script setup lang="ts">
    import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
</script>
  
<style>
    ion-content{ text-align: center; }
    ion-button{ margin-top:50px }
</style>-->