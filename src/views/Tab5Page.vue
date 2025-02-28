<template>
  <ion-page class="page">
    <ion-header class="real_header">
      <ion-toolbar class="header">
        <div class="toolbar-container">
          <ion-buttons slot="start">
            <img class="profile" @click="goToProfile" src="@/assets/user_icon.png" alt="User">
          </ion-buttons>

          <div class="title-container">
            <img src="@/assets/logo_round.png" alt="App Logo" class="logo" />
          </div>

          <ion-buttons slot="end">
            <img class="settings" @click="goToSettings" src="@/assets/settings_icon.png" alt="Settings">
          </ion-buttons>
        </div>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <img class="title" src="@/assets/title_map.png" alt="Map">

      <!-- Zoomable & Draggable Image Container -->
      <div ref="mapContainer" class="map-container">
        <img ref="mapImage" class="map-image" src="@/assets/map.png" alt="map">
      </div>

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
.toolbar-container {
  display: flex;
  height: 94px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
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
.page {
  color: rgb(255, 0, 0);
  background-color: rgb(255, 0, 0);
}

/* Pinch-to-Zoom & Pan Styles */
.map-container {
  margin-left: 2.5%;
  border-radius: 20px;
  margin-top: 10px;
  overflow: hidden;
  touch-action: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 680px;
  position: relative;
}

.map-image {
  position: absolute;
  will-change: transform;
  transform-origin: center center;
  transition: transform 0.1s ease-out;
}
</style>

<script setup lang="ts">
import { ref } from 'vue';
import { useGesture } from '@vueuse/gesture';
import { useRouter } from 'vue-router';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonCard, IonCardContent, IonCardTitle} from '@ionic/vue';

const router = useRouter();
const goToProfile = () => {
  router.push('/tabs/tab5/profile');
};
const goToSettings = () => {
  router.push('/tabs/tab5/settings');
};

// Pinch-to-Zoom & Pan Functionality
const mapContainer = ref(null);
const mapImage = ref<HTMLImageElement | null>(null);


const state = ref({
  scale: 1,
  x: 0,
  y: 0,
});

useGesture(
  {
    onPinch: ({ offset: [d] }) => {
      state.value.scale = Math.max(1, Math.min(8, d / 100)); // Scale between 1x and 3x
    },
    onDrag: ({ offset: [dx, dy] }) => {
      state.value.x = dx;
      state.value.y = dy;
    },
  },
  {
    domTarget: mapContainer,
    eventOptions: { passive: false },
  }
);

// Watch state and update transform
import { watchEffect } from 'vue';
watchEffect(() => {
  if (mapImage.value) {
    mapImage.value.style.transform = `translate(${state.value.x}px, ${state.value.y}px) scale(${state.value.scale})`;
  }
});
</script>
