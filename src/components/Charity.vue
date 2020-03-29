<template>
     <el-card :body-style="{ padding: '0px' }" class = "card">
        <img :src = "imageUrl" class="image">
        <div style="padding: 14px; ">
                <span>{{title}}</span>
        <div :class="bottom">
          <el-button @click="openDonationLink()" type="text"  >Click to donate</el-button>
          <el-button @click="openLearnMoreLink()" type = "text" > Learn More </el-button>

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
    width: 50%;
    height: 50%; 
    display: block;
  }
/* 
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  } */
  .card {
      width: 400px;
      height: 400px;
  }
</style>