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
      <ExploreContainer name="Tab 4 page" />
      <img class="title" src="@/assets/title_skins.png" alt="Skins">
      <ion-card class="card" @click="changeSkin">
        
        <img :src="currentSkin" :alt="'Skin Image'" class="skin-image">
        <p class="promt_text">Click to change the skin!</p>
        <p class="down_text">The skin selected will be displayed on game after 2 minutes of setting it. If tehre is any issue or the skin is not showing correctly, a game restart will solve any issue and display the selected one.</p>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<style scoped>
.promt_text {
  font-family: 'Inknut Antiqua';

  text-align: center;
  padding-left: 6px;
  padding-right: 6px;
  font-size: 1.6rem;
  
}
.down_text {
  font-family: 'Inknut Antiqua';

  border-radius: 10px;
  margin-left: 9px;
  height: 168px;
  margin-right: 9px;
  margin-bottom: -10px;
  padding-left: 8px;
  padding-right: 10px;
  padding-top: 8px;
  font-size: 21px;
  text-align: justify;
  color: white;
  background-color: rgb(26, 25, 25);
  

}
.title {
  margin: 10px 0px -4px 13px;
}
.card {
  align-items: center;
  min-height: fit-content;
  height: 87.8%;
  margin-bottom: 0px;
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
  background-color: rgb(255, 0, 0);
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
import { ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonCard, IonCardContent, IonCardTitle} from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
  
  // Navigate to LoginPage.vue on tap
  const goToProfile = () => {
    router.push('/tabs/tab4/profile');
  };
  const goToSettings = () => {
    router.push('/tabs/tab4/settings');
  };

  // Skin Images Array
const skinImages = [
  ('/src/assets/slim_demon_red.png'),
  ('/src/assets/slim_demon_white.png'),
  ('/src/assets/slim_demon_black.png'),
  ('/src/assets/slim_demon_on_drugs.png')
];

// Track Current Skin
const currentIndex = ref(0);
const currentSkin = ref(skinImages[currentIndex.value]);

// Function to Change Skin on Click
const changeSkin = () => {
  currentIndex.value = (currentIndex.value + 1) % skinImages.length;
  currentSkin.value = skinImages[currentIndex.value];
};

</script>
