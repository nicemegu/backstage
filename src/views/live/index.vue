<template>
  <div>
    <video :id="tcPlayerId" class="tencent-player" preload="auto" playsinline webkit-playsinline></video>
  </div>
</template>
<script>
function loadTcScript (cb) {
  loadScript(cb, {
    id: 'tcPlayerScriptId',
    url: '//imgcache.qq.com/open/qcloud/video/tcplayer/tcplayer.min.js',
  });
}
function loadScript (cb, obj) {
  if (document.getElementById(obj.id)) {
    cb();
  } else {
    const script = document.createElement('script');
    script.async = true;
    script.src = obj.url;
    script.id = obj.id;
    script.onload = () => {
      cb();
    };
    document.body.appendChild(script);
  }
}
export default {
  name: 'TencentPlayer',
  props: {
    options: {
      type: Object,
      default () {
        return {};
      }
    }
  },
  data () {
    return {
      tcPlayerId: 'tcPlayer' + Date.now(),
      player: null,
    };
  },
  watch: {
    options: {
      handler () {
        this.$nextTick(() => {
          this.loadJS();
        });
      },
      immediate: true,
      deep: true,
    }
  },
  methods: {
    loadJS () {
      if (window.TCPlayer) {
        this.initVideo();
      } else {
        loadTcScript(() => {
          this.initVideo();
        });
      }
    },
    initVideo () {
      const playerParm = {
        fileID: '5285890799710670616',
        appID: '1400329073',
        autoplay: this.options.autoplay ? true : false,
      };
      setTimeout(() => {
        if (!this.player) {
          // this.player = TCPlayer(this.tcPlayerId, playerParm);
        } else {
          this.player.loadVideoByID(playerParm);
        }
      });
    }
  },
};
</script>
<style  scoped>
@import url('//imgcache.qq.com/open/qcloud/video/tcplayer/tcplayer.css');
</style>