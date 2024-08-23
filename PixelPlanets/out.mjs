var au=Object.defineProperty;var l=(i,e)=>au(i,"name",{value:e,configurable:!0});function lu(i){if(i&&!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=i,document.head.appendChild(e),i}}l(lu,"___$insertStyle");function ri(i,e){var t=i.__state.conversionName.toString(),n=Math.round(i.r),r=Math.round(i.g),s=Math.round(i.b),o=i.a,a=Math.round(i.h),c=i.s.toFixed(1),u=i.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var h=i.hex.toString(16);h.length<6;)h="0"+h;return"#"+h}else{if(t==="CSS_RGB")return"rgb("+n+","+r+","+s+")";if(t==="CSS_RGBA")return"rgba("+n+","+r+","+s+","+o+")";if(t==="HEX")return"0x"+i.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+r+","+s+"]";if(t==="RGBA_ARRAY")return"["+n+","+r+","+s+","+o+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+r+",b:"+s+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+r+",b:"+s+",a:"+o+"}";if(t==="HSV_OBJ")return"{h:"+a+",s:"+c+",v:"+u+"}";if(t==="HSVA_OBJ")return"{h:"+a+",s:"+c+",v:"+u+",a:"+o+"}"}return"unknown format"}l(ri,"colorToString");var Va=Array.prototype.forEach,ki=Array.prototype.slice,$={BREAK:{},extend:l(function(e){return this.each(ki.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(r){this.isUndefined(t[r])||(e[r]=t[r])}.bind(this))},this),e},"extend"),defaults:l(function(e){return this.each(ki.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(r){this.isUndefined(e[r])&&(e[r]=t[r])}.bind(this))},this),e},"defaults"),compose:l(function(){var e=ki.call(arguments);return function(){for(var t=ki.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},"compose"),each:l(function(e,t,n){if(e){if(Va&&e.forEach&&e.forEach===Va)e.forEach(t,n);else if(e.length===e.length+0){var r=void 0,s=void 0;for(r=0,s=e.length;r<s;r++)if(r in e&&t.call(n,e[r],r)===this.BREAK)return}else for(var o in e)if(t.call(n,e[o],o)===this.BREAK)return}},"each"),defer:l(function(e){setTimeout(e,0)},"defer"),debounce:l(function(e,t,n){var r=void 0;return function(){var s=this,o=arguments;function a(){r=null,n||e.apply(s,o)}l(a,"delayed");var c=n||!r;clearTimeout(r),r=setTimeout(a,t),c&&e.apply(s,o)}},"debounce"),toArray:l(function(e){return e.toArray?e.toArray():ki.call(e)},"toArray"),isUndefined:l(function(e){return e===void 0},"isUndefined"),isNull:l(function(e){return e===null},"isNull"),isNaN:function(i){function e(t){return i.apply(this,arguments)}return l(e,"isNaN"),e.toString=function(){return i.toString()},e}(function(i){return isNaN(i)}),isArray:Array.isArray||function(i){return i.constructor===Array},isObject:l(function(e){return e===Object(e)},"isObject"),isNumber:l(function(e){return e===e+0},"isNumber"),isString:l(function(e){return e===e+""},"isString"),isBoolean:l(function(e){return e===!1||e===!0},"isBoolean"),isFunction:l(function(e){return e instanceof Function},"isFunction")},cu=[{litmus:$.isString,conversions:{THREE_CHAR_HEX:{read:l(function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},"read"),write:ri},SIX_CHAR_HEX:{read:l(function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},"read"),write:ri},CSS_RGB:{read:l(function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},"read"),write:ri},CSS_RGBA:{read:l(function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},"read"),write:ri}}},{litmus:$.isNumber,conversions:{HEX:{read:l(function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},"read"),write:l(function(e){return e.hex},"write")}}},{litmus:$.isArray,conversions:{RGB_ARRAY:{read:l(function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},"read"),write:l(function(e){return[e.r,e.g,e.b]},"write")},RGBA_ARRAY:{read:l(function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},"read"),write:l(function(e){return[e.r,e.g,e.b,e.a]},"write")}}},{litmus:$.isObject,conversions:{RGBA_OBJ:{read:l(function(e){return $.isNumber(e.r)&&$.isNumber(e.g)&&$.isNumber(e.b)&&$.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},"read"),write:l(function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}},"write")},RGB_OBJ:{read:l(function(e){return $.isNumber(e.r)&&$.isNumber(e.g)&&$.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},"read"),write:l(function(e){return{r:e.r,g:e.g,b:e.b}},"write")},HSVA_OBJ:{read:l(function(e){return $.isNumber(e.h)&&$.isNumber(e.s)&&$.isNumber(e.v)&&$.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},"read"),write:l(function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}},"write")},HSV_OBJ:{read:l(function(e){return $.isNumber(e.h)&&$.isNumber(e.s)&&$.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},"read"),write:l(function(e){return{h:e.h,s:e.s,v:e.v}},"write")}}}],Vi=void 0,dr=void 0,As=l(function(){dr=!1;var e=arguments.length>1?$.toArray(arguments):arguments[0];return $.each(cu,function(t){if(t.litmus(e))return $.each(t.conversions,function(n,r){if(Vi=n.read(e),dr===!1&&Vi!==!1)return dr=Vi,Vi.conversionName=r,Vi.conversion=n,$.BREAK}),$.BREAK}),dr},"interpret"),Ha=void 0,pr={hsv_to_rgb:l(function(e,t,n){var r=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),o=n*(1-t),a=n*(1-s*t),c=n*(1-(1-s)*t),u=[[n,c,o],[a,n,o],[o,n,c],[o,a,n],[c,o,n],[n,o,a]][r];return{r:u[0]*255,g:u[1]*255,b:u[2]*255}},"hsv_to_rgb"),rgb_to_hsv:l(function(e,t,n){var r=Math.min(e,t,n),s=Math.max(e,t,n),o=s-r,a=void 0,c=void 0;if(s!==0)c=o/s;else return{h:NaN,s:0,v:0};return e===s?a=(t-n)/o:t===s?a=2+(n-e)/o:a=4+(e-t)/o,a/=6,a<0&&(a+=1),{h:a*360,s:c,v:s/255}},"rgb_to_hsv"),rgb_to_hex:l(function(e,t,n){var r=this.hex_with_component(0,2,e);return r=this.hex_with_component(r,1,t),r=this.hex_with_component(r,0,n),r},"rgb_to_hex"),component_from_hex:l(function(e,t){return e>>t*8&255},"component_from_hex"),hex_with_component:l(function(e,t,n){return n<<(Ha=t*8)|e&~(255<<Ha)},"hex_with_component")},uu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Vt=l(function(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")},"classCallCheck"),Ht=function(){function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return l(i,"defineProperties"),function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),_n=l(function i(e,t,n){e===null&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(r===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:i(s,t,n)}else{if("value"in r)return r.value;var o=r.get;return o===void 0?void 0:o.call(n)}},"get"),vn=l(function(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(i,e):i.__proto__=e)},"inherits"),xn=l(function(i,e){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:i},"possibleConstructorReturn"),xt=function(){function i(){if(Vt(this,i),this.__state=As.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return l(i,"Color"),Ht(i,[{key:"toString",value:l(function(){return ri(this)},"toString")},{key:"toHexString",value:l(function(){return ri(this,!0)},"toHexString")},{key:"toOriginal",value:l(function(){return this.__state.conversion.write(this)},"toOriginal")}]),i}();function Ls(i,e,t){Object.defineProperty(i,e,{get:l(function(){return this.__state.space==="RGB"?this.__state[e]:(xt.recalculateRGB(this,e,t),this.__state[e])},"get$$1"),set:l(function(r){this.__state.space!=="RGB"&&(xt.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=r},"set$$1")})}l(Ls,"defineRGBComponent");function Us(i,e){Object.defineProperty(i,e,{get:l(function(){return this.__state.space==="HSV"?this.__state[e]:(xt.recalculateHSV(this),this.__state[e])},"get$$1"),set:l(function(n){this.__state.space!=="HSV"&&(xt.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n},"set$$1")})}l(Us,"defineHSVComponent");xt.recalculateRGB=function(i,e,t){if(i.__state.space==="HEX")i.__state[e]=pr.component_from_hex(i.__state.hex,t);else if(i.__state.space==="HSV")$.extend(i.__state,pr.hsv_to_rgb(i.__state.h,i.__state.s,i.__state.v));else throw new Error("Corrupted color state")};xt.recalculateHSV=function(i){var e=pr.rgb_to_hsv(i.r,i.g,i.b);$.extend(i.__state,{s:e.s,v:e.v}),$.isNaN(e.h)?$.isUndefined(i.__state.h)&&(i.__state.h=0):i.__state.h=e.h};xt.COMPONENTS=["r","g","b","h","s","v","hex","a"];Ls(xt.prototype,"r",2);Ls(xt.prototype,"g",1);Ls(xt.prototype,"b",0);Us(xt.prototype,"h");Us(xt.prototype,"s");Us(xt.prototype,"v");Object.defineProperty(xt.prototype,"a",{get:l(function(){return this.__state.a},"get$$1"),set:l(function(e){this.__state.a=e},"set$$1")});Object.defineProperty(xt.prototype,"hex",{get:l(function(){return this.__state.space!=="HEX"&&(this.__state.hex=pr.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},"get$$1"),set:l(function(e){this.__state.space="HEX",this.__state.hex=e},"set$$1")});var Fn=function(){function i(e,t){Vt(this,i),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return l(i,"Controller"),Ht(i,[{key:"onChange",value:l(function(t){return this.__onChange=t,this},"onChange")},{key:"onFinishChange",value:l(function(t){return this.__onFinishChange=t,this},"onFinishChange")},{key:"setValue",value:l(function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this},"setValue")},{key:"getValue",value:l(function(){return this.object[this.property]},"getValue")},{key:"updateDisplay",value:l(function(){return this},"updateDisplay")},{key:"isModified",value:l(function(){return this.initialValue!==this.getValue()},"isModified")}]),i}(),hu={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Qa={};$.each(hu,function(i,e){$.each(i,function(t){Qa[t]=e})});var du=/(\d+(\.\d+)?)px/;function Jt(i){if(i==="0"||$.isUndefined(i))return 0;var e=i.match(du);return $.isNull(e)?0:parseFloat(e[1])}l(Jt,"cssValueToPixels");var D={makeSelectable:l(function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},"makeSelectable"),makeFullscreen:l(function(e,t,n){var r=n,s=t;$.isUndefined(s)&&(s=!0),$.isUndefined(r)&&(r=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),r&&(e.style.top=0,e.style.bottom=0)},"makeFullscreen"),fakeEvent:l(function(e,t,n,r){var s=n||{},o=Qa[t];if(!o)throw new Error("Event type "+t+" not supported.");var a=document.createEvent(o);switch(o){case"MouseEvents":{var c=s.x||s.clientX||0,u=s.y||s.clientY||0;a.initMouseEvent(t,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,c,u,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var h=a.initKeyboardEvent||a.initKeyEvent;$.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),h(t,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{a.initEvent(t,s.bubbles||!1,s.cancelable||!0);break}}$.defaults(a,r),e.dispatchEvent(a)},"fakeEvent"),bind:l(function(e,t,n,r){var s=r||!1;return e.addEventListener?e.addEventListener(t,n,s):e.attachEvent&&e.attachEvent("on"+t,n),D},"bind"),unbind:l(function(e,t,n,r){var s=r||!1;return e.removeEventListener?e.removeEventListener(t,n,s):e.detachEvent&&e.detachEvent("on"+t,n),D},"unbind"),addClass:l(function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return D},"addClass"),removeClass:l(function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),r=n.indexOf(t);r!==-1&&(n.splice(r,1),e.className=n.join(" "))}else e.className=void 0;return D},"removeClass"),hasClass:l(function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},"hasClass"),getWidth:l(function(e){var t=getComputedStyle(e);return Jt(t["border-left-width"])+Jt(t["border-right-width"])+Jt(t["padding-left"])+Jt(t["padding-right"])+Jt(t.width)},"getWidth"),getHeight:l(function(e){var t=getComputedStyle(e);return Jt(t["border-top-width"])+Jt(t["border-bottom-width"])+Jt(t["padding-top"])+Jt(t["padding-bottom"])+Jt(t.height)},"getHeight"),getOffset:l(function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},"getOffset"),isActive:l(function(e){return e===document.activeElement&&(e.type||e.href)},"isActive")},ja=function(i){vn(e,i);function e(t,n){Vt(this,e);var r=xn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=r;r.__prev=r.getValue(),r.__checkbox=document.createElement("input"),r.__checkbox.setAttribute("type","checkbox");function o(){s.setValue(!s.__prev)}return l(o,"onChange"),D.bind(r.__checkbox,"change",o,!1),r.domElement.appendChild(r.__checkbox),r.updateDisplay(),r}return l(e,"BooleanController"),Ht(e,[{key:"setValue",value:l(function(n){var r=_n(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),r},"setValue")},{key:"updateDisplay",value:l(function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),_n(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)},"updateDisplay")}]),e}(Fn),fu=function(i){vn(e,i);function e(t,n,r){Vt(this,e);var s=xn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=r,a=s;if(s.__select=document.createElement("select"),$.isArray(o)){var c={};$.each(o,function(u){c[u]=u}),o=c}return $.each(o,function(u,h){var d=document.createElement("option");d.innerHTML=h,d.setAttribute("value",u),a.__select.appendChild(d)}),s.updateDisplay(),D.bind(s.__select,"change",function(){var u=this.options[this.selectedIndex].value;a.setValue(u)}),s.domElement.appendChild(s.__select),s}return l(e,"OptionController"),Ht(e,[{key:"setValue",value:l(function(n){var r=_n(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),r},"setValue")},{key:"updateDisplay",value:l(function(){return D.isActive(this.__select)?this:(this.__select.value=this.getValue(),_n(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))},"updateDisplay")}]),e}(Fn),pu=function(i){vn(e,i);function e(t,n){Vt(this,e);var r=xn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=r;function o(){s.setValue(s.__input.value)}l(o,"onChange");function a(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return l(a,"onBlur"),r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),D.bind(r.__input,"keyup",o),D.bind(r.__input,"change",o),D.bind(r.__input,"blur",a),D.bind(r.__input,"keydown",function(c){c.keyCode===13&&this.blur()}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return l(e,"StringController"),Ht(e,[{key:"updateDisplay",value:l(function(){return D.isActive(this.__input)||(this.__input.value=this.getValue()),_n(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)},"updateDisplay")}]),e}(Fn);function Ga(i){var e=i.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}l(Ga,"numDecimals");var el=function(i){vn(e,i);function e(t,n,r){Vt(this,e);var s=xn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=r||{};return s.__min=o.min,s.__max=o.max,s.__step=o.step,$.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=Ga(s.__impliedStep),s}return l(e,"NumberController"),Ht(e,[{key:"setValue",value:l(function(n){var r=n;return this.__min!==void 0&&r<this.__min?r=this.__min:this.__max!==void 0&&r>this.__max&&(r=this.__max),this.__step!==void 0&&r%this.__step!==0&&(r=Math.round(r/this.__step)*this.__step),_n(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,r)},"setValue")},{key:"min",value:l(function(n){return this.__min=n,this},"min")},{key:"max",value:l(function(n){return this.__max=n,this},"max")},{key:"step",value:l(function(n){return this.__step=n,this.__impliedStep=n,this.__precision=Ga(n),this},"step")}]),e}(Fn);function mu(i,e){var t=Math.pow(10,e);return Math.round(i*t)/t}l(mu,"roundToDecimal");var mr=function(i){vn(e,i);function e(t,n,r){Vt(this,e);var s=xn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,r));s.__truncationSuspended=!1;var o=s,a=void 0;function c(){var _=parseFloat(o.__input.value);$.isNaN(_)||o.setValue(_)}l(c,"onChange");function u(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}l(u,"onFinish");function h(){u()}l(h,"onBlur");function d(_){var x=a-_.clientY;o.setValue(o.getValue()+x*o.__impliedStep),a=_.clientY}l(d,"onMouseDrag");function f(){D.unbind(window,"mousemove",d),D.unbind(window,"mouseup",f),u()}l(f,"onMouseUp");function g(_){D.bind(window,"mousemove",d),D.bind(window,"mouseup",f),a=_.clientY}return l(g,"onMouseDown"),s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),D.bind(s.__input,"change",c),D.bind(s.__input,"blur",h),D.bind(s.__input,"mousedown",g),D.bind(s.__input,"keydown",function(_){_.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,u())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return l(e,"NumberControllerBox"),Ht(e,[{key:"updateDisplay",value:l(function(){return this.__input.value=this.__truncationSuspended?this.getValue():mu(this.getValue(),this.__precision),_n(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)},"updateDisplay")}]),e}(el);function Wa(i,e,t,n,r){return n+(r-n)*((i-e)/(t-e))}l(Wa,"map");var Ts=function(i){vn(e,i);function e(t,n,r,s,o){Vt(this,e);var a=xn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:r,max:s,step:o})),c=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),D.bind(a.__background,"mousedown",u),D.bind(a.__background,"touchstart",f),D.addClass(a.__background,"slider"),D.addClass(a.__foreground,"slider-fg");function u(x){document.activeElement.blur(),D.bind(window,"mousemove",h),D.bind(window,"mouseup",d),h(x)}l(u,"onMouseDown");function h(x){x.preventDefault();var m=c.__background.getBoundingClientRect();return c.setValue(Wa(x.clientX,m.left,m.right,c.__min,c.__max)),!1}l(h,"onMouseDrag");function d(){D.unbind(window,"mousemove",h),D.unbind(window,"mouseup",d),c.__onFinishChange&&c.__onFinishChange.call(c,c.getValue())}l(d,"onMouseUp");function f(x){x.touches.length===1&&(D.bind(window,"touchmove",g),D.bind(window,"touchend",_),g(x))}l(f,"onTouchStart");function g(x){var m=x.touches[0].clientX,p=c.__background.getBoundingClientRect();c.setValue(Wa(m,p.left,p.right,c.__min,c.__max))}l(g,"onTouchMove");function _(){D.unbind(window,"touchmove",g),D.unbind(window,"touchend",_),c.__onFinishChange&&c.__onFinishChange.call(c,c.getValue())}return l(_,"onTouchEnd"),a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return l(e,"NumberControllerSlider"),Ht(e,[{key:"updateDisplay",value:l(function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",_n(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)},"updateDisplay")}]),e}(el),tl=function(i){vn(e,i);function e(t,n,r){Vt(this,e);var s=xn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=s;return s.__button=document.createElement("div"),s.__button.innerHTML=r===void 0?"Fire":r,D.bind(s.__button,"click",function(a){return a.preventDefault(),o.fire(),!1}),D.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return l(e,"FunctionController"),Ht(e,[{key:"fire",value:l(function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())},"fire")}]),e}(Fn),Cs=function(i){vn(e,i);function e(t,n){Vt(this,e);var r=xn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));r.__color=new xt(r.getValue()),r.__temp=new xt(0);var s=r;r.domElement=document.createElement("div"),D.makeSelectable(r.domElement,!1),r.__selector=document.createElement("div"),r.__selector.className="selector",r.__saturation_field=document.createElement("div"),r.__saturation_field.className="saturation-field",r.__field_knob=document.createElement("div"),r.__field_knob.className="field-knob",r.__field_knob_border="2px solid ",r.__hue_knob=document.createElement("div"),r.__hue_knob.className="hue-knob",r.__hue_field=document.createElement("div"),r.__hue_field.className="hue-field",r.__input=document.createElement("input"),r.__input.type="text",r.__input_textShadow="0 1px 1px ",D.bind(r.__input,"keydown",function(x){x.keyCode===13&&d.call(this)}),D.bind(r.__input,"blur",d),D.bind(r.__selector,"mousedown",function(){D.addClass(this,"drag").bind(window,"mouseup",function(){D.removeClass(s.__selector,"drag")})}),D.bind(r.__selector,"touchstart",function(){D.addClass(this,"drag").bind(window,"touchend",function(){D.removeClass(s.__selector,"drag")})});var o=document.createElement("div");$.extend(r.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),$.extend(r.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:r.__field_knob_border+(r.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),$.extend(r.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),$.extend(r.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),$.extend(o.style,{width:"100%",height:"100%",background:"none"}),Xa(o,"top","rgba(0,0,0,0)","#000"),$.extend(r.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),_u(r.__hue_field),$.extend(r.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:r.__input_textShadow+"rgba(0,0,0,0.7)"}),D.bind(r.__saturation_field,"mousedown",a),D.bind(r.__saturation_field,"touchstart",a),D.bind(r.__field_knob,"mousedown",a),D.bind(r.__field_knob,"touchstart",a),D.bind(r.__hue_field,"mousedown",c),D.bind(r.__hue_field,"touchstart",c);function a(x){g(x),D.bind(window,"mousemove",g),D.bind(window,"touchmove",g),D.bind(window,"mouseup",u),D.bind(window,"touchend",u)}l(a,"fieldDown");function c(x){_(x),D.bind(window,"mousemove",_),D.bind(window,"touchmove",_),D.bind(window,"mouseup",h),D.bind(window,"touchend",h)}l(c,"fieldDownH");function u(){D.unbind(window,"mousemove",g),D.unbind(window,"touchmove",g),D.unbind(window,"mouseup",u),D.unbind(window,"touchend",u),f()}l(u,"fieldUpSV");function h(){D.unbind(window,"mousemove",_),D.unbind(window,"touchmove",_),D.unbind(window,"mouseup",h),D.unbind(window,"touchend",h),f()}l(h,"fieldUpH");function d(){var x=As(this.value);x!==!1?(s.__color.__state=x,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}l(d,"onBlur");function f(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}l(f,"onFinish"),r.__saturation_field.appendChild(o),r.__selector.appendChild(r.__field_knob),r.__selector.appendChild(r.__saturation_field),r.__selector.appendChild(r.__hue_field),r.__hue_field.appendChild(r.__hue_knob),r.domElement.appendChild(r.__input),r.domElement.appendChild(r.__selector),r.updateDisplay();function g(x){x.type.indexOf("touch")===-1&&x.preventDefault();var m=s.__saturation_field.getBoundingClientRect(),p=x.touches&&x.touches[0]||x,A=p.clientX,M=p.clientY,E=(A-m.left)/(m.right-m.left),F=1-(M-m.top)/(m.bottom-m.top);return F>1?F=1:F<0&&(F=0),E>1?E=1:E<0&&(E=0),s.__color.v=F,s.__color.s=E,s.setValue(s.__color.toOriginal()),!1}l(g,"setSV");function _(x){x.type.indexOf("touch")===-1&&x.preventDefault();var m=s.__hue_field.getBoundingClientRect(),p=x.touches&&x.touches[0]||x,A=p.clientY,M=1-(A-m.top)/(m.bottom-m.top);return M>1?M=1:M<0&&(M=0),s.__color.h=M*360,s.setValue(s.__color.toOriginal()),!1}return l(_,"setH"),r}return l(e,"ColorController"),Ht(e,[{key:"updateDisplay",value:l(function(){var n=As(this.getValue());if(n!==!1){var r=!1;$.each(xt.COMPONENTS,function(a){if(!$.isUndefined(n[a])&&!$.isUndefined(this.__color.__state[a])&&n[a]!==this.__color.__state[a])return r=!0,{}},this),r&&$.extend(this.__color.__state,n)}$.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,o=255-s;$.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,Xa(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),$.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})},"updateDisplay")}]),e}(Fn),gu=["-moz-","-o-","-webkit-","-ms-",""];function Xa(i,e,t,n){i.style.background="",$.each(gu,function(r){i.style.cssText+="background: "+r+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}l(Xa,"linearGradient");function _u(i){i.style.background="",i.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",i.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}l(_u,"hueGradient");var vu={load:l(function(e,t){var n=t||document,r=n.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,n.getElementsByTagName("head")[0].appendChild(r)},"load"),inject:l(function(e,t){var n=t||document,r=document.createElement("style");r.type="text/css",r.innerHTML=e;var s=n.getElementsByTagName("head")[0];try{s.appendChild(r)}catch{}},"inject")},xu=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,yu=l(function(e,t){var n=e[t];return $.isArray(arguments[2])||$.isObject(arguments[2])?new fu(e,t,arguments[2]):$.isNumber(n)?$.isNumber(arguments[2])&&$.isNumber(arguments[3])?$.isNumber(arguments[4])?new Ts(e,t,arguments[2],arguments[3],arguments[4]):new Ts(e,t,arguments[2],arguments[3]):$.isNumber(arguments[4])?new mr(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new mr(e,t,{min:arguments[2],max:arguments[3]}):$.isString(n)?new pu(e,t):$.isFunction(n)?new tl(e,t,""):$.isBoolean(n)?new ja(e,t):null},"ControllerFactory");function bu(i){setTimeout(i,1e3/60)}l(bu,"requestAnimationFrame");var Mu=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||bu,Su=function(){function i(){Vt(this,i),this.backgroundElement=document.createElement("div"),$.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),D.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),$.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;D.bind(this.backgroundElement,"click",function(){e.hide()})}return l(i,"CenteredDiv"),Ht(i,[{key:"show",value:l(function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),$.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})},"show")},{key:"hide",value:l(function(){var t=this,n=l(function r(){t.domElement.style.display="none",t.backgroundElement.style.display="none",D.unbind(t.domElement,"webkitTransitionEnd",r),D.unbind(t.domElement,"transitionend",r),D.unbind(t.domElement,"oTransitionEnd",r)},"hide");D.bind(this.domElement,"webkitTransitionEnd",n),D.bind(this.domElement,"transitionend",n),D.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"},"hide")},{key:"layout",value:l(function(){this.domElement.style.left=window.innerWidth/2-D.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-D.getHeight(this.domElement)/2+"px"},"layout")}]),i}(),wu=lu(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);vu.inject(wu);var qa="dg",Ya=72,$a=20,Xi="Default",Hi=function(){try{return!!window.localStorage}catch{return!1}}(),Gi=void 0,Za=!0,ni=void 0,Es=!1,nl=[],rt=l(function i(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),D.addClass(this.domElement,qa),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=$.defaults(n,{closeOnTop:!1,autoPlace:!0,width:i.DEFAULT_WIDTH}),n=$.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),$.isUndefined(n.load)?n.load={preset:Xi}:n.preset&&(n.load.preset=n.preset),$.isUndefined(n.parent)&&n.hideable&&nl.push(this),n.resizable=$.isUndefined(n.parent)&&n.resizable,n.autoPlace&&$.isUndefined(n.scrollable)&&(n.scrollable=!0);var r=Hi&&localStorage.getItem(ii(this,"isLocal"))==="true",s=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:l(function(){return n.parent},"get$$1")},scrollable:{get:l(function(){return n.scrollable},"get$$1")},autoPlace:{get:l(function(){return n.autoPlace},"get$$1")},closeOnTop:{get:l(function(){return n.closeOnTop},"get$$1")},preset:{get:l(function(){return t.parent?t.getRoot().preset:n.load.preset},"get$$1"),set:l(function(f){t.parent?t.getRoot().preset=f:n.load.preset=f,Cu(this),t.revert()},"set$$1")},width:{get:l(function(){return n.width},"get$$1"),set:l(function(f){n.width=f,Is(t,f)},"set$$1")},name:{get:l(function(){return n.name},"get$$1"),set:l(function(f){n.name=f,o&&(o.innerHTML=n.name)},"set$$1")},closed:{get:l(function(){return n.closed},"get$$1"),set:l(function(f){n.closed=f,n.closed?D.addClass(t.__ul,i.CLASS_CLOSED):D.removeClass(t.__ul,i.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=f?i.TEXT_OPEN:i.TEXT_CLOSED)},"set$$1")},load:{get:l(function(){return n.load},"get$$1")},useLocalStorage:{get:l(function(){return r},"get$$1"),set:l(function(f){Hi&&(r=f,f?D.bind(window,"unload",s):D.unbind(window,"unload",s),localStorage.setItem(ii(t,"isLocal"),f))},"set$$1")}}),$.isUndefined(n.parent)){if(this.closed=n.closed||!1,D.addClass(this.domElement,i.CLASS_MAIN),D.makeSelectable(this.domElement,!1),Hi&&r){t.useLocalStorage=!0;var a=localStorage.getItem(ii(this,"gui"));a&&(n.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=i.TEXT_CLOSED,D.addClass(this.__closeButton,i.CLASS_CLOSE_BUTTON),n.closeOnTop?(D.addClass(this.__closeButton,i.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(D.addClass(this.__closeButton,i.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),D.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var c=document.createTextNode(n.name);D.addClass(c,"controller-name"),o=Ds(t,c);var u=l(function(f){return f.preventDefault(),t.closed=!t.closed,!1},"onClickTitle");D.addClass(this.__ul,i.CLASS_CLOSED),D.addClass(o,"title"),D.bind(o,"click",u),n.closed||(this.closed=!1)}n.autoPlace&&($.isUndefined(n.parent)&&(Za&&(ni=document.createElement("div"),D.addClass(ni,qa),D.addClass(ni,i.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(ni),Za=!1),ni.appendChild(this.domElement),D.addClass(this.domElement,i.CLASS_AUTO_PLACE)),this.parent||Is(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},D.bind(window,"resize",this.__resizeHandler),D.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),D.bind(this.__ul,"transitionend",this.__resizeHandler),D.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&Tu(this),s=l(function(){Hi&&localStorage.getItem(ii(t,"isLocal"))==="true"&&localStorage.setItem(ii(t,"gui"),JSON.stringify(t.getSaveObject()))},"saveToLocalStorage"),this.saveToLocalStorageIfPossible=s;function h(){var d=t.getRoot();d.width+=1,$.defer(function(){d.width-=1})}l(h,"resetWidth"),n.parent||h()},"GUI");rt.toggleHide=function(){Es=!Es,$.each(nl,function(i){i.domElement.style.display=Es?"none":""})};rt.CLASS_AUTO_PLACE="a";rt.CLASS_AUTO_PLACE_CONTAINER="ac";rt.CLASS_MAIN="main";rt.CLASS_CONTROLLER_ROW="cr";rt.CLASS_TOO_TALL="taller-than-window";rt.CLASS_CLOSED="closed";rt.CLASS_CLOSE_BUTTON="close-button";rt.CLASS_CLOSE_TOP="close-top";rt.CLASS_CLOSE_BOTTOM="close-bottom";rt.CLASS_DRAG="drag";rt.DEFAULT_WIDTH=245;rt.TEXT_CLOSED="Close Controls";rt.TEXT_OPEN="Open Controls";rt._keydownHandler=function(i){document.activeElement.type!=="text"&&(i.which===Ya||i.keyCode===Ya)&&rt.toggleHide()};D.bind(window,"keydown",rt._keydownHandler,!1);$.extend(rt.prototype,{add:l(function(e,t){return Wi(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},"add"),addColor:l(function(e,t){return Wi(this,e,t,{color:!0})},"addColor"),remove:l(function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;$.defer(function(){t.onResize()})},"remove"),destroy:l(function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&ni.removeChild(this.domElement);var e=this;$.each(this.__folders,function(t){e.removeFolder(t)}),D.unbind(window,"keydown",rt._keydownHandler,!1),Ja(this)},"destroy"),addFolder:l(function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new rt(t);this.__folders[e]=n;var r=Ds(this,n.domElement);return D.addClass(r,"folder"),n},"addFolder"),removeFolder:l(function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],Ja(e);var t=this;$.each(e.__folders,function(n){e.removeFolder(n)}),$.defer(function(){t.onResize()})},"removeFolder"),open:l(function(){this.closed=!1},"open"),close:l(function(){this.closed=!0},"close"),hide:l(function(){this.domElement.style.display="none"},"hide"),show:l(function(){this.domElement.style.display=""},"show"),onResize:l(function(){var e=this.getRoot();if(e.scrollable){var t=D.getOffset(e.__ul).top,n=0;$.each(e.__ul.childNodes,function(r){e.autoPlace&&r===e.__save_row||(n+=D.getHeight(r))}),window.innerHeight-t-$a<n?(D.addClass(e.domElement,rt.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-$a+"px"):(D.removeClass(e.domElement,rt.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&$.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},"onResize"),onResizeDebounced:$.debounce(function(){this.onResize()},50),remember:l(function(){if($.isUndefined(Gi)&&(Gi=new Su,Gi.domElement.innerHTML=xu),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;$.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&Au(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&Is(this,this.width)},"remember"),getRoot:l(function(){for(var e=this;e.parent;)e=e.parent;return e},"getRoot"),getSaveObject:l(function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=fr(this)),e.folders={},$.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},"getSaveObject"),save:l(function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=fr(this),Rs(this,!1),this.saveToLocalStorageIfPossible()},"save"),saveAs:l(function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[Xi]=fr(this,!0)),this.load.remembered[e]=fr(this),this.preset=e,Ps(this,e,!0),this.saveToLocalStorageIfPossible()},"saveAs"),revert:l(function(e){$.each(this.__controllers,function(t){this.getRoot().load.remembered?il(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),$.each(this.__folders,function(t){t.revert(t)}),e||Rs(this.getRoot(),!1)},"revert"),listen:l(function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&rl(this.__listening)},"listen"),updateDisplay:l(function(){$.each(this.__controllers,function(e){e.updateDisplay()}),$.each(this.__folders,function(e){e.updateDisplay()})},"updateDisplay")});function Ds(i,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?i.__ul.insertBefore(n,t):i.__ul.appendChild(n),i.onResize(),n}l(Ds,"addRow");function Ja(i){D.unbind(window,"resize",i.__resizeHandler),i.saveToLocalStorageIfPossible&&D.unbind(window,"unload",i.saveToLocalStorageIfPossible)}l(Ja,"removeListeners");function Rs(i,e){var t=i.__preset_select[i.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}l(Rs,"markPresetModified");function Eu(i,e,t){if(t.__li=e,t.__gui=i,$.extend(t,{options:l(function(o){if(arguments.length>1){var a=t.__li.nextElementSibling;return t.remove(),Wi(i,t.object,t.property,{before:a,factoryArgs:[$.toArray(arguments)]})}if($.isArray(o)||$.isObject(o)){var c=t.__li.nextElementSibling;return t.remove(),Wi(i,t.object,t.property,{before:c,factoryArgs:[o]})}},"options"),name:l(function(o){return t.__li.firstElementChild.firstElementChild.innerHTML=o,t},"name"),listen:l(function(){return t.__gui.listen(t),t},"listen"),remove:l(function(){return t.__gui.remove(t),t},"remove")}),t instanceof Ts){var n=new mr(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});$.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var o=t[s],a=n[s];t[s]=n[s]=function(){var c=Array.prototype.slice.call(arguments);return a.apply(n,c),o.apply(t,c)}}),D.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof mr){var r=l(function(o){if($.isNumber(t.__min)&&$.isNumber(t.__max)){var a=t.__li.firstElementChild.firstElementChild.innerHTML,c=t.__gui.__listening.indexOf(t)>-1;t.remove();var u=Wi(i,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return u.name(a),c&&u.listen(),u}return o},"r");t.min=$.compose(r,t.min),t.max=$.compose(r,t.max)}else t instanceof ja?(D.bind(e,"click",function(){D.fakeEvent(t.__checkbox,"click")}),D.bind(t.__checkbox,"click",function(s){s.stopPropagation()})):t instanceof tl?(D.bind(e,"click",function(){D.fakeEvent(t.__button,"click")}),D.bind(e,"mouseover",function(){D.addClass(t.__button,"hover")}),D.bind(e,"mouseout",function(){D.removeClass(t.__button,"hover")})):t instanceof Cs&&(D.addClass(e,"color"),t.updateDisplay=$.compose(function(s){return e.style.borderLeftColor=t.__color.toString(),s},t.updateDisplay),t.updateDisplay());t.setValue=$.compose(function(s){return i.getRoot().__preset_select&&t.isModified()&&Rs(i.getRoot(),!0),s},t.setValue)}l(Eu,"augmentController");function il(i,e){var t=i.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var r=t.__rememberedObjectIndecesToControllers[n];if(r===void 0&&(r={},t.__rememberedObjectIndecesToControllers[n]=r),r[e.property]=e,t.load&&t.load.remembered){var s=t.load.remembered,o=void 0;if(s[i.preset])o=s[i.preset];else if(s[Xi])o=s[Xi];else return;if(o[n]&&o[n][e.property]!==void 0){var a=o[n][e.property];e.initialValue=a,e.setValue(a)}}}}l(il,"recallSavedValue");function Wi(i,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var r=void 0;if(n.color)r=new Cs(e,t);else{var s=[e,t].concat(n.factoryArgs);r=yu.apply(i,s)}n.before instanceof Fn&&(n.before=n.before.__li),il(i,r),D.addClass(r.domElement,"c");var o=document.createElement("span");D.addClass(o,"property-name"),o.innerHTML=r.property;var a=document.createElement("div");a.appendChild(o),a.appendChild(r.domElement);var c=Ds(i,a,n.before);return D.addClass(c,rt.CLASS_CONTROLLER_ROW),r instanceof Cs?D.addClass(c,"color"):D.addClass(c,uu(r.getValue())),Eu(i,c,r),i.__controllers.push(r),r}l(Wi,"_add");function ii(i,e){return document.location.href+"."+e}l(ii,"getLocalStorageHash");function Ps(i,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,i.__preset_select.appendChild(n),t&&(i.__preset_select.selectedIndex=i.__preset_select.length-1)}l(Ps,"addPresetOption");function Ka(i,e){e.style.display=i.useLocalStorage?"block":"none"}l(Ka,"showHideExplain");function Au(i){var e=i.__save_row=document.createElement("li");D.addClass(i.domElement,"has-save"),i.__ul.insertBefore(e,i.__ul.firstChild),D.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",D.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",D.addClass(n,"button"),D.addClass(n,"save");var r=document.createElement("span");r.innerHTML="New",D.addClass(r,"button"),D.addClass(r,"save-as");var s=document.createElement("span");s.innerHTML="Revert",D.addClass(s,"button"),D.addClass(s,"revert");var o=i.__preset_select=document.createElement("select");if(i.load&&i.load.remembered?$.each(i.load.remembered,function(d,f){Ps(i,f,f===i.preset)}):Ps(i,Xi,!1),D.bind(o,"change",function(){for(var d=0;d<i.__preset_select.length;d++)i.__preset_select[d].innerHTML=i.__preset_select[d].value;i.preset=this.value}),e.appendChild(o),e.appendChild(t),e.appendChild(n),e.appendChild(r),e.appendChild(s),Hi){var a=document.getElementById("dg-local-explain"),c=document.getElementById("dg-local-storage"),u=document.getElementById("dg-save-locally");u.style.display="block",localStorage.getItem(ii(i,"isLocal"))==="true"&&c.setAttribute("checked","checked"),Ka(i,a),D.bind(c,"change",function(){i.useLocalStorage=!i.useLocalStorage,Ka(i,a)})}var h=document.getElementById("dg-new-constructor");D.bind(h,"keydown",function(d){d.metaKey&&(d.which===67||d.keyCode===67)&&Gi.hide()}),D.bind(t,"click",function(){h.innerHTML=JSON.stringify(i.getSaveObject(),void 0,2),Gi.show(),h.focus(),h.select()}),D.bind(n,"click",function(){i.save()}),D.bind(r,"click",function(){var d=prompt("Enter a new preset name.");d&&i.saveAs(d)}),D.bind(s,"click",function(){i.revert()})}l(Au,"addSaveMenu");function Tu(i){var e=void 0;i.__resize_handle=document.createElement("div"),$.extend(i.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(s){return s.preventDefault(),i.width+=e-s.clientX,i.onResize(),e=s.clientX,!1}l(t,"drag");function n(){D.removeClass(i.__closeButton,rt.CLASS_DRAG),D.unbind(window,"mousemove",t),D.unbind(window,"mouseup",n)}l(n,"dragStop");function r(s){return s.preventDefault(),e=s.clientX,D.addClass(i.__closeButton,rt.CLASS_DRAG),D.bind(window,"mousemove",t),D.bind(window,"mouseup",n),!1}l(r,"dragStart"),D.bind(i.__resize_handle,"mousedown",r),D.bind(i.__closeButton,"mousedown",r),i.domElement.insertBefore(i.__resize_handle,i.domElement.firstElementChild)}l(Tu,"addResizeHandle");function Is(i,e){i.domElement.style.width=e+"px",i.__save_row&&i.autoPlace&&(i.__save_row.style.width=e+"px"),i.__closeButton&&(i.__closeButton.style.width=e+"px")}l(Is,"setWidth");function fr(i,e){var t={};return $.each(i.__rememberedObjects,function(n,r){var s={},o=i.__rememberedObjectIndecesToControllers[r];$.each(o,function(a,c){s[c]=e?a.initialValue:a.getValue()}),t[r]=s}),t}l(fr,"getCurrentPreset");function Cu(i){for(var e=0;e<i.__preset_select.length;e++)i.__preset_select[e].value===i.preset&&(i.__preset_select.selectedIndex=e)}l(Cu,"setPresetSelectIndex");function rl(i){i.length!==0&&Mu.call(window,function(){rl(i)}),$.each(i,function(e){e.updateDisplay()})}l(rl,"updateDisplays");var ba="167";var Ru=0,sl=1,Pu=2;var oc=1,Iu=2,an=3,Pn=0,Pt=1,cn=2,Tn=0,Ti=1,ol=2,al=3,ll=4,Lu=5,Xn=100,Uu=101,Du=102,Nu=103,Ou=104,Fu=200,Bu=201,zu=202,ku=203,uo=204,ho=205,Vu=206,Hu=207,Gu=208,Wu=209,Xu=210,qu=211,Yu=212,$u=213,Zu=214,Ju=0,Ku=1,Qu=2,Yr=3,ju=4,eh=5,th=6,nh=7,ac=0,ih=1,rh=2,Cn=0,sh=1,oh=2,ah=3,lh=4,ch=5,uh=6,hh=7;var lc=300,Li=301,Ui=302,fo=303,po=304,ms=306,mo=1e3,Yn=1001,go=1002,He=1003,dh=1004;var gr=1005;var qt=1006,Ns=1007;var $n=1008;var fn=1009,cc=1010,uc=1011,nr=1012,Ma=1013,Jn=1014,un=1015,lr=1016,Sa=1017,wa=1018,Di=1020,hc=35902,dc=1021,fc=1022,Yt=1023,pc=1024,mc=1025,Ci=1026,Ni=1027,gc=1028,Ea=1029,_c=1030,Aa=1031;var Ta=1033,Hr=33776,Gr=33777,Wr=33778,Xr=33779,_o=35840,vo=35841,xo=35842,yo=35843,bo=36196,Mo=37492,So=37496,wo=37808,Eo=37809,Ao=37810,To=37811,Co=37812,Ro=37813,Po=37814,Io=37815,Lo=37816,Uo=37817,Do=37818,No=37819,Oo=37820,Fo=37821,qr=36492,Bo=36494,zo=36495,vc=36283,ko=36284,Vo=36285,Ho=36286;var $r=2300,Go=2301,Os=2302,cl=2400,ul=2401,hl=2402;var fh=3200,ph=3201;var mh=0,gh=1,An="",Kt="srgb",Dn="srgb-linear",Ca="display-p3",gs="display-p3-linear",Zr="linear",st="srgb",Jr="rec709",Kr="p3";var si=7680;var dl=519,_h=512,vh=513,xh=514,xc=515,yh=516,bh=517,Mh=518,Sh=519,Wo=35044;var fl="300 es",hn=2e3,Qr=2001,In=class{static{l(this,"EventDispatcher")}addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Fs=Math.PI/180,Xo=180/Math.PI;function Rn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}l(Rn,"generateUUID");function Rt(i,e,t){return Math.max(e,Math.min(t,i))}l(Rt,"clamp");function wh(i,e){return(i%e+e)%e}l(wh,"euclideanModulo");function Bs(i,e,t){return(1-t)*i+t*e}l(Bs,"lerp");function jt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}l(jt,"denormalize");function nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}l(nt,"normalize");var ge=class i{static{l(this,"Vector2")}constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fe=class i{static{l(this,"Matrix3")}constructor(e,t,n,r,s,o,a,c,u){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,u)}set(e,t,n,r,s,o,a,c,u){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],u=n[1],h=n[4],d=n[7],f=n[2],g=n[5],_=n[8],x=r[0],m=r[3],p=r[6],A=r[1],M=r[4],E=r[7],F=r[2],C=r[5],R=r[8];return s[0]=o*x+a*A+c*F,s[3]=o*m+a*M+c*C,s[6]=o*p+a*E+c*R,s[1]=u*x+h*A+d*F,s[4]=u*m+h*M+d*C,s[7]=u*p+h*E+d*R,s[2]=f*x+g*A+_*F,s[5]=f*m+g*M+_*C,s[8]=f*p+g*E+_*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],u=e[7],h=e[8];return t*o*h-t*a*u-n*s*h+n*a*c+r*s*u-r*o*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],u=e[7],h=e[8],d=h*o-a*u,f=a*c-h*s,g=u*s-o*c,_=t*d+n*f+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return e[0]=d*x,e[1]=(r*u-h*n)*x,e[2]=(a*n-r*o)*x,e[3]=f*x,e[4]=(h*t-r*c)*x,e[5]=(r*s-a*t)*x,e[6]=g*x,e[7]=(n*c-u*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*o+u*a)+o+e,-r*u,r*c,-r*(-u*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(zs.makeScale(e,t)),this}rotate(e){return this.premultiply(zs.makeRotation(-e)),this}translate(e,t){return this.premultiply(zs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},zs=new Fe;function yc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}l(yc,"arrayNeedsUint32");function ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}l(ir,"createElementNS");function Eh(){let i=ir("canvas");return i.style.display="block",i}l(Eh,"createCanvasElement");var pl={};function Ri(i){i in pl||(pl[i]=!0,console.warn(i))}l(Ri,"warnOnce");function Ah(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}l(s,"probe"),setTimeout(s,t)})}l(Ah,"probeAsync");var ml=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gl=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qi={[Dn]:{transfer:Zr,primaries:Jr,luminanceCoefficients:[.2126,.7152,.0722],toReference:l(i=>i,"toReference"),fromReference:l(i=>i,"fromReference")},[Kt]:{transfer:st,primaries:Jr,luminanceCoefficients:[.2126,.7152,.0722],toReference:l(i=>i.convertSRGBToLinear(),"toReference"),fromReference:l(i=>i.convertLinearToSRGB(),"fromReference")},[gs]:{transfer:Zr,primaries:Kr,luminanceCoefficients:[.2289,.6917,.0793],toReference:l(i=>i.applyMatrix3(gl),"toReference"),fromReference:l(i=>i.applyMatrix3(ml),"fromReference")},[Ca]:{transfer:st,primaries:Kr,luminanceCoefficients:[.2289,.6917,.0793],toReference:l(i=>i.convertSRGBToLinear().applyMatrix3(gl),"toReference"),fromReference:l(i=>i.applyMatrix3(ml).convertLinearToSRGB(),"fromReference")}},Th=new Set([Dn,gs]),Qe={enabled:!0,_workingColorSpace:Dn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Th.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:l(function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=qi[e].toReference,r=qi[t].fromReference;return r(n(i))},"convert"),fromWorkingColorSpace:l(function(i,e){return this.convert(i,this._workingColorSpace,e)},"fromWorkingColorSpace"),toWorkingColorSpace:l(function(i,e){return this.convert(i,e,this._workingColorSpace)},"toWorkingColorSpace"),getPrimaries:l(function(i){return qi[i].primaries},"getPrimaries"),getTransfer:l(function(i){return i===An?Zr:qi[i].transfer},"getTransfer"),getLuminanceCoefficients:l(function(i,e=this._workingColorSpace){return i.fromArray(qi[e].luminanceCoefficients)},"getLuminanceCoefficients")};function Pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}l(Pi,"SRGBToLinear");function ks(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}l(ks,"LinearToSRGB");var oi,qo=class{static{l(this,"ImageUtils")}static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{oi===void 0&&(oi=ir("canvas")),oi.width=e.width,oi.height=e.height;let n=oi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ir("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Pi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ch=0,jr=class{static{l(this,"Source")}constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Rn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Vs(r[o].image)):s.push(Vs(r[o]))}else s=Vs(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Vs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}l(Vs,"serializeImage");var Rh=0,Ot=class i extends In{static{l(this,"Texture")}constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Yn,r=Yn,s=qt,o=$n,a=Yt,c=fn,u=i.DEFAULT_ANISOTROPY,h=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=Rn(),this.name="",this.source=new jr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mo:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mo:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=lc;Ot.DEFAULT_ANISOTROPY=1;var se=class i{static{l(this,"Vector4")}constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,u=c[0],h=c[4],d=c[8],f=c[1],g=c[5],_=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(_+m)<.1&&Math.abs(u+g+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(u+1)/2,E=(g+1)/2,F=(p+1)/2,C=(h+f)/4,R=(d+x)/4,k=(_+m)/4;return M>E&&M>F?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=C/n,s=R/n):E>F?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=C/r,s=k/r):F<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(F),n=R/s,r=k/s),this.set(n,r,s,t),this}let A=Math.sqrt((m-_)*(m-_)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(d-x)/A,this.z=(f-h)/A,this.w=Math.acos((u+g+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yo=class extends In{static{l(this,"RenderTarget")}constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new se(0,0,e,t),this.scissorTest=!1,this.viewport=new se(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Ot(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new jr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends Yo{static{l(this,"WebGLRenderTarget")}constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},es=class extends Ot{static{l(this,"DataArrayTexture")}constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=He,this.minFilter=He,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $o=class extends Ot{static{l(this,"Data3DTexture")}constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=He,this.minFilter=He,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ln=class{static{l(this,"Quaternion")}constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],u=n[r+1],h=n[r+2],d=n[r+3],f=s[o+0],g=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[t+0]=c,e[t+1]=u,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=g,e[t+2]=_,e[t+3]=x;return}if(d!==x||c!==f||u!==g||h!==_){let m=1-a,p=c*f+u*g+h*_+d*x,A=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let F=Math.sqrt(M),C=Math.atan2(F,p*A);m=Math.sin(m*C)/F,a=Math.sin(a*C)/F}let E=a*A;if(c=c*m+f*E,u=u*m+g*E,h=h*m+_*E,d=d*m+x*E,m===1-a){let F=1/Math.sqrt(c*c+u*u+h*h+d*d);c*=F,u*=F,h*=F,d*=F}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],c=n[r+1],u=n[r+2],h=n[r+3],d=s[o],f=s[o+1],g=s[o+2],_=s[o+3];return e[t]=a*_+h*d+c*g-u*f,e[t+1]=c*_+h*f+u*d-a*g,e[t+2]=u*_+h*g+a*f-c*d,e[t+3]=h*_-a*d-c*f-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,u=a(n/2),h=a(r/2),d=a(s/2),f=c(n/2),g=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=f*h*d+u*g*_,this._y=u*g*d-f*h*_,this._z=u*h*_+f*g*d,this._w=u*h*d-f*g*_;break;case"YXZ":this._x=f*h*d+u*g*_,this._y=u*g*d-f*h*_,this._z=u*h*_-f*g*d,this._w=u*h*d+f*g*_;break;case"ZXY":this._x=f*h*d-u*g*_,this._y=u*g*d+f*h*_,this._z=u*h*_+f*g*d,this._w=u*h*d-f*g*_;break;case"ZYX":this._x=f*h*d-u*g*_,this._y=u*g*d+f*h*_,this._z=u*h*_-f*g*d,this._w=u*h*d+f*g*_;break;case"YZX":this._x=f*h*d+u*g*_,this._y=u*g*d+f*h*_,this._z=u*h*_-f*g*d,this._w=u*h*d-f*g*_;break;case"XZY":this._x=f*h*d-u*g*_,this._y=u*g*d-f*h*_,this._z=u*h*_+f*g*d,this._w=u*h*d+f*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],u=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){let g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(h-c)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(n>a&&n>d){let g=2*Math.sqrt(1+n-a-d);this._w=(h-c)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>d){let g=2*Math.sqrt(1+a-n-d);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(c+h)/g}else{let g=2*Math.sqrt(1+d-n-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+o*a+r*u-s*c,this._y=r*h+o*c+s*a-n*u,this._z=s*h+o*u+n*c-r*a,this._w=o*h-n*a-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let g=1-t;return this._w=g*o+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}let u=Math.sqrt(c),h=Math.atan2(u,a),d=Math.sin((1-t)*h)/u,f=Math.sin(t*h)/u;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{static{l(this,"Vector3")}constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_l.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_l.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,u=2*(o*r-a*n),h=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+c*u+o*d-a*h,this.y=n+c*h+a*u-s*d,this.z=r+c*d+s*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hs.copy(this).projectOnVector(e),this.sub(Hs)}reflect(e){return this.sub(Hs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hs=new N,_l=new Ln,Kn=class{static{l(this,"Box3")}constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gt):Gt.fromBufferAttribute(s,o),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(e.matrixWorld),this.union(_r)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yi),vr.subVectors(this.max,Yi),ai.subVectors(e.a,Yi),li.subVectors(e.b,Yi),ci.subVectors(e.c,Yi),yn.subVectors(li,ai),bn.subVectors(ci,li),Bn.subVectors(ai,ci);let t=[0,-yn.z,yn.y,0,-bn.z,bn.y,0,-Bn.z,Bn.y,yn.z,0,-yn.x,bn.z,0,-bn.x,Bn.z,0,-Bn.x,-yn.y,yn.x,0,-bn.y,bn.x,0,-Bn.y,Bn.x,0];return!Gs(t,ai,li,ci,vr)||(t=[1,0,0,0,1,0,0,0,1],!Gs(t,ai,li,ci,vr))?!1:(xr.crossVectors(yn,bn),t=[xr.x,xr.y,xr.z],Gs(t,ai,li,ci,vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},tn=[new N,new N,new N,new N,new N,new N,new N,new N],Gt=new N,_r=new Kn,ai=new N,li=new N,ci=new N,yn=new N,bn=new N,Bn=new N,Yi=new N,vr=new N,xr=new N,zn=new N;function Gs(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){zn.fromArray(i,s);let a=r.x*Math.abs(zn.x)+r.y*Math.abs(zn.y)+r.z*Math.abs(zn.z),c=e.dot(zn),u=t.dot(zn),h=n.dot(zn);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>a)return!1}return!0}l(Gs,"satForAxes");var Ph=new Kn,$i=new N,Ws=new N,rr=class{static{l(this,"Sphere")}constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ph.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$i.subVectors(e,this.center);let t=$i.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector($i,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ws.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($i.copy(e.center).add(Ws)),this.expandByPoint($i.copy(e.center).sub(Ws))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},nn=new N,Xs=new N,yr=new N,Mn=new N,qs=new N,br=new N,Ys=new N,Zo=class{static{l(this,"Ray")}constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nn.copy(this.origin).addScaledVector(this.direction,t),nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Xs.copy(e).add(t).multiplyScalar(.5),yr.copy(t).sub(e).normalize(),Mn.copy(this.origin).sub(Xs);let s=e.distanceTo(t)*.5,o=-this.direction.dot(yr),a=Mn.dot(this.direction),c=-Mn.dot(yr),u=Mn.lengthSq(),h=Math.abs(1-o*o),d,f,g,_;if(h>0)if(d=o*c-a,f=o*a-c,_=s*h,d>=0)if(f>=-_)if(f<=_){let x=1/h;d*=x,f*=x,g=d*(d+o*f+2*a)+f*(o*d+f+2*c)+u}else f=s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*c)+u;else f=-s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*c)+u;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),g=-d*d+f*(f+2*c)+u):f<=_?(d=0,f=Math.min(Math.max(-s,-c),s),g=f*(f+2*c)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),g=-d*d+f*(f+2*c)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Xs).addScaledVector(yr,f),g}intersectSphere(e,t){nn.subVectors(e.center,this.origin);let n=nn.dot(this.direction),r=nn.dot(nn)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c,u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(n=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(n=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,nn)!==null}intersectTriangle(e,t,n,r,s){qs.subVectors(t,e),br.subVectors(n,e),Ys.crossVectors(qs,br);let o=this.direction.dot(Ys),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mn.subVectors(this.origin,e);let c=a*this.direction.dot(br.crossVectors(Mn,br));if(c<0)return null;let u=a*this.direction.dot(qs.cross(Mn));if(u<0||c+u>o)return null;let h=-a*Mn.dot(Ys);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gt=class i{static{l(this,"Matrix4")}constructor(e,t,n,r,s,o,a,c,u,h,d,f,g,_,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,u,h,d,f,g,_,x,m)}set(e,t,n,r,s,o,a,c,u,h,d,f,g,_,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=u,p[6]=h,p[10]=d,p[14]=f,p[3]=g,p[7]=_,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/ui.setFromMatrixColumn(e,0).length(),s=1/ui.setFromMatrixColumn(e,1).length(),o=1/ui.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*h,g=o*d,_=a*h,x=a*d;t[0]=c*h,t[4]=-c*d,t[8]=u,t[1]=g+_*u,t[5]=f-x*u,t[9]=-a*c,t[2]=x-f*u,t[6]=_+g*u,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,g=c*d,_=u*h,x=u*d;t[0]=f+x*a,t[4]=_*a-g,t[8]=o*u,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=g*a-_,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,g=c*d,_=u*h,x=u*d;t[0]=f-x*a,t[4]=-o*d,t[8]=_+g*a,t[1]=g+_*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*u,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,g=o*d,_=a*h,x=a*d;t[0]=c*h,t[4]=_*u-g,t[8]=f*u+x,t[1]=c*d,t[5]=x*u+f,t[9]=g*u-_,t[2]=-u,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,g=o*u,_=a*c,x=a*u;t[0]=c*h,t[4]=x-f*d,t[8]=_*d+g,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-u*h,t[6]=g*d+_,t[10]=f-x*d}else if(e.order==="XZY"){let f=o*c,g=o*u,_=a*c,x=a*u;t[0]=c*h,t[4]=-d,t[8]=u*h,t[1]=f*d+x,t[5]=o*h,t[9]=g*d-_,t[2]=_*d-g,t[6]=a*h,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ih,e,Lh)}lookAt(e,t,n){let r=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Sn.crossVectors(n,Ut),Sn.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Sn.crossVectors(n,Ut)),Sn.normalize(),Mr.crossVectors(Ut,Sn),r[0]=Sn.x,r[4]=Mr.x,r[8]=Ut.x,r[1]=Sn.y,r[5]=Mr.y,r[9]=Ut.y,r[2]=Sn.z,r[6]=Mr.z,r[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],u=n[12],h=n[1],d=n[5],f=n[9],g=n[13],_=n[2],x=n[6],m=n[10],p=n[14],A=n[3],M=n[7],E=n[11],F=n[15],C=r[0],R=r[4],k=r[8],S=r[12],b=r[1],I=r[5],q=r[9],V=r[13],X=r[2],K=r[6],G=r[10],ee=r[14],H=r[3],ue=r[7],pe=r[11],ye=r[15];return s[0]=o*C+a*b+c*X+u*H,s[4]=o*R+a*I+c*K+u*ue,s[8]=o*k+a*q+c*G+u*pe,s[12]=o*S+a*V+c*ee+u*ye,s[1]=h*C+d*b+f*X+g*H,s[5]=h*R+d*I+f*K+g*ue,s[9]=h*k+d*q+f*G+g*pe,s[13]=h*S+d*V+f*ee+g*ye,s[2]=_*C+x*b+m*X+p*H,s[6]=_*R+x*I+m*K+p*ue,s[10]=_*k+x*q+m*G+p*pe,s[14]=_*S+x*V+m*ee+p*ye,s[3]=A*C+M*b+E*X+F*H,s[7]=A*R+M*I+E*K+F*ue,s[11]=A*k+M*q+E*G+F*pe,s[15]=A*S+M*V+E*ee+F*ye,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],u=e[13],h=e[2],d=e[6],f=e[10],g=e[14],_=e[3],x=e[7],m=e[11],p=e[15];return _*(+s*c*d-r*u*d-s*a*f+n*u*f+r*a*g-n*c*g)+x*(+t*c*g-t*u*f+s*o*f-r*o*g+r*u*h-s*c*h)+m*(+t*u*d-t*a*g-s*o*d+n*o*g+s*a*h-n*u*h)+p*(-r*a*h-t*c*d+t*a*f+r*o*d-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],u=e[7],h=e[8],d=e[9],f=e[10],g=e[11],_=e[12],x=e[13],m=e[14],p=e[15],A=d*m*u-x*f*u+x*c*g-a*m*g-d*c*p+a*f*p,M=_*f*u-h*m*u-_*c*g+o*m*g+h*c*p-o*f*p,E=h*x*u-_*d*u+_*a*g-o*x*g-h*a*p+o*d*p,F=_*d*c-h*x*c-_*a*f+o*x*f+h*a*m-o*d*m,C=t*A+n*M+r*E+s*F;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/C;return e[0]=A*R,e[1]=(x*f*s-d*m*s-x*r*g+n*m*g+d*r*p-n*f*p)*R,e[2]=(a*m*s-x*c*s+x*r*u-n*m*u-a*r*p+n*c*p)*R,e[3]=(d*c*s-a*f*s-d*r*u+n*f*u+a*r*g-n*c*g)*R,e[4]=M*R,e[5]=(h*m*s-_*f*s+_*r*g-t*m*g-h*r*p+t*f*p)*R,e[6]=(_*c*s-o*m*s-_*r*u+t*m*u+o*r*p-t*c*p)*R,e[7]=(o*f*s-h*c*s+h*r*u-t*f*u-o*r*g+t*c*g)*R,e[8]=E*R,e[9]=(_*d*s-h*x*s-_*n*g+t*x*g+h*n*p-t*d*p)*R,e[10]=(o*x*s-_*a*s+_*n*u-t*x*u-o*n*p+t*a*p)*R,e[11]=(h*a*s-o*d*s-h*n*u+t*d*u+o*n*g-t*a*g)*R,e[12]=F*R,e[13]=(h*x*r-_*d*r+_*n*f-t*x*f-h*n*m+t*d*m)*R,e[14]=(_*a*r-o*x*r-_*n*c+t*x*c+o*n*m-t*a*m)*R,e[15]=(o*d*r-h*a*r+h*n*c-t*d*c-o*n*f+t*a*f)*R,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,u=s*o,h=s*a;return this.set(u*o+n,u*a-r*c,u*c+r*a,0,u*a+r*c,h*a+n,h*c-r*o,0,u*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,u=s+s,h=o+o,d=a+a,f=s*u,g=s*h,_=s*d,x=o*h,m=o*d,p=a*d,A=c*u,M=c*h,E=c*d,F=n.x,C=n.y,R=n.z;return r[0]=(1-(x+p))*F,r[1]=(g+E)*F,r[2]=(_-M)*F,r[3]=0,r[4]=(g-E)*C,r[5]=(1-(f+p))*C,r[6]=(m+A)*C,r[7]=0,r[8]=(_+M)*R,r[9]=(m-A)*R,r[10]=(1-(f+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=ui.set(r[0],r[1],r[2]).length(),o=ui.set(r[4],r[5],r[6]).length(),a=ui.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wt.copy(this);let u=1/s,h=1/o,d=1/a;return Wt.elements[0]*=u,Wt.elements[1]*=u,Wt.elements[2]*=u,Wt.elements[4]*=h,Wt.elements[5]*=h,Wt.elements[6]*=h,Wt.elements[8]*=d,Wt.elements[9]*=d,Wt.elements[10]*=d,t.setFromRotationMatrix(Wt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=hn){let c=this.elements,u=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),g,_;if(a===hn)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Qr)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=hn){let c=this.elements,u=1/(t-e),h=1/(n-r),d=1/(o-s),f=(t+e)*u,g=(n+r)*h,_,x;if(a===hn)_=(o+s)*d,x=-2*d;else if(a===Qr)_=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ui=new N,Wt=new gt,Ih=new N(0,0,0),Lh=new N(1,1,1),Sn=new N,Mr=new N,Ut=new N,vl=new gt,xl=new Ln,mn=class i{static{l(this,"Euler")}constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],u=r[5],h=r[9],d=r[2],f=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xl.setFromEuler(this),this.setFromQuaternion(xl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mn.DEFAULT_ORDER="XYZ";var ts=class{static{l(this,"Layers")}constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Uh=0,yl=new N,hi=new Ln,rn=new gt,Sr=new N,Zi=new N,Dh=new N,Nh=new Ln,bl=new N(1,0,0),Ml=new N(0,1,0),Sl=new N(0,0,1),wl={type:"added"},Oh={type:"removed"},di={type:"childadded",child:null},$s={type:"childremoved",child:null},zt=class i extends In{static{l(this,"Object3D")}constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new mn,n=new Ln,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}l(s,"onRotationChange");function o(){t.setFromQuaternion(n,void 0,!1)}l(o,"onQuaternionChange"),t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new Fe}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.multiply(hi),this}rotateOnWorldAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.premultiply(hi),this}rotateX(e){return this.rotateOnAxis(bl,e)}rotateY(e){return this.rotateOnAxis(Ml,e)}rotateZ(e){return this.rotateOnAxis(Sl,e)}translateOnAxis(e,t){return yl.copy(e).applyQuaternion(this.quaternion),this.position.add(yl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bl,e)}translateY(e){return this.translateOnAxis(Ml,e)}translateZ(e){return this.translateOnAxis(Sl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sr.copy(e):Sr.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(Zi,Sr,this.up):rn.lookAt(Sr,Zi,this.up),this.quaternion.setFromRotationMatrix(rn),r&&(rn.extractRotation(r.matrixWorld),hi.setFromRotationMatrix(rn),this.quaternion.premultiply(hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wl),di.child=e,this.dispatchEvent(di),di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Oh),$s.child=e,this.dispatchEvent($s),$s.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wl),di.child=e,this.dispatchEvent(di),di.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,e,Dh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,Nh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(l(s,"serialize"),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){let d=c[u];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),u=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),g=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){let c=[];for(let u in a){let h=a[u];delete h.metadata,c.push(h)}return c}l(o,"extractFromCache")}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};zt.DEFAULT_UP=new N(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xt=new N,sn=new N,Zs=new N,on=new N,fi=new N,pi=new N,El=new N,Js=new N,Ks=new N,Qs=new N,Zn=class i{static{l(this,"Triangle")}constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Xt.subVectors(e,t),r.cross(Xt);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Xt.subVectors(r,t),sn.subVectors(n,t),Zs.subVectors(e,t);let o=Xt.dot(Xt),a=Xt.dot(sn),c=Xt.dot(Zs),u=sn.dot(sn),h=sn.dot(Zs),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,g=(u*c-a*h)*f,_=(o*h-a*c)*f;return s.set(1-g-_,_,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,on)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,on.x),c.addScaledVector(o,on.y),c.addScaledVector(a,on.z),c)}static isFrontFacing(e,t,n,r){return Xt.subVectors(n,t),sn.subVectors(e,t),Xt.cross(sn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),Xt.cross(sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;fi.subVectors(r,n),pi.subVectors(s,n),Js.subVectors(e,n);let c=fi.dot(Js),u=pi.dot(Js);if(c<=0&&u<=0)return t.copy(n);Ks.subVectors(e,r);let h=fi.dot(Ks),d=pi.dot(Ks);if(h>=0&&d<=h)return t.copy(r);let f=c*d-h*u;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(fi,o);Qs.subVectors(e,s);let g=fi.dot(Qs),_=pi.dot(Qs);if(_>=0&&g<=_)return t.copy(s);let x=g*u-c*_;if(x<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(n).addScaledVector(pi,a);let m=h*_-g*d;if(m<=0&&d-h>=0&&g-_>=0)return El.subVectors(s,r),a=(d-h)/(d-h+(g-_)),t.copy(r).addScaledVector(El,a);let p=1/(m+x+f);return o=x*p,a=f*p,t.copy(n).addScaledVector(fi,o).addScaledVector(pi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},wr={h:0,s:0,l:0};function js(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}l(js,"hue2rgb");var Ye=class{static{l(this,"Color")}constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Qe.workingColorSpace){if(e=wh(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=js(o,s,e+1/3),this.g=js(o,s,e),this.b=js(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,t=Kt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}l(n,"handleAlpha");let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){let n=bc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return Qe.fromWorkingColorSpace(Et.copy(this),e),Math.round(Rt(Et.r*255,0,255))*65536+Math.round(Rt(Et.g*255,0,255))*256+Math.round(Rt(Et.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Et.copy(this),t);let n=Et.r,r=Et.g,s=Et.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,u,h=(a+o)/2;if(a===o)c=0,u=0;else{let d=o-a;switch(u=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Kt){Qe.fromWorkingColorSpace(Et.copy(this),e);let t=Et.r,n=Et.g,r=Et.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(wr);let n=Bs(wn.h,wr.h,t),r=Bs(wn.s,wr.s,t),s=Bs(wn.l,wr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Et=new Ye;Ye.NAMES=bc;var Fh=0,Qn=class extends In{static{l(this,"Material")}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=Ti,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uo,this.blendDst=ho,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uo&&(n.blendSrc=this.blendSrc),this.blendDst!==ho&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(l(r,"extractFromCache"),t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}},ns=class extends Qn{static{l(this,"MeshBasicMaterial")}constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var mt=new N,Er=new ge,Nt=class{static{l(this,"BufferAttribute")}constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ri("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Er.fromBufferAttribute(this,t),Er.applyMatrix3(e),this.setXY(t,Er.x,Er.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=jt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jt(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jt(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jt(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wo&&(e.usage=this.usage),e}};var is=class extends Nt{static{l(this,"Uint16BufferAttribute")}constructor(e,t,n){super(new Uint16Array(e),t,n)}};var rs=class extends Nt{static{l(this,"Uint32BufferAttribute")}constructor(e,t,n){super(new Uint32Array(e),t,n)}};var dn=class extends Nt{static{l(this,"Float32BufferAttribute")}constructor(e,t,n){super(new Float32Array(e),t,n)}},Bh=0,Bt=new gt,eo=new zt,mi=new N,Dt=new Kn,Ji=new Kn,yt=new N,Un=class i extends In{static{l(this,"BufferGeometry")}constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yc(e)?rs:is)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Fe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,n){return Bt.makeTranslation(e,t,n),this.applyMatrix4(Bt),this}scale(e,t,n){return Bt.makeScale(e,t,n),this.applyMatrix4(Bt),this}lookAt(e){return eo.lookAt(e),eo.updateMatrix(),this.applyMatrix4(eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new dn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Dt.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Ji.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(Dt.min,Ji.min),Dt.expandByPoint(yt),yt.addVectors(Dt.max,Ji.max),Dt.expandByPoint(yt)):(Dt.expandByPoint(Ji.min),Dt.expandByPoint(Ji.max))}Dt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(yt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)yt.fromBufferAttribute(a,u),c&&(mi.fromBufferAttribute(e,u),yt.add(mi)),r=Math.max(r,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let k=0;k<n.count;k++)a[k]=new N,c[k]=new N;let u=new N,h=new N,d=new N,f=new ge,g=new ge,_=new ge,x=new N,m=new N;function p(k,S,b){u.fromBufferAttribute(n,k),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,b),f.fromBufferAttribute(s,k),g.fromBufferAttribute(s,S),_.fromBufferAttribute(s,b),h.sub(u),d.sub(u),g.sub(f),_.sub(f);let I=1/(g.x*_.y-_.x*g.y);isFinite(I)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(d,-g.y).multiplyScalar(I),m.copy(d).multiplyScalar(g.x).addScaledVector(h,-_.x).multiplyScalar(I),a[k].add(x),a[S].add(x),a[b].add(x),c[k].add(m),c[S].add(m),c[b].add(m))}l(p,"handleTriangle");let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let k=0,S=A.length;k<S;++k){let b=A[k],I=b.start,q=b.count;for(let V=I,X=I+q;V<X;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let M=new N,E=new N,F=new N,C=new N;function R(k){F.fromBufferAttribute(r,k),C.copy(F);let S=a[k];M.copy(S),M.sub(F.multiplyScalar(F.dot(S))).normalize(),E.crossVectors(C,S);let I=E.dot(c[k])<0?-1:1;o.setXYZW(k,M.x,M.y,M.z,I)}l(R,"handleVertex");for(let k=0,S=A.length;k<S;++k){let b=A[k],I=b.start,q=b.count;for(let V=I,X=I+q;V<X;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);let r=new N,s=new N,o=new N,a=new N,c=new N,u=new N,h=new N,d=new N;if(e)for(let f=0,g=e.count;f<g;f+=3){let _=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,m),a.add(h),c.add(h),u.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,g=t.count;f<g;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,c){let u=a.array,h=a.itemSize,d=a.normalized,f=new u.constructor(c.length*h),g=0,_=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?g=c[x]*a.data.stride+a.offset:g=c[x]*h;for(let p=0;p<h;p++)f[_++]=u[g++]}return new Nt(f,h,d)}if(l(e,"convertBufferAttribute"),this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],u=e(c,n);t.setAttribute(a,u)}let s=this.morphAttributes;for(let a in s){let c=[],u=s[a];for(let h=0,d=u.length;h<d;h++){let f=u[h],g=e(f,n);c.push(g)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let u=n[c];e.data.attributes[c]=u.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let u=this.morphAttributes[c],h=[];for(let d=0,f=u.length;d<f;d++){let g=u[d];h.push(g.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let u in r){let h=r[u];this.setAttribute(u,h.clone(t))}let s=e.morphAttributes;for(let u in s){let h=[],d=s[u];for(let f=0,g=d.length;f<g;f++)h.push(d[f].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let u=0,h=o.length;u<h;u++){let d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Al=new gt,kn=new Zo,Ar=new rr,Tl=new N,gi=new N,_i=new N,vi=new N,to=new N,Tr=new N,Cr=new ge,Rr=new ge,Pr=new ge,Cl=new N,Rl=new N,Pl=new N,Ir=new N,Lr=new N,Ie=class extends zt{static{l(this,"Mesh")}constructor(e=new Un,t=new ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Tr.set(0,0,0);for(let c=0,u=s.length;c<u;c++){let h=a[c],d=s[c];h!==0&&(to.fromBufferAttribute(d,e),o?Tr.addScaledVector(to,h):Tr.addScaledVector(to.sub(t),h))}t.add(Tr)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(s),kn.copy(e.ray).recast(e.near),!(Ar.containsPoint(kn.origin)===!1&&(kn.intersectSphere(Ar,Tl)===null||kn.origin.distanceToSquared(Tl)>(e.far-e.near)**2))&&(Al.copy(s).invert(),kn.copy(e.ray).applyMatrix4(Al),!(n.boundingBox!==null&&kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,kn)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){let m=f[_],p=o[m.materialIndex],A=Math.max(m.start,g.start),M=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let E=A,F=M;E<F;E+=3){let C=a.getX(E),R=a.getX(E+1),k=a.getX(E+2);r=Ur(this,p,e,n,u,h,d,C,R,k),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let _=Math.max(0,g.start),x=Math.min(a.count,g.start+g.count);for(let m=_,p=x;m<p;m+=3){let A=a.getX(m),M=a.getX(m+1),E=a.getX(m+2);r=Ur(this,o,e,n,u,h,d,A,M,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){let m=f[_],p=o[m.materialIndex],A=Math.max(m.start,g.start),M=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let E=A,F=M;E<F;E+=3){let C=E,R=E+1,k=E+2;r=Ur(this,p,e,n,u,h,d,C,R,k),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let _=Math.max(0,g.start),x=Math.min(c.count,g.start+g.count);for(let m=_,p=x;m<p;m+=3){let A=m,M=m+1,E=m+2;r=Ur(this,o,e,n,u,h,d,A,M,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function zh(i,e,t,n,r,s,o,a){let c;if(e.side===Pt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===Pn,a),c===null)return null;Lr.copy(a),Lr.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(Lr);return u<t.near||u>t.far?null:{distance:u,point:Lr.clone(),object:i}}l(zh,"checkIntersection$1");function Ur(i,e,t,n,r,s,o,a,c,u){i.getVertexPosition(a,gi),i.getVertexPosition(c,_i),i.getVertexPosition(u,vi);let h=zh(i,e,t,n,gi,_i,vi,Ir);if(h){r&&(Cr.fromBufferAttribute(r,a),Rr.fromBufferAttribute(r,c),Pr.fromBufferAttribute(r,u),h.uv=Zn.getInterpolation(Ir,gi,_i,vi,Cr,Rr,Pr,new ge)),s&&(Cr.fromBufferAttribute(s,a),Rr.fromBufferAttribute(s,c),Pr.fromBufferAttribute(s,u),h.uv1=Zn.getInterpolation(Ir,gi,_i,vi,Cr,Rr,Pr,new ge)),o&&(Cl.fromBufferAttribute(o,a),Rl.fromBufferAttribute(o,c),Pl.fromBufferAttribute(o,u),h.normal=Zn.getInterpolation(Ir,gi,_i,vi,Cl,Rl,Pl,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:u,normal:new N,materialIndex:0};Zn.getNormal(gi,_i,vi,d.normal),h.face=d}return h}l(Ur,"checkGeometryIntersection");var sr=class i extends Un{static{l(this,"BoxGeometry")}constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],u=[],h=[],d=[],f=0,g=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new dn(u,3)),this.setAttribute("normal",new dn(h,3)),this.setAttribute("uv",new dn(d,2));function _(x,m,p,A,M,E,F,C,R,k,S){let b=E/R,I=F/k,q=E/2,V=F/2,X=C/2,K=R+1,G=k+1,ee=0,H=0,ue=new N;for(let pe=0;pe<G;pe++){let ye=pe*I-V;for(let We=0;We<K;We++){let et=We*b-q;ue[x]=et*A,ue[m]=ye*M,ue[p]=X,u.push(ue.x,ue.y,ue.z),ue[x]=0,ue[m]=0,ue[p]=C>0?1:-1,h.push(ue.x,ue.y,ue.z),d.push(We/R),d.push(1-pe/k),ee+=1}}for(let pe=0;pe<k;pe++)for(let ye=0;ye<R;ye++){let We=f+ye+K*pe,et=f+ye+K*(pe+1),W=f+(ye+1)+K*(pe+1),te=f+(ye+1)+K*pe;c.push(We,et,te),c.push(et,W,te),H+=6}a.addGroup(g,H,S),g+=H,f+=ee}l(_,"buildPlane")}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Oi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}l(Oi,"cloneUniforms");function Tt(i){let e={};for(let t=0;t<i.length;t++){let n=Oi(i[t]);for(let r in n)e[r]=n[r]}return e}l(Tt,"mergeUniforms");function kh(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}l(kh,"cloneUniformsGroups");function Mc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}l(Mc,"getUnlitUniformColorSpace");var Vh={clone:Oi,merge:Tt},Hh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Le=class extends Qn{static{l(this,"ShaderMaterial")}constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hh,this.fragmentShader=Gh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oi(e.uniforms),this.uniformsGroups=kh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ss=class extends zt{static{l(this,"Camera")}constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=hn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},En=new N,Il=new ge,Ll=new ge,Ct=class extends ss{static{l(this,"PerspectiveCamera")}constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xo*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(En.x,En.y).multiplyScalar(-e/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(En.x,En.y).multiplyScalar(-e/En.z)}getViewSize(e,t){return this.getViewBounds(e,Il,Ll),t.subVectors(Ll,Il)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Fs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/u,r*=o.width/c,n*=o.height/u}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},xi=-90,yi=1,Jo=class extends zt{static{l(this,"CubeCamera")}constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ct(xi,yi,e,t);r.layers=this.layers,this.add(r);let s=new Ct(xi,yi,e,t);s.layers=this.layers,this.add(s);let o=new Ct(xi,yi,e,t);o.layers=this.layers,this.add(o);let a=new Ct(xi,yi,e,t);a.layers=this.layers,this.add(a);let c=new Ct(xi,yi,e,t);c.layers=this.layers,this.add(c);let u=new Ct(xi,yi,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(let u of t)this.remove(u);if(e===hn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,u,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,u),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(d,f,g),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},os=class extends Ot{static{l(this,"CubeTexture")}constructor(e,t,n,r,s,o,a,c,u,h){e=e!==void 0?e:[],t=t!==void 0?t:Li,super(e,t,n,r,s,o,a,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ko=class extends pn{static{l(this,"WebGLCubeRenderTarget")}constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new os(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new sr(5,5,5),s=new Le({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:Tn});s.uniforms.tEquirect.value=t;let o=new Ie(r,s),a=t.minFilter;return t.minFilter===$n&&(t.minFilter=qt),new Jo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},no=new N,Wh=new N,Xh=new Fe,ln=class{static{l(this,"Plane")}constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=no.subVectors(n,t).cross(Wh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(no),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Xh.getNormalMatrix(e),r=this.coplanarPoint(no).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Vn=new rr,Dr=new N,as=class{static{l(this,"Frustum")}constructor(e=new ln,t=new ln,n=new ln,r=new ln,s=new ln,o=new ln){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hn){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],_=r[9],x=r[10],m=r[11],p=r[12],A=r[13],M=r[14],E=r[15];if(n[0].setComponents(c-s,f-u,m-g,E-p).normalize(),n[1].setComponents(c+s,f+u,m+g,E+p).normalize(),n[2].setComponents(c+o,f+h,m+_,E+A).normalize(),n[3].setComponents(c-o,f-h,m-_,E-A).normalize(),n[4].setComponents(c-a,f-d,m-x,E-M).normalize(),t===hn)n[5].setComponents(c+a,f+d,m+x,E+M).normalize();else if(t===Qr)n[5].setComponents(a,d,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(e){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Dr.x=r.normal.x>0?e.max.x:e.min.x,Dr.y=r.normal.y>0?e.max.y:e.min.y,Dr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Sc(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return l(r,"onAnimationFrame"),{start:l(function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},"start"),stop:l(function(){i.cancelAnimationFrame(n),e=!1},"stop"),setAnimationLoop:l(function(s){t=s},"setAnimationLoop"),setContext:l(function(s){i=s},"setContext")}}l(Sc,"WebGLAnimation");function qh(i){let e=new WeakMap;function t(a,c){let u=a.array,h=a.usage,d=u.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,u,h),a.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}l(t,"createBuffer");function n(a,c,u){let h=c.array,d=c._updateRange,f=c.updateRanges;if(i.bindBuffer(u,a),d.count===-1&&f.length===0&&i.bufferSubData(u,0,h),f.length!==0){for(let g=0,_=f.length;g<_;g++){let x=f[g];i.bufferSubData(u,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}d.count!==-1&&(i.bufferSubData(u,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count),d.count=-1),c.onUploadCallback()}l(n,"updateBuffer");function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}l(r,"get");function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}l(s,"remove");function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let u=e.get(a);if(u===void 0)e.set(a,t(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,c),u.version=a.version}}return l(o,"update"),{get:r,remove:s,update:o}}l(qh,"WebGLAttributes");var ke=class i extends Un{static{l(this,"PlaneGeometry")}constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),u=a+1,h=c+1,d=e/a,f=t/c,g=[],_=[],x=[],m=[];for(let p=0;p<h;p++){let A=p*f-o;for(let M=0;M<u;M++){let E=M*d-s;_.push(E,-A,0),x.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let A=0;A<a;A++){let M=A+u*p,E=A+u*(p+1),F=A+1+u*(p+1),C=A+1+u*p;g.push(M,E,C),g.push(E,F,C)}this.setIndex(g),this.setAttribute("position",new dn(_,3)),this.setAttribute("normal",new dn(x,3)),this.setAttribute("uv",new dn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Yh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$h=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ed=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,td=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,id=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,od=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ad=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_d=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Md=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sd="gl_FragColor = linearToOutputTexel( gl_FragColor );",wd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ed=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ad=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Td=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Id=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ld=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ud=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Od=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$d=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ef=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,of=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,af=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,df=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_f=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ef=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Af=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Pf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,If=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Uf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Df=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Of=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ff=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$f=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ep=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,np=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,op=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ap=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,up=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_p=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Mp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ep=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ap=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:Yh,alphahash_pars_fragment:$h,alphamap_fragment:Zh,alphamap_pars_fragment:Jh,alphatest_fragment:Kh,alphatest_pars_fragment:Qh,aomap_fragment:jh,aomap_pars_fragment:ed,batching_pars_vertex:td,batching_vertex:nd,begin_vertex:id,beginnormal_vertex:rd,bsdfs:sd,iridescence_fragment:od,bumpmap_pars_fragment:ad,clipping_planes_fragment:ld,clipping_planes_pars_fragment:cd,clipping_planes_pars_vertex:ud,clipping_planes_vertex:hd,color_fragment:dd,color_pars_fragment:fd,color_pars_vertex:pd,color_vertex:md,common:gd,cube_uv_reflection_fragment:_d,defaultnormal_vertex:vd,displacementmap_pars_vertex:xd,displacementmap_vertex:yd,emissivemap_fragment:bd,emissivemap_pars_fragment:Md,colorspace_fragment:Sd,colorspace_pars_fragment:wd,envmap_fragment:Ed,envmap_common_pars_fragment:Ad,envmap_pars_fragment:Td,envmap_pars_vertex:Cd,envmap_physical_pars_fragment:zd,envmap_vertex:Rd,fog_vertex:Pd,fog_pars_vertex:Id,fog_fragment:Ld,fog_pars_fragment:Ud,gradientmap_pars_fragment:Dd,lightmap_pars_fragment:Nd,lights_lambert_fragment:Od,lights_lambert_pars_fragment:Fd,lights_pars_begin:Bd,lights_toon_fragment:kd,lights_toon_pars_fragment:Vd,lights_phong_fragment:Hd,lights_phong_pars_fragment:Gd,lights_physical_fragment:Wd,lights_physical_pars_fragment:Xd,lights_fragment_begin:qd,lights_fragment_maps:Yd,lights_fragment_end:$d,logdepthbuf_fragment:Zd,logdepthbuf_pars_fragment:Jd,logdepthbuf_pars_vertex:Kd,logdepthbuf_vertex:Qd,map_fragment:jd,map_pars_fragment:ef,map_particle_fragment:tf,map_particle_pars_fragment:nf,metalnessmap_fragment:rf,metalnessmap_pars_fragment:sf,morphinstance_vertex:of,morphcolor_vertex:af,morphnormal_vertex:lf,morphtarget_pars_vertex:cf,morphtarget_vertex:uf,normal_fragment_begin:hf,normal_fragment_maps:df,normal_pars_fragment:ff,normal_pars_vertex:pf,normal_vertex:mf,normalmap_pars_fragment:gf,clearcoat_normal_fragment_begin:_f,clearcoat_normal_fragment_maps:vf,clearcoat_pars_fragment:xf,iridescence_pars_fragment:yf,opaque_fragment:bf,packing:Mf,premultiplied_alpha_fragment:Sf,project_vertex:wf,dithering_fragment:Ef,dithering_pars_fragment:Af,roughnessmap_fragment:Tf,roughnessmap_pars_fragment:Cf,shadowmap_pars_fragment:Rf,shadowmap_pars_vertex:Pf,shadowmap_vertex:If,shadowmask_pars_fragment:Lf,skinbase_vertex:Uf,skinning_pars_vertex:Df,skinning_vertex:Nf,skinnormal_vertex:Of,specularmap_fragment:Ff,specularmap_pars_fragment:Bf,tonemapping_fragment:zf,tonemapping_pars_fragment:kf,transmission_fragment:Vf,transmission_pars_fragment:Hf,uv_pars_fragment:Gf,uv_pars_vertex:Wf,uv_vertex:Xf,worldpos_vertex:qf,background_vert:Yf,background_frag:$f,backgroundCube_vert:Zf,backgroundCube_frag:Jf,cube_vert:Kf,cube_frag:Qf,depth_vert:jf,depth_frag:ep,distanceRGBA_vert:tp,distanceRGBA_frag:np,equirect_vert:ip,equirect_frag:rp,linedashed_vert:sp,linedashed_frag:op,meshbasic_vert:ap,meshbasic_frag:lp,meshlambert_vert:cp,meshlambert_frag:up,meshmatcap_vert:hp,meshmatcap_frag:dp,meshnormal_vert:fp,meshnormal_frag:pp,meshphong_vert:mp,meshphong_frag:gp,meshphysical_vert:_p,meshphysical_frag:vp,meshtoon_vert:xp,meshtoon_frag:yp,points_vert:bp,points_frag:Mp,shadow_vert:Sp,shadow_frag:wp,sprite_vert:Ep,sprite_frag:Ap},ae={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Qt={basic:{uniforms:Tt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Tt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Tt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Tt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Tt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Tt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Tt([ae.points,ae.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Tt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Tt([ae.common,ae.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Tt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Tt([ae.sprite,ae.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Tt([ae.common,ae.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Tt([ae.lights,ae.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Qt.physical={uniforms:Tt([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};var Nr={r:0,b:0,g:0},Hn=new mn,Tp=new gt;function Cp(i,e,t,n,r,s,o){let a=new Ye(0),c=s===!0?0:1,u,h,d=null,f=0,g=null;function _(A){let M=A.isScene===!0?A.background:null;return M&&M.isTexture&&(M=(A.backgroundBlurriness>0?t:e).get(M)),M}l(_,"getBackground");function x(A){let M=!1,E=_(A);E===null?p(a,c):E&&E.isColor&&(p(E,1),M=!0);let F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}l(x,"render");function m(A,M){let E=_(M);E&&(E.isCubeTexture||E.mapping===ms)?(h===void 0&&(h=new Ie(new sr(1,1,1),new Le({name:"BackgroundCubeMaterial",uniforms:Oi(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:l(function(){return this.uniforms.envMap.value},"get")}),r.update(h)),Hn.copy(M.backgroundRotation),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Tp.makeRotationFromEuler(Hn)),h.material.toneMapped=Qe.getTransfer(E.colorSpace)!==st,(d!==E||f!==E.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,d=E,f=E.version,g=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new Ie(new ke(2,2),new Le({name:"BackgroundMaterial",uniforms:Oi(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:l(function(){return this.uniforms.t2D.value},"get")}),r.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(E.colorSpace)!==st,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||f!==E.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,d=E,f=E.version,g=i.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null))}l(m,"addToRenderList");function p(A,M){A.getRGB(Nr,Mc(i)),n.buffers.color.setClear(Nr.r,Nr.g,Nr.b,M,o)}return l(p,"setClear"),{getClearColor:l(function(){return a},"getClearColor"),setClearColor:l(function(A,M=1){a.set(A),c=M,p(a,c)},"setClearColor"),getClearAlpha:l(function(){return c},"getClearAlpha"),setClearAlpha:l(function(A){c=A,p(a,c)},"setClearAlpha"),render:x,addToRenderList:m}}l(Cp,"WebGLBackground");function Rp(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(b,I,q,V,X){let K=!1,G=d(V,q,I);s!==G&&(s=G,u(s.object)),K=g(b,V,q,X),K&&_(b,V,q,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,E(b,I,q,V),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}l(a,"setup");function c(){return i.createVertexArray()}l(c,"createVertexArrayObject");function u(b){return i.bindVertexArray(b)}l(u,"bindVertexArrayObject");function h(b){return i.deleteVertexArray(b)}l(h,"deleteVertexArrayObject");function d(b,I,q){let V=q.wireframe===!0,X=n[b.id];X===void 0&&(X={},n[b.id]=X);let K=X[I.id];K===void 0&&(K={},X[I.id]=K);let G=K[V];return G===void 0&&(G=f(c()),K[V]=G),G}l(d,"getBindingState");function f(b){let I=[],q=[],V=[];for(let X=0;X<t;X++)I[X]=0,q[X]=0,V[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:q,attributeDivisors:V,object:b,attributes:{},index:null}}l(f,"createBindingState");function g(b,I,q,V){let X=s.attributes,K=I.attributes,G=0,ee=q.getAttributes();for(let H in ee)if(ee[H].location>=0){let pe=X[H],ye=K[H];if(ye===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(ye=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(ye=b.instanceColor)),pe===void 0||pe.attribute!==ye||ye&&pe.data!==ye.data)return!0;G++}return s.attributesNum!==G||s.index!==V}l(g,"needsUpdate");function _(b,I,q,V){let X={},K=I.attributes,G=0,ee=q.getAttributes();for(let H in ee)if(ee[H].location>=0){let pe=K[H];pe===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(pe=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(pe=b.instanceColor));let ye={};ye.attribute=pe,pe&&pe.data&&(ye.data=pe.data),X[H]=ye,G++}s.attributes=X,s.attributesNum=G,s.index=V}l(_,"saveCache");function x(){let b=s.newAttributes;for(let I=0,q=b.length;I<q;I++)b[I]=0}l(x,"initAttributes");function m(b){p(b,0)}l(m,"enableAttribute");function p(b,I){let q=s.newAttributes,V=s.enabledAttributes,X=s.attributeDivisors;q[b]=1,V[b]===0&&(i.enableVertexAttribArray(b),V[b]=1),X[b]!==I&&(i.vertexAttribDivisor(b,I),X[b]=I)}l(p,"enableAttributeAndDivisor");function A(){let b=s.newAttributes,I=s.enabledAttributes;for(let q=0,V=I.length;q<V;q++)I[q]!==b[q]&&(i.disableVertexAttribArray(q),I[q]=0)}l(A,"disableUnusedAttributes");function M(b,I,q,V,X,K,G){G===!0?i.vertexAttribIPointer(b,I,q,X,K):i.vertexAttribPointer(b,I,q,V,X,K)}l(M,"vertexAttribPointer");function E(b,I,q,V){x();let X=V.attributes,K=q.getAttributes(),G=I.defaultAttributeValues;for(let ee in K){let H=K[ee];if(H.location>=0){let ue=X[ee];if(ue===void 0&&(ee==="instanceMatrix"&&b.instanceMatrix&&(ue=b.instanceMatrix),ee==="instanceColor"&&b.instanceColor&&(ue=b.instanceColor)),ue!==void 0){let pe=ue.normalized,ye=ue.itemSize,We=e.get(ue);if(We===void 0)continue;let et=We.buffer,W=We.type,te=We.bytesPerElement,_e=W===i.INT||W===i.UNSIGNED_INT||ue.gpuType===Ma;if(ue.isInterleavedBufferAttribute){let de=ue.data,Ue=de.stride,Be=ue.offset;if(de.isInstancedInterleavedBuffer){for(let Ve=0;Ve<H.locationSize;Ve++)p(H.location+Ve,de.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ve=0;Ve<H.locationSize;Ve++)m(H.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,et);for(let Ve=0;Ve<H.locationSize;Ve++)M(H.location+Ve,ye/H.locationSize,W,pe,Ue*te,(Be+ye/H.locationSize*Ve)*te,_e)}else{if(ue.isInstancedBufferAttribute){for(let de=0;de<H.locationSize;de++)p(H.location+de,ue.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let de=0;de<H.locationSize;de++)m(H.location+de);i.bindBuffer(i.ARRAY_BUFFER,et);for(let de=0;de<H.locationSize;de++)M(H.location+de,ye/H.locationSize,W,pe,ye*te,ye/H.locationSize*de*te,_e)}}else if(G!==void 0){let pe=G[ee];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(H.location,pe);break;case 3:i.vertexAttrib3fv(H.location,pe);break;case 4:i.vertexAttrib4fv(H.location,pe);break;default:i.vertexAttrib1fv(H.location,pe)}}}}A()}l(E,"setupVertexAttributes");function F(){k();for(let b in n){let I=n[b];for(let q in I){let V=I[q];for(let X in V)h(V[X].object),delete V[X];delete I[q]}delete n[b]}}l(F,"dispose");function C(b){if(n[b.id]===void 0)return;let I=n[b.id];for(let q in I){let V=I[q];for(let X in V)h(V[X].object),delete V[X];delete I[q]}delete n[b.id]}l(C,"releaseStatesOfGeometry");function R(b){for(let I in n){let q=n[I];if(q[b.id]===void 0)continue;let V=q[b.id];for(let X in V)h(V[X].object),delete V[X];delete q[b.id]}}l(R,"releaseStatesOfProgram");function k(){S(),o=!0,s!==r&&(s=r,u(s.object))}l(k,"reset");function S(){r.geometry=null,r.program=null,r.wireframe=!1}return l(S,"resetDefaultState"),{setup:a,reset:k,resetDefaultState:S,dispose:F,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}l(Rp,"WebGLBindingStates");function Pp(i,e,t){let n;function r(u){n=u}l(r,"setMode");function s(u,h){i.drawArrays(n,u,h),t.update(h,n,1)}l(s,"render");function o(u,h,d){d!==0&&(i.drawArraysInstanced(n,u,h,d),t.update(h,n,d))}l(o,"renderInstances");function a(u,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,n,1)}l(a,"renderMultiDraw");function c(u,h,d,f){if(d===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<u.length;_++)o(u[_],h[_],f[_]);else{g.multiDrawArraysInstancedWEBGL(n,u,0,h,0,f,0,d);let _=0;for(let x=0;x<d;x++)_+=h[x];for(let x=0;x<f.length;x++)t.update(_,n,f[x])}}l(c,"renderMultiDrawInstances"),this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}l(Pp,"WebGLBufferRenderer");function Ip(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}l(s,"getMaxAnisotropy");function o(C){return!(C!==Yt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}l(o,"textureFormatReadable");function a(C){let R=C===lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==fn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==un&&!R)}l(a,"textureTypeReadable");function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}l(c,"getMaxPrecision");let u=t.precision!==void 0?t.precision:"highp",h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);let d=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:p,maxVaryings:A,maxFragmentUniforms:M,vertexTextures:E,maxSamples:F}}l(Ip,"WebGLCapabilities");function Lp(i){let e=this,t=null,n=0,r=!1,s=!1,o=new ln,a=new Fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let g=d.length!==0||f||n!==0||r;return r=f,n=d.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,g){let _=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!r||_===null||_.length===0||s&&!m)s?h(null):u();else{let A=s?0:n,M=A*4,E=p.clippingState||null;c.value=E,E=h(_,f,M,g);for(let F=0;F!==M;++F)E[F]=t[F];p.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}l(u,"resetGlobalState");function h(d,f,g,_){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=c.value,_!==!0||m===null){let p=g+x*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,E=g;M!==x;++M,E+=4)o.copy(d[M]).applyMatrix4(A,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}l(h,"projectPlanes")}l(Lp,"WebGLClipping");function Up(i){let e=new WeakMap;function t(o,a){return a===fo?o.mapping=Li:a===po&&(o.mapping=Ui),o}l(t,"mapTextureMapping");function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===fo||a===po)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let u=new Ko(c.height);return u.fromEquirectangularTexture(i,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}l(n,"get");function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}l(r,"onTextureDispose");function s(){e=new WeakMap}return l(s,"dispose"),{get:n,dispose:s}}l(Up,"WebGLCubeMaps");var Qo=class extends ss{static{l(this,"OrthographicCamera")}constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ai=4,Ul=[.125,.215,.35,.446,.526,.582],qn=20,io=new Qo,Dl=new Ye,ro=null,so=0,oo=0,ao=!1,Wn=(1+Math.sqrt(5))/2,bi=1/Wn,Nl=[new N(-Wn,bi,0),new N(Wn,bi,0),new N(-bi,0,Wn),new N(bi,0,Wn),new N(0,Wn,-bi),new N(0,Wn,bi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],ls=class{static{l(this,"PMREMGenerator")}constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ro=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ro,so,oo),this._renderer.xr.enabled=ao,e.scissorTest=!1,Or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Li||e.mapping===Ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ro=this._renderer.getRenderTarget(),so=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:lr,format:Yt,colorSpace:Dn,depthBuffer:!1},r=Ol(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ol(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dp(s)),this._blurMaterial=Np(s,e,t)}return r}_compileMaterial(e){let t=new Ie(this._lodPlanes[0],e);this._renderer.compile(t,io)}_sceneToCubeUV(e,t,n,r){let a=new Ct(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Dl),h.toneMapping=Cn,h.autoClear=!1;let g=new ns({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),_=new Ie(new sr,g),x=!1,m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,x=!0):(g.color.copy(Dl),x=!0);for(let p=0;p<6;p++){let A=p%3;A===0?(a.up.set(0,c[p],0),a.lookAt(u[p],0,0)):A===1?(a.up.set(0,0,c[p]),a.lookAt(0,u[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,u[p]));let M=this._cubeSize;Or(r,A*M,p>2?M:0,M,M),h.setRenderTarget(r),x&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Li||e.mapping===Ui;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fl());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ie(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;Or(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,io)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Nl[(r-s-1)%Nl.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Ie(this._lodPlanes[r],u),f=u.uniforms,g=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*qn-1),x=s/_,m=isFinite(s)?1+Math.floor(h*x):qn;m>qn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qn}`);let p=[],A=0;for(let R=0;R<qn;++R){let k=R/x,S=Math.exp(-k*k/2);p.push(S),R===0?A+=S:R<m&&(A+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-n;let E=this._sizeLods[r],F=3*E*(r>M-Ai?r-M+Ai:0),C=4*(this._cubeSize-E);Or(t,F,C,3*E,2*E),c.setRenderTarget(t),c.render(d,io)}};function Dp(i){let e=[],t=[],n=[],r=i,s=i-Ai+1+Ul.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>i-Ai?c=Ul[o-i+Ai-1]:o===0&&(c=0),n.push(c);let u=1/(a-2),h=-u,d=1+u,f=[h,h,d,h,d,d,h,h,d,d,h,d],g=6,_=6,x=3,m=2,p=1,A=new Float32Array(x*_*g),M=new Float32Array(m*_*g),E=new Float32Array(p*_*g);for(let C=0;C<g;C++){let R=C%3*2/3-1,k=C>2?0:-1,S=[R,k,0,R+2/3,k,0,R+2/3,k+1,0,R,k,0,R+2/3,k+1,0,R,k+1,0];A.set(S,x*_*C),M.set(f,m*_*C);let b=[C,C,C,C,C,C];E.set(b,p*_*C)}let F=new Un;F.setAttribute("position",new Nt(A,x)),F.setAttribute("uv",new Nt(M,m)),F.setAttribute("faceIndex",new Nt(E,p)),e.push(F),r>Ai&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}l(Dp,"_createPlanes");function Ol(i,e,t){let n=new pn(i,e,t);return n.texture.mapping=ms,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}l(Ol,"_createRenderTarget");function Or(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}l(Or,"_setViewport");function Np(i,e,t){let n=new Float32Array(qn),r=new N(0,1,0);return new Le({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}l(Np,"_getBlurShader");function Fl(){return new Le({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}l(Fl,"_getEquirectMaterial");function Bl(){return new Le({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}l(Bl,"_getCubemapMaterial");function Ra(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}l(Ra,"_getCommonVertexShader");function Op(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,u=c===fo||c===po,h=c===Li||c===Ui;if(u||h){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ls(i)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let g=a.image;return u&&g&&g.height>0||h&&g&&r(g)?(t===null&&(t=new ls(i)),d=u?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}l(n,"get");function r(a){let c=0,u=6;for(let h=0;h<u;h++)a[h]!==void 0&&c++;return c===u}l(r,"isCubeTextureComplete");function s(a){let c=a.target;c.removeEventListener("dispose",s);let u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}l(s,"onTextureDispose");function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return l(o,"dispose"),{get:n,dispose:o}}l(Op,"WebGLCubeUVMaps");function Fp(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return l(t,"getExtension"),{has:l(function(n){return t(n)!==null},"has"),init:l(function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},"init"),get:l(function(n){let r=t(n);return r===null&&Ri("THREE.WebGLRenderer: "+n+" extension not supported."),r},"get")}}l(Fp,"WebGLExtensions");function Bp(i,e,t,n){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let _ in f.attributes)e.remove(f.attributes[_]);for(let _ in f.morphAttributes){let x=f.morphAttributes[_];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete r[f.id];let g=s.get(f);g&&(e.remove(g),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}l(o,"onGeometryDispose");function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}l(a,"get");function c(d){let f=d.attributes;for(let _ in f)e.update(f[_],i.ARRAY_BUFFER);let g=d.morphAttributes;for(let _ in g){let x=g[_];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}l(c,"update");function u(d){let f=[],g=d.index,_=d.attributes.position,x=0;if(g!==null){let A=g.array;x=g.version;for(let M=0,E=A.length;M<E;M+=3){let F=A[M+0],C=A[M+1],R=A[M+2];f.push(F,C,C,R,R,F)}}else if(_!==void 0){let A=_.array;x=_.version;for(let M=0,E=A.length/3-1;M<E;M+=3){let F=M+0,C=M+1,R=M+2;f.push(F,C,C,R,R,F)}}else return;let m=new(yc(f)?rs:is)(f,1);m.version=x;let p=s.get(d);p&&e.remove(p),s.set(d,m)}l(u,"updateWireframeAttribute");function h(d){let f=s.get(d);if(f){let g=d.index;g!==null&&f.version<g.version&&u(d)}else u(d);return s.get(d)}return l(h,"getWireframeAttribute"),{get:a,update:c,getWireframeAttribute:h}}l(Bp,"WebGLGeometries");function zp(i,e,t){let n;function r(f){n=f}l(r,"setMode");let s,o;function a(f){s=f.type,o=f.bytesPerElement}l(a,"setIndex");function c(f,g){i.drawElements(n,g,s,f*o),t.update(g,n,1)}l(c,"render");function u(f,g,_){_!==0&&(i.drawElementsInstanced(n,g,s,f*o,_),t.update(g,n,_))}l(u,"renderInstances");function h(f,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,f,0,_);let m=0;for(let p=0;p<_;p++)m+=g[p];t.update(m,n,1)}l(h,"renderMultiDraw");function d(f,g,_,x){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)u(f[p]/o,g[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,g,0,s,f,0,x,0,_);let p=0;for(let A=0;A<_;A++)p+=g[A];for(let A=0;A<x.length;A++)t.update(p,n,x[A])}}l(d,"renderMultiDrawInstances"),this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}l(zp,"WebGLIndexedBufferRenderer");function kp(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}l(n,"update");function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return l(r,"reset"),{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}l(kp,"WebGLInfo");function Vp(i,e,t){let n=new WeakMap,r=new se;function s(o,a,c){let u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==d){let S=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",S)};l(S,"disposeTexture"),f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],M=0;g===!0&&(M=1),_===!0&&(M=2),x===!0&&(M=3);let E=a.attributes.position.count*M,F=1;E>e.maxTextureSize&&(F=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let C=new Float32Array(E*F*4*d),R=new es(C,E,F,d);R.type=un,R.needsUpdate=!0;let k=M*4;for(let b=0;b<d;b++){let I=m[b],q=p[b],V=A[b],X=E*F*4*b;for(let K=0;K<I.count;K++){let G=K*k;g===!0&&(r.fromBufferAttribute(I,K),C[X+G+0]=r.x,C[X+G+1]=r.y,C[X+G+2]=r.z,C[X+G+3]=0),_===!0&&(r.fromBufferAttribute(q,K),C[X+G+4]=r.x,C[X+G+5]=r.y,C[X+G+6]=r.z,C[X+G+7]=0),x===!0&&(r.fromBufferAttribute(V,K),C[X+G+8]=r.x,C[X+G+9]=r.y,C[X+G+10]=r.z,C[X+G+11]=V.itemSize===4?r.w:1)}}f={count:d,texture:R,size:new ge(E,F)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let x=0;x<u.length;x++)g+=u[x];let _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return l(s,"update"),{update:s}}l(Vp,"WebGLMorphtargets");function Hp(i,e,t,n){let r=new WeakMap;function s(c){let u=n.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}l(s,"update");function o(){r=new WeakMap}l(o,"dispose");function a(c){let u=c.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return l(a,"onInstancedMeshDispose"),{update:s,dispose:o}}l(Hp,"WebGLObjects");var cs=class extends Ot{static{l(this,"DepthTexture")}constructor(e,t,n,r,s,o,a,c,u,h=Ci){if(h!==Ci&&h!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ci&&(n=Jn),n===void 0&&h===Ni&&(n=Di),super(null,r,s,o,a,c,h,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:He,this.minFilter=c!==void 0?c:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},wc=new Ot,zl=new cs(1,1),Ec=new es,Ac=new $o,Tc=new os,kl=[],Vl=[],Hl=new Float32Array(16),Gl=new Float32Array(9),Wl=new Float32Array(4);function zi(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=kl[r];if(s===void 0&&(s=new Float32Array(r),kl[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}l(zi,"flatten");function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}l(_t,"arraysEqual");function vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}l(vt,"copyArray");function _s(i,e){let t=Vl[e];t===void 0&&(t=new Int32Array(e),Vl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}l(_s,"allocTexUnits");function Gp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}l(Gp,"setValueV1f");function Wp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),vt(t,e)}}l(Wp,"setValueV2f");function Xp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),vt(t,e)}}l(Xp,"setValueV3f");function qp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),vt(t,e)}}l(qp,"setValueV4f");function Yp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;Wl.set(n),i.uniformMatrix2fv(this.addr,!1,Wl),vt(t,n)}}l(Yp,"setValueM2");function $p(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;Gl.set(n),i.uniformMatrix3fv(this.addr,!1,Gl),vt(t,n)}}l($p,"setValueM3");function Zp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;Hl.set(n),i.uniformMatrix4fv(this.addr,!1,Hl),vt(t,n)}}l(Zp,"setValueM4");function Jp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}l(Jp,"setValueV1i");function Kp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2iv(this.addr,e),vt(t,e)}}l(Kp,"setValueV2i");function Qp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3iv(this.addr,e),vt(t,e)}}l(Qp,"setValueV3i");function jp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4iv(this.addr,e),vt(t,e)}}l(jp,"setValueV4i");function em(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}l(em,"setValueV1ui");function tm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2uiv(this.addr,e),vt(t,e)}}l(tm,"setValueV2ui");function nm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3uiv(this.addr,e),vt(t,e)}}l(nm,"setValueV3ui");function im(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4uiv(this.addr,e),vt(t,e)}}l(im,"setValueV4ui");function rm(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(zl.compareFunction=xc,s=zl):s=wc,t.setTexture2D(e||s,r)}l(rm,"setValueT1");function sm(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ac,r)}l(sm,"setValueT3D1");function om(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Tc,r)}l(om,"setValueT6");function am(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ec,r)}l(am,"setValueT2DArray1");function lm(i){switch(i){case 5126:return Gp;case 35664:return Wp;case 35665:return Xp;case 35666:return qp;case 35674:return Yp;case 35675:return $p;case 35676:return Zp;case 5124:case 35670:return Jp;case 35667:case 35671:return Kp;case 35668:case 35672:return Qp;case 35669:case 35673:return jp;case 5125:return em;case 36294:return tm;case 36295:return nm;case 36296:return im;case 35678:case 36198:case 36298:case 36306:case 35682:return rm;case 35679:case 36299:case 36307:return sm;case 35680:case 36300:case 36308:case 36293:return om;case 36289:case 36303:case 36311:case 36292:return am}}l(lm,"getSingularSetter");function cm(i,e){i.uniform1fv(this.addr,e)}l(cm,"setValueV1fArray");function um(i,e){let t=zi(e,this.size,2);i.uniform2fv(this.addr,t)}l(um,"setValueV2fArray");function hm(i,e){let t=zi(e,this.size,3);i.uniform3fv(this.addr,t)}l(hm,"setValueV3fArray");function dm(i,e){let t=zi(e,this.size,4);i.uniform4fv(this.addr,t)}l(dm,"setValueV4fArray");function fm(i,e){let t=zi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}l(fm,"setValueM2Array");function pm(i,e){let t=zi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}l(pm,"setValueM3Array");function mm(i,e){let t=zi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}l(mm,"setValueM4Array");function gm(i,e){i.uniform1iv(this.addr,e)}l(gm,"setValueV1iArray");function _m(i,e){i.uniform2iv(this.addr,e)}l(_m,"setValueV2iArray");function vm(i,e){i.uniform3iv(this.addr,e)}l(vm,"setValueV3iArray");function xm(i,e){i.uniform4iv(this.addr,e)}l(xm,"setValueV4iArray");function ym(i,e){i.uniform1uiv(this.addr,e)}l(ym,"setValueV1uiArray");function bm(i,e){i.uniform2uiv(this.addr,e)}l(bm,"setValueV2uiArray");function Mm(i,e){i.uniform3uiv(this.addr,e)}l(Mm,"setValueV3uiArray");function Sm(i,e){i.uniform4uiv(this.addr,e)}l(Sm,"setValueV4uiArray");function wm(i,e,t){let n=this.cache,r=e.length,s=_s(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||wc,s[o])}l(wm,"setValueT1Array");function Em(i,e,t){let n=this.cache,r=e.length,s=_s(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ac,s[o])}l(Em,"setValueT3DArray");function Am(i,e,t){let n=this.cache,r=e.length,s=_s(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Tc,s[o])}l(Am,"setValueT6Array");function Tm(i,e,t){let n=this.cache,r=e.length,s=_s(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ec,s[o])}l(Tm,"setValueT2DArrayArray");function Cm(i){switch(i){case 5126:return cm;case 35664:return um;case 35665:return hm;case 35666:return dm;case 35674:return fm;case 35675:return pm;case 35676:return mm;case 5124:case 35670:return gm;case 35667:case 35671:return _m;case 35668:case 35672:return vm;case 35669:case 35673:return xm;case 5125:return ym;case 36294:return bm;case 36295:return Mm;case 36296:return Sm;case 35678:case 36198:case 36298:case 36306:case 35682:return wm;case 35679:case 36299:case 36307:return Em;case 35680:case 36300:case 36308:case 36293:return Am;case 36289:case 36303:case 36311:case 36292:return Tm}}l(Cm,"getPureArraySetter");var jo=class{static{l(this,"SingleUniform")}constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lm(t.type)}},ea=class{static{l(this,"PureArrayUniform")}constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cm(t.type)}},ta=class{static{l(this,"StructuredUniform")}constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},lo=/(\w+)(\])?(\[|\.)?/g;function Xl(i,e){i.seq.push(e),i.map[e.id]=e}l(Xl,"addUniform");function Rm(i,e,t){let n=i.name,r=n.length;for(lo.lastIndex=0;;){let s=lo.exec(n),o=lo.lastIndex,a=s[1],c=s[2]==="]",u=s[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===r){Xl(t,u===void 0?new jo(a,i,e):new ea(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new ta(a),Xl(t,d)),t=d}}}l(Rm,"parseUniform");var Ii=class{static{l(this,"WebGLUniforms")}constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Rm(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function ql(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}l(ql,"WebGLShader");var Pm=37297,Im=0;function Lm(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}l(Lm,"handleSource");function Um(i){let e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(i),n;switch(e===t?n="":e===Kr&&t===Jr?n="LinearDisplayP3ToLinearSRGB":e===Jr&&t===Kr&&(n="LinearSRGBToLinearDisplayP3"),i){case Dn:case gs:return[n,"LinearTransferOETF"];case Kt:case Ca:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}l(Um,"getEncodingComponents");function Yl(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Lm(i.getShaderSource(e),o)}else return r}l(Yl,"getShaderErrors");function Dm(i,e){let t=Um(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}l(Dm,"getTexelEncodingFunction");function Nm(i,e){let t;switch(e){case sh:t="Linear";break;case oh:t="Reinhard";break;case ah:t="OptimizedCineon";break;case lh:t="ACESFilmic";break;case uh:t="AgX";break;case hh:t="Neutral";break;case ch:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}l(Nm,"getToneMappingFunction");var Fr=new N;function Om(){Qe.getLuminanceCoefficients(Fr);let i=Fr.x.toFixed(4),e=Fr.y.toFixed(4),t=Fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}l(Om,"getLuminanceFunction");function Fm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}l(Fm,"generateVertexExtensions");function Bm(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}l(Bm,"generateDefines");function zm(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}l(zm,"fetchAttributeLocations");function er(i){return i!==""}l(er,"filterEmptyLine");function $l(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}l($l,"replaceLightNums");function Zl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}l(Zl,"replaceClippingPlaneNums");var km=/^[ \t]*#include +<([\w\d./]+)>/gm;function na(i){return i.replace(km,Hm)}l(na,"resolveIncludes");var Vm=new Map;function Hm(i,e){let t=Oe[e];if(t===void 0){let n=Vm.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return na(t)}l(Hm,"includeReplacer");var Gm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jl(i){return i.replace(Gm,Wm)}l(Jl,"unrollLoops");function Wm(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}l(Wm,"loopReplacer");function Kl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}l(Kl,"generatePrecision");function Xm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===oc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Iu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===an&&(e="SHADOWMAP_TYPE_VSM"),e}l(Xm,"generateShadowMapTypeDefine");function qm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Li:case Ui:e="ENVMAP_TYPE_CUBE";break;case ms:e="ENVMAP_TYPE_CUBE_UV";break}return e}l(qm,"generateEnvMapTypeDefine");function Ym(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ui:e="ENVMAP_MODE_REFRACTION";break}return e}l(Ym,"generateEnvMapModeDefine");function $m(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ac:e="ENVMAP_BLENDING_MULTIPLY";break;case ih:e="ENVMAP_BLENDING_MIX";break;case rh:e="ENVMAP_BLENDING_ADD";break}return e}l($m,"generateEnvMapBlendingDefine");function Zm(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}l(Zm,"generateCubeUVSize");function Jm(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Xm(t),u=qm(t),h=Ym(t),d=$m(t),f=Zm(t),g=Fm(t),_=Bm(s),x=r.createProgram(),m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(er).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(er).join(`
`),p.length>0&&(p+=`
`)):(m=[Kl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),p=[Kl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Cn?Nm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Dm("linearToOutputTexel",t.outputColorSpace),Om(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(er).join(`
`)),o=na(o),o=$l(o,t),o=Zl(o,t),a=na(a),a=$l(a,t),a=Zl(a,t),o=Jl(o),a=Jl(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=A+m+o,E=A+p+a,F=ql(r,r.VERTEX_SHADER,M),C=ql(r,r.FRAGMENT_SHADER,E);r.attachShader(x,F),r.attachShader(x,C),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(I){if(i.debug.checkShaderErrors){let q=r.getProgramInfoLog(x).trim(),V=r.getShaderInfoLog(F).trim(),X=r.getShaderInfoLog(C).trim(),K=!0,G=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,F,C);else{let ee=Yl(r,F,"vertex"),H=Yl(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+q+`
`+ee+`
`+H)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(V===""||X==="")&&(G=!1);G&&(I.diagnostics={runnable:K,programLog:q,vertexShader:{log:V,prefix:m},fragmentShader:{log:X,prefix:p}})}r.deleteShader(F),r.deleteShader(C),k=new Ii(r,x),S=zm(r,x)}l(R,"onFirstUse");let k;this.getUniforms=function(){return k===void 0&&R(this),k};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(x,Pm)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Im++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=F,this.fragmentShader=C,this}l(Jm,"WebGLProgram");var Km=0,ia=class{static{l(this,"WebGLShaderCache")}constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ra(e),t.set(e,n)),n}},ra=class{static{l(this,"WebGLShaderStage")}constructor(e){this.id=Km++,this.code=e,this.usedTimes=0}};function Qm(i,e,t,n,r,s,o){let a=new ts,c=new ia,u=new Set,h=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,g=r.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return u.add(S),S===0?"uv":`uv${S}`}l(x,"getChannel");function m(S,b,I,q,V){let X=q.fog,K=V.geometry,G=S.isMeshStandardMaterial?q.environment:null,ee=(S.isMeshStandardMaterial?t:e).get(S.envMap||G),H=ee&&ee.mapping===ms?ee.image.height:null,ue=_[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));let pe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ye=pe!==void 0?pe.length:0,We=0;K.morphAttributes.position!==void 0&&(We=1),K.morphAttributes.normal!==void 0&&(We=2),K.morphAttributes.color!==void 0&&(We=3);let et,W,te,_e;if(ue){let $e=Qt[ue];et=$e.vertexShader,W=$e.fragmentShader}else et=S.vertexShader,W=S.fragmentShader,c.update(S),te=c.getVertexShaderID(S),_e=c.getFragmentShaderID(S);let de=i.getRenderTarget(),Ue=V.isInstancedMesh===!0,Be=V.isBatchedMesh===!0,Ve=!!S.map,lt=!!S.matcap,T=!!ee,ht=!!S.aoMap,je=!!S.lightMap,tt=!!S.bumpMap,Me=!!S.normalMap,dt=!!S.displacementMap,Re=!!S.emissiveMap,De=!!S.metalnessMap,w=!!S.roughnessMap,v=S.anisotropy>0,z=S.clearcoat>0,Q=S.dispersion>0,j=S.iridescence>0,J=S.sheen>0,Se=S.transmission>0,le=v&&!!S.anisotropyMap,fe=z&&!!S.clearcoatMap,Ne=z&&!!S.clearcoatNormalMap,ne=z&&!!S.clearcoatRoughnessMap,he=j&&!!S.iridescenceMap,Xe=j&&!!S.iridescenceThicknessMap,Ce=J&&!!S.sheenColorMap,me=J&&!!S.sheenRoughnessMap,Pe=!!S.specularMap,ze=!!S.specularColorMap,at=!!S.specularIntensityMap,P=Se&&!!S.transmissionMap,ie=Se&&!!S.thicknessMap,Y=!!S.gradientMap,Z=!!S.alphaMap,oe=S.alphaTest>0,Ee=!!S.alphaHash,qe=!!S.extensions,ft=Cn;S.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(ft=i.toneMapping);let bt={shaderID:ue,shaderType:S.type,shaderName:S.name,vertexShader:et,fragmentShader:W,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:_e,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:Be,batchingColor:Be&&V._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&V.instanceColor!==null,instancingMorph:Ue&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Dn,alphaToCoverage:!!S.alphaToCoverage,map:Ve,matcap:lt,envMap:T,envMapMode:T&&ee.mapping,envMapCubeUVHeight:H,aoMap:ht,lightMap:je,bumpMap:tt,normalMap:Me,displacementMap:f&&dt,emissiveMap:Re,normalMapObjectSpace:Me&&S.normalMapType===gh,normalMapTangentSpace:Me&&S.normalMapType===mh,metalnessMap:De,roughnessMap:w,anisotropy:v,anisotropyMap:le,clearcoat:z,clearcoatMap:fe,clearcoatNormalMap:Ne,clearcoatRoughnessMap:ne,dispersion:Q,iridescence:j,iridescenceMap:he,iridescenceThicknessMap:Xe,sheen:J,sheenColorMap:Ce,sheenRoughnessMap:me,specularMap:Pe,specularColorMap:ze,specularIntensityMap:at,transmission:Se,transmissionMap:P,thicknessMap:ie,gradientMap:Y,opaque:S.transparent===!1&&S.blending===Ti&&S.alphaToCoverage===!1,alphaMap:Z,alphaTest:oe,alphaHash:Ee,combine:S.combine,mapUv:Ve&&x(S.map.channel),aoMapUv:ht&&x(S.aoMap.channel),lightMapUv:je&&x(S.lightMap.channel),bumpMapUv:tt&&x(S.bumpMap.channel),normalMapUv:Me&&x(S.normalMap.channel),displacementMapUv:dt&&x(S.displacementMap.channel),emissiveMapUv:Re&&x(S.emissiveMap.channel),metalnessMapUv:De&&x(S.metalnessMap.channel),roughnessMapUv:w&&x(S.roughnessMap.channel),anisotropyMapUv:le&&x(S.anisotropyMap.channel),clearcoatMapUv:fe&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:me&&x(S.sheenRoughnessMap.channel),specularMapUv:Pe&&x(S.specularMap.channel),specularColorMapUv:ze&&x(S.specularColorMap.channel),specularIntensityMapUv:at&&x(S.specularIntensityMap.channel),transmissionMapUv:P&&x(S.transmissionMap.channel),thicknessMapUv:ie&&x(S.thicknessMap.channel),alphaMapUv:Z&&x(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Me||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!K.attributes.uv&&(Ve||Z),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:V.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:We,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ft,decodeVideoTexture:Ve&&S.map.isVideoTexture===!0&&Qe.getTransfer(S.map.colorSpace)===st,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===cn,flipSided:S.side===Pt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:qe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&S.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return bt.vertexUv1s=u.has(1),bt.vertexUv2s=u.has(2),bt.vertexUv3s=u.has(3),u.clear(),bt}l(m,"getParameters");function p(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let I in S.defines)b.push(I),b.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(A(b,S),M(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}l(p,"getProgramCacheKey");function A(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}l(A,"getProgramCacheKeyParameters");function M(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.doubleSided&&a.enable(10),b.flipSided&&a.enable(11),b.useDepthPacking&&a.enable(12),b.dithering&&a.enable(13),b.transmission&&a.enable(14),b.sheen&&a.enable(15),b.opaque&&a.enable(16),b.pointsUvs&&a.enable(17),b.decodeVideoTexture&&a.enable(18),b.alphaToCoverage&&a.enable(19),S.push(a.mask)}l(M,"getProgramCacheKeyBooleans");function E(S){let b=_[S.type],I;if(b){let q=Qt[b];I=Vh.clone(q.uniforms)}else I=S.uniforms;return I}l(E,"getUniforms");function F(S,b){let I;for(let q=0,V=h.length;q<V;q++){let X=h[q];if(X.cacheKey===b){I=X,++I.usedTimes;break}}return I===void 0&&(I=new Jm(i,b,S,s),h.push(I)),I}l(F,"acquireProgram");function C(S){if(--S.usedTimes===0){let b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}l(C,"releaseProgram");function R(S){c.remove(S)}l(R,"releaseShaderCache");function k(){c.dispose()}return l(k,"dispose"),{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:F,releaseProgram:C,releaseShaderCache:R,programs:h,dispose:k}}l(Qm,"WebGLPrograms");function jm(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}l(e,"get");function t(s){i.delete(s)}l(t,"remove");function n(s,o,a){i.get(s)[o]=a}l(n,"update");function r(){i=new WeakMap}return l(r,"dispose"),{get:e,remove:t,update:n,dispose:r}}l(jm,"WebGLProperties");function eg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}l(eg,"painterSortStable");function Ql(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}l(Ql,"reversePainterSortStable");function jl(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}l(s,"init");function o(d,f,g,_,x,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:g,groupOrder:_,renderOrder:d.renderOrder,z:x,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=g,p.groupOrder=_,p.renderOrder=d.renderOrder,p.z=x,p.group=m),e++,p}l(o,"getNextRenderItem");function a(d,f,g,_,x,m){let p=o(d,f,g,_,x,m);g.transmission>0?n.push(p):g.transparent===!0?r.push(p):t.push(p)}l(a,"push");function c(d,f,g,_,x,m){let p=o(d,f,g,_,x,m);g.transmission>0?n.unshift(p):g.transparent===!0?r.unshift(p):t.unshift(p)}l(c,"unshift");function u(d,f){t.length>1&&t.sort(d||eg),n.length>1&&n.sort(f||Ql),r.length>1&&r.sort(f||Ql)}l(u,"sort");function h(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return l(h,"finish"),{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:u}}l(jl,"WebGLRenderList");function tg(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new jl,i.set(n,[o])):r>=s.length?(o=new jl,s.push(o)):o=s[r],o}l(e,"get");function t(){i=new WeakMap}return l(t,"dispose"),{get:e,dispose:t}}l(tg,"WebGLRenderLists");function ng(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ye};break;case"SpotLight":t={position:new N,direction:new N,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t},"get")}}l(ng,"UniformsCache");function ig(){let i={};return{get:l(function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t},"get")}}l(ig,"ShadowUniformsCache");var rg=0;function sg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}l(sg,"shadowCastingAndTexturingLightsFirst");function og(i){let e=new ng,t=ig(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new N);let r=new N,s=new gt,o=new gt;function a(u){let h=0,d=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let g=0,_=0,x=0,m=0,p=0,A=0,M=0,E=0,F=0,C=0,R=0;u.sort(sg);for(let S=0,b=u.length;S<b;S++){let I=u[S],q=I.color,V=I.intensity,X=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=q.r*V,d+=q.g*V,f+=q.b*V;else if(I.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(I.sh.coefficients[G],V);R++}else if(I.isDirectionalLight){let G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let ee=I.shadow,H=t.get(I);H.shadowIntensity=ee.intensity,H.shadowBias=ee.bias,H.shadowNormalBias=ee.normalBias,H.shadowRadius=ee.radius,H.shadowMapSize=ee.mapSize,n.directionalShadow[g]=H,n.directionalShadowMap[g]=K,n.directionalShadowMatrix[g]=I.shadow.matrix,A++}n.directional[g]=G,g++}else if(I.isSpotLight){let G=e.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(q).multiplyScalar(V),G.distance=X,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,n.spot[x]=G;let ee=I.shadow;if(I.map&&(n.spotLightMap[F]=I.map,F++,ee.updateMatrices(I),I.castShadow&&C++),n.spotLightMatrix[x]=ee.matrix,I.castShadow){let H=t.get(I);H.shadowIntensity=ee.intensity,H.shadowBias=ee.bias,H.shadowNormalBias=ee.normalBias,H.shadowRadius=ee.radius,H.shadowMapSize=ee.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=K,E++}x++}else if(I.isRectAreaLight){let G=e.get(I);G.color.copy(q).multiplyScalar(V),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=G,m++}else if(I.isPointLight){let G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){let ee=I.shadow,H=t.get(I);H.shadowIntensity=ee.intensity,H.shadowBias=ee.bias,H.shadowNormalBias=ee.normalBias,H.shadowRadius=ee.radius,H.shadowMapSize=ee.mapSize,H.shadowCameraNear=ee.camera.near,H.shadowCameraFar=ee.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=K,n.pointShadowMatrix[_]=I.shadow.matrix,M++}n.point[_]=G,_++}else if(I.isHemisphereLight){let G=e.get(I);G.skyColor.copy(I.color).multiplyScalar(V),G.groundColor.copy(I.groundColor).multiplyScalar(V),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let k=n.hash;(k.directionalLength!==g||k.pointLength!==_||k.spotLength!==x||k.rectAreaLength!==m||k.hemiLength!==p||k.numDirectionalShadows!==A||k.numPointShadows!==M||k.numSpotShadows!==E||k.numSpotMaps!==F||k.numLightProbes!==R)&&(n.directional.length=g,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=E+F-C,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,k.directionalLength=g,k.pointLength=_,k.spotLength=x,k.rectAreaLength=m,k.hemiLength=p,k.numDirectionalShadows=A,k.numPointShadows=M,k.numSpotShadows=E,k.numSpotMaps=F,k.numLightProbes=R,n.version=rg++)}l(a,"setup");function c(u,h){let d=0,f=0,g=0,_=0,x=0,m=h.matrixWorldInverse;for(let p=0,A=u.length;p<A;p++){let M=u[p];if(M.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(M.isSpotLight){let E=n.spot[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),g++}else if(M.isRectAreaLight){let E=n.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let E=n.hemi[x];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),x++}}}return l(c,"setupView"),{setup:a,setupView:c,state:n}}l(og,"WebGLLights");function ec(i){let e=new og(i),t=[],n=[];function r(h){u.camera=h,t.length=0,n.length=0}l(r,"init");function s(h){t.push(h)}l(s,"pushLight");function o(h){n.push(h)}l(o,"pushShadow");function a(){e.setup(t)}l(a,"setupLights");function c(h){e.setupView(t,h)}l(c,"setupLightsView");let u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}l(ec,"WebGLRenderState");function ag(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new ec(i),e.set(r,[a])):s>=o.length?(a=new ec(i),o.push(a)):a=o[s],a}l(t,"get");function n(){e=new WeakMap}return l(n,"dispose"),{get:t,dispose:n}}l(ag,"WebGLRenderStates");var sa=class extends Qn{static{l(this,"MeshDepthMaterial")}constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},oa=class extends Qn{static{l(this,"MeshDistanceMaterial")}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ug(i,e,t){let n=new as,r=new ge,s=new ge,o=new se,a=new sa({depthPacking:ph}),c=new oa,u={},h=t.maxTextureSize,d={[Pn]:Pt,[Pt]:Pn,[cn]:cn},f=new Le({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:lg,fragmentShader:cg}),g=f.clone();g.defines.HORIZONTAL_PASS=1;let _=new Un;_.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ie(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oc;let p=this.type;this.render=function(C,R,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let S=i.getRenderTarget(),b=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Tn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let V=p!==an&&this.type===an,X=p===an&&this.type!==an;for(let K=0,G=C.length;K<G;K++){let ee=C[K],H=ee.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);let ue=H.getFrameExtents();if(r.multiply(ue),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ue.x),r.x=s.x*ue.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ue.y),r.y=s.y*ue.y,H.mapSize.y=s.y)),H.map===null||V===!0||X===!0){let ye=this.type!==an?{minFilter:He,magFilter:He}:{};H.map!==null&&H.map.dispose(),H.map=new pn(r.x,r.y,ye),H.map.texture.name=ee.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let pe=H.getViewportCount();for(let ye=0;ye<pe;ye++){let We=H.getViewport(ye);o.set(s.x*We.x,s.y*We.y,s.x*We.z,s.y*We.w),q.viewport(o),H.updateMatrices(ee,ye),n=H.getFrustum(),E(R,k,H.camera,ee,this.type)}H.isPointLightShadow!==!0&&this.type===an&&A(H,k),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,b,I)};function A(C,R){let k=e.update(x);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new pn(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(R,null,k,f,x,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(R,null,k,g,x,null)}l(A,"VSMPass");function M(C,R,k,S){let b=null,I=k.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)b=I;else if(b=k.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let q=b.uuid,V=R.uuid,X=u[q];X===void 0&&(X={},u[q]=X);let K=X[V];K===void 0&&(K=b.clone(),X[V]=K,R.addEventListener("dispose",F)),b=K}if(b.visible=R.visible,b.wireframe=R.wireframe,S===an?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:d[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,k.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let q=i.properties.get(b);q.light=k}return b}l(M,"getDepthMaterial");function E(C,R,k,S,b){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===an)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,C.matrixWorld);let V=e.update(C),X=C.material;if(Array.isArray(X)){let K=V.groups;for(let G=0,ee=K.length;G<ee;G++){let H=K[G],ue=X[H.materialIndex];if(ue&&ue.visible){let pe=M(C,ue,S,b);C.onBeforeShadow(i,C,R,k,V,pe,H),i.renderBufferDirect(k,null,V,pe,C,H),C.onAfterShadow(i,C,R,k,V,pe,H)}}}else if(X.visible){let K=M(C,X,S,b);C.onBeforeShadow(i,C,R,k,V,K,null),i.renderBufferDirect(k,null,V,K,C,null),C.onAfterShadow(i,C,R,k,V,K,null)}}let q=C.children;for(let V=0,X=q.length;V<X;V++)E(q[V],R,k,S,b)}l(E,"renderObject");function F(C){C.target.removeEventListener("dispose",F);for(let k in u){let S=u[k],b=C.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}l(F,"onMaterialDispose")}l(ug,"WebGLShadowMap");function hg(i){function e(){let P=!1,ie=new se,Y=null,Z=new se(0,0,0,0);return{setMask:l(function(oe){Y!==oe&&!P&&(i.colorMask(oe,oe,oe,oe),Y=oe)},"setMask"),setLocked:l(function(oe){P=oe},"setLocked"),setClear:l(function(oe,Ee,qe,ft,bt){bt===!0&&(oe*=ft,Ee*=ft,qe*=ft),ie.set(oe,Ee,qe,ft),Z.equals(ie)===!1&&(i.clearColor(oe,Ee,qe,ft),Z.copy(ie))},"setClear"),reset:l(function(){P=!1,Y=null,Z.set(-1,0,0,0)},"reset")}}l(e,"ColorBuffer");function t(){let P=!1,ie=null,Y=null,Z=null;return{setTest:l(function(oe){oe?_e(i.DEPTH_TEST):de(i.DEPTH_TEST)},"setTest"),setMask:l(function(oe){ie!==oe&&!P&&(i.depthMask(oe),ie=oe)},"setMask"),setFunc:l(function(oe){if(Y!==oe){switch(oe){case Ju:i.depthFunc(i.NEVER);break;case Ku:i.depthFunc(i.ALWAYS);break;case Qu:i.depthFunc(i.LESS);break;case Yr:i.depthFunc(i.LEQUAL);break;case ju:i.depthFunc(i.EQUAL);break;case eh:i.depthFunc(i.GEQUAL);break;case th:i.depthFunc(i.GREATER);break;case nh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Y=oe}},"setFunc"),setLocked:l(function(oe){P=oe},"setLocked"),setClear:l(function(oe){Z!==oe&&(i.clearDepth(oe),Z=oe)},"setClear"),reset:l(function(){P=!1,ie=null,Y=null,Z=null},"reset")}}l(t,"DepthBuffer");function n(){let P=!1,ie=null,Y=null,Z=null,oe=null,Ee=null,qe=null,ft=null,bt=null;return{setTest:l(function($e){P||($e?_e(i.STENCIL_TEST):de(i.STENCIL_TEST))},"setTest"),setMask:l(function($e){ie!==$e&&!P&&(i.stencilMask($e),ie=$e)},"setMask"),setFunc:l(function($e,en,Zt){(Y!==$e||Z!==en||oe!==Zt)&&(i.stencilFunc($e,en,Zt),Y=$e,Z=en,oe=Zt)},"setFunc"),setOp:l(function($e,en,Zt){(Ee!==$e||qe!==en||ft!==Zt)&&(i.stencilOp($e,en,Zt),Ee=$e,qe=en,ft=Zt)},"setOp"),setLocked:l(function($e){P=$e},"setLocked"),setClear:l(function($e){bt!==$e&&(i.clearStencil($e),bt=$e)},"setClear"),reset:l(function(){P=!1,ie=null,Y=null,Z=null,oe=null,Ee=null,qe=null,ft=null,bt=null},"reset")}}l(n,"StencilBuffer");let r=new e,s=new t,o=new n,a=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],g=null,_=!1,x=null,m=null,p=null,A=null,M=null,E=null,F=null,C=new Ye(0,0,0),R=0,k=!1,S=null,b=null,I=null,q=null,V=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,G=0,ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(ee)[1]),K=G>=1):ee.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),K=G>=2);let H=null,ue={},pe=i.getParameter(i.SCISSOR_BOX),ye=i.getParameter(i.VIEWPORT),We=new se().fromArray(pe),et=new se().fromArray(ye);function W(P,ie,Y,Z){let oe=new Uint8Array(4),Ee=i.createTexture();i.bindTexture(P,Ee),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<Y;qe++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(ie+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return Ee}l(W,"createTexture");let te={};te[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),_e(i.DEPTH_TEST),s.setFunc(Yr),tt(!1),Me(sl),_e(i.CULL_FACE),ht(Tn);function _e(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}l(_e,"enable");function de(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}l(de,"disable");function Ue(P,ie){return h[P]!==ie?(i.bindFramebuffer(P,ie),h[P]=ie,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ie),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ie),!0):!1}l(Ue,"bindFramebuffer");function Be(P,ie){let Y=f,Z=!1;if(P){Y=d.get(ie),Y===void 0&&(Y=[],d.set(ie,Y));let oe=P.textures;if(Y.length!==oe.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let Ee=0,qe=oe.length;Ee<qe;Ee++)Y[Ee]=i.COLOR_ATTACHMENT0+Ee;Y.length=oe.length,Z=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,Z=!0);Z&&i.drawBuffers(Y)}l(Be,"drawBuffers");function Ve(P){return g!==P?(i.useProgram(P),g=P,!0):!1}l(Ve,"useProgram");let lt={[Xn]:i.FUNC_ADD,[Uu]:i.FUNC_SUBTRACT,[Du]:i.FUNC_REVERSE_SUBTRACT};lt[Nu]=i.MIN,lt[Ou]=i.MAX;let T={[Fu]:i.ZERO,[Bu]:i.ONE,[zu]:i.SRC_COLOR,[uo]:i.SRC_ALPHA,[Xu]:i.SRC_ALPHA_SATURATE,[Gu]:i.DST_COLOR,[Vu]:i.DST_ALPHA,[ku]:i.ONE_MINUS_SRC_COLOR,[ho]:i.ONE_MINUS_SRC_ALPHA,[Wu]:i.ONE_MINUS_DST_COLOR,[Hu]:i.ONE_MINUS_DST_ALPHA,[qu]:i.CONSTANT_COLOR,[Yu]:i.ONE_MINUS_CONSTANT_COLOR,[$u]:i.CONSTANT_ALPHA,[Zu]:i.ONE_MINUS_CONSTANT_ALPHA};function ht(P,ie,Y,Z,oe,Ee,qe,ft,bt,$e){if(P===Tn){_===!0&&(de(i.BLEND),_=!1);return}if(_===!1&&(_e(i.BLEND),_=!0),P!==Lu){if(P!==x||$e!==k){if((m!==Xn||M!==Xn)&&(i.blendEquation(i.FUNC_ADD),m=Xn,M=Xn),$e)switch(P){case Ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ol:i.blendFunc(i.ONE,i.ONE);break;case al:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ll:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ol:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case al:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ll:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}p=null,A=null,E=null,F=null,C.set(0,0,0),R=0,x=P,k=$e}return}oe=oe||ie,Ee=Ee||Y,qe=qe||Z,(ie!==m||oe!==M)&&(i.blendEquationSeparate(lt[ie],lt[oe]),m=ie,M=oe),(Y!==p||Z!==A||Ee!==E||qe!==F)&&(i.blendFuncSeparate(T[Y],T[Z],T[Ee],T[qe]),p=Y,A=Z,E=Ee,F=qe),(ft.equals(C)===!1||bt!==R)&&(i.blendColor(ft.r,ft.g,ft.b,bt),C.copy(ft),R=bt),x=P,k=!1}l(ht,"setBlending");function je(P,ie){P.side===cn?de(i.CULL_FACE):_e(i.CULL_FACE);let Y=P.side===Pt;ie&&(Y=!Y),tt(Y),P.blending===Ti&&P.transparent===!1?ht(Tn):ht(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),r.setMask(P.colorWrite);let Z=P.stencilWrite;o.setTest(Z),Z&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Re(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?_e(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}l(je,"setMaterial");function tt(P){S!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),S=P)}l(tt,"setFlipSided");function Me(P){P!==Ru?(_e(i.CULL_FACE),P!==b&&(P===sl?i.cullFace(i.BACK):P===Pu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),b=P}l(Me,"setCullFace");function dt(P){P!==I&&(K&&i.lineWidth(P),I=P)}l(dt,"setLineWidth");function Re(P,ie,Y){P?(_e(i.POLYGON_OFFSET_FILL),(q!==ie||V!==Y)&&(i.polygonOffset(ie,Y),q=ie,V=Y)):de(i.POLYGON_OFFSET_FILL)}l(Re,"setPolygonOffset");function De(P){P?_e(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}l(De,"setScissorTest");function w(P){P===void 0&&(P=i.TEXTURE0+X-1),H!==P&&(i.activeTexture(P),H=P)}l(w,"activeTexture");function v(P,ie,Y){Y===void 0&&(H===null?Y=i.TEXTURE0+X-1:Y=H);let Z=ue[Y];Z===void 0&&(Z={type:void 0,texture:void 0},ue[Y]=Z),(Z.type!==P||Z.texture!==ie)&&(H!==Y&&(i.activeTexture(Y),H=Y),i.bindTexture(P,ie||te[P]),Z.type=P,Z.texture=ie)}l(v,"bindTexture");function z(){let P=ue[H];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}l(z,"unbindTexture");function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}l(Q,"compressedTexImage2D");function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}l(j,"compressedTexImage3D");function J(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}l(J,"texSubImage2D");function Se(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}l(Se,"texSubImage3D");function le(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}l(le,"compressedTexSubImage2D");function fe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}l(fe,"compressedTexSubImage3D");function Ne(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}l(Ne,"texStorage2D");function ne(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}l(ne,"texStorage3D");function he(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}l(he,"texImage2D");function Xe(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}l(Xe,"texImage3D");function Ce(P){We.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),We.copy(P))}l(Ce,"scissor");function me(P){et.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),et.copy(P))}l(me,"viewport");function Pe(P,ie){let Y=c.get(ie);Y===void 0&&(Y=new WeakMap,c.set(ie,Y));let Z=Y.get(P);Z===void 0&&(Z=i.getUniformBlockIndex(ie,P.name),Y.set(P,Z))}l(Pe,"updateUBOMapping");function ze(P,ie){let Z=c.get(ie).get(P);a.get(ie)!==Z&&(i.uniformBlockBinding(ie,Z,P.__bindingPointIndex),a.set(ie,Z))}l(ze,"uniformBlockBinding");function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},H=null,ue={},h={},d=new WeakMap,f=[],g=null,_=!1,x=null,m=null,p=null,A=null,M=null,E=null,F=null,C=new Ye(0,0,0),R=0,k=!1,S=null,b=null,I=null,q=null,V=null,We.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return l(at,"reset"),{buffers:{color:r,depth:s,stencil:o},enable:_e,disable:de,bindFramebuffer:Ue,drawBuffers:Be,useProgram:Ve,setBlending:ht,setMaterial:je,setFlipSided:tt,setCullFace:Me,setLineWidth:dt,setPolygonOffset:Re,setScissorTest:De,activeTexture:w,bindTexture:v,unbindTexture:z,compressedTexImage2D:Q,compressedTexImage3D:j,texImage2D:he,texImage3D:Xe,updateUBOMapping:Pe,uniformBlockBinding:ze,texStorage2D:Ne,texStorage3D:ne,texSubImage2D:J,texSubImage3D:Se,compressedTexSubImage2D:le,compressedTexSubImage3D:fe,scissor:Ce,viewport:me,reset:at}}l(hg,"WebGLState");function tc(i,e,t,n){let r=dg(n);switch(t){case dc:return i*e;case pc:return i*e;case mc:return i*e*2;case gc:return i*e/r.components*r.byteLength;case Ea:return i*e/r.components*r.byteLength;case _c:return i*e*2/r.components*r.byteLength;case Aa:return i*e*2/r.components*r.byteLength;case fc:return i*e*3/r.components*r.byteLength;case Yt:return i*e*4/r.components*r.byteLength;case Ta:return i*e*4/r.components*r.byteLength;case Hr:case Gr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wr:case Xr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vo:case yo:return Math.max(i,16)*Math.max(e,8)/4;case _o:case xo:return Math.max(i,8)*Math.max(e,8)/2;case bo:case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case So:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case To:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Co:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ro:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Po:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Io:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Do:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case No:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Oo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Fo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case qr:case Bo:case zo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case vc:case ko:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Vo:case Ho:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}l(tc,"getByteLength");function dg(i){switch(i){case fn:case cc:return{byteLength:1,components:1};case nr:case uc:case lr:return{byteLength:2,components:1};case Sa:case wa:return{byteLength:2,components:4};case Jn:case Ma:case un:return{byteLength:4,components:1};case hc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}l(dg,"getTextureTypeByteLength");function fg(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ge,h=new WeakMap,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,v){return g?new OffscreenCanvas(w,v):ir("canvas")}l(_,"createCanvas");function x(w,v,z){let Q=1,j=De(w);if((j.width>z||j.height>z)&&(Q=z/Math.max(j.width,j.height)),Q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let J=Math.floor(Q*j.width),Se=Math.floor(Q*j.height);d===void 0&&(d=_(J,Se));let le=v?_(J,Se):d;return le.width=J,le.height=Se,le.getContext("2d").drawImage(w,0,0,J,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+J+"x"+Se+")."),le}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}l(x,"resizeImage");function m(w){return w.generateMipmaps&&w.minFilter!==He&&w.minFilter!==qt}l(m,"textureNeedsGenerateMipmaps");function p(w){i.generateMipmap(w)}l(p,"generateMipmap");function A(w,v,z,Q,j=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let J=v;if(v===i.RED&&(z===i.FLOAT&&(J=i.R32F),z===i.HALF_FLOAT&&(J=i.R16F),z===i.UNSIGNED_BYTE&&(J=i.R8)),v===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.R8UI),z===i.UNSIGNED_SHORT&&(J=i.R16UI),z===i.UNSIGNED_INT&&(J=i.R32UI),z===i.BYTE&&(J=i.R8I),z===i.SHORT&&(J=i.R16I),z===i.INT&&(J=i.R32I)),v===i.RG&&(z===i.FLOAT&&(J=i.RG32F),z===i.HALF_FLOAT&&(J=i.RG16F),z===i.UNSIGNED_BYTE&&(J=i.RG8)),v===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RG8UI),z===i.UNSIGNED_SHORT&&(J=i.RG16UI),z===i.UNSIGNED_INT&&(J=i.RG32UI),z===i.BYTE&&(J=i.RG8I),z===i.SHORT&&(J=i.RG16I),z===i.INT&&(J=i.RG32I)),v===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),v===i.RGBA){let Se=j?Zr:Qe.getTransfer(Q);z===i.FLOAT&&(J=i.RGBA32F),z===i.HALF_FLOAT&&(J=i.RGBA16F),z===i.UNSIGNED_BYTE&&(J=Se===st?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}l(A,"getInternalFormat");function M(w,v){let z;return w?v===null||v===Jn||v===Di?z=i.DEPTH24_STENCIL8:v===un?z=i.DEPTH32F_STENCIL8:v===nr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Jn||v===Di?z=i.DEPTH_COMPONENT24:v===un?z=i.DEPTH_COMPONENT32F:v===nr&&(z=i.DEPTH_COMPONENT16),z}l(M,"getInternalDepthFormat");function E(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==He&&w.minFilter!==qt?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}l(E,"getMipLevels");function F(w){let v=w.target;v.removeEventListener("dispose",F),R(v),v.isVideoTexture&&h.delete(v)}l(F,"onTextureDispose");function C(w){let v=w.target;v.removeEventListener("dispose",C),S(v)}l(C,"onRenderTargetDispose");function R(w){let v=n.get(w);if(v.__webglInit===void 0)return;let z=w.source,Q=f.get(z);if(Q){let j=Q[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&k(w),Object.keys(Q).length===0&&f.delete(z)}n.remove(w)}l(R,"deallocateTexture");function k(w){let v=n.get(w);i.deleteTexture(v.__webglTexture);let z=w.source,Q=f.get(z);delete Q[v.__cacheKey],o.memory.textures--}l(k,"deleteTexture");function S(w){let v=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(v.__webglFramebuffer[Q]))for(let j=0;j<v.__webglFramebuffer[Q].length;j++)i.deleteFramebuffer(v.__webglFramebuffer[Q][j]);else i.deleteFramebuffer(v.__webglFramebuffer[Q]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Q])}else{if(Array.isArray(v.__webglFramebuffer))for(let Q=0;Q<v.__webglFramebuffer.length;Q++)i.deleteFramebuffer(v.__webglFramebuffer[Q]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Q=0;Q<v.__webglColorRenderbuffer.length;Q++)v.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Q]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let z=w.textures;for(let Q=0,j=z.length;Q<j;Q++){let J=n.get(z[Q]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(z[Q])}n.remove(w)}l(S,"deallocateRenderTarget");let b=0;function I(){b=0}l(I,"resetTextureUnits");function q(){let w=b;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),b+=1,w}l(q,"allocateTextureUnit");function V(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}l(V,"getTextureCacheKey");function X(w,v){let z=n.get(w);if(w.isVideoTexture&&dt(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){let Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(z,w,v);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+v)}l(X,"setTexture2D");function K(w,v){let z=n.get(w);if(w.version>0&&z.__version!==w.version){et(z,w,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+v)}l(K,"setTexture2DArray");function G(w,v){let z=n.get(w);if(w.version>0&&z.__version!==w.version){et(z,w,v);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+v)}l(G,"setTexture3D");function ee(w,v){let z=n.get(w);if(w.version>0&&z.__version!==w.version){W(z,w,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+v)}l(ee,"setTextureCube");let H={[mo]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[go]:i.MIRRORED_REPEAT},ue={[He]:i.NEAREST,[dh]:i.NEAREST_MIPMAP_NEAREST,[gr]:i.NEAREST_MIPMAP_LINEAR,[qt]:i.LINEAR,[Ns]:i.LINEAR_MIPMAP_NEAREST,[$n]:i.LINEAR_MIPMAP_LINEAR},pe={[_h]:i.NEVER,[Sh]:i.ALWAYS,[vh]:i.LESS,[xc]:i.LEQUAL,[xh]:i.EQUAL,[Mh]:i.GEQUAL,[yh]:i.GREATER,[bh]:i.NOTEQUAL};function ye(w,v){if(v.type===un&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===qt||v.magFilter===Ns||v.magFilter===gr||v.magFilter===$n||v.minFilter===qt||v.minFilter===Ns||v.minFilter===gr||v.minFilter===$n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,H[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,H[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,H[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ue[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ue[v.minFilter]),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,pe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===He||v.minFilter!==gr&&v.minFilter!==$n||v.type===un&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}l(ye,"setTextureParameters");function We(w,v){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",F));let Q=v.source,j=f.get(Q);j===void 0&&(j={},f.set(Q,j));let J=V(v);if(J!==w.__cacheKey){j[J]===void 0&&(j[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),j[J].usedTimes++;let Se=j[w.__cacheKey];Se!==void 0&&(j[w.__cacheKey].usedTimes--,Se.usedTimes===0&&k(v)),w.__cacheKey=J,w.__webglTexture=j[J].texture}return z}l(We,"initTexture");function et(w,v,z){let Q=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Q=i.TEXTURE_3D);let j=We(w,v),J=v.source;t.bindTexture(Q,w.__webglTexture,i.TEXTURE0+z);let Se=n.get(J);if(J.version!==Se.__version||j===!0){t.activeTexture(i.TEXTURE0+z);let le=Qe.getPrimaries(Qe.workingColorSpace),fe=v.colorSpace===An?null:Qe.getPrimaries(v.colorSpace),Ne=v.colorSpace===An||le===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ne=x(v.image,!1,r.maxTextureSize);ne=Re(v,ne);let he=s.convert(v.format,v.colorSpace),Xe=s.convert(v.type),Ce=A(v.internalFormat,he,Xe,v.colorSpace,v.isVideoTexture);ye(Q,v);let me,Pe=v.mipmaps,ze=v.isVideoTexture!==!0,at=Se.__version===void 0||j===!0,P=J.dataReady,ie=E(v,ne);if(v.isDepthTexture)Ce=M(v.format===Ni,v.type),at&&(ze?t.texStorage2D(i.TEXTURE_2D,1,Ce,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,Ce,ne.width,ne.height,0,he,Xe,null));else if(v.isDataTexture)if(Pe.length>0){ze&&at&&t.texStorage2D(i.TEXTURE_2D,ie,Ce,Pe[0].width,Pe[0].height);for(let Y=0,Z=Pe.length;Y<Z;Y++)me=Pe[Y],ze?P&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,me.width,me.height,he,Xe,me.data):t.texImage2D(i.TEXTURE_2D,Y,Ce,me.width,me.height,0,he,Xe,me.data);v.generateMipmaps=!1}else ze?(at&&t.texStorage2D(i.TEXTURE_2D,ie,Ce,ne.width,ne.height),P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne.width,ne.height,he,Xe,ne.data)):t.texImage2D(i.TEXTURE_2D,0,Ce,ne.width,ne.height,0,he,Xe,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ze&&at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,Ce,Pe[0].width,Pe[0].height,ne.depth);for(let Y=0,Z=Pe.length;Y<Z;Y++)if(me=Pe[Y],v.format!==Yt)if(he!==null)if(ze){if(P)if(v.layerUpdates.size>0){let oe=tc(me.width,me.height,v.format,v.type);for(let Ee of v.layerUpdates){let qe=me.data.subarray(Ee*oe/me.data.BYTES_PER_ELEMENT,(Ee+1)*oe/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,Ee,me.width,me.height,1,he,qe,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,me.width,me.height,ne.depth,he,me.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Ce,me.width,me.height,ne.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,me.width,me.height,ne.depth,he,Xe,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,Ce,me.width,me.height,ne.depth,0,he,Xe,me.data)}else{ze&&at&&t.texStorage2D(i.TEXTURE_2D,ie,Ce,Pe[0].width,Pe[0].height);for(let Y=0,Z=Pe.length;Y<Z;Y++)me=Pe[Y],v.format!==Yt?he!==null?ze?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,me.width,me.height,he,me.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,Ce,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?P&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,me.width,me.height,he,Xe,me.data):t.texImage2D(i.TEXTURE_2D,Y,Ce,me.width,me.height,0,he,Xe,me.data)}else if(v.isDataArrayTexture)if(ze){if(at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,Ce,ne.width,ne.height,ne.depth),P)if(v.layerUpdates.size>0){let Y=tc(ne.width,ne.height,v.format,v.type);for(let Z of v.layerUpdates){let oe=ne.data.subarray(Z*Y/ne.data.BYTES_PER_ELEMENT,(Z+1)*Y/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,ne.width,ne.height,1,he,Xe,oe)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,he,Xe,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,ne.width,ne.height,ne.depth,0,he,Xe,ne.data);else if(v.isData3DTexture)ze?(at&&t.texStorage3D(i.TEXTURE_3D,ie,Ce,ne.width,ne.height,ne.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,he,Xe,ne.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,ne.width,ne.height,ne.depth,0,he,Xe,ne.data);else if(v.isFramebufferTexture){if(at)if(ze)t.texStorage2D(i.TEXTURE_2D,ie,Ce,ne.width,ne.height);else{let Y=ne.width,Z=ne.height;for(let oe=0;oe<ie;oe++)t.texImage2D(i.TEXTURE_2D,oe,Ce,Y,Z,0,he,Xe,null),Y>>=1,Z>>=1}}else if(Pe.length>0){if(ze&&at){let Y=De(Pe[0]);t.texStorage2D(i.TEXTURE_2D,ie,Ce,Y.width,Y.height)}for(let Y=0,Z=Pe.length;Y<Z;Y++)me=Pe[Y],ze?P&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,he,Xe,me):t.texImage2D(i.TEXTURE_2D,Y,Ce,he,Xe,me);v.generateMipmaps=!1}else if(ze){if(at){let Y=De(ne);t.texStorage2D(i.TEXTURE_2D,ie,Ce,Y.width,Y.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Xe,ne)}else t.texImage2D(i.TEXTURE_2D,0,Ce,he,Xe,ne);m(v)&&p(Q),Se.__version=J.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}l(et,"uploadTexture");function W(w,v,z){if(v.image.length!==6)return;let Q=We(w,v),j=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+z);let J=n.get(j);if(j.version!==J.__version||Q===!0){t.activeTexture(i.TEXTURE0+z);let Se=Qe.getPrimaries(Qe.workingColorSpace),le=v.colorSpace===An?null:Qe.getPrimaries(v.colorSpace),fe=v.colorSpace===An||Se===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Ne=v.isCompressedTexture||v.image[0].isCompressedTexture,ne=v.image[0]&&v.image[0].isDataTexture,he=[];for(let Z=0;Z<6;Z++)!Ne&&!ne?he[Z]=x(v.image[Z],!0,r.maxCubemapSize):he[Z]=ne?v.image[Z].image:v.image[Z],he[Z]=Re(v,he[Z]);let Xe=he[0],Ce=s.convert(v.format,v.colorSpace),me=s.convert(v.type),Pe=A(v.internalFormat,Ce,me,v.colorSpace),ze=v.isVideoTexture!==!0,at=J.__version===void 0||Q===!0,P=j.dataReady,ie=E(v,Xe);ye(i.TEXTURE_CUBE_MAP,v);let Y;if(Ne){ze&&at&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ie,Pe,Xe.width,Xe.height);for(let Z=0;Z<6;Z++){Y=he[Z].mipmaps;for(let oe=0;oe<Y.length;oe++){let Ee=Y[oe];v.format!==Yt?Ce!==null?ze?P&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,0,0,Ee.width,Ee.height,Ce,Ee.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,Pe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,0,0,Ee.width,Ee.height,Ce,me,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe,Pe,Ee.width,Ee.height,0,Ce,me,Ee.data)}}}else{if(Y=v.mipmaps,ze&&at){Y.length>0&&ie++;let Z=De(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ie,Pe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ne){ze?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,he[Z].width,he[Z].height,Ce,me,he[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Pe,he[Z].width,he[Z].height,0,Ce,me,he[Z].data);for(let oe=0;oe<Y.length;oe++){let qe=Y[oe].image[Z].image;ze?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,0,0,qe.width,qe.height,Ce,me,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,Pe,qe.width,qe.height,0,Ce,me,qe.data)}}else{ze?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ce,me,he[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Pe,Ce,me,he[Z]);for(let oe=0;oe<Y.length;oe++){let Ee=Y[oe];ze?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,0,0,Ce,me,Ee.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,oe+1,Pe,Ce,me,Ee.image[Z])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),J.__version=j.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}l(W,"uploadCubeTexture");function te(w,v,z,Q,j,J){let Se=s.convert(z.format,z.colorSpace),le=s.convert(z.type),fe=A(z.internalFormat,Se,le,z.colorSpace);if(!n.get(v).__hasExternalTextures){let ne=Math.max(1,v.width>>J),he=Math.max(1,v.height>>J);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,J,fe,ne,he,v.depth,0,Se,le,null):t.texImage2D(j,J,fe,ne,he,0,Se,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Me(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,j,n.get(z).__webglTexture,0,tt(v)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,j,n.get(z).__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}l(te,"setupFrameBufferTexture");function _e(w,v,z){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer){let Q=v.depthTexture,j=Q&&Q.isDepthTexture?Q.type:null,J=M(v.stencilBuffer,j),Se=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=tt(v);Me(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,J,v.width,v.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,J,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,J,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,w)}else{let Q=v.textures;for(let j=0;j<Q.length;j++){let J=Q[j],Se=s.convert(J.format,J.colorSpace),le=s.convert(J.type),fe=A(J.internalFormat,Se,le,J.colorSpace),Ne=tt(v);z&&Me(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,fe,v.width,v.height):Me(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne,fe,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,fe,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}l(_e,"setupRenderBufferStorage");function de(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X(v.depthTexture,0);let Q=n.get(v.depthTexture).__webglTexture,j=tt(v);if(v.depthTexture.format===Ci)Me(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(v.depthTexture.format===Ni)Me(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}l(de,"setupDepthTexture");function Ue(w){let v=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");de(v.__webglFramebuffer,w)}else if(z){v.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Q]),v.__webglDepthbuffer[Q]=i.createRenderbuffer(),_e(v.__webglDepthbuffer[Q],w,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),_e(v.__webglDepthbuffer,w,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}l(Ue,"setupDepthRenderbuffer");function Be(w,v,z){let Q=n.get(w);v!==void 0&&te(Q.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ue(w)}l(Be,"rebindTextures");function Ve(w){let v=w.texture,z=n.get(w),Q=n.get(v);w.addEventListener("dispose",C);let j=w.textures,J=w.isWebGLCubeRenderTarget===!0,Se=j.length>1;if(Se||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=v.version,o.memory.textures++),J){z.__webglFramebuffer=[];for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[le]=[];for(let fe=0;fe<v.mipmaps.length;fe++)z.__webglFramebuffer[le][fe]=i.createFramebuffer()}else z.__webglFramebuffer[le]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let le=0;le<v.mipmaps.length;le++)z.__webglFramebuffer[le]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Se)for(let le=0,fe=j.length;le<fe;le++){let Ne=n.get(j[le]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&Me(w)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let le=0;le<j.length;le++){let fe=j[le];z.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[le]);let Ne=s.convert(fe.format,fe.colorSpace),ne=s.convert(fe.type),he=A(fe.internalFormat,Ne,ne,fe.colorSpace,w.isXRRenderTarget===!0),Xe=tt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,he,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,z.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),_e(z.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),ye(i.TEXTURE_CUBE_MAP,v);for(let le=0;le<6;le++)if(v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)te(z.__webglFramebuffer[le][fe],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,fe);else te(z.__webglFramebuffer[le],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(v)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let le=0,fe=j.length;le<fe;le++){let Ne=j[le],ne=n.get(Ne);t.bindTexture(i.TEXTURE_2D,ne.__webglTexture),ye(i.TEXTURE_2D,Ne),te(z.__webglFramebuffer,w,Ne,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,0),m(Ne)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(le=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,Q.__webglTexture),ye(le,v),v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)te(z.__webglFramebuffer[fe],w,v,i.COLOR_ATTACHMENT0,le,fe);else te(z.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,le,0);m(v)&&p(le),t.unbindTexture()}w.depthBuffer&&Ue(w)}l(Ve,"setupRenderTarget");function lt(w){let v=w.textures;for(let z=0,Q=v.length;z<Q;z++){let j=v[z];if(m(j)){let J=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Se=n.get(j).__webglTexture;t.bindTexture(J,Se),p(J),t.unbindTexture()}}}l(lt,"updateRenderTargetMipmap");let T=[],ht=[];function je(w){if(w.samples>0){if(Me(w)===!1){let v=w.textures,z=w.width,Q=w.height,j=i.COLOR_BUFFER_BIT,J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(w),le=v.length>1;if(le)for(let fe=0;fe<v.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let fe=0;fe<v.length;fe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[fe]);let Ne=n.get(v[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ne,0)}i.blitFramebuffer(0,0,z,Q,0,0,z,Q,j,i.NEAREST),c===!0&&(T.length=0,ht.length=0,T.push(i.COLOR_ATTACHMENT0+fe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(T.push(J),ht.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ht)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,T))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let fe=0;fe<v.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,Se.__webglColorRenderbuffer[fe]);let Ne=n.get(v[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,Ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let v=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}l(je,"updateMultisampleRenderTarget");function tt(w){return Math.min(r.maxSamples,w.samples)}l(tt,"getRenderTargetSamples");function Me(w){let v=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}l(Me,"useMultisampledRTT");function dt(w){let v=o.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}l(dt,"updateVideoTexture");function Re(w,v){let z=w.colorSpace,Q=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==Dn&&z!==An&&(Qe.getTransfer(z)===st?(Q!==Yt||j!==fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),v}l(Re,"verifyColorSpace");function De(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(u.width=w.naturalWidth||w.width,u.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(u.width=w.displayWidth,u.height=w.displayHeight):(u.width=w.width,u.height=w.height),u}l(De,"getDimensions"),this.allocateTextureUnit=q,this.resetTextureUnits=I,this.setTexture2D=X,this.setTexture2DArray=K,this.setTexture3D=G,this.setTextureCube=ee,this.rebindTextures=Be,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Me}l(fg,"WebGLTextures");function pg(i,e){function t(n,r=An){let s,o=Qe.getTransfer(r);if(n===fn)return i.UNSIGNED_BYTE;if(n===Sa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cc)return i.BYTE;if(n===uc)return i.SHORT;if(n===nr)return i.UNSIGNED_SHORT;if(n===Ma)return i.INT;if(n===Jn)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===lr)return i.HALF_FLOAT;if(n===dc)return i.ALPHA;if(n===fc)return i.RGB;if(n===Yt)return i.RGBA;if(n===pc)return i.LUMINANCE;if(n===mc)return i.LUMINANCE_ALPHA;if(n===Ci)return i.DEPTH_COMPONENT;if(n===Ni)return i.DEPTH_STENCIL;if(n===gc)return i.RED;if(n===Ea)return i.RED_INTEGER;if(n===_c)return i.RG;if(n===Aa)return i.RG_INTEGER;if(n===Ta)return i.RGBA_INTEGER;if(n===Hr||n===Gr||n===Wr||n===Xr)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Hr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Hr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_o||n===vo||n===xo||n===yo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===_o)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bo||n===Mo||n===So)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===bo||n===Mo)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===So)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wo||n===Eo||n===Ao||n===To||n===Co||n===Ro||n===Po||n===Io||n===Lo||n===Uo||n===Do||n===No||n===Oo||n===Fo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===wo)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eo)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ao)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===To)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Co)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ro)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Po)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Io)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lo)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uo)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Do)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===No)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oo)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fo)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qr||n===Bo||n===zo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===qr)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vc||n===ko||n===Vo||n===Ho)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===qr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ko)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ho)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return l(t,"convert"),{convert:t}}l(pg,"WebGLUtils");var aa=class extends Ct{static{l(this,"ArrayCamera")}constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},it=class extends zt{static{l(this,"Group")}constructor(){super(),this.isGroup=!0,this.type="Group"}},mg={type:"move"},tr=class{static{l(this,"WebXRController")}constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new it,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new it,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new it,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(u,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=h.position.distanceTo(d.position),g=.02,_=.005;u.inputState.pinching&&f>g+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=g-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mg)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new it;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},gg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_g=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,la=class{static{l(this,"WebXRDepthSensing")}constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Ot,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Le({vertexShader:gg,fragmentShader:_g,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ie(new ke(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ca=class extends In{static{l(this,"WebXRManager")}constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,u=null,h=null,d=null,f=null,g=null,_=null,x=new la,m=t.getContextAttributes(),p=null,A=null,M=[],E=[],F=new ge,C=null,R=new Ct;R.layers.enable(1),R.viewport=new se;let k=new Ct;k.layers.enable(2),k.viewport=new se;let S=[R,k],b=new aa;b.layers.enable(1),b.layers.enable(2);let I=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let te=M[W];return te===void 0&&(te=new tr,M[W]=te),te.getTargetRaySpace()},this.getControllerGrip=function(W){let te=M[W];return te===void 0&&(te=new tr,M[W]=te),te.getGripSpace()},this.getHand=function(W){let te=M[W];return te===void 0&&(te=new tr,M[W]=te),te.getHandSpace()};function V(W){let te=E.indexOf(W.inputSource);if(te===-1)return;let _e=M[te];_e!==void 0&&(_e.update(W.inputSource,W.frame,u||o),_e.dispatchEvent({type:W.type,data:W.inputSource}))}l(V,"onSessionEvent");function X(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",K);for(let W=0;W<M.length;W++){let te=E[W];te!==null&&(E[W]=null,M[W].disconnect(te))}I=null,q=null,x.reset(),e.setRenderTarget(p),g=null,f=null,d=null,r=null,A=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}l(X,"onSessionEnd"),this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(W){u=W},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",X),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(F),r.renderState.layers===void 0){let te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),A=new pn(g.framebufferWidth,g.framebufferHeight,{format:Yt,type:fn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,_e=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?Ni:Ci,_e=m.stencil?Di:Jn);let Ue={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Ue),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new pn(f.textureWidth,f.textureHeight,{format:Yt,type:fn,depthTexture:new cs(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await r.requestReferenceSpace(a),et.setContext(r),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(W){for(let te=0;te<W.removed.length;te++){let _e=W.removed[te],de=E.indexOf(_e);de>=0&&(E[de]=null,M[de].disconnect(_e))}for(let te=0;te<W.added.length;te++){let _e=W.added[te],de=E.indexOf(_e);if(de===-1){for(let Be=0;Be<M.length;Be++)if(Be>=E.length){E.push(_e),de=Be;break}else if(E[Be]===null){E[Be]=_e,de=Be;break}if(de===-1)break}let Ue=M[de];Ue&&Ue.connect(_e)}}l(K,"onInputSourcesChange");let G=new N,ee=new N;function H(W,te,_e){G.setFromMatrixPosition(te.matrixWorld),ee.setFromMatrixPosition(_e.matrixWorld);let de=G.distanceTo(ee),Ue=te.projectionMatrix.elements,Be=_e.projectionMatrix.elements,Ve=Ue[14]/(Ue[10]-1),lt=Ue[14]/(Ue[10]+1),T=(Ue[9]+1)/Ue[5],ht=(Ue[9]-1)/Ue[5],je=(Ue[8]-1)/Ue[0],tt=(Be[8]+1)/Be[0],Me=Ve*je,dt=Ve*tt,Re=de/(-je+tt),De=Re*-je;te.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(De),W.translateZ(Re),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let w=Ve+Re,v=lt+Re,z=Me-De,Q=dt+(de-De),j=T*lt/v*w,J=ht*lt/v*w;W.projectionMatrix.makePerspective(z,Q,j,J,w,v),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}l(H,"setProjectionFromUnion");function ue(W,te){te===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(te.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}l(ue,"updateCamera"),this.updateCamera=function(W){if(r===null)return;x.texture!==null&&(W.near=x.depthNear,W.far=x.depthFar),b.near=k.near=R.near=W.near,b.far=k.far=R.far=W.far,(I!==b.near||q!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,q=b.far,R.near=I,R.far=q,k.near=I,k.far=q,R.updateProjectionMatrix(),k.updateProjectionMatrix(),W.updateProjectionMatrix());let te=W.parent,_e=b.cameras;ue(b,te);for(let de=0;de<_e.length;de++)ue(_e[de],te);_e.length===2?H(b,R,k):b.projectionMatrix.copy(R.projectionMatrix),pe(W,b,te)};function pe(W,te,_e){_e===null?W.matrix.copy(te.matrixWorld):(W.matrix.copy(_e.matrixWorld),W.matrix.invert(),W.matrix.multiply(te.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Xo*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}l(pe,"updateUserCamera"),this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&g===null))return c},this.setFoveation=function(W){c=W,f!==null&&(f.fixedFoveation=W),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let ye=null;function We(W,te){if(h=te.getViewerPose(u||o),_=te,h!==null){let _e=h.views;g!==null&&(e.setRenderTargetFramebuffer(A,g.framebuffer),e.setRenderTarget(A));let de=!1;_e.length!==b.cameras.length&&(b.cameras.length=0,de=!0);for(let Be=0;Be<_e.length;Be++){let Ve=_e[Be],lt=null;if(g!==null)lt=g.getViewport(Ve);else{let ht=d.getViewSubImage(f,Ve);lt=ht.viewport,Be===0&&(e.setRenderTargetTextures(A,ht.colorTexture,f.ignoreDepthValues?void 0:ht.depthStencilTexture),e.setRenderTarget(A))}let T=S[Be];T===void 0&&(T=new Ct,T.layers.enable(Be),T.viewport=new se,S[Be]=T),T.matrix.fromArray(Ve.transform.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale),T.projectionMatrix.fromArray(Ve.projectionMatrix),T.projectionMatrixInverse.copy(T.projectionMatrix).invert(),T.viewport.set(lt.x,lt.y,lt.width,lt.height),Be===0&&(b.matrix.copy(T.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),de===!0&&b.cameras.push(T)}let Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){let Be=d.getDepthInformation(_e[0]);Be&&Be.isValid&&Be.texture&&x.init(e,Be,r.renderState)}}for(let _e=0;_e<M.length;_e++){let de=E[_e],Ue=M[_e];de!==null&&Ue!==void 0&&Ue.update(de,te,u||o)}ye&&ye(W,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),_=null}l(We,"onAnimationFrame");let et=new Sc;et.setAnimationLoop(We),this.setAnimationLoop=function(W){ye=W},this.dispose=function(){}}},Gn=new mn,vg=new gt;function xg(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}l(t,"refreshTransformUniform");function n(m,p){p.color.getRGB(m.fogColor.value,Mc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}l(n,"refreshFogUniforms");function r(m,p,A,M,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&g(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,A,M):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}l(r,"refreshMaterialUniforms");function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Pt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Pt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let A=e.get(p),M=A.envMap,E=A.envMapRotation;M&&(m.envMap.value=M,Gn.copy(E),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),m.envMapRotation.value.setFromMatrix4(vg.makeRotationFromEuler(Gn)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}l(s,"refreshUniformsCommon");function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}l(o,"refreshUniformsLine");function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}l(a,"refreshUniformsDash");function c(m,p,A,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}l(c,"refreshUniformsPoints");function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}l(u,"refreshUniformsSprites");function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}l(h,"refreshUniformsPhong");function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}l(d,"refreshUniformsToon");function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}l(f,"refreshUniformsStandard");function g(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Pt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}l(g,"refreshUniformsPhysical");function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}l(_,"refreshUniformsMatcap");function x(m,p){let A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return l(x,"refreshUniformsDistance"),{refreshFogUniforms:n,refreshMaterialUniforms:r}}l(xg,"WebGLMaterials");function yg(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,M){let E=M.program;n.uniformBlockBinding(A,E)}l(c,"bind");function u(A,M){let E=r[A.id];E===void 0&&(_(A),E=h(A),r[A.id]=E,A.addEventListener("dispose",m));let F=M.program;n.updateUBOMapping(A,F);let C=e.render.frame;s[A.id]!==C&&(f(A),s[A.id]=C)}l(u,"update");function h(A){let M=d();A.__bindingPointIndex=M;let E=i.createBuffer(),F=A.__size,C=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,F,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,E),E}l(h,"createBuffer");function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}l(d,"allocateBindingPointIndex");function f(A){let M=r[A.id],E=A.uniforms,F=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let C=0,R=E.length;C<R;C++){let k=Array.isArray(E[C])?E[C]:[E[C]];for(let S=0,b=k.length;S<b;S++){let I=k[S];if(g(I,C,S,F)===!0){let q=I.__offset,V=Array.isArray(I.value)?I.value:[I.value],X=0;for(let K=0;K<V.length;K++){let G=V[K],ee=x(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,q+X,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,X),X+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}l(f,"updateBufferData");function g(A,M,E,F){let C=A.value,R=M+"_"+E;if(F[R]===void 0)return typeof C=="number"||typeof C=="boolean"?F[R]=C:F[R]=C.clone(),!0;{let k=F[R];if(typeof C=="number"||typeof C=="boolean"){if(k!==C)return F[R]=C,!0}else if(k.equals(C)===!1)return k.copy(C),!0}return!1}l(g,"hasUniformChanged");function _(A){let M=A.uniforms,E=0,F=16;for(let R=0,k=M.length;R<k;R++){let S=Array.isArray(M[R])?M[R]:[M[R]];for(let b=0,I=S.length;b<I;b++){let q=S[b],V=Array.isArray(q.value)?q.value:[q.value];for(let X=0,K=V.length;X<K;X++){let G=V[X],ee=x(G),H=E%F,ue=H%ee.boundary,pe=H+ue;E+=ue,pe!==0&&F-pe<ee.storage&&(E+=F-pe),q.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=E,E+=ee.storage}}}let C=E%F;return C>0&&(E+=F-C),A.__size=E,A.__cache={},this}l(_,"prepareUniformsGroup");function x(A){let M={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(M.boundary=4,M.storage=4):A.isVector2?(M.boundary=8,M.storage=8):A.isVector3||A.isColor?(M.boundary=16,M.storage=12):A.isVector4?(M.boundary=16,M.storage=16):A.isMatrix3?(M.boundary=48,M.storage=48):A.isMatrix4?(M.boundary=64,M.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),M}l(x,"getUniformSize");function m(A){let M=A.target;M.removeEventListener("dispose",m);let E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}l(m,"onUniformsGroupsDispose");function p(){for(let A in r)i.deleteBuffer(r[A]);o=[],r={},s={}}return l(p,"dispose"),{bind:c,update:u,dispose:p}}l(yg,"WebGLUniformsGroups");var us=class{static{l(this,"WebGLRenderer")}constructor(e={}){let{canvas:t=Eh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),_=new Int32Array(4),x=null,m=null,p=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this.toneMapping=Cn,this.toneMappingExposure=1;let M=this,E=!1,F=0,C=0,R=null,k=-1,S=null,b=new se,I=new se,q=null,V=new Ye(0),X=0,K=t.width,G=t.height,ee=1,H=null,ue=null,pe=new se(0,0,K,G),ye=new se(0,0,K,G),We=!1,et=new as,W=!1,te=!1,_e=new gt,de=new N,Ue=new se,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ve=!1;function lt(){return R===null?ee:1}l(lt,"getTargetPixelRatio");let T=n;function ht(y,L){return t.getContext(y,L)}l(ht,"getContext");try{let y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ba}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",oe,!1),T===null){let L="webgl2";if(T=ht(L,y),T===null)throw ht(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let je,tt,Me,dt,Re,De,w,v,z,Q,j,J,Se,le,fe,Ne,ne,he,Xe,Ce,me,Pe,ze,at;function P(){je=new Fp(T),je.init(),Pe=new pg(T,je),tt=new Ip(T,je,e,Pe),Me=new hg(T),dt=new kp(T),Re=new jm,De=new fg(T,je,Me,Re,tt,Pe,dt),w=new Up(M),v=new Op(M),z=new qh(T),ze=new Rp(T,z),Q=new Bp(T,z,dt,ze),j=new Hp(T,Q,z,dt),Xe=new Vp(T,tt,De),Ne=new Lp(Re),J=new Qm(M,w,v,je,tt,ze,Ne),Se=new xg(M,Re),le=new tg,fe=new ag(je),he=new Cp(M,w,v,Me,j,f,c),ne=new ug(M,j,tt),at=new yg(T,dt,tt,Me),Ce=new Pp(T,je,dt),me=new zp(T,je,dt),dt.programs=J.programs,M.capabilities=tt,M.extensions=je,M.properties=Re,M.renderLists=le,M.shadowMap=ne,M.state=Me,M.info=dt}l(P,"initGLContext"),P();let ie=new ca(M,T);this.xr=ie,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let y=je.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=je.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(y){y!==void 0&&(ee=y,this.setSize(K,G,!1))},this.getSize=function(y){return y.set(K,G)},this.setSize=function(y,L,O=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=y,G=L,t.width=Math.floor(y*ee),t.height=Math.floor(L*ee),O===!0&&(t.style.width=y+"px",t.style.height=L+"px"),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(K*ee,G*ee).floor()},this.setDrawingBufferSize=function(y,L,O){K=y,G=L,ee=O,t.width=Math.floor(y*O),t.height=Math.floor(L*O),this.setViewport(0,0,y,L)},this.getCurrentViewport=function(y){return y.copy(b)},this.getViewport=function(y){return y.copy(pe)},this.setViewport=function(y,L,O,B){y.isVector4?pe.set(y.x,y.y,y.z,y.w):pe.set(y,L,O,B),Me.viewport(b.copy(pe).multiplyScalar(ee).round())},this.getScissor=function(y){return y.copy(ye)},this.setScissor=function(y,L,O,B){y.isVector4?ye.set(y.x,y.y,y.z,y.w):ye.set(y,L,O,B),Me.scissor(I.copy(ye).multiplyScalar(ee).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(y){Me.setScissorTest(We=y)},this.setOpaqueSort=function(y){H=y},this.setTransparentSort=function(y){ue=y},this.getClearColor=function(y){return y.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(y=!0,L=!0,O=!0){let B=0;if(y){let U=!1;if(R!==null){let re=R.texture.format;U=re===Ta||re===Aa||re===Ea}if(U){let re=R.texture.type,ce=re===fn||re===Jn||re===nr||re===Di||re===Sa||re===wa,ve=he.getClearColor(),xe=he.getClearAlpha(),Ae=ve.r,Te=ve.g,we=ve.b;ce?(g[0]=Ae,g[1]=Te,g[2]=we,g[3]=xe,T.clearBufferuiv(T.COLOR,0,g)):(_[0]=Ae,_[1]=Te,_[2]=we,_[3]=xe,T.clearBufferiv(T.COLOR,0,_))}else B|=T.COLOR_BUFFER_BIT}L&&(B|=T.DEPTH_BUFFER_BIT),O&&(B|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),le.dispose(),fe.dispose(),Re.dispose(),w.dispose(),v.dispose(),j.dispose(),ze.dispose(),at.dispose(),J.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Zt),ie.removeEventListener("sessionend",Da),On.stop()};function Y(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}l(Y,"onContextLost");function Z(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let y=dt.autoReset,L=ne.enabled,O=ne.autoUpdate,B=ne.needsUpdate,U=ne.type;P(),dt.autoReset=y,ne.enabled=L,ne.autoUpdate=O,ne.needsUpdate=B,ne.type=U}l(Z,"onContextRestore");function oe(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}l(oe,"onContextCreationError");function Ee(y){let L=y.target;L.removeEventListener("dispose",Ee),qe(L)}l(Ee,"onMaterialDispose");function qe(y){ft(y),Re.remove(y)}l(qe,"deallocateMaterial");function ft(y){let L=Re.get(y).programs;L!==void 0&&(L.forEach(function(O){J.releaseProgram(O)}),y.isShaderMaterial&&J.releaseShaderCache(y))}l(ft,"releaseMaterialProgramReferences"),this.renderBufferDirect=function(y,L,O,B,U,re){L===null&&(L=Be);let ce=U.isMesh&&U.matrixWorld.determinant()<0,ve=iu(y,L,O,B,U);Me.setMaterial(B,ce);let xe=O.index,Ae=1;if(B.wireframe===!0){if(xe=Q.getWireframeAttribute(O),xe===void 0)return;Ae=2}let Te=O.drawRange,we=O.attributes.position,Ze=Te.start*Ae,ct=(Te.start+Te.count)*Ae;re!==null&&(Ze=Math.max(Ze,re.start*Ae),ct=Math.min(ct,(re.start+re.count)*Ae)),xe!==null?(Ze=Math.max(Ze,0),ct=Math.min(ct,xe.count)):we!=null&&(Ze=Math.max(Ze,0),ct=Math.min(ct,we.count));let ut=ct-Ze;if(ut<0||ut===1/0)return;ze.setup(U,B,ve,O,xe);let It,Je=Ce;if(xe!==null&&(It=z.get(xe),Je=me,Je.setIndex(It)),U.isMesh)B.wireframe===!0?(Me.setLineWidth(B.wireframeLinewidth*lt()),Je.setMode(T.LINES)):Je.setMode(T.TRIANGLES);else if(U.isLine){let be=B.linewidth;be===void 0&&(be=1),Me.setLineWidth(be*lt()),U.isLineSegments?Je.setMode(T.LINES):U.isLineLoop?Je.setMode(T.LINE_LOOP):Je.setMode(T.LINE_STRIP)}else U.isPoints?Je.setMode(T.POINTS):U.isSprite&&Je.setMode(T.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Je.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))Je.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let be=U._multiDrawStarts,Mt=U._multiDrawCounts,Ke=U._multiDrawCount,kt=xe?z.get(xe).bytesPerElement:1,ti=Re.get(B).currentProgram.getUniforms();for(let Lt=0;Lt<Ke;Lt++)ti.setValue(T,"_gl_DrawID",Lt),Je.render(be[Lt]/kt,Mt[Lt])}else if(U.isInstancedMesh)Je.renderInstances(Ze,ut,U.count);else if(O.isInstancedBufferGeometry){let be=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Mt=Math.min(O.instanceCount,be);Je.renderInstances(Ze,ut,Mt)}else Je.render(Ze,ut)};function bt(y,L,O){y.transparent===!0&&y.side===cn&&y.forceSinglePass===!1?(y.side=Pt,y.needsUpdate=!0,hr(y,L,O),y.side=Pn,y.needsUpdate=!0,hr(y,L,O),y.side=cn):hr(y,L,O)}l(bt,"prepareMaterial"),this.compile=function(y,L,O=null){O===null&&(O=y),m=fe.get(O),m.init(L),A.push(m),O.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),y!==O&&y.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();let B=new Set;return y.traverse(function(U){let re=U.material;if(re)if(Array.isArray(re))for(let ce=0;ce<re.length;ce++){let ve=re[ce];bt(ve,O,U),B.add(ve)}else bt(re,O,U),B.add(re)}),A.pop(),m=null,B},this.compileAsync=function(y,L,O=null){let B=this.compile(y,L,O);return new Promise(U=>{function re(){if(B.forEach(function(ce){Re.get(ce).currentProgram.isReady()&&B.delete(ce)}),B.size===0){U(y);return}setTimeout(re,10)}l(re,"checkMaterialsReady"),je.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let $e=null;function en(y){$e&&$e(y)}l(en,"onAnimationFrame");function Zt(){On.stop()}l(Zt,"onXRSessionStart");function Da(){On.start()}l(Da,"onXRSessionEnd");let On=new Sc;On.setAnimationLoop(en),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(y){$e=y,ie.setAnimationLoop(y),y===null?On.stop():On.start()},ie.addEventListener("sessionstart",Zt),ie.addEventListener("sessionend",Da),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(L),L=ie.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,L,R),m=fe.get(y,A.length),m.init(L),A.push(m),_e.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),et.setFromProjectionMatrix(_e),te=this.localClippingEnabled,W=Ne.init(this.clippingPlanes,te),x=le.get(y,p.length),x.init(),p.push(x),ie.enabled===!0&&ie.isPresenting===!0){let re=M.xr.getDepthSensingMesh();re!==null&&bs(re,L,-1/0,M.sortObjects)}bs(y,L,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(H,ue),Ve=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Ve&&he.addToRenderList(x,y),this.info.render.frame++,W===!0&&Ne.beginShadows();let O=m.state.shadowsArray;ne.render(O,y,L),W===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=x.opaque,U=x.transmissive;if(m.setupLights(),L.isArrayCamera){let re=L.cameras;if(U.length>0)for(let ce=0,ve=re.length;ce<ve;ce++){let xe=re[ce];Oa(B,U,y,xe)}Ve&&he.render(y);for(let ce=0,ve=re.length;ce<ve;ce++){let xe=re[ce];Na(x,y,xe,xe.viewport)}}else U.length>0&&Oa(B,U,y,L),Ve&&he.render(y),Na(x,y,L);R!==null&&(De.updateMultisampleRenderTarget(R),De.updateRenderTargetMipmap(R)),y.isScene===!0&&y.onAfterRender(M,y,L),ze.resetDefaultState(),k=-1,S=null,A.pop(),A.length>0?(m=A[A.length-1],W===!0&&Ne.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function bs(y,L,O,B){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)m.pushLight(y),y.castShadow&&m.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||et.intersectsSprite(y)){B&&Ue.setFromMatrixPosition(y.matrixWorld).applyMatrix4(_e);let ce=j.update(y),ve=y.material;ve.visible&&x.push(y,ce,ve,O,Ue.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||et.intersectsObject(y))){let ce=j.update(y),ve=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ue.copy(y.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Ue.copy(ce.boundingSphere.center)),Ue.applyMatrix4(y.matrixWorld).applyMatrix4(_e)),Array.isArray(ve)){let xe=ce.groups;for(let Ae=0,Te=xe.length;Ae<Te;Ae++){let we=xe[Ae],Ze=ve[we.materialIndex];Ze&&Ze.visible&&x.push(y,ce,Ze,O,Ue.z,we)}}else ve.visible&&x.push(y,ce,ve,O,Ue.z,null)}}let re=y.children;for(let ce=0,ve=re.length;ce<ve;ce++)bs(re[ce],L,O,B)}l(bs,"projectObject");function Na(y,L,O,B){let U=y.opaque,re=y.transmissive,ce=y.transparent;m.setupLightsView(O),W===!0&&Ne.setGlobalState(M.clippingPlanes,O),B&&Me.viewport(b.copy(B)),U.length>0&&ur(U,L,O),re.length>0&&ur(re,L,O),ce.length>0&&ur(ce,L,O),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}l(Na,"renderScene");function Oa(y,L,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[B.id]===void 0&&(m.state.transmissionRenderTarget[B.id]=new pn(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?lr:fn,minFilter:$n,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));let re=m.state.transmissionRenderTarget[B.id],ce=B.viewport||b;re.setSize(ce.z,ce.w);let ve=M.getRenderTarget();M.setRenderTarget(re),M.getClearColor(V),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear(),Ve&&he.render(O);let xe=M.toneMapping;M.toneMapping=Cn;let Ae=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),m.setupLightsView(B),W===!0&&Ne.setGlobalState(M.clippingPlanes,B),ur(y,O,B),De.updateMultisampleRenderTarget(re),De.updateRenderTargetMipmap(re),je.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let we=0,Ze=L.length;we<Ze;we++){let ct=L[we],ut=ct.object,It=ct.geometry,Je=ct.material,be=ct.group;if(Je.side===cn&&ut.layers.test(B.layers)){let Mt=Je.side;Je.side=Pt,Je.needsUpdate=!0,Fa(ut,O,B,It,Je,be),Je.side=Mt,Je.needsUpdate=!0,Te=!0}}Te===!0&&(De.updateMultisampleRenderTarget(re),De.updateRenderTargetMipmap(re))}M.setRenderTarget(ve),M.setClearColor(V,X),Ae!==void 0&&(B.viewport=Ae),M.toneMapping=xe}l(Oa,"renderTransmissionPass");function ur(y,L,O){let B=L.isScene===!0?L.overrideMaterial:null;for(let U=0,re=y.length;U<re;U++){let ce=y[U],ve=ce.object,xe=ce.geometry,Ae=B===null?ce.material:B,Te=ce.group;ve.layers.test(O.layers)&&Fa(ve,L,O,xe,Ae,Te)}}l(ur,"renderObjects");function Fa(y,L,O,B,U,re){y.onBeforeRender(M,L,O,B,U,re),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.transparent===!0&&U.side===cn&&U.forceSinglePass===!1?(U.side=Pt,U.needsUpdate=!0,M.renderBufferDirect(O,L,B,U,y,re),U.side=Pn,U.needsUpdate=!0,M.renderBufferDirect(O,L,B,U,y,re),U.side=cn):M.renderBufferDirect(O,L,B,U,y,re),y.onAfterRender(M,L,O,B,U,re)}l(Fa,"renderObject");function hr(y,L,O){L.isScene!==!0&&(L=Be);let B=Re.get(y),U=m.state.lights,re=m.state.shadowsArray,ce=U.state.version,ve=J.getParameters(y,U.state,re,L,O),xe=J.getProgramCacheKey(ve),Ae=B.programs;B.environment=y.isMeshStandardMaterial?L.environment:null,B.fog=L.fog,B.envMap=(y.isMeshStandardMaterial?v:w).get(y.envMap||B.environment),B.envMapRotation=B.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,Ae===void 0&&(y.addEventListener("dispose",Ee),Ae=new Map,B.programs=Ae);let Te=Ae.get(xe);if(Te!==void 0){if(B.currentProgram===Te&&B.lightsStateVersion===ce)return za(y,ve),Te}else ve.uniforms=J.getUniforms(y),y.onBeforeCompile(ve,M),Te=J.acquireProgram(ve,xe),Ae.set(xe,Te),B.uniforms=ve.uniforms;let we=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(we.clippingPlanes=Ne.uniform),za(y,ve),B.needsLights=su(y),B.lightsStateVersion=ce,B.needsLights&&(we.ambientLightColor.value=U.state.ambient,we.lightProbe.value=U.state.probe,we.directionalLights.value=U.state.directional,we.directionalLightShadows.value=U.state.directionalShadow,we.spotLights.value=U.state.spot,we.spotLightShadows.value=U.state.spotShadow,we.rectAreaLights.value=U.state.rectArea,we.ltc_1.value=U.state.rectAreaLTC1,we.ltc_2.value=U.state.rectAreaLTC2,we.pointLights.value=U.state.point,we.pointLightShadows.value=U.state.pointShadow,we.hemisphereLights.value=U.state.hemi,we.directionalShadowMap.value=U.state.directionalShadowMap,we.directionalShadowMatrix.value=U.state.directionalShadowMatrix,we.spotShadowMap.value=U.state.spotShadowMap,we.spotLightMatrix.value=U.state.spotLightMatrix,we.spotLightMap.value=U.state.spotLightMap,we.pointShadowMap.value=U.state.pointShadowMap,we.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=Te,B.uniformsList=null,Te}l(hr,"getProgram");function Ba(y){if(y.uniformsList===null){let L=y.currentProgram.getUniforms();y.uniformsList=Ii.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}l(Ba,"getUniformList");function za(y,L){let O=Re.get(y);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.batchingColor=L.batchingColor,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.instancingMorph=L.instancingMorph,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}l(za,"updateCommonMaterialProperties");function iu(y,L,O,B,U){L.isScene!==!0&&(L=Be),De.resetTextureUnits();let re=L.fog,ce=B.isMeshStandardMaterial?L.environment:null,ve=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Dn,xe=(B.isMeshStandardMaterial?v:w).get(B.envMap||ce),Ae=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Te=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),we=!!O.morphAttributes.position,Ze=!!O.morphAttributes.normal,ct=!!O.morphAttributes.color,ut=Cn;B.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ut=M.toneMapping);let It=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Je=It!==void 0?It.length:0,be=Re.get(B),Mt=m.state.lights;if(W===!0&&(te===!0||y!==S)){let Ft=y===S&&B.id===k;Ne.setState(B,y,Ft)}let Ke=!1;B.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Mt.state.version||be.outputColorSpace!==ve||U.isBatchedMesh&&be.batching===!1||!U.isBatchedMesh&&be.batching===!0||U.isBatchedMesh&&be.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&be.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&be.instancing===!1||!U.isInstancedMesh&&be.instancing===!0||U.isSkinnedMesh&&be.skinning===!1||!U.isSkinnedMesh&&be.skinning===!0||U.isInstancedMesh&&be.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&be.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&be.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&be.instancingMorph===!1&&U.morphTexture!==null||be.envMap!==xe||B.fog===!0&&be.fog!==re||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Ne.numPlanes||be.numIntersection!==Ne.numIntersection)||be.vertexAlphas!==Ae||be.vertexTangents!==Te||be.morphTargets!==we||be.morphNormals!==Ze||be.morphColors!==ct||be.toneMapping!==ut||be.morphTargetsCount!==Je)&&(Ke=!0):(Ke=!0,be.__version=B.version);let kt=be.currentProgram;Ke===!0&&(kt=hr(B,L,U));let ti=!1,Lt=!1,Ms=!1,pt=kt.getUniforms(),gn=be.uniforms;if(Me.useProgram(kt.program)&&(ti=!0,Lt=!0,Ms=!0),B.id!==k&&(k=B.id,Lt=!0),ti||S!==y){pt.setValue(T,"projectionMatrix",y.projectionMatrix),pt.setValue(T,"viewMatrix",y.matrixWorldInverse);let Ft=pt.map.cameraPosition;Ft!==void 0&&Ft.setValue(T,de.setFromMatrixPosition(y.matrixWorld)),tt.logarithmicDepthBuffer&&pt.setValue(T,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&pt.setValue(T,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,Lt=!0,Ms=!0)}if(U.isSkinnedMesh){pt.setOptional(T,U,"bindMatrix"),pt.setOptional(T,U,"bindMatrixInverse");let Ft=U.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),pt.setValue(T,"boneTexture",Ft.boneTexture,De))}U.isBatchedMesh&&(pt.setOptional(T,U,"batchingTexture"),pt.setValue(T,"batchingTexture",U._matricesTexture,De),pt.setOptional(T,U,"batchingIdTexture"),pt.setValue(T,"batchingIdTexture",U._indirectTexture,De),pt.setOptional(T,U,"batchingColorTexture"),U._colorsTexture!==null&&pt.setValue(T,"batchingColorTexture",U._colorsTexture,De));let Ss=O.morphAttributes;if((Ss.position!==void 0||Ss.normal!==void 0||Ss.color!==void 0)&&Xe.update(U,O,kt),(Lt||be.receiveShadow!==U.receiveShadow)&&(be.receiveShadow=U.receiveShadow,pt.setValue(T,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(gn.envMap.value=xe,gn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&L.environment!==null&&(gn.envMapIntensity.value=L.environmentIntensity),Lt&&(pt.setValue(T,"toneMappingExposure",M.toneMappingExposure),be.needsLights&&ru(gn,Ms),re&&B.fog===!0&&Se.refreshFogUniforms(gn,re),Se.refreshMaterialUniforms(gn,B,ee,G,m.state.transmissionRenderTarget[y.id]),Ii.upload(T,Ba(be),gn,De)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ii.upload(T,Ba(be),gn,De),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&pt.setValue(T,"center",U.center),pt.setValue(T,"modelViewMatrix",U.modelViewMatrix),pt.setValue(T,"normalMatrix",U.normalMatrix),pt.setValue(T,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let Ft=B.uniformsGroups;for(let ws=0,ou=Ft.length;ws<ou;ws++){let ka=Ft[ws];at.update(ka,kt),at.bind(ka,kt)}}return kt}l(iu,"setProgram");function ru(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}l(ru,"markUniformsLightsNeedsUpdate");function su(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}l(su,"materialNeedsLights"),this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(y,L,O){Re.get(y.texture).__webglTexture=L,Re.get(y.depthTexture).__webglTexture=O;let B=Re.get(y);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,L){let O=Re.get(y);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,O=0){R=y,F=L,C=O;let B=!0,U=null,re=!1,ce=!1;if(y){let xe=Re.get(y);xe.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(T.FRAMEBUFFER,null),B=!1):xe.__webglFramebuffer===void 0?De.setupRenderTarget(y):xe.__hasExternalTextures&&De.rebindTextures(y,Re.get(y.texture).__webglTexture,Re.get(y.depthTexture).__webglTexture);let Ae=y.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ce=!0);let Te=Re.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Te[L])?U=Te[L][O]:U=Te[L],re=!0):y.samples>0&&De.useMultisampledRTT(y)===!1?U=Re.get(y).__webglMultisampledFramebuffer:Array.isArray(Te)?U=Te[O]:U=Te,b.copy(y.viewport),I.copy(y.scissor),q=y.scissorTest}else b.copy(pe).multiplyScalar(ee).floor(),I.copy(ye).multiplyScalar(ee).floor(),q=We;if(Me.bindFramebuffer(T.FRAMEBUFFER,U)&&B&&Me.drawBuffers(y,U),Me.viewport(b),Me.scissor(I),Me.setScissorTest(q),re){let xe=Re.get(y.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+L,xe.__webglTexture,O)}else if(ce){let xe=Re.get(y.texture),Ae=L||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,xe.__webglTexture,O||0,Ae)}k=-1},this.readRenderTargetPixels=function(y,L,O,B,U,re,ce){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Re.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ce!==void 0&&(ve=ve[ce]),ve){Me.bindFramebuffer(T.FRAMEBUFFER,ve);try{let xe=y.texture,Ae=xe.format,Te=xe.type;if(!tt.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-B&&O>=0&&O<=y.height-U&&T.readPixels(L,O,B,U,Pe.convert(Ae),Pe.convert(Te),re)}finally{let xe=R!==null?Re.get(R).__webglFramebuffer:null;Me.bindFramebuffer(T.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(y,L,O,B,U,re,ce){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Re.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ce!==void 0&&(ve=ve[ce]),ve){Me.bindFramebuffer(T.FRAMEBUFFER,ve);try{let xe=y.texture,Ae=xe.format,Te=xe.type;if(!tt.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=y.width-B&&O>=0&&O<=y.height-U){let we=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,we),T.bufferData(T.PIXEL_PACK_BUFFER,re.byteLength,T.STREAM_READ),T.readPixels(L,O,B,U,Pe.convert(Ae),Pe.convert(Te),0),T.flush();let Ze=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);await Ah(T,Ze,4);try{T.bindBuffer(T.PIXEL_PACK_BUFFER,we),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,re)}finally{T.deleteBuffer(we),T.deleteSync(Ze)}return re}}finally{let xe=R!==null?Re.get(R).__webglFramebuffer:null;Me.bindFramebuffer(T.FRAMEBUFFER,xe)}}},this.copyFramebufferToTexture=function(y,L=null,O=0){y.isTexture!==!0&&(Ri("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,y=arguments[1]);let B=Math.pow(2,-O),U=Math.floor(y.image.width*B),re=Math.floor(y.image.height*B),ce=L!==null?L.x:0,ve=L!==null?L.y:0;De.setTexture2D(y,0),T.copyTexSubImage2D(T.TEXTURE_2D,O,0,0,ce,ve,U,re),Me.unbindTexture()},this.copyTextureToTexture=function(y,L,O=null,B=null,U=0){y.isTexture!==!0&&(Ri("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,y=arguments[1],L=arguments[2],U=arguments[3]||0,O=null);let re,ce,ve,xe,Ae,Te;O!==null?(re=O.max.x-O.min.x,ce=O.max.y-O.min.y,ve=O.min.x,xe=O.min.y):(re=y.image.width,ce=y.image.height,ve=0,xe=0),B!==null?(Ae=B.x,Te=B.y):(Ae=0,Te=0);let we=Pe.convert(L.format),Ze=Pe.convert(L.type);De.setTexture2D(L,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,L.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,L.unpackAlignment);let ct=T.getParameter(T.UNPACK_ROW_LENGTH),ut=T.getParameter(T.UNPACK_IMAGE_HEIGHT),It=T.getParameter(T.UNPACK_SKIP_PIXELS),Je=T.getParameter(T.UNPACK_SKIP_ROWS),be=T.getParameter(T.UNPACK_SKIP_IMAGES),Mt=y.isCompressedTexture?y.mipmaps[U]:y.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,Mt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Mt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,ve),T.pixelStorei(T.UNPACK_SKIP_ROWS,xe),y.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,U,Ae,Te,re,ce,we,Ze,Mt.data):y.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,U,Ae,Te,Mt.width,Mt.height,we,Mt.data):T.texSubImage2D(T.TEXTURE_2D,U,Ae,Te,re,ce,we,Ze,Mt),T.pixelStorei(T.UNPACK_ROW_LENGTH,ct),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ut),T.pixelStorei(T.UNPACK_SKIP_PIXELS,It),T.pixelStorei(T.UNPACK_SKIP_ROWS,Je),T.pixelStorei(T.UNPACK_SKIP_IMAGES,be),U===0&&L.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(y,L,O=null,B=null,U=0){y.isTexture!==!0&&(Ri("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,y=arguments[2],L=arguments[3],U=arguments[4]||0);let re,ce,ve,xe,Ae,Te,we,Ze,ct,ut=y.isCompressedTexture?y.mipmaps[U]:y.image;O!==null?(re=O.max.x-O.min.x,ce=O.max.y-O.min.y,ve=O.max.z-O.min.z,xe=O.min.x,Ae=O.min.y,Te=O.min.z):(re=ut.width,ce=ut.height,ve=ut.depth,xe=0,Ae=0,Te=0),B!==null?(we=B.x,Ze=B.y,ct=B.z):(we=0,Ze=0,ct=0);let It=Pe.convert(L.format),Je=Pe.convert(L.type),be;if(L.isData3DTexture)De.setTexture3D(L,0),be=T.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)De.setTexture2DArray(L,0),be=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,L.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,L.unpackAlignment);let Mt=T.getParameter(T.UNPACK_ROW_LENGTH),Ke=T.getParameter(T.UNPACK_IMAGE_HEIGHT),kt=T.getParameter(T.UNPACK_SKIP_PIXELS),ti=T.getParameter(T.UNPACK_SKIP_ROWS),Lt=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ut.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ut.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,xe),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ae),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Te),y.isDataTexture||y.isData3DTexture?T.texSubImage3D(be,U,we,Ze,ct,re,ce,ve,It,Je,ut.data):L.isCompressedArrayTexture?T.compressedTexSubImage3D(be,U,we,Ze,ct,re,ce,ve,It,ut.data):T.texSubImage3D(be,U,we,Ze,ct,re,ce,ve,It,Je,ut),T.pixelStorei(T.UNPACK_ROW_LENGTH,Mt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Ke),T.pixelStorei(T.UNPACK_SKIP_PIXELS,kt),T.pixelStorei(T.UNPACK_SKIP_ROWS,ti),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Lt),U===0&&L.generateMipmaps&&T.generateMipmap(be),Me.unbindTexture()},this.initRenderTarget=function(y){Re.get(y).__webglFramebuffer===void 0&&De.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?De.setTextureCube(y,0):y.isData3DTexture?De.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?De.setTexture2DArray(y,0):De.setTexture2D(y,0),Me.unbindTexture()},this.resetState=function(){F=0,C=0,R=null,Me.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Ca?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===gs?"display-p3":"srgb"}};var hs=class extends zt{static{l(this,"Scene")}constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ua=class{static{l(this,"InterleavedBuffer")}constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ri("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},At=new N,ds=class i{static{l(this,"InterleavedBufferAttribute")}constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=jt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=jt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=jt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=jt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=jt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Fi=class extends Qn{static{l(this,"SpriteMaterial")}constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Mi,Ki=new N,Si=new N,wi=new N,Ei=new ge,Qi=new ge,Cc=new gt,Br=new N,ji=new N,zr=new N,nc=new ge,co=new ge,ic=new ge,or=class extends zt{static{l(this,"Sprite")}constructor(e=new Fi){if(super(),this.isSprite=!0,this.type="Sprite",Mi===void 0){Mi=new Un;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ua(t,5);Mi.setIndex([0,1,2,0,2,3]),Mi.setAttribute("position",new ds(n,3,0,!1)),Mi.setAttribute("uv",new ds(n,2,3,!1))}this.geometry=Mi,this.material=e,this.center=new ge(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Si.setFromMatrixScale(this.matrixWorld),Cc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),wi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Si.multiplyScalar(-wi.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;kr(Br.set(-.5,-.5,0),wi,o,Si,r,s),kr(ji.set(.5,-.5,0),wi,o,Si,r,s),kr(zr.set(.5,.5,0),wi,o,Si,r,s),nc.set(0,0),co.set(1,0),ic.set(1,1);let a=e.ray.intersectTriangle(Br,ji,zr,!1,Ki);if(a===null&&(kr(ji.set(-.5,.5,0),wi,o,Si,r,s),co.set(0,1),a=e.ray.intersectTriangle(Br,zr,ji,!1,Ki),a===null))return;let c=e.ray.origin.distanceTo(Ki);c<e.near||c>e.far||t.push({distance:c,point:Ki.clone(),uv:Zn.getInterpolation(Ki,Br,ji,zr,nc,co,ic,new ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function kr(i,e,t,n,r,s){Ei.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Qi.x=s*Ei.x-r*Ei.y,Qi.y=r*Ei.x+s*Ei.y):Qi.copy(Ei),i.copy(e),i.x+=Qi.x,i.y+=Qi.y,i.applyMatrix4(Cc)}l(kr,"transformVertex");function Vr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}l(Vr,"convertArray");function bg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}l(bg,"isTypedArray");var Bi=class{static{l(this,"Interpolant")}constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ha=class extends Bi{static{l(this,"CubicInterpolant")}constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cl,endingEnd:cl}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case ul:s=e,a=2*t-n;break;case hl:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ul:o=e,c=2*n-t;break;case hl:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}let u=(n-t)*.5,h=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,g=this._weightNext,_=(n-t)/(r-t),x=_*_,m=x*_,p=-f*m+2*f*x-f*_,A=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*_+1,M=(-1-g)*m+(1.5+g)*x+.5*_,E=g*m-g*x;for(let F=0;F!==a;++F)s[F]=p*o[h+F]+A*o[u+F]+M*o[c+F]+E*o[d+F];return s}},da=class extends Bi{static{l(this,"LinearInterpolant")}constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,u=c-a,h=(n-t)/(r-t),d=1-h;for(let f=0;f!==a;++f)s[f]=o[u+f]*d+o[c+f]*h;return s}},fa=class extends Bi{static{l(this,"DiscreteInterpolant")}constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},$t=class{static{l(this,"KeyframeTrack")}constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vr(t,this.TimeBufferType),this.values=Vr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Vr(e.times,Array),values:Vr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ha(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $r:t=this.InterpolantFactoryMethodDiscrete;break;case Go:t=this.InterpolantFactoryMethodLinear;break;case Os:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $r;case this.InterpolantFactoryMethodLinear:return Go;case this.InterpolantFactoryMethodSmooth:return Os}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&bg(r))for(let a=0,c=r.length;a!==c;++a){let u=r[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Os,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,u=e[a],h=e[a+1];if(u!==h&&(a!==1||u!==e[0]))if(r)c=!0;else{let d=a*n,f=d-n,g=d+n;for(let _=0;_!==n;++_){let x=t[d+_];if(x!==t[f+_]||x!==t[g+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*n,f=o*n;for(let g=0;g!==n;++g)t[f+g]=t[d+g]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,u=0;u!==n;++u)t[c+u]=t[a+u];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};$t.prototype.TimeBufferType=Float32Array;$t.prototype.ValueBufferType=Float32Array;$t.prototype.DefaultInterpolation=Go;var jn=class extends $t{static{l(this,"BooleanKeyframeTrack")}constructor(e,t,n){super(e,t,n)}};jn.prototype.ValueTypeName="bool";jn.prototype.ValueBufferType=Array;jn.prototype.DefaultInterpolation=$r;jn.prototype.InterpolantFactoryMethodLinear=void 0;jn.prototype.InterpolantFactoryMethodSmooth=void 0;var pa=class extends $t{static{l(this,"ColorKeyframeTrack")}};pa.prototype.ValueTypeName="color";var ma=class extends $t{static{l(this,"NumberKeyframeTrack")}};ma.prototype.ValueTypeName="number";var ga=class extends Bi{static{l(this,"QuaternionLinearInterpolant")}constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t),u=e*a;for(let h=u+a;u!==h;u+=4)Ln.slerpFlat(s,0,o,u-a,o,u,c);return s}},fs=class extends $t{static{l(this,"QuaternionKeyframeTrack")}InterpolantFactoryMethodLinear(e){return new ga(this.times,this.values,this.getValueSize(),e)}};fs.prototype.ValueTypeName="quaternion";fs.prototype.InterpolantFactoryMethodSmooth=void 0;var ei=class extends $t{static{l(this,"StringKeyframeTrack")}constructor(e,t,n){super(e,t,n)}};ei.prototype.ValueTypeName="string";ei.prototype.ValueBufferType=Array;ei.prototype.DefaultInterpolation=$r;ei.prototype.InterpolantFactoryMethodLinear=void 0;ei.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends $t{static{l(this,"VectorKeyframeTrack")}};_a.prototype.ValueTypeName="vector";var rc={enabled:!1,files:{},add:l(function(i,e){this.enabled!==!1&&(this.files[i]=e)},"add"),get:l(function(i){if(this.enabled!==!1)return this.files[i]},"get"),remove:l(function(i){delete this.files[i]},"remove"),clear:l(function(){this.files={}},"clear")},va=class{static{l(this,"LoadingManager")}constructor(e,t,n){let r=this,s=!1,o=0,a=0,c,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return u.push(h,d),this},this.removeHandler=function(h){let d=u.indexOf(h);return d!==-1&&u.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=u.length;d<f;d+=2){let g=u[d],_=u[d+1];if(g.global&&(g.lastIndex=0),g.test(h))return _}return null}}},Mg=new va,ar=class{static{l(this,"Loader")}constructor(e){this.manager=e!==void 0?e:Mg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ar.DEFAULT_MATERIAL_NAME="__DEFAULT";var xa=class extends ar{static{l(this,"ImageLoader")}constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=rc.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=ir("img");function c(){h(),rc.add(e,this),t&&t(this),s.manager.itemEnd(e)}l(c,"onImageLoad");function u(d){h(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}l(u,"onImageError");function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",u,!1)}return l(h,"removeEventListeners"),a.addEventListener("load",c,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var St=class extends ar{static{l(this,"TextureLoader")}constructor(e){super(e)}load(e,t,n,r){let s=new Ot,o=new xa(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}};var ps=class{static{l(this,"Clock")}constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=sc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function sc(){return(typeof performance>"u"?Date:performance).now()}l(sc,"now");var Pa="\\[\\]\\.:\\/",Sg=new RegExp("["+Pa+"]","g"),Ia="[^"+Pa+"]",wg="[^"+Pa.replace("\\.","")+"]",Eg=/((?:WC+[\/:])*)/.source.replace("WC",Ia),Ag=/(WCOD+)?/.source.replace("WCOD",wg),Tg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ia),Cg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ia),Rg=new RegExp("^"+Eg+Ag+Tg+Cg+"$"),Pg=["material","materials","bones","map"],ya=class{static{l(this,"Composite")}constructor(e,t,n){let r=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ot=class i{static{l(this,"PropertyBinding")}constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Sg,"")}static parseTrackName(e){let t=Rg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Pg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=l(function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},"searchNodeSubtree"),r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let o=e[r];if(o===void 0){let u=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=ya;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var d_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ba);var Ig=l(()=>`
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `,"vertexShader"),Lg=l(()=>`
        varying vec3 vUv;
        uniform float pixels;
        uniform float rotation;
        uniform vec2 light_origin;
        uniform vec4 color1;
        uniform vec4 color2;
        uniform vec4 color3;
        uniform float size;
        int OCTAVES = 4;
        uniform float seed;
        uniform float time;
        bool should_dither = true;

        float rand(vec2 coord) {
            return fract(sin(dot(coord.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }
        
        float noise(vec2 coord){
            vec2 i = floor(coord);
            vec2 f = fract(coord);
            
            float a = rand(i);
            float b = rand(i + vec2(1.0, 0.0));
            float c = rand(i + vec2(0.0, 1.0));
            float d = rand(i + vec2(1.0, 1.0));
        
            vec2 cubic = f * f * (3.0 - 2.0 * f);
        
            return mix(a, b, cubic.x) + (c - a) * cubic.y * (1.0 - cubic.x) + (d - b) * cubic.x * cubic.y;
        }
        
        float fbm(vec2 coord){
            float value = 0.0;
            float scale = 0.5;
        
            for(int i = 0; i < OCTAVES ; i++){
                value += noise(coord) * scale;
                coord *= 2.0;
                scale *= 0.5;
            }
            return value;
        }
        
        bool dither(vec2 uv1, vec2 uv2) {
            return mod(uv1.x+uv2.y,2.0/pixels) <= 1.0 / pixels;
        }
        
        vec2 rotate(vec2 coord, float angle){
            coord -= 0.5;
            coord *= mat2(vec2(cos(angle),-sin(angle)),vec2(sin(angle),cos(angle)));
            return coord + 0.5;
        }
        
        // by Leukbaars from https://www.shadertoy.com/view/4tK3zR
        float circleNoise(vec2 uv) {
            float uv_y = floor(uv.y);
            uv.x += uv_y*.31;
            vec2 f = fract(uv);
            float h = rand(vec2(floor(uv.x),floor(uv_y)));
            float m = (length(f-0.25-(h*0.5)));
            float r = h*0.25;
            return m = smoothstep(r-.10*r,r,m);
        }
        
        float crater(vec2 uv) {
            float c = 1.0;
            for (int i = 0; i < 2; i++) {
                c *= circleNoise((uv * size) + (float(i+1)+10.));
            }
            return 1.0 - c;
        }

        void main() {
            vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;
	
            // we use this val later to interpolate between shades
            bool dith = dither(uv, vUv.xy);
            
            // distance from center
            float d = distance(uv, vec2(0.5));
            
            // optional rotation, do this after the dither or the dither will look very messed up
            uv = rotate(uv, time*0.1);
            
            // two noise values with one slightly offset according to light source, to create shadows later
            float n = fbm(uv * size);
            float n2 = fbm(uv * size + (rotate(light_origin, rotation)-0.5) * 0.5);
            
            // step noise values to determine where the edge of the asteroid is
            // step cutoff value depends on distance from center
            float n_step = step(0.2, n - d);
            float n2_step = step(0.2, n2 - d);
            
            // with this val we can determine where the shadows should be
            float noise_rel = (n2_step + n2) - (n_step + n);
            
            // two crater values, again one extra for the shadows
            float c1 = crater(uv );
            float c2 = crater(uv + (light_origin-0.5)*0.03);
        
            // now we just assign colors depending on noise values and crater values
            // base
            vec4 col = color2;
            
            // noise
            if (noise_rel < -0.06 || (noise_rel < -0.04 && (dith || !should_dither))) {
                col = color1;
            }
            if (noise_rel > 0.05 || (noise_rel > 0.03 && (dith || !should_dither))) {
                col = color3;
            }
            
            // crater
            if (c1 > 0.4)  {
                col = color2;
            }
            if (c2<c1) {
                col = color3;
            }
            
            gl_FragColor = vec4(col.rgb, n_step * col.a);
        }
    `,"fragmentShaderPlanet"),Rc=l((i=new ge(.39,.7),e=null,t=0)=>{let n=e||[new se(.6078431372549019,.6196078431372549,.7215686274509804,1),new se(.2784313725490196,.3803921568627451,.48627450980392156,1),new se(.20784313725490197,.2235294117647059,.3333333333333333,1)],r=new ke(1.5,1.5),s=new Le({uniforms:{pixels:{value:100},color1:{value:n[0]},size:{value:Math.random()*10},color2:{value:n[1]},color3:{value:n[2]},light_origin:{value:i},rotation:{value:t},seed:{value:Ge()?Math.random()*10:Math.random()*100},time:{value:0}},vertexShader:Ig(),fragmentShader:Lg(),transparent:!0}),o=new Ie(r,s);return new it().add(o)},"createAsteroid");var Ug=l(()=>`
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `,"vertexShader"),Dg=l(()=>`
        varying vec3 vUv;
        uniform float pixels;
        uniform float rotation;
        uniform vec2 light_origin;
        float light_distance1 = 0.362;
        float light_distance2 = 0.525;
        uniform float time_speed;
        float dither_size = 2.0;
        uniform sampler2D colors;
        float size = 10.0;
        int OCTAVES = 4;
        uniform float seed;
        uniform float time;
        bool should_dither = true;

        float rand(vec2 coord) {
            coord = mod(coord, vec2(1.0,1.0)*floor(size+0.5));
            return fract(sin(dot(coord.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }
        
        float noise(vec2 coord){
            vec2 i = floor(coord);
            vec2 f = fract(coord);
            
            float a = rand(i);
            float b = rand(i + vec2(1.0, 0.0));
            float c = rand(i + vec2(0.0, 1.0));
            float d = rand(i + vec2(1.0, 1.0));
        
            vec2 cubic = f * f * (3.0 - 2.0 * f);
        
            return mix(a, b, cubic.x) + (c - a) * cubic.y * (1.0 - cubic.x) + (d - b) * cubic.x * cubic.y;
        }
        
        float fbm(vec2 coord){
            float value = 0.0;
            float scale = 0.5;
        
            for(int i = 0; i < OCTAVES ; i++){
                value += noise(coord) * scale;
                coord *= 2.0;
                scale *= 0.5;
            }
            return value;
        }
        
        bool dither(vec2 uv1, vec2 uv2) {
            return mod(uv1.x+uv2.y,2.0/pixels) <= 1.0 / pixels;
        }
        
        vec2 rotate(vec2 coord, float angle){
            coord -= 0.5;
            coord *= mat2(vec2(cos(angle),-sin(angle)),vec2(sin(angle),cos(angle)));
            return coord + 0.5;
        }
        
        vec2 spherify(vec2 uv) {
            vec2 centered= uv *2.0-1.0;
            float z = sqrt(1.0 - dot(centered.xy, centered.xy));
            vec2 sphere = centered/(z + 1.0);
            return sphere * 0.5+0.5;
        }
        
        
        void main() {
            //pixelize uv
            vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;
            bool dith = dither(uv, vUv.xy);
            
            // cut out a circle
            float d_circle = distance(uv, vec2(0.5));
            float a = step(d_circle, 0.49999);
            
            uv = spherify(uv);
            
            // check distance distance to light
            float d_light = distance(uv , vec2(light_origin));
            
            uv = rotate(uv, rotation);
            
            // noise
            float f = fbm(uv*size+vec2(time*time_speed, 0.0));
            
            // remap light
            d_light = smoothstep(-0.3, 1.2, d_light);
            
            if (d_light < light_distance1) {
                d_light *= 0.9;
            }
            if (d_light < light_distance2) {
                d_light *= 0.9;
            }
            
            
            float c = d_light*pow(f,0.8)*3.5; // change the magic nums here for different light strengths
            
            // apply dithering
            if (dith || !should_dither) {
                c += 0.02;
                c *= 1.05;
            }
            
            // now we can assign colors based on distance to light origin
            float posterize = floor(c*4.0)/4.0;
            vec4 col = texture(colors, vec2(posterize, 0.0));
            
            gl_FragColor = vec4(col.rgb, a * col.a);
        }
    `,"fragmentShader");function Pc(i=new ge(.39,.7),e=null,t=.1,n=0){let r=new St().load("src/colorScheme/colorScheme2.png");r.magFilter=He,r.minFilter=He;let s=new ke(1,1),o=new Le({uniforms:{pixels:{value:100},colors:{value:r},light_origin:{value:i},time_speed:{value:t},rotation:{value:n},seed:{value:Ge()?Math.random()*10:Math.random()*100},time:{value:0}},vertexShader:Ug(),fragmentShader:Dg(),transparent:!0}),a=new Ie(s,o);return new it().add(a)}l(Pc,"createDryPlanet");var Ng=l(()=>`
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `,"vertexShader"),Og=l(()=>`
        varying vec3 vUv;
        uniform vec4 color;
        uniform vec4 color2;
        uniform vec4 color3;
        float pixels = 100.0;
        
        float dist(vec2 p0, vec2 pf){
            return sqrt((pf.x-p0.x)*(pf.x-p0.x)+(pf.y-p0.y)*(pf.y-p0.y));
        }
       
        void main() {
            vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;   
            vec2 pos_ndc = 2.0 * uv.xy  - 1.0;
            float dist = length(pos_ndc);
            
            float step0 = 0.65;
            float step1 = 0.87;
            float step2 = 0.97;
            float step3 = 1.04;
            float step4 = 1.04;
        
            vec4 color = mix(vec4(0,0,0,0), color, smoothstep(step0, step1, dist));
            color = mix(color, color2, smoothstep(step1, step2, dist));
            color = mix(color, color3, smoothstep(step2, step3, dist));
            color = mix(color, vec4(0,0,0,0), smoothstep(step3, step4, dist));
        
            gl_FragColor = color;
        }
    `,"fragmentShader"),Ic=l(()=>{let i=new ke(1.02,1.02),e=new Le({uniforms:{color:{value:new se(173/255,216/255,230/255,.25)},color2:{value:new se(0/255,127/255,255/255,.35)},color3:{value:new se(0/255,0/255,128/255,.45)}},vertexShader:Ng(),fragmentShader:Og(),transparent:!0});return new Ie(i,e)},"createAtmosphereLayer");var Fg=l(()=>`
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `,"vertexShader"),Bg=l(()=>`
        varying vec3 vUv;
        uniform float lightIntensity;
        uniform float pixels;
        uniform float rotation;
        uniform vec2 light_origin;
        uniform float time_speed;
        float dither_size = 2.0;
        float light_border_1 = 0.4;
        float light_border_2 = 0.6;
        uniform vec4 color1;
        uniform vec4 color2;
        uniform vec4 color3;
        float size = 10.0;
        int OCTAVES = 20;
        uniform float seed;
        uniform float time;
        bool should_dither = true;

        float rand(vec2 coord) {
            coord = mod(coord, vec2(1.0,1.0)*floor(size+0.5));
            return fract(sin(dot(coord.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }

        float noise(vec2 coord){
            vec2 i = floor(coord);
            vec2 f = fract(coord);
            
            float a = rand(i);
            float b = rand(i + vec2(1.0, 0.0));
            float c = rand(i + vec2(0.0, 1.0));
            float d = rand(i + vec2(1.0, 1.0));
        
            vec2 cubic = f * f * (3.0 - 2.0 * f);
        
            return mix(a, b, cubic.x) + (c - a) * cubic.y * (1.0 - cubic.x) + (d - b) * cubic.x * cubic.y;
        }

        float fbm(vec2 coord){
            float value = 0.0;
            float scale = 0.5;
        
            for(int i = 0; i < OCTAVES ; i++){
                value += noise(coord) * scale;
                coord *= 2.0;
                scale *= 0.5;
            }
            return value;
        }
        
        bool dither(vec2 uv1, vec2 uv2) {
            return mod(uv1.x+uv2.y,2.0/pixels) <= 1.0 / pixels;
        }
        
        vec2 rotate(vec2 coord, float angle){
            coord -= 0.5;
            coord *= mat2(vec2(cos(angle),-sin(angle)),vec2(sin(angle),cos(angle)));
            return coord + 0.5;
        }

        void main() {
            vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;
	
            // check distance from center & distance to light
            float d_circle = distance(uv, vec2(0.5));
            float d_light = distance(uv , vec2(light_origin));
            // cut out a circle
            // stepping over 0.5 instead of 0.49999 makes some pixels a little buggy
            float a = step(d_circle, 0.49999);
            
            bool dith = dither(uv ,vUv.xy);
            uv = rotate(uv, rotation);

            // get a noise value with light distance added
            // this creates a moving dynamic shape
            float fbm1 = fbm(uv);
            d_light += fbm(uv*size+fbm1+vec2(time*0.1+time_speed, 0.0))*lightIntensity;
            
            // size of edge in which colors should be dithered
            float dither_border = (1.0/pixels)*dither_size;

            // now we can assign colors based on distance to light origin
            vec4 col = color1;
            if (d_light > light_border_1) {
                col = color2;
                if (d_light < light_border_1 + dither_border && (dith || !should_dither)) {
                    col = color1;
                }
            }
            if (d_light > light_border_2) {
                col = color3;
                if (d_light < light_border_2 + dither_border && (dith || !should_dither)) {
                    col = color2;
                }
            }
            
            gl_FragColor = vec4(col.rgb, a * col.a);
        }
    `,"fragmentShaderPlanet");function Nn(i=new ge(.39,.7),e=.1,t=null,n=.1,r=0){let s=t||[new se(.6078431372549019,.6196078431372549,.7215686274509804,1),new se(.2784313725490196,.3803921568627451,.48627450980392156,1),new se(.20784313725490197,.2235294117647059,.3333333333333333,1)],o=new ke(1,1),a=new Le({uniforms:{pixels:{value:100},color1:{value:s[0]},color2:{value:s[1]},color3:{value:s[2]},lightIntensity:{value:e},light_origin:{value:i},time_speed:{value:n},rotation:{value:r},seed:{value:Ge()?Math.random()*10:Math.random()*100},time:{value:0}},vertexShader:Fg(),fragmentShader:Bg(),transparent:!0});return new Ie(o,a)}l(Nn,"createBasePlanet");var zg=l(()=>`
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `,"vertexShader"),kg=l(()=>`
        varying vec3 vUv;
        uniform float pixels;
        uniform float rotation;
        uniform float cloud_cover;
        uniform vec2 light_origin;
        uniform float time_speed;
        uniform float stretch;
        float cloud_curve = 1.3;
        float light_border_1 = 0.4;
        float light_border_2 = 0.6;
        
        uniform vec4 base_color;
        uniform vec4 outline_color;
        uniform vec4 shadow_base_color;
        uniform vec4 shadow_outline_color;
        
        float size = 4.0;
        int OCTAVES = 4;
        uniform float seed;
        
        uniform float time;
        
        float rand(vec2 coord) {
            coord = mod(coord, vec2(1.0,1.0)*floor(size+0.5));
            return fract(sin(dot(coord.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }
        
        float noise(vec2 coord){
            vec2 i = floor(coord);
            vec2 f = fract(coord);
            
            float a = rand(i);
            float b = rand(i + vec2(1.0, 0.0));
            float c = rand(i + vec2(0.0, 1.0));
            float d = rand(i + vec2(1.0, 1.0));
        
            vec2 cubic = f * f * (3.0 - 2.0 * f);
        
            return mix(a, b, cubic.x) + (c - a) * cubic.y * (1.0 - cubic.x) + (d - b) * cubic.x * cubic.y;
        }
        
        float fbm(vec2 coord){
            float value = 0.0;
            float scale = 0.5;
        
            for(int i = 0; i < OCTAVES ; i++){
                value += noise(coord) * scale;
                coord *= 2.0;
                scale *= 0.5;
            }
            return value;
        }
        
        float circleNoise(vec2 uv) {
            float uv_y = floor(uv.y);
            uv.x += uv_y*.31;
            vec2 f = fract(uv);
            float h = rand(vec2(floor(uv.x),floor(uv_y)));
            float m = (length(f-0.25-(h*0.5)));
            float r = h*0.25;
            return smoothstep(0.0, r, m*0.75);
        }
        
        float cloud_alpha(vec2 uv) {
            float c_noise = 0.0;
            
            // more iterations for more turbulence
            for (int i = 0; i < 9; i++) {
                c_noise += circleNoise((uv * size * 0.3) + (float(i+1)+10.) + (vec2(time*time_speed, 0.0)));
            }
            float fbm = fbm(uv*size+c_noise + vec2(time*time_speed, 0.0));
            
            return fbm;//step(a_cutoff, fbm);
        }
        
        bool dither(vec2 uv_pixel, vec2 uv_real) {
            return mod(uv_pixel.x+uv_real.y,2.0/pixels) <= 1.0 / pixels;
        }
        
        vec2 spherify(vec2 uv) {
            vec2 centered= uv *2.0-1.0;
            float z = sqrt(1.0 - dot(centered.xy, centered.xy));
            vec2 sphere = centered/(z + 1.0);
            return sphere * 0.5+0.5;
        }
        
        vec2 rotate(vec2 coord, float angle){
            coord -= 0.5;
            coord *= mat2(vec2(cos(angle),-sin(angle)),vec2(sin(angle),cos(angle)));
            return coord + 0.5;
        }
        
        void main() {
            // pixelize uv
            vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;
            
            // distance to light source
            float d_light = distance(uv , light_origin);
            
            // cut out a circle
            float d_circle = distance(uv, vec2(0.5));
            float a = step(d_circle, 0.5);
            
            float d_to_center = distance(uv, vec2(0.5));
            
            uv = rotate(uv, rotation);
            
            // map to sphere
            uv = spherify(uv);
            // slightly make uv go down on the right, and up in the left
            uv.y += smoothstep(0.0, cloud_curve, abs(uv.x-0.4));
            
            
            float c = cloud_alpha(uv*vec2(1.0, stretch));
            
            // assign some colors based on cloud depth & distance from light
            vec4 col = base_color;
            if (c < cloud_cover + 0.03) {
                col = outline_color;
            }
            if (d_light + c*0.2 > light_border_1) {
                col = shadow_base_color;
        
            }
            if (d_light + c*0.2 > light_border_2) {
                col = shadow_outline_color;
            }
            
            c *= step(d_to_center, 0.5);
            gl_FragColor = vec4(col.rgb, step(cloud_cover, c) * a * col.a);
        }
    `,"fragmentShaderClouds");function vs(i,e=new ge(.39,.7),t=.1,n=0,r=.546,s=2.5){let o=i||[new se(.882353,.94902,1,1),new se(.752941,.890196,1,1),new se(.368627,.439216,.647059,1),new se(.25098,.286275,.45098,1)],a=new ke(1,1),c=new Le({uniforms:{light_origin:{value:e},pixels:{value:100},seed:{value:Ge()?Math.random()*10:Math.random()*100},time_speed:{value:t},base_color:{value:o[0]},outline_color:{value:o[1]},shadow_base_color:{value:o[2]},shadow_outline_color:{value:o[3]},cloud_cover:{value:r},rotation:{value:n},stretch:{value:s},time:{value:0}},vertexShader:zg(),fragmentShader:kg(),transparent:!0});return new Ie(a,c)}l(vs,"createCloudLayer");var Vg=l(()=>`
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `,"vertexShader"),Hg=l(()=>`
        varying vec3 vUv;
        uniform float lightIntensity;
        uniform float pixels;
        uniform float rotation;
        uniform vec2 light_origin;
        uniform float time_speed;
        uniform float land_cutoff;
        float dither_size = 2.0;
        float light_border_1 = 0.4;
        float light_border_2 = 0.6;
        uniform vec4 col1;
        uniform vec4 col2;
        uniform vec4 col3;
        uniform vec4 col4;
        float size = 10.0;
        int OCTAVES = 6;
        uniform float seed;
        uniform float time;

        float rand(vec2 coord) {
            coord = mod(coord, vec2(1.0,1.0)*floor(size+0.5));
            return fract(sin(dot(coord.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }

        float noise(vec2 coord){
            vec2 i = floor(coord);
            vec2 f = fract(coord);
            
            float a = rand(i);
            float b = rand(i + vec2(1.0, 0.0));
            float c = rand(i + vec2(0.0, 1.0));
            float d = rand(i + vec2(1.0, 1.0));
        
            vec2 cubic = f * f * (3.0 - 2.0 * f);
        
            return mix(a, b, cubic.x) + (c - a) * cubic.y * (1.0 - cubic.x) + (d - b) * cubic.x * cubic.y;
        }

        float fbm(vec2 coord){
            float value = 0.0;
            float scale = 0.5;
        
            for(int i = 0; i < OCTAVES ; i++){
                value += noise(coord) * scale;
                coord *= 2.0;
                scale *= 0.5;
            }
            return value;
        }

        vec2 spherify(vec2 uv) {
            vec2 centered= uv *2.0-1.0;
            float z = sqrt(1.0 - dot(centered.xy, centered.xy));
            vec2 sphere = centered/(z + 1.0);
            return sphere * 0.5+0.5;
        }
        
        vec2 rotate(vec2 coord, float angle){
            coord -= 0.5;
            coord *= mat2(vec2(cos(angle),-sin(angle)),vec2(sin(angle),cos(angle)));
            return coord + 0.5;
        }

        void main() {
            vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;
	
            float d_light = distance(uv , light_origin);
            // cut out a circle
            float d_circle = distance(uv, vec2(0.5));
            // stepping over 0.5 instead of 0.49999 makes some pixels a little buggy
            float a = step(d_circle, 0.49999);
            
            // give planet a tilt
            uv = rotate(uv, rotation);
            
            // map to sphere
            uv = spherify(uv);
            
            // some scrolling noise for landmasses
            vec2 base_fbm_uv = (uv)*size+vec2(time*time_speed,0.0);
            
            // use multiple fbm's at different places so we can determine what color land gets
            float fbm1 = fbm(base_fbm_uv);
            float fbm2 = fbm(base_fbm_uv - light_origin*fbm1);
            float fbm3 = fbm(base_fbm_uv - light_origin*1.5*fbm1);
            float fbm4 = fbm(base_fbm_uv - light_origin*2.0*fbm1);
            
            // lots of magic numbers here
            // you can mess with them, it changes the color distribution
            if (d_light < light_border_1) {
                fbm4 *= 0.9;
            }
            if (d_light > light_border_1) {
                fbm2 *= 1.05;
                fbm3 *= 1.05;
                fbm4 *= 1.05;
            } 
            if (d_light > light_border_2) {
                fbm2 *= 1.3;
                fbm3 *= 1.4;
                fbm4 *= 1.8;
            } 
            
            // increase contrast on d_light
            d_light = pow(d_light, 2.0)*0.1;
            vec4 col = col4;
            // assign colors based on if there is noise to the top-left of noise
            // and also based on how far noise is from light
            if (fbm4 + d_light < fbm1) {
                col = col3;
            }
            if (fbm3 + d_light < fbm1) {
                col = col2;
            }
            if (fbm2 + d_light < fbm1) {
                col = col1;
            }
            
            gl_FragColor = vec4(col.rgb, step(land_cutoff, fbm1) * a * col.a);
        }
    `,"fragmentShaderPlanet");function Lc(i=new ge(.39,.7),e=.1,t=null,n=.1,r=0,s=.6){let o=t||[new se(.784314,.831373,.364706,1),new se(.388235,.670588,.247059,1),new se(.184314,.341176,.32549,1),new se(.156863,.207843,.25098,1)],a=new ke(1,1),c=new Le({uniforms:{pixels:{value:100},land_cutoff:{value:s},col1:{value:o[0]},col2:{value:o[1]},col3:{value:o[2]},col4:{value:o[3]},lightIntensity:{value:e},light_origin:{value:i},time_speed:{value:n},rotation:{value:r},seed:{value:Ge()?Math.random()*10:Math.random()*100},time:{value:0}},vertexShader:Vg(),fragmentShader:Hg(),transparent:!0});return new Ie(a,c)}l(Lc,"createlandMassLayer");var Uc=l(()=>{let i=new it,e=[new se(102/255,176/255,199/255,1),new se(102/255,176/255,199/255,1),new se(52/255,65/255,157/255,1)],t=Nn(void 0,void 0,e),n=Lc(void 0,void 0,void 0,void 0,void 0,.5),r=vs(),s=Ic();return i.add(t,n,r,s),i},"createEarthPlanet");var Dc=l(()=>`
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `,"vertexShader"),Nc=l(()=>`
        varying vec3 vUv;
        float pixels = 100.0;
        uniform float cloud_cover;
        uniform vec2 light_origin;
        uniform float time_speed;
        uniform float stretch;
        uniform float cloud_curve;
        float light_border_1 = 0.4;
        float light_border_2 = 0.6;
        uniform float rotation;

        uniform vec4 base_color;
        uniform vec4 outline_color;
        uniform vec4 shadow_base_color;
        uniform vec4 shadow_outline_color;

        float size = 9.0;
        int OCTAVES = 5;
        uniform float seed;
        uniform float time;


        float rand(vec2 coord) {
            coord = mod(coord, vec2(1.0,1.0)*floor(size+0.5));
            return fract(sin(dot(coord.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }

        float noise(vec2 coord){
            vec2 i = floor(coord);
            vec2 f = fract(coord);
            
            float a = rand(i);
            float b = rand(i + vec2(1.0, 0.0));
            float c = rand(i + vec2(0.0, 1.0));
            float d = rand(i + vec2(1.0, 1.0));
        
            vec2 cubic = f * f * (3.0 - 2.0 * f);
        
            return mix(a, b, cubic.x) + (c - a) * cubic.y * (1.0 - cubic.x) + (d - b) * cubic.x * cubic.y;
        }

        float circleNoise(vec2 uv) {
            float uv_y = floor(uv.y);
            uv.x += uv_y*.31;
            vec2 f = fract(uv);
            float h = rand(vec2(floor(uv.x),floor(uv_y)));
            float m = (length(f-0.25-(h*0.5)));
            float r = h*0.25;
            return smoothstep(0.0, r, m*0.75);
        }

        float fbm(vec2 coord){
            float value = 0.0;
            float scale = 0.5;
        
            for(int i = 0; i < OCTAVES ; i++){
                value += noise(coord) * scale;
                coord *= 2.0;
                scale *= 0.5;
            }
            return value;
        }

        float cloud_alpha(vec2 uv) {
            float c_noise = 0.0;
            
            // more iterations for more turbulence
            for (int i = 0; i < 9; i++) {
                c_noise += circleNoise((uv * size * 0.3) + (float(i+1)+10.) + (vec2(time*time_speed, 0.0)));
            }
            float fbm = fbm(uv*size+c_noise + vec2(time*time_speed, 0.0));
            
            return fbm;
        }
        
        vec2 spherify(vec2 uv) {
            vec2 centered= uv *2.0-1.0;
            float z = sqrt(1.0 - dot(centered.xy, centered.xy));
            vec2 sphere = centered/(z + 1.0);
            return sphere * 0.5+0.5;
        }
        
        vec2 rotate(vec2 coord, float angle){
            coord -= 0.5;
            coord *= mat2(vec2(cos(angle),-sin(angle)),vec2(sin(angle),cos(angle)));
            return coord + 0.5;
        }

        void main() {
            // pixelize uv
            vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;
            
            // distance to light source
            float d_light = distance(uv , light_origin);
            
            // cut out a circle
            float d_circle = distance(uv, vec2(0.5));
            // stepping over 0.5 instead of 0.49999 makes some pixels a little buggy
            float a = step(d_circle, 0.49999);
            
            uv = rotate(uv, rotation);
            
            // map to sphere
            uv = spherify(uv);
            
            // slightly make uv go down on the right, and up in the left
            uv.y += smoothstep(0.0, cloud_curve, abs(uv.x-0.4));
            
            float c = cloud_alpha(uv*vec2(1.0, stretch));
            
            // assign some colors based on cloud depth & distance from light
            vec4 col = base_color;
            if (c < cloud_cover + 0.03) {
                col = outline_color;
            }
            if (d_light + c*0.2 > light_border_1) {
                col = shadow_base_color;
        
            }
            if (d_light + c*0.2 > light_border_2) {
                col = shadow_outline_color;
            }
            gl_FragColor = vec4(col.rgb, step(cloud_cover, c) * a * col.a);
        }
    `,"fragmentShader");function Oc(i=new ge(.39,.7),e=.538,t,n=1,r=.1,s=0,o=1.3){let a=t||[new se(.941176,.709804,.254902,1),new se(.811765,.458824,.168627,1),new se(.670588,.317647,.188235,1),new se(.490196,.219608,.2,1)],c=new ke(1,1),u=new Le({uniforms:{base_color:{value:a[0]},outline_color:{value:a[1]},shadow_base_color:{value:a[2]},shadow_outline_color:{value:a[3]},cloud_cover:{value:e},stretch:{value:n},cloud_curve:{value:o},time_speed:{value:r},rotation:{value:s},light_origin:{value:i},seed:{value:1},time:{value:0}},vertexShader:Dc(),fragmentShader:Nc(),transparent:!0}),h=new ke(1,1),d=new Le({uniforms:{base_color:{value:a[0]},outline_color:{value:a[1]},shadow_base_color:{value:a[2]},shadow_outline_color:{value:a[3]},cloud_cover:{value:0},stretch:{value:n},cloud_curve:{value:0},time_speed:{value:r},rotation:{value:s},light_origin:{value:i},seed:{value:Ge()?Math.random()*10:Math.random()*100},time:{value:0}},vertexShader:Dc(),fragmentShader:Nc(),transparent:!0});return new Ie(h,d)}l(Oc,"createBaseGasPlanet");var Gg=l(()=>`
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `,"vertexShader"),Wg=l(()=>`
        varying vec3 vUv;
        float pixels = 100.0;
        uniform float cloud_cover;
        uniform vec2 light_origin;
        uniform float time_speed;
        uniform float stretch;
        uniform float cloud_curve;
        float light_border_1 = 0.4;
        float light_border_2 = 0.6;
        uniform float rotation;

        uniform vec4 base_color;
        uniform vec4 outline_color;
        uniform vec4 shadow_base_color;
        uniform vec4 shadow_outline_color;

        float size = 9.0;
        int OCTAVES = 5;
        uniform float seed;
        uniform float time;


        float rand(vec2 coord) {
            coord = mod(coord, vec2(1.0,1.0)*floor(size+0.5));
            return fract(sin(dot(coord.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }

        float noise(vec2 coord){
            vec2 i = floor(coord);
            vec2 f = fract(coord);
            
            float a = rand(i);
            float b = rand(i + vec2(1.0, 0.0));
            float c = rand(i + vec2(0.0, 1.0));
            float d = rand(i + vec2(1.0, 1.0));
        
            vec2 cubic = f * f * (3.0 - 2.0 * f);
        
            return mix(a, b, cubic.x) + (c - a) * cubic.y * (1.0 - cubic.x) + (d - b) * cubic.x * cubic.y;
        }

        float circleNoise(vec2 uv) {
            float uv_y = floor(uv.y);
            uv.x += uv_y*.31;
            vec2 f = fract(uv);
            float h = rand(vec2(floor(uv.x),floor(uv_y)));
            float m = (length(f-0.25-(h*0.5)));
            float r = h*0.25;
            return smoothstep(0.0, r, m*0.75);
        }

        float fbm(vec2 coord){
            float value = 0.0;
            float scale = 0.5;
        
            for(int i = 0; i < OCTAVES ; i++){
                value += noise(coord) * scale;
                coord *= 2.0;
                scale *= 0.5;
            }
            return value;
        }

        float cloud_alpha(vec2 uv) {
            float c_noise = 0.0;
            
            // more iterations for more turbulence
            for (int i = 0; i < 9; i++) {
                c_noise += circleNoise((uv * size * 0.3) + (float(i+1)+10.) + (vec2(time*time_speed, 0.0)));
            }
            float fbm = fbm(uv*size+c_noise + vec2(time*time_speed, 0.0));
            
            return fbm;
        }
        
        vec2 spherify(vec2 uv) {
            vec2 centered= uv *2.0-1.0;
            float z = sqrt(1.0 - dot(centered.xy, centered.xy));
            vec2 sphere = centered/(z + 1.0);
            return sphere * 0.5+0.5;
        }
        
        vec2 rotate(vec2 coord, float angle){
            coord -= 0.5;
            coord *= mat2(vec2(cos(angle),-sin(angle)),vec2(sin(angle),cos(angle)));
            return coord + 0.5;
        }

        void main() {
            // pixelize uv
            vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;
            
            // distance to light source
            float d_light = distance(uv , light_origin);
            
            // cut out a circle
            float d_circle = distance(uv, vec2(0.5));
            // stepping over 0.5 instead of 0.49999 makes some pixels a little buggy
            float a = step(d_circle, 0.49999);
            
            uv = rotate(uv, rotation);
            
            // map to sphere
            uv = spherify(uv);
            
            // slightly make uv go down on the right, and up in the left
            uv.y += smoothstep(0.0, cloud_curve, abs(uv.x-0.4));
            
            float c = cloud_alpha(uv*vec2(1.0, stretch));
            
            // assign some colors based on cloud depth & distance from light
            vec4 col = base_color;
            if (c < cloud_cover + 0.03) {
                col = outline_color;
            }
            if (d_light + c*0.2 > light_border_1) {
                col = shadow_base_color;
        
            }
            if (d_light + c*0.2 > light_border_2) {
                col = shadow_outline_color;
            }
            gl_FragColor = vec4(col.rgb, step(cloud_cover, c) * a * col.a);
        }
    `,"fragmentShader");function Fc(i=new ge(.39,.7),e=.538,t,n=1,r=.1,s=0,o=1.3){let a=t||[new se(.231373,.12549,.152941,1),new se(.231373,.12549,.152941,1),new se(.129412,.0941176,.105882,1),new se(.129412,.0941176,.105882,1)],c=new ke(1,1),u=new Le({uniforms:{base_color:{value:a[0]},outline_color:{value:a[1]},shadow_base_color:{value:a[2]},shadow_outline_color:{value:a[3]},cloud_cover:{value:e},stretch:{value:n},cloud_curve:{value:o},time_speed:{value:r},rotation:{value:s},light_origin:{value:i},seed:{value:Ge()?Math.random()*10:Math.random()*100},time:{value:0}},vertexShader:Gg(),fragmentShader:Wg(),transparent:!0});return new Ie(c,u)}l(Fc,"createGasPLayer");var Bc=l(()=>{let i=new it,e=Oc(),t=Fc();return i.add(e),i.add(t),i},"createGasGiant");var Xg=l(()=>`
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `,"vertexShader"),qg=l(()=>`
        varying vec3 vUv;
        uniform float pixels;
        uniform float rotation;
        uniform vec2 light_origin;
        uniform float time_speed;
        uniform float cloud_cover;
        float stretch = 2.0;
        float cloud_curve = 1.3;
        float light_border_1 = 0.4;
        float light_border_2 = 0.6;
        float bands = 1.0;
        bool should_dither = true;
        
        uniform sampler2D colorscheme;
        uniform sampler2D dark_colorscheme;
        
        float size = 15.0;
        int OCTAVES = 6;
        uniform float seed;
        uniform float time;

        float rand(vec2 coord) {
            coord = mod(coord, vec2(2.0,1.0)*floor(size+0.5));
            return fract(sin(dot(coord.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }
        
        float noise(vec2 coord){
            vec2 i = floor(coord);
            vec2 f = fract(coord);
            
            float a = rand(i);
            float b = rand(i + vec2(1.0, 0.0));
            float c = rand(i + vec2(0.0, 1.0));
            float d = rand(i + vec2(1.0, 1.0));
        
            vec2 cubic = f * f * (3.0 - 2.0 * f);
        
            return mix(a, b, cubic.x) + (c - a) * cubic.y * (1.0 - cubic.x) + (d - b) * cubic.x * cubic.y;
        }
        
        float fbm(vec2 coord){
            float value = 0.0;
            float scale = 0.5;
        
            for(int i = 0; i < OCTAVES ; i++){
                value += noise(coord) * scale;
                coord *= 2.0;
                scale *= 0.5;
            }
            return value;
        }
        
        float circleNoise(vec2 uv) {
            float uv_y = floor(uv.y);
            uv.x += uv_y*.31;
            vec2 f = fract(uv);
            float h = rand(vec2(floor(uv.x),floor(uv_y)));
            float m = (length(f-0.25-(h*0.5)));
            float r = h*0.25;
            return smoothstep(0.0, r, m*0.75);
        }
        
        float turbulence(vec2 uv) {
            float c_noise = 0.0;
            
            
            // more iterations for more turbulence
            for (int i = 0; i < 10; i++) {
                c_noise += circleNoise((uv * size *0.3) + (float(i+1)+10.) + (vec2(time * time_speed, 0.0)));
            }
            return c_noise;
        }
        
        bool dither(vec2 uv_pixel, vec2 uv_real) {
            return mod(uv_pixel.x+uv_real.y,2.0/pixels) <= 1.0 / pixels;
        }
        
        vec2 spherify(vec2 uv) {
            vec2 centered= uv *2.0-1.0;
            float z = sqrt(1.0 - dot(centered.xy, centered.xy));
            vec2 sphere = centered/(z + 1.0);
            return sphere * 0.5+0.5;
        }
        
        vec2 rotate(vec2 coord, float angle){
            coord -= 0.5;
            coord *= mat2(vec2(cos(angle),-sin(angle)),vec2(sin(angle),cos(angle)));
            return coord + 0.5;
        }
        

        void main() {
            // pixelize uv
            vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;
            
            float light_d = distance(uv, light_origin);
	
            // we use this value later to dither between colors
            bool dith = dither(uv, vUv.xy);
            
            // stepping over 0.5 instead of 0.49999 makes some pixels a little buggy
            float a = step(length(uv-vec2(0.5)), 0.49999);
            
            // rotate planet
            uv = rotate(uv, rotation);
            
            // map to sphere
            uv = spherify(uv);
        
            // a band is just one dimensional noise
            float band = fbm(vec2(0.0, uv.y*size*bands));
            
            // turbulence value is circles on top of each other
            float turb = turbulence(uv);
        
            // by layering multiple noise values & combining with turbulence and bands
            // we get some dynamic looking shape	
            float fbm1 = fbm(uv*size);
            float fbm2 = fbm(uv*vec2(1.0, 2.0)*size+fbm1+vec2(-time*time_speed,0.0)+turb);
            
            // all of this is just increasing some contrast & applying light
            fbm2 *= pow(band,2.0)*7.0;
            float light = fbm2 + light_d*1.8;
            fbm2 += pow(light_d, 1.0)-0.3;
            fbm2 = smoothstep(-0.2, 4.0-fbm2, light);
            
            // apply the dither value
            if (dith && should_dither) {
                fbm2 *= 1.1;
            }
            
            // finally add colors
            float posterized = floor(fbm2*4.0)/2.0;
            vec4 col;
            if (fbm2 < 0.625) {
                col = texture(colorscheme, vec2(posterized, uv.y));
            } else {
                col = texture(dark_colorscheme, vec2(posterized-1.0, uv.y));
            }

            gl_FragColor = vec4(col.rgb, a * col.a);
        }
    `,"fragmentShader");function zc(i=new ge(.39,.7),e=.1){let t=new St().load("src/colorScheme/colorScheme1.png");t.magFilter=He,t.minFilter=He;let n=new St().load("src/colorScheme/colorScheme2.png");n.magFilter=He,n.minFilter=He;let r=new ke(1,1),s=new Le({uniforms:{colorscheme:{value:t},dark_colorscheme:{value:n},pixels:{value:150},light_origin:{value:i},time_speed:{value:e},rotation:{value:Math.random()},seed:{value:Ge()?Math.random()*10:Math.random()*100},time:{value:0}},vertexShader:Xg(),fragmentShader:qg(),transparent:!0});return new Ie(r,s)}l(zc,"createDenseGasPlanet");var Yg=l(()=>`
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `,"vertexShader"),$g=l(()=>`
        varying vec3 vUv;
        uniform float pixels;
        uniform float rotation;
        uniform vec2 light_origin;
        uniform float time_speed;
        float light_border_1 = 0.4;
        float light_border_2 = 0.6;
        uniform float ring_width;
        uniform float ring_perspective;
        uniform float scale_rel_to_planet;
        
        uniform sampler2D colorscheme;
        uniform sampler2D dark_colorscheme;
        
        float size = 25.0;
        int OCTAVES = 8;
        uniform float seed;
        uniform float time;

        float rand(vec2 coord) {
            coord = mod(coord, vec2(2.0,1.0)*floor(size+0.5));
            return fract(sin(dot(coord.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }
        
        float noise(vec2 coord){
            vec2 i = floor(coord);
            vec2 f = fract(coord);
            
            float a = rand(i);
            float b = rand(i + vec2(1.0, 0.0));
            float c = rand(i + vec2(0.0, 1.0));
            float d = rand(i + vec2(1.0, 1.0));
        
            vec2 cubic = f * f * (3.0 - 2.0 * f);
        
            return mix(a, b, cubic.x) + (c - a) * cubic.y * (1.0 - cubic.x) + (d - b) * cubic.x * cubic.y;
        }
        
        float fbm(vec2 coord){
            float value = 0.0;
            float scale = 0.5;
        
            for(int i = 0; i < OCTAVES ; i++){
                value += noise(coord) * scale;
                coord *= 2.0;
                scale *= 0.5;
            }
            return value;
        }
        
        float circleNoise(vec2 uv) {
            float uv_y = floor(uv.y);
            uv.x += uv_y*.31;
            vec2 f = fract(uv);
            float h = rand(vec2(floor(uv.x),floor(uv_y)));
            float m = (length(f-0.25-(h*0.5)));
            float r = h*0.25;
            return smoothstep(0.0, r, m*0.75);
        }
        
        vec2 spherify(vec2 uv) {
            vec2 centered= uv *2.0-1.0;
            float z = sqrt(1.0 - dot(centered.xy, centered.xy));
            vec2 sphere = centered/(z + 1.0);
            return sphere * 0.5+0.5;
        }
        
        vec2 rotate(vec2 coord, float angle){
            coord -= 0.5;
            coord *= mat2(vec2(cos(angle),-sin(angle)),vec2(sin(angle),cos(angle)));
            return coord + 0.5;
        }

        void main() {
            // pixelize uv
            vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;
            
            float light_d = distance(uv, light_origin);
            uv = rotate(uv, rotation);
            
            // center is used to determine ring position
            vec2 uv_center = uv - vec2(0.0, 0.5);
            
            // tilt ring
            uv_center *= vec2(1.0, ring_perspective);
            float center_d = distance(uv_center,vec2(0.5, 0.0));
            
            
            // cut out 2 circles of different sizes and only intersection of the 2.
            float ring = smoothstep(0.5-ring_width*2.0, 0.5-ring_width, center_d);
            ring *= smoothstep(center_d-ring_width, center_d, 0.4);
            
            // pretend like the ring goes behind the planet by removing it if it's in the upper half.
            if (uv.y < 0.5) {
                ring *= step(1.0/scale_rel_to_planet, distance(uv,vec2(0.5)));
            }
            
            // rotate material in the ring
            uv_center = rotate(uv_center+vec2(0, 0.5), time*time_speed);
            // some noise
            ring *= fbm(uv_center*size);
            
            // apply some colors based on final value
            float posterized = floor((ring+pow(light_d, 2.0)*2.0)*4.0)/4.0;
            vec4 col;
            if (posterized <= 1.0) {
                col = texture(colorscheme, vec2(posterized, uv.y));
            } else {
                col = texture(dark_colorscheme, vec2(posterized-1.0, uv.y));
            }
            float ring_a = step(0.28, ring);

            gl_FragColor = vec4(col.rgb, ring_a * col.a);
        }
    `,"fragmentShader");function kc(i=new ge(.39,.7),e=.1,t=.143,n=6,r=4){let s=new St().load("src/colorScheme/colorScheme1.png");s.magFilter=He,s.minFilter=He;let o=new St().load("src/colorScheme/colorScheme2.png");o.magFilter=He,o.minFilter=He;let a=new ke(1,1),c=new Le({uniforms:{colorscheme:{value:s},dark_colorscheme:{value:o},ring_width:{value:t},ring_perspective:{value:n},scale_rel_to_planet:{value:r},pixels:{value:250},light_origin:{value:i},time_speed:{value:e},rotation:{value:Math.random()},seed:{value:Ge()?Math.random()*10:Math.random()*100},time:{value:0}},vertexShader:Yg(),fragmentShader:$g(),transparent:!0});return new Ie(a,c)}l(kc,"createRingLayer");var Vc=l(()=>{let i=new it,e=kc(),t=zc();return e.position.z=.01,e.scale.set(2,2),i.add(t),i.add(e),i},"createGasGiantRing");var Zg=l(()=>`
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `,"vertexShader"),Jg=l(()=>`
        varying vec3 vUv;
        uniform float lightIntensity;
        uniform float pixels;
        uniform float rotation;
        uniform vec2 light_origin;
        uniform float time_speed;
        float light_border_1 = 0.4;
        float light_border_2 = 0.6;
        uniform float lake_cutoff;
        
        uniform vec4 color1;
        uniform vec4 color2;
        uniform vec4 color3;
        
        float size = 10.0;
        int OCTAVES = 4;
        uniform float seed;
        uniform float time;
        
        float rand(vec2 coord) {
            coord = mod(coord, vec2(2.0,1.0)*floor(size+0.5));
            return fract(sin(dot(coord.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }
        
        float noise(vec2 coord){
            vec2 i = floor(coord);
            vec2 f = fract(coord);
                
            float a = rand(i);
            float b = rand(i + vec2(1.0, 0.0));
            float c = rand(i + vec2(0.0, 1.0));
            float d = rand(i + vec2(1.0, 1.0));
        
            vec2 cubic = f * f * (3.0 - 2.0 * f);
        
            return mix(a, b, cubic.x) + (c - a) * cubic.y * (1.0 - cubic.x) + (d - b) * cubic.x * cubic.y;
        }
        
        float fbm(vec2 coord){
            float value = 0.0;
            float scale = 0.5;
        
            for(int i = 0; i < OCTAVES ; i++){
                value += noise(coord) * scale;
                coord *= 2.0;
                scale *= 0.5;
            }
            return value;
        }
        
        bool dither(vec2 uv1, vec2 uv2) {
            return mod(uv1.x+uv2.y,2.0/pixels) <= 1.0 / pixels;
        }
        
        vec2 rotate(vec2 coord, float angle){
            coord -= 0.5;
            coord *= mat2(vec2(cos(angle),-sin(angle)),vec2(sin(angle),cos(angle)));
            return coord + 0.5;
        }
        
        vec2 spherify(vec2 uv) {
            vec2 centered= uv *2.0-1.0;
            float z = sqrt(1.0 - dot(centered.xy, centered.xy));
            vec2 sphere = centered/(z + 1.0);
            return sphere * 0.5+0.5;
        }
        
        
        void main() {
            // pixelize uv
            vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;
            
            float d_light = distance(uv , vec2(light_origin));
            
            // give planet a tilt
            uv = rotate(uv, rotation);
        
            // map to sphere
            uv = spherify(uv);
            
            // some scrolling noise for landmasses
            float lake = fbm(uv*size+vec2(time*time_speed,0.0));
        
            vec4 col = color1;
            if (d_light > light_border_1) {
                col = color2;
            }
            if (d_light > light_border_2) {
                col = color3;
            }
            
            float a = step(lake_cutoff, lake);
            a *= step(distance(vec2(0.5), uv), 0.5);
            gl_FragColor = vec4(col.rgb, a * col.a);
        }
    `,"fragmentShaderLakes");function Hc(i=new ge(.39,.7),e=.1,t=.6,n,r=0){let s=n||[new se(.30980392156862746,.6431372549019608,.7215686274509804,1),new se(.2980392156862745,.40784313725490196,.5215686274509804,1),new se(.22745098039215686,.24705882352941178,.3686274509803922,1)],o=new ke(1,1),a=new Le({uniforms:{pixels:{value:100},light_origin:{value:i},seed:{value:Ge()?Math.random()*10:Math.random()*100},time_speed:{value:e},lake_cutoff:{value:t},rotation:{value:r},color1:{value:s[0]},color2:{value:s[1]},color3:{value:s[2]},time:{value:0}},vertexShader:Zg(),fragmentShader:Jg(),transparent:!0});return new Ie(o,a)}l(Hc,"createLakeLayer");var Gc=l(()=>{let i=new it,e=[new se(250/255,255/255,255/255,1),new se(199/255,212/255,255/255,1),new se(146/255,143/255,184/255,1)],t=Nn(void 0,void 0,e),n=Hc(),r=vs();return i.add(t),i.add(n),i.add(r),i},"createIcePlanet");var Kg=l(()=>`
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `,"vertexShader"),Qg=l(()=>`
        varying vec3 vUv;
        float pixels = 100.0;
        uniform float rotation;
        uniform vec2 light_origin;
        uniform float time_speed;
        float dither_size = 2.0;
        float light_border = 0.4;
        uniform vec4 color1;
        uniform vec4 color2;
        float size = 5.0;
        int OCTAVES = 20;
        uniform float seed;
        uniform float time;
        bool should_dither = true;

        float rand(vec2 coord) {
            coord = mod(coord, vec2(1.0,1.0)*floor(size+0.5));
            return fract(sin(dot(coord.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }

        float circleNoise(vec2 uv) {
            float uv_y = floor(uv.y);
            uv.x += uv_y*.31;
            vec2 f = fract(uv);
            float h = rand(vec2(floor(uv.x),floor(uv_y)));
            float m = (length(f-0.25-(h*0.5)));
            float r = h*0.25;
            return m = smoothstep(r-.10*r,r,m);
        }

        float crater(vec2 uv) {
            float c = 1.0;
            for (int i = 0; i < 2; i++) {
                c *= circleNoise((uv * size) + (float(i+1)+10.) + vec2((time*0.1)+time_speed,0.0));
            }
            return 1.0 - c;
        }
        
        vec2 spherify(vec2 uv) {
            vec2 centered= uv *2.0-1.0;
            float z = sqrt(1.0 - dot(centered.xy, centered.xy));
            vec2 sphere = centered/(z + 1.0);
            return sphere * 0.5+0.5;
        }
        
        vec2 rotate(vec2 coord, float angle){
            coord -= 0.5;
            coord *= mat2(vec2(cos(angle),-sin(angle)),vec2(sin(angle),cos(angle)));
            return coord + 0.5;
        }

        void main() {
            vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;
	
            // check distance from center & distance to light
            float d_circle = distance(uv, vec2(0.5));
            float d_light = distance(uv , vec2(light_origin));
            // cut out a circle
            // stepping over 0.5 instead of 0.49999 makes some pixels a little buggy
            float a = step(d_circle, 0.49999);
            
            uv = rotate(uv, rotation);
            uv = spherify(uv);
                
            float c1 = crater(uv );
            float c2 = crater(uv +(light_origin-0.5)*0.04);
            vec4 col = color1;
            
            a *= step(0.5, c1);
            if (c2<c1-(0.5-d_light)*2.0) {
                col = color2;
            }
            if (d_light > light_border) {
                col = color2;
            } 
        
            // cut out a circle
            a*= step(d_circle, 0.5);
            
            gl_FragColor = vec4(col.rgb, a * col.a);
        }
    `,"fragmentShaderCrater");function xs(i=new ge(.39,.7),e,t=.1,n=0){let r=e||[new se(.2784313725490196,.3803921568627451,.48627450980392156,1),new se(.20784313725490197,.2235294117647059,.3333333333333333,1)],s=new ke(1,1),o=new Le({uniforms:{color1:{value:r[0]},color2:{value:r[1]},light_origin:{value:i},time_speed:{value:t},rotation:{value:n},seed:{value:Ge()?Math.random()*10:Math.random()*100},time:{value:0}},vertexShader:Kg(),fragmentShader:Qg(),depthTest:!0,transparent:!0});return new Ie(s,o)}l(xs,"createCraterLayer");var jg=l(()=>`
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `,"vertexShader"),e_=l(()=>`
        varying vec3 vUv;
        float pixels = 100.0;
        uniform float rotation;
        uniform vec2 light_origin;
        uniform float time_speed;
        float light_border_1 = 0.4;
        float light_border_2 = 0.6;
        uniform float river_cutoff;
        
        uniform vec4 color1;
        uniform vec4 color2;
        uniform vec4 color3;
        
        float size = 10.0;
        int OCTAVES = 5;
        uniform float seed;
        uniform float time;
        
        float rand(vec2 coord) {
            coord = mod(coord, vec2(2.0,1.0)*floor(size+0.5));
            return fract(sin(dot(coord.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }
        
        float noise(vec2 coord){
            vec2 i = floor(coord);
            vec2 f = fract(coord);
                
            float a = rand(i);
            float b = rand(i + vec2(1.0, 0.0));
            float c = rand(i + vec2(0.0, 1.0));
            float d = rand(i + vec2(1.0, 1.0));
        
            vec2 cubic = f * f * (3.0 - 2.0 * f);
        
            return mix(a, b, cubic.x) + (c - a) * cubic.y * (1.0 - cubic.x) + (d - b) * cubic.x * cubic.y;
        }
        
        float fbm(vec2 coord){
            float value = 0.0;
            float scale = 0.5;
        
            for(int i = 0; i < OCTAVES ; i++){
                value += noise(coord) * scale;
                coord *= 2.0;
                scale *= 0.5;
            }
            return value;
        }

        vec2 rotate(vec2 coord, float angle){
            coord -= 0.5;
            coord *= mat2(vec2(cos(angle),-sin(angle)),vec2(sin(angle),cos(angle)));
            return coord + 0.5;
        }
        
        vec2 spherify(vec2 uv) {
            vec2 centered= uv *2.0-1.0;
            float z = sqrt(1.0 - dot(centered.xy, centered.xy));
            vec2 sphere = centered/(z + 1.0);
            return sphere * 0.5+0.5;
        }

        void main() {
            // pixelize uv
            vec2 uv = (floor(vUv.xy*pixels)/pixels) + 0.5;
            
            float d_light = distance(uv , light_origin);
            
            // cut out a circle
            float d_circle = distance(uv, vec2(0.5));
            // stepping over 0.5 instead of 0.49999 makes some pixels a little buggy
            float a = step(d_circle, 0.49999);
            
            // give planet a tilt
            uv = rotate(uv, rotation);
            
            // map to sphere
            uv = spherify(uv);
            
            // some scrolling noise for landmasses
            float fbm1 = fbm(uv*size+vec2(time*time_speed,0.0));
            float river_fbm = fbm(uv + fbm1*2.5);
            
            river_fbm = step(river_cutoff, river_fbm);
            
            // apply colors
            vec4 col = color1;
            if (d_light > light_border_1) {
                col = color2;
            }
            if (d_light > light_border_2) {
                col = color3;
            }
            
            a *= step(river_cutoff, river_fbm);
            gl_FragColor = vec4(col.rgb, a * col.a);
        }
    `,"fragmentShaderRivers");function Wc(i=new ge(.39,.7),e=.1,t=.6,n,r=0){let s=n||[new se(.30980392156862746,.6431372549019608,.7215686274509804,1),new se(.2980392156862745,.40784313725490196,.5215686274509804,1),new se(.22745098039215686,.24705882352941178,.3686274509803922,1)],o=new ke(1,1),a=new Le({uniforms:{light_origin:{value:i},seed:{value:Ge()?Math.random()*10:Math.random()*100},time_speed:{value:e},river_cutoff:{value:t},rotation:{value:r},color1:{value:s[0]},color2:{value:s[1]},color3:{value:s[2]},time:{value:0}},vertexShader:jg(),fragmentShader:e_(),transparent:!0});return new Ie(o,a)}l(Wc,"createRiverLayer");function Xc(){return new hs}l(Xc,"createScene");function qc(){return new ps}l(qc,"createClock");function Yc(){return new us}l(Yc,"createWebGlRenderer");function $c(){return new it}l($c,"createGroup");var Zc=l(()=>{let i=[new se(.560784,.301961,.341176,1),new se(.321569,.2,.247059,1),new se(.239216,.160784,.211765,1)],e=[new se(.321569,.2,.247059,1),new se(.239216,.160784,.211765,1)],t=[new se(1,.537255,.2,1),new se(.901961,.270588,.223529,1),new se(.678431,.184314,.270588,1)],n=$c(),r=Nn(void 0,void 0,i),s=xs(void 0,e),o=Wc(void 0,void 0,void 0,t);return n.add(r),n.add(s),n.add(o),n},"createLavaPlanet");var Jc=l(()=>{let i=new it,e=Nn(),t=xs();return i.add(e),i.add(t),i},"createNoAtmospherePlanet");var t_=l(()=>`
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `,"vertexShader"),n_=l(()=>`
        varying vec3 vUv;
        uniform float pixels;
        uniform float time_speed;
        uniform float time;
        uniform float rotation;
        uniform sampler2D colorramp;
        bool should_dither = true;

        uniform float seed;
        float size = 15.0;
        int OCTAVES = 5;
        float TILES = 2.0;


        float rand(vec2 co) {
            co = mod(co, vec2(1.0,1.0)*floor(size+0.5));
            return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }
        
        vec2 rotate(vec2 vec, float angle) {
            vec -=vec2(0.5);
            vec *= mat2(vec2(cos(angle),-sin(angle)), vec2(sin(angle),cos(angle)));
            vec += vec2(0.5);
            return vec;
        }
        
        float noise(vec2 coord){
            vec2 i = floor(coord);
            vec2 f = fract(coord);
                
            float a = rand(i);
            float b = rand(i + vec2(1.0, 0.0));
            float c = rand(i + vec2(0.0, 1.0));
            float d = rand(i + vec2(1.0, 1.0));
        
            vec2 cubic = f * f * (3.0 - 2.0 * f);
        
            return mix(a, b, cubic.x) + (c - a) * cubic.y * (1.0 - cubic.x) + (d - b) * cubic.x * cubic.y;
        }
        
        vec2 Hash2(vec2 p) {
            float r = 523.0*sin(dot(p, vec2(53.3158, 43.6143)));
            return vec2(fract(15.32354 * r), fract(17.25865 * r));
            
        }
        
        float cells(in vec2 p, in float numCells) {
            p *= numCells;
            float d = 1.0e10;
            for (int xo = -1; xo <= 1; xo++)
            {
                for (int yo = -1; yo <= 1; yo++)
                {
                    vec2 tp = floor(p) + vec2(float(xo), float(yo));
                    tp = p - tp - Hash2(mod(tp, numCells / TILES));
                    d = min(d, dot(tp, tp));
                }
            }
            return sqrt(d);
        }
        
        bool dither(vec2 uv1, vec2 uv2) {
            return mod(uv1.x+uv2.y,2.0/pixels) <= 1.0 / pixels;
        }
        
        vec2 spherify(vec2 uv) {
            vec2 centered= uv *2.0-1.0;
            float z = sqrt(1.0 - dot(centered.xy, centered.xy));
            vec2 sphere = centered/(z + 1.0);
            return sphere * 0.5+0.5;
        }
        

        void main() {
            vec2 pixelized = (floor(vUv.xy*pixels)/pixels) + 0.5;
	
            // cut out a circle
            // stepping over 0.5 instead of 0.49999 makes some pixels a little buggy
            float a = step(distance(pixelized, vec2(0.5)), .49999);
            
            // use dither val later to mix between colors
            bool dith = dither(vUv.xy, pixelized);
            
            pixelized = rotate(pixelized, rotation);
            
            // spherify has to go after dither
            pixelized = spherify(pixelized);
            
            // use two different sized cells for some variation
            float n = cells(pixelized - vec2(time * time_speed * 2.0, 0), 10.0);
            n *= cells(pixelized - vec2(time * time_speed * 1.0, 0), 20.0);
        
            
            // adjust cell value to get better looking stuff
            n*= 2.;
            n = clamp(n, 0.0, 1.0);
            if (dith || !should_dither) { // here we dither
                n *= 1.3;
            }
            
            // constrain values 4 possibilities and then choose color based on those
            float interpolate = floor(n * 3.0) / 3.0;
            vec4 col = texture(colorramp, vec2(interpolate, 0.0));
            
            gl_FragColor = vec4(col.rgb, a * col.a);
        }
    `,"fragmentShaderPlanet");function Kc(i=new ge(.39,.7),e=.1,t=.01,n=0,r=null){let s=r?`src/colorScheme/starPalette/${r}Palette.png`:"src/colorScheme/starPalette/orangePalette.png",o=new St().load(s);o.magFilter=He,o.minFilter=He;let a=new ke(1,1),c=new Le({uniforms:{pixels:{value:100},colorramp:{value:o},lightIntensity:{value:e},light_origin:{value:i},time_speed:{value:t},rotation:{value:Math.random()},seed:{value:Ge()?Math.random()*10:Math.random()*100},time:{value:0}},vertexShader:t_(),fragmentShader:n_(),transparent:!0});return new Ie(a,c)}l(Kc,"createStar");var i_=l(()=>`
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `,"vertexShader"),r_=l(()=>`
        varying vec3 vUv;
        uniform float pixels;
        uniform float time_speed;
        uniform float time;
        uniform float rotation;
        uniform vec4 color;
        bool should_dither = true;

        uniform float circle_amount;
        uniform float circle_size;
        uniform float scale;

        uniform float seed;
        float size = 4.0;
        int OCTAVES = 4;
        float TILES = 1.0;


        float rand(vec2 co){
            co = mod(co, vec2(1.0,1.0)*floor(size+0.5));
            return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }
        
        
        vec2 rotate(vec2 vec, float angle) {
            vec -=vec2(0.5);
            vec *= mat2(vec2(cos(angle),-sin(angle)), vec2(sin(angle),cos(angle)));
            vec += vec2(0.5);
            return vec;
        }
        
        float circle(vec2 uv) {
            float invert = 1.0 / circle_amount;
            
            if (mod(uv.y, invert*2.0) < invert) {
                uv.x += invert*0.5;
            }
            vec2 rand_co = floor(uv*circle_amount)/circle_amount;
            uv = mod(uv, invert)*circle_amount;
            
            float r = rand(rand_co);
            r = clamp(r, invert, 1.0 - invert);
            float circle = distance(uv, vec2(r));
            return smoothstep(circle, circle+0.5, invert * circle_size * rand(rand_co*1.5));
        }
        
        
        float noise(vec2 coord){
            vec2 i = floor(coord);
            vec2 f = fract(coord);
                
            float a = rand(i);
            float b = rand(i + vec2(1.0, 0.0));
            float c = rand(i + vec2(0.0, 1.0));
            float d = rand(i + vec2(1.0, 1.0));
        
            vec2 cubic = f * f * (3.0 - 2.0 * f);
        
            return mix(a, b, cubic.x) + (c - a) * cubic.y * (1.0 - cubic.x) + (d - b) * cubic.x * cubic.y;
        }
        
        float fbm(vec2 coord){
            float value = 0.0;
            float scl = 0.5;
        
            for(int i = 0; i < OCTAVES ; i++){
                value += noise(coord) * scl;
                coord *= 2.0;
                scl *= 0.5;
            }
            return value;
        }
        
        vec2 spherify(vec2 uv) {
            vec2 centered= uv *2.0-1.0;
            float z = sqrt(1.0 - dot(centered.xy, centered.xy));
            vec2 sphere = centered/(z + 1.0);
            return sphere * 0.5+0.5;
        }
        

        void main() {
            vec2 pixelized = (floor(vUv.xy*pixels)/pixels) + 0.5;
	
            vec2 uv = rotate(pixelized, rotation);

            // angle from centered uv's
            float angle = atan(uv.x - 0.5, uv.y - 0.5);
            float d = distance(pixelized, vec2(0.5));
            
            
            float c = 0.0;
            for(int i = 0; i < 15; i++) {
                float r = rand(vec2(float(i)));
                vec2 circleUV = vec2(d, angle);
                c += circle(circleUV*size -time * time_speed - (1.0/d) * 0.1 + r);
            }
            
            c *= 0.37 - d;
            c = step(0.07, c - d);
            
            gl_FragColor = vec4(color.rgb, c * color.a);
        }
    `,"fragmentShader");function Qc(i=.1,e=null){let t=e||new se(1,.6470588235294118,0,1),n=new ke(1.3,1.3),r=new Le({uniforms:{pixels:{value:200},color:{value:t},time_speed:{value:i},rotation:{value:Math.random()},seed:{value:Ge()?Math.random()*10:Math.random()*100},time:{value:0},circle_amount:{value:3},circle_size:{value:1.5},scale:{value:1}},vertexShader:i_(),fragmentShader:r_(),transparent:!0});return new Ie(n,r)}l(Qc,"createStarBlobLayer");var s_=l(()=>`
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `,"vertexShader"),o_=l(()=>`
        varying vec3 vUv;
        uniform float pixels;
        uniform float time_speed;
        uniform float time;
        uniform float rotation;
        uniform sampler2D colorramp;
        bool should_dither = true;

        uniform float storm_width;
        uniform float storm_dither_width;
        uniform float circle_amount;
        uniform float circle_scale;
        uniform float scale;

        uniform float seed;
        float size = 2.0;
        int OCTAVES = 4;
        float TILES = 1.0;


        float rand(vec2 co){
            co = mod(co, vec2(1.0,1.0)*floor(size+0.5));
            return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 15.5453 * seed);
        }
        
        
        vec2 rotate(vec2 vec, float angle) {
            vec -=vec2(0.5);
            vec *= mat2(vec2(cos(angle),-sin(angle)), vec2(sin(angle),cos(angle)));
            vec += vec2(0.5);
            return vec;
        }
        
        float circle(vec2 uv) {
            float invert = 1.0 / circle_amount;
            
            if (mod(uv.y, invert*2.0) < invert) {
                uv.x += invert*0.5;
            }
            vec2 rand_co = floor(uv*circle_amount)/circle_amount;
            uv = mod(uv, invert)*circle_amount;
            
            float r = rand(rand_co);
            r = clamp(r, invert, 1.0 - invert);
            float circle = distance(uv, vec2(r));
            return smoothstep(circle, circle+0.5, invert * circle_scale * rand(rand_co*1.5));
        }
        
        
        float noise(vec2 coord){
            vec2 i = floor(coord);
            vec2 f = fract(coord);
                
            float a = rand(i);
            float b = rand(i + vec2(1.0, 0.0));
            float c = rand(i + vec2(0.0, 1.0));
            float d = rand(i + vec2(1.0, 1.0));
        
            vec2 cubic = f * f * (3.0 - 2.0 * f);
        
            return mix(a, b, cubic.x) + (c - a) * cubic.y * (1.0 - cubic.x) + (d - b) * cubic.x * cubic.y;
        }
        
        float fbm(vec2 coord){
            float value = 0.0;
            float scl = 0.5;
        
            for(int i = 0; i < OCTAVES ; i++){
                value += noise(coord) * scl;
                coord *= 2.0;
                scl *= 0.5;
            }
            return value;
        }
        
        bool dither(vec2 uv1, vec2 uv2) {
            return mod(uv1.x+uv2.y,2.0/pixels) <= 1.0 / pixels;
        }
        
        vec2 spherify(vec2 uv) {
            vec2 centered= uv *2.0-1.0;
            float z = sqrt(1.0 - dot(centered.xy, centered.xy));
            vec2 sphere = centered/(z + 1.0);
            return sphere * 0.5+0.5;
        }
        

        void main() {
            vec2 pixelized = (floor(vUv.xy*pixels)/pixels) + 0.5;
	
            bool dith = dither(vUv.xy, pixelized);
	
            pixelized = rotate(pixelized, rotation);
            
            // counter rotation against rotation caused by the way uv's are made later
            vec2 uv = pixelized;//rotate(pixelized, -time  * time_speed);
            
            // angle from centered uv's
            float angle = atan(uv.x - 0.5, uv.y - 0.5) * 0.4;
            // distance from center
            float d = distance(pixelized, vec2(0.5));
            
            // we make uv circular here to have eternally outward moving stuff
            vec2 circleUV = vec2(d, angle);
            
            // two types of noise values
            float n = fbm(circleUV*size -time * time_speed);
            float nc = circle(circleUV*scale -time * time_speed + n);
            
            nc *= 1.5;
            float n2 = fbm(circleUV*size -time + vec2(100, 100));
            nc -= n2 * 0.1;
            
            // our alpha, default 0
            float a = 0.0;
            if (1.0 - d > nc) {
                // now we generate very thin strips of positive alpha if our noise has certain values and is close enough to center
                if (nc > storm_width - storm_dither_width + d && (dith || !should_dither)) {
                    a = 1.0;
                } else if (nc > storm_width + d) { // could use an or statement instead, but this looks more clear to me
                    a = 1.0;
                }
            }
            
            // use our two noise values to assign colors
            float interpolate = floor(n2 + nc);
            vec4 col = texture(colorramp, vec2(interpolate, 0.0));
            
            // final step to not have everything appear from the center
            a *= step(n2 * 0.25, d);
            
            gl_FragColor = vec4(col.rgb, a * col.a);
        }
    `,"fragmentShader");function jc(i=.05,e=.2,t=.07,n=null){let r=n?`src/colorScheme/starPalette/${n}Palette.png`:"src/colorScheme/starPalette/orangePalette.png",s=new St().load(r);s.magFilter=He,s.minFilter=He;let o=new ke(1.5,1.5),a=new Le({uniforms:{pixels:{value:200},colorramp:{value:s},time_speed:{value:i},rotation:{value:Math.random()},seed:{value:Ge()?Math.random()*10:Math.random()*100},time:{value:0},storm_width:{value:e},storm_dither_width:{value:t},circle_amount:{value:2},circle_scale:{value:1},scale:{value:1}},vertexShader:s_(),fragmentShader:o_(),transparent:!0});return new Ie(o,a)}l(jc,"createStarFlareLayer");var eu=l(()=>{let i=new it,e=Kc(),t=jc(),n=Qc();return t.position.z=.01,t.scale.set(1.2,1.2),n.position.z=-.01,n.scale.set(1.9,1.9),i.add(e),i.add(t),i.add(n),i},"createStarPlanet");function cr(i,e){return Math.floor(Math.random()*(e-i+1)+i)}l(cr,"rand");function Ge(){return Math.random()>.5}l(Ge,"flip");function La(){var i=Math.random(),e=Math.random(),t=2*Math.PI*i,n=Math.acos(2*e-1),r=0+1*Math.sin(n)*Math.cos(t),s=0+1*Math.sin(n)*Math.sin(t),o=0+1*Math.cos(n);return{x:r,y:s,z:o}}l(La,"randomPointOnSphere");function Ua(i){switch(i){case"No atmosphere":return Jc();case"Ice Planet":return Gc();case"Gas giant 1":return Bc();case"Gas giant 2":return Vc();case"Asteroid":return Rc();case"Star":return eu();case"Lava Planet":return Zc();case"Dry Planet":return Pc();case"Earth Planet":return Uc()}}l(Ua,"generatePlanetByType");var ys={seedValue:1,planetTypes:"Star",planetOptions:["No atmosphere","Ice Planet","Gas giant 1","Gas giant 2","Asteroid","Star","Lava Planet","Dry Planet","Earth Planet"],seed:l(()=>{ys.seedValue=Ge()?Math.random()*10:Math.random()*100},"seed")};var tu=l((i,e,t,n)=>new Ct(i,e,t,n),"createCamera");function nu(i){let e=new it,t;for(let n=0;n<i;n++)if(Ge()){let s=new St().load("./src/stars/stars-special.png");s.magFilter=He,s.minFilter=He,s.repeat.x=1/6,s.offset.x=Math.floor(cr(1,6)%6)*25/150;let o=new Fi({map:s,color:Ge()?"#ffef9e":"#ffffff",transparent:!0,opacity:cr(.1,1)}),a=new or(o);a.scale.set(.05,.05);let c=La();a.position.z=c.z,a.position.y=c.y,a.position.x=c.x,e.add(a)}else{let s=new St().load("./src/stars/stars.png");s.magFilter=He,s.minFilter=He,s.repeat.x=1/17,s.offset.x=Math.floor(cr(1,17)%9)*9/144;let o=new Fi({map:s,color:Ge()?"#ffef9e":"#ffffff",transparent:!0,opacity:cr(.1,1)}),a=new or(o);a.scale.set(.03,.03);let c=La();a.position.z=c.z,a.position.y=c.y,a.position.x=c.x,e.add(a)}return e}l(nu,"createStars");function a_(){let i=document.querySelector("#root"),e=i.clientWidth/i.clientHeight,t=Xc(),n=qc(),r=tu(75,e,.1,1e5),s=0,o=0,a=!1;i.addEventListener("mousedown",g=>{a=!0},!1),i.addEventListener("mouseup",g=>{a=!1},!1),i.addEventListener("mousemove",g=>{g.preventDefault(),s+=Math.abs(g.movementX),o+=g.movementX},!1);let c=new it;c.add(Ua(ys.planetOptions[5])),t.add(c);let u=1e-5,h=Yc();h.setSize(i.clientWidth,i.clientHeight),h.setPixelRatio(window.devicePixelRatio);let d=nu(1e3);t.add(d),document.getElementById("root").appendChild(h.domElement),r.position.z=1;function f(){requestAnimationFrame(f),c.children.forEach(g=>{g.children.forEach(_=>{_.material.uniforms.time&&(_.material.uniforms.time.value=n.getElapsedTime(),_.material.uniforms.time_speed&&(_.material.uniforms.time_speed.value+=a?o*.01:0))})}),r.updateProjectionMatrix(),d.rotateY(u),d.rotateX(u),d.rotateZ(u),h.render(t,r),o=s=0}return l(f,"animate"),f(),{change:l(g=>{c.children.pop().remove(),c.add(Ua(g))},"change"),planet:ys.planetOptions}}l(a_,"initScene");function l_(){return a_()}l(l_,"default");export{l_ as default};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
