<template>
  <div class="user-card">
    <div class="number">
      <slot name="number">{{number}}</slot>
    </div>
    <img class="user-img" :src="head" v-if="head" />
    <div class="user-img" v-else></div>
    <div class="user-name">{{name}}</div>
    <div class="user-role" v-if="isMode">{{role_text}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class UserCard extends Vue {
  @Prop() private number!: Number;
  @Prop() private info!: any;
  @Prop() private mode!: Number; //模式
  @Prop() private myInfo!: any; //当前用户自己的信息
  get name() {
    return this.info ? this.info.name : "";
  }
  get role_text() {
    return this.info ? this.info.role_text : "";
  }
  get head() {
    return this.info ? this.info.head : "";
  }
  get isMode() {
    if (this.info && this.myInfo) {
      if (this.info.role == this.myInfo.role) {
        return true;
      }
    }
    return false;
  }
}
</script>

<style scoped lang="scss">
.user-card {
  width: 50px;
  margin-bottom: 10px;
  max-width: 50px;
  position: relative;
  .number {
    position: absolute;
    background-color: rgb(20, 68, 106);
    border: solid 1px rgb(3, 38, 58);
    color: #fff;
    border-radius: 100%;
    font-size: 11px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: normal;
    left: -5px;
    top: -5px;
  }
  .user-img {
    width: 100%;
    max-width: 100%;
    height: 50px;
    border-radius: 10px;
    background-color: rgb(3, 38, 58);
    border: none;
  }
  .user-role {
    position: absolute;
    border-radius: 100%;
    font-size: 20px;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: normal;
    right: -5px;
    top: -10px;
  }
  .user-name {
    font-size: 11px;
    color: #fff;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>
