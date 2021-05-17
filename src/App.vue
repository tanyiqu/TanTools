<template>
  <div id="app">
    <div id="header">
      <div class="logo">
        <p class="desc">TanTools - 又是一个便捷的在线工具网站</p>
      </div>
    </div>
    <div id="content">
      <router-view />
    </div>
    <div id="footer" @click="toTanyiqu">Code by tanyiqu</div>
  </div>
</template>

<script>
export default {
  methods: {
    toTanyiqu() {
      window.open('https://github.com/tanyiqu', '_blank');
    }
  },
}
</script>

<style lang="less">
@header_height: 50px;
@footer_height: 30px;

#app {
  height: 100%;
  width: 100%;

  #header {
    position: fixed;
    top: 0;
    width: 100%;
    height: @header_height;
    background: #fff;
    box-shadow: 0 2px 4px -1px #cccccc;
    display: flex;
    align-items: center;

    .logo {
      display: flex;
      align-items: center;

      .img {
      }

      .desc {
        position: absolute;
        right: 20px;
      }
    }
  }

  #content {
    padding-top: @header_height;
    padding-bottom: @footer_height;
  }

  #footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: @footer_height;
    background: #fff;
    box-shadow: 0 -1px 2px #dddddd;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>
