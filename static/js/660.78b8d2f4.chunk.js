"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[660],{8416:function(e,s,t){t.d(s,{Z:function(){return x}});var a=t(6731),r=t(885),i=t(2791),n=t(184),c=function(){var e=(0,i.useState)(!1),s=(0,r.Z)(e,1)[0],t=(0,i.useState)(!1),a=(0,r.Z)(t,2),c=a[0],l=a[1];return(0,n.jsx)("div",{className:"sidebar-container".concat(s?" shrink":""),children:(0,n.jsx)("div",{className:"sidebar-wrapper",children:(0,n.jsx)("div",{className:"sidebar-themeContainer",children:(0,n.jsxs)("label",{htmlFor:"theme-toggle",className:"sidebar-themeLabel".concat(c?" switched":""),children:[(0,n.jsx)("input",{className:"sidebar-themeInput",type:"checkbox",id:"theme-toggle",onChange:function(){l(!c),document.body.classList.toggle("dark")}}),(0,n.jsxs)("div",{className:"sidebar-themeType light",children:[(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"sidebar-listIcon",children:[(0,n.jsx)("circle",{cx:"12",cy:"12",r:"5"}),(0,n.jsx)("path",{d:"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"})]}),(0,n.jsx)("span",{className:"sidebar-themeInputText",children:"Light"})]}),(0,n.jsxs)("div",{className:"sidebar-themeType dark",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"sidebar-listIcon",children:(0,n.jsx)("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})}),(0,n.jsx)("span",{className:"sidebar-themeInputText",children:"Dark"})]})]})})})})},l="header_header__RZQYQ",o="header_wrapper__vteUK",d="header_nav__n24hS",h="header_item__OOsNB",m="header_active__W7yWI",u=function(e){return e.isActive?"".concat(h," ").concat(m):h},x=function(){return(0,n.jsx)("div",{children:(0,n.jsx)("header",{className:l,children:(0,n.jsx)("div",{className:o,children:(0,n.jsxs)("nav",{className:d,children:[(0,n.jsx)(c,{}),(0,n.jsxs)("div",{children:[(0,n.jsx)(a.OL,{to:"/",end:!0,className:u,children:"Home"}),(0,n.jsx)(a.OL,{to:"/movies",className:u,children:"Movies"})]})]})})})})}},660:function(e,s,t){t.r(s),t.d(s,{default:function(){return k}});var a=t(5861),r=t(885),i=t(7757),n=t.n(i),c=t(2791),l=t(6731),o=t(7689),d=t(8416),h=t(2881),m=t(4569),u=t.n(m),x=t(7596),v="AboutFilms_container__HJdxJ",j="AboutFilms_about__RAWPM",_="AboutFilms_img__aCj22",p="AboutFilms_data__wHX-0",b="AboutFilms_button__Gl7ri",f="AboutFilms_data__review__dEZLt",g="AboutFilms_data__item__ZJRGP",w="AboutFilms_title__oDr4l",N=t(184),k=function(){var e,s,t,i,m=(0,o.UO)().moviesId,k=(0,c.useState)({}),A=(0,r.Z)(k,2),Z=A[0],M=A[1],F=(0,c.useState)(!1),L=(0,r.Z)(F,2),C=L[0],y=L[1],I=(0,o.TH)(),O=(0,c.useCallback)((0,a.Z)(n().mark((function e(){var s;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(!0),e.next=4,u().get("https://api.themoviedb.org/3/movie/".concat(m,"?api_key=53f28f10fb3650af7c7f4f04a387344f&language=en-US"));case 4:s=e.sent,M(s.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),x.Am.error("\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a :(");case 11:return e.prev=11,y(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])}))),[m]);if((0,c.useEffect)((function(){O()}),[O]),0!==Object.keys(Z).length){var S=Z.genres.map((function(e){return e.name})).join(", ");return(0,N.jsxs)(N.Fragment,{children:[C&&(0,N.jsx)(h.Z,{}),(0,N.jsx)(d.Z,{}),(0,N.jsx)("section",{children:(0,N.jsxs)("div",{className:v,children:[(0,N.jsxs)(l.rU,{to:null!==(e=null===(s=I.state)||void 0===s?void 0:s.from)&&void 0!==e?e:"/movies",className:b,children:[" ","go back"]}),(0,N.jsxs)("div",{className:j,children:[(0,N.jsx)("img",{alt:Z.title,className:_,width:"300",src:"https://image.tmdb.org/t/p/w500".concat(Z.poster_path)}),(0,N.jsxs)("div",{className:p,children:[(0,N.jsxs)("h1",{children:[Z.title," "]}),(0,N.jsx)("h3",{children:"Overview"}),(0,N.jsx)("p",{children:Z.overview}),(0,N.jsx)("h3",{children:"Genres:"}),(0,N.jsx)("p",{children:S})]})]}),(0,N.jsxs)("ul",{className:f,children:[(0,N.jsx)("li",{className:g,children:(0,N.jsx)(l.rU,{className:w,to:"cast",state:null!==(t=I.state)&&void 0!==t&&t.from?I.state:null,children:"Cast"})}),(0,N.jsx)("li",{className:g,children:(0,N.jsx)(l.rU,{className:w,to:"reviews",state:null!==(i=I.state)&&void 0!==i&&i.from?I.state:null,children:"Reviews"})})]}),(0,N.jsx)(c.Suspense,{fallback:(0,N.jsx)(h.Z,{}),children:(0,N.jsx)(o.j3,{})})]})})]})}}}}]);
//# sourceMappingURL=660.78b8d2f4.chunk.js.map