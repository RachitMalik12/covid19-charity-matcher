<template>
<div>
  <el-row>
    <el-col :span = "24" >
    <h1 class="h1">COVID-19 Charity Matcher</h1>
    <h3> The one place to find all charities, giving you the means to help out during this crisis. </h3> 
    <el-image :src = "url" :fit = "fit"/>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span = "24">
    <h1 class="h1"> Do your part to help daily wage workers in India! </h1>
    <p class = "p"> Nearly 90% of India’s workforce belongs to the informal sector. 
      About 450 million Indians depend on daily wages to run their household
      With the recent lockdowns in India, while most of us have adapted to working from home, the income of these daily wage workers have come to a halt. 
      They now have a no way of getting food on their table.
    </p>
    <p class = "p"> You can help out by donating!</p>
    <p class = "p"> If you want to help out by donating in the new center of the pandemic the US: </p> 
    <el-button type="primary" round @click = "$router.push('/local')"> Click here! </el-button>
    </el-col>
  </el-row>
    <CharityList/>
</div>
</template>

<script>
// @ is an alias to /src
import CharityList from '../components/CharityList'
import image from '../assets/1295065.png'
export default {
  name: 'Home',
  components: {
    CharityList
  },
  data() {
    return {
    url: image,
    fit: "contain"
    }
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
