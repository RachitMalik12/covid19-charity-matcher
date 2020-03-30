<template>
    <div class="local">
        <el-row :gutter="20" >
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <el-input placeholder="Enter city (US-only)" v-model="searchCity"></el-input>
                </div>
            </el-col>
            <el-col :span="12">
                <el-button type="primary" @click="handleSearch"> Search </el-button>
            </el-col> 
        </el-row>
        <el-row> 
            <el-col :span="24" v-for = "city in cities" v-bind:key = "city.orgID">
                <WorldWideCharityItem v-bind:charity = "city"/>
            </el-col>
        </el-row>

    </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import WorldWideCharityItem from '../components/WorldWideCharityItem'
export default {
  name: 'local',
  data() {
      return {
          searchCity: "",
          cities: [],
          error: '', 
          timeout:  null
      }
  },
  components:{
      WorldWideCharityItem
  },
  methods: {
      handleSearch() {
        axios
            .get('https://api.data.charitynavigator.org/v2/Organizations?app_id=90472cd5&app_key=410891f19ebea8184b78cba11ff58064&city='+ this.searchCity)
            .then(response => this.cities = response.data)
            .catch(err => this.handleError(err))
      },
      handleError(err) {
          if (err.message === "Request failed with status code 404") {
              this.error = `Could not find city: ${this.searchCity}`
          }
          else {
              this.error = err.message
          }
          this.$message.error({
                showClose: true, 
                title: 'Sorry, something went wrong',
               message: this.error
        })
    }
  }

}
</script>

<style scoped>
    .grid-content {
        text-align: center;
    }
    .el-col {
        margin-bottom: 20px; 
    } 
</style>