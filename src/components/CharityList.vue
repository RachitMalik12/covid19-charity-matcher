<template>
   <el-container>
     <el-header>
         Charities you can donate to to help out

     </el-header>
     <el-main>
         <el-row>
             <el-col :span="4">
                  <el-card :body-style="{ padding: '0px' }">
                <img src="https://d2zcpk7yfyf2dq.cloudfront.net/milaap/image/upload/s--sI5bq_bc--/c_fill,e_viesus_correct,g_faces,h_452,w_603/v1584894583/production/images/campaign/151094/IMG_7118_ojxgwj_1584894987.jpg" class="image">
                <div style="padding: 14px;">
                <span>Luis Miranda campaign</span>
        <div class="bottom clearfix">
          <el-button @click="openCharityLink()" type="text" class="button">Click to donate</el-button>
        </div>
      </div>

    </el-card>
    </el-col>
    <el-col :span="8" :offset="2">
     <el-card :body-style="{ padding: '0px' }">
                <img src="https://d2zcpk7yfyf2dq.cloudfront.net/milaap/image/upload/s--sI5bq_bc--/c_fill,e_viesus_correct,g_faces,h_452,w_603/v1584894583/production/images/campaign/151094/IMG_7118_ojxgwj_1584894987.jpg" class="image">
                <div style="padding: 14px;">
                <span>Luis Miranda campaign</span>
        <div class="bottom clearfix">
          <el-button @click="openCharityLink()" type="text" class="button">Click to donate</el-button>
        </div>
      </div>

    </el-card>
    </el-col>
         </el-row>
     </el-main>
   </el-container>
</template>


<script>
export default {
    name:'CharityList',
    methods:{
        openCharityLink(){
            const win = window.open("https://milaap.org/checkout?utf8=%E2%9C%93&currency=inr&payable_amount=500&origin_id=151319&origin_type=FundraiserCampaign&page_referrer_id=&page_referrer_type=&commit=Donate+now");
            win.focus(); 
         
        }
    },
    data() {
      return {
          charities: [
              {
                  title: "Luis Miranda's campaign",
                  url: "https://milaap.org/fundraisers/support-luis-miranda?community=10177",
                  imageUrl: "https://d2zcpk7yfyf2dq.cloudfront.net/milaap/image/upload/s--sI5bq_bc--/c_fill,e_viesus_correct,g_faces,h_452,w_603/v1584894583/production/images/campaign/151094/IMG_7118_ojxgwj_1584894987.jpg"
              },
              {

              }
          ]
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