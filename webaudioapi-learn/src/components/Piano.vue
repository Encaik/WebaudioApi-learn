<template>
  <div class="piano">
    <div class="k wk">C3</div>
    <div class="k bk">C<sup>#</sup>3</div>
    <div class="k wk">D3</div>
    <div class="k bk">D<sup>#</sup>3</div>
    <div class="k wk">E3</div>
    <div class="k wk">F3</div>
    <div class="k bk">f<sup>#</sup>3</div>
    <div class="k wk">G3</div>
    <div class="k bk">G<sup>#</sup>3</div>
    <div class="k wk">A3</div>
    <div class="k bk">A<sup>#</sup>3</div>
    <div class="k wk">B3</div>

    <div class="k wk">C4</div>
    <div class="k bk">C<sup>#</sup>4</div>
    <div class="k wk">D4</div>
    <div class="k bk">D<sup>#</sup>4</div>
    <div class="k wk">E4</div>
    <div class="k wk">F4</div>
    <div class="k bk">f<sup>#</sup>4</div>
    <div class="k wk">G4</div>
    <div class="k bk">G<sup>#</sup>4</div>
    <div class="k wk">A4</div>
    <div class="k bk">A<sup>#</sup>4</div>
    <div class="k wk">B4</div>

    <div class="k wk">C5</div>
    <div class="k bk">C<sup>#</sup>5</div>
    <div class="k wk">D5</div>
    <div class="k bk">D<sup>#</sup>5</div>
    <div class="k wk">E5</div>
    <div class="k wk">F5</div>
    <div class="k bk">f<sup>#</sup>5</div>
    <div class="k wk">G5</div>
    <div class="k bk">G<sup>#</sup>5</div>
    <div class="k wk">A5</div>
    <div class="k bk">A<sup>#</sup>5</div>
    <div class="k wk">B5</div>
  </div>
</template>

<script>
export default {};
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
