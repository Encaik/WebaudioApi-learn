<template>
  <div class="piano">
    <div class="keyboard" v-if="mode==-1">
      <div
        v-for="(skey, index) in keys"
        :key="index"
        :class="skey.kcolor"
        :style="{'background-color':skey.kactive}"
        v-html="skey.hname"
        @click="start(skey)"
      ></div>
    </div>
    <div class="keyboard" v-else-if="mode==1">
      <div
        v-for="(skey, index) in keys"
        :key="index"
        :class="skey.kcolor"
        :style="{'background-color':skey.kactive}"
        v-html="skey.kname"
        @click="start(skey)"
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
//import SampleLibrary from "../assets/js/Tonejs-Instruments.js";
import { start } from 'repl';
export default {
  data() {
    return {
      mode:-1,
      keys: [
        {
          kcolor: "wk",
          hname: "C3",
          mname: "C3",
          kname: "q",
          kactive:""
        },
        {
          kcolor: "bk",
          hname: "C<sup>#</sup>3",
          mname: "C#3",
          kname: "↑q",
          kactive:""
        },
        {
          kcolor: "wk",
          hname: "D3",
          mname: "D3",
          kname: "w",
          kactive:""
        },
        {
          kcolor: "bk",
          hname: "D<sup>#</sup>3",
          mname: "D#3",
          kname: "↑w",
          kactive:""
        },
        {
          kcolor: "wk",
          hname: "E3",
          mname: "E3",
          kname: "e",
          kactive:""
        },
        {
          kcolor: "wk",
          hname: "F3",
          mname: "F3",
          kname: "r",
          kactive:""
        },
        {
          kcolor: "bk",
          hname: "F<sup>#</sup>3",
          mname: "F#3",
          kname: "↑r",
          kactive:""
        },
        {
          kcolor: "wk",
          hname: "G3",
          mname: "G3",
          kname: "t",
          kactive:""
        },
        {
          kcolor: "bk",
          hname: "G<sup>#</sup>3",
          mname: "G#3",
          kname: "↑t",
          kactive:""
        },
        {
          kcolor: "wk",
          hname: "A3",
          mname: "A3",
          kname: "y",
          kactive:""
        },
        {
          kcolor: "bk",
          hname: "A<sup>#</sup>3",
          mname: "A#3",
          kname: "↑y",
          kactive:""
        },
        {
          kcolor: "wk",
          hname: "B3",
          mname: "B3",
          kname: "u",
          kactive:""
        },
        {
          kcolor: "wk",
          hname: "C4",
          mname: "C4",
          kname: "a",
          kactive:""
        },
        {
          kcolor: "bk",
          hname: "C<sup>#</sup>4",
          mname: "C#4",
          kname: "↑a",
          kactive:""
        },
        {
          kcolor: "wk",
          hname: "D4",
          mname: "D4",
          kname: "s",
          kactive:""
        },
        {
          kcolor: "bk",
          hname: "D<sup>#</sup>4",
          mname: "D#4",
          kname: "↑s",
          kactive:""
        },
        {
          kcolor: "wk",
          hname: "E4",
          mname: "E4",
          kname: "d",
          kactive:""
        },
        {
          kcolor: "wk",
          hname: "F4",
          mname: "F4",
          kname: "f",
          kactive:""
        },
        {
          kcolor: "bk",
          hname: "F<sup>#</sup>4",
          mname: "F#4",
          kname: "↑f",
          kactive:""
        },
        {
          kcolor: "wk",
          hname: "G4",
          mname: "G4",
          kname: "g",
          kactive:""
        },
        {
          kcolor: "bk",
          hname: "G<sup>#</sup>4",
          mname: "G#4",
          kname: "↑g",
          kactive:""
        },
        {
          kcolor: "wk",
          hname: "A4",
          mname: "A4",
          kname: "h",
          kactive:""
        },
        {
          kcolor: "bk",
          hname: "A<sup>#</sup>4",
          mname: "A#4",
          kname: "↑h",
          kactive:""
        },
        {
          kcolor: "wk",
          hname: "B4",
          mname: "B4",
          kname: "j",
          kactive:""
        },
        {
          kcolor: "wk",
          hname: "C5",
          mname: "C5",
          kname: "z",
          kactive:""
        },
        {
          kcolor: "bk",
          hname: "C<sup>#</sup>5",
          mname: "C#5",
          kname: "↑z",
          kactive:""
        },
        {
          kcolor: "wk",
          hname: "D5",
          mname: "D5",
          kname: "x",
          kactive:""
        },
        {
          kcolor: "bk",
          hname: "D<sup>#</sup>5",
          mname: "D#5",
          kname: "↑x",
          kactive:""
        },
        {
          kcolor: "wk",
          hname: "E5",
          mname: "E5",
          kname: "c",
          kactive:""
        },
        {
          kcolor: "wk",
          hname: "F5",
          mname: "F5",
          kname: "v",
          kactive:""
        },
        {
          kcolor: "bk",
          hname: "F<sup>#</sup>5",
          mname: "F#5",
          kname: "↑v",
          kactive:""
        },
        {
          kcolor: "wk",
          hname: "G5",
          mname: "G5",
          kname: "b",
          kactive:""
        },
        {
          kcolor: "bk",
          hname: "G<sup>#</sup>5",
          mname: "G#5",
          kname: "↑b",
          kactive:""
        },
        {
          kcolor: "wk",
          hname: "A5",
          mname: "A5",
          kname: "n",
          kactive:""
        },
        {
          kcolor: "bk",
          hname: "A<sup>#</sup>5",
          mname: "A#5",
          kname: "↑n",
          kactive:""
        },
        {
          kcolor: "wk",
          hname: "B5",
          mname: "B5",
          kname: "m",
          kactive:""
        }
      ]
    };
  },
  created() {
    var _this = this;
    document.onkeydown = function(e) {
      let key = window.event.keyCode;
      if (e.shiftKey) {
        if (key == 81) {let key=_this.keys[1];_this.kstar(key);_this.start(key)}
        if (key == 87) {let key=_this.keys[3];_this.kstar(key);_this.start(key)}
        if (key == 82) {let key=_this.keys[6];_this.kstar(key);_this.start(key)}
        if (key == 84) {let key=_this.keys[8];_this.kstar(key);_this.start(key)}
        if (key == 89) {let key=_this.keys[10];_this.kstar(key);_this.start(key)}

        if (key == 65) {let key=_this.keys[13];_this.kstar(key);_this.start(key)}
        if (key == 83) {let key=_this.keys[15];_this.kstar(key);_this.start(key)}
        if (key == 70) {let key=_this.keys[18];_this.kstar(key);_this.start(key)}
        if (key == 71) {let key=_this.keys[20];_this.kstar(key);_this.start(key)}
        if (key == 72) {let key=_this.keys[22];_this.kstar(key);_this.start(key)}

        if (key == 90) {let key=_this.keys[25];_this.kstar(key);_this.start(key)}
        if (key == 88) {let key=_this.keys[27];_this.kstar(key);_this.start(key)}
        if (key == 86) {let key=_this.keys[30];_this.kstar(key);_this.start(key)}
        if (key == 66) {let key=_this.keys[32];_this.kstar(key);_this.start(key)}
        if (key == 78) {let key=_this.keys[34];_this.kstar(key);_this.start(key)}
      } else {
        if (key == 81) {let key=_this.keys[0];_this.kstar(key);_this.start(key)}
        if (key == 87) {let key=_this.keys[2];_this.kstar(key);_this.start(key)}
        if (key == 69) {let key=_this.keys[4];_this.kstar(key);_this.start(key)}
        if (key == 82) {let key=_this.keys[5];_this.kstar(key);_this.start(key)}
        if (key == 84) {let key=_this.keys[7];_this.kstar(key);_this.start(key)}
        if (key == 89) {let key=_this.keys[9];_this.kstar(key);_this.start(key)}
        if (key == 85) {let key=_this.keys[11];_this.kstar(key);_this.start(key)}

        if (key == 65) {let key=_this.keys[12];_this.kstar(key);_this.start(key)}
        if (key == 83) {let key=_this.keys[14];_this.kstar(key);_this.start(key)}
        if (key == 68) {let key=_this.keys[16];_this.kstar(key);_this.start(key)}
        if (key == 70) {let key=_this.keys[17];_this.kstar(key);_this.start(key)}
        if (key == 71) {let key=_this.keys[19];_this.kstar(key);_this.start(key)}
        if (key == 72) {let key=_this.keys[21];_this.kstar(key);_this.start(key)}
        if (key == 74) {let key=_this.keys[23];_this.kstar(key);_this.start(key)}

        if (key == 90) {let key=_this.keys[24];_this.kstar(key);_this.start(key)}
        if (key == 88) {let key=_this.keys[26];_this.kstar(key);_this.start(key)}
        if (key == 67) {let key=_this.keys[28];_this.kstar(key);_this.start(key)}
        if (key == 86) {let key=_this.keys[29];_this.kstar(key);_this.start(key)}
        if (key == 66) {let key=_this.keys[31];_this.kstar(key);_this.start(key)}
        if (key == 78) {let key=_this.keys[33];_this.kstar(key);_this.start(key)}
        if (key == 77) {let key=_this.keys[35];_this.kstar(key);_this.start(key)}
      }
    };
    document.onkeyup = function(e) {
      let key = window.event.keyCode;
        if (key == 81) {_this.kstop(_this.keys[1])}
        if (key == 87) {_this.kstop(_this.keys[3]);}
        if (key == 82) {_this.kstop(_this.keys[6]);}
        if (key == 84) {_this.kstop(_this.keys[8]);}
        if (key == 89) {_this.kstop(_this.keys[10]);}

        if (key == 65) {_this.kstop(_this.keys[13])}
        if (key == 83) {_this.kstop(_this.keys[15]);}
        if (key == 70) {_this.kstop(_this.keys[18]);}
        if (key == 71) {_this.kstop(_this.keys[20]);}
        if (key == 72) {_this.kstop(_this.keys[22]);}

        if (key == 90) {_this.kstop(_this.keys[25])}
        if (key == 88) {_this.kstop(_this.keys[27]);}
        if (key == 86) {_this.kstop(_this.keys[30]);}
        if (key == 66) {_this.kstop(_this.keys[32]);}
        if (key == 78) {_this.kstop(_this.keys[34]);}

        if (key == 81) {_this.kstop(_this.keys[0]);}
        if (key == 87) {_this.kstop(_this.keys[2]);}
        if (key == 69) {_this.kstop(_this.keys[4]);}
        if (key == 82) {_this.kstop(_this.keys[5]);}
        if (key == 84) {_this.kstop(_this.keys[7]);}
        if (key == 89) {_this.kstop(_this.keys[9]);}
        if (key == 85) {_this.kstop(_this.keys[11]);}

        if (key == 65) {_this.kstop(_this.keys[12]);}
        if (key == 83) {_this.kstop(_this.keys[14]);}
        if (key == 68) {_this.kstop(_this.keys[16]);}
        if (key == 70) {_this.kstop(_this.keys[17]);}
        if (key == 71) {_this.kstop(_this.keys[19]);}
        if (key == 72) {_this.kstop(_this.keys[21]);}
        if (key == 74) {_this.kstop(_this.keys[23]);}

        if (key == 90) {_this.kstop(_this.keys[24]);}
        if (key == 88) {_this.kstop(_this.keys[26]);}
        if (key == 67) {_this.kstop(_this.keys[28]);}
        if (key == 86) {_this.kstop(_this.keys[29]);}
        if (key == 66) {_this.kstop(_this.keys[31]);}
        if (key == 78) {_this.kstop(_this.keys[33]);}
        if (key == 77) {_this.kstop(_this.keys[35]);}
    };
  },
  methods: {
    start: function(skey) {
      var synth = new Tone.Synth({
        envelope: {
          attack: 0,
          decay: 1,
          sustain: 0.1,
          release: 1
        }
      }).toMaster();
      synth.triggerAttackRelease(skey.mname, "4n");
    },
    kstar: function(skey) {
      skey.kactive = "#4d4d4d";
    },
    kstop: function(skey) {
      skey.kactive = "";
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
