<template>
  <div class="banner">
    <div class="banner-slide">
      <div class="gradient"></div>
      <div class="banner-img bg1"></div>
      <div class="banner-img bg2"></div>
      <div class="banner-img bg3"></div>
      <div class="banner-img bg4"></div>
      <div class="banner-img bg5"></div>
    </div>
    <div class="change-lines">
      <div class="change-line"><div class="progress"></div></div>
      <div class="change-line"><div class="progress"></div></div>
      <div class="change-line"><div class="progress"></div></div>
      <div class="change-line"><div class="progress"></div></div>
      <div class="change-line change-line-on"><div class="progress"></div></div>
    </div>
    <div class="arrow arrow-left"></div>
    <div class="arrow arrow-right"></div>
  </div>
</template>

<script>
  import $ from 'jquery'
export default {
  name: 'HomeBanner',
  mounted () {
    let hys = {};
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
  .banner
    // $banner-height 421px;
    height 421px
    width: 100%;
    position: relative;
    overflow: hidden;
    .banner-slide
      .gradient
        position: absolute;
        width: 40%;
        height: 421px;
        z-index: 2;
        background: linear-gradient(to left,transparent 20%,rgba(0,0,0,0.5) 100%)
      .banner-img
        height: 421px;
        width: 100%;
        position: absolute;
        display: block
      .bg1
        background: url("../../../../static/img/1.jpeg") no-repeat center center;
        z-index: 3;
      .bg2
        background: url("../../../../static/img/2.jpeg") no-repeat center center;
      .bg3
        background: url("../../../../static/img/3.jpeg") no-repeat center center;
      .bg4
        background: url("../../../../static/img/4.jpeg") no-repeat center center;
      .bg5
        background: url("../../../../static/img/5.jpeg") no-repeat center center;
  .change-lines
    position: absolute;
    bottom: 40px;
    left: 100px;
    z-index: 7;
    .change-line
      display: inline-block;
      width: 50px;
      height: 2px;
      margin-right: 3px;
      border-radius: 2px;
      background-color: rgba(255,255,255,0.2)
    .change-line-on
      .progress
        width: 50px;
        height: 2px;
        animation: progress-change 8s linear infinite;
        background-color: #ffffff;
  .arrow
    position absolute
    width 30px;
    height 80px
    top:170.5px;
    z-index: 8;
    cursor: pointer;
    &-left
      left: 20px;
      background: url("../../../../static/img/arrow.png") no-repeat center center;
      background-size: 20px 20px;
      //background-color: rgba(214,214,214,0.2);
      transform: rotate(180deg);
      z-index: 8;
    &-right
      right:20px;
      background: url("../../../../static/img/arrow.png") no-repeat center center;
      background-size: 20px 20px;
      //background-color: rgba(214,214,214,0.2);
      z-index: 8
  @keyframes progress-change
    0%{
      width: 0
    }
    100%{
      width: 100%
    }
  
  
</style>
