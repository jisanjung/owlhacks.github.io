<template>
  <div>
    <MainJumbotron />
    <div class="bg-light">
      <SponsorLogos />
      <div class="container py-3">
        <b-card no-body>
          <b-tabs pills card>
            <b-tab id="schedule" title="Schedule" active><Schedule /></b-tab>
            <b-tab id="faq" title="FAQ"><FAQ /></b-tab>
          </b-tabs>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import MainJumbotron from '~/components/index/MainJumbotron.vue'
import SponsorLogos from '~/components/index/SponsorLogos.vue'
import Schedule from '~/components/index/Schedule.vue'
import FAQ from '~/components/index/FAQ.vue'

export default {
  components: {
    MainJumbotron,
    SponsorLogos,
    Schedule,
    FAQ
  }
}
</script>

<style>
.card-title {
  color: #a41e35;
  margin-bottom: 0.5rem;
}
.card-header {
  background-color: #303030;
  padding: 0.5rem 1.2rem;
}
.card-text a {
  color: #44aaff;
}
.card-text a:hover,
.card-text a:focus {
  color: #a41e35;
}
#schedule {
  padding: 0rem 1rem;
}
#faq {
  padding: 1rem;
}
.card-body:active,
.card-body:focus {
  outline: none;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: rgba(255, 255, 255, 0.75);
  background-color: #394c6d;
}
.nav-pills a {
  color: hsla(0, 0%, 100%, 0.5);
}
.nav-pills a:hover {
  color: rgba(255, 255, 255, 0.75);
}
</style>
