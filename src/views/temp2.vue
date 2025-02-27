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
              <img class="settings" @click="goToSettings" src="@/assets/settings_icon.png" alt="User">
            </ion-buttons>
          </div>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <img class="title" src="@/assets/title_stats.png" alt="Stats">
        
        <ion-card class="mode-card">
          <ion-card-header>
            <ion-card-title class="mode-title">Story Mode</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <div class="chart-container">
              <div class="chart-item">
                <h3>Story completion</h3>
                <div class="chart-label">63%</div>
              </div>
              <div class="chart-item">
                <h3>Achievements</h3>
                <div class="chart-label">5/14</div>
              </div>
            </div>
          </ion-card-content>
        </ion-card>
  
        <ion-card class="mode-card">
          <ion-card-header>
            <ion-card-title class="mode-title">Coop mode</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <div class="chart-container">
              <div class="chart-item">
                <h3>Missions completed</h3>
                <div class="chart-label">38%</div>
              </div>
              <div class="chart-item">
                <h3>Achievements</h3>
                <div class="chart-label">2/9</div>
              </div>
            </div>
          </ion-card-content>
        </ion-card>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { IonPage, IonHeader, IonToolbar, IonContent, IonButtons, IonCard, IonCardContent, IonCardTitle, IonCardHeader } from '@ionic/vue';
  import { useRouter } from 'vue-router';
  import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
  import { Doughnut } from 'vue-chartjs';
  
  ChartJS.register(ArcElement, Tooltip);
  
  const router = useRouter();
  
  const goToProfile = () => {
    router.push('/tabs/tab2/profile');
  };
  
  const goToSettings = () => {
    router.push('/tabs/tab2/settings');
  };
  /*
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '80%',
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    }
  };
  
  const storyCompletionData = {
    datasets: [{
      data: [63, 37],
      backgroundColor: ['#ff0000', '#000000'],
      borderWidth: 0
    }]
  };
  
  const storyAchievementsData = {
    datasets: [{
      data: [5, 9],
      backgroundColor: ['#ff0000', '#000000'],
      borderWidth: 0
    }]
  };
  
  const coopMissionsData = {
    datasets: [{
      data: [38, 62],
      backgroundColor: ['#ff0000', '#000000'],
      borderWidth: 0
    }]
  };
  
  const coopAchievementsData = {
    datasets: [{
      data: [2, 7],
      backgroundColor: ['#ff0000', '#000000'],
      borderWidth: 0
    }]
  }; */ 
  </script>
  
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
  .content {
    color: rgb(255, 255, 255);
    background-color: rgb(19, 19, 19);
    font-size: 1.6rem;
    border-radius: 10px;
    padding: 8px 0px 4px 16px;
    margin-left: 0px;
    margin-right: -0px;
  }
  .page {
    color: rgb(255, 0, 0);
    background-color: rgb(19, 19, 19);
  }
  .mode-card {
    background-color: #232323;
    border-radius: 20px;
    margin: 16px;
  }
  .mode-title {
    color: #ff0000;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }
  .chart-container {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  .chart-item {
    text-align: center;
    position: relative;
    width: 120px;
    height: 120px;
  }
  .chart-item h3 {
    color: #ff0000;
    margin-bottom: 10px;
  }
  .chart-label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    font-weight: bold;
    color: #ff0000;
  }
  </style>
  
  