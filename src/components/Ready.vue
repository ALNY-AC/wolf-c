<template>
  <div class="ready">
    <div class="btn" @click="ready">准备</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Ready extends Vue {
  @Prop() private msg!: string;
  ready() {
    this.$emit("ready");
  }
}
</script>

<style scoped lang="scss">
.ready {
  position: absolute;
  z-index: 3000;
  width: 100vw;
  height: 100vh;
  background-color: rgba($color: #000000, $alpha: 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  .btn {
    width: 70%;
    background-color: #fff;
    text-align: center;
    padding: 15px;
  }
}
</style>
