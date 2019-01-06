(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){},32:function(e,t,a){e.exports=a(65)},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),o=a.n(c),l=a(7),s=a(8),i=a(10),m=a(9),u=a(11),d=a(67),p=a(68),h=a(69),f=a(3),b=a.n(f),E=a(12),v=a(31),y=a(16),N=a(13),g=a.n(N),j=r.a.createContext(),O=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==t.payload})});case"ADD_CONTACT":return Object(y.a)({},e,{contacts:[t.payload].concat(Object(v.a)(e.contacts))});case"UPDATE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.map(function(e){return e.id===t.payload.id?e=t.payload:e})});default:return e}},C=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={deleteHandler:a.deleteHandler,contacts:[],posts:[],dispatch:function(e){return a.setState(function(t){return O(t,e)})}},a.deleteHandler=function(){console.log("deleteHandler Called")},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(j.Provider,{value:this.state},this.props.children)}}]),t}(r.a.Component),k=j.Consumer,w=(a(59),a(66)),x=(a(27),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},a.onShowClick=function(e,t){a.setState({showContactInfo:!a.state.showContactInfo})},a.onDeleteClick=function(){var e=Object(E.a)(b.a.mark(function e(t,a){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 2:a({type:"DELETE_CONTACT",payload:t});case 3:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t={cursor:"pointer"},a=this.props.contact,n=a.id,c=a.name,o=a.email,l=a.phone,s=this.state.showContactInfo,i="fas ".concat(s?"fa-angle-double-down":"fa-angle-double-left");return r.a.createElement(k,null,function(a){return r.a.createElement("div",{className:"card card-body mb-3 card-padding"},r.a.createElement("h6",null,r.a.createElement("span",{onClick:e.onShowClick,style:t},c,"\xa0",r.a.createElement("i",{className:i,style:t})),r.a.createElement("i",{className:"fas fa-times mr-auto",style:Object(y.a)({},t,{color:"red",float:"right"}),onClick:e.onDeleteClick.bind(e,n,a.dispatch)}),r.a.createElement(w.a,{to:"/contact/edit/".concat(n)},r.a.createElement("i",{className:"fas fa-pencil-alt cursor-pointer",style:{color:"black",float:"right",marginRight:"1rem"}}))),s?r.a.createElement("ul",{className:"list-group mt-4"},r.a.createElement("li",{className:"list-group-item"},"Email: ",o),r.a.createElement("li",{className:"list-group-item"},"Phone: ",l)):null)})}}]),t}(n.Component)),S=function(e){return r.a.createElement(k,null,function(e){return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"row d-flex justify-content-between"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("h3",null,"Contacts")),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("input",{className:"form-control form-control-sm",placeholder:"Search..."})))),r.a.createElement("div",{className:"card-body"},e.contacts.map(function(e){return r.a.createElement(x,{key:e.id,contact:e})}))))})},A=a(15),H=a(14),D=a(29),T=a.n(D),P=function(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:e.name},e.placeholder),r.a.createElement("input",Object.assign({},e,{className:T()("form-control form-control-lg",{"is-invalid":e.error})})),e.error&&r.a.createElement("div",{className:"invalid-feedback"},e.error))};P.defaultProps={type:"text",value:"",autoComplete:"off"};var B=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={name:"",email:"",phone:"",errors:{}},a.onChangeHandler=function(e){a.setState(Object(A.a)({},e.target.name,e.target.value))},a.onSubmitHandler=function(){var e=Object(E.a)(b.a.mark(function e(t,n){var r,c,o,l,s,i;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,console.log(n.target.value),c.trim()){e.next=6;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 6:if(""!==o){e.next=9;break}return a.setState({errors:{email:"email is required"}}),e.abrupt("return");case 9:if(""!==l){e.next=12;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 12:return s={name:c,email:o,phone:l},e.next=15,g.a.post("https://jsonplaceholder.typicode.com/users",s);case 15:i=e.sent,t({type:"ADD_CONTACT",payload:i.data}),a.setState({name:"",email:"",phone:"",errors:{}}),console.log(a.props.history),a.props.history.push("/");case 20:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a.onBlurHandler=function(e){},a.renderForm=function(e){var t=a.state,n=t.name,c=t.email,o=t.phone,l=t.errors;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:a.onSubmitHandler.bind(Object(H.a)(Object(H.a)(a)),e)},r.a.createElement(P,{name:"name",placeholder:"Enter Name...",value:n,onChange:a.onChangeHandler,onBlur:a.onBlurHandler,error:l.name}),r.a.createElement(P,{name:"email",type:"email",placeholder:"Enter Email...",value:c,onChange:a.onChangeHandler,onBlur:a.onBlurHandler,error:l.email}),r.a.createElement(P,{name:"phone",placeholder:"Enter Phone...",value:o,onChange:a.onChangeHandler,onBlur:a.onBlurHandler,error:l.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(k,null,function(t){var a=t.dispatch;return e.renderForm(a)})}}]),t}(n.Component),q=function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},e.branding),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/about/1",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About with ID"))))))};q.defaultProps={branding:"My App"};var F=q,I=function(e){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Page ",e.match.params.id),r.a.createElement("p",{className:"lead"},"Simple App to manage contact"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))},M=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",null,"Sorry, that page does not exists."))},_=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",body:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(b.a.mark(function e(){var t=this;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts/1").then(function(e){return e.json()}).then(function(e){console.log(e),t.setState({title:e.title,body:e.body})});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,this.state.title),r.a.createElement("p",null,this.state.body))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onChangeHandler=function(e){a.setState(Object(A.a)({},e.target.name,e.target.value))},a.onSubmitHandler=function(){var e=Object(E.a)(b.a.mark(function e(t,n){var r,c,o,l,s,i;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,c.trim()){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},e.next=14,g.a.put("https://jsonplaceholder.typicode.com/users/".concat(a.id),s);case 14:i=e.sent,t({type:"UPDATE_CONTACT",payload:i.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 18:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a.renderForm=function(e){var t=a.state,n=t.name,c=t.email,o=t.phone,l=t.errors;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:a.onSubmitHandler.bind(Object(H.a)(Object(H.a)(a)),e)},r.a.createElement(P,{name:"name",placeholder:"Enter Name...",value:n,onChange:a.onChangeHandler,error:l.name}),r.a.createElement(P,{name:"email",type:"email",placeholder:"Enter Email...",value:c,onChange:a.onChangeHandler,error:l.email}),r.a.createElement(P,{name:"phone",placeholder:"Enter Phone...",value:o,onChange:a.onChangeHandler,error:l.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-light btn-block"}))))},a.state={name:"",email:"",phone:"",errors:{}},a.id=a.props.match.params.id,a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(b.a.mark(function e(){var t,a,n,r,c;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://jsonplaceholder.typicode.com/users/".concat(this.id));case 2:t=e.sent,a=t.data,n=a.name,r=a.email,c=a.phone,this.setState({name:n,email:r,phone:c});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.name?r.a.createElement(k,null,function(t){var a=t.dispatch;return e.renderForm(a)}):r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"loader"}))}}]),t}(n.Component),U=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(C,null,r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(F,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(p.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:S}),r.a.createElement(h.a,{exact:!0,path:"/contact/add",component:B}),r.a.createElement(h.a,{exact:!0,path:"/contact/edit/:id",component:L}),r.a.createElement(h.a,{exact:!0,path:"/about",component:I}),r.a.createElement(h.a,{exact:!0,path:"/about/:id",component:I}),r.a.createElement(h.a,{exact:!0,path:"/test",component:_}),r.a.createElement(h.a,{component:M}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,2,1]]]);
//# sourceMappingURL=main.f9a0338c.chunk.js.map