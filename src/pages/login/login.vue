<template>
<div>
  <div class="bg">
    <div class="bg-img"></div>
    <div class="mask"></div>
  </div>
  <div class="fixed-login">
    <div class="login-left">
      <div class="login-img">
        <div class="login-img-mask"></div>
      </div>
      <div class="login-info">
        <div class="login-title">欢迎加入没前途的前端</div>
        <div class="split"></div>
        <div class="login-welcome">在这里你会发现前端其实兼职着设计师，美工，页面实现，后端交互顺便帮他们改bug的工作，然后你还是只有一份工资</div>
      </div>
    </div>
    <div class="login-main">
      <div class="login-main-title">
        请您登陆
      </div>
      <div class="login-method-list">
        <div class="login-method account"></div>
        <div class="login-method mobile"></div>
        <div class="login-method mail"></div>
      </div>
      <div class="text1">账号</div>
      <input type="text" class="message1"><span class="identifyCode"></span>
      <div class="text1-hint"></div>
      <div class="text2">密码</div>
      <input type="text" class="message2">
      <div class="text2-hint"></div>
      <input type="submit">
    </div>
    <div class="cancel"></div>
  </div>
</div>
</template>

<script>
  import $ from 'jquery'
export default {
  name: 'login',
  mounted () {
    const login_method = document.getElementsByClassName("login-method");
  
    function initCheck() {
      for (let i = 0;i<login_method.length;i++) {
        login_method[i].style.boxShadow = "none";
        if ($(".identifyCode")){
          $(".identifyCode").css({
            display: "none"
          })
        }
      }
    }
    initCheck();
  
    let judGe = ()=>{
      let ms1 = $(".message1");
      let ms2 = $(".message2");
      let hint1 = $(".text1-hint");
      let hint2 = $(".text2-hint");
      ms1.val("");
      ms2.val("");
      let clickedItem;
      for (let i = 0; i < login_method.length; i++){
        if (login_method[i].style.boxShadow !== "none"){
          clickedItem = i;
        }
      }
      if (clickedItem === 0){
        ms1.unbind();
        ms2.unbind();
        ms1.bind('input propertychange',()=>{
          let reg = /^\w{6,20}$/;
          let regWD = /^[\w]*$/;
          if (ms1.val().length<6 && !regWD.test(ms1.val())) {
            hint1.text("请输入数字或字母");
            hint1.css({
              margin: "0px 0px 0px 40px",
              color: "rgb(252,157,154)",
              fontFamily: "PingFangSC-Regular, sans-serif",
              fontSize: "12px"
            });
          }else if ( ms1.val().length >=6 && ms1.val().length<=20 && !reg.test(ms1.val())){
            hint1.text("请输入数字或字母");
            hint1.css({
              margin: "0px 0px 0px 40px",
              color: "rgb(252,157,154)",
              fontFamily: "PingFangSC-Regular, sans-serif",
              fontSize: "12px"
            });
          }else if(ms1.val().length>20){
            ms1.val(ms1.val().substring(0,20));
          }else{
            hint1.text("");
          
          }
        
        
        });
        ms2.bind('input propertychange',()=>{
          let reg = /^\w{6,20}$/;
          let regWD = /^[\w]*$/;
          if (ms2.val().length<6 && !regWD.test(ms2.val())) {
            hint2.text("请输入数字或字母");
            hint2.css({
              margin: "0px 0px 0px 40px",
              color: "rgb(252,157,154)",
              fontFamily: "PingFangSC-Regular, sans-serif",
              fontSize: "12px"
            });
          }else if ( ms2.val().length >=6 && ms2.val().length<=20 && !reg.test(ms2.val())){
            hint2.text("请输入数字或字母");
            hint2.css({
              margin: "0px 0px 0px 40px",
              color: "rgb(252,157,154)",
              fontFamily: "PingFangSC-Regular, sans-serif",
              fontSize: "12px"
            });
          }else if(ms2.val().length>20){
            ms2.val(ms2.val().substring(0,20));
          }else{
            hint2.text("");
          
          }
        
        
        });
      }
      if (clickedItem === 1) {
        ms1.unbind();
        ms2.unbind();
        ms1.text("");
        ms2.text("");
        ms1.on('input propertychange',()=>{
          let regDigit = /^\d*$/;
        
          if (ms1.val().length<=11 && !regDigit.test(ms1.val())) {
            hint1.text("请输入11位数字手机号");
            hint1.css({
              margin: "0px 0px 0px 40px",
              color: "rgb(252,157,154)",
              fontFamily: "PingFangSC-Regular, sans-serif",
              fontSize: "12px"
            });
          }else if (ms1.val().length > 11){
            ms1.val(ms1.val().substring(0,11));
          }else{
            hint1.text("");
          }
        
        });
        ms2.bind('input propertychange',()=>{
          let reg = /^\d{6}$/;
          let regDigit = /^\d*$/;
        
          if (ms2.val().length<=6 && !regDigit.test(ms2.val())) {
            hint2.text("请输入6数字验证码");
            hint2.css({
              margin: "0px 0px 0px 40px",
              color: "rgb(252,157,154)",
              fontFamily: "PingFangSC-Regular, sans-serif",
              fontSize: "12px"
            });
          }else if (ms2.val().length > 6) {
            ms2.val(ms2.val().substring(0,6));
          }else {
            hint2.text("");
          
          }
        
        });
      }
      if (clickedItem === 2) {
        ms1.unbind();
        ms2.unbind();
        ms1.text("");
        ms2.text("");
        ms1.on('input propertychange',()=>{
          let regMail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        
          if (!regMail.test(ms1.val())) {
            hint1.text("请输入有效的邮箱");
            hint1.css({
              margin: "0px 0px 0px 40px",
              color: "rgb(252,157,154)",
              fontFamily: "PingFangSC-Regular, sans-serif",
              fontSize: "12px"
            });
          }else{
            hint1.text("");
          }
        
        });
        ms2.bind('input propertychange',()=>{
          let reg = /^\d{6}$/;
          let regDigit = /^\d*$/;
  
          if (ms2.val().length<=6 && !regDigit.test(ms2.val())) {
            hint2.text("请输入6数字验证码");
            hint2.css({
              margin: "0px 0px 0px 40px",
              color: "rgb(252,157,154)",
              fontFamily: "PingFangSC-Regular, sans-serif",
              fontSize: "12px"
            });
          }else if (ms2.val().length > 6) {
            ms2.val(ms2.val().substring(0,6));
          }else {
            hint2.text("");
    
          }
  
  
        });
      }
    };
  
    login_method[0].style.boxShadow = "0px 1px 2px #aaa";
  
    for (let method of login_method) {
      method.addEventListener("click", () => {
        initCheck();
      
        method.style.boxShadow = "0px 1px 2px #aaa";
        if (method === login_method[0]){
          $(".text1").text("账号");
          $(".text2").text("密码");
        
        }else if(method === login_method[1]){
          $(".text1").text("请输入手机号");
          $(".text2").text("请输入验证码");
          let codeBtn = $(".identifyCode");
          codeBtn.css({
            display:"block",
            width:"70px",
            height:"40px",
            backgroundColor:"#ddd",
            borderRadius:"10px",
            color:"#aaa",
            fontFamily: "PingFangSC-Regular, sans-serif",
            fontSize:"12px",
            marginLeft:"30px",
            marginTop:"20px",
            transform: "scale(0.833333)",
            lineHeight:"40px",
            textAlign:"center"
          
          })
          codeBtn.text("发送验证码");
          codeBtn[0].addEventListener("click",()=>{
            codeBtn.css({
              backgroundColor:"#666"
            })
          })
        }else if(method === login_method[2]){
          $(".text1").text("请输入邮箱");
          $(".text2").text("请输入验证码");
          let codeBtn = $(".identifyCode");
          codeBtn.css({
            display:"block",
            width:"70px",
            height:"40px",
            backgroundColor:"#ddd",
            borderRadius:"10px",
            color:"#aaa",
            fontFamily: "PingFangSC-Regular, sans-serif",
            fontSize:"12px",
            marginLeft:"30px",
            marginTop:"20px",
            transform: "scale(0.833333)",
            lineHeight:"40px",
            textAlign:"center"
    
          })
          codeBtn.text("发送验证码");
          codeBtn[0].addEventListener("click",()=>{
            codeBtn.css({
              backgroundColor:"#666"
            })
          })
        }else{
        
        }
        judGe();
      });
    }
    judGe();
  
  
  }
}
</script>

