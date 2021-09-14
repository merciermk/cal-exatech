<template>
  <div id="app">
    <full-cal :event="calEvents" :calIsReady="calIsReady"></full-Cal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import fullCal from "./components/fullCal.vue";
import { getCalColor, colorEvent } from './utils/colorEvent'

@Component({
  components: {
    fullCal,
  },
})
export default class App extends Vue {
  calEvents = this.$store.state.calendar
  calIsReady = false 


  
  mounted() {
    this.calEvents = getCalColor(colorEvent, this.calEvents)
    console.log(this.calEvents)
    this.calIsReady = true
  }

}
</script>

<style>

</style>
