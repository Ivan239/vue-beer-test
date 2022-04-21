(function(){"use strict";var A={3318:function(A,e,t){var r=t(9242),n=t(3396);const a={class:"app"};function g(A,e,t,r,g,C){const o=(0,n.up)("layout-header"),s=(0,n.up)("layout-main"),i=(0,n.up)("layout-footer");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n.Wm)(o,{class:"app__header"}),(0,n.Wm)(s,{class:"app__main"}),(0,n.Wm)(i,{class:"app__footer"})])}const C=A=>((0,n.dD)("data-v-147195e8"),A=A(),(0,n.Cn)(),A),o={class:"header"},s=C((()=>(0,n._)("h1",{class:"header__title"},"Test Beer Vue",-1))),i={href:"https://github.com/Ivan239/vue-beer-test",class:"link",target:"_blank",rel:"noopener noreferrer"},I=(0,n.Uk)("Repo");function l(A,e,t,r,a,g){const C=(0,n.up)("button-ui");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",o,[s,(0,n._)("a",i,[(0,n.Wm)(C,null,{default:(0,n.w5)((()=>[I])),_:1})])])])}var Q={},c=t(89);const d=(0,c.Z)(Q,[["render",l],["__scopeId","data-v-147195e8"]]);var f=d;const B={class:"main"};function u(A,e,t,r,a,g){const C=(0,n.up)("beer-box"),o=(0,n.up)("profile-box");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",B,[(0,n.Wm)(C),(0,n.Wm)(o)])])}var E=t(7139),v=t.p+"img/bottle.e3550796.jpg";const p=A=>((0,n.dD)("data-v-13248c7e"),A=A(),(0,n.Cn)(),A),k={class:"beerbox"},b=p((()=>(0,n._)("h2",null,"Your beer",-1))),m=p((()=>(0,n._)("img",{class:"image",src:v,alt:"beer bottle"},null,-1))),h={key:0,class:"content"},J={key:1,class:"content"},w=p((()=>(0,n._)("p",null,"Loading...",-1))),_=[w],z=(0,n.Uk)("New Beer");function x(A,e,t,r,a,g){const C=(0,n.up)("button-ui");return(0,n.wg)(),(0,n.iD)("div",k,[b,m,a.isBeerLoading?((0,n.wg)(),(0,n.iD)("div",J,_)):((0,n.wg)(),(0,n.iD)("div",h,[(0,n._)("div",null,[(0,n._)("p",null,(0,E.zw)(a.beer.brand),1)]),(0,n._)("div",null,[(0,n._)("p",null,(0,E.zw)(a.beer.name),1)]),(0,n._)("div",null,[(0,n._)("p",null,(0,E.zw)(a.beer.alcohol),1)])])),(0,n.Wm)(C,{class:"beer__btn",onClick:g.fetchBeer},{default:(0,n.w5)((()=>[z])),_:1},8,["onClick"])])}var D=t(6265),X=t.n(D),O={data(){return{beer:{name:"",brand:"",alcohol:""},isBeerLoading:!1}},methods:{async fetchBeer(){try{this.isBeerLoading=!0;const A=await X().get("https://random-data-api.com/api/beer/random_beer");this.beer=A.data,this.beer.name.length>25||this.beer.name.length+this.beer.brand.length>33?this.fetchBeer():this.isBeerLoading=!1}catch(A){alert("Error")}}},mounted(){this.fetchBeer()}};const N=(0,c.Z)(O,[["render",x],["__scopeId","data-v-13248c7e"]]);var y=N;const j=A=>((0,n.dD)("data-v-8eb7b516"),A=A(),(0,n.Cn)(),A),R={class:"profilebox"},W=j((()=>(0,n._)("h2",null,"Your profile",-1))),P={key:0,class:"profile"},S=["src"],L={class:"content"},M={class:"profile__item"},U=j((()=>(0,n._)("p",null,"Name:",-1))),F={class:"content__right"},Z={class:"profile__item"},T=j((()=>(0,n._)("p",null,"Age:",-1))),Y={class:"content__right"},H={class:"profile__item"},V=j((()=>(0,n._)("p",null,"Position:",-1))),K={class:"content__right"},q={class:"profile__item"},G=j((()=>(0,n._)("p",null,"Address:",-1))),$={class:"content__right"},AA={key:1,class:"content"},eA=j((()=>(0,n._)("p",null,"Loading...",-1))),tA=[eA],rA=(0,n.Uk)("New User");function nA(A,e,t,r,a,g){const C=(0,n.up)("button-ui");return(0,n.wg)(),(0,n.iD)("div",R,[W,a.isUserLoading?((0,n.wg)(),(0,n.iD)("div",AA,tA)):((0,n.wg)(),(0,n.iD)("div",P,[(0,n._)("img",{class:"image",src:a.profile.avatar,alt:"avatar"},null,8,S),(0,n._)("div",L,[(0,n._)("div",M,[U,(0,n._)("p",F,(0,E.zw)(a.profile.first_name)+" "+(0,E.zw)(a.profile.last_name),1)]),(0,n._)("div",Z,[T,(0,n._)("p",Y,(0,E.zw)(g.getAge()),1)]),(0,n._)("div",H,[V,(0,n._)("p",K,(0,E.zw)(a.profile.employment.title),1)]),(0,n._)("div",q,[G,(0,n._)("p",$,(0,E.zw)(a.profile.address.country)+", "+(0,E.zw)(a.profile.address.state)+", "+(0,E.zw)(a.profile.address.city)+", "+(0,E.zw)(a.profile.address.street_name)+", "+(0,E.zw)(a.profile.address.street_address)+", "+(0,E.zw)(a.profile.address.zip_code),1)])])])),(0,n.Wm)(C,{class:"user__btn",onClick:g.fetchUser},{default:(0,n.w5)((()=>[rA])),_:1},8,["onClick"])])}var aA={data(){return{profile:{first_name:"",last_name:"",date_of_birth:"",avatar:"",address:{country:"",state:"",city:"",street_name:"",street_address:"",zip_code:""},employment:{title:""}},isUserLoading:!1}},methods:{async fetchUser(){try{this.isUserLoading=!0;const A=await X().get("https://random-data-api.com/api/users/random_user");this.profile=A.data}catch(A){alert("Error")}finally{this.isUserLoading=!1}},getAge(){var A=new Date,e=new Date(this.profile.date_of_birth),t=A.getFullYear()-e.getFullYear(),r=A.getMonth()-e.getMonth();return(r<0||0===r&&A.getDate()<e.getDate())&&t--,t}},mounted(){this.fetchUser()}};const gA=(0,c.Z)(aA,[["render",nA],["__scopeId","data-v-8eb7b516"]]);var CA=gA,oA={components:{BeerBox:y,ProfileBox:CA}};const sA=(0,c.Z)(oA,[["render",u],["__scopeId","data-v-8eaa79a2"]]);var iA=sA,IA=t.p+"img/github.d5d0a4b0.png",lA="data:image/png;base64,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";const QA=(0,n.uE)('<div class="footer" data-v-49eebe9f><a href="https://github.com/Ivan239" class="link" target="_blank" rel="noopener noreferrer" data-v-49eebe9f><img src="'+IA+'" alt="github" class="logo" data-v-49eebe9f></a><a href="https://innopolis.hh.ru/resume/805199d0ff098806f50039ed1f6330376c396b" target="_blank" rel="noopener noreferrer" class="link" data-v-49eebe9f><img src="'+lA+'" alt="hh" class="logo" data-v-49eebe9f></a></div>',1),cA=[QA];function dA(A,e,t,r,a,g){return(0,n.wg)(),(0,n.iD)("div",null,cA)}var fA={};const BA=(0,c.Z)(fA,[["render",dA],["__scopeId","data-v-49eebe9f"]]);var uA=BA,EA={name:"App",components:{LayoutHeader:f,LayoutMain:iA,LayoutFooter:uA}};const vA=(0,c.Z)(EA,[["render",g]]);var pA=vA;function kA(A,e,t,r,a,g){return(0,n.wg)(),(0,n.iD)("button",null,[(0,n.WI)(A.$slots,"default",{},void 0,!0)])}var bA={name:"button-ui"};const mA=(0,c.Z)(bA,[["render",kA],["__scopeId","data-v-086f249c"]]);var hA=mA,JA=[hA];const wA=(0,r.ri)(pA);JA.forEach((A=>{wA.component(A.name,A)})),wA.mount("#app")}},e={};function t(r){var n=e[r];if(void 0!==n)return n.exports;var a=e[r]={exports:{}};return A[r](a,a.exports,t),a.exports}t.m=A,function(){var A=[];t.O=function(e,r,n,a){if(!r){var g=1/0;for(i=0;i<A.length;i++){r=A[i][0],n=A[i][1],a=A[i][2];for(var C=!0,o=0;o<r.length;o++)(!1&a||g>=a)&&Object.keys(t.O).every((function(A){return t.O[A](r[o])}))?r.splice(o--,1):(C=!1,a<g&&(g=a));if(C){A.splice(i--,1);var s=n();void 0!==s&&(e=s)}}return e}a=a||0;for(var i=A.length;i>0&&A[i-1][2]>a;i--)A[i]=A[i-1];A[i]=[r,n,a]}}(),function(){t.n=function(A){var e=A&&A.__esModule?function(){return A["default"]}:function(){return A};return t.d(e,{a:e}),e}}(),function(){t.d=function(A,e){for(var r in e)t.o(e,r)&&!t.o(A,r)&&Object.defineProperty(A,r,{enumerable:!0,get:e[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(A){if("object"===typeof window)return window}}()}(),function(){t.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)}}(),function(){t.p="/vue-beer-test/"}(),function(){var A={143:0};t.O.j=function(e){return 0===A[e]};var e=function(e,r){var n,a,g=r[0],C=r[1],o=r[2],s=0;if(g.some((function(e){return 0!==A[e]}))){for(n in C)t.o(C,n)&&(t.m[n]=C[n]);if(o)var i=o(t)}for(e&&e(r);s<g.length;s++)a=g[s],t.o(A,a)&&A[a]&&A[a][0](),A[a]=0;return t.O(i)},r=self["webpackChunkvue_beer_test"]=self["webpackChunkvue_beer_test"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(3318)}));r=t.O(r)})();
//# sourceMappingURL=app.1f2f68a2.js.map