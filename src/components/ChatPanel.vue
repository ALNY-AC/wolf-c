<template>
  <div class="chat-panel">
    <div class="msg-list-box">
      <div class="msg-item" v-for="i in 10" :key="i">
        <div class="msg-box">
          <span class="user-number">{{i}}号</span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit?
        </div>
      </div>
    </div>
    <textarea placeholder="在此发言" v-model="msg" name id rows="5"></textarea>
    <button :disabled="mode!=myInfo.role" class="submit-btn" @click="submit">发送</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ChatPanel extends Vue {
  @Prop() private mode!: Number; //模式
  @Prop() private myInfo!: any; //当前用户自己的信息
  msg = "";
  msgList = [];
  init() {}
  submit() {
    this.msg = "";
  }
  mounted() {}
}
</script>

<style scoped lang="scss">
.chat-panel {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  // background-color: #f0f0f0;
  padding: 10px;
  flex: 1;
  .msg-list-box {
    flex: 1;
    overflow: auto;

    .msg-item {
      display: flex;
      margin-bottom: 10px;
      .user-number {
        color: #fff;
        background-color: rgb(222, 125, 44);
        border: solid 1px rgb(222, 125, 44);
        border-radius: 100%;
        font-size: 11px;
        display: inline-block;
        padding: 2px 3px;
      }
      .msg-box {
        font-size: 11px;
        background-color: rgb(250, 218, 141);
        color: rgb(222, 125, 44);
        padding: 10px;
        border-radius: 5px;
      }
    }
  }
  textarea {
    border: dashed 1px rgb(222, 125, 44);
    // border: none;
    border-radius: 0;
    display: block;
    font-size: 14px;
    padding: 5px;
    box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.2);
    background-color: rgba($color: #000000, $alpha: 0.2);
    z-index: 2;
    margin-bottom: 10px;
    -webkit-appearance: none;
    appearance: none;
    color: #fff;
  }
  .submit-btn {
    border: none;
    border-radius: 0;
    margin: 0;
    position: relative;
    border: none;
    background-color: #fff;
    outline: none;
    font-size: 14px;
    padding: 15px 20px;
    z-index: 3;
    box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.2);
    background-color: rgba($color: #000000, $alpha: 0.2);
    color: #fff;
    transition: all 0.3s;
    user-select: none;
    &:active {
      background-color: rgba($color: #000000, $alpha: 0.5);
    }
    &[disabled] {
      // color: transparent;
      background-color: #000000;
      background-image: repeating-linear-gradient(
        -30deg,
        #ff0,
        #ff0 15px,
        transparent 0,
        transparent 30px
      );
    }
  }
}
</style>
