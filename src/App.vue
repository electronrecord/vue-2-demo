<template>
  <div id="app">
    <MainHeader />
    <div class="router-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";

export default {
  components: {
    MainHeader
  }
}
</script>

<style lang="scss">
  html,
  body,
  #app {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 62.5%;
  }

  * {
    box-sizing: border-box;
  }

  .p-24 {
    padding: 24px;
  }

  .router-content {
    padding-top: 72px;
    h1 {
      text-align: center;
    }
  }
</style>
