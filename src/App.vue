<template>
  <div id="app">
    <div id="header">header</div>
    <div id="content">
      <router-view />
    </div>
    <div id="footer">footer</div>
  </div>
</template>

<style lang="less">
@header_height: 50px;
@footer_height: 38px;

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
  }
}
</style>
