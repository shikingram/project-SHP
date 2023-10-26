<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
// import axios from 'axios'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    this.$store.dispatch("categoryList");
    // axios.get('/mock/banner').then(function(response) {
    //   console.log(response.data);
    // });
  }
}
</script>

<style>

</style>
