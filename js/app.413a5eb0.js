(function(t){function e(e){for(var n,r,l=e[0],o=e[1],c=e[2],p=0,d=[];p<l.length;p++)r=l[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,l=1;l<a.length;l++){var o=a[l];0!==i[o]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"025a":function(t,e,a){t.exports=a.p+"img/headshot.dbd82de1.jpg"},"034f":function(t,e,a){"use strict";var n=a("64a9"),i=a.n(n);i.a},"29a7":function(t,e,a){"use strict";var n=a("67e7"),i=a.n(n);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},[a("Header",{attrs:{name:"Brandon Glowatski",p1:"I am a programmer generalist, most recently building and deploying distributed web technologies for IoT at Levven Electronics.",p2:"My interests include coffee, weightlifting, Dota2, Arch Linux and keyboards (the mechanical kind).",p3:"I am always open to opportunities to grow or learn new skills. I look forward to hearing from you.",p4:"One of my goals for 2020 is to speak at a variety of meetups (originally in person, thanks Covid), if you are looking for speakers, please reach out.",p5:"Here are some items I am currently working on:"}})],1),a("div",{staticClass:"container is-fullhd"}),a("div",{staticClass:"tile is-ancestor"},t._l(t.githubJSON,(function(t){return a("Body",{key:t.name,attrs:{full_name:t.full_name,description:t.description,html_url:t.html_url,language:t.language}})})),1),a("Footer",{attrs:{github_url:"https://www.github.com/glowatsk",gitlab_url:"https://www.gitlab.com/glowatsk",linkedIn_url:"https://ca.linkedin.com/in/glowatsk",cv_url:"https://www.dropbox.com/s/1g7dqfwezsudes1/Brandon%20Glowatski.pdf?dl=0",email_url:"glowatsk(at)gmail(dot)com"}})],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"columns"},[a("div",{staticClass:"column",attrs:{id:"intro"}},[a("h1",{staticClass:"title"},[t._v(t._s(t.name))]),a("section",[a("p",{staticClass:"subtitle is-5"},[t._v(t._s(t.p1))])]),a("section",[a("p",{staticClass:"subtitle is-5"},[t._v(t._s(t.p2))]),a("p",{staticClass:"subtitle is-5"},[t._v(t._s(t.p3))])])]),t._m(0)]),a("div",{staticClass:"container"},[a("h3",{staticClass:"subtitle is-5",attrs:{id:"meetup"}},[t._v(t._s(t.p4))]),t._m(1),a("div",{staticClass:"container"},[a("h3",{staticClass:"subtitle is-5",attrs:{id:"subtitle"}},[t._v(t._s(t.p5))])])])])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column",attrs:{id:"headshot"}},[n("img",{attrs:{src:a("025a"),height:"85%",alt:"Brandons-Headshot"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"video-container"},[a("iframe",{attrs:{src:"https://www.youtube.com/embed/wFB53qigp1k"}})])}],o={name:"Header",props:{name:String,p1:String,p2:String,p3:String,p4:String,p5:String}},c=o,u=(a("29a7"),a("2877")),p=Object(u["a"])(c,r,l,!1,null,"25312488",null),d=p.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tile is-4 is-parent is-vertical"},[a("article",{staticClass:"tile is-child box is-vertical"},[a("div",{staticClass:"tile is-child",attrs:{id:"text"}},[a("a",{staticClass:"subtitle",attrs:{id:"title",href:t.html_url}},[t._v(t._s(t.description))]),a("p",{staticClass:"content",attrs:{id:"language"}},[t._v("Language: "+t._s(t.language))])])])])},g=[],h={name:"Body",props:{full_name:String,description:String,html_url:String,language:String}},m=h,b=(a("e13f"),Object(u["a"])(m,f,g,!1,null,"bf00c3fc",null)),v=b.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"columns"},[a("a",{staticClass:"column has-text-dark",attrs:{href:t.github_url}},[a("b-icon",{attrs:{icon:"github",pack:"fab",size:"is-small"}}),t._v("Github")],1),a("a",{staticClass:"column has-text-dark",attrs:{href:t.gitlab_url}},[a("b-icon",{attrs:{icon:"gitlab",pack:"fab",size:"is-small"}}),t._v("Gitlab")],1),a("a",{staticClass:"column has-text-dark",attrs:{href:t.linkedIn_url}},[a("b-icon",{attrs:{icon:"linkedin",pack:"fab",size:"is-small"}}),t._v("LinkedIn")],1),a("a",{staticClass:"column has-text-dark",attrs:{href:t.cv_url}},[a("b-icon",{attrs:{icon:"file",pack:"fas",size:"is-small"}}),t._v("CV")],1),a("p",{staticClass:"column has-text-dark",attrs:{id:"email"}},[a("b-icon",{attrs:{icon:"envelope-open",pack:"fas",size:"is-small"}}),t._v(t._s(t.email_url))],1)])])},w=[],k={name:"Footer",props:{github_url:String,gitlab_url:String,linkedIn_url:String,cv_url:String,email_url:String}},y=k,C=(a("f097"),Object(u["a"])(y,_,w,!1,null,"4c2bd242",null)),S=C.exports,x={name:"app",data:function(){return{githubJSON:{}}},created:function(){var t=this;fetch("https://api.github.com/users/glowatsk/repos?sort=desc").then((function(t){return t.json()})).then((function(e){t.githubJSON=e.slice(0,3)}))},components:{Header:d,Body:v,Footer:S}},O=x,j=(a("034f"),Object(u["a"])(O,i,s,!1,null,null,null)),I=j.exports,P=a("8a03"),B=a.n(P),E=(a("5abe"),a("e0ec")),$=a.n(E);n["default"].config.productionTip=!1,n["default"].use(B.a,{defaultIconPack:"fas"}),n["default"].use($.a),new n["default"]({render:function(t){return t(I)}}).$mount("#app")},"64a9":function(t,e,a){},"67e7":function(t,e,a){},"7d57":function(t,e,a){},e13f:function(t,e,a){"use strict";var n=a("e3cb"),i=a.n(n);i.a},e3cb:function(t,e,a){},f097:function(t,e,a){"use strict";var n=a("7d57"),i=a.n(n);i.a}});
//# sourceMappingURL=app.413a5eb0.js.map