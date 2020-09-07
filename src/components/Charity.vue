<template>
     <el-card :body-style="{ padding: '0px' }" class = "card">
        <img :src = "imageUrl" class="image">
        <div style="padding: 14px; position:relative; height:70px;">
                <span>{{title}}</span>
        <div style ="position: absolute; bottom:0">
          <el-button @click="openDonationLink()" type="text"> Click to donate</el-button>
          <el-button @click="openLearnMoreLink()" type = "text"> Learn More </el-button>
          <el-button type="text" @click="onSaveCharity()"> Save charity </el-button>

        </div>
      </div>
     </el-card>
</template>

<script>
import {db} from '../main'
import { mapGetters } from "vuex";
import {v4 as uuidv4} from 'uuid'; 


export default {
    name: "Charity",
    props: ["id", "imageUrl", "donateNowUrl", "learnMoreUrl", "title"],
    computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
    methods: {
        openDonationLink() {
            const win = window.open(this.donateNowUrl)
            win.focus()
        },
        openLearnMoreLink(){
            const win = window.open(this.learnMoreUrl)
            win.focus()
        }, 
        onSaveCharity(){
          const userRef = db.collection('charities').doc(this.user.data.email) 
          const myCharitiesRef = userRef.collection('mycharities').doc(uuidv4())
          myCharitiesRef.set({
            charityName: this.title, 
            charityNavigatorURL: this.learnMoreUrl
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

<style >
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
    margin: 0 auto;
     width: 656px; 
     text-align: center;
  }

  .el-button {
    margin-right: 20px; 
}

.span {
    margin-bottom: 20px;
}

  .image {
    width: 100%;
    height: 299.83px; 
    display: block;
  }

  .card {
      width: 400px;
      height: 400px;
  }
</style>