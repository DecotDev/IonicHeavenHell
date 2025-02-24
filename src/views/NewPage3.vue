<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Ver 0.38 - Wall Slide!</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-card>
                <ion-card-content>
                    <p class="header">Uploaded 17d ago</p>
                    <img src="@/assets/new03.png" alt="New Image">
                    <p class="content">The latest update to the Godot project, version 0.38, introduces a key gameplay mechanic known as the "Coyote Jump." This feature allows players to jump for a brief moment after leaving the ground, offering a forgiving and intuitive experience during platforming. The coyote jump improves precision and ensures that players have a slight buffer to execute jumps, even if their timing is slightly off. This addition significantly enhances the fluidity and enjoyment of movement within the game.</p>
                    <p class="content">The new mechanic is implemented using a timer that tracks the milliseconds after the player leaves a platform. If the jump button is pressed within this small window, the player can still perform a jump, giving them more control and reducing frustration from missed inputs. In the current build, you can see real-time debugging information on the screen, such as velocity values and the state of the coyote timer. This transparency not only helps developers fine-tune the mechanic but also gives players insight into how the system works.</p>
                    <p class="content">This update demonstrates a focus on refining the game's core mechanics and enhancing the player's experience. The introduction of the coyote jump aligns with modern platforming conventions, making the game feel polished and responsive. Players are encouraged to explore the updated levels and provide feedback, as this feature opens up new opportunities for creative level design and smoother gameplay.</p>
                </ion-card-content>
                <ion-button router-link="/tabs" class="back_button">BACK</ion-button>
            </ion-card>
        </ion-content>
    </ion-page>
</template>
  
<script setup lang="ts">
    import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardContent } from '@ionic/vue';
</script>
  
<style>
    ion-content{ text-align: center; }
    ion-button{ margin-top:50px }
    
.back_button{
    margin-top: -6px;
    color: black;
    font-size: 1.6rem;
    padding-left: 4px;
    padding-bottom: 8px;
}
.content{
    font-size: 1.06rem !important;
    font-weight: lighter !important;
    text-align: left;
    text-align: justify;

}
.header{
    text-align: right;
    color: rgb(197, 0, 0);
}
</style>