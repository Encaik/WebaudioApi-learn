<template>
  <div id="app">
    <Header/>
    <piano/>
    <Music/>
    <Footer/>
  </div>
</template>

<script>
import Piano from "./components/Piano";
import Header from "./components/header";
import Footer from "./components/footer";
import Music from "./components/music";

export default {
  name: "app",
  components: {
    Piano,
    Header,
    Footer,
    Music
  },
};
</script>

<style>
body {
  margin: 0 auto;
  padding: 0;
  background-image: url('./assets/img/timg.jpg');
  background-size: 100%;
}
</style>