<style lang="stylus" scoped>
  *
    margin 0
    padding 0
    text-decoration none
    list-style none
  input
    border none
    border-bottom 1px solid rgba(221,221,221,0.6)
    outline none
  .bg
    width 100%
    height 100vh
    position relative
    .bg-img
      width 100%
      height 100%
      background url("../../../static/img/login/bg.jpg") no-repeat center center
      -webkit-background-size cover
      background-size cover
    .mask
      width 100%
      height 100%
      position absolute
      left 0
      top 0
      background-color rgba(255,255,255,0.4)
  .fixed-login
    opacity 0.98
    display flex
    z-index 6
    // $fixed-width627px
    // $fixed-height445px
    width 627px
    height 445px
    position absolute
    left 50%
    top 50%
    margin-left -313.5px
    margin-top -225px
    background-color #ffffff
    border-radius 20px
    .login-left
      flex 2
      border-radius 20px 0 0 20px
      //border 1px solid #f00
      display flex
      flex-direction column
      .login-img
        position relative
        flex 1.8
        //border1px solid green
        border-radius 20px 0 0 0
        background url("../../../static/img/login/left-img.jpg") no-repeat center center
        -webkit-background-size cover
        background-size cover
        .login-img-mask
          width 100%
          height 100%
          position absolute
          left 0
          top 0
          border-radius 20px 0 0 0
          background-color #fff
          opacity 0.5
      .login-info
        flex 1
        border-radius 0 0 0 20px
        .login-title
          letter-spacing 3px
          font-size 14px
          font-family PingFangSC-Regular, sans-serif
          text-align center
          margin-top 26px
          color #1a2a3a
        .split
          width 80
          height 1px
          margin 10px auto
          background-color #d6d6d6
        .login-welcome
          font-family PingFangSC-Light, sans-serif
          font-size 12px
          color #666666
          transform scale(0.833333)
          margin 20px auto
    .login-main
      margin-left 20px
      flex 3
      .login-main-title
        margin-top 30px
        margin-left 60px
        letter-spacing 15px
        font-family PingFangSC-Regular, sans-serif
        font-size 15px
        color #4a5a6a
      .login-method-list
        margin 30px 40px 40px 30px
        width 250px
      .login-method
        display inline-block
        width 40px
        height 32px
        margin 0 10px
        border-radius 5px
        box-shadow none
      .account
        background url("../../../static/img/login/账户.png") no-repeat center center
        -webkit-background-size auto 23px
        background-size auto 23px
      .mobile
        background url("../../../static/img/login/手机.png") no-repeat center center
        -webkit-background-size auto 30px
        background-size auto 30px
      .mail
        background url("../../../static/img/login/邮箱.png") no-repeat center center
        -webkit-background-size auto 30px
        background-size auto 30px
    .text1
      margin 20px 0 10px 40px
      font-family PingFangSC-Regular, sans-serif
      font-size 12px
      color #ccc
    .text2
      margin 30px 0 10px 40px
      font-family PingFangSC-Regular, sans-serif
      font-size 12px
      color #ccc
    .message1
      text-indent 10px
      color #666666
      font-family PingFangSC-Regular, sans-serif
      font-size 12px
    .message2
      text-indent 10px
      color #666666
      font-family PingFangSC-Regular, sans-serif
      font-size 12px
    input
      margin-left 40px
      width 183px
    .text1-hint
      margin 10px 10px 20px 0
      color #666666
      font-family PingFangSC-Regular, sans-serif
      font-size 12px
    .text2-hint
      margin 10px 10px 20px 0
      color #666666
      font-family PingFangSC-Regular, sans-serif
      font-size 12px
    input[type="submit"]
      margin-top 40px
      border none
      width 150px
      height 50px
      background-color #FFFAF0
      border-radius 20px
      color #1a2a3a
      font-family PingFangSC-Regular, sans-serif
      font-size 14px
      letter-spacing 10px
  .cancel
    width 24px
    height 24px
    border-radius 50%
    position absolute
    top 7px
    right 7px
    background url("../../../static/img/login/Cancel.png") no-repeat center center
    -webkit-background-size 13px
    background-size 13px
    .cancel:hover
      background-color #FCFCFC
      transition background-color 0.1s ease-in-out
</style>
