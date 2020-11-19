import{c as Z}from"./common/_commonjsHelpers-6d0ad781.js";function _e(n){for(var e=5381,r=n.length;r;)e=e*33^n.charCodeAt(--r);return e>>>0}var xe=_e,J=G;function G(n){k.length||R(),k[k.length]=n}var k=[],R,w=0,ke=1024;function Y(){for(;w<k.length;){var n=w;if(w=w+1,k[n].call(),w>ke){for(var e=0,r=k.length-w;e<r;e++)k[e]=k[e+w];k.length-=w,w=0}}k.length=0,w=0}var Q=typeof Z!="undefined"?Z:self,$=Q.MutationObserver||Q.WebKitMutationObserver;typeof $=="function"?R=we(Y):R=ee(Y),G.requestFlush=R;function we(n){var e=1,r=new $(n),t=document.createTextNode("");return r.observe(t,{characterData:!0}),function(){e=-e,t.data=e}}function ee(n){return function(){var r=setTimeout(i,0),t=setInterval(i,50);function i(){clearTimeout(r),clearInterval(t),n()}}}G.makeRequestCallFromTimer=ee;var I=[],D=[],Pe=J.makeRequestCallFromTimer(Ce);function Ce(){if(D.length)throw D.shift()}var Ee=q;function q(n){var e;I.length?e=I.pop():e=new re,e.task=n,J(e)}function re(){this.task=null}re.prototype.call=function(){try{this.task.call()}catch(n){q.onerror?q.onerror(n):(D.push(n),Pe())}finally{this.task=null,I[I.length]=this}};function M(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?M=function(e){return typeof e}:M=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(n)}function Me(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function Be(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{},t=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable}))),t.forEach(function(i){Me(n,i,r[i])})}return n}function te(n){return Ae(n)||We(n)||je()}function Ae(n){if(Array.isArray(n)){for(var e=0,r=new Array(n.length);e<n.length;e++)r[e]=n[e];return r}}function We(n){if(Symbol.iterator in Object(n)||Object.prototype.toString.call(n)==="[object Arguments]")return Array.from(n)}function je(){throw new TypeError("Invalid attempt to spread non-iterable instance")}var Re=/([A-Z])/g,Ie=function(e){return"-".concat(e.toLowerCase())},Te=function(e){var r=e.replace(Re,Ie);return r[0]==="m"&&r[1]==="s"&&r[2]==="-"?"-".concat(r):r},T={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridColumn:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};function ze(n,e){return n+e.charAt(0).toUpperCase()+e.substring(1)}var Fe=["Webkit","ms","Moz","O"];Object.keys(T).forEach(function(n){Fe.forEach(function(e){T[ze(e,n)]=T[n]})});var ne=function(e,r){return typeof r=="number"?T[e]?""+r:r+"px":""+r},Ne=function(e,r){return De(ne(e,r))},W=function(e,r){return xe(e).toString(36)},Ge=function(e){return W(JSON.stringify(e))},De=function(e){return e[e.length-10]==="!"&&e.slice(-11)===" !important"?e:"".concat(e," !important")},ie=typeof Map!="undefined",H=function(){function n(){this.elements={},this.keyOrder=[]}var e=n.prototype;return e.forEach=function(t){for(var i=0;i<this.keyOrder.length;i++)t(this.elements[this.keyOrder[i]],this.keyOrder[i])},e.set=function(t,i,a){if(!this.elements.hasOwnProperty(t))this.keyOrder.push(t);else if(a){var o=this.keyOrder.indexOf(t);this.keyOrder.splice(o,1),this.keyOrder.push(t)}if(i==null){this.elements[t]=i;return}if(ie&&i instanceof Map||i instanceof n){var s=this.elements.hasOwnProperty(t)?this.elements[t]:new n;i.forEach(function(m,c){s.set(c,m,a)}),this.elements[t]=s;return}if(!Array.isArray(i)&&M(i)==="object"){for(var u=this.elements.hasOwnProperty(t)?this.elements[t]:new n,f=Object.keys(i),l=0;l<f.length;l+=1)u.set(f[l],i[f[l]],a);this.elements[t]=u;return}this.elements[t]=i},e.get=function(t){return this.elements[t]},e.has=function(t){return this.elements.hasOwnProperty(t)},e.addStyleType=function(t){var i=this;if(ie&&t instanceof Map||t instanceof n)t.forEach(function(s,u){i.set(u,s,!0)});else for(var a=Object.keys(t),o=0;o<a.length;o++)this.set(a[o],t[a[o]],!0)},n}();function v(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function b(n,e){return e={exports:{}},n(e,e.exports),e.exports}function qe(n){return n&&n.default||n}var V=b(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;function r(t){return t.charAt(0).toUpperCase()+t.slice(1)}});v(V);var ae=b(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=t(V);function t(a){return a&&a.__esModule?a:{default:a}}function i(a,o,s){if(a.hasOwnProperty(o)){for(var u={},f=a[o],l=(0,r.default)(o),m=Object.keys(s),c=0;c<m.length;c++){var h=m[c];if(h===o)for(var g=0;g<f.length;g++)u[f[g]+l]=s[o];u[h]=s[h]}return u}return s}});v(ae);var oe=b(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;function r(t,i,a,o,s){for(var u=0,f=t.length;u<f;++u){var l=t[u](i,a,o,s);if(l)return l}}});v(oe);var ue=b(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t;function r(i,a){i.indexOf(a)===-1&&i.push(a)}function t(i,a){if(Array.isArray(a))for(var o=0,s=a.length;o<s;++o)r(i,a[o]);else r(i,a)}});v(ue);var fe=b(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;function r(t){return t instanceof Object&&!Array.isArray(t)}});v(fe);var He=b(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=o(ae),t=o(oe),i=o(ue),a=o(fe);function o(u){return u&&u.__esModule?u:{default:u}}function s(u){var f=u.prefixMap,l=u.plugins;return function m(c){for(var h in c){var g=c[h];if((0,a.default)(g))c[h]=m(g);else if(Array.isArray(g)){for(var p=[],y=0,_=g.length;y<_;++y){var E=(0,t.default)(l,h,g[y],c,f);(0,i.default)(p,E||g[y])}p.length>0&&(c[h]=p)}else{var A=(0,t.default)(l,h,g,c,f);A&&(c[h]=A),c=(0,r.default)(f,h,c)}}return c}}}),Ve=v(He),Le=b(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;function r(t,i){if(typeof i=="string"&&i==="text")return["-webkit-text","text"]}}),Ue=v(Le),P=b(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t;var r=/-webkit-|-moz-|-ms-/;function t(i){return typeof i=="string"&&r.test(i)}n.exports=e.default});v(P);var Ke=b(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var r=t(P);function t(o){return o&&o.__esModule?o:{default:o}}var i=["-webkit-","-moz-",""];function a(o,s){if(typeof s=="string"&&!(0,r.default)(s)&&s.indexOf("calc(")>-1)return i.map(function(u){return s.replace(/calc\(/g,u+"calc(")})}}),Xe=v(Ke),Ze=b(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var r=t(P);function t(o){return o&&o.__esModule?o:{default:o}}var i=["-webkit-",""];function a(o,s){if(typeof s=="string"&&!(0,r.default)(s)&&s.indexOf("cross-fade(")>-1)return i.map(function(u){return s.replace(/cross-fade\(/g,u+"cross-fade(")})}}),Je=v(Ze),Ye=b(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=["-webkit-","-moz-",""],t={"zoom-in":!0,"zoom-out":!0,grab:!0,grabbing:!0};function i(a,o){if(a==="cursor"&&t.hasOwnProperty(o))return r.map(function(s){return s+o})}}),Qe=v(Ye),$e=b(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var r=t(P);function t(o){return o&&o.__esModule?o:{default:o}}var i=["-webkit-",""];function a(o,s){if(typeof s=="string"&&!(0,r.default)(s)&&s.indexOf("filter(")>-1)return i.map(function(u){return s.replace(/filter\(/g,u+"filter(")})}}),er=v($e),rr=b(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t;var r={flex:["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex","flex"],"inline-flex":["-webkit-inline-box","-moz-inline-box","-ms-inline-flexbox","-webkit-inline-flex","inline-flex"]};function t(i,a){if(i==="display"&&r.hasOwnProperty(a))return r[a]}}),tr=v(rr),nr=b(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r={"space-around":"distribute","space-between":"justify","flex-start":"start","flex-end":"end"},t={alignContent:"msFlexLinePack",alignSelf:"msFlexItemAlign",alignItems:"msFlexAlign",justifyContent:"msFlexPack",order:"msFlexOrder",flexGrow:"msFlexPositive",flexShrink:"msFlexNegative",flexBasis:"msFlexPreferredSize"},i={auto:"1 1 auto",inherit:"inherit",initial:"0 1 auto",none:"0 0 auto",unset:"unset"},a=/^\d+(\.\d+)?$/;function o(s,u,f){if(Object.prototype.hasOwnProperty.call(t,s)&&(f[t[s]]=r[u]||u),s==="flex"){if(Object.prototype.hasOwnProperty.call(i,u)){f.msFlex=i[u];return}if(a.test(u)){f.msFlex=u+" 1 0%";return}var l=u.split(/\s/);switch(l.length){case 1:f.msFlex="1 1 "+u;return;case 2:a.test(l[1])?f.msFlex=l[0]+" "+l[1]+" 0%":f.msFlex=l[0]+" 1 "+l[1];return;default:f.msFlex=u}}}}),ir=v(nr),ar=b(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r={"space-around":"justify","space-between":"justify","flex-start":"start","flex-end":"end","wrap-reverse":"multiple",wrap:"multiple"},t={alignItems:"WebkitBoxAlign",justifyContent:"WebkitBoxPack",flexWrap:"WebkitBoxLines",flexGrow:"WebkitBoxFlex"};function i(a,o,s){a==="flexDirection"&&typeof o=="string"&&(o.indexOf("column")>-1?s.WebkitBoxOrient="vertical":s.WebkitBoxOrient="horizontal",o.indexOf("reverse")>-1?s.WebkitBoxDirection="reverse":s.WebkitBoxDirection="normal"),t.hasOwnProperty(a)&&(s[t[a]]=r[o]||o)}}),or=v(ar),ur=b(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=t(P);function t(s){return s&&s.__esModule?s:{default:s}}var i=["-webkit-","-moz-",""],a=/linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;function o(s,u){if(typeof u=="string"&&!(0,r.default)(u)&&a.test(u))return i.map(function(f){return u.replace(a,function(l){return f+l})})}}),fr=v(ur),lr=b(function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function u(f,l){var m=[],c=!0,h=!1,g=void 0;try{for(var p=f[Symbol.iterator](),y;!(c=(y=p.next()).done)&&!(m.push(y.value),l&&m.length===l);c=!0);}catch(_){h=!0,g=_}finally{try{!c&&p.return&&p.return()}finally{if(h)throw g}}return m}return function(f,l){if(Array.isArray(f))return f;if(Symbol.iterator in Object(f))return u(f,l);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.default=s;function t(u){return typeof u=="number"&&!isNaN(u)}var i=["center","end","start","stretch"],a={"inline-grid":["-ms-inline-grid","inline-grid"],grid:["-ms-grid","grid"]},o={alignSelf:function(f,l){i.indexOf(f)>-1&&(l.msGridRowAlign=f)},gridColumn:function(f,l){if(t(f))l.msGridColumn=f;else{var m=f.split("/").map(function(p){return+p}),c=r(m,2),h=c[0],g=c[1];o.gridColumnStart(h,l),o.gridColumnEnd(g,l)}},gridColumnEnd:function(f,l){var m=l.msGridColumn;t(f)&&t(m)&&(l.msGridColumnSpan=f-m)},gridColumnStart:function(f,l){t(f)&&(l.msGridColumn=f)},gridRow:function(f,l){if(t(f))l.msGridRow=f;else{var m=f.split("/").map(function(p){return+p}),c=r(m,2),h=c[0],g=c[1];o.gridRowStart(h,l),o.gridRowEnd(g,l)}},gridRowEnd:function(f,l){var m=l.msGridRow;t(f)&&t(m)&&(l.msGridRowSpan=f-m)},gridRowStart:function(f,l){t(f)&&(l.msGridRow=f)},gridTemplateColumns:function(f,l){l.msGridColumns=f},gridTemplateRows:function(f,l){l.msGridRows=f},justifySelf:function(f,l){i.indexOf(f)>-1&&(l.msGridColumnAlign=f)}};function s(u,f,l){if(u==="display"&&f in a)return a[f];if(u in o){var m=o[u];m(f,l)}}}),sr=v(lr),dr=b(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var r=t(P);function t(o){return o&&o.__esModule?o:{default:o}}var i=["-webkit-",""];function a(o,s){if(typeof s=="string"&&!(0,r.default)(s)&&s.indexOf("image-set(")>-1)return i.map(function(u){return s.replace(/image-set\(/g,u+"image-set(")})}}),cr=v(dr),mr=b(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t;var r={marginBlockStart:["WebkitMarginBefore"],marginBlockEnd:["WebkitMarginAfter"],marginInlineStart:["WebkitMarginStart","MozMarginStart"],marginInlineEnd:["WebkitMarginEnd","MozMarginEnd"],paddingBlockStart:["WebkitPaddingBefore"],paddingBlockEnd:["WebkitPaddingAfter"],paddingInlineStart:["WebkitPaddingStart","MozPaddingStart"],paddingInlineEnd:["WebkitPaddingEnd","MozPaddingEnd"],borderBlockStart:["WebkitBorderBefore"],borderBlockStartColor:["WebkitBorderBeforeColor"],borderBlockStartStyle:["WebkitBorderBeforeStyle"],borderBlockStartWidth:["WebkitBorderBeforeWidth"],borderBlockEnd:["WebkitBorderAfter"],borderBlockEndColor:["WebkitBorderAfterColor"],borderBlockEndStyle:["WebkitBorderAfterStyle"],borderBlockEndWidth:["WebkitBorderAfterWidth"],borderInlineStart:["WebkitBorderStart","MozBorderStart"],borderInlineStartColor:["WebkitBorderStartColor","MozBorderStartColor"],borderInlineStartStyle:["WebkitBorderStartStyle","MozBorderStartStyle"],borderInlineStartWidth:["WebkitBorderStartWidth","MozBorderStartWidth"],borderInlineEnd:["WebkitBorderEnd","MozBorderEnd"],borderInlineEndColor:["WebkitBorderEndColor","MozBorderEndColor"],borderInlineEndStyle:["WebkitBorderEndStyle","MozBorderEndStyle"],borderInlineEndWidth:["WebkitBorderEndWidth","MozBorderEndWidth"]};function t(i,a,o){if(Object.prototype.hasOwnProperty.call(r,i))for(var s=r[i],u=0,f=s.length;u<f;++u)o[s[u]]=a}}),hr=v(mr),gr=b(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;function r(t,i){if(t==="position"&&i==="sticky")return["-webkit-sticky","sticky"]}}),pr=v(gr),vr=b(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var r=["-webkit-","-moz-",""],t={maxHeight:!0,maxWidth:!0,width:!0,height:!0,columnWidth:!0,minWidth:!0,minHeight:!0},i={"min-content":!0,"max-content":!0,"fill-available":!0,"fit-content":!0,"contain-floats":!0};function a(o,s){if(t.hasOwnProperty(o)&&i.hasOwnProperty(s))return r.map(function(u){return u+s})}}),br=v(vr),yr=/[A-Z]/g,Sr=/^ms-/,L={};function Or(n){return"-"+n.toLowerCase()}function _r(n){if(L.hasOwnProperty(n))return L[n];var e=n.replace(yr,Or);return L[n]=Sr.test(e)?"-"+e:e}var xr=Object.freeze({default:_r}),kr=qe(xr),le=b(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=t(kr);function t(a){return a&&a.__esModule?a:{default:a}}function i(a){return(0,r.default)(a)}n.exports=e.default});v(le);var wr=b(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=f;var r=a(le),t=a(P),i=a(V);function a(l){return l&&l.__esModule?l:{default:l}}var o={transition:!0,transitionProperty:!0,WebkitTransition:!0,WebkitTransitionProperty:!0,MozTransition:!0,MozTransitionProperty:!0},s={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-"};function u(l,m){if((0,t.default)(l))return l;for(var c=l.split(/,(?![^()]*(?:\([^()]*\))?\))/g),h=0,g=c.length;h<g;++h){var p=c[h],y=[p];for(var _ in m){var E=(0,r.default)(_);if(p.indexOf(E)>-1&&E!=="order")for(var A=m[_],N=0,Oe=A.length;N<Oe;++N)y.unshift(p.replace(E,s[A[N]]+E))}c[h]=y.join(",")}return c.join(",")}function f(l,m,c,h){if(typeof m=="string"&&o.hasOwnProperty(l)){var g=u(m,h),p=g.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(_){return!/-moz-|-ms-/.test(_)}).join(",");if(l.indexOf("Webkit")>-1)return p;var y=g.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(_){return!/-webkit-|-ms-/.test(_)}).join(",");return l.indexOf("Moz")>-1?y:(c["Webkit"+(0,i.default)(l)]=p,c["Moz"+(0,i.default)(l)]=y,g)}}}),Pr=v(wr),d=["Webkit"],U=["Moz"],z=["ms"],O=["Webkit","Moz"],S=["Webkit","ms"],j=["Webkit","Moz","ms"],Cr={plugins:[Ue,Xe,Je,Qe,er,tr,ir,or,fr,sr,cr,hr,pr,br,Pr],prefixMap:{transform:S,transformOrigin:S,transformOriginX:S,transformOriginY:S,backfaceVisibility:d,perspective:d,perspectiveOrigin:d,transformStyle:d,transformOriginZ:d,animation:d,animationDelay:d,animationDirection:d,animationFillMode:d,animationDuration:d,animationIterationCount:d,animationName:d,animationPlayState:d,animationTimingFunction:d,appearance:O,userSelect:j,fontKerning:d,textEmphasisPosition:d,textEmphasis:d,textEmphasisStyle:d,textEmphasisColor:d,boxDecorationBreak:d,clipPath:d,maskImage:d,maskMode:d,maskRepeat:d,maskPosition:d,maskClip:d,maskOrigin:d,maskSize:d,maskComposite:d,mask:d,maskBorderSource:d,maskBorderMode:d,maskBorderSlice:d,maskBorderWidth:d,maskBorderOutset:d,maskBorderRepeat:d,maskBorder:d,maskType:d,textDecorationStyle:O,textDecorationSkip:O,textDecorationLine:O,textDecorationColor:O,filter:d,fontFeatureSettings:O,breakAfter:j,breakBefore:j,breakInside:j,columnCount:O,columnFill:O,columnGap:O,columnRule:O,columnRuleColor:O,columnRuleStyle:O,columnRuleWidth:O,columns:O,columnSpan:O,columnWidth:O,writingMode:S,flex:S,flexBasis:d,flexDirection:S,flexGrow:d,flexFlow:S,flexShrink:d,flexWrap:S,alignContent:d,alignItems:d,alignSelf:d,justifyContent:d,order:d,transitionDelay:d,transitionDuration:d,transitionProperty:d,transitionTimingFunction:d,backdropFilter:d,scrollSnapType:S,scrollSnapPointsX:S,scrollSnapPointsY:S,scrollSnapDestination:S,scrollSnapCoordinate:S,shapeImageThreshold:d,shapeImageMargin:d,shapeImageOutside:d,hyphens:j,flowInto:S,flowFrom:S,regionFragment:S,textOrientation:d,boxSizing:U,textAlignLast:U,tabSize:U,wrapFlow:z,wrapThrough:z,wrapMargin:z,touchAction:z,textSizeAdjust:S,borderImage:d,borderImageOutset:d,borderImageRepeat:d,borderImageSlice:d,borderImageSource:d,borderImageWidth:d}},Er=Ve(Cr),se=[function(e,r,t){return e[0]!==":"?null:t(r+e)},function(e,r,t){if(e[0]!=="@")return null;var i=t(r);return["".concat(e,"{").concat(i.join(""),"}")]}],K=function n(e,r,t,i,a){for(var o=new H,s=0;s<r.length;s++)o.addStyleType(r[s]);var u=new H,f=[];o.forEach(function(m,c){var h=t.some(function(g){var p=g(c,e,function(y){return n(y,[m],t,i,a)});if(p!=null)return Array.isArray(p)?f.push.apply(f,te(p)):(console.warn("WARNING: Selector handlers should return an array of rules.Returning a string containing multiple rules is deprecated.",g),f.push("@media all {".concat(p,"}"))),!0});h||u.set(c,m,!0)});var l=Ar(e,u,i,a,t);return l&&f.unshift(l),f},Mr=function(e,r,t){if(!r)return;for(var i=Object.keys(r),a=0;a<i.length;a++){var o=i[a];e.has(o)&&e.set(o,r[o](e.get(o),t),!1)}},de=function(e,r,t){return"".concat(Te(e),":").concat(t(e,r),";")},Br=function(e,r){return e[r]=!0,e},Ar=function(e,r,t,i,a){Mr(r,t,a);var o=Object.keys(r.elements).reduce(Br,Object.create(null)),s=Er(r.elements),u=Object.keys(s);if(u.length!==r.keyOrder.length){for(var f=0;f<u.length;f++)if(!o[u[f]]){var l=void 0;if(u[f][0]==="W"?l=u[f][6].toLowerCase()+u[f].slice(7):u[f][1]==="o"?l=u[f][3].toLowerCase()+u[f].slice(4):l=u[f][2].toLowerCase()+u[f].slice(3),l&&o[l]){var m=r.keyOrder.indexOf(l);r.keyOrder.splice(m,0,u[f])}else r.keyOrder.unshift(u[f])}}for(var c=i===!1?ne:Ne,h=[],g=0;g<r.keyOrder.length;g++){var p=r.keyOrder[g],y=s[p];if(Array.isArray(y))for(var _=0;_<y.length;_++)h.push(de(p,y[_],c));else h.push(de(p,y,c))}return h.length?"".concat(e,"{").concat(h.join(""),"}"):""},x=null,Wr=function(e){if(x==null&&(x=document.querySelector("style[data-aphrodite]"),x==null)){var r=document.head||document.getElementsByTagName("head")[0];x=document.createElement("style"),x.type="text/css",x.setAttribute("data-aphrodite",""),r.appendChild(x)}var t=x.styleSheet||x.sheet;if(t.insertRule){var i=t.cssRules.length;e.forEach(function(a){try{t.insertRule(a,i),i+=1}catch(o){}})}else x.innerText=(x.innerText||"")+e.join("")},X={fontFamily:function n(e){if(Array.isArray(e)){var r={};return e.forEach(function(t){r[n(t)]=!0}),Object.keys(r).join(",")}else return M(e)==="object"?(me(e.src,"@font-face",[e],!1),'"'.concat(e.fontFamily,'"')):e},animationName:function n(e,r){if(Array.isArray(e))return e.map(function(a){return n(a,r)}).join(",");if(M(e)==="object"){var t="keyframe_".concat(Ge(e)),i="@keyframes ".concat(t,"{");return e instanceof H?e.forEach(function(a,o){i+=K(o,[a],r,X,!1).join("")}):Object.keys(e).forEach(function(a){i+=K(a,[e[a]],r,X,!1).join("")}),i+="}",ce(t,[i]),t}else return e}},C={},F=[],B=!1,ce=function(e,r){var t;if(C[e])return;if(!B){if(typeof document=="undefined")throw new Error("Cannot automatically buffer without a document");B=!0,Ee(pe)}(t=F).push.apply(t,te(r)),C[e]=!0},me=function(e,r,t,i){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:[];if(C[e])return;var o=K(r,t,a,X,i);ce(e,o)},he=function(){F=[],C={},B=!1,x=null},jr=function(e){delete C[e]},Rr=function(){if(B)throw new Error("Cannot buffer while already buffering");B=!0},ge=function(){B=!1;var e=F;return F=[],e},Ir=function(){return ge().join("")},pe=function(){var e=ge();e.length>0&&Wr(e)},Tr=function(){return Object.keys(C)},zr=function(e){e.forEach(function(r){C[r]=!0})},Fr=function(e){return"_definition"in e&&"_name"in e&&"_len"in e},Nr=function n(e,r,t,i){for(var a=0;a<e.length;a+=1)if(e[a])if(Array.isArray(e[a]))i+=n(e[a],r,t,i);else if(Fr(e[a]))r.push(e[a]._name),t.push(e[a]._definition),i+=e[a]._len;else throw new Error("Invalid Style Definition: Styles should be defined using the StyleSheet.create method.");return i},ve=function(e,r,t){var i=[],a=[],o=Nr(r,i,a,0);if(i.length===0)return"";var s;return s=i.length===1?"_".concat(i[0]):"_".concat(W(i.join())).concat((o%36).toString(36)),me(s,".".concat(s),a,e,t),s},Gr=function(e,r){return"".concat(r,"_").concat(W(e))},Dr=function(){return W},be=Dr(),qr={create:function(e){for(var r={},t=Object.keys(e),i=0;i<t.length;i+=1){var a=t[i],o=e[a],s=JSON.stringify(o);r[a]={_len:s.length,_name:be(s,a),_definition:o}}return r},rehydrate:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];zr(e)}},Hr=typeof window!="undefined"?null:{renderStatic:function(e){he(),Rr();var r=e(),t=Ir();return{html:r,css:{content:t,renderedClassNames:Tr()}}}},Vr=null;function ye(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:se;return{StyleSheet:Be({},qr,{extend:function(t){var i=t.map(function(a){return a.selectorHandler}).filter(function(a){return a});return ye(n,e.concat(i))}}),StyleSheetServer:Hr,StyleSheetTestUtils:Vr,minify:function(t){be=t?W:Gr},css:function(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return ve(n,i,e)},flushToStyleTag:pe,injectAndGetClassName:ve,defaultSelectorHandlers:se,reset:he,resetInjectedStyle:jr}}var Lr=!0,Se=ye(Lr),Ur=Se.StyleSheet,Kr=Se.css;export{Ur as StyleSheet,Kr as css};
