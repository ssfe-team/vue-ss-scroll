<template>
  <div>
    <div class="scrollshow">x: {{x}}, y: {{y}}</div>
    <div class="scrollWrap" v-ss-scroll="onScroll">
      <div class="scrollContent"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      x: 0,
      y: 0
    }
  },
  methods: {
    onScroll: function(e, position) {
      this.x = position.scrollLeft;
      this.y = position.scrollTop;
      console.log(position);
    }
  }
}
</script>

<style>
  html, body{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  .scrollWrap {
    width: 500px;
    height: 500px;
    margin: 0 auto;
    overflow: auto;
    background-color: red;
  }
  .scrollContent {
    width: 1000px;
    height: 1000px;
  }
</style>
