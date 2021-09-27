(this["webpackJsonpsupa-dupa-chat"]=this["webpackJsonpsupa-dupa-chat"]||[]).push([[0],{112:function(e,t,a){},116:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(23),s=a.n(r),o=(a(112),a(25)),i=a(93),u=a(99),l=a(165),j=(a(116),a(21)),b=a(29),d=a(28),h=a(156),O=a(48),p="PROFILE::INIT_PROFILE_NAME",x="PROFILE::INIT_PROFILE_NAME_WITH_SAGA",m=function(){return{type:x}},f="idle",g="request",v="success",w="failure",S="/gbCourse5Hw",N=a(6);var A=function(e){return Object(N.jsxs)("div",{className:"main-container",children:[Object(N.jsx)("h1",{children:"Welcome to chat"}),Object(N.jsx)("div",{children:Object(N.jsx)(b.b,{to:"".concat(S,"/login"),children:"Sign In"})}),Object(N.jsx)("div",{children:Object(N.jsx)(b.b,{to:"".concat(S,"/signup"),children:"Sign Up"})})]})},I=a(159),C=a(95),E=a.n(C),y="CHATS::REMOVE_MESSAGE",T="CHATS::REMOVE_MESSAGE_WITH_SAGA",k=Object(h.a)((function(e){return{button:{position:"absolute",top:"0",right:"0"},message:{border:"1px solid black",borderRadius:"10px",marginBottom:"10px",position:"relative"},messageHeader:{textAlign:"left",margin:"10px 20px"},messageText:{textAlign:"left",margin:"10px 20px",whiteSpace:"pre-wrap"},messageAuthor:{textAlign:"right",margin:"10px 20px"},smallText:{fontSize:"14px",color:"#AAA",fontWeight:"normal"}}}));var _=function(e){var t=Object(o.c)(),a=Object(c.useCallback)((function(e,a){t(function(e,t){return{type:T,chatId:e,messageId:t}}(e,a))}),[t]),n=k();return e.messages.map((function(t,c){return Object(N.jsxs)("article",{className:n.message,id:t.id,children:[Object(N.jsxs)("h2",{className:n.messageHeader,children:[Object(N.jsxs)("span",{className:n.smallText,children:["Theme:",Object(N.jsx)("br",{})]}),t.header]}),Object(N.jsxs)("p",{className:n.messageText,children:[Object(N.jsxs)("span",{className:n.smallText,children:["Message:",Object(N.jsx)("br",{})]}),t.text]}),Object(N.jsx)("p",{className:n.messageAuthor,children:Object(N.jsxs)("cite",{children:[Object(N.jsx)("span",{className:n.smallText,children:"Author: "}),t.author]})}),Object(N.jsx)(I.a,{onClick:function(){return a(e.chatId,t.id)},"aria-label":"delete",className:n.button+" delete-button",children:Object(N.jsx)(E.a,{color:"secondary"})})]},t.id)}))},H=a(96),D=a.n(H),R=a(161),F=a(162),W=a(167);var M=function(e){return Object(N.jsx)(R.a,{component:"nav","aria-label":"main mailbox folders",children:Object.values(e.chats).map((function(t){return Object(N.jsx)(b.b,{to:"/gbCourse5Hw/chats/"+t.id,className:e.classes.link,children:Object(N.jsxs)(F.a,{button:!0,className:t.id===e.chatId?e.classes.active:e.classes.root,children:[Object(N.jsx)(W.a,{primary:t.name}),Object(N.jsx)(I.a,{"aria-label":"close",onClick:function(a){return e.handleRemoveChat(t.id,a)},children:Object(N.jsx)(D.a,{})})]})},t.id)}))})},L=a(163),G=a(166);var P=function(e){return Object(N.jsxs)("form",{onSubmit:function(t){return e.handleAddChat(e.chatName,t)},className:e.classes.addChatForm,children:[Object(N.jsx)(G.a,{className:e.classes.chatName,value:e.chatName,onChange:e.hanldeChatName,id:"outlined-basic",label:"Chat name",variant:"outlined",size:"small"}),Object(N.jsx)(L.a,{value:"Add",variant:"contained",color:"primary",className:e.classes.button,type:"submit",children:"Add chat"})]})},U="CHATS::ADD_CHAT",B="CHATS::ADD_CHAT_WITH_SAGA",q="CHATS::REMOVE_CHAT",V="CHATS::REMOVE_CHAT_WITH_SAGA";function X(e){return e.chats}var z="CHATS::INIT_CHATS",K=function(e){return{type:z,chats:e}},J="CHATS::INIT_CHATS_WITH_SAGA",Q=Object(h.a)((function(e){return{button:{color:"#fff",whiteSpace:"noWrap",height:"100%"},link:{textDecoration:"none",color:e.palette.primary.main},active:{color:e.palette.secondary.main,backgroundColor:"#ccc"},chatName:{marginRight:"10px"},root:{maxWidth:"300px",padding:"15px"},addChatForm:{display:"flex",alignItems:"center"}}}));var Z=function(e){var t=Object(c.useState)(""),a=Object(j.a)(t,2),n=a[0],r=a[1],s=Object(o.c)(),i=Object(o.d)(X,o.b),u=Object(c.useCallback)((function(e,t){t.preventDefault(),s(function(e){return{type:B,chatName:e}}(e)),r("")}),[s]);Object(c.useEffect)((function(){s({type:J})}),[]);var l=Q();return Object(N.jsxs)("div",{className:l.root,children:[Object(N.jsx)(P,{handleAddChat:u,classes:l,chatName:n,hanldeChatName:function(e){r(e.target.value)}}),Object(N.jsx)(M,{chats:i,classes:l,handleRemoveChat:function(e,t){t.preventDefault(),t.stopPropagation(),s(function(e){return{type:V,chatId:e}}(e))},chatId:e.chatId})]})},Y=a(164),$="CHATS::ADD_MESSAGE",ee="CHATS::ADD_MESSAGE_WITH_SAGA";function te(e){return e.profile.name}function ae(e){return e.profile.wrongName}var ce=Object(h.a)((function(e){return{root:{border:"1px solid black",borderRadius:"10px",display:"flex",flexDirection:"column","& > *":{margin:e.spacing(1)}},text:{height:"auto"},button:{alignSelf:"flex-end"}}}));var ne=function(e){var t=Object(c.useState)(""),a=Object(j.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(""),i=Object(j.a)(s,2),u=i[0],l=i[1],b=Object(o.d)(te),h=Object(o.d)(X),O=Object(c.useRef)(null),p=Object(d.g)().chatId,x=Object(o.c)(),m=ce(),f=Object(c.useCallback)((function(e,t,a,c,n,r){g(),O.current.focus(),r&&r.preventDefault(),x(function(e,t,a,c,n){return{type:ee,chatId:e,chatName:t,messageTheme:a,messageText:c,messageAuthor:n}}(e,t,a,c,n))}),[x]),g=function(){r(""),l("")};return Object(c.useEffect)((function(){p&&O.current.focus()}),[p]),Object(N.jsxs)("form",{action:"",onSubmit:function(e){return f(p,h[p].name,n,u,b,e)},className:m.root,noValidate:!0,autoComplete:"off",children:[Object(N.jsx)(G.a,{className:m.text,value:n,onChange:function(e){r(e.target.value)},id:"outlined-basic",label:"Theme",variant:"outlined"}),Object(N.jsx)(G.a,{className:m.text,value:u,onChange:function(e){l(e.target.value)},inputRef:O,multiline:!0,rows:"5",id:"outlined-basic",label:"Message",variant:"outlined"}),Object(N.jsx)(L.a,{type:"submit",value:"Send",variant:"contained",color:"primary",className:m.button,endIcon:Object(N.jsx)(Y.a,{children:"send"}),children:"Send"})]})},re=Object(h.a)((function(e){return{root:{display:"flex",justifyContent:"space-around",backgroundColor:"#EEE"},chat:{maxWidth:"700px",display:"flex",flexDirection:"column",padding:"15px",flexGrow:1}}}));var se=function(e){var t=re(),a=Object(d.g)().chatId,c=Object(o.d)(X);return a&&!c[a]?Object(N.jsx)(d.a,{to:"/gbCourse5Hw/chats"}):Object(N.jsxs)("div",{className:t.root,children:[Object(N.jsx)(Z,{chatList:c,active:a,chatId:a}),Object(N.jsxs)("div",{className:t.chat,children:[Object(N.jsx)(_,{messages:a&&c[a].messages?Object.values(c[a].messages):[],chatId:a}),!!a&&Object(N.jsx)(ne,{})]})]})},oe=a(22),ie="PROFILE::NAME",ue="PROFILE::SET_PROFILE_NAME_WITH_SAGA",le=a(72),je=a(97),be=(Object(je.a)({apiKey:"AIzaSyClSDFFfyZOzOpDTXS3pbqR4tpMuhrsXW0",authDomain:"supa-dupa-chat.firebaseapp.com",databaseURL:"https://supa-dupa-chat-default-rtdb.firebaseio.com",projectId:"supa-dupa-chat",storageBucket:"supa-dupa-chat.appspot.com",messagingSenderId:"656656094874",appId:"1:656656094874:web:247f40f1bae0857ad07123"}),Object(le.b)()),de=Object(oe.b)(),he=Object(h.a)((function(e){return{root:{display:"flex",backgroundColor:"#EEE",flexDirection:"column"},profileName:{position:"relative"},wrongName:{position:"absolute",top:"0",left:"calc(50% - 60px)",display:"block",padding:"10px",background:"#de2345"},hidden:{visibility:"hidden"}}}));var Oe=function(e){var t=Object(c.useState)(""),a=Object(j.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(""),i=Object(j.a)(s,2),u=i[0],l=i[1],b=Object(o.c)(),d=Object(o.d)(ae);Object(c.useEffect)((function(){var e=Object(oe.d)(de,"profile/".concat(be.currentUser.uid,"/username"));return Object(oe.c)(e,(function(e){var t=e.val();l(t)}))}),[]);var h=he();return Object(N.jsxs)("div",{className:h.root,children:[Object(N.jsx)("h1",{children:"My Profile"}),Object(N.jsx)("div",{children:Object(N.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b({type:ue,name:n}),r("")},className:h.profileName,children:[Object(N.jsx)(G.a,{required:!0,className:h.profileName,value:n,onChange:function(e){r(e.target.value)},id:"standard-basic",label:"Enter your name",variant:"standard"}),Object(N.jsx)("span",{className:(d?"":h.hidden)+" "+h.wrongName,children:"Wrong name!"})]})}),Object(N.jsxs)("p",{children:[Object(N.jsx)("span",{className:u?"":h.hidden,children:"Hi, "}),u,Object(N.jsx)("span",{className:u?"":h.hidden,children:"!"})]}),Object(N.jsx)("button",{onClick:function(){Object(O.d)(be).then((function(){})).catch((function(e){}))},children:"Sign Out"})]})};function pe(e){return e.news.newsList}function xe(e){return e.news.error.status}function me(e){return e.news.error.message}function fe(e){return e.news.status}var ge="NEWS::GET_NEWS_REQUEST",ve="NEWS::GET_NEWS_SUCCESS",we="NEWS::GET_NEWS_FAILURE",Se="NEWS::GET_NEWS_WITH_SAGA",Ne=function(e){return{type:ve,news:e}},Ae=Object(h.a)((function(e){return{root:{listStyle:"none"},newsItem:{display:"block",textDecoration:"none",color:e.palette.primary.main,marginBottom:"10px","&:visited":{color:e.palette.secondary.main}}}}));var Ie=function(e){var t=Ae(),a=Object(o.d)(pe),n=Object(o.d)(xe),r=Object(o.d)(me),s=Object(o.d)(fe),i=Object(o.c)(),u=Object(c.useCallback)((function(){i({type:Se})}));Object(c.useEffect)((function(){u()}),[]);var l=Object(c.useCallback)((function(e){return Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",className:t.newsItem,children:e.title||"No description"})},e.id)}),[]);return n?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("p",{children:r}),Object(N.jsx)("button",{onClick:u,children:"reload"})]}):s===g?Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("p",{children:"Loading..."})}):Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("ul",{className:t.root,children:a.map(l)})})},Ce=a(1),Ee=a.n(Ce),ye=a(5);var Te=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(j.a)(r,2),o=s[0],i=s[1],u=Object(c.useState)(""),l=Object(j.a)(u,2),d=l[0],h=l[1],p=function(){var e=Object(ye.a)(Ee.a.mark((function e(t){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),h(""),e.prev=2,e.next=5,Object(O.a)(be,a,o);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),h(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)("div",{children:Object(N.jsxs)("form",{onSubmit:p,children:[Object(N.jsx)("p",{children:"Fill in the form below to register new account."}),Object(N.jsx)("div",{children:Object(N.jsx)("input",{placeholder:"Email",name:"email",type:"email",onChange:function(e){n(e.target.value)},value:a})}),Object(N.jsx)("div",{children:Object(N.jsx)("input",{placeholder:"Password",name:"password",onChange:function(e){i(e.target.value)},value:o,type:"password"})}),Object(N.jsxs)("div",{children:[d&&Object(N.jsx)("p",{children:d}),Object(N.jsx)("button",{type:"submit",children:"Login"})]}),Object(N.jsx)("hr",{}),Object(N.jsxs)("p",{children:["Already have an account? ",Object(N.jsx)(b.b,{to:"/gbCourse5Hw/login",children:"Sign in"})]})]})})};var ke=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(j.a)(r,2),o=s[0],i=s[1],u=Object(c.useState)(""),l=Object(j.a)(u,2),d=l[0],h=l[1],p=function(){var e=Object(ye.a)(Ee.a.mark((function e(t){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),h(""),e.prev=2,e.next=5,Object(O.c)(be,a,o);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),h(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(N.jsx)("div",{children:Object(N.jsxs)("form",{onSubmit:p,children:[Object(N.jsx)("p",{children:"Fill in the form below to login to your account."}),Object(N.jsx)("div",{children:Object(N.jsx)("input",{placeholder:"Email",name:"email",type:"email",onChange:function(e){n(e.target.value)},value:a})}),Object(N.jsx)("div",{children:Object(N.jsx)("input",{placeholder:"Password",name:"password",onChange:function(e){i(e.target.value)},value:o,type:"password"})}),Object(N.jsxs)("div",{children:[d&&Object(N.jsx)("p",{children:d}),Object(N.jsx)("button",{type:"submit",children:"Login"})]}),Object(N.jsx)("hr",{}),Object(N.jsxs)("p",{children:["Don't have an account? ",Object(N.jsx)(b.b,{to:"/gbCourse5Hw/signup",children:"Sign up"})]})]})})},_e=a(18),He=a(78),De=["authenticated"];function Re(e){var t=e.authenticated,a=Object(He.a)(e,De);return t?Object(N.jsx)(d.b,Object(_e.a)({},a)):Object(N.jsx)(d.a,{to:{pathname:"".concat(S,"/login")}})}var Fe=["authenticated"];function We(e){var t=e.authenticated,a=Object(He.a)(e,Fe);return t?Object(N.jsx)(d.a,{to:"".concat(S,"/chats")}):Object(N.jsx)(d.b,Object(_e.a)({},a))}var Me=Object(h.a)((function(e){return{header:{display:"flex",justifyContent:"space-around",minHeight:"50px",alignItems:"center","&>a":{display:"flex",alignItems:"center",height:"50px",textDecoration:"none",backgroundColor:"#ccc",color:"#708238",padding:"0 30px"}},message:{border:"1px solid black",borderRadius:"10px",marginBottom:"10px",position:"relative"},messageHeader:{textAlign:"left",margin:"10px 20px"},messageText:{textAlign:"left",margin:"10px 20px"},messageAuthor:{textAlign:"right",margin:"10px 20px"},smallText:{fontSize:"14px",color:"#AAA",fontWeight:"normal"}}}));var Le=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),a=t[0],n=t[1],r=Object(o.c)(),s=Me();return Object(c.useEffect)((function(){return a&&r(m()),Object(O.b)(be,(function(e){e?(r(m()),n(!0)):n(!1)}))}),[]),Object(N.jsxs)(b.a,{children:[Object(N.jsxs)("header",{className:s.header,children:[Object(N.jsx)(b.b,{to:"".concat(S,"/"),children:"Main"}),Object(N.jsx)(b.b,{to:"".concat(S,"/chats"),children:"Chats"}),Object(N.jsx)(b.b,{to:"".concat(S,"/profile"),children:"Profile"}),Object(N.jsx)(b.b,{to:"".concat(S,"/news"),children:"News"}),Object(N.jsx)(b.b,{to:"".concat(S,"/signup"),children:"Registration"}),Object(N.jsx)(b.b,{to:"".concat(S,"/login"),children:"Login"})]}),Object(N.jsxs)(d.d,{children:[Object(N.jsx)(Re,{authenticated:a,path:"".concat(S,"/chats/:chatId?"),children:Object(N.jsx)(se,{})}),Object(N.jsx)(Re,{authenticated:a,path:"".concat(S,"/profile"),children:Object(N.jsx)(Oe,{})}),Object(N.jsx)(We,{authenticated:a,path:"".concat(S,"/nochat"),children:Object(N.jsx)("h4",{children:"\u0417\u0434\u0435\u0441\u044c \u0440\u044b\u0431\u044b \u043d\u0435\u0442"})}),Object(N.jsx)(Re,{authenticated:a,path:"".concat(S,"/news"),children:Object(N.jsx)(Ie,{})}),Object(N.jsx)(We,{authenticated:a,path:"".concat(S,"/signup"),children:Object(N.jsx)(Te,{})}),Object(N.jsx)(We,{authenticated:a,path:"".concat(S,"/login"),children:Object(N.jsx)(ke,{})}),Object(N.jsx)(We,{exact:!0,authenticated:a,path:"".concat(S,"/"),children:Object(N.jsx)(A,{})}),Object(N.jsx)(d.b,{authenticated:a,children:Object(N.jsx)("h4",{children:"404"})})]})]})},Ge=a(41),Pe=a(100),Ue=a(82),Be=a(98),qe=a.n(Be),Ve={profile:{checkboxState:!1,name:"Name",wrongName:!1},chats:{},news:{newsList:[],error:{status:!1,message:""},status:f}};var Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(_e.a)(Object(_e.a)({},e),{},{name:t.name});case ie:return/bot/i.test(t.name)?Object(_e.a)(Object(_e.a)({},e),{},{wrongName:!0}):Object(_e.a)(Object(_e.a)({},e),{},{name:t.name,wrongName:!1});default:return e}},ze=a(39),Ke=a(4),Je=Ve.chats;var Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(_e.a)({},t.chats);case U:var a="chatId".concat(+new Date);return Object(_e.a)(Object(_e.a)({},e),{},Object(Ke.a)({},a,{name:t.chatName,id:a,messages:[]}));case q:return delete e[t.chatId],Object(_e.a)({},e);case $:return t.chatId&&e[t.chatId]?Object(_e.a)(Object(_e.a)({},e),{},Object(Ke.a)({},t.chatId,Object(_e.a)(Object(_e.a)({},e[t.chatId]),{},{messages:[].concat(Object(ze.a)(e[t.chatId].messages),[{header:t.messageTheme,text:t.messageText,author:t.messageAuthor,id:"message-".concat(+new Date)}])}))):e;case y:var c=!!t.chatId&&!!e[t.chatId]&&e[t.chatId].messages.filter((function(e){return e.id!==t.messageId}));return Object(_e.a)(Object(_e.a)({},e),{},Object(Ke.a)({},t.chatId,Object(_e.a)(Object(_e.a)({},e[t.chatId]),{},{messages:Object(ze.a)(c)})));default:return e}},Ze={news:[],error:{status:!1,message:""},status:"idle"};var Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge:return Object(_e.a)(Object(_e.a)({},e),{},{error:Object(_e.a)(Object(_e.a)({},e.error),{},{status:!1}),status:g});case ve:return Object(_e.a)(Object(_e.a)({},e),{},{newsList:t.news,status:v});case we:return Object(_e.a)(Object(_e.a)({},e),{},{error:Object(_e.a)(Object(_e.a)({},e.error),{},{status:!0,message:t.errorMessage}),status:w});default:return e}},$e=a(33),et=a(64),tt=function(e){return fetch(e).then((function(e){if(!e.ok)throw Error(e.status+" "+e.statusText);return e.json()})).then((function(e){return e})).catch((function(e){throw e}))},at=Ee.a.mark((function e(t){var a,c,n,r,s;return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,"message-".concat(+new Date);case 3:return a=e.sent,e.next=6,Object(oe.d)(de,"chats/".concat(t.chatId,"/messages/").concat(a));case 6:return c=e.sent,e.next=9,Object(oe.g)(c,{id:a,header:t.messageTheme,text:t.messageText,author:t.messageAuthor});case 9:if("Bot"===t.messageAuthor||"Bot"!==t.chatName){e.next=29;break}return e.prev=10,e.next=13,Object(et.b)(2e3);case 13:return e.next=15,Object(et.a)(tt,"https://api.openweathermap.org/data/2.5/weather?id=498817&appid=f0694cc740867c7440b3be0552c0bf8f");case 15:return n=e.sent,e.next=18,"message-".concat(+new Date);case 18:return r=e.sent,e.next=21,Object(oe.d)(de,"chats/".concat(t.chatId,"/messages/").concat(r));case 21:return s=e.sent,e.next=24,Object(oe.g)(s,{id:r,header:"\u041f\u043e\u0433\u043e\u0434\u0430",text:"\u041f\u043e\u0433\u043e\u0434\u0430 \u0432 \u041f\u0438\u0442\u0435\u0440\u0435 ".concat(n.clouds.all>50?"\u043e\u0431\u043b\u0430\u0447\u043d\u0430\u044f":"\u0431\u0435\u0437\u043e\u0431\u043b\u0430\u0447\u043d\u0430\u044f","\n\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 ").concat((n.main.temp-273).toFixed(1)," \xb0C\n\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c ").concat(n.main.humidity," %\n\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u0435\u0442\u0440\u0430 ").concat(n.wind.speed," \u043c/\u0441"),author:"Bot"});case 24:e.next=29;break;case 26:e.prev=26,e.t0=e.catch(10),console.log(e.t0.message);case 29:e.next=34;break;case 31:e.prev=31,e.t1=e.catch(0),console.log(e.t1);case 34:case 35:case"end":return e.stop()}}),e,null,[[0,31],[10,26]])})),ct=Ee.a.mark((function e(t){var a;return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(oe.d)(de,"chats/".concat(t.chatId,"/messages/").concat(t.messageId));case 3:return a=e.sent,e.next=6,Object(oe.e)(a);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case 12:case"end":return e.stop()}}),e,null,[[0,8]])})),nt=Ee.a.mark((function e(t){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object($e.b)((a=t.name,{type:ie,name:a}));case 3:return e.next=5,Object(oe.f)(Object(oe.d)(de,"profile/".concat(be.currentUser.uid)),{username:t.name});case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,console.log(e.t0.message);case 11:case"end":return e.stop()}var a}),e,null,[[0,7]])})),rt=Ee.a.mark((function e(){var t,a;return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(oe.a)(Object(oe.d)(de,"profile/".concat(be.currentUser.uid,"/username")),(function(e){return e.val()}));case 3:return t=e.sent,e.next=6,t.val();case 6:return a=e.sent,e.next=9,Object($e.b)({type:p,name:a});case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),e.next=15,console.log(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})),st=function(e){return fetch(e).then((function(e){if(!e.ok)throw Error(e.status+" "+e.statusText);return e.json()})).then((function(e){return e})).catch((function(e){throw e}))},ot=Ee.a.mark((function e(t){var a;return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object($e.b)({type:ge});case 3:return e.next=5,Object($e.a)(st,"https://api.currentsapi.services/v1/latest-news?language=ru&apiKey=6qmiCnF5XcC6Zt8s4fj5gRg9kBKB58XFqw8Rw6QqsYOtD1M8");case 5:return a=e.sent,e.next=8,Object($e.b)(Ne(a.news));case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object($e.b)((t=e.t0.message,{type:we,errorMessage:t}));case 14:case"end":return e.stop()}var t}),e,null,[[0,10]])})),it=Ee.a.mark((function e(){var t;return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(oe.d)(de,"chats");case 3:return t=e.sent,e.next=6,Object(oe.c)(t,(function(e){var t=e.val();gt.dispatch(K(t||{}))}));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})),ut=Ee.a.mark((function e(t){var a,c;return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,"chatId".concat(+new Date);case 3:return a=e.sent,e.next=6,Object(oe.d)(de,"chats/".concat(a));case 6:return c=e.sent,e.next=9,Object(oe.f)(Object(oe.d)(de,"profile/".concat(be.currentUser.uid,"/myChats/").concat(a)),{chatName:t.chatName});case 9:return e.next=11,Object(oe.f)(c,{name:t.chatName,id:a,messages:"",users:be.currentUser.uid});case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case 17:case"end":return e.stop()}}),e,null,[[0,13]])})),lt=Ee.a.mark((function e(t){var a;return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(oe.d)(de,"chats/".concat(t.chatId));case 3:return a=e.sent,e.next=6,Object(oe.e)(a);case 6:return e.next=8,Object(oe.e)(Object(oe.d)(de,"profile/".concat(be.currentUser.uid,"/myChats/").concat(t.chatId)));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})),jt=Ee.a.mark(bt);function bt(){return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($e.c)(ee,at);case 2:return e.next=4,Object($e.c)(T,ct);case 4:return e.next=6,Object($e.d)(Se,ot);case 6:return e.next=8,Object($e.d)(ue,nt);case 8:return e.next=10,Object($e.d)(x,rt);case 10:return e.next=12,Object($e.d)(J,it);case 12:return e.next=14,Object($e.d)(B,ut);case 14:return e.next=16,Object($e.d)(V,lt);case 16:case"end":return e.stop()}}),jt)}var dt=bt,ht=Object(Ge.b)({profile:Xe,chats:Qe,news:Ye}),Ot={onError:function(e,t){console.log("qqq"+e),console.log(t)}},pt=Object(Pe.a)(Ot),xt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ge.c,mt={key:"root",storage:qe.a},ft=Object(Ue.a)(mt,ht),gt=Object(Ge.d)(ft,Ve,xt(Object(Ge.a)(pt)));pt.run(dt);var vt=Object(Ue.b)(gt),wt=Object(u.a)({palette:{primary:{main:"#708238"},secondary:{main:"#0098FF"}}});var St=function(){return Object(N.jsx)(o.a,{store:gt,children:Object(N.jsx)(i.a,{persistor:vt,children:Object(N.jsx)(l.a,{theme:wt,children:Object(N.jsx)("div",{className:"App",children:Object(N.jsx)(Le,{})})})})})},Nt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,168)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(N.jsx)(n.a.StrictMode,{children:Object(N.jsx)(St,{})}),document.getElementById("root")),Nt()}},[[124,1,2]]]);
//# sourceMappingURL=main.722752db.chunk.js.map