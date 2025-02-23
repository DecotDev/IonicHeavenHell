<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
                
        <div class="toolbar-container">
          <!-- Left-aligned button -->
          <ion-buttons slot="start">
            <ion-button router-link="/tabs/tab5/profile">Profile</ion-button>
          </ion-buttons>

          <!-- Centered title -->
          <div class="title-container">
            <ion-title>Tab 5</ion-title>
          </div>

          <!-- Right-aligned button -->
          <ion-buttons slot="end">
            <ion-button router-link="/tabs/tab5/settings">Settings</ion-button>
          </ion-buttons>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 5</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Tab 5 page" />
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
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}
</style>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
