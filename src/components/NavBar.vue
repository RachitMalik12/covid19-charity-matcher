<template>
  <el-menu :default-active="activeIndex" @select="handleSelect" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1">Help daily wage workers</el-menu-item>
    <el-menu-item index="2">Find your local charity</el-menu-item>
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
            break;
          case "2":
            this.$router.push({name:"Local"})
            break;
          default:
            this.$router.push({name:"Home"})
        }
      }
}
}
</script>

<style  scoped>

.el-menu {
  border-right: 100 !important; 
}
  
</style>