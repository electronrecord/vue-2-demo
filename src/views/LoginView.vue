<template>
  <main class="login-view">
    <h1>Login</h1>

    <p v-if="requestState === 'sending'">Request is sending ...</p>

    <form v-else
          @submit.prevent="handleSubmit">
      <label for="email">
        <span>email:</span>
        <input id="email"
               type="text"
               v-model="form.email"
               placeholder="email" />
      </label>

      <label for="password">
        <span>password:</span>
        <input id="password"
               type="password"
               v-model="form.password"
               placeholder="password" />
      </label>

      <button>Login</button>
    </form>
  </main>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          email: '',
          password: '',
        }
      }
    },
    created () {

    },
    mounted() {
      // randat - acces la HTML
    },
    computed: {
      requestState () {
        return this.$store.state.requestState
      }
    },
    methods: {
      handleSubmit () {
        this.$store.dispatch('login', this.form)
      }
    },
    destroyed() {

    }
  }
</script>

<style lang="scss">
  .login-view {
    @media only screen and (min-width: 0) {
      p {
        text-align: center;
      }
      form {
        max-width: 400px;
        margin: 0 auto;
        label {
          display: block;
          margin-bottom: 16px;
          span {
            display: block;
            margin-bottom: 4px;
          }
          input {
            padding: 4px 8px;
            width: 100%;
          }
        }
      }
    }
  }
</style>