(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-robot-aiList~pages-robot-friendList~pages-robot-material~pages-robot-record~pages-robot-task"],{"0a1b":function(t,e,r){"use strict";r.r(e);var n=r("71d3"),o=r("df8a");for(var a in o)"default"!==a&&function(t){r.d(e,t,(function(){return o[t]}))}(a);r("f885");var i,c=r("f0c5"),s=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"3762a943",null,!1,n["a"],i);e["default"]=s.exports},"71d3":function(t,e,r){"use strict";var n,o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"mask",class:t.show?"mask-show":"",style:{backgroundColor:t.show?t.maskBg:"rgba(0,0,0,0)"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tapMask.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"popups",class:[t.theme],style:{top:t.popupsTop,left:t.popupsLeft,flexDirection:t.direction}},[t.triangle?r("v-uni-text",{class:t.dynPlace,style:{width:"0px",height:"0px"}}):t._e(),t._l(t.popData,(function(e,n){return r("v-uni-view",{key:n,staticClass:"itemChild view",class:["row"==t.direction?"solid-right":"solid-bottom",e.disabled?"disabledColor":""],on:{click:function(r){r.stopPropagation(),arguments[0]=r=t.$handleEvent(r),t.tapItem(e)}}},[e.icon?r("v-uni-image",{staticClass:"image",attrs:{src:e.icon}}):t._e(),t._v(t._s(e.title))],1)})),t._t("default")],2)],1)},a=[];r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return a})),r.d(e,"a",(function(){return n}))},"7dee":function(t,e,r){"use strict";var n=r("ee27");r("a9e3"),r("d3b7"),r("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("96cf");var o=n(r("c964")),a={props:{maskBg:{type:String,default:"rgba(0,0,0,0)"},placement:{type:String,default:"default"},direction:{type:String,default:"column"},x:{type:Number,default:0},y:{type:Number,default:0},value:{type:Boolean,default:!1},popData:{type:Array,default:function(){return[]}},theme:{type:String,default:"light"},dynamic:{type:Boolean,default:!1},gap:{type:Number,default:20},triangle:{type:Boolean,default:!0}},data:function(){return{popupsTop:"0px",popupsLeft:"0px",show:!1,dynPlace:""}},mounted:function(){this.popupsPosition()},methods:{tapMask:function(){this.$emit("input",!this.value)},tapItem:function(t){t.disabled||(this.$emit("tapPopup",t),this.$emit("input",!this.value))},getStatusBar:function(){var t=new Promise((function(t,e){uni.getSystemInfo({success:function(e){var r;r=e.statusBarHeight+e.windowTop,t(r)}})}));return t},popupsPosition:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getStatusBar();case 2:return r=e.sent,n=new Promise((function(e,n){var o=uni.createSelectorQuery().in(t).select(".popups");o.fields({size:!0},(function(n){var o=n.width,a=n.height,i=t.dynamic?t.dynamicGetY(t.y,t.gap):t.transformRpx(t.y),c=t.dynamic?t.dynamicGetX(t.x,t.gap):t.transformRpx(t.x);switch(i=t.dynamic?t.y+r:t.transformRpx(t.y+r),t.dynPlace="default"==t.placement?t.getPlacement(c,i):t.placement,t.dynPlace){case"top-start":t.popupsTop="".concat(i+9,"px"),t.popupsLeft="".concat(c-15,"px");break;case"top-end":t.popupsTop="".concat(i+9,"px"),t.popupsLeft="".concat(c+15-o,"px");break;case"bottom-start":t.popupsTop="".concat(i-18-a,"px"),t.popupsLeft="".concat(c-15,"px");break;case"bottom-end":t.popupsTop="".concat(i-9-a,"px"),t.popupsLeft="".concat(c+15-o,"px");break}e()})).exec()})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))()},getPlacement:function(t,e){var r=uni.getSystemInfoSync().windowWidth,n=uni.getSystemInfoSync().windowHeight;return t>r/2&&e>n/2?"bottom-end":t<r/2&&e<n/2?"top-start":t>r/2&&e<n/2?"top-end":t<r/2&&e>n/2?"bottom-start":t>r/2?"top-end":"top-start"},dynamicGetY:function(t,e){var r=uni.getSystemInfoSync().windowHeight;return t=t<e?e:t,t=r-t<e?r-e:t,t},dynamicGetX:function(t,e){var r=uni.getSystemInfoSync().windowWidth;return t=t<e?e:t,t=r-t<e?r-e:t,t},transformRpx:function(t){return t*uni.getSystemInfoSync().screenWidth/375}},watch:{value:{immediate:!0,handler:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(e,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e){t.next=3;break}return t.next=3,this.popupsPosition();case 3:this.show=e;case 4:case"end":return t.stop()}}),t,this)})));function e(e,r){return t.apply(this,arguments)}return e}()},placement:{immediate:!0,handler:function(t,e){this.dynPlace=t}}}};e.default=a},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=w;var p="suspendedStart",f="suspendedYield",d="executing",h="completed",v={},y={};y[i]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(N([])));m&&m!==n&&o.call(m,i)&&(y=m);var b=S.prototype=k.prototype=Object.create(y);L.prototype=b.constructor=S,S.constructor=L,S[s]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(b),t},l.awrap=function(t){return{__await:t}},_(E.prototype),E.prototype[c]=function(){return this},l.AsyncIterator=E,l.async=function(t,e,r,n){var o=new E(w(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},_(b),b[s]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=N,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function w(t,e,r,n){var o=e&&e.prototype instanceof k?e:k,a=Object.create(o.prototype),i=new C(n||[]);return a._invoke=P(t,r,i),a}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function k(){}function L(){}function S(){}function _(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function E(t){function e(r,n,a,i){var c=x(t[r],t,n);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,a,i)}),(function(t){e("throw",t,a,i)})):Promise.resolve(u).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,i)}))}i(c.arg)}var r;function n(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=n}function P(t,e,r){var n=p;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw a;return G()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=x(t,e,r);if("normal"===s.type){if(n=r.done?h:f,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=h,r.method="throw",r.arg=s.arg)}}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:G}}function G(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},ac7f:function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,'.mask[data-v-3762a943]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:9999;-webkit-transition:background .3s ease-in-out;transition:background .3s ease-in-out;visibility:hidden}.mask.mask-show[data-v-3762a943]{visibility:visible}.popups[data-v-3762a943]{position:absolute;padding:%?20?%;border-radius:5px;display:-webkit-box;display:-webkit-flex;display:flex}.popups .view[data-v-3762a943]{padding:%?10?%}.popups .image[data-v-3762a943]{display:inline-block;vertical-align:middle;width:%?40?%;height:%?40?%;margin-right:%?20?%}.dark[data-v-3762a943]{background-color:#4c4c4c;color:#fff}.dark .top-start[data-v-3762a943]:after{content:"";position:absolute;top:%?-18?%;left:%?10?%;border-width:0 %?20?% %?20?%;border-style:solid;border-color:transparent transparent #4c4c4c}.dark .top-end[data-v-3762a943]:after{content:"";position:absolute;top:%?-18?%;right:%?10?%;border-width:0 %?20?% %?20?%;border-style:solid;border-color:transparent transparent #4c4c4c}.dark .bottom-start[data-v-3762a943]:after{content:"";position:absolute;bottom:%?-18?%;left:%?10?%;border-width:%?20?% %?20?% 0;border-style:solid;border-color:#4c4c4c transparent transparent}.dark .bottom-end[data-v-3762a943]:after{content:"";position:absolute;bottom:%?-18?%;right:%?10?%;border-width:%?20?% %?20?% 0;border-style:solid;border-color:#4c4c4c transparent transparent}.dark .disabledColor[data-v-3762a943]{color:#c5c8ce}.light[data-v-3762a943]{color:#515a6e;-webkit-box-shadow:%?0?% %?0?% %?30?% rgba(0,0,0,.2);box-shadow:%?0?% %?0?% %?30?% rgba(0,0,0,.2);background:#fff}.light .top-start[data-v-3762a943]:after{content:"";position:absolute;top:%?-18?%;left:%?10?%;border-width:0 %?20?% %?20?%;border-style:solid;border-color:transparent transparent #fff}.light .top-end[data-v-3762a943]:after{content:"";position:absolute;top:%?-18?%;right:%?10?%;border-width:0 %?20?% %?20?%;border-style:solid;border-color:transparent transparent #fff}.light .bottom-start[data-v-3762a943]:after{content:"";position:absolute;bottom:%?-18?%;left:%?10?%;border-width:%?20?% %?20?% 0;border-style:solid;border-color:#fff transparent transparent}.light .bottom-end[data-v-3762a943]:after{content:"";position:absolute;bottom:%?-18?%;right:%?10?%;border-width:%?20?% %?20?% 0;border-style:solid;border-color:#fff transparent transparent}.light .disabledColor[data-v-3762a943]{color:#c5c8ce}.solid-bottom[data-v-3762a943]{border-bottom:1px solid #ccc}.solid-right[data-v-3762a943]{border-right:1px solid #ccc}.popups .itemChild[data-v-3762a943]:last-child{border:none}',""]),t.exports=e},af2e:function(t,e,r){"use strict";r("a15b"),r("d81d"),r("d3b7"),r("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.getHome=u,e.getText=l;var n=function(t){var e=t.getFullYear(),r=t.getMonth()+1,n=t.getDate(),a=t.getHours(),i=t.getMinutes(),c=t.getSeconds();return[e,r,n].map(o).join("/")+" "+[a,i,c].map(o).join(":")},o=function(t){return t=t.toString(),t[1]?t:"0"+t},a=function(t){var e=uni.setNavigationBarColor({frontColor:"#000000",backgroundColor:"#ffffff",animation:{duration:400,timingFunc:"easeIn"}});return e},i=function(t,e){console.log(t,e)},c=function(t){return t+3},s="wx/home/index";function u(){return request({url:s,method:"get"})}function l(){return 1234}t.exports={formatTime:n,count:c,navStyle:a,goNavigator:i}},c964:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return o}));r("d3b7"),r("e6cf");function n(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,s,"next",t)}function s(t){n(i,o,a,c,s,"throw",t)}c(void 0)}))}}},cc94:function(t,e,r){var n=r("ac7f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=r("4f06").default;o("611bb274",n,!0,{sourceMap:!1,shadowMode:!1})},df8a:function(t,e,r){"use strict";r.r(e);var n=r("7dee"),o=r.n(n);for(var a in n)"default"!==a&&function(t){r.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},f885:function(t,e,r){"use strict";var n=r("cc94"),o=r.n(n);o.a}}]);