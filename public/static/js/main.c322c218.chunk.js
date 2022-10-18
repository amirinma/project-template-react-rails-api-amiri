(this["webpackJsonpreact-rails-api-project-template-client"]=this["webpackJsonpreact-rails-api-project-template-client"]||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(22),a=n.n(r),i=(n(40),n(4)),l=(n(41),n(1));var j=function(){return Object(l.jsxs)("nav",{className:"nav-bar",children:[Object(l.jsxs)("a",{href:"/Home",className:"nav-bar-item",children:["Home ",Object(l.jsx)("br",{}),"\ud83c\udfe0"]}),Object(l.jsxs)("a",{href:"/Supplier",className:"nav-bar-item",children:["Suppliers ",Object(l.jsx)("br",{}),"\ud83c\udfed"]}),Object(l.jsx)("a",{href:"/Customer",className:"nav-bar-item",children:"Customers"}),Object(l.jsx)("a",{href:"/Product",className:"nav-bar-item",children:"Products"})]})};var u=function(e){var t=e.setUser,n=Object(c.useState)(""),s=Object(i.a)(n,2),r=s[0],a=s[1],j=Object(c.useState)(""),u=Object(i.a)(j,2),o=u[0],b=u[1];return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:r,password:o})}).then((function(e){e.ok&&e.json().then((function(e){return t(e)}))}))},children:[Object(l.jsx)("h1",{children:"Login"}),Object(l.jsx)("label",{htmlFor:"username",children:"Username"}),Object(l.jsx)("input",{type:"text",id:"username",autoComplete:"off",value:r,onChange:function(e){return a(e.target.value)}}),Object(l.jsx)("label",{htmlFor:"password",children:"Password"}),Object(l.jsx)("input",{type:"password",id:"password",autoComplete:"current-password",value:o,onChange:function(e){return b(e.target.value)}}),Object(l.jsx)("button",{type:"submit",children:"Login"})]})})},o=n(23),b=n(3),d=n(10),p=n(11),O=n(13),m=n(14),h=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"sup-div",children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Customers"}),Object(l.jsx)("button",{children:"+"})]}),Object(l.jsx)("div",{children:Object(l.jsx)("h6",{children:"Customer Sample"})})]})})}}]),n}(s.a.Component),x=h;var f,v=function(e){var t=e.setUser,n=Object(c.useState)(""),s=Object(i.a)(n,2),r=s[0],a=s[1],j=Object(c.useState)(""),u=Object(i.a)(j,2),o=u[0],b=u[1],d=Object(c.useState)(""),p=Object(i.a)(d,2),O=p[0],m=p[1];return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:r,password:o,password_confirmation:O})}).then((function(e){e.ok&&e.json().then((function(e){return t(e)}))})),console.log(r),console.log(o),console.log(O)},children:[Object(l.jsx)("h1",{children:"Sign Up"}),Object(l.jsx)("label",{htmlFor:"username",children:"Username"}),Object(l.jsx)("input",{type:"text",id:"username",autoComplete:"off",value:r,onChange:function(e){return a(e.target.value)}}),Object(l.jsx)("label",{htmlFor:"password",children:"Password"}),Object(l.jsx)("input",{type:"password",id:"password",value:o,onChange:function(e){return b(e.target.value)},autoComplete:"current-password"}),Object(l.jsx)("label",{htmlFor:"password",children:"Password Confirmation"}),Object(l.jsx)("input",{type:"password",id:"password_confirmation",value:O,onChange:function(e){return m(e.target.value)},autoComplete:"current-password"}),Object(l.jsx)("button",{type:"submit",children:"Sign Up"})]})})},g=n(9),N=n(6),y=n(5),S=n(7),C=n(16),w=Object(C.b)("suppliers/fetchSuppliers",Object(S.a)(Object(y.a)().mark((function e(){var t,n;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/suppliers",e.next=3,fetch("/suppliers");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})))),P=Object(C.b)("suppliers/addSuppliers",function(){var e=Object(S.a)(Object(y.a)().mark((function e(t){var n,c,s;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/suppliers",n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},e.next=4,fetch("/suppliers",n);case 4:return c=e.sent,e.next=7,c.json();case 7:return s=e.sent,e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),k=Object(C.b)("suppliers/removeSuppliers",function(){var e=Object(S.a)(Object(y.a)().mark((function e(t){var n,c,s,r;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("removed",t),n="/suppliers/".concat(t),c={method:"DELETE",headers:{"Content-Type":"application/json"}},console.log("supplier",n),console.log("config",c),e.next=7,fetch(n,c);case 7:return s=e.sent,e.next=10,s.json();case 10:return r=e.sent,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),T=Object(C.b)("suppliers/updateSuppliers",function(){var e=Object(S.a)(Object(y.a)().mark((function e(t){var n,c,s,r;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("hello",t.name),n="/suppliers/".concat(t.name),c={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},console.log("supplier",n),console.log("config",c),e.next=7,fetch(n,c);case 7:return s=e.sent,e.next=10,s.json();case 10:return r=e.sent,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),E=Object(C.b)("products/addProducts",function(){var e=Object(S.a)(Object(y.a)().mark((function e(t){var n,c,s;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/products",n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},e.next=4,fetch("/products",n);case 4:return c=e.sent,e.next=7,c.json();case 7:return s=e.sent,e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),U=Object(C.c)({name:"suppliers",initialState:{suppliers:[],status:"idle"},reducers:{supplierAdded:function(e,t){console.log("supplier hoho")}},extraReducers:(f={},Object(N.a)(f,w.fulfilled,(function(e,t){e.suppliers=t.payload,e.status="idle"})),Object(N.a)(f,w.pending,(function(e,t){e.status="pending"})),Object(N.a)(f,w.pending,(function(e,t){e.status="idle"})),Object(N.a)(f,P.fulfilled,(function(e,t){e.suppliers.push(t.payload),e.status="idle"})),Object(N.a)(f,k.fulfilled,(function(e,t){e.suppliers=e.suppliers.filter((function(e){return e.id!==t.payload.id})),e.status="idle"})),Object(N.a)(f,T.fulfilled,(function(e,t){e.suppliers=e.suppliers.map((function(e){return e.name})),e.status="idle"})),f)}).reducer,A=function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).handleClick=function(){e.props.toggle()},e}return Object(p.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"modal",children:Object(l.jsxs)("div",{className:"modal_content",children:[Object(l.jsx)("span",{className:"close",onClick:this.handleClick,children:"\xd7    "}),Object(l.jsx)("p",{children:"I'm A Pop Up!!!"})]})})}}]),n}(c.Component);s.a.Component;var D=function(e){var t=e.supDetails,n=Object(g.c)((function(e){return e.suppliers.suppliers})).map((function(e){if(e.name===t)return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"member-details",children:[Object(l.jsxs)("div",{className:"item-detail",children:[Object(l.jsx)("div",{className:"item-detail-name",children:Object(l.jsx)("h3",{children:e.name})}),Object(l.jsxs)("div",{className:"item-detail-address",children:[Object(l.jsx)("h4",{className:"item-detail-add-mem",children:"Address:"}),Object(l.jsxs)("p",{className:"item-detail-add-mem",children:[Object(l.jsx)("strong",{children:"Street:"})," ",e.street_address]}),Object(l.jsxs)("p",{className:"item-detail-add-mem",children:[Object(l.jsx)("strong",{children:"City:"})," ",e.city]}),Object(l.jsxs)("p",{className:"item-detail-add-mem",children:[Object(l.jsx)("strong",{children:"State:"})," ",e.state]}),Object(l.jsxs)("p",{className:"item-detail-add-mem",children:[Object(l.jsx)("strong",{children:"Zip Code:"})," ",e.zip_code]}),Object(l.jsxs)("p",{className:"item-detail-add-mem",children:[Object(l.jsx)("strong",{children:"Country:"})," ",e.country]})]})]}),Object(l.jsxs)("div",{className:"item-detail-contact",children:[Object(l.jsx)("h4",{className:"item-detail-add-mem",children:"Contact: "}),Object(l.jsxs)("p",{className:"item-detail-add-mem",children:[Object(l.jsx)("strong",{children:"Phone:"})," ",e.phone_num]}),Object(l.jsxs)("p",{className:"item-detail-add-mem",children:[Object(l.jsx)("strong",{children:"Email:"})," ",e.email_add]})]})]}),Object(l.jsx)("div",{children:Object(l.jsxs)("table",{className:"pro-table",children:[Object(l.jsxs)("div",{className:"pro-table-div",children:[Object(l.jsx)("th",{className:"pro-date",children:"DATE"}),Object(l.jsx)("th",{className:"pro-bill",children:"BILL#"}),Object(l.jsx)("th",{className:"pro-name",children:"PRODUCT NAME"}),Object(l.jsx)("th",{className:"pro-quantity",children:"QUANTITY"}),Object(l.jsx)("th",{className:"pro-price",children:"PRICE"}),Object(l.jsx)("th",{className:"pro-total",children:"TOTAL"})]}),e.products.map((function(e){return Object(l.jsx)("div",{className:"pro-table-div",children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"pro-date",children:e.date}),Object(l.jsx)("td",{className:"pro-bill",children:e.bill_num}),Object(l.jsx)("td",{className:"pro-name",children:e.name}),Object(l.jsx)("td",{className:"pro-quantity",children:e.quantity}),Object(l.jsxs)("td",{className:"pro-price",children:["$ ",e.price]}),Object(l.jsxs)("td",{className:"pro-total",children:["$ ",e.total]})]})})}))]})})]})}));return Object(l.jsx)("div",{className:"parent-member-details",children:Object(l.jsx)("div",{children:n})})};var I=function(e){var t=e.supplierList,n=void 0===t?[]:t,s=Object(c.useState)(""),r=Object(i.a)(s,2),a=r[0],j=r[1],u=n.suppliers.suppliers,o=Object(g.b)(),b=function(e){j(e)};return Object(l.jsxs)("div",{className:"sup-div",children:[Object(l.jsxs)("div",{className:"member-list",children:[Object(l.jsx)("div",{className:"member-add-button",children:Object(l.jsx)("p",{className:"member-heading",children:"SUPPLIERS"})}),Object(l.jsx)("div",{children:u.map((function(e){return Object(l.jsxs)("div",{className:"member-remove-button",children:[Object(l.jsx)("button",{className:"member-remove-button-x",onClick:function(t){return function(e){o(k(e))}(e.id)},children:"x"}),Object(l.jsx)("p",{onClick:function(e){b(e.target.textContent)},className:"item-pointer",children:e.name}),Object(l.jsxs)("p",{className:"member-list-balance",children:["$ ",e.sup_balance]})]})}))})]}),Object(l.jsx)(D,{supDetails:a})]})};var L=function(){var e=Object(g.c)((function(e){return e})),t=Object(g.b)();return Object(c.useEffect)((function(){t(w())}),[t]),Object(l.jsx)("div",{className:"memeber-detail-parent",children:Object(l.jsx)(I,{supplierList:e})})};var _=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),s=n[0],r=n[1],a=Object(c.useState)(""),j=Object(i.a)(a,2),u=j[0],o=j[1],b=Object(g.c)((function(e){return e.suppliers.suppliers})),d=Object(g.b)();return console.log("add sup",b),Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d(P({name:s,country:u})),r(""),o("")},children:[Object(l.jsx)("p",{className:"form-details-title",children:"Please Add Supplier Details Bellow:"}),Object(l.jsx)("label",{children:"Supplier Name"}),Object(l.jsx)("input",{type:"text",value:s,onChange:function(e){return r(e.target.value)}}),Object(l.jsx)("label",{children:"Country"}),Object(l.jsx)("input",{type:"text",value:u,onChange:function(e){return o(e.target.value)}}),Object(l.jsx)("input",{type:"submit"})]})})};var B=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),a=Object(i.a)(r,2),j=a[0],u=a[1],o=Object(c.useState)(""),b=Object(i.a)(o,2),d=b[0],p=b[1],O=Object(c.useState)(""),m=Object(i.a)(O,2),h=m[0],x=m[1],f=Object(c.useState)(""),v=Object(i.a)(f,2),N=v[0],y=v[1],S=Object(c.useState)(""),C=Object(i.a)(S,2),P=C[0],k=C[1],T=Object(c.useState)(""),U=Object(i.a)(T,2),A=U[0],D=U[1],I=Object(c.useState)(""),L=Object(i.a)(I,2),_=L[0],B=L[1],J=Object(g.c)((function(e){return e})),F=Object(g.b)();return Object(c.useEffect)((function(){F(w())}),[F]),J.suppliers.suppliers,console.log("category",_),Object(l.jsx)("div",{className:"enter-bill-form-parent",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),F(E({name:j,quantity:d,price:h,total:N,supplier:P,bill_num:n,date:A,pro_category:_})),s(""),u(""),p(""),x(""),y(""),k(""),D(""),B("")},id:"enter-bill-form",children:[Object(l.jsx)("p",{className:"form-details-title",children:"Please Enter Purchase Invoice Information Bellow:"}),Object(l.jsx)("label",{children:"Supplier Name"}),Object(l.jsx)("input",{type:"text",value:P,onChange:function(e){return k(e.target.value)}}),Object(l.jsx)("label",{children:"Date"}),Object(l.jsx)("input",{type:"date",value:A,onChange:function(e){return D(e.target.value)}}),Object(l.jsx)("label",{children:"Bill Num:"}),Object(l.jsx)("input",{type:"text",value:n,onChange:function(e){return s(e.target.value)}}),Object(l.jsx)("label",{children:"Product Category"}),Object(l.jsxs)("select",{value:_,onChange:function(e){return B(e.target.value)},children:[Object(l.jsx)("option",{children:"AntiVirus"}),Object(l.jsx)("option",{children:"InternetSec"}),Object(l.jsx)("option",{children:"TotalSec"})]}),Object(l.jsx)("label",{children:"Produc"}),Object(l.jsx)("input",{type:"text",value:j,onChange:function(e){return u(e.target.value)}}),Object(l.jsx)("label",{children:"Quantity"}),Object(l.jsx)("input",{type:"text",value:d,onChange:function(e){return p(e.target.value)}}),Object(l.jsx)("label",{children:"Price"}),Object(l.jsx)("input",{type:"text",value:h,onChange:function(e){return x(e.target.value)}}),Object(l.jsx)("label",{children:"Total"}),Object(l.jsx)("input",{type:"text",value:N,onChange:function(e){return y(e.target.value)}}),Object(l.jsx)("input",{type:"submit"})]})})};var J=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),s=n[0],r=n[1],a=Object(c.useState)(""),j=Object(i.a)(a,2),u=j[0],o=j[1],b=Object(g.b)(),d=Object(g.c)((function(e){return e.suppliers.suppliers}));return console.log("Update S",d),Object(c.useEffect)((function(){b(w())}),[b]),console.log("after Sup",s),Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={name:s,country:u};b(T(t)),console.log("updateSuppli",t),o("")},children:[Object(l.jsx)("p",{className:"form-details-title",children:"Please Update Supplier's Information Bellow:"}),Object(l.jsx)("label",{children:"Supplier Name"}),Object(l.jsxs)("select",{value:s,onChange:function(e){return r(e.target.value)},children:[Object(l.jsx)("option",{children:"Please Select Supplier"}),d.map((function(e){return Object(l.jsx)("option",{children:e.name})}))]}),Object(l.jsx)("label",{children:"County"}),Object(l.jsx)("input",{type:"text",value:u,onChange:function(e){return o(e.target.value)}}),Object(l.jsx)("input",{type:"submit"})]})})};var F=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],s=t[1];function r(e){s(e.target.name)}return Object(l.jsxs)("div",{className:"home-page-elements",children:[Object(l.jsxs)("nav",{children:[Object(l.jsx)("button",{name:"addSup",className:"hom-nav-bar",onClick:r,children:"Add Supplier"}),Object(l.jsx)("button",{name:"updateSup",className:"hom-nav-bar",onClick:r,children:"Update Supplier"}),Object(l.jsx)("button",{name:"entBill",className:"hom-nav-bar",onClick:r,children:"Enter Bill"}),Object(l.jsx)("button",{className:"hom-nav-bar",children:"Add Customer"}),Object(l.jsx)("button",{className:"hom-nav-bar",children:"Enter Invoice"})]}),Object(l.jsxs)("div",{children:["addSup"===n?Object(l.jsx)("h1",{children:Object(l.jsx)(_,{})}):null,"updateSup"===n?Object(l.jsx)("h1",{children:Object(l.jsx)(J,{})}):null,"entBill"===n?Object(l.jsx)("h1",{children:Object(l.jsx)(B,{})}):null]})]})};var q=function(){return Object(l.jsx)("div",{className:"home-page-elements-parent",children:Object(l.jsx)(F,{})})};var H=function(){return Object(l.jsx)("h1",{children:"Hi from product"})};var R=function(e){var t=e.user,n=e.setUser,s=Object(c.useState)([]),r=Object(i.a)(s,2),a=(r[0],r[1]);return console.log(t),Object(c.useEffect)((function(){fetch("/suppliers").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(l.jsxs)("div",{className:"main-page-div",children:[Object(l.jsxs)("div",{className:"logout-element",children:[Object(l.jsx)("p",{className:"company-head-name",children:"CyberDefend Technolgy"}),Object(l.jsx)("button",{className:"logout-element-btn",onClick:function(){fetch("/logout",{method:"DELETE"}).then((function(e){e.ok&&(console.log("before",t),n(null),console.log("after",t))}))},children:"Logout"})]}),Object(l.jsxs)("div",{className:"main-div",children:[Object(l.jsx)("div",{className:"main-div-sub",children:Object(l.jsx)(j,{})}),Object(l.jsx)(o.a,{children:Object(l.jsxs)(b.c,{children:[Object(l.jsx)(b.a,{path:"/home",element:Object(l.jsx)(q,{})}),Object(l.jsx)(b.a,{path:"/Supplier",element:Object(l.jsx)(L,{})}),Object(l.jsx)(b.a,{path:"/Customer",element:Object(l.jsx)(x,{})}),Object(l.jsx)(b.a,{path:"/product",element:Object(l.jsx)(H,{})})]})})]})]})};var $=function(e){return e.user?Object(l.jsxs)("div",{className:"main-page-div-parent",children:[Object(l.jsx)(R,{}),"!"]}):Object(l.jsxs)("div",{className:"sign-in-up",children:[Object(l.jsx)("div",{className:"sign-up",children:Object(l.jsx)(v,{})}),Object(l.jsx)("div",{className:"sign-in",children:Object(l.jsx)(u,{})})]})};var Q=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){fetch("/me").then((function(e){e.ok&&e.json().then((function(e){return s(e)}))}))}),[]),Object(l.jsx)("div",{className:"App",children:Object(l.jsx)($,{user:n,setUser:s})})},z=Object(C.a)({reducer:{suppliers:U}});a.a.render(Object(l.jsx)(g.a,{store:z,children:Object(l.jsx)(Q,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.c322c218.chunk.js.map