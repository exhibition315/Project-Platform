/*! For license information please see Main.c0e14db2.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkproject_platform=self.webpackChunkproject_platform||[]).push([[12],{1835:(e,t,n)=>{n.d(t,{h:()=>w,_:()=>b});var i=n(4942),r=n(1002),a=n(9669),o=n.n(a),c=n(5349),l=n(3144),s=n(5671),u=n(136),p=n(2963),d=n(1120);function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,d.Z)(e);if(t){var r=(0,d.Z)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return(0,p.Z)(this,n)}}var m=function(e){(0,u.Z)(n,e);var t=f(n);function n(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(0,s.Z)(this,n),(e=t.call(this,r)).code=i,e}return(0,l.Z)(n)}((0,n(2407).Z)(Error));function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=o().CancelToken,y=o().create({withCredentials:!1,baseURL:"/api",timeout:6e4}),v=g.source();y.interceptors.response.use((function(e){var t,n,i,a;return"object"===(0,r.Z)(e.data)&&(null!==(t=e.data)&&void 0!==t&&t.code||null!==(n=e.data)&&void 0!==n&&n.message)?"200"===(null===(i=e.data)||void 0===i?void 0:i.code)||null!==(a=e.data)&&void 0!==a&&a.content?e.data:(v.cancel(c.L6),v=g.source(),Promise.reject(new m(e.data.code,e.data.message))):Promise.reject(new m("Unknown Error Code","Unknown Error Message"))}),(function(e){return o().isCancel(e)?Promise.reject(new m("API Canceled",e.message)):Promise.reject(new m(e.message,e.message))}));const k={get:function(e,t,n){return y.get(e,{cancelToken:v.token,headers:x({},n),params:t})},post:function(e,t,n,i){return y.post(e,t,x({cancelToken:v.token,headers:x({},n)},i))},put:function(e,t,n,i){return y.put(e,t,x({cancelToken:v.token,headers:x({},n)},i))},delete:function(e,t,n){return y.delete(e,{cancelToken:v.token,headers:x({},t),data:n})}};var b={get:function(e,t){return k.get(e,t).then((function(e){return e.content}))},getWithParam:function(e,t){return k.get("".concat(e,"/").concat(t)).then((function(e){return e.content}))}},w={getProjects:"/get-projects",getProject:"/get-project",getProjectDetail:"/get-project-detail"}},7934:(e,t,n)=>{n.d(t,{qE:()=>u,w6:()=>s,_6:()=>l});var i=n(168),r=n(586),a=n(7044),o=n(8337);var c,l=r.ZP.div.withConfig({displayName:"styles__EditContainer"})(["display:flex;"]),s=(0,r.ZP)(a.Y).withConfig({displayName:"styles__EditButton"})(["height:46px;padding:0 24px;margin-right:16px;::before{content:'';background-image:url(",");"," margin-right:12px;}",""],"/assets/edit-icon.dd567d9c.svg",(0,o.h)("21px","20px","center","contain"),(function(e){return e.theme.mobile(c||(c=(0,i.Z)(["\n    display: none;\n  "])))})),u=r.ZP.div.withConfig({displayName:"styles__Avatar"})(["min-width:46px;min-height:46px;background-image:url(",");"," border-radius:50%;cursor:pointer;"],"/assets/avatar-icon.8dd99723.svg",(0,o.h)("46px","46px","center","contain"))},1577:(e,t,n)=>{n.d(t,{Z:()=>_});var i=n(7294),r=n(5977),a=n(168),o=n(586),c=n(7044),l=n(2484),s=n(8337);var u,p,d,f=o.ZP.div.withConfig({displayName:"styles__SearchContainer"})(["display:flex;",""],(function(e){return e.theme.mobile(u||(u=(0,a.Z)(["\n    position: absolute;\n    right: 16px;\n  "])))})),m=o.ZP.input.withConfig({displayName:"styles__SearchInput"})(["width:482px;background-color:",";padding:12px 24px;border-radius:12px;::placeholder{color:",";}"," ",""],l.IW,l.kM,(function(e){return e.theme.tablet(p||(p=(0,a.Z)(["\n    width: 242px;\n  "])))}),(function(e){return e.theme.mobile(d||(d=(0,a.Z)(["\n    width: 220px;\n  "])))})),h=(0,o.ZP)(c.Y).withConfig({displayName:"styles__SearchButton"})(["width:46px;height:46px;margin-left:8px;::before{content:'';background-image:url(",");","}"],"/assets/search-icon.a468c05b.svg",(0,s.h)("17px","18px","center","contain"));const x=function(){return i.createElement(f,null,i.createElement(m,{placeholder:"搜尋視覺或專案"}),i.createElement(h,{onClick:function(){}}))};var g=n(7934);const y=function(){var e=(0,r.k6)();return i.createElement(g._6,null,i.createElement(g.w6,{onClick:function(){e.push("/edit")}},"投稿 / 提案"),i.createElement(g.qE,null))};var v,k,b,w=o.ZP.div.withConfig({displayName:"styles__HeaderContainer"})(["position:relative;display:flex;justify-content:space-between;align-items:center;height:102px;min-height:102px;padding:0 40px;background-color:",";box-shadow:0px 4px 3px ",";"," ",""],l.YZ,l.c0,(function(e){return e.theme.tablet(v||(v=(0,a.Z)(["\n    padding: 0 16px;\n  "])))}),(function(e){return e.theme.mobile(k||(k=(0,a.Z)(["\n    height: 122px;\n    align-items: flex-end;\n    padding-bottom: 8px;\n  "])))})),C=o.ZP.div.withConfig({displayName:"styles__HeaderTitleImg"})(["background-image:url(",");",";cursor:pointer;",""],"/assets/header-title.2ea52368.svg",(0,s.h)("174px","63px","center","contain"),(function(e){return e.theme.mobile(b||(b=(0,a.Z)(["\n    position: absolute;\n    width: 120px;\n    height: 44px;\n    top: 8px;\n    left: 50%;\n    transform: translateX(-50%);\n  "])))}));const _=function(){var e=(0,r.k6)();return i.createElement(w,null,i.createElement(C,{onClick:function(){e.push("/")}}),i.createElement(x,null),i.createElement(y,null))}},7897:(e,t,n)=>{n.r(t),n.d(t,{default:()=>le});var i=n(7294),r=n(8216),a=n(1577),o=n(6096),c=n(5349),l=n(586),s=n(2484),u=l.ZP.div.withConfig({displayName:"styles__SwitchContainer"})(["display:flex;align-items:center;width:228px;height:36px;background-color:",";border-radius:8px;font-size:14px;"],s.Cj),p=l.ZP.button.withConfig({displayName:"styles__SwitchButton"})(["width:114px;height:100%;border-radius:8px;cursor:pointer;background-color:",";color:",";"],(function(e){return e.active?s.T7:s.Cj}),(function(e){return e.active?s.Cj:s.T7}));const d=function(){var e=(0,r.I0)(),t=(0,r.v9)((function(e){return e.main})).project,n=(0,i.useCallback)((function(t){e(o.pm.ACTION(t))}),[t]);return i.createElement(u,null,Object.keys(c.kQ).map((function(e){var r=c.kQ[e],a=r.key===t;return i.createElement(p,{key:r.key,active:a,onClick:function(){return n(r.key)}},r.value)})))};var f,m=n(885),h=n(3454),x=n(168),g=n(1046),y=n(8337),v=l.ZP.div.withConfig({displayName:"styles__AccordionContainer"})(["position:relative;cursor:pointer;",""],(function(e){return e.theme.mobile(f||(f=(0,x.Z)(["\n    display: none;\n  "])))})),k=l.ZP.div.withConfig({displayName:"styles__AccordionContent"})(["display:flex;align-items:center;font-size:16px;color:",";::after{content:'';background-image:url(",");"," margin-left:36px;}"],s.T7,g.Z,(0,y.h)("12px","11px","center","contain")),b=l.ZP.div.withConfig({displayName:"styles__OptionContainer"})(["position:absolute;display:",";height:116px;overflow:hidden;right:0;width:128px;padding:24px 32px;background-color:",";border-radius:8px;font-size:16px;color:",";> p:first-of-type{margin-bottom:24px;}"],(function(e){return e.visible?"block":"none"}),s.T7,s.Cj);const w=function(){var e=(0,r.I0)(),t=(0,r.v9)((function(e){return e.main})).filter,n=(0,i.useState)(!1),a=(0,m.Z)(n,2),l=a[0],s=a[1],u=(0,i.useCallback)((function(t){e(o.mb.ACTION(t)),s(!1)}),[t]);return i.createElement(v,null,i.createElement(k,{onClick:function(){s(!l)}},(0,h.s4)(t,c.hh)),i.createElement(b,{visible:l},Object.keys(c.hh).map((function(e){var t=c.hh[e];return i.createElement("p",{key:t.key,onClick:function(){return u(t.key)},role:"presentation"},t.value)}))))};var C,_=l.ZP.div.withConfig({displayName:"styles__FilterContainer"})(["display:flex;justify-content:space-between;align-items:center;",""],(function(e){return e.theme.mobile(C||(C=(0,x.Z)(["\n    justify-content: center;\n  "])))}));const E=function(){return i.createElement(_,null,i.createElement(d,null),i.createElement(w,null))};var Z=n(5697),P=n.n(Z),j=n(5977);var N=l.ZP.div.withConfig({displayName:"styles__CardContainer"})(["display:flex;width:310px;height:150px;padding:16px;background:",";box-shadow:0px 4px 6px rgba(0,0,0,0.04);border-radius:6px;cursor:pointer;> div{&:first-of-type{width:148px;font-size:14px;color:",";margin-right:12px;> p:last-of-type{margin-top:4px;font-size:12px;color:",";overflow:hidden;-webkit-box-orient:vertical;display:-webkit-box;-webkit-line-clamp:3;}}}"],s.iq,s.T7,s.I_),T=l.ZP.div.withConfig({displayName:"styles__Avatar"})(["display:flex;align-items:center;background-image:url(",");"," border-radius:50%;margin-bottom:4px;::after{content:'","';margin-left:44px;white-space:nowrap;}"],"/assets/project-pre-avatar.0468e886.svg",(0,y.h)("36px","36px","center","contain"),(function(e){return e.author})),F=l.ZP.div.withConfig({displayName:"styles__Thumbnail"})(["background-image:url(",");",""],"/assets/thumbnail.f63f104b.png",(0,y.h)("118px","118px","center","contain")),O=function(e){var t=e.id,n=e.author,r=e.avatar,a=e.title,o=e.preview,c=e.thumbnail,l=(0,j.k6)();return i.createElement(N,{onClick:function(){l.push("/view/".concat(t))}},i.createElement("div",null,i.createElement(T,{avatar:r,author:n}),i.createElement("p",null,a),i.createElement("p",null,o)),i.createElement(F,{thumbnail:c}))};O.propTypes={id:P().string.isRequired,author:P().string,avatar:P().string,title:P().string,preview:P().string,thumbnail:P().string},O.defaultProps={author:"",avatar:"",title:"",preview:"",thumbnail:""};const I=O;var S,B,A=l.ZP.div.withConfig({displayName:"styles__PaginationContainer"})(["display:flex;justify-content:flex-end;align-items:center;font-size:18px;color:",";margin-top:72px;> p{margin:0 32px;}"," ",""],s.T7,(function(e){return e.theme.tablet(S||(S=(0,x.Z)(["\n    display: none;\n  "])))}),(function(e){return e.theme.mobile(B||(B=(0,x.Z)(["\n    display: none;\n  "])))})),D=l.ZP.button.withConfig({displayName:"styles__PaginationButton"})(["cursor:pointer;"," background-color:",";"],(0,y.h)("20px","20px","center","contain"),(function(e){return e.active?"transparent":s.I_})),L=(0,l.ZP)(D).withConfig({displayName:"styles__PreviousButton"})(["background-image:url(",");"],"/assets/page-prev-arrow.8110e9a9.svg"),M=(0,l.ZP)(D).withConfig({displayName:"styles__NextButton"})(["background-image:url(",");"],"/assets/page-next-arrow.beb3cf2d.svg"),R=function(e){var t=e.totalContent,n=e.contentPerPage,a=(0,r.I0)(),c=(0,r.v9)((function(e){return e.main})).currentPage,l=(0,i.useMemo)((function(){return Math.ceil(t/n)}),[t,n]),s=function(){return c-1>0},u=function(){return c+1<=l},p=(0,i.useState)(!0),d=(0,m.Z)(p,2),f=d[0],h=d[1],x=(0,i.useState)(!0),g=(0,m.Z)(x,2),y=g[0],v=g[1];(0,i.useEffect)((function(){h(s()),v(u())}),[c]);return i.createElement(A,null,i.createElement(L,{onClick:function(){s()&&a(o.un.ACTION(c-1))},active:f}),i.createElement("p",null,c),i.createElement(M,{onClick:function(){u()&&a(o.un.ACTION(c+1))},active:y}))};R.propTypes={totalContent:P().number.isRequired,contentPerPage:P().number.isRequired};const z=R;var q=n(1248),H=n.n(q);const Y=JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 1.0.0","a":"","k":"","d":"","tc":"#FFFFFF"},"fr":25,"ip":25,"op":55,"w":800,"h":800,"nm":"Loading #18","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Line","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.453],"y":[1]},"o":{"x":[0.538],"y":[0]},"t":0,"s":[20]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.538],"y":[0]},"t":15,"s":[100]},{"i":{"x":[0.453],"y":[1]},"o":{"x":[0.538],"y":[0]},"t":30,"s":[20]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.538],"y":[0]},"t":45,"s":[100]},{"t":60,"s":[20]}],"ix":11},"r":{"a":0,"k":90,"ix":10},"p":{"a":0,"k":[400,400,0],"ix":2},"a":{"a":0,"k":[-175,46,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-2,0]],"o":[[0,0],[2,0]],"v":[[-268,46],[-82,46]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.19215686274509805,0.19215686274509805,0.19215686274509805,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":39,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.453],"y":[1]},"o":{"x":[0.538],"y":[0]},"t":0,"s":[45]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.538],"y":[0]},"t":15,"s":[0]},{"i":{"x":[0.453],"y":[1]},"o":{"x":[0.538],"y":[0]},"t":30,"s":[45]},{"i":{"x":[0.453],"y":[1]},"o":{"x":[0.538],"y":[0]},"t":45,"s":[0]},{"t":60,"s":[45]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.453],"y":[1]},"o":{"x":[0.538],"y":[0]},"t":0,"s":[55]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.538],"y":[0]},"t":15,"s":[100]},{"i":{"x":[0.453],"y":[1]},"o":{"x":[0.538],"y":[0]},"t":30,"s":[55]},{"i":{"x":[0.453],"y":[1]},"o":{"x":[0.538],"y":[0]},"t":45,"s":[100]},{"t":60,"s":[55]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":125,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"Line 5","parent":3,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,400,0],"ix":2},"a":{"a":0,"k":[400,400,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":800,"h":800,"ip":25,"op":80,"st":25,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"Line 4","parent":3,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[470,400,0],"ix":2},"a":{"a":0,"k":[400,400,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":800,"h":800,"ip":22,"op":77,"st":22,"bm":0},{"ddd":0,"ind":3,"ty":0,"nm":"Line 3","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[400,400,0],"ix":2},"a":{"a":0,"k":[400,400,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":800,"h":800,"ip":19,"op":74,"st":19,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"Line 2","parent":3,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[330,400,0],"ix":2},"a":{"a":0,"k":[400,400,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":800,"h":800,"ip":16,"op":71,"st":16,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"Line 1","parent":3,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[260,400,0],"ix":2},"a":{"a":0,"k":[400,400,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":800,"h":800,"ip":13,"op":68,"st":13,"bm":0}],"markers":[]}');var V=l.ZP.div.withConfig({displayName:"styles__LoadingContainer"})(["position:absolute;display:flex;left:0;right:0;top:0;bottom:0;justify-content:center;align-items:center;background-color:",";z-index:100;> div{width:83px;height:83px;}"],s.w8),W=function(e){var t=e.visible,n=(0,i.useRef)(null);return(0,i.useEffect)((function(){t&&H().loadAnimation({container:n.current,renderer:"svg",loop:!0,autoplay:!0,animationData:Y})}),[t]),t?i.createElement(V,null,i.createElement("div",{ref:n})):null};W.propTypes={visible:P().bool},W.defaultProps={visible:!1};const G=W;var U=n(2982),J=n(8100),Q=n(1835);const K=function(){var e=(0,r.I0)(),t=(0,i.useState)([]),n=(0,m.Z)(t,2),a=n[0],c=n[1],l=(0,r.v9)((function(e){return e.main})),s=l.project,u=l.filter,p=l.currentPage,d=(0,J.ZP)([Q.h.getProjects,p,s,u],(function(e){return Q._.get(e,{currentPage:p,projectType:s,filterType:u})})),f=d.data,x=d.error,g=function(){Math.ceil(window.innerHeight+window.scrollY)>=document.documentElement.scrollHeight&&e(o.un.ACTION(p+1))};return(0,i.useEffect)((function(){return(0,h.nI)()||window.addEventListener("scroll",g,{passive:!0}),function(){(0,h.nI)()||window.removeEventListener("scroll",g)}}),[]),(0,i.useEffect)((function(){f&&((0,h.nI)()?c(f):c([].concat((0,U.Z)(a),(0,U.Z)(f))))}),[f]),{content:a,error:x}};var X,$,ee,te,ne,ie,re=n(7044),ae=l.ZP.div.withConfig({displayName:"styles__MainSection"})(["align-self:center;width:954px;padding:50px 0;"," ",""],(function(e){return e.theme.tablet(X||(X=(0,x.Z)(["\n    width: 632px;\n    padding: 28px 0;\n  "])))}),(function(e){return e.theme.mobile($||($=(0,x.Z)(["\n    width: 312px;\n    padding: 22px 0;\n  "])))})),oe=l.ZP.div.withConfig({displayName:"styles__ContentContainer"})(["display:flex;flex:1;flex-wrap:wrap;margin-top:48px;gap:12px;"," ",""],(function(e){return e.theme.tablet(ee||(ee=(0,x.Z)(["\n    margin-top: 28px;\n  "])))}),(function(e){return e.theme.mobile(te||(te=(0,x.Z)(["\n    margin-top: 22px;\n  "])))})),ce=l.ZP.div.withConfig({displayName:"styles__Footer"})(["display:flex;justify-content:flex-end;align-items:center;padding:0 40px;height:60px;background-color:",";font-size:12px;color:",";"," ",""],s.T7,s.kM,(function(e){return e.theme.tablet(ne||(ne=(0,x.Z)(["\n    display: none;\n  "])))}),(function(e){return e.theme.mobile(ie||(ie=(0,x.Z)(["\n    display: none;\n  "])))}));const le=function(){var e=(0,r.v9)((function(e){return e.main})),t=e.project,n=e.filter,o=e.currentPage,l=K().content;return i.createElement(re.t,null,i.createElement(a.Z,null),l&&l.length>0&&i.createElement(ae,null,i.createElement(E,null),i.createElement(oe,null,l.map((function(e){var r=e.id,a=e.author,c=e.avatar,l=e.title,s=e.preview,u=e.thumbnail;return i.createElement(I,{key:"".concat(r,"_").concat(t,"_").concat(n,"_").concat(o),id:r,author:a,avatar:c,title:l,preview:s,thumbnail:u})}))),i.createElement(z,{totalContent:20,contentPerPage:c.TN})),i.createElement(ce,null,"Idea Share © Code: Samick & Michael / Design: KT"),i.createElement(G,{visible:0===l.length}))}},2484:(e,t,n)=>{n.d(t,{Cj:()=>o,DB:()=>a,DD:()=>m,IW:()=>c,I_:()=>d,T7:()=>u,YZ:()=>l,ax:()=>x,c0:()=>i,cD:()=>h,iq:()=>p,iw:()=>f,kM:()=>s,w8:()=>r});var i="rgba(0, 0, 0, 0.03)",r="rgba(0, 0, 0, 0.3)",a="rgba(0, 0, 0, 0.12)",o="#FFFFFF",c="#EDEEF0",l="#F8F8F8",s="#BEBEBE",u="#313131",p="#F9F9F9",d="#919191",f="#F6F7F9",m="rgba(49, 49, 49, 0.62)",h="#00A3FF",x="#FF688C"},7044:(e,t,n)=>{n.d(t,{Y:()=>o,t:()=>a});var i=n(586),r=n(2484),a=i.ZP.div.withConfig({displayName:"style__MainContainer"})(["position:relative;display:flex;flex-direction:column;width:100vw;height:100%;background-color:",";"],r.IW),o=i.ZP.div.withConfig({displayName:"style__BaseButton"})(["display:flex;justify-content:center;align-items:center;background-color:",";border-radius:12px;font-size:14px;color:",";cursor:pointer;"],r.T7,r.Cj)},3454:(e,t,n)=>{n.d(t,{nI:()=>o,s4:()=>c});var i=n(1659),r=n(5349),a=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}},o=function(){return a().width>r.dl.tablet},c=function(e,t){return i.vgT("value",i.sEJ(i.OH4("key",e))(i.VO0(t)))}},1046:(e,t,n)=>{n.d(t,{Z:()=>i});const i="/assets/arrow-icon.fd83ad79.svg"}}]);