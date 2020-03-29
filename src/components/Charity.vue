<template>
     <el-card :body-style="{ padding: '0px' }" class = "card">
        <img :src = "imageUrl" class="image">
        <div style="padding: 14px;">
                <span>{{title}}</span>
        <div class="bottom clearfix">
          <el-button @click="openDonationLink()" type="text" class="button">Click to donate</el-button>
          <el-button @click="openLearnMoreLink()" type = "text" class = "button"> Learn More </el-button>

        </div>
      </div>
     </el-card>
</template>






<script>
export default {
    name: "Charity",
    props: ["imageUrl", "donateNowUrl", "learnMoreUrl", "title"],
    methods: {
        openDonationLink() {
            const win = window.open(this.donateNowUrl)
            win.focus()
        },
        openLearnMoreLink(){
            const win = window.open(this.learnMoreUrl)
            win.focus()
        }
    }
}
</script>

<style >
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
    width: 50%;
    height: 50%; 
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
  .card {
      width: 400px;
      height: 400px;
  }
</style>