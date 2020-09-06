<template>
  <el-container>
    <el-header>
    <NavBar v-if= "user"/>
    <Register v-if="!user"/>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>

import NavBar from './components/NavBar'
import { mapGetters } from "vuex";
export default {
  name: 'app',
  components: {
    NavBar,
  }, 
   computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  }

}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.el-main {
  background: #F2F6FC;
}

</style>
