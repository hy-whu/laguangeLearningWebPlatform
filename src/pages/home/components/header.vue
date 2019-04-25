<template>
  <div class="header">
    <div class="nav-bar flex-left">
      <nav>首页</nav>
      <nav>选项</nav>
      <nav>选项</nav>
      <nav>选项</nav>
      <nav>选项</nav>
    </div>
    <div class="header-logo">
      <img src="http://placekitten.com/200/40" alt="logo">
    </div>
    <div class="flex-right">
      <div class="header-list">
        <span>|</span>
        <router-link to="./login">
          <span><a href="">登陆</a></span>
        </router-link>
        <span></span>
        <span><a href="">注册</a></span>
        <span>|</span>
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>购物车
      </div>
    </div>
    <div class="box-shadow"></div>
  </div>
</template>

<script>

export default {
  name: 'HomeHeader',
  mounted () {
    var hys = {};
  
    hys.index = 0;
    hys.bannerImg = $(".banner-img");
    hys.bannerLength = hys.bannerImg.length;
    hys.changeLine = $(".change-line");
    hys.arrowLeft  = $(".arrow-left");
    hys.arrowRight = $(".arrow-right");
  
    hys.autoSlide = ()=>{
      if (hys.index === hys.bannerLength ){
        hys.index = 0;
      }
      for (var i = 0; i < hys.bannerLength; i++) {
        if (hys.index === 0){
          hys.bannerImg.eq(hys.bannerLength-1).css({
            opacity:1
          })
        } else{
          hys.bannerImg.eq(hys.index-1).css({
            opacity:1
          })
        }
        hys.bannerImg.eq(i).css({
          opacity:"0",
          transition:""
        });
      }
      if (hys.index === 0) {
        hys.bannerImg.eq(hys.bannerLength-1).css({
          opacity: 0,
          transition: "opacity 1s ease-in-out"
        }).end().eq(0).css({
          opacity: 1,
          transition: "opacity 1s ease-in-out"
        });
      } else {
        hys.bannerImg.eq(hys.index).css({
          opacity: 1,
          transition: "opacity 1s ease-in-out"
        }).end().eq(hys.index-1).css({
          opacity: 0,
          transition: "opacity 1s ease-in-out"
        });
      }
      for (var i1 = 0;i1 < hys.changeLine.length;i1++){
        if (hys.changeLine.eq(i1).hasClass("change-line-on")){
          hys.changeLine.eq(i1).removeClass("change-line-on");
        }
      }
      hys.changeLine.eq(hys.index).addClass("change-line-on");
    
      hys.index++;
      console.log("autoSlide hys.index "+ hys.index);
    
    }
  
    hys.autoSlide();
  
    (()=>{
      if (!hys.timer) {
        hys.timer = setInterval(hys.autoSlide, 8000);
      }
    })()
  
    hys.arrowLeft.click(() => {
      hys.index--;
      for (var i = 0; i < hys.bannerLength; i++) {
        if (hys.index === 0){
          hys.bannerImg.eq(hys.bannerLength-1).css({
            opacity:1
          })
        } else{
          hys.bannerImg.eq(hys.index-1).css({
            opacity:1
          })
        }
        hys.bannerImg.eq(i).css({
          opacity:"0",
          transition:""
        });
      }
      if (hys.index === 0) {
        hys.bannerImg.eq(hys.bannerLength - 1).css({
          opacity:1,
          transition:"opacity 1s ease-in-out"
        }).end().eq(hys.index).css({
          opacity:0,
          transition:"opacity 1s ease-in-out"
        })
        hys.index = hys.bannerLength - 1;
      }else {
        hys.bannerImg.eq(hys.index).css({
          opacity:0,
          transition:"opacity 1s ease-in-out"
        
        }).end().eq(hys.index-1).css({
          opacity:1,
          transition:"opacity 1s ease-in-out"
        })
        hys.index --;
      }
      console.log(hys.index);
      for (var i1 = 0;i1 < hys.changeLine.length;i1++){
        if (hys.changeLine.eq(i1).hasClass("change-line-on")){
          hys.changeLine.eq(i1).removeClass("change-line-on");
        }
      }
      hys.changeLine.eq(hys.index).addClass("change-line-on");
      if (hys.timer){
        clearInterval(hys.timer);
      }
    });
    hys.arrowRight.click(() => {
      hys.autoSlide();
    });
  
  }
}
</script>

<style lang="stylus" scoped>
  .header
    $height 70px
    $padding 10px
    position relative
    width 100%
    height 70px
    display flex
    color #1a2a3a
    .nav-bar
      display flex
      flex 1 1 500px
      margin-left 30px
      font-size 0.9em
      nav
        width 100px
        line-height 70px
        text-align center
        &:hover
          border-bottom 3px solid #ffcc66
          color #ffcc66
        &:nth-child(1)
          background-color #ffcc66
          color #ffffff
    &-logo
      padding 10px
      img
        margin-right 100px
        display none
    .flex-right
      display flex
      justify-content flex-end
      padding 10px
      line-height 50px
      flex 1 1 400px
    .header-list
      font-size 0.9em
      margin-right 20px
      span a
        margin 0 10px
        color: #666;
      &:hover
        color: #000000
      i
        margin 0 10px 0 25px
    .box-shadow
      position absolute
      left 0
      bottom -1px
      width 100%
      height 2px
      border-top 1px solid #d6d6d6
      background-color rgba(0,0,0,.06)
      overflow hidden
      z-index -1
</style>
