<template>
  <div class="piano">
    <div
      v-for="skey in keys"
      :key="skey.mname"
      :class="skey.kcolor"
      v-html="skey.hname"
      @click="start(skey.mname)"
    ></div>
  </div>
</template>

<script>
/* eslint-disable */
import Tone from "tone";
export default {
  data() {
    return {
      keys: [
        {
          kcolor: "wk",
          hname: "C3",
          mname: "C3"
        },
        {
          kcolor: "bk",
          hname: "C<sup>#</sup>3",
          mname: "C#3"
        },
        {
          kcolor: "wk",
          hname: "D3",
          mname: "D3"
        },
        {
          kcolor: "bk",
          hname: "D<sup>#</sup>3",
          mname: "D#3"
        },
        {
          kcolor: "wk",
          hname: "E3",
          mname: "E3"
        },
        {
          kcolor: "wk",
          hname: "F3",
          mname: "F3"
        },
        {
          kcolor: "bk",
          hname: "F<sup>#</sup>3",
          mname: "F#3"
        },
        {
          kcolor: "wk",
          hname: "G3",
          mname: "G3"
        },
        {
          kcolor: "bk",
          hname: "G<sup>#</sup>3",
          mname: "G#3"
        },
        {
          kcolor: "wk",
          hname: "A3",
          mname: "A3"
        },
        {
          kcolor: "bk",
          hname: "A<sup>#</sup>3",
          mname: "A#3"
        },
        {
          kcolor: "wk",
          hname: "B3",
          mname: "B3"
        },
        {
          kcolor: "wk",
          hname: "C4",
          mname: "C4"
        },
        {
          kcolor: "bk",
          hname: "C<sup>#</sup>4",
          mname: "C#4"
        },
        {
          kcolor: "wk",
          hname: "D4",
          mname: "D4"
        },
        {
          kcolor: "bk",
          hname: "D<sup>#</sup>4",
          mname: "D#4"
        },
        {
          kcolor: "wk",
          hname: "E4",
          mname: "E4"
        },
        {
          kcolor: "wk",
          hname: "F4",
          mname: "F4"
        },
        {
          kcolor: "bk",
          hname: "F<sup>#</sup>4",
          mname: "F#4"
        },
        {
          kcolor: "wk",
          hname: "G4",
          mname: "G4"
        },
        {
          kcolor: "bk",
          hname: "G<sup>#</sup>4",
          mname: "G#4"
        },
        {
          kcolor: "wk",
          hname: "A4",
          mname: "A4"
        },
        {
          kcolor: "bk",
          hname: "A<sup>#</sup>4",
          mname: "A#4"
        },
        {
          kcolor: "wk",
          hname: "B4",
          mname: "B4"
        },
        {
          kcolor: "wk",
          hname: "C5",
          mname: "C5"
        },
        {
          kcolor: "bk",
          hname: "C<sup>#</sup>5",
          mname: "C#5"
        },
        {
          kcolor: "wk",
          hname: "D5",
          mname: "D5"
        },
        {
          kcolor: "bk",
          hname: "D<sup>#</sup>5",
          mname: "D#5"
        },
        {
          kcolor: "wk",
          hname: "E5",
          mname: "E5"
        },
        {
          kcolor: "wk",
          hname: "F5",
          mname: "F5"
        },
        {
          kcolor: "bk",
          hname: "F<sup>#</sup>5",
          mname: "F#5"
        },
        {
          kcolor: "wk",
          hname: "G5",
          mname: "G5"
        },
        {
          kcolor: "bk",
          hname: "G<sup>#</sup>5",
          mname: "G#5"
        },
        {
          kcolor: "wk",
          hname: "A5",
          mname: "A5"
        },
        {
          kcolor: "bk",
          hname: "A<sup>#</sup>5",
          mname: "A#5"
        },
        {
          kcolor: "wk",
          hname: "B5",
          mname: "B5"
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
    }
  }
};
</script>

<style lang="scss" scoped>
.piano {
  margin: 3em 0;
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
