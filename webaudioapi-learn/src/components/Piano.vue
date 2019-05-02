<template>
  <div class="piano">
    <div class="keyboard" v-if="mode==-1">
      <div
        v-for="(skey, index) in keys"
        :key="index"
        :class="skey.kcolor"
        v-html="skey.hname"
        @click="start(skey.mname)"
      ></div>
    </div>
    <div class="keyboard" v-else-if="mode==1">
      <div
        v-for="(skey, index) in keys"
        :key="index"
        :class="skey.kcolor"
        v-html="skey.kname"
        @click="start(skey.mname)"
      ></div>
    </div>
    <div class="meau">
      <input type="checkbox" @click="handle()" id="name">
      <label for="name">显示按键名</label>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Tone from "tone";
export default {
  data() {
    return {
      mode:-1,
      keys: [
        {
          kcolor: "wk",
          hname: "C3",
          mname: "C3",
          kname: "q"
        },
        {
          kcolor: "bk",
          hname: "C<sup>#</sup>3",
          mname: "C#3",
          kname: "↑q"
        },
        {
          kcolor: "wk",
          hname: "D3",
          mname: "D3",
          kname: "w"
        },
        {
          kcolor: "bk",
          hname: "D<sup>#</sup>3",
          mname: "D#3",
          kname: "↑w"
        },
        {
          kcolor: "wk",
          hname: "E3",
          mname: "E3",
          kname: "e"
        },
        {
          kcolor: "wk",
          hname: "F3",
          mname: "F3",
          kname: "r"
        },
        {
          kcolor: "bk",
          hname: "F<sup>#</sup>3",
          mname: "F#3",
          kname: "↑r"
        },
        {
          kcolor: "wk",
          hname: "G3",
          mname: "G3",
          kname: "t"
        },
        {
          kcolor: "bk",
          hname: "G<sup>#</sup>3",
          mname: "G#3",
          kname: "↑t"
        },
        {
          kcolor: "wk",
          hname: "A3",
          mname: "A3",
          kname: "y"
        },
        {
          kcolor: "bk",
          hname: "A<sup>#</sup>3",
          mname: "A#3",
          kname: "↑y"
        },
        {
          kcolor: "wk",
          hname: "B3",
          mname: "B3",
          kname: "u"
        },
        {
          kcolor: "wk",
          hname: "C4",
          mname: "C4",
          kname: "a"
        },
        {
          kcolor: "bk",
          hname: "C<sup>#</sup>4",
          mname: "C#4",
          kname: "↑a"
        },
        {
          kcolor: "wk",
          hname: "D4",
          mname: "D4",
          kname: "s"
        },
        {
          kcolor: "bk",
          hname: "D<sup>#</sup>4",
          mname: "D#4",
          kname: "↑s"
        },
        {
          kcolor: "wk",
          hname: "E4",
          mname: "E4",
          kname: "d"
        },
        {
          kcolor: "wk",
          hname: "F4",
          mname: "F4",
          kname: "f"
        },
        {
          kcolor: "bk",
          hname: "F<sup>#</sup>4",
          mname: "F#4",
          kname: "↑f"
        },
        {
          kcolor: "wk",
          hname: "G4",
          mname: "G4",
          kname: "g"
        },
        {
          kcolor: "bk",
          hname: "G<sup>#</sup>4",
          mname: "G#4",
          kname: "↑g"
        },
        {
          kcolor: "wk",
          hname: "A4",
          mname: "A4",
          kname: "h"
        },
        {
          kcolor: "bk",
          hname: "A<sup>#</sup>4",
          mname: "A#4",
          kname: "↑h"
        },
        {
          kcolor: "wk",
          hname: "B4",
          mname: "B4",
          kname: "j"
        },
        {
          kcolor: "wk",
          hname: "C5",
          mname: "C5",
          kname: "z"
        },
        {
          kcolor: "bk",
          hname: "C<sup>#</sup>5",
          mname: "C#5",
          kname: "↑z"
        },
        {
          kcolor: "wk",
          hname: "D5",
          mname: "D5",
          kname: "x"
        },
        {
          kcolor: "bk",
          hname: "D<sup>#</sup>5",
          mname: "D#5",
          kname: "↑x"
        },
        {
          kcolor: "wk",
          hname: "E5",
          mname: "E5",
          kname: "c"
        },
        {
          kcolor: "wk",
          hname: "F5",
          mname: "F5",
          kname: "v"
        },
        {
          kcolor: "bk",
          hname: "F<sup>#</sup>5",
          mname: "F#5",
          kname: "↑v"
        },
        {
          kcolor: "wk",
          hname: "G5",
          mname: "G5",
          kname: "b"
        },
        {
          kcolor: "bk",
          hname: "G<sup>#</sup>5",
          mname: "G#5",
          kname: "↑b"
        },
        {
          kcolor: "wk",
          hname: "A5",
          mname: "A5",
          kname: "n"
        },
        {
          kcolor: "bk",
          hname: "A<sup>#</sup>5",
          mname: "A#5",
          kname: "↑n"
        },
        {
          kcolor: "wk",
          hname: "B5",
          mname: "B5",
          kname: "m"
        }
      ]
    };
  },
  created() {
    var _this = this;
    document.onkeydown = function(e) {
      let key = window.event.keyCode;
      if (e.shiftKey) {
        if (key == 81) {_this.start('C#3');}
        if (key == 87) {_this.start('D#3');}
        if (key == 82) {_this.start('F#3');}
        if (key == 84) {_this.start('G#3');}
        if (key == 89) {_this.start('A#3');}
      } else {
        if (key == 81) {_this.start('C3');}
        if (key == 87) {_this.start('D3');}
        if (key == 69) {_this.start('E3');}
        if (key == 82) {_this.start('F3');}
        if (key == 84) {_this.start('G3');}
        if (key == 89) {_this.start('A3');}
        if (key == 85) {_this.start('B3');}
      }
    };
  },
  methods: {
    start: function(mname) {
      var synth = new Tone.Synth({
        envelope: {
          attack: 0.01,
          decay: 0.05,
          sustain: 0.5,
          release: 2
        }
      }).toMaster();
      synth.triggerAttackRelease(mname, "8n");
    },
    handle: function () {
      this.mode = -this.mode;
    }
  }
};
</script>

<style lang="scss" scoped>
.meau {
  display: flex;
  justify-content: center;
}
.keyboard {
  margin: 3em 0 1em 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
}
.k {
  border-radius: 0 0 0.5em 0.5em;
  text-align: center;
  &:active {
    background-color: #4d4d4d;
  }
}
.wk {
  margin: 0 -0.05em;
  background-color: #fff;
  width: 4em;
  height: 20em;
  border: #000 solid 0.1em;
  z-index: 1;
  line-height: 37em;
  @extend .k;
}
.bk {
  margin: 0 -1.5em;
  background-color: #000;
  width: 3em;
  height: 13em;
  line-height: 22em;
  z-index: 2;
  color: #fff;
  @extend .k;
}
</style>
