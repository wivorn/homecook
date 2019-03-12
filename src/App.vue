<template>
  <div id="app">
    <nav>
      <div class="container">
        <router-link :to="{ path: '/' }">
          <h1 class="logo">Home<span>Cook</span></h1>
        </router-link>
      </div>
    </nav>
    <div class="page">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleFirstTab: function(e) {
      if (e.keyCode === 9) {
        document.body.classList.add('user-is-tabbing')
        window.removeEventListener('keydown', this.handleFirstTab)
      }
    },
  },
  mounted() {
    window.addEventListener('keydown', this.handleFirstTab)
  },
}
</script>


<style lang="scss">
@import url('./styles/normalize.scss');

*,
*:before,
*:after {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

html,
body,
.page {
  min-height: 100%;
  background: #f9f9f9;
}

body:not(.user-is-tabbing) {
  button:focus,
  input:focus,
  select:focus,
  textarea:focus {
    outline: none;
  }
}

button {
  border: 0;
  padding: 0;
  background: none;
  cursor: pointer;
}

#app {
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;

  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
    z-index: 10;
    text-align: center;
    box-shadow: 0 20px 50px -20px rgba(0, 0, 0, 0.1);
    padding: 16px;

    a {
      color: inherit;
      text-decoration: none;
    }

    .logo {
      margin: 0;
      font-size: 28px;
      letter-spacing: -1px;
      font-weight: normal;

      span {
        font-weight: bold;
      }
    }
  }

  .tag {
    display: inline-block;
    padding: 4px 8px;
    background: #f2f2f2;
    border-radius: 4px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.8);
    border: 1px solid #f2f2f2;

    &.time {
      background: white;
      border: 1px solid #bbb;
    }

    & + .tag {
      margin-left: 8px;
    }
  }
}
</style>
