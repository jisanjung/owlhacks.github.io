<template>
  <div>
    <MainJumbotron />
    <div class="bg-light">
      <SponsorLogos />
      <Schedule />
    </div>
  </div>
</template>

<script>
import MainJumbotron from '~/components/index/MainJumbotron.vue'
import SponsorLogos from '~/components/index/SponsorLogos.vue'
import Schedule from '~/components/index/Schedule.vue'

export default {
  components: {
    MainJumbotron,
    SponsorLogos,
    Schedule
  }
}
</script>

<style>
.text-red {
  font-size: 2.3rem;
}
</style>
