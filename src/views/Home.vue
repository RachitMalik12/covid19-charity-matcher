<template>
  <div class="home">
    <h1>COVID-19 charity match - we connect you to charities you can donate to provide relief for COVID-19 </h1>
    <h2> Do your part to help daily wage workers in India! </h2>
    <p> Nearly 90% of India’s workforce belongs to the informal sector. That means, about 450 million Indians depend on daily wages to run their household.(1)

    With the recent lockdowns in light of the Covid-19 pandemic, almost all of us have quickly adapted to working from home, while a large part of our community has been going to bed without knowing if they will be able to afford a meal for their family the next day. Workers at construction sites, shops, restaurants, delivery staff and local transport systems, the daily wager community has seen their only source of income come to a screeching halt, leaving them with no means to earn themselves a meal during these days of lockdown. Hunger and desperation prevails, and we can do something to help our fellow citizens.
    </p>
    <p> Find a list of charities dedicated to helping daily wage workers in the Indian subcontinent below and simply click to donate!  </p>
    <p> If you are not in India and want to donate to other causes </p> 
    <el-button type="primary" round> Click here! </el-button>
    <CharityList/>
  </div>
</template>

<script>
// @ is an alias to /src
import CharityList from '../components/CharityList'
export default {
  name: 'Home',
  components: {
    CharityList
  }
}
</script>
