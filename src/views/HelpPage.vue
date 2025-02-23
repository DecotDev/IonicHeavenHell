<template>
    <ion-page>
      <ion-content class="terms-content">
        <!-- Top Section: Welcome Title & Mini Logo -->
        <div class="top-bar">
          <h2 class="welcome-title">Help page</h2>
          <img src="@/assets/logo_mini.png" alt="Mini Logo" class="mini-logo" />
        </div>
  
        <!-- Red Wave Background -->
        <div class="red-wave">
        </div>
        <h1 class="title-user">User game ID</h1>

        <!-- Scrollable Terms Text -->
        <div class="user-game-id">
            <p>To obtain the user game ID, you need to open the game Heaven’s Hell and go to Settings, on the left bottom corner there will be a code of 8 digits. This ID is unique and it is recommended not to share it with anyone.</p>
        </div>
        <h1 class="title-password">One Time Password</h1>
        <div class="time-password">
            <p>
                To generate a one time password, you need to open the game, go to Settings, and click on “Generate one time password”. A 4 digit code will be generated, it will last for 15 minutes, then you will need to generate a new one. Due to your own profile security, do not give the code or send it, we will only ask it on the app log in.
            </p>        
        </div>
  
        <!-- Accept Button -->
        <ion-button class="accept-button" router-link="/login">
          Go back
        </ion-button>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonContent, IonButton } from '@ionic/vue';
  </script>
  
  <style scoped>
  /* Full-screen content */
  .terms-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    position: relative;
    background-color: #ff0000; /* Gray background */
  }
  
  /* Top Bar (Welcome Title & Mini Logo) */
  .top-bar {
    position: absolute;
    top: 1%;
    left: 4%;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .welcome-title {
    font-size: 4vh;
    left: 0;
    
    font-weight: bold;
    color: rgb(255, 0, 0);
  }
  
  .mini-logo {
    top: 0;
    right: 0;
    max-width: 24%;
    height: auto;
  }
  
  /* Red Wave Background */
  .red-wave {
    position: absolute;
    top: -20%;
    width: 100%;
    height: 120%;
    background: url("@/assets/red_wave2.svg") no-repeat center top;
    background-size: cover;
    z-index: -1;
  }
  
  /* Terms of Use Title - Positioned on the Waves */
  .title-user {
    position: absolute;
    top: 20%;
    left: 25%;
    transform: translateX(-50%);
    font-size: 3vh;
    font-weight: bold;
    color: rgb(0, 0, 0);
  }
  .title-password {
    position: absolute;
    top: 56%;
    left: 35%;
    transform: translateX(-50%);
    font-size: 3vh;
    font-weight: bold;
    color: rgb(0, 0, 0);
  }

  /* Scrollable Terms Text */
  .user-game-id {
    position: absolute;
    top: 28%;
    width: 94%;
    height: 25%;
    overflow-y: auto;
    color: black;
    background: rgb(255, 29, 29);
    padding-left: 4%;
    padding-right: 4%;
    margin-left: 3%;
    margin-right: 3%;
    border-radius: 12px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    text-align: left;
    text-align: justify;
  }
  .time-password {
    position: absolute;
    top: 64%;
    width: 94%;
    height: 25%;
    overflow-y: auto;
    color: black;
    background: rgb(255, 29, 29);
    padding-left: 4%;
    padding-right: 4%;
    margin-left: 3%;
    margin-right: 3%;
    border-radius: 12px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    text-align: left;
    text-align: justify;
  }
  
  /* Accept Button - Bottom Right */
  .accept-button {
    position: absolute;
    bottom: 2%;
    right: 5%;
    background-color: #FF0000;
    color: rgb(184, 0, 0);
    font-size: 2.4vh;
    border-radius: 20px;
  }
  </style>
  