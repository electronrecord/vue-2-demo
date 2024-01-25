<template>
  <header class="main-header p-24">
    <span>Logo</span>

    <button @click="alert({msg: 'some msg'})">Click Me!</button>

    <nav>
      <router-link v-for="item in menu"
                   :to="item.route">
        {{ item.name }}
      </router-link>
    </nav>
  </header>
</template>

<script>
  export default {
    data () {
      return {
        value: 0,
        menu: [
          {name: 'Home', route: '/home'},
          {name: 'About', route: '/about'},
          {name: 'Profile', route: '/profile'},
          {name: 'Login', route: '/login'},
        ]
      }
    },
    mounted() {

    },
    destroyed() {

    },
    methods: {
      alert ({msg}) {
        window.alert(msg)
      }
    }
  }
</script>

<style lang="scss">
  .main-header {
    @media only screen and (min-width: 0) {
      top: 0;
      left: 0;
      width: 100%;
      position: fixed;
      height: 62px;
      display: flex;
      justify-content: space-between;
      background-color: lightgray;
      nav a {
        &:not(:last-child) {
          margin-right: 16px;
        }
      }
    }
  }
</style>

