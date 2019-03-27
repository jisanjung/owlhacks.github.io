<template>
  <section class="jumbo">
    <Video />
    <div class="container text-light">
      <div class="row py-5">
        <div class="col-xl-6" style="margin-top: 5%">
          <h1 class="display-4">OwlHacks</h1>
          <p style="font-size: 1.5rem">
            Temple University's 12 Hour Hackathon
          </p>
          <div id="info">
            <p><b>Who:</b> College students with a passion for technology</p>
            <p>
              <b>Where:</b>
              <a href="https://goo.gl/maps/YnJN7i4jKjp" target="__blank"
                >SERC Lobby - Temple University, Philadelphia, PA</a
              >
            </p>
            <p><b>When:</b> Saturday, March 30th, 2019 from 8AM - 10PM</p>
          </div>
          <div class="row my-2">
            <div class="col-lg-12">
              <a
                style="margin: 0.5rem 0rem;"
                class="btn btn-red btn-lg"
                href="https://goo.gl/forms/iode42v8iq3S7qqI3"
                target="__blank"
                role="button"
                >Register</a
              >
              <a
                style="margin: 0.5rem;"
                class="btn btn-red btn-lg"
                href="https://join.slack.com/t/templeowlhacks/shared_invite/enQtNTc3NDY0MDkwNzUzLThlMzZjMjVjY2E5YjNkMGMwYmMxZTM5Y2NhNGEwZDY1NzMwNDc2ZTM4NWVhMTM1ZTNlY2I4OTljYzJhMGE3N2I"
                target="__blank"
                role="button"
                >Slack</a
              >
              <a
                class="btn btn-red btn-lg"
                href="https://owlhacks-2019.devpost.com/"
                target="__blank"
                role="button"
                >Devpost</a
              >
            </div>
          </div>
          Organized by Temple ACM / Temple ACM-W / TUDev / IEEE
        </div>
        <div class="col-xl-5 offset-xl-1">
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
#info p {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 0.6rem;
}

.jumbo {
  text-align: center;
  background-image: linear-gradient(-45deg, #99132a, #003366);
  /* background-image: linear-gradient(-45deg, #a41e35, #4b0082); */
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
  filter: brightness(115%);
  cursor: pointer;
}

@media (max-width: 992px) {
  #owl {
    max-width: 300px;
    max-height: 300px;
    margin-top: 2%;
  }

  .btn-red {
    background: #99132a;
  }
}
</style>
