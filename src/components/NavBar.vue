<template>
  <el-menu :default-active="activeIndex" @select="handleSelect" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1">Help daily wage workers</el-menu-item>
    <el-menu-item index="2">Find a charity in the US</el-menu-item>
    <el-menu-item index="3">My saved charities</el-menu-item>
  </el-menu>
</template>

<script>
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
          default:
            this.$router.push({name:"Home"})
            this.activeIndex = "1"
        }
      }
}
}
</script>

<style scoped>

.el-menu {
  border-right: 100 !important; 
}
  
</style>