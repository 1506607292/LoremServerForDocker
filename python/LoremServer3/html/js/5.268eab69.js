(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"26da":function(e,t,a){"use strict";a("f9c8")},"4ec3":function(e,t,a){"use strict";a.d(t,"d",(function(){return n})),a.d(t,"j",(function(){return o})),a.d(t,"f",(function(){return s})),a.d(t,"h",(function(){return i})),a.d(t,"g",(function(){return c})),a.d(t,"c",(function(){return u})),a.d(t,"e",(function(){return l})),a.d(t,"b",(function(){return p})),a.d(t,"i",(function(){return d})),a.d(t,"a",(function(){return m}));var r=a("b775");const n=e=>Object(r["a"])({url:"/api/question/answer",method:"get",params:e}),o=(e,t)=>Object(r["a"])({url:"/api/question/answer",method:"post",params:e,data:t}),s=e=>Object(r["a"])({url:"/api/user/login",method:"post",data:e}),i=e=>Object(r["a"])({url:"/api/user/register",method:"post",data:e}),c=e=>Object(r["a"])({url:"/api/user/logout",method:"post",data:e}),u=e=>Object(r["a"])({url:"/api/user/getcaptcha",method:"get",data:e}),l=e=>Object(r["a"])({url:"/api/user/userinfo",method:"get",data:e}),p=e=>Object(r["a"])({url:"/api/user/userinfo",method:"put",data:e}),d=e=>Object(r["a"])({url:"/api/user/changepw",method:"post",data:e}),m=e=>Object(r["a"])({url:"/api/user/changepw",method:"put",data:e})},"56b4":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"flex flex-center"},[a("q-form",{attrs:{autocorrect:"off",autocapitalize:"off",autocomplete:"off",spellcheck:"false"},on:{submit:e.onRegister}},[a("q-card",{staticClass:"flex column login-card"},[a("div",{staticClass:"text-h4"},[e._v("注册")]),a("br"),a("q-input",{attrs:{label:"用户名",name:"username",maxlength:"50","lazy-rules":"",rules:[function(e){return e&&e.length>0||"请输入用户名"},function(e){return e&&/^[a-zA-Z0-9_-]{4,16}$/.test(e)||"用户名由4-16位的字母、数字、下划线、减号构成"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"account_box"}})]},proxy:!0}]),model:{value:e.registerForm.username,callback:function(t){e.$set(e.registerForm,"username",t)},expression:"registerForm.username"}}),a("q-input",{attrs:{label:"手机号",maxlength:"20","lazy-rules":"",rules:[function(e){return e&&0!==e.length||"请输入手机号"},function(e){return e&&/^[1][3,4,5,7,8][0-9]{9}$/.test(e)||"请输入正确的手机号"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"phone"}})]},proxy:!0}]),model:{value:e.registerForm.phone,callback:function(t){e.$set(e.registerForm,"phone",t)},expression:"registerForm.phone"}}),a("q-input",{attrs:{label:"邮箱",maxlength:"50","lazy-rules":"",rules:[function(e){return e&&e.length>0||"请输入邮箱"},function(e){return e&&/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(e)||"请输入正确的邮箱地址"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"email"}})]},proxy:!0}]),model:{value:e.registerForm.email,callback:function(t){e.$set(e.registerForm,"email",t)},expression:"registerForm.email"}}),a("q-input",{attrs:{label:"密码",name:"password",maxlength:"20",autocomplete:"new-password",type:e.isPwd?"password":"text","lazy-rules":"",rules:[function(e){return e&&e.length>0||"请输入密码"},function(e){return e&&/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(e)||"密码至少包含 数字和英文，长度6-20"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"lock"}})]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.registerForm.password,callback:function(t){e.$set(e.registerForm,"password",t)},expression:"registerForm.password"}}),a("q-input",{attrs:{label:"重复密码",maxlength:"20",autocomplete:"new-password",type:"password",rules:[function(t){return t===e.registerForm.password||"两次输入不一致"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"lock"}})]},proxy:!0}]),model:{value:e.passwordAgain,callback:function(t){e.passwordAgain=t},expression:"passwordAgain"}}),a("q-input",{attrs:{label:"验证码",maxlength:"20","lazy-rules":"",rules:[function(e){return e&&e.length>0||"请输入验证码"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"how_to_reg"}})]},proxy:!0},{key:"after",fn:function(){return[a("q-img",{staticStyle:{cursor:"pointer"},attrs:{src:"data:image/png;base64,"+e.captchaImg,width:"100px",height:"50px"},on:{click:e.getCaptchaData}})]},proxy:!0}]),model:{value:e.registerForm.captcha.code,callback:function(t){e.$set(e.registerForm.captcha,"code",t)},expression:"registerForm.captcha.code"}}),a("q-btn",{attrs:{color:"primary",type:"submit",label:"注册",loading:e.loading}}),a("div",{staticClass:"text-center"},[a("q-btn",{attrs:{flat:"",dense:""},on:{click:e.toLogin}},[e._v("登录")])],1)],1)],1)],1)},n=[],o=(a("a79d"),a("4ec3")),s={name:"Register",data(){return{isPwd:!0,registerForm:{username:null,password:"",phone:"",email:"",captcha:{code:"",id:""}},passwordAgain:"",loading:!1,captchaImg:null}},created(){this.getCaptchaData()},methods:{getCaptchaData(){Object(o["c"])().then((e=>{this.registerForm.captcha.code="",this.registerForm.captcha.id=e.data.data.id,this.captchaImg=e.data.data.base64Data}))},toLogin(){this.$router.push("login")},onRegister(){this.loading=!0,this.isPwd=!0;let e=JSON.parse(JSON.stringify(this.registerForm));e.password=this.$md5(this.registerForm.password),Object(o["h"])(e).then((e=>{0===e.data.code&&(this.loading=!1,this.toLogin()),this.loading=!1})).catch((e=>{console.log(e),this.loading=!1})).finally((()=>{this.loading=!1,this.passwordAgain=this.registerForm.password="",this.getCaptchaData()}))}}},i=s,c=(a("26da"),a("2877")),u=a("9989"),l=a("0378"),p=a("f09f"),d=a("27f9"),m=a("0016"),g=a("068f"),h=a("9c40"),f=a("eebe"),b=a.n(f),w=Object(c["a"])(i,r,n,!1,null,"31933304",null);t["default"]=w.exports;b()(w,"components",{QPage:u["a"],QForm:l["a"],QCard:p["a"],QInput:d["a"],QIcon:m["a"],QImg:g["a"],QBtn:h["a"]})},b775:function(e,t,a){"use strict";(function(e){var r=a("bc3a"),n=a.n(r),o=a("2a19");const s=n.a.create({baseURL:e.env.VUE_APP_BASE_API,timeout:99999,withCredentials:!0});s.interceptors.request.use((e=>(e.data=JSON.stringify(e.data),e.headers={"Content-Type":"application/json"},e)),(e=>(o["a"].create({message:e.toString(),color:"negative",position:"top",timeout:2e3,icon:"warning"}),e))),s.interceptors.response.use((e=>{switch(e.data.code){case 0:return e;case 1:return o["a"].create({message:e.data.message.toString(),color:"warning",position:"top",timeout:2e3}),setTimeout((()=>{document.cookie="username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",document.cookie="token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",location.reload()}),500),e;case 2:return o["a"].create({message:e.data.message.toString(),color:"orange",position:"top",timeout:2e3}),e;case-1:return o["a"].create({message:"系统错误",color:"deep-orange-14",position:"top",timeout:2e3}),e;case 7:return o["a"].create({message:e.data.message.toString(),color:"warning",position:"top",timeout:2e3}),e;default:return e}}),(e=>(o["a"].create({message:e.toString(),color:"negative",position:"top",timeout:2e3,icon:"warning"}),e))),t["a"]=s}).call(this,a("4362"))},f9c8:function(e,t,a){}}]);