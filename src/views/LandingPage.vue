<template>
  <div class="about">
      <el-row>
    <el-col :span = "24" >
    <h1 class="h1 animate__animated animate__fadeInLeft">COVID-19 Charity Matcher</h1>
    <h3> The one place to find all charities, giving you the means to help out during this crisis. </h3> 
    <el-image class="animate__animated animate__fadeInLeft" :src = "url" :fit = "fit"/>
    </el-col>
  </el-row>
  <el-row> 
    <el-col>
    <el-button type='primary' @click="openSignUp"> Sign up </el-button>
    <el-button type='primary'> Login </el-button>
    <router-view></router-view>
    </el-col>
  </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import image from '../assets/1295065.png'
export default {
  name: 'LandingPage',
  data() {
    return {
    url: image,
    fit: "contain"
    }
  },
  methods: {
      openSignUp() {
          this.$router.push('/register')
      },
  }
}
</script>

<style scoped>

.el-col {
   text-align: center;
   display: table; 
   margin-bottom: 10px; 
}

.el-image {
  width: 600px;
  height: 600px;
}
 .h1 {
  font-size: 50px; 
 }

 .p {
   font-size: 20px; 
 }
</style>
