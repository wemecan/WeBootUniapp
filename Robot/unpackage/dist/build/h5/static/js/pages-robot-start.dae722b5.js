(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-robot-start"],{"02ec":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62"),a=n("af2e"),r={computed:(0,o.mapState)(["forcedLogin","hasLogin","userName"]),onLoad:function(){},onShow:function(t){a.navStyle()}};e.default=r},"04b4":function(t,e,n){"use strict";n.r(e);var o=n("2d31"),a=n("3fac");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("d782");var i,u=n("f0c5"),d=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,"6424d1df",null,!1,o["a"],i);e["default"]=d.exports},"0edb":function(t,e,n){var o=n("9724");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("1891a720",o,!0,{sourceMap:!1,shadowMode:!1})},"2d31":function(t,e,n){"use strict";var o,a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"content"},[o("v-uni-view",{staticClass:"hello"},[o("v-uni-image",{attrs:{src:n("9780"),mode:"aspectFit"}})],1),o("v-uni-view",{staticClass:"qrCode"},[t._v("二维码位置，点击进行下一步")]),o("v-uni-view",{staticClass:"text"},[t._v("请扫描二维码，启动机器人")])],1)},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}))},"3fac":function(t,e,n){"use strict";n.r(e);var o=n("02ec"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=a.a},9724:function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,".content[data-v-6424d1df]{background-color:#fff}.hello[data-v-6424d1df]{text-align:center}.hello uni-image[data-v-6424d1df]{margin-top:30%;width:100px;height:120px}.qrCode[data-v-6424d1df]{color:#6ad2ff;width:150px;height:150px;padding:10px;text-align:center;border-radius:10px;border:3px solid #6ad2ff;margin:10px auto}.text[data-v-6424d1df]{text-align:center}",""]),t.exports=e},9780:function(t,e,n){t.exports=n.p+"static/img/robot_code@3x.df882ebd.png"},af2e:function(t,e,n){"use strict";n("a15b"),n("d81d"),n("d3b7"),n("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.getHome=c,e.getText=f;var o=function(t){var e=t.getFullYear(),n=t.getMonth()+1,o=t.getDate(),r=t.getHours(),i=t.getMinutes(),u=t.getSeconds();return[e,n,o].map(a).join("/")+" "+[r,i,u].map(a).join(":")},a=function(t){return t=t.toString(),t[1]?t:"0"+t},r=function(t){var e=uni.setNavigationBarColor({frontColor:"#000000",backgroundColor:"#ffffff",animation:{duration:400,timingFunc:"easeIn"}});return e},i=function(t,e){console.log(t,e)},u=function(t){return t+3},d="wx/home/index";function c(){return request({url:d,method:"get"})}function f(){return 1234}t.exports={formatTime:o,count:u,navStyle:r,goNavigator:i}},d782:function(t,e,n){"use strict";var o=n("0edb"),a=n.n(o);a.a}}]);