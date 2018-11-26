<template>
  <div class="app">
    <el-menu
      default-active="1"
      class="nav"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">Module A</span>
      </el-menu-item>
      <el-menu-item index="/b">
        <i class="el-icon-document"></i>
        <span slot="title">Module B</span>
      </el-menu-item>
      <el-menu-item index="/c">
        <i class="el-icon-setting"></i>
        <span slot="title">Module C</span>
      </el-menu-item>
    </el-menu>
    <div class="content-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleSelect (key, keyPath) {
      this.$router.push(key)
    }
  }
}
</script>

<style lang="scss">
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;

  .nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 15vw;
    height: 100vh;
  }

  .content-wrapper{
    position: absolute;
    top: 0;
    left: calc(15vw + 10px);
    height: 100vh;
  }
}
</style>
