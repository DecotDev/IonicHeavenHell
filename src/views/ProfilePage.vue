<template>
    <ion-page >
      <ion-header>
        <ion-toolbar>
          <ion-title>Profile page</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <img class="demon_bg" src="@/assets/demon_bg.png" alt="">
        <img class="profile_pic" src="@/assets/profile_pic.png" alt="Profile pic">
        <div class="username_div">
          <p class="username">David</p>
        </div>
        <img class="red_wave" src="@/assets/red_wave.svg" alt="red wave">
        <div class="down_part">
          <p class="desc">
            The creator of the Heaven’s Hell brgames and of this awesome app!
            <br><br>Try holding my profile pic to make it bigger, or the awards to read them.
          </p>
          <p class="award">Account Awards:</p>
          <!-- Clickable Award Image -->
          <img class="figma_logo" src="@/assets/figma_award.png" alt="Award" data-bs-toggle="modal" data-bs-target="#awardModal">
          <img src="@/assets/ionic_award.png" alt="ionic">
          <img class="vue_logo" src="@/assets/vue_award.png" alt="vue">
        </div>
      </ion-content>
  
      <!-- Bootstrap Modal -->
      <div class="modal fade" id="awardModal" tabindex="-1" aria-labelledby="awardModalLabel" aria-hidden="true" data-bs-toggle="modal" data-bs-target="#awardModal">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content" >
            <div class="modal-body text-center">
              <img src="@/assets/figma_award_desc1.png" alt="Award Description" class="img-fluid">
            </div>
          </div>
        </div>
      </div>
    </ion-page>
  </template>
  
  <script setup>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  
  </script>
  
  <style>

  ion-content {
    text-align: center;
  }
  .modal-backdrop {
    z-index: -9 !important;
  }
  .img-fluid {
    z-index: 10;
  }
  .vue_logo {
    padding-left: 9%;
  }
  .figma_logo {
    padding-right: 9%;
  }
  
  .award {
    margin-left: -35%;
    font-weight: bolder;
    font-size: 26px;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #000000;
    color: #ff0000;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.50);
  }
  
  .desc {
    padding-top: 140px;
    padding-left: 32px;
    padding-right: 46px;
    color: #000000;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
  }
  
  .demon_bg {
    z-index: -2;
    left: -20px;
    top: -90px;
    scale: 2;
    position: absolute;
  }
  
  .down_part {
    background: #b20003;
    margin-top: -38%;
    width: 100%;
    height: 67%;
    z-index: -10;
  }
  
  .red_wave {
    z-index: -1;
    position: absolute;
    bottom: 62%;
    left: 0px;
  }
  
  .username {
    margin-top: 4px;
    font-size: 4rem;
    font-weight: bolder;
    -webkit-text-stroke-width: 30px;
    -webkit-text-stroke-color: #000000;
    color: red;
    paint-order: stroke fill;
    z-index: 1;
    text-shadow: 20px 20px 16px rgba(0, 0, 0);
  }
  
  .profile_pic {
    margin-top: 42px;
    width: 260px;
    height: 260px;
    z-index: 1;
  }
  
  .modal-content {
    background: transparent;
    border: none;
  }
  
  .modal-body img {
    max-width: 100%;
    height: auto;
  }
  </style>
  