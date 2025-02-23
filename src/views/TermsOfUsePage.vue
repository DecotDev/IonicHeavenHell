<template>
    <ion-page>
      <ion-content class="terms-content">
        <!-- Top Section: Welcome Title & Mini Logo -->
        <div class="top-bar">
          <h2 class="welcome-title">Welcome to the App!</h2>
          <img src="@/assets/logo_mini.png" alt="Mini Logo" class="mini-logo" />
        </div>
  
        <!-- Red Wave Background -->
        <div class="red-wave">
        </div>
        <h1 class="terms-title">Terms of Use</h1>

        <!-- Scrollable Terms Text -->
        <div class="terms-text">
            <p>To obtain your unique user game ID in Heaven’s Hell, follow these steps carefully. First, launch the game on your device. Once the game is open, navigate to the Settings menu, which is typically accessible from the main screen or through an in-game menu button. In the Settings menu, look toward the bottom left corner of the screen. There, you will find an 8-digit code displayed prominently. This code is your user game ID, a unique identifier tied specifically to your account. It is important to note that this ID is crucial for account verification and support purposes, so it is highly recommended that you do not share it with anyone. Keeping your user game ID private helps protect your account from unauthorized access or potential security breaches.</p>
            <p>In addition to your user game ID, Heaven’s Hell also provides a feature called the one-time password (OTP) for enhanced security. To generate a one-time password, you need to open the game and access the Settings menu once again. Within the Settings menu, locate and click on the option labeled “Generate one-time password”. Upon clicking this option, a 4-digit code will be generated instantly. This code is time-sensitive and will remain valid for 15 minutes only. After the 15-minute window expires, the code will no longer work, and you will need to generate a new one if required.</p>
            <p>It is important to emphasize that the one-time password is a critical security measure designed to protect your account. Never share this code with anyone, and avoid sending it through messages, emails, or any other communication channels. The game’s support team or system will only request this code during the app log-in process or for specific account-related actions within the game itself. By adhering to these guidelines, you can ensure that your account remains secure and that your personal information is safeguarded at all times.</p>
            <p>If you ever encounter any issues with your user game ID or the one-time password feature, you can reach out to the Heaven’s Hell support team through the official help center or support page within the game. They will assist you in resolving any concerns while maintaining the highest level of security for your account. Remember, your vigilance in protecting your user game ID and one-time passwords plays a vital role in keeping your gaming experience safe and enjoyable.</p>
        </div>
  
        <!-- Accept Button -->
        <ion-button class="accept-button" router-link="/tabs/tab3">
          Accept
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
    top: 0;
    left: 0;
    width: 96%;
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
  .terms-title {
    position: absolute;
    top: 20%;
    left: 25%;
    transform: translateX(-50%);
    font-size: 3vh;
    font-weight: bold;
    color: rgb(0, 0, 0);
  }
  
  /* Scrollable Terms Text */
  .terms-text {
    position: absolute;
    top: 28%;
    width: 94%;
    height: 62%;
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
    color: white;
    font-size: 2.4vh;
    border-radius: 20px;
  }
  </style>
  