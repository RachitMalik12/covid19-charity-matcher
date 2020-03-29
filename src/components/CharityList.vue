<template>
         <el-row>
             <el-col :span="4" v-for = "charity in charities.slice(0,3)"  v-bind:key = "charity.id" :offset= "charity.id > 0 ? 2 : 0">
               
                  <Charity v-bind:imageUrl = "charity.imageUrl" 
                         v-bind:title = "charity.title"
                         v-bind:donateNowUrl = "charity.donateNowUrl"
                         v-bind:learnMoreUrl = "charity.learnMoreUrl"/>
                
    </el-col>
       <el-col :span="4" v-for = "charity in charities.slice(3,6)" v-bind:key = "charity.id" :offset= "2">
               
                  <Charity v-bind:imageUrl = "charity.imageUrl" 
                         v-bind:title = "charity.title"
                         v-bind:donateNowUrl = "charity.donateNowUrl"
                         v-bind:learnMoreUrl = "charity.learnMoreUrl"/>
                
    </el-col>
         </el-row>
     
</template>


<script>
import Charity from './Charity.vue'
export default {
    name:'CharityList',
    data() {

      return {
          index: 0, 
          charities: [
              {
                  id: "0",
                  title: "Luis Miranda's campaign",
                  imageUrl: "https://d2zcpk7yfyf2dq.cloudfront.net/milaap/image/upload/s--sI5bq_bc--/c_fill,e_viesus_correct,g_faces,h_452,w_603/v1584894583/production/images/campaign/151094/IMG_7118_ojxgwj_1584894987.jpg",
                  donateNowUrl: "https://milaap.org/checkout?utf8=%E2%9C%93&currency=inr&payable_amount=2500&origin_id=151094&origin_type=FundraiserCampaign&page_referrer_id=&page_referrer_type=&commit=Donate+now",
                  learnMoreUrl: "https://milaap.org/fundraisers/support-luis-miranda?community=10177", 
                  
              },
              {
                  id: "1", 
                  title: "Zomato- feed the daily wage worker", 
                  imageUrl: "https://d2zcpk7yfyf2dq.cloudfront.net/milaap/image/upload/s--rPxoYVDq--/c_fill,e_viesus_correct,g_faces,h_452,w_603/v1585023913/production/images/campaign/151319/Milaap-Image_kibqxo_1585023921.jpg",
                  donateNowUrl: "https://milaap.org/checkout?utf8=%E2%9C%93&currency=inr&payable_amount=500&origin_id=151319&origin_type=FundraiserCampaign&page_referrer_id=&page_referrer_type=&commit=Donate+now",
                  learnMoreUrl: "https://milaap.org/fundraisers/support-zomato-feeding-india?community=10177"

              },
              {
                  id:"2", 
                  title: "Support The Daily Wage Earner, Dhobi Ghats & Slum Dwellers",
                  imageUrl: "https://img.particlenews.com/image.php?type=thumbnail_1024x576&url=0rxkHd_0ORaWCNK00",
                  donateNowUrl: "https://milaap.org/checkout?utf8=%E2%9C%93&currency=inr&payable_amount=2500&origin_id=151253&origin_type=FundraiserCampaign&page_referrer_id=&page_referrer_type=&commit=Donate+now",
                  learnMoreUrl: "https://milaap.org/fundraisers/support-daily-wage-earner?community=10177"
              },
              {
                  id: "3", 
                  title: "Help Trans community in their fight against Corona",
                  imageUrl: "https://d2zcpk7yfyf2dq.cloudfront.net/milaap/image/upload/s--uTT-c3Ug--/c_fill,e_viesus_correct,g_faces,h_452,w_603/v1585050451/production/images/campaign/151682/Trans_m5ikhi_1585050458.jpg",
                  donateNowUrl:"https://milaap.org/checkout?utf8=%E2%9C%93&currency=inr&payable_amount=2500&origin_id=151682&origin_type=FundraiserCampaign&page_referrer_id=&page_referrer_type=&commit=Donate+now",
                  learnMoreUrl: "https://milaap.org/fundraisers/support-kanaga?community=10177"

              },
              {
                id: "4", 
                title: "Fight Against Coronavirus",
                imageUrl:"https://d2zcpk7yfyf2dq.cloudfront.net/milaap/image/upload/s--d_ZZ6I_q--/c_fill,e_viesus_correct,g_faces,h_452,w_603/v1584595071/production/images/campaign/150031/90449719_1369833983188767_7519053860464230400_n_1584535147_pmfve2_1584595075.jpg",
                donateNowUrl:"https://milaap.org/checkout?utf8=%E2%9C%93&currency=inr&payable_amount=2500&origin_id=150031&origin_type=FundraiserCampaign&page_referrer_id=&page_referrer_type=&commit=Donate+now",
                learnMoreUrl:"https://milaap.org/fundraisers/support-rahul-sharma-2?community=10177"
              },
              {
                  id: "5", 
                  title: "Help us provide Habitat Family Essential Kits to the underprivileged to fight against COVID-19",
                  imageUrl:"https://d1vdjc70h9nzd9.cloudfront.net/media/campaign/173000/173742/image/5e74d1a895f57.jpeg",
                  donateNowUrl:"https://covid19.ketto.org/fundraiser/hfhhandwashcampaigntofightcovid19#/contributemodal",
                  learnMoreUrl:"https://covid19.ketto.org/fundraiser/hfhhandwashcampaigntofightcovid19"
              }
          ]
      }
    },
    components: {
        Charity
    },
    methods: {
       filteredCharities() {
           return this.charities.slice(3,7)
       }
    }
}
</script>


<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>