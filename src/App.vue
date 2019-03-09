<template>
  <div id="app">
    <nav>
      <div class="container">
        <h1 class="logo">Home<span>Cook</span></h1>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("./styles/normalize.scss");

* {
  box-sizing: border-box;
}

#app {
  position: relative;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

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

  .container {
    max-width: 964px;
    margin: 0 auto;
  }
}
</style>
