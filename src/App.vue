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
    <div class="sub-app-wrapper" v-for="(item, index) in subAppList" :key="index">
      <sub-app :id="item.id" :src="item.src"></sub-app>
    </div>
  </div>
</template>

<script>
import subApp from '@/components/subApp.vue'
import subAppConfig from '@/sub-app-config'

export default {
  data() {
    return {
      subAppList: subAppConfig.subAppList
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.$router.push(key)
    }
  },
  components: {
    subApp
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
