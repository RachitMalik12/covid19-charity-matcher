<template>
<el-container>
  <el-menu :default-active="activeIndex" @select="handleSelect" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1">Help daily wage workers</el-menu-item>
    <el-menu-item index="2">Find a charity in the US</el-menu-item>
    <el-menu-item index="3">My saved charities</el-menu-item>
     
  </el-menu>
  <!-- <el-button type = "text" @click="handleSignOut"> Sign Out </el-button> -->
</el-container>
 
</template>

<script>

import firebase from "firebase";
export default {
     name: 'NavBar',
     data(){
         return {
             activeIndex:'1'
         }
     },
    methods: {
      handleSelect(key) {
        switch(key) {
          case "1":
            this.$router.push({name:"Home"})
            this.activeIndex = "1"
            break;
          case "2":
            this.$router.push({name:"Local"})
            this.activeIndex = "2"
            break;
          case "3":
            this.$router.push({name: "MyCharities"})
            this.activeIndex = "3"
            break; 
          default:
            this.$router.push({name:"Home"})
            this.activeIndex = "1"
        }
      }, 
      handleSignOut() {
              firebase
        .auth()
        .signOut()
        .then(() => {
        });
    }
      }


}
</script>

<style scoped>

.el-menu {
  border-right: 100 !important; 
}
  
</style>