(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{115:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=a(8),s=a(35),u=a(9),i=a(11),m=a.n(i),d=a(20),f="[UI] open modal",p="[UI] close modal",v="[event] add new",b="[event] logout",E="[event] set active",h="[event] clear active event",g="[evetn] event updated",O="[event] event deleted",j="[event] events loaded",y="[auth] finish checking login state",N="[auth] login",w="[auth] logout",k=a(13),x=a.n(k),S="https://mern-calendar-mal.herokuapp.com/api",C=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(S,"/").concat(e);return"GET"===a?fetch(n):fetch(n,{method:a,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})},T=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(S,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===a?fetch(n,{method:a,headers:{"x-token":r}}):fetch(n,{method:a,headers:{"Content-Type":"application/json","x-token":r},body:JSON.stringify(t)})},D=a(4),I=a(15),P=a.n(I),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(D.a)(Object(D.a)({},e),{},{end:P()(e.end).toDate(),start:P()(e.start).toDate()})}))},_=function(e){return{type:v,payload:e}},R=function(e){return{type:g,payload:e}},G=function(){return{type:h}},L=function(e){return{type:j,payload:e}},M=function(e){return{type:N,payload:e}},U=function(){return function(e){localStorage.clear(),e(V()),e({type:b})}},V=function(){return{type:w}},F=function(){return{type:y}},H=a(17),J=a(24),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(H.a)(t,2),r=a[0],c=a[1],o=function(){c(e)},l=function(e){var t=e.target;c(Object(D.a)(Object(D.a)({},r),{},Object(J.a)({},t.name,t.value)))};return[r,l,o]},X=(a(76),function(){var e=Object(l.b)(),t=B({lEmail:"mama@mia.comm",lPassword:"123456"}),a=Object(H.a)(t,2),n=a[0],c=a[1],o=B({rName:"Mariano",rEmail:"mari@ano.com",rPassword:"123456",rPassword2:"123456"}),s=Object(H.a)(o,2),u=s[0],i=s[1],f=n.lEmail,p=n.lPassword,v=u.rName,b=u.rEmail,E=u.rPassword,h=u.rPassword2;return r.a.createElement("div",{className:"container login-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 login-form-1"},r.a.createElement("h3",null,"Ingreso"),r.a.createElement("form",{onSubmit:function(t){var a,n;t.preventDefault(),e((a=f,n=p,function(){var e=Object(d.a)(m.a.mark((function e(t){var r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("auth",{email:a,password:n},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(M({uid:c.uid,name:c.name}))):x.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:f,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:p,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Login"})))),r.a.createElement("div",{className:"col-md-6 login-form-2"},r.a.createElement("h3",null,"Registro"),r.a.createElement("form",{onSubmit:function(t){if(t.preventDefault(),E!==h)return x.a.fire("Error","Las contrase\xf1as deben ser iguales","error");var a,n,r;e((a=v,n=b,r=E,function(){var e=Object(d.a)(m.a.mark((function e(t){var c,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("auth/new",{name:a,email:n,password:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(M({uid:o.uid,name:o.name}))):x.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:v,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:b,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword",value:E,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:h,onChange:i})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"}))))))}),q=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})).name;return r.a.createElement("div",{className:"navbar navbar-dark bg-dark mb-5"},r.a.createElement("span",{className:"navbar-brand"},t),r.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){e(U())}},r.a.createElement("i",{className:"fas fa-sign-out-alt"}),r.a.createElement("span",null," Salir")))},z=a(53),K=(a(77),{allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}}),Q=(a(78),function(e){var t=e.event,a=t.title,n=t.user;return r.a.createElement("div",null,r.a.createElement("strong",null,a),r.a.createElement("span",null,"- ",n.name))}),W=(a(79),a(48)),Y=a.n(W),Z=a(49),$=a.n(Z),ee=function(){return{type:f}},te={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};Y.a.setAppElement("#root");var ae=P()().minutes(0).seconds(0).add(1,"hours"),ne=ae.clone().add(1,"hours"),re={title:"",notes:"",start:ae.toDate(),end:ne.toDate()},ce=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.ui})).modalOpen,a=Object(l.c)((function(e){return e.calendar})).activeEvent,c=Object(n.useState)(!0),o=Object(H.a)(c,2),s=o[0],u=o[1],i=Object(n.useState)(re),f=Object(H.a)(i,2),v=f[0],b=f[1],E=v.notes,h=v.title,g=v.start,O=v.end;Object(n.useEffect)((function(){b(a||re)}),[a,b]);var j=function(e){var t=e.target;b(Object(D.a)(Object(D.a)({},v),{},Object(J.a)({},t.name,t.value)))},y=function(){e({type:p}),e(G()),b(re)};return r.a.createElement(Y.a,{isOpen:t,onRequestClose:y,style:te,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo"},r.a.createElement("h1",null," ",a?"Editar evento":"Nuevo evento"," "),r.a.createElement("hr",null),r.a.createElement("form",{className:"container",onSubmit:function(t){t.preventDefault();var n=P()(g),r=P()(O);if(n.isSameOrAfter(r))x.a.fire("Error","La fecha fin debe ser mayor a inicio","error");else{if(h.trim().length<2)return u(!1);var c;e(a?(c=v,function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T("events/".concat(c.id),c,"PUT");case 3:return a=e.sent,e.next=6,a.json();case 6:(n=e.sent).ok?t(R(c)):x.a.fire("Error",n.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a,n){var r,c,o,l,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,T("events",e,"POST");case 4:return l=t.sent,t.next=7,l.json();case 7:(s=t.sent).ok?(e.id=s.evento.id,e.user={_id:c,name:o},a(_(e))):x.a.fire("Error",s.msg,"error"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,a){return t.apply(this,arguments)}}()}(v)),u(!0),y()}}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora inicio"),r.a.createElement($.a,{onChange:function(e){b(Object(D.a)(Object(D.a)({},v),{},{start:e}))},value:g,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora fin"),r.a.createElement($.a,{onChange:function(e){b(Object(D.a)(Object(D.a)({},v),{},{end:e}))},value:O,minDate:g,className:"form-control"})),r.a.createElement("hr",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Titulo y notas"),r.a.createElement("input",{type:"text",className:"form-control ".concat(!s&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:h,onChange:j}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Una descripci\xf3n corta")),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:E,onChange:j}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Informaci\xf3n adicional")),r.a.createElement("button",{type:"submit",className:"btn btn-outline-primary btn-block"},r.a.createElement("i",{className:"far fa-save"}),r.a.createElement("span",null," Guardar"))))},oe=function(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-primary fab",onClick:function(){e(G()),e(ee())}},r.a.createElement("i",{className:"fas fa-plus"}))},le=function(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(d.a)(m.a.mark((function e(t,a){var n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().calendar.activeEvent.id,e.prev=1,e.next=4,T("events/".concat(n),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t({type:O}):x.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}())}},r.a.createElement("i",{className:"fas fa-trash"}),r.a.createElement("span",null," Borrar Evento"))};P.a.locale("es");var se=Object(z.b)(P.a),ue=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.calendar})),a=t.events,c=t.activeEvent,o=Object(l.c)((function(e){return e.auth})).uid,s=Object(n.useState)(localStorage.getItem("lastView")||"month"),u=Object(H.a)(s,2),i=u[0],f=u[1];Object(n.useEffect)((function(){e(function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T("events",{});case 3:return a=e.sent,e.next=6,a.json();case 6:(n=e.sent).ok?(r=A(n.eventos),t(L(r))):x.a.fire("Error",n.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return r.a.createElement("div",{className:"calendar-screen"},r.a.createElement(q,null),r.a.createElement(z.a,{localizer:se,events:a,onDoubleClickEvent:function(t){e(ee())},onSelectEvent:function(t){e({type:E,payload:t})},onView:function(e){localStorage.setItem("lastView",e),f(e)},view:i,startAccessor:"start",endAccessor:"end",messages:K,eventPropGetter:function(e,t,a,n){return{style:{backgroundColor:o===e.user._id?"#367CF7":"#465660",borderRadious:"0px",opacity:.8,display:"block",color:"white"}}},onSelectSlot:function(t){e(G())},selectable:!0,components:{event:Q}}),c&&r.a.createElement(le,null),r.a.createElement(oe,null),r.a.createElement(ce,null))},ie=a(39),me=function(e){var t=e.isAuthenticated,a=e.component,n=Object(ie.a)(e,["isAuthenticated","component"]);return r.a.createElement(u.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(u.a,{to:"/login"})}}))},de=function(e){var t=e.isAuthenticated,a=e.component,n=Object(ie.a)(e,["isAuthenticated","component"]);return r.a.createElement(u.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(u.a,{to:"/"}):r.a.createElement(a,e)}}))},fe=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})),a=t.checking,c=t.uid;return Object(n.useEffect)((function(){e(function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T("auth/renew",{});case 2:return a=e.sent,e.next=5,a.json();case 5:(n=e.sent).ok?(localStorage.setItem("token",n.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(M({uid:n.uid,name:n.name}))):t(F());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),a?r.a.createElement("h5",null,"Espere...."):r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(u.d,null,r.a.createElement(de,{extact:!0,path:"/login",component:X,isAuthenticated:!!c}),r.a.createElement(me,{exact:!0,path:"/",component:ue,isAuthenticated:!!c}),r.a.createElement(u.a,{to:"/login"}))))},pe=a(21),ve=a(65),be=a(54),Ee={events:[],activeEvent:null},he={modalOpen:!1},ge={checking:!0},Oe=Object(pe.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(D.a)(Object(D.a)({},e),{},{modalOpen:!0});case p:return Object(D.a)(Object(D.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(D.a)(Object(D.a)({},e),{},{activeEvent:t.payload});case v:return Object(D.a)(Object(D.a)({},e),{},{events:[].concat(Object(be.a)(e.events),[t.payload])});case h:return Object(D.a)(Object(D.a)({},e),{},{activeEvent:null});case g:return Object(D.a)(Object(D.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case O:return Object(D.a)(Object(D.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case j:return Object(D.a)(Object(D.a)({},e),{},{events:Object(be.a)(t.payload)});case b:return Object(D.a)({},Ee);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(D.a)(Object(D.a)(Object(D.a)({},e),t.payload),{},{checking:!1});case y:return Object(D.a)(Object(D.a)({},e),{},{checking:!1});case w:return{checking:!1};default:return e}}}),je="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pe.d,ye=Object(pe.e)(Oe,je(Object(pe.a)(ve.a))),Ne=function(){return r.a.createElement(l.a,{store:ye},r.a.createElement(fe,null))};a(115);o.a.render(r.a.createElement(Ne,null),document.getElementById("root"))},66:function(e,t,a){e.exports=a(117)},76:function(e,t,a){},79:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.c3be51d0.chunk.js.map