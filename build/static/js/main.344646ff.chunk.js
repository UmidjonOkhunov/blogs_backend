(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{63:function(e,t,n){e.exports=n(92)},92:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),u=n.n(c),l=n(7),o=n(11),i=n(94),s=function(e){var t=e.blog;return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(o.b,{to:"/blogs/".concat(t.id)},t.title)),r.a.createElement("td",null," ",t.author," "))},p=function(){var e=Object(l.c)((function(e){return e.blogs.filter((function(t){return t.title.toLowerCase().includes(e.filter)}))}));return r.a.createElement(i.a,{striped:!0},r.a.createElement("tbody",null,e.map((function(e){return r.a.createElement(s,{key:e.id,blog:e})}))))},f=n(36),m=n(8),d=n(4),v=n.n(d),b=n(6),E=n(15),g=n.n(E),h=null,w={getAll:function(){var e=Object(b.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("/api/blogs");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(b.a)(v.a.mark((function e(t){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:h}},e.next=3,g.a.post("/api/blogs",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(b.a)(v.a.mark((function e(t,n){var a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:h}},e.next=3,g.a.put("".concat("/api/blogs","/").concat(t),n,a);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(b.a)(v.a.mark((function e(t){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:h}},e.next=3,g.a.delete("".concat("/api/blogs","/").concat(t),n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){h="bearer ".concat(e)}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_BLOG":return e.concat(t.data);case"LIKE":var n=t.data.id,a=e.find((function(e){return e.id===n})),r=Object(f.a)({},a,{likes:a.likes+1});return e.map((function(e){return e.id!==n?e:r}));case"DELETE":var c=t.data.id;return e.filter((function(e){return e.id!==c}));case"INIT_BLOGS":return t.data;default:return e}},O=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return(function(){var a=Object(b.a)(v.a.mark((function a(r){return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r({type:"SET_NOTIFICATION",notification:t}),setTimeout((function(){r(e(null))}),1e3*n);case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTIFICATION":return t.notification;default:return e}},x=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.blogs.filter((function(t){return t.title.includes(e.filter)}))})),n=Object(m.h)().id,a=t.find((function(e){return e.id===n}));if(!a)return null;var c=function(t){var n=Object(f.a)({},t,{likes:t.likes+1});e(function(e,t){return function(){var n=Object(b.a)(v.a.mark((function n(a){return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.update(e,t);case 2:a({type:"LIKE",data:{id:e}});case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(t.id,n)),e(O("you voted '".concat(t.title,"'"),10))},u=function(t){e(function(e){return function(){var t=Object(b.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.remove(e);case 2:n({type:"DELETE",data:{id:e}});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))};return r.a.createElement("div",null,r.a.createElement("h2",null," ",a.title," "),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return c(a)}},"like")," ",a.likes," "),r.a.createElement("button",{onClick:function(){return u(n)}},"delete"),r.a.createElement("div",null,a.author),r.a.createElement("a",{href:a.url},a.url))},j=function(e){var t=e.user;return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(o.b,{to:"/users/".concat(t.id)},t.username)),r.a.createElement("td",null," ",t.blogs.length," "))},L=function(){var e=Object(l.c)((function(e){return e.users}));return console.log("diplaying",e),r.a.createElement(i.a,{striped:!0},r.a.createElement("tbody",null,e.map((function(e){return r.a.createElement(j,{key:e.id,user:e})}))))},S=function(){var e=Object(m.h)().id,t=Object(l.c)((function(t){return t.users.find((function(t){return t.id===e}))})),n=Object(l.c)((function(e){return e.blogs.filter((function(e){return e.author===t.username}))}));return r.a.createElement("div",null,r.a.createElement("h2",null," ",t.username," "),r.a.createElement("h3",null,"Added Blogs"),r.a.createElement(i.a,{striped:!0},r.a.createElement("tbody",null,n.map((function(e){return r.a.createElement(s,{key:e.id,blog:e})})))))},I=n(100),T=function(){var e=Object(l.c)((function(e){return e.notification}));return r.a.createElement("div",null,e&&r.a.createElement(I.a,{variant:"success"},e))},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FILTER":return t.filter;default:return e}},C=n(95),A=n(56),G=n(96),_=function(){var e=Object(l.b)();return r.a.createElement("div",{style:{paddingTop:10}},r.a.createElement(C.a,{className:"mb-3",onChange:function(t){e({type:"SET_FILTER",filter:t.target.value.toLowerCase()})}},r.a.createElement(A.a,{placeholder:"Search here","aria-label":"Search here","aria-describedby":"basic-addon2"}),r.a.createElement(C.a.Append,null,r.a.createElement(G.a,{variant:"outline-secondary"},"Search"))))},B={login:function(){var e=Object(b.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},U=function(e){return function(){var t=Object(b.a)(v.a.mark((function t(n){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.login(e);case 2:a=t.sent,window.localStorage.setItem("loggedUser",JSON.stringify(a)),w.setToken(a.token),n({type:"LOGIN",data:a});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return t.data;case"LOGOUT":return null;default:return e}},D=n(97),F=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.user})),n=Object(m.g)();t&&n.push("/");var a=function(){var t=Object(b.a)(v.a.mark((function t(a){var r,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,r=a.target.username.value,a.target.username.value="",c=a.target.password.value,a.target.password.value="",t.next=8,e(U({username:r,password:c}));case 8:n.push("/"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),e(O("Wrong credentials",10));case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h2",null,"Login"),r.a.createElement(D.a,{onSubmit:a},r.a.createElement(D.a.Group,null,r.a.createElement(D.a.Label,null,"username:"),r.a.createElement(D.a.Control,{type:"text",name:"username"}),r.a.createElement(D.a.Label,null,"password:"),r.a.createElement(D.a.Control,{type:"password",name:"password"}),r.a.createElement(G.a,{variant:"primary",type:"submit"},"Login"),r.a.createElement(o.b,{style:{paddingLeft:"15px"},to:"/signup"},"Sign Up"))))},z=null,J={getAll:function(){var e=Object(b.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("/api/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(b.a)(v.a.mark((function e(t){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:z}},e.next=3,g.a.post("/api/users",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(b.a)(v.a.mark((function e(t,n){var a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:z}},e.next=3,g.a.put("".concat("/api/users","/").concat(t),n,a);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(b.a)(v.a.mark((function e(t){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:z}},e.next=3,g.a.delete("".concat("/api/users","/").concat(t),n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){z="bearer ".concat(e)}},W=function(e){return function(){var t=Object(b.a)(v.a.mark((function t(n){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J.create(e);case 2:a=t.sent,n({type:"SIGN_UP",data:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_UP":return e.concat(t.data);case"INIT_USERS":return t.data;default:return e}},H=function(){var e=Object(l.b)(),t=Object(m.g)(),n=function(){var n=Object(b.a)(v.a.mark((function n(a){var r,c,u,l;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.preventDefault(),n.prev=1,r=a.target.name.value,a.target.name.value="",c=a.target.username.value,a.target.username.value="",u=a.target.password.value,a.target.password.value="",l=a.target.password2.value,a.target.password2.value="",u===l){n.next=13;break}return e(O("Passwords do not match",10)),n.abrupt("return");case 13:return n.next=15,e(W({username:c,name:r,password:u}));case 15:t.push("/"),n.next=21;break;case 18:n.prev=18,n.t0=n.catch(1),e(O("Wrong credentials",10));case 21:case"end":return n.stop()}}),n,null,[[1,18]])})));return function(e){return n.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h2",null,"Signup"),r.a.createElement(D.a,{onSubmit:n},r.a.createElement(D.a.Group,null,r.a.createElement(D.a.Label,null,"Full Name:"),r.a.createElement(D.a.Control,{type:"text",name:"name"}),r.a.createElement(D.a.Label,null,"username:"),r.a.createElement(D.a.Control,{type:"text",name:"username"}),r.a.createElement(D.a.Label,null,"password:"),r.a.createElement(D.a.Control,{type:"password",name:"password"}),r.a.createElement(D.a.Label,null,"repeat your password:"),r.a.createElement(D.a.Control,{type:"password",name:"password2"}),r.a.createElement(G.a,{variant:"primary",type:"submit"},"Signup"))))},K=n(62),V=r.a.forwardRef((function(e,t){var n=Object(a.useState)(!1),c=Object(K.a)(n,2),u=c[0],l=c[1],o={display:u?"none":"",paddingBottom:"10px"},i={display:u?"":"none",paddingBottom:"10px"},s=function(){l(!u)};return Object(a.useImperativeHandle)(t,(function(){return{toggleVisibility:s}})),r.a.createElement("div",null,r.a.createElement("div",{style:o},r.a.createElement(G.a,{variant:"secondary",onClick:s},e.buttonLabel)),r.a.createElement("div",{style:i},e.children,r.a.createElement(G.a,{variant:"secondary",onClick:s},"cancel")))}));V.displayName="Togglable";var M=V,q=function(e){var t=e.blogFormRef,n=Object(l.b)();return r.a.createElement("div",null,r.a.createElement("h2",null,"New Blog"),r.a.createElement(D.a,{onSubmit:function(e){e.preventDefault(),t.current.toggleVisibility();var a=e.target.title.value;e.target.title.value="";var r=e.target.url.value;e.target.url.value="";var c,u=window.localStorage.getItem("loggedUser"),l={title:a,author:JSON.parse(u).username,url:r};n((c=l,function(){var e=Object(b.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.create(c);case 2:n=e.sent,t({type:"NEW_BLOG",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement(D.a.Group,null,r.a.createElement(D.a.Label,null,"title:"),r.a.createElement(D.a.Control,{type:"text",name:"title"}),r.a.createElement(D.a.Label,null,"url:"),r.a.createElement(D.a.Control,{type:"text",name:"url"}),r.a.createElement(G.a,{variant:"primary",type:"submit"},"create"))))},Q=n(99),X=n(98),Y=function(){var e=Object(a.useRef)(),t=Object(l.b)(),n=Object(l.c)((function(e){return e.user})),c={padding:5};Object(a.useEffect)((function(){t(function(){var e=Object(b.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getAll();case 2:n=e.sent,t({type:"INIT_BLOGS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t(function(){var e=Object(b.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.getAll();case 2:n=e.sent,t({type:"INIT_USERS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[t]),Object(a.useLayoutEffect)((function(){t(function(){var e=Object(b.a)(v.a.mark((function e(t){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=window.localStorage.getItem("loggedUser"))&&(a=JSON.parse(n),w.setToken(a.token),t({type:"LOGIN",data:a}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[t]);return r.a.createElement("div",{className:"container"},r.a.createElement(o.a,null,r.a.createElement(Q.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(Q.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(Q.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(X.a,{className:"mr-auto"},r.a.createElement(X.a.Link,{href:"#",as:"span"},r.a.createElement(o.b,{style:c,to:"/"},"Home")),r.a.createElement(X.a.Link,{href:"#",as:"span"},r.a.createElement(o.b,{style:c,to:"/blogs"},"Blogs")),r.a.createElement(X.a.Link,{href:"#",as:"span"},r.a.createElement(o.b,{style:c,to:"/users"},"Users")),r.a.createElement(X.a.Link,{href:"#",as:"span"},n&&r.a.createElement("div",null,r.a.createElement("em",null,n.username," logged in")))),r.a.createElement(X.a,null,r.a.createElement(X.a.Link,{href:"#",as:"span",className:"mr-sm-2"},n?r.a.createElement("em",{style:c,onClick:function(){t((window.localStorage.clear(),function(){var e=Object(b.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"LOGOUT",data:null});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}}," ","Logout"," "):r.a.createElement(o.b,{to:"/login"},"Login"))))),r.a.createElement(T,null),r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/blogs/:id"},r.a.createElement(x,null)),r.a.createElement(m.b,{path:"/blogs"},r.a.createElement(p,null)),r.a.createElement(m.b,{path:"/users/:id",render:function(){return n?r.a.createElement(S,null):r.a.createElement(m.a,{to:"/login"})}}),r.a.createElement(m.b,{path:"/users",render:function(){return n?r.a.createElement(L,null):r.a.createElement(m.a,{to:"/login"})}}),r.a.createElement(m.b,{path:"/login"},r.a.createElement(F,null)),r.a.createElement(m.b,{path:"/signup"},r.a.createElement(H,null)),r.a.createElement(m.b,{path:"/",render:function(){return r.a.createElement("div",null,r.a.createElement(_,null),n&&r.a.createElement(M,{buttonLabel:"new blog",ref:e},r.a.createElement(q,{blogFormRef:e})),r.a.createElement(p,null))}})),r.a.createElement("div",{className:"container"},r.a.createElement("i",null,"Blog app, Department of Computer Science 2020"))))},Z=n(24),$=n(60),ee=n(61),te=Object(Z.combineReducers)({blogs:y,notification:k,filter:N,user:R,users:P}),ne=Object(Z.createStore)(te,Object(ee.composeWithDevTools)(Object(Z.applyMiddleware)($.a)));u.a.render(r.a.createElement(l.a,{store:ne},r.a.createElement(Y,null)),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.344646ff.chunk.js.map