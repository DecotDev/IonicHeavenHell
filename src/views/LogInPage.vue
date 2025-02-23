<template>
    <ion-page class="page">
      <ion-content class="login-content">
        <!-- Logo Section -->
        <div class="logo-container">
          <img src="@/assets/logo.png" alt="App Logo" class="logo" />
        </div>
  
        <!-- Login Form -->
        <div class="login-form">
          <!-- Game User ID Field -->
          <ion-item class="input-field">
            <ion-icon slot="start" :icon="personOutline" class="input-icon"></ion-icon>
            <ion-input type="email" placeholder="Game User ID" class="input"></ion-input>
          </ion-item>
  
          <!-- Help Button (closer & left-aligned) -->
          <ion-button fill="clear" class="help-button" router-link="/help">
            Where can I find the ID?
          </ion-button>
  
          <!-- One-Time Password Field -->
          <ion-item class="input-field">
            <ion-icon slot="start" :icon="lockClosedOutline" class="input-icon"></ion-icon>
            <ion-input type="password" placeholder="One Time Password" class="input"></ion-input>
          </ion-item>
  
          <!-- Help Button (closer & left-aligned) -->
          <ion-button fill="clear" class="help-button" router-link="/help">
            How can I generate the password?
          </ion-button>
  
          <!-- Sign In Button (Red) -->
          <ion-button expand="full" class="sign-in-button" router-link="/logging">
            Sign In
          </ion-button>
  
          <!-- Steam Link Button -->
          <ion-button fill="clear" class="help-button" href="https://store.steampowered.com">
            You don't have the game?
          </ion-button>
        </div>
  
        <!-- Red Waves Decoration -->
        <div class="red-waves"></div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonContent, IonItem, IonInput, IonButton, IonIcon } from '@ionic/vue';
  import { personOutline, lockClosedOutline } from 'ionicons/icons';
  </script>
  
  <style scoped>

  .page {
    background-color: grey;
  }
  /* Center content */
  .login-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    text-align: center;
    padding-bottom: 0px;
  }
  
  /* Logo Section */
  .logo-container {
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .logo {
    max-width: 94%;
    margin-top: 6%;
  }
  
  /* Login Form - Centered Horizontally */
  .login-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 6%;
    padding-right: 6%;
  }
  
  /* Input Fields - Rounded, Shadowed */
  .input-field {
    margin-top: 8%;
    width: 100%;
    background: #f0f0f0;
    border-radius: 20px;
    font-size: 1.85vh;
    padding: 3%;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  /* Input Icons */
  .input-icon {
    font-size: 1.5rem;
    color: gray;
  }
  
  /* Input Styling */
  .input {
    width: 100%;
    padding-left: 10%;
    border-radius: 25px;
  }
  
  /* Help Buttons - Closer & Left-Aligned */
  .help-button {
    font-size: 1.45vh;
    color: gray;
    align-self: flex-end;
    margin-top: -2%;
    margin-bottom: auto;
  }
  
  /* Sign In Button - Red */
  .sign-in-button {
    width: 100%;
    height: 10%;
    font-size: 2vh;
    margin-top: 6%;
    color: #FF0000;
    color-scheme: #FF0000;
    background-color: #FF0000;
    color: white;
    border-radius: 25px;
    
  }

  /* Red Waves Decoration */
  .red-waves {
    width: 100%;
    height: 20%;
    background: url("@/assets/red_wave.svg") no-repeat center bottom;
    background-size: cover;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  </style>
  

<!--<template>
    <ion-page>
      <ion-content class="login-content"> 
         Logo Section 
        <div class="logo-container">
          <img src="@/assets/logo.png" alt="App Logo" class="logo" />
        </div>
  
         Login Form 
        <div class="login-form">
           Game User ID Field 
          <ion-item class="input-field">
            <ion-icon slot="start" :icon="personOutline" class="input-icon"></ion-icon>
            <ion-input type="email" placeholder="Game User ID" class="input"></ion-input>
          </ion-item>
  
           Help Button for Game User ID 
          <ion-button fill="clear" class="help-button" router-link="/help">
            Where can I find the ID?
          </ion-button>
  
           One-Time Password Field 
          <ion-item class="input-field">
            <ion-icon slot="start" :icon="lockClosedOutline" class="input-icon"></ion-icon>
            <ion-input type="password" placeholder="One Time Password" class="input"></ion-input>
          </ion-item>
  
           Help Button for Password Generation 
          <ion-button fill="clear" class="help-button" router-link="/help">
            How can I generate the password?
          </ion-button>
  
           Sign In Button 
          <ion-button expand="full" class="sign-in-button" router-link="/logging">
            Sign In
          </ion-button>
  
           Steam Link Button
          <ion-button fill="clear" class="steam-button" href="https://store.steampowered.com">
            You don't have the game?
          </ion-button>
        </div>
  
         Red Waves Decoration 
        <div class="red-waves"></div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonContent, IonItem, IonInput, IonButton, IonIcon } from '@ionic/vue';
  import { personOutline, lockClosedOutline } from 'ionicons/icons';
  </script>
  
  <style scoped>
  /* Center content */
  .login-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    text-align: center;
    padding-bottom: 60px;
  }
  
  /* Logo Section */
  .logo-container {
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .logo {
    max-width: 60%;
    height: auto;
  }
  
  /* Login Form */
  .login-form {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  
  /* Input Fields */
  .input-field {
    width: 100%;
    background: #f0f0f0;
    border-radius: 25px;
    padding: 10px;
  }
  
  .input-icon {
    font-size: 1.5rem;
    color: gray;
  }
  
  .input {
    width: 100%;
    padding-left: 10px;
  }
  
  /* Help Buttons */
  .help-button {
    font-size: 14px;
    color: gray;
  }
  
  /* Sign In Button */
  .sign-in-button {
    width: 100%;
    height: 50px;
    font-size: 18px;
    margin-top: 10px;
  }
  
  /* Steam Link Button */
  .steam-button {
    font-size: 14px;
    color: gray;
  }
  
  /* Red Waves Decoration */
  .red-waves {
    width: 100%;
    height: 80px;
    background: url("@/assets/red_wave.svg") no-repeat center bottom;
    background-size: cover;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  </style>-->
  


<!--<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Log In page</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-button router-link="/logging">Tabs (RL)</ion-button>
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