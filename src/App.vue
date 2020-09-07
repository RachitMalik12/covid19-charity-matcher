<template>
<el-container> 
  <AuthApp v-if ="user.loggedIn"/> 
  </el-container>
</template>

<script>

// import LandingPage from './views/LandingPage'
import AuthApp from './AuthApp'
import { mapGetters } from "vuex";
export default {
  name: 'app',
  components: {
    // LandingPage, 
    AuthApp 
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
