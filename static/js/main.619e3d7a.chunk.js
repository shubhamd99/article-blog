(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{52:function(e,t,a){e.exports=a(97)},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(32),c=a.n(l),o=(a(58),a(59),a(12)),i=a(13),m=a(15),s=a(14),u=a(16),E=(a(60),a(107)),p=a(106),d=(a(61),a(98)),h=a(99),b=a(44),v=a(100),f=a(101),g=a(102),y=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{className:"home-grid"},r.a.createElement(h.a,null,r.a.createElement(b.a,{className:"home-col",sm:12},r.a.createElement("h1",null,"Welcome to the Article World"))),r.a.createElement(h.a,null,r.a.createElement(b.a,{sm:12},r.a.createElement(v.a,{className:"button-toolbar"},r.a.createElement(f.a,{variant:"danger",size:"lg"},r.a.createElement(g.a,{to:"/article",style:{textDecoration:"none",color:"white"}},"Article Feed")),r.a.createElement(f.a,{variant:"danger",size:"lg"},r.a.createElement(g.a,{to:"/write",style:{textDecoration:"none",color:"white"}},"Write Article"))))),r.a.createElement(h.a,null,r.a.createElement(b.a,{sm:12,className:"home-bottom-grid"},r.a.createElement("div",null))))}}]),t}(n.Component),O=a(51),j=a(104),w=(a(64),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",title:"",article:""},a.validate=function(){var e=!1,t={};return a.state.article.length<100&&(e=!0,t.articleError=alert("Article needs to be atleast 100 characters long")),e&&a.setState(Object(O.a)({},a.state,t)),e},a.onSubmitForm=function(){a.validate()||fetch("https://young-retreat-10768.herokuapp.com/write",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a.state.name,title:a.state.title,article:a.state.article})}).then(function(e){return e.json()})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(j.a,{className:"article-form",onSubmit:function(){return e.onSubmitForm()}},r.a.createElement("h1",{style:{paddingBottom:"10px"}},"Write an Article"),r.a.createElement(j.a.Group,{controlId:"exampleForm.ControlInput1"},r.a.createElement(j.a.Label,null,"Full Name"),r.a.createElement(j.a.Control,{type:"text",required:!0,name:"fullname",value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})}})),r.a.createElement(j.a.Group,{controlId:"exampleForm.ControlInput1"},r.a.createElement(j.a.Label,null,"Title"),r.a.createElement(j.a.Control,{type:"text",required:!0,name:"title",value:this.state.title,onChange:function(t){return e.setState({title:t.target.value})}})),r.a.createElement(j.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(j.a.Label,null,"Body"),r.a.createElement(j.a.Control,{as:"textarea",required:!0,rows:"10",name:"article",value:this.state.article,onChange:function(t){return e.setState({article:t.target.value})}})),r.a.createElement(f.a,{variant:"danger",type:"submit"},"Submit")),r.a.createElement("div",{className:"article-bottom-grid"}))}}]),t}(n.Component)),x=(a(65),a(47)),C=a.n(x),N=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(s.a)(t).call(this))).state={categories:[]},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;C.a.get("https://young-retreat-10768.herokuapp.com/article").then(function(t){e.setState({categories:t.data})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"article-main"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"article"},this.state.categories.map(function(e){return r.a.createElement("div",{className:"cards"},r.a.createElement("h2",null,e.title),r.a.createElement("p",null,e.article),r.a.createElement("p",null,r.a.createElement("strong",null,e.name)),r.a.createElement("small",null,"Date - ",e.date))}))),r.a.createElement("div",{className:"article-bottom-grid"}))}}]),t}(n.Component),k=a(105),S=a(103),A=a(46),F=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(k.a,{collapseOnSelect:!0,expand:"md",bg:"light",variant:"light"},r.a.createElement(k.a.Brand,null,r.a.createElement(g.a,{to:"/",style:{textDecoration:"none",color:"#3E3E3E  "}},"Article World")),r.a.createElement(S.a,{className:"mr-auto"},r.a.createElement(S.a.Link,null,r.a.createElement(g.a,{to:"/article",style:{textDecoration:"none",color:"#545454"}},"Article Feed")),r.a.createElement(k.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(S.a.Link,null,r.a.createElement(g.a,{to:"/write",style:{textDecoration:"none",color:"#545454"}},"Write One")))),r.a.createElement(k.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(j.a,{inline:!0,className:"nav-form-button"},r.a.createElement(A.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),r.a.createElement(f.a,{variant:"outline-danger"},"Search"))))}}]),t}(n.Component),W=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement("div",null,r.a.createElement(F,null),r.a.createElement(p.a,{exact:!0,path:"/",component:y}),r.a.createElement(p.a,{path:"/article",component:N}),r.a.createElement(p.a,{path:"/write",component:w})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[52,1,2]]]);
//# sourceMappingURL=main.619e3d7a.chunk.js.map