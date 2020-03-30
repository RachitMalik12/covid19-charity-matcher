<template>
     <el-card :body-style="{ padding: '0px' }" class = "card">
        <img :src = "imageUrl" class="image">
        <div style="padding: 14px; position:relative; height:70px;">
                <span>{{title}}</span>
        <div style ="position: absolute; bottom:0">
          <el-button @click="openDonationLink()" type="text"> Click to donate</el-button>
          <el-button @click="openLearnMoreLink()" type = "text"> Learn More </el-button>

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
    width: 100%;
    height: 299.83px; 
    display: block;
  }

  .card {
      width: 400px;
      height: 400px;
  }
</style>