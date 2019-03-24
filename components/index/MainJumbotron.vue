<template>
  <section class="jumbo">
    <Video />
    <div class="container text-light">
      <div class="row py-5">
        <div class="col-xl-7 my-3">
          <h1 class="display-4">OwlHacks</h1>
          <p style="font-size: 24px;">Temple University's 12 Hour Hackathon</p>
          <p>
            <b>Who:</b> College students with a passion for technology
            <br />
            <b>Where:</b>
            <a href="https://goo.gl/maps/YnJN7i4jKjp" target="__blank"
              >SERC Lobby - Temple University, Philadelphia, PA</a
            >
            <br />
            <b>When:</b> Saturday, March 30th, 2019 from 8AM - 10PM
            <br />
          </p>
          <p>
            <a
              id="register-btn"
              class="btn btn-red btn-lg"
              href="https://goo.gl/forms/iode42v8iq3S7qqI3"
              target="__blank"
              role="button"
              >Register</a
            >
            <nuxt-link
              class="btn btn-red btn-lg"
              role="button"
              to="sponsorshipGuide"
              >Sponsorship Guide</nuxt-link
            >
          </p>
          <p>
            <a
              class="btn btn-red btn-lg"
              href="https://join.slack.com/t/templeowlhacks/shared_invite/enQtNTc3NDY0MDkwNzUzLThlMzZjMjVjY2E5YjNkMGMwYmMxZTM5Y2NhNGEwZDY1NzMwNDc2ZTM4NWVhMTM1ZTNlY2I4OTljYzJhMGE3N2I"
              target="__blank"
              role="button"
              >Join our Slack!</a
            >
          </p>
          <p class="my-0">
            Questions? Please contact
            <a href="mailto:tudev@temple.edu">tudev@temple.edu</a>
          </p>
          <p style="margin-bottom: 2rem">
            Interested in sponsoring? Please email
            <a href="mailto:mcginnr@temple.edu">mcginnr@temple.edu</a>
          </p>
          <p>Organized by Temple ACM / Temple ACM-W / TUDev / IEEE</p>
        </div>
        <div class="col-xl-5">
          <img
            id="owl"
            src="/owlhacks-logo.png"
            alt="owlhacks logo"
            width="400"
            height="400"
            @click="toggleVideo"
          />
          <CountdownTimer date="2019-03-30 08:00:00"></CountdownTimer>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Video from '~/components/index/Video.vue'
import CountdownTimer from '~/components/index/CountdownTimer.vue'

export default {
  components: {
    Video,
    CountdownTimer
  },
  methods: {
    toggleVideo() {
      const video = document.getElementById('video')
      if (video.paused) video.play()
      else video.pause()
    }
  }
}
</script>

<style>
#register-btn {
  margin-right: 0.5rem;
}

@media (max-width: 320px) {
  #register-btn {
    margin-bottom: 1rem;
  }
}

.jumbo {
  text-align: center;
  background: #a41e35;
  height: 100%;
  position: relative;
}

@media (min-width: 992px) {
  .jumbo {
    padding-top: 4%;
    padding-bottom: 2%;
    text-align: left;
  }

  .countdown {
    margin-right: 40px;
  }

  #owl {
    margin-top: 2%;
  }
}

#owl:hover {
  filter: brightness(120%);
  cursor: pointer;
}

@media (max-width: 992px) {
  #owl {
    max-width: 300px;
    max-height: 300px;
  }

  .btn-red {
    background: #99132a;
  }
}
</style>
