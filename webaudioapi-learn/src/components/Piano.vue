<template>
  <div class="piano">
    <div class="k wk" v-html="keys[0].hname" @click="start(keys[0].mname)"></div>
    <div class="k bk" v-html="keys[1].hname" @click="start(keys[1].mname)"></div>
    <div class="k wk" v-html="keys[2].hname" @click="start(keys[2].mname)"></div>
    <div class="k bk" v-html="keys[3].hname" @click="start(keys[3].mname)"></div>
    <div class="k wk" v-html="keys[4].hname" @click="start(keys[4].mname)"></div>
    <div class="k wk" v-html="keys[5].hname" @click="start(keys[5].mname)"></div>
    <div class="k bk" v-html="keys[6].hname" @click="start(keys[6].mname)"></div>
    <div class="k wk" v-html="keys[7].hname" @click="start(keys[7].mname)"></div>
    <div class="k bk" v-html="keys[8].hname" @click="start(keys[8].mname)"></div>
    <div class="k wk" v-html="keys[9].hname" @click="start(keys[9].mname)"></div>
    <div class="k bk" v-html="keys[10].hname" @click="start(keys[10].mname)"></div>
    <div class="k wk" v-html="keys[11].hname" @click="start(keys[11].mname)"></div>

    <div class="k wk" v-html="keys[12].hname" @click="start(keys[12].mname)"></div>
    <div class="k bk" v-html="keys[13].hname" @click="start(keys[13].mname)"></div>
    <div class="k wk" v-html="keys[14].hname" @click="start(keys[14].mname)"></div>
    <div class="k bk" v-html="keys[15].hname" @click="start(keys[15].mname)"></div>
    <div class="k wk" v-html="keys[16].hname" @click="start(keys[16].mname)"></div>
    <div class="k wk" v-html="keys[17].hname" @click="start(keys[17].mname)"></div>
    <div class="k bk" v-html="keys[18].hname" @click="start(keys[18].mname)"></div>
    <div class="k wk" v-html="keys[19].hname" @click="start(keys[19].mname)"></div>
    <div class="k bk" v-html="keys[20].hname" @click="start(keys[20].mname)"></div>
    <div class="k wk" v-html="keys[21].hname" @click="start(keys[21].mname)"></div>
    <div class="k bk" v-html="keys[22].hname" @click="start(keys[22].mname)"></div>
    <div class="k wk" v-html="keys[23].hname" @click="start(keys[23].mname)"></div>

    <div class="k wk" v-html="keys[24].hname" @click="start(keys[24].mname)"></div>
    <div class="k bk" v-html="keys[25].hname" @click="start(keys[25].mname)"></div>
    <div class="k wk" v-html="keys[26].hname" @click="start(keys[26].mname)"></div>
    <div class="k bk" v-html="keys[27].hname" @click="start(keys[27].mname)"></div>
    <div class="k wk" v-html="keys[28].hname" @click="start(keys[28].mname)"></div>
    <div class="k wk" v-html="keys[29].hname" @click="start(keys[29].mname)"></div>
    <div class="k bk" v-html="keys[30].hname" @click="start(keys[30].mname)"></div>
    <div class="k wk" v-html="keys[31].hname" @click="start(keys[31].mname)"></div>
    <div class="k bk" v-html="keys[32].hname" @click="start(keys[32].mname)"></div>
    <div class="k wk" v-html="keys[33].hname" @click="start(keys[33].mname)"></div>
    <div class="k bk" v-html="keys[34].hname" @click="start(keys[34].mname)"></div>
    <div class="k wk" v-html="keys[35].hname" @click="start(keys[35].mname)"></div>
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
          hname: "C3",
          mname: "C3"
        },
        {
          hname: "C<sup>#</sup>3",
          mname: "C#3"
        },
        {
          hname: "D3",
          mname: "D3"
        },
        {
          hname: "D<sup>#</sup>3",
          mname: "D#3"
        },
        {
          hname: "E3",
          mname: "E3"
        },
        {
          hname: "F3",
          mname: "F3"
        },
        {
          hname: "F<sup>#</sup>3",
          mname: "F#3"
        },
        {
          hname: "G3",
          mname: "G3"
        },
        {
          hname: "G<sup>#</sup>3",
          mname: "G#3"
        },
        {
          hname: "A3",
          mname: "A3"
        },
        {
          hname: "A<sup>#</sup>3",
          mname: "A#3"
        },
        {
          hname: "B3",
          mname: "B3"
        },
        {
          hname: "C4",
          mname: "C4"
        },
        {
          hname: "C<sup>#</sup>4",
          mname: "C#4"
        },
        {
          hname: "D4",
          mname: "D4"
        },
        {
          hname: "D<sup>#</sup>4",
          mname: "D#4"
        },
        {
          hname: "E4",
          mname: "E4"
        },
        {
          hname: "F4",
          mname: "F4"
        },
        {
          hname: "F<sup>#</sup>4",
          mname: "F#4"
        },
        {
          hname: "G4",
          mname: "G4"
        },
        {
          hname: "G<sup>#</sup>4",
          mname: "G#4"
        },
        {
          hname: "A4",
          mname: "A4"
        },
        {
          hname: "A<sup>#</sup>4",
          mname: "A#4"
        },
        {
          hname: "B4",
          mname: "B4"
        },
        {
          hname: "C5",
          mname: "C5"
        },
        {
          hname: "C<sup>#</sup>5",
          mname: "C#5"
        },
        {
          hname: "D5",
          mname: "D5"
        },
        {
          hname: "D<sup>#</sup>5",
          mname: "D#5"
        },
        {
          hname: "E5",
          mname: "E5"
        },
        {
          hname: "F5",
          mname: "F5"
        },
        {
          hname: "F<sup>#</sup>5",
          mname: "F#5"
        },
        {
          hname: "G5",
          mname: "G5"
        },
        {
          hname: "G<sup>#</sup>5",
          mname: "G#5"
        },
        {
          hname: "A5",
          mname: "A5"
        },
        {
          hname: "A<sup>#</sup>5",
          mname: "A#5"
        },
        {
          hname: "B5",
          mname: "B5"
        }
      ]
    };
  },
  methods: {
    start(mname) {
      console.log(mname);
      var synth = new Tone.Synth({
        envelope  : {
        attack  : 0.01 ,
        decay  : 0.2 ,
        sustain  : 0.9 ,
        release  : 2
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
  border-radius: 0 0 0.3em 0.3em;
  text-align: center;
}
.wk {
  margin: 0 -0.05em;
  background-color: #fff;
  width: 4em;
  height: 20em;
  border: #000 solid 0.1em;
  z-index: 1;
  line-height: 37em;
}
.bk {
  margin: 0 -1.5em;
  background-color: #000;
  width: 3em;
  height: 13em;
  line-height: 22em;
  z-index: 2;
  color: #fff;
}
</style>
