<template>
  <div class="app">
    <el-menu
      default-active="1"
      class="nav"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">Module A</span>
      </el-menu-item>
      <el-menu-item index="2" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">Module B</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">Module C</span>
      </el-menu-item>
    </el-menu>
    <router-view />
  </div>
</template>

<style lang="scss">
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .nav {
    width: 15vw;
    height: 100vh;
  }
}
</style>
