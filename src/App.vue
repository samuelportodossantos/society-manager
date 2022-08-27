<template>
<div>
  <nav v-if="$route.name != 'login'">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }
  body {
    background-color: #320742;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  a {
    text-decoration: none;
    font-family: Inter Regular;
    color: #09f;
    font-size: 14px;
  }

  @font-face {
    font-family: Julius Sans One Regular;
    src: url('@/assets/fonts/JuliusSansOne-Regular.ttf');
  }

  @font-face {
    font-family: Inter Regular;
    src: url('@/assets/fonts/Inter-Regular.ttf');
  }

</style>
