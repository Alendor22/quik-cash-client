(this["webpackJsonpquik-cash-client"]=this["webpackJsonpquik-cash-client"]||[]).push([[0],{53:function(e,t,n){},60:function(e,t,n){e.exports=n(74)},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(55),i=n(6),o=n(33),c=n(39),s=n(9),u={user:{username:""},listings:[]},m=n(15),p=n.n(m),d=(n(53),n(27)),g=n(28),E=n(32),h=n(30),f=(n(69),n(24)),b=n(59),y=n(21),v=n(18),j=n(17),O="http://localhost:3001/api/v1",L=O+"/users",S=function(e){return{type:"SET_USER",payload:e}},k=function(){return function(e){var t={method:"GET",headers:{Authorization:"bearer "+localStorage.token}};fetch("http://localhost:3001/api/v1/persist",t).then((function(e){return e.json()})).then((function(t){e(S(t))}))}},C=function(e,t){return function(n){var a={method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"bearer "+localStorage.token},body:JSON.stringify({listing:e,sellerId:t})};fetch(L+"/"+e.seller_id+"/listings",a).then((function(e){return e.json()})).then((function(e){n(function(e){return{type:"SET_LISTING",payload:e}}(e))}))}},I=function(e){return function(t){var n={method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)};fetch(O+"/listings",n).then((function(e){return e.json()})).then((function(e){t({type:"GET_LISTINGS",payload:e})}))}},_=function(e,t,n,a){return function(r){var l={method:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"bearer "+localStorage.token},body:JSON.stringify({buyer_id:t,sold:!0})};fetch(L+"/"+n+"/listings/"+e,l).then((function(e){return e.json()})).then((function(e){r({type:"BUY_LISTING",payload:e}),a.push("/listings")}))}},w=function(e){return function(t){var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch(L,n).then((function(e){return e.json()})).then((function(e){t(S(e.user)),localStorage.setItem("token",e.token)}))}},T=function(e){return function(t){var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("http://localhost:3001/api/v1/login",n).then((function(e){return e.json()})).then((function(e){t(S(e.user)),localStorage.setItem("token",e.token)}))}},x=function(){return function(e){e({type:"CLEAR_USER"}),localStorage.clear()}},U=n(7),P=n(16),G={Signup:function(e){var t=Object(i.c)(),n=Object(a.useState)({username:"",location:"",bio:"",password:""}),l=Object(j.a)(n,2),o=l[0],c=l[1],u=function(e){return c(Object(s.a)(Object(s.a)({},o),{},Object(v.a)({},e.target.name,e.target.value)))},m=o.username,p=o.location,d=o.bio,g=o.password;return r.a.createElement(U.a,{onSubmit:function(n){n.preventDefault();var a=e.history;t(w(o)),a.push("/listings")}},r.a.createElement("h1",null,"Signup Page"),r.a.createElement(U.a.Group,{controlId:"user-signup"},r.a.createElement(U.a.Label,null,"Please Select a Username"),r.a.createElement(U.a.Control,{type:"text",name:"username",value:m,onChange:u,placeholder:"Username"})),r.a.createElement(U.a.Group,{controlId:"user-location"},r.a.createElement(U.a.Label,null,"Please enter your location"),r.a.createElement(U.a.Control,{type:"text",name:"location",value:p,onChange:u,placeholder:"State\\Territory"})),r.a.createElement(U.a.Group,{controlId:"bio"},r.a.createElement(U.a.Label,null,"Short-Bio"),r.a.createElement(U.a.Control,{as:"textarea",rows:"3",name:"bio",value:d,onChange:u,placeholder:"Bio"})),r.a.createElement(U.a.Group,{controlId:"signUpPwField"},r.a.createElement(U.a.Label,null,"Password"),r.a.createElement(U.a.Control,{type:"password",name:"password",value:g,onChange:u,placeholder:"Password"})),r.a.createElement(P.a,{variant:"primary",type:"submit"},"Create Account"))},Login:function(e){var t=Object(i.c)(),n=Object(a.useState)({username:"",password:""}),l=Object(j.a)(n,2),o=l[0],c=l[1],u=function(e){return c(Object(s.a)(Object(s.a)({},o),{},Object(v.a)({},e.target.name,e.target.value)))},m=o.username,p=o.password;return r.a.createElement("div",null,r.a.createElement(U.a,{onSubmit:function(n){n.preventDefault(),t(T(o)),e.history.push("/listings/new")}},r.a.createElement("h1",null,"Login Page"),r.a.createElement(U.a.Group,{controlId:"logInForm"},r.a.createElement(U.a.Label,null,"Username"),r.a.createElement(U.a.Control,{type:"text",name:"username",placeholder:"Enter Username",value:m,onChange:u})),r.a.createElement(U.a.Group,{controlId:"logInwField"},r.a.createElement(U.a.Label,null,"Password"),r.a.createElement(U.a.Control,{type:"password",name:"password",placeholder:"Password",value:p,onChange:u})),r.a.createElement(P.a,{variant:"primary",type:"submit"},"Login")))},Home:function(){var e=Object(i.d)((function(e){return e.user.username})),t=e?r.a.createElement("h1",null,e," is currently logged in"):r.a.createElement("h1",null,"Currently not logged in");return r.a.createElement("div",null,t)}},A=function(e){Object(E.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleBuyClick=function(t){t.preventDefault(),e.props.fetchBuyListing(e.props.listing.id,e.props.buyer_id,e.props.listing.seller_id,e.props.history)},e}return Object(g.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{variant:"primary",type:"submit",onClick:this.handleBuyClick},"Buy-Listing"))}}]),n}(a.Component),B=Object(y.o)(Object(i.b)((function(e){return{buyer_id:e.user.id,listings:e.listings}}),{fetchBuyListing:_})(A)),N=n(8),D=function(e){var t=e.key,n=Object(i.d)((function(e){return e.listings})),l=!!localStorage.getItem("token"),o=n.find((function(t){return t.id===parseInt(e.location.pathname.split("/listings/")[1])})),c=o&&o.buyer&&o.buyer.username,s=o&&!o.sold,u=Object(a.useState)(0),m=Object(j.a)(u,2),p=m[0],d=m[1],g=Object(a.useState)(0),E=Object(j.a)(g,2),h=E[0],f=E[1];return r.a.createElement("ul",null,o?r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Quik-Listing"),r.a.createElement("span",{key:t,to:"/listings/".concat(t)},r.a.createElement("p",null,"Item Name - ",o.item_name),r.a.createElement("p",null,"Description - ",o.description),r.a.createElement("p",null,"Price - $",o.price),r.a.createElement("p",null,"Seller - ",r.a.createElement(N.Link,{to:"/users/".concat(o.seller_id,"/listings")},o.seller.username)),r.a.createElement("p",null,"Seller Bio - ",o.seller.bio),r.a.createElement("p",null,"Buyer - ",r.a.createElement(N.Link,{to:"/users/".concat(o.buyer_id,"/listings")},s&&l?r.a.createElement(B,{listing:o}):c))),r.a.createElement("button",{type:"submit",onClick:function(e){!function(e){e.preventDefault(),d(p+1)}(e)}},"Up-Vote-Listing: ",p),r.a.createElement("button",{type:"submit",onClick:function(e){!function(e){e.preventDefault(),f(h-1)}(e)}},"Down-Vote-Listing: ",h)):r.a.createElement("p",null,"loading..."))},Q=Object(i.b)(null,{loadListingsIndex:I})((function(e){var t=Object(i.d)((function(e){return e.listings}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.g,null,r.a.createElement(y.d,{exact:!0,path:"/listings/:id",render:function(n){var a=t.find((function(t){return t.id===parseInt(e.location.pathname.split("/listings/")[1])}));return!!a&&a.sold?"Sorry, this listing has been purchased!":r.a.createElement(D,Object.assign({},n,{listing:a}))}})))})),F=function(){var e=Object(i.d)((function(e){return e.listings})),t=Object(i.d)((function(e){return e.user}));return r.a.createElement("div",null,(t.username?e.filter((function(e){return e.seller_id===t.id})):[]).map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("p",null,r.a.createElement("span",null,"Seller: "),e.seller.username),r.a.createElement("p",null,r.a.createElement("span",null,"Item: "),e.item_name),r.a.createElement("p",null,r.a.createElement("span",null,"Price: $"),e.price))})))},R={item_name:"",description:"",price:""},J=function(e){Object(E.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state=R,e.handleChange=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var n={seller_id:e.props.seller_id,item_name:e.state.item_name,description:e.state.description,price:e.state.price};e.props.addListing(n),e.props.history.push("/listings")},e.resetForm=function(){e.setState(R)},e}return Object(g.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Create a new Quik-Listing"),r.a.createElement(U.a,{onSubmit:this.handleSubmit},r.a.createElement(U.a.Group,{controlId:"item_name"},r.a.createElement(U.a.Label,null,"Item Name"),r.a.createElement(U.a.Control,{type:"text",name:"item_name",value:this.state.item_name,onChange:this.handleChange})),r.a.createElement(U.a.Group,{controlId:"description"},r.a.createElement(U.a.Label,null,"Description"),r.a.createElement(U.a.Control,{as:"textarea",rows:"3",name:"description",value:this.state.description,onChange:this.handleChange})),r.a.createElement(U.a.Group,{controlId:"price"},r.a.createElement(U.a.Label,null,"price$"),r.a.createElement(U.a.Control,{type:"number",placeholder:"0.00",name:"price",value:this.state.price,onChange:this.handleChange})),r.a.createElement(P.a,{variant:"primary",type:"submit"},"Add Listing")))}}]),n}(a.Component),$=Object(i.b)((function(e){return{listings:e.listings,seller_id:e.user.id}}),(function(e){return{addListing:function(t){return e(C(t))}}}))(J),M=function(){var e=Object(i.d)((function(e){return e.listings})),t=Object(i.d)((function(e){return e.user}));return r.a.createElement("div",null,(t.username?e.filter((function(e){return e.buyer_id===t.id})):[]).map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("p",null,r.a.createElement("span",null,"Seller: "),e.seller.username),r.a.createElement("p",null,r.a.createElement("span",null,"Item: "),e.item_name),r.a.createElement("p",null,r.a.createElement("span",null,"Price: $"),e.price))})))},z=n(34),H=n(20),V=function(){var e=Object(i.d)((function(e){return e.listings})),t=!!localStorage.getItem("token"),n=Object(a.useState)(""),l=Object(j.a)(n,2),o=l[0],s=l[1],u=Object(a.useState)(!1),m=Object(j.a)(u,2),p=m[0],d=m[1];return r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("h3",null,"Quik-Listings"),r.a.createElement("form",null,r.a.createElement("label",null,"Choose the listings you'd like to see.",r.a.createElement("select",{value:o,onChange:function(e){s(e.target.value),console.log(e.target.value)}},r.a.createElement("option",{value:"available"},"Available-Listings"),r.a.createElement("option",{value:"sold"},"Sold-Listings"),r.a.createElement("option",{value:"all listings"},"All-Listings")))),(console.log("test"),function(e){var t=Object(c.a)(e);return console.log("sortListings",t),!0===p?t.sort((function(e,t){var n=e.item_name.toLowerCase(),a=t.item_name.toLowerCase();return console.log("I'm la",n),n<a?-1:n>a?1:0})):e}("available"===o?(console.log("buy me"),e.filter((function(e){return!1===e.sold}))):"sold"===o?(console.log("I'm sold"),e.filter((function(e){return!0===e.sold}))):e).map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(f.a,null,r.a.createElement(z.a,{lg:3},r.a.createElement(H.a,{s:6}),r.a.createElement(N.Link,{key:e.id,to:"/listings/".concat(e.id)},e.item_name,!0===e.sold?" - Sold":""))))})))),r.a.createElement("button",{onClick:function(){return d(!p)}},"Sort-Toggle"),r.a.createElement("br",null),r.a.createElement(f.a,null,r.a.createElement(z.a,{lg:3},r.a.createElement(H.a,{s:6}),r.a.createElement("h3",null,"My-Quik-Listings"),t?r.a.createElement(F,null):"Please login to see your Quik-listings!"),r.a.createElement(z.a,{lg:1},r.a.createElement(H.a,{s:6}),r.a.createElement("h3",null,"My-Quik-Buys"),t?r.a.createElement(M,null):"Please login to see your Quik-buys! ")))},q=Object(y.o)((function(e){var t=Object(i.d)((function(t){return t.listings.filter((function(t){return t.seller_id===parseInt(e.match.params.id)}))}));return r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(N.Link,{key:e.id,to:"listings/".concat(e.seller_id)},"Seller: ",e.seller.username," - Listing: ",e.item_name))})))})),W=function(){var e=Object(i.d)((function(e){return e.listings})).filter((function(e){return!1===e.sold}));return r.a.createElement("div",null,r.a.createElement("h3",null,"Available-Quik-Listings"),e.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(f.a,null,r.a.createElement(z.a,null,r.a.createElement(H.a,null),r.a.createElement(N.Link,{key:e.id,to:"/listings/".concat(e.id)},e.item_name))))})))},X=Object(y.o)((function(e){var t=Object(i.d)((function(e){return e.user})),n=Object(i.d)((function(e){return e.listings}));return r.a.createElement("ul",null,(t.username?n.filter((function(e){return e.seller_id===t.id})):[]).map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(N.Link,{key:e.id,to:"/users/".concat(e.seller_id,"/listings/").concat(e.id)}," - Listings purchased by ",t.username," ",e.item_name))})))})),Y={AvailableListings:W,BuyListing:B,UsersListings:F,CreateListing:$,ListingsIndex:V,ListingLink:D,UsersBoughtListings:M,UsersListingsIndex:q,UsersListingsLink:X},K=Object(y.o)((function(){return r.a.createElement(y.g,null,r.a.createElement(y.d,{exact:!0,path:"/signup",component:G.Signup}),r.a.createElement(y.d,{exact:!0,path:"/login",component:G.Login}),r.a.createElement(y.d,{exact:!0,path:"/listings/new",component:Y.CreateListing}),r.a.createElement(y.d,{exact:!0,path:"/listings",component:Y.ListingsIndex}),r.a.createElement(y.d,{exact:!0,path:"/listings/:id",component:Q}),r.a.createElement(y.d,{exact:!0,path:"/users/:id/listings",component:Y.UsersListingsIndex}),r.a.createElement(y.d,{exact:!0,path:"/users/:id/listings/:id",component:Y.UsersListingsLink}))})),Z=n(50),ee=n(26),te=n(44),ne=function(){var e=Object(i.c)();return r.a.createElement(Z.a,{sticky:"top",collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(Z.a.Brand,{href:"/listings"},"Quik-Cash"),r.a.createElement(N.NavLink,{to:"/listings/new"},"Post Listing"),r.a.createElement(ee.a,{title:"User-Portal",id:"collapsible-nav-dropdown",active:!0},r.a.createElement(te.LinkContainer,{to:"/login"},r.a.createElement(ee.a.Item,{active:!0},"Login")),r.a.createElement(ee.a.Divider,null),r.a.createElement(te.LinkContainer,{to:"/listings"},r.a.createElement(ee.a.Item,{active:!0,onClick:function(){e(x())}},"Logout")),r.a.createElement(ee.a.Divider,null),r.a.createElement(te.LinkContainer,{to:"/signup"},r.a.createElement(ee.a.Item,{active:!0},"Signup"))))},ae=function(e){Object(E.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"componentDidMount",value:function(){this.props.loadListingsIndex(),!this.props.user.username&&localStorage.getItem("token")&&this.props.persistUser(),this.props.history.push("/listings")}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{className:"p-3"},r.a.createElement(b.a,null,r.a.createElement("h1",null,"QuikCash - A Listing and Buying Site"),r.a.createElement("h6",null,"Created by: Adeja"),r.a.createElement(ne,null),r.a.createElement(G.Home,null),r.a.createElement(K,null))))}}]),n}(a.Component),re=Object(y.o)(Object(i.b)((function(e){return{user:e.user}}),{loadListingsIndex:I,persistUser:k})(ae));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var le=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,ie=Object(o.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SET_USER":return Object(s.a)(Object(s.a)({},e),{},{user:a});case"CLEAR_USER":return Object(s.a)(Object(s.a)({},e),{},{user:{}});case"SET_LISTING":return Object(s.a)(Object(s.a)({},e),{},{listings:[].concat(Object(c.a)(e.listings),[a])});case"GET_LISTINGS":return Object(s.a)(Object(s.a)({},e),{},{listings:a});case"BUY_LISTING":var r=e.listings.map((function(e){return e.id===a.id?a:e}));return Object(s.a)(Object(s.a)({},e),{},{listings:r});case"USERS_LISTINGS":return Object(s.a)(Object(s.a)({},e),{},{users:[].concat(Object(c.a)(e.user.listings),[a])});default:return e}}),le(Object(o.a)(l.a)));p.a.render(r.a.createElement(i.a,{store:ie},r.a.createElement(N.BrowserRouter,null,r.a.createElement(re,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.712d7c48.chunk.js.map