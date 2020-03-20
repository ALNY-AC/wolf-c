
<template>
  <div id="zoom">
    <!-- <div class="header">
    </div>-->
    <!-- <ready @ready="ready" v-if="!isReady"></ready> -->
    <div class="body">
      <div class="left">
        <user-card
          v-for="(item,i) in userList"
          v-if="i <5"
          :key="item.number"
          :number="item.number+1"
          :info="item.userInfo"
          :mode="mode"
          :myInfo="myInfo"
        ></user-card>
      </div>
      <div class="center">
        <div class="zoom-id">房间：111111</div>
        <chat-panel :mode="mode" :myInfo="myInfo"></chat-panel>
        <div>
          <button @click="startTime(startGame)">开始</button>
          <div>模式：</div>
          <button @click="mode=1">1</button>
          <button @click="mode=2">2</button>
          <button @click="mode=3">3</button>
          <button @click="mode=4">4</button>
        </div>
      </div>
      <div class="right">
        <user-card
          v-for="(item,i) in userList"
          v-if="i >=5"
          :key="item.number"
          :number="item.number+1"
          :info="item.userInfo"
          :mode="mode"
          :myInfo="myInfo"
        ></user-card>
      </div>
    </div>
    <div class="footer">
      <div class="role-list">
        <div class="role-item">
          <div class="role-icon">🐺</div>
          <div class="role-value">:2</div>
        </div>
        <div class="role-item">
          <div class="role-icon">👴</div>
          <div class="role-value">:3</div>
        </div>
        <div class="role-item">
          <div class="role-icon">🧙‍♀️</div>
          <div class="role-value">:1</div>
        </div>
        <div class="role-item">
          <div class="role-icon">🧙‍♂️</div>
          <div class="role-value">:1</div>
        </div>
        <div class="role-item">
          <div class="role-icon">🏹️</div>
          <div class="role-value">:1</div>
        </div>
      </div>
    </div>
    <div class="g-label" v-if="showLabel">{{label}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import UserCard from "@/components/UserCard.vue";
import ChatPanel from "@/components/ChatPanel.vue";
import Ready from "@/components/Ready.vue";
import Game from "./Game";

import { Component, Prop, Vue } from "vue-property-decorator";

const game = new Game();

@Component({
  components: {
    UserCard,
    ChatPanel,
    Ready
  }
})
export default class Zoom extends Vue {
  isReady = false;
  showLabel = false;
  userList = [];
  time = 1;
  //0：--
  //1：狼人
  //2：女巫
  //3：预言家
  mode = 0;
  day = 1;
  label = "";
  myInfo = {
    role: 1,
    role_text: game.getRoleIcon(1),
    head: "",
    name: "我是人",
    number: 0
  };
  ready() {
    this.isReady = true;
  }
  mounted() {
    let userList = [
      {
        number: 0,
        userInfo: this.myInfo
      }
    ];

    for (let i = 2; i < 11; i++) {
      userList.push({
        number: i,
        userInfo: {
          role: i,
          role_text: game.getRoleIcon(i),
          head: "",
          name: `我是${i}`,
          number: i
        }
      });
    }
    this.userList = userList;
  }

  async startGame() {
    this.showTip(`游戏开始`);
    await game.timer(() => {
      this.showTip(`第${this.day}夜`);
    });

    await game.timer(() => {
      this.showTip(`狼人出没`);
      this.mode = 1;
    });

    await game.timer(() => {
      this.showTip(`狼人请选择`);
    });
    await game.timer(() => {
      this.headTip();
    });
  }
  
  showTip(text) {
    if (this.showLabel != true) {
      this.showLabel = true;
    }
    this.label = text;
  }
  headTip(text) {
    this.showLabel = false;
  }
  async startTime(fun = () => {}) {
    await game.timer((i, j) => {
      this.showTip(j);
    }, 1);
    await this.startGame();
  }
}
</script>
<style lang="scss" scoped>
#zoom {
  overflow: hidden;
  background-color: rgb(20, 68, 106);
  button {
    background-color: #fff;
  }
  .g-label {
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    text-shadow: 0 0 10px rgba($color: #000000, $alpha: 1);
    font-size: 40px;
    white-space: nowrap;
  }
  .role-list {
    display: flex;
    align-items: center;
    padding: 10px;
    // background-color: #f1f1f1;
    .role-item {
      width: 100px;
      display: flex;
      align-items: center;
      .role-icon {
      }
      .role-value {
        color: #fff;
      }
    }
  }
  .header {
    // background-color: #fff;
  }
  .zoom-id {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    background-color: rgba($color: #000000, $alpha: 0.3);
    box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.2);
    margin: 10px;
    margin-bottom: 0;
    color: rgb(222, 125, 44);
  }
  .body {
    flex: 1;
    display: flex;
    overflow: hidden;

    .left,
    .right {
      // box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.2);
      // background-color: #f0f0f0;

      z-index: 1;
    }
    .left {
      padding: 10px;
    }
    .center {
      flex: 1;
      // background-color: #f0f0f0;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .right {
      padding: 10px;
    }
  }
  .footer {
    z-index: 3;
  }
}
</style>
