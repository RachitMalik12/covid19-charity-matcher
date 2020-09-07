<template>
<el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{charity.charityName}}</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click ="handleClick"> Learn More and Donate!</el-button>
        <el-button v-if="save" style="float: right; padding: 3px 16px" type="text" @click="handleSave"> Save charity </el-button>
    </div>
  </el-card>
     
</template>

<script>
import {db} from '../main'
import { mapGetters } from "vuex";
import {v4 as uuidv4} from 'uuid'; 
export default {
    name: "WorldWideCharityItem",
    props: ["charity", "save"],
    computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
    methods: {
        handleClick(){
          const win = window.open(this.charity.charityNavigatorURL)
          win.focus()
        },
        handleSave() {
          const userRef = db.collection('charities').doc(this.user.data.id) 
          const myCharitiesRef = userRef.collection('mycharities').doc(uuidv4())
          myCharitiesRef.set({
            charityName: this.charity.charityName, 
            charityNavigatorURL: this.charity.charityNavigatorURL
          }).
          then(() => {
            this.$notify({
              title:"Successfully saved charity", 
              message: 'Click my charities to view all your saved charities',
              type: 'success'

            }).
            catch((err) => {
              this.$$notify.error({
                title: "Could not save charity", 
                message: err.message
              })
            })

          })
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