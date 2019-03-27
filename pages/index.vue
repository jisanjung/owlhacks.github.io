<template>
  <div>
    <MainJumbotron />
    <div class="bg-light">
      <SponsorLogos />
      <div class="container py-4" style="margin-bottom: 1.5rem">
        <b-card no-body>
          <b-tabs pills card>
            <b-tab id="schedule" title="Schedule" active><Schedule /></b-tab>
            <b-tab id="faq-tab" title="FAQ"><FAQ /></b-tab>
          </b-tabs>
        </b-card>
      </div>
      <div class="text-center text-light py-2 footer">
        <p>
          Interested in sponsoring? Please email
          <a href="mailto:mcginnr@temple.edu">mcginnr@temple.edu</a>
        </p>
        <p>
          <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
            >MLH Code of Conduct</a
          >
        </p>
        <p>Remade by <a href="https://github.com/HanaXu">Hana</a></p>
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
  background-color: #202020;
  padding: 0.5rem 1.2rem;
}
#schedule {
  padding: 0rem 1rem;
}
#faq-tab {
  padding: 1rem;
}
.card-body {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}
.card-body:active,
.card-body:focus {
  outline: none;
}
.nav-pills .nav-link {
  border-radius: 0;
  margin: 0rem 0.5rem;
  font-weight: 500;
}
.nav-link {
  padding: 0.45rem 0.8rem;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: rgba(255, 255, 255, 0.75);
  background-color: #202020;
  border-bottom: 3px solid #99132a;
  font-weight: 500;
}
.nav-pills a {
  color: hsla(0, 0%, 100%, 0.5);
  font-size: 17.5px;
  letter-spacing: 0.5px;
  border-bottom: 3px solid #464343;
}
.nav-pills a:hover {
  color: rgba(255, 255, 255, 0.75);
}
.footer {
  background: #232323;
}
.footer p {
  margin: 0px;
  padding: 3px;
}
.footer a:hover {
  text-decoration: underline;
}
</style>
