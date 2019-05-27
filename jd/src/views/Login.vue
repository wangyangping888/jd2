<template>
  <div id="login">
    <top-bar>
      <div class="title">京东登录</div>
    </top-bar>
    <div class="login-form-wrap">

			<div class="input-container ">
				<input class="user-name" v-model="username" type="text" placeholder="用户名/邮箱/手机号" />
				<i class="icon icon-clear" v-show="username!=''" @click="username='';"  ></i>
			</div>

			<div class="input-container">

				<input class="password" v-model="password" :type="type" placeholder="请输入密码" />
				<i class="icon icon-clear" v-show="password!=''" @click="password='';"></i>
				<i class="icon icon-eye" :class="{open:type!='password'}"   @click="type=(type=='password'?'text':'password')" ></i>
				<button class="findpwd">忘记密码</button>
                
			</div>
            <div class="notice" v-text="msg"></div>
			<button class="login-btn" @click="login" :class="{active:username!=''&&password!=''}" :disabled="username==''||password==''"  >登录</button>
            <button class="yijian" >一键登录</button>

		</div>
  </div>
</template>
<script>
import TopBar from "@/components/TopBar";
export default {
  data() {
    return {
      username: "",
      password: "",
      type: "password",
      msg:"",
    };
  },
  methods:{
      login(){
          if(this.username=="admin"&&this.password=="admin"){
              this.$store.commit('setLogin',true);
              this.$router.push("/user")
          }else{
              this.msg="用户名或密码错误！";
          }
      }
  },
  components: {
    TopBar,
  }
};
</script>
<style lang="less">
   #login{
       height: 100%;
       background-color: #ffffff;
       .login-form-wrap{
         width: 100%;
         padding: 1rem 0.5rem 0.5rem;
         box-sizing: border-box;
       }
       .input-container{
           margin-top: 0.4rem;
           padding: 0.2rem 0;
           height: 0.6rem;
           border-bottom: 1px solid #efefef;
           font-size: 0.34rem;
           position: relative;
           input{
               outline: none;
               width: 100%;
               height: 0.6rem;
               border: none;
               color: #222;
               box-sizing: border-box;
               &.user-name{
                   padding-right: 0.6rem;
                   &+.icon-clear{
                       right: 0.06rem;

                   }
               }
               &.password{
                   padding-right: 3rem;
               }
           }
           .icon{
           position: absolute;
           width: 0.48rem;
           height:0.48rem;
           top: 0.26rem;
           background-size: 100% auto;
           }
            .icon-clear{
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAAjBJREFUaAXtVztSwzAQjUl6zkFHPj09FFAARbgAcAVoc4acABigCQX0UOcDDfdIH8e8BWtmk2gTaa1UrGY0ku3V03vPK1mu1ayYA+aAOWAOmAPmgDnwfx3IYqWPRqM9jOkXRbGL9rbT6bzGYvD4yWRymOd5L8uyKep1q9X65s839Xc2BXieE/kD3N9HHUDQuScm6NZwODwD+RfCIkzUftBAFhQtAJOQ8640cH2nETEej08Bco/acGBoOTa7LXejBdTr9RvAzRhktAhyfj6fPwCDk89hBmFHlWgBzWbzDTN0UVUiBOdz5P+FZj1FL2JnD7mI/nIKzIhIu91+cnG8Fcb8kseYRx4b2lcLoAkEQl4RQmwl8sShkoBQEdsin0TAJhFYmAVillOtsvM0L5XKb+APRk6n8vnCblOuE1XOu/lcm0wAAQqp4uaiNpnzDjSpAAJdIyI5eZov+jtAg5SF1gLVpCXpG1jjviPt3WLdQ02b7A0I5HOQUn2xQ8UkESCRx25DRw71sSNERGUBAnlKlS4dKXC+ed6miEoCymP08kdqJc+3KUK9iIk8/QvAXf6RWiHP02DN2xIPgHy8r68SoCHvJk8tIloACByBzAB1wXlcd8tUcVzFVhKBASex/wTRawCLs4eJ1ORJlbQmSmwKCS7RAoA8Zei0xwc7z8ZJIjg2Dxf7GgGXcOodiJ/4Pz4OTRsfAxpLGMD7Qv1AvfLF2T1zwBwwB8wBc8AcMAfMAb8DP94/FJqk3I9tAAAAAElFTkSuQmCC);

            }
            .icon-eye{
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAAl5JREFUaAXtlE1rE2EQx/PSQIkphQihHhcUklNIcilUihYEDx76FXwBBSt4LkIpiF/ACAq+XPwAPXhoEdoiBHrIC7mYgIUclYIBMYbSuIm/wa5s1s2TtY2IMA/MzjPPzPxn5r/PbiikSxlQBpQBZUAZUAaUAWVAGVAGlAFlQBlQBpSBf8FAeFzRSqUyT8zVSCTyNpfLlcbFT8Jfq9UW+v3+FbA2C4XCngnTOADNFwaDgQBMIXY4HF4G8I0J8LQ+al6j5gY4UeQ7NeepWRmFGxnlOD5fREvzsqIAv4adCz/NyT8FW2pIrWN0qS09jFzGAZh+CzlyZc/atr31N4YQTMGm1qxTT2pLD47tp40D5PP59zBy35NocT9L5XL5ouf8xKZgCSYAlhtEaksP7jPv3vgNOMHcyxeA3XBs0TDT56wYi8VWs9nsN7cv6L5er5/p9XqPwFoBa4hMzl5y92+Owwo0AODRarX6BH3bB/ATxYrxePxpJpP57OP/7ajRaJztdrt3wFvBOecNAO8ZzN9F216f1w40gJPEm1hjv0Zhv7xDCu7i3+aXW0I+sj9AZKW4IueQBfZL5F9CTyNDi/wBB+swvz7kMBh+jRjCQyHexCINPEcm+jei+Q/ILZh/Z2zA4/zjASS/1WpNt9vtBwwhV+DXX8ODHdT8QuPFZDL50LKsw6BJTtyJBnCSm83mTKfTuU4D9xjmvHMeRJOzT87jRCLxKp1Ofw2S4xdzqgHcgHwfMsAScpnGLHSKJlMSgy3fwgF2C72DbHPP99G6lAFlQBlQBpQBZUAZUAaUgf+YgR8RmtPGSJ6MGgAAAABJRU5ErkJggg==);
                right: 1.8rem;
                &.open{
                    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB5UlEQVR4Ae1YJXQsQRD8zOYzmTD52Hgdjg2zDvp3571J3HkXZloKg40KM1NXOPMyO8fY9V4f7HZX1zC8YDAYDAaDEQ2YmJj4q+t6iaZp7WS9ZItku7Db3714Bx/4hoXopaWl9ySmikwjXND3pTt266shFhxBFz4zM/OOarKOhCxDkC8GDnCBMyjiKWE6mYnk/jRwgjvQ4iso2YFExCn6OX03Uo1m0e8kqtUvMPzGM7y79TmVcBwgR6DEN0tqbpfMOTU19dtdLvgiBrESzmZ/zzCtkkRtVMPfvOVFLDgkrdHqF/HU9DnPkG/T80K891OOInCKeZDbJ2LTNP8T0bpQ65uGYWTKYi4vL1+STxn5jtytA7e/y/BOFgdOcAuFWIcGX7qOSyA8RCK7xYxEdNrMNJ3wsSsEcghxLq/EW5YVTwnPBbJqu5qXihcKYdcSyCH4n0OLN7OOUyAaV/iXeTDnlym4xgV/pzfdp18gyVf4j7hbAPgqCpAv+Pd7U4DVxySqeV42p8vWDtU6IcSsRlIBsD78EQsQBV0oCgZxFEyjEbCQkc+RuJBF/lYiAjZzhbLNHG+nFQca2A69c3hxoHGoDjR8pJT014xAHerBHcz7oHp/XauAC9cq0X+xxVeLDAaDwWAw/IsraH8effh8nP4AAAAASUVORK5CYII=);

                }

            }
            .findpwd{
                position: absolute;
                height: .46rem;
                right: 0;
                top: .25rem;
                background-color: #fff;
                color: #222;
                font-size: .28rem;
                border: 0;
                outline: 0;
                border-radius: 2px;
                text-align: center;
                padding-left: .32rem;
                border-left: 1px solid #ccc;
                -webkit-box-shadow:none;
                box-shadow: none;

            }
       }
       .login-btn{
           width: 100%;
           height:1rem;
           margin-top: 0.6rem;
           border-radius: 0.5rem;
           background-color: #efefef;
           font-size: .32rem;
           outline:none;
           border: none;
           color: #fff;
           background-image: linear-gradient(90deg,#fab3b3,#ffbcb3 73%, #ffcaba);
           &.active{
				background-image: linear-gradient(90deg,#f10000,#ff2000 73%,#ff4f18);
			}
       }
       .notice{
            font-size: .28rem;
		    line-height: .6rem;
		    color: #f23030;
		    min-height: .3rem;
		    text-align: left;
       }
       .yijian{
           width: 100%;
           height:1rem;
           margin-top: .1rem;
           border-radius: 0.5rem;
           background-color: white;
           font-size: .32rem;
           outline:none;
           border: 1px solid red;
           color:red;
       }
       
   
   }
</style>
