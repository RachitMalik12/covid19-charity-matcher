<template>
    <div class="local">
        <el-row :gutter="20">
            <el-col :span="12" :offset="6">
                <div class="grid-content bg-purple">
                    <h3>Enter name of your city (US only)</h3>
                    <el-autocomplete placeholder="Please input" v-model="searchCity" :trigger-on-focus="false" :fetch-suggestions="querySearchAsync" @select="handleSearch"></el-autocomplete>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'local',
  data() {
      return {
          searchCity: "",
          cities: "",
          timeout:  null
      }
  },
  methods: {
      querySearchAsync(queryString, cb) {
        var cities = this.cities;
        var results = queryString ? cities.filter(this.createFilter(queryString)) : cities;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
          console.log(results);
        }, 3000 * Math.random());
      },
      createFilter(queryString) {
        return (city) => {
          return (city.city.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSearch(city) {
        axios
            .get('https://api.data.charitynavigator.org/v2/Organizations?app_id=90472cd5&app_key=410891f19ebea8184b78cba11ff58064&city='+city)
            .then(response => console.log(response))
      }
  },
  mounted () {
      this.cities = require("../assets/usa_cities.json");
      console.log(this.cities);
  }
}
</script>

<style scoped>
    .grid-content {
        text-align: center;
    }
</style>