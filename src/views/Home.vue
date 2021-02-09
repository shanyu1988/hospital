<template>
  <div class="home-page">
    <van-row class="box">
      <van-col class="left"
               span="10">

      </van-col>
      <van-col class="right"
               span="14">
        <h1 class="home-title">康美牙科</h1>
        <ul class="home-list-box">
          <li v-for="item in 5"
              :key="'icon'+item">
            <div class="item-icon">
              <i class="iconfont icon-houqinwuz"></i>
            </div>
            <div class="item-title">
              标题标题
            </div>
          </li>
        </ul>
      </van-col>
    </van-row>
  </div>

</template>

<script>


export default {
  name: 'Home',
  components: {

  },
  data () {
    return {
      colors: [
        `linear-gradient(135deg,rgb(24, 187, 111) 0%,rgb(72, 207, 144) 48%,rgb(120, 226, 176) 100%)`
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep.home-page {
  height: 100%;
  background-color: #000;
  .box {
    height: 100%;
    background-image: url("/img/bg.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .left {
    //background-color: aqua;
    height: 100%;
    background-image: url("/img/home_img_01.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .right {
    //background-color: brown;
    height: 100%;
    .home-title {
      color: #fff;
      height: 2.07rem;
      line-height: 2.07rem;
      letter-spacing: 0.15rem;
      font-size: 0.4rem;
      padding: 0;
      margin: 0;
    }
    .home-list-box {
      overflow: hidden;
      padding: 0.252rem 0.303rem;
      li {
        float: left;
        height: 1.515rem;
        width: 1.515rem;
        background-color: bisque;
        .item-icon {
          width: 40px;
          height: 40px;
          background-image: linear-gradient(
            135deg,
            rgb(24, 187, 111) 0%,
            rgb(72, 207, 144) 48%,
            rgb(120, 226, 176) 100%
          );
          width: 0.91rem;
          height: 0.91rem;
          margin: 0.151rem auto 0 auto;
          border-radius: 24px;
          box-shadow: 0px 10px 19.4px 0.6px rgba(18, 81, 83, 0.09);
        }
        .矩形_4 {
          position: absolute;
          left: 920px;
          top: 440px;

          z-index: 8;
        }
      }
    }
  }
}
</style>