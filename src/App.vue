<template>
  <div id="app">
    <router-view class="router-view" />
  </div>
</template>

<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  .router-view {
    flex: 1;
    overflow: auto;
    display: flex;
    flex-direction: column;
  }
}
</style>
