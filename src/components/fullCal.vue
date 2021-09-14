<template>
  <div id="cal">
    <FullCalendar :options="calendarOptions" class="full-calendar">
      <template v-slot:eventContent="event">
        <div @click="$bvModal.show(event.event.title + event.event.start)" class="full-calendar-inside-event">
          <p class="full-calendar-inside-event-title">
          {{ event.event.title }}
          </p>

          <!-- Affichage de la date de l'heure de début et fin / rajoute un zero afin si besoin afin de faire des chiffres a deux décimales xx:xx -->
          {{ new Date(event.event.start).getHours() }}:{{ (new Date(event.event.start).getMinutes()) > 10 ? new Date(event.event.start).getMinutes() : new Date(event.event.start).getMinutes() + '0' }}
          {{ new Date(event.event.end).getHours() }}:{{ (new Date(event.event.end).getMinutes()) > 10 ? new Date(event.event.end).getMinutes() : new Date(event.event.end).getMinutes() + '0' }}
          
             <br>
             <br>
             <!--  Affichage des descriptions du calendrier -->
          <div class="full-calendar-description" v-for="(prop, index) in event.event.extendedProps.affichage" :key="index">
            {{ index }} : <br>
            {{ event.event.extendedProps.affichage[index] }}
          </div>

          <!-- Modale / affiche les détails au clic sur l'event -->
          <b-modal :id="event.event.title + event.event.start">
            <template v-slot:modal-title>
              {{ event.event.title }}
            </template>
            <template v-slot:default>
               De {{ new Date(event.event.start).getHours() }}:{{ (new Date(event.event.start).getMinutes()) > 10 ? new Date(event.event.start).getMinutes() : new Date(event.event.start).getMinutes() + '0' }} à
          {{ new Date(event.event.end).getHours() }}:{{ (new Date(event.event.end).getMinutes()) > 10 ? new Date(event.event.end).getMinutes() : new Date(event.event.end).getMinutes() + '0' }}
              <div
                v-for="(prop, index) in event.event.extendedProps.affichage"
                :key="index"
              >
                {{ index }} : {{ event.event.extendedProps.affichage[index] }}
              </div>
            </template>
            <template #modal-footer="{ hide }">
              <button @click="hide(event.event.title + event.event.start)">
                Fermer
              </button>
            </template>
          </b-modal>
        </div>
      </template>
    </FullCalendar>
    <div></div>
    <div></div>
  </div>
</template>

<script lang="ts">
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Vuex from "vuex";
import { BootstrapVue, IconsPlugin, BModal } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

@Component({
  components: {
    FullCalendar,
  },
})
export default class fullCal extends Vue {
  showModalCal = false;
  calendarOptions = {
    navLinks: true,
    slotMinTime: "08:00:00",
    slotMaxTime: "22:00:00",
    timeZone: 'local',
    locale: 'fr',
    headerToolbar: {
      right: "today prev,next",
      center: "title",
      left: "timeGridWeek,timeGridDay",
    },
    allDaySlot: false,
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
    initialView: "timeGridWeek",
    events: this.$store.state.calendar,
    weekends: false,
  };

  popUpInfo() {
    this.$bvModal.show("my-modal");
  }
}
</script>

<style>
  .full-calendar{
    max-height: 800px;
  }

  .full-calendar-inside-event{
    overflow: hidden;
  }

  .full-calendar-inside-event-title{
    margin: 0;
    padding: 0;
  }
</style>
