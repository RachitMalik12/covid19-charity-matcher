<template>
<el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{charity.charityName}}</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click ="handleClick"> Donate!</el-button>
    </div>
  </el-card>
     
</template>

<script>
export default {
    name: "WorldWideCharityItem",
    props: ["charity"],
    methods: {
        handleClick(){
          const win = window.open(this.charity.charityNavigatorURL)
          win.focus()
        }
    }
}
</script>

<style scoped>
   .charity-item {
       background: #f4f4f4;
       padding: 10px; 
       margin-bottom: 2px; 
       border-bottom: 1px #ccc;
   }

   .el-button {
       cursor: pointer; 
       float: right; 
   }
   .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    height: 100px; 
  }
</style>