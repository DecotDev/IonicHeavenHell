<template>
    <ion-card class="leaderboard">
      <ion-list>
        <ion-item v-for="(player, index) in players" :key="index" class="rank-item">
          <div class="rank_container">
            <img v-if="index < 10" :src="getMedal(index)" class="medal-icon" alt="medal">
          </div>
          <ion-label class="player-name">
            {{ player.name }}
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-card>
  </template>
  
  <script setup lang="ts">
  import { IonCard, IonList, IonItem, IonLabel } from '@ionic/vue';
  
  // Sample player data
  const players = [
    { name: "Decotgame" },
    { name: "Aaroncho2005" },
    { name: "GS_Eduardo" },
    { name: "Comet" },
    { name: "Iria_2x1" },
    { name: "Ben Ten" },
    { name: "Nicoleta_Galleta" },
    { name: "Solime_12" },
    { name: "Fer_Stk" },
    { name: "Eloy De la Cruz" },
  ];
  
  // Function to get medal images
  const getMedal = (index: number) => {
    return index === 0 ? "src/assets/medal1.png" :
           index === 1 ? "src/assets/medal2.png" :
           index === 2 ? "src/assets/medal3.png" :
           index === 3 ? "src/assets/medal4.png" :
           index === 4 ? "src/assets/medal5.png" :
           index === 5 ? "src/assets/medal6.png" :
           index === 6 ? "src/assets/medal7.png" :
           index === 7 ? "src/assets/medal8.png" :
           index === 8 ? "src/assets/medal9.png" :
           index === 9 ? "src/assets/medal10.png" : "";
  };
  </script>
  
  <style scoped>
  .rank_container {
    border-radius: 16px;
    margin-right: 15px;
    background: rgb(26, 26, 26);
  }
  .leaderboard {
    background: #1e1e1e;
    border-radius: 16px;

    padding: 0px 10px 0px 10px;
    border: 2px solid red;
  }
  
  .rank-item {
    display: flex;
    width: 100%;
    background: #2a2a2a;
    margin: 10px 0;
    border-radius: 10px;
    padding: 10px 10px 10px 10px;
    color: white;
  }

  
  .rank-number {
    font-size: 1.5rem;
    font-weight: bold;
    color: red;
  }
  
  .top-rank {
    font-size: 1.8rem;
    font-weight: bold;
  }
  
  .medal-icon {
    width: 50px;
    height: 50px;
    margin-top: 12px;
    margin-left: 16px;
    margin-right: 16px;
    align-self: center;

  }
  
  .player-name {
    font-size: 1.4rem;
    color: white;
  }
  </style>
  