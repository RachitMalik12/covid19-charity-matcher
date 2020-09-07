<template>
 <div class="local">
        <el-row :gutter="20" >
            <el-col :span="24">
                <div class="grid-content bg-purple">
                   <h1 class="h1"> Your saved charities </h1> 
                   <el-button v-loading.fullscreen.lock="loading" type="primary" @click="getData"> Click to view </el-button>
                </div>
            </el-col>
        </el-row>
        <el-row> 
            <el-col :span="24" v-for = "city in cities" v-bind:key = "city.id">
                <WorldWideCharityItem v-bind:save= "false" v-bind:charity = "city"/>
            </el-col>
        </el-row>

    </div>
</template>

<script>
import {db} from '../main'
import { mapGetters } from "vuex";
import WorldWideCharityItem from '../components/WorldWideCharityItem'
export default {
    name:'MyCharities',
    components:  {
        WorldWideCharityItem
    }, 
    data() {
        return {
            cities: [],
            loading: false, 
        }
    }, 
     computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
  getData() {
      const snapshot = db.collection('charities').doc(this.user.data.id).
      collection('mycharities').get()
      this.loading = true 
      snapshot.then((querySnapshot) => {
         querySnapshot.forEach(doc => {
             this.cities.push( { id: doc.id, ... doc.data()})
             this.loading = false 

         })
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
    .h1 {
  font-size: 30px; 
 }
</style>