<template>

   
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">Help daily wage workers</el-menu-item>
            <el-menu-item index="2">Find your local charity</el-menu-item>
          </el-menu>
    

  
</template>

<script>
export default {
     name: 'NavBar',
     data(){
         return {
             activeIndex:'0'
         }
     },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
}
}
</script>

<style  scoped>

.el-menu {
  border-right: 100 !important; 
}
  
</style>