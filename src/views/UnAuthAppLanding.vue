<template>
<el-main> 
 <router-view></router-view>
</el-main>
</template>

<script>
// @ is an alias to /src
import image from '../assets/1295065.png'
export default {
  name: 'UnAuthAppLanding',
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
