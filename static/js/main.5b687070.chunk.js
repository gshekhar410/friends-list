(this["webpackJsonpfriends-list"]=this["webpackJsonpfriends-list"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(7),c=n.n(i),s=(n(13),n(14),n(0));function o(){return Object(s.jsx)("div",{className:"header",children:Object(s.jsx)("b",{children:Object(s.jsx)("pre",{children:"F R I E N D S      L I S T"})})})}var f=r.a.memo(o),l=(n(16),n(5)),u=n(2),d=(n(17),[{name:"Shekhar",favorite:!1},{name:"Rajesh",favorite:!1},{name:"Rohit",favorite:!1},{name:"Sharma",favorite:!1},{name:"Kohli",favorite:!1},{name:"Ramesh",favorite:!1},{name:"Tendulkar",favorite:!0},{name:"SreeSanth",favorite:!1},{name:"Bumrah",favorite:!1},{name:"Elijah",favorite:!0},{name:"Niklaus",favorite:!0},{name:"Peter",favorite:!0},{name:"Thiel",favorite:!0},{name:"Stupid",favorite:!0},{name:"Hilarious",favorite:!0},{name:"Stormi",favorite:!0},{name:"Dollar",favorite:!0},{name:"Mavi",favorite:!0},{name:"Toxic",favorite:!0},{name:"Mortal",favorite:!0},{name:"Orange",favorite:!0},{name:"Mikael",favorite:!0},{name:"Parth",favorite:!0},{name:"Napier",favorite:!0},{name:"Hero",favorite:!0},{name:"Mumbiker Nikhil",favorite:!0}]);function j(e){return e.sort((function(e,t){return e.name.toLowerCase()<t.name.toLowerCase()?-1:e.name.toLowerCase()>t.name.toLowerCase()?1:0}))}var v=Object(a.createContext)(),m=function(){return Object(a.useContext)(v)};function h(e){var t=e.children,n=Object(a.useState)((function(){return JSON.parse(window.localStorage.getItem("friends"))||j(d)})),i=Object(u.a)(n,2),c=i[0],o=i[1],f=Object(a.useState)(c),l=Object(u.a)(f,2),m=l[0],h=l[1],b=Object(a.useState)(0),O=Object(u.a)(b,2),x=O[0],g=O[1],S=Object(a.useState)(Math.ceil(c.length/4)),p=Object(u.a)(S,2),F=p[0],C=p[1],N=r.a.useState(""),k=Object(u.a)(N,2),P=k[0],w=k[1],y=Object(a.useState)(!1),E=Object(u.a)(y,2),L=E[0],I=E[1],M=Object(a.useState)(!1),D=Object(u.a)(M,2),T=D[0],A=D[1];return Object(s.jsx)(v.Provider,{value:{friends:c,currPage:x,pages:F,sortFavorite:T,searchField:P,filteredFriends:m,search:L,setSortFavorite:A,setSearch:I,setFilteredFriends:h,setSearchField:w,setCurrPage:g,setFriends:o,getPaginatedData:function(){if(!L){var e=4*x,t=e+4;if(T){var n=c.filter((function(e){return e.favorite})),a=c.filter((function(e){return!e.favorite}));return n.concat(a).slice(e,t)}return c.slice(e,t)}if(L){var r=4*x,i=r+4;if(T){var s=m.filter((function(e){return e.favorite})),o=m.filter((function(e){return!e.favorite}));return s.concat(o).slice(r,i)}return m.slice(r,i)}},setPageCount:C},children:t})}var b=function(e){e.add;var t=m(),n=t.searchField,a=t.setFilteredFriends,i=t.setSearchField,c=t.setFriends,o=t.friends,f=t.setSearch,d=r.a.useState(""),v=Object(u.a)(d,2),h=v[0],b=v[1],O=function(e){var t;0!==h.trimEnd().length&&(t=h.trimEnd(),c(j([].concat(Object(l.a)(o),[{name:t,favorite:!1}]))))};return r.a.useEffect((function(){var e=o.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));a(j(e))}),[o,n,a]),Object(s.jsxs)("div",{className:"addfriend",children:[Object(s.jsx)("form",{children:Object(s.jsxs)("div",{children:[Object(s.jsx)("input",{autoComplete:"off",placeholder:"Add a friend",id:"nameInput",type:"text",onChange:function(e){var t=e.target.value;0!==t.length&&b(t.replace(/[^A-Za-z ]/gi,"").trimStart())},onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),O(),b(""))},value:h}),Object(s.jsx)("br",{})]})}),Object(s.jsx)("form",{children:Object(s.jsxs)("div",{children:[Object(s.jsx)("input",{autoComplete:"off",placeholder:"Search Friend",id:"nameInput",type:"text",onChange:function(e){var t=e.target.value;0!==t.replace(/[^A-Za-z ]/gi,"").trimStart().length?(f(!0),i(t.replace(/[^A-Za-z ]/gi,"").trimStart())):(f(!1),i(t.replace(/[^A-Za-z ]/gi,"").trimStart()))},value:n}),Object(s.jsx)("br",{})]})})]})},O=n(8);n(18);var x=function(e){var t=e.friend,n=m(),a=n.friends,r=n.setFriends;return Object(s.jsxs)("div",{className:"frncrd",children:[Object(s.jsx)("div",{className:"name",children:Object(s.jsx)("span",{children:t.name})}),Object(s.jsx)("div",{className:"status",children:"is your Friend"}),Object(s.jsx)("div",{className:"fav",children:Object(s.jsx)("span",{className:t.favorite?"favSpan red":"favSpan black",onClick:function(){return function(e){console.log("setFavorite was called");var t,n=a,i=Object(O.a)(n);try{for(i.s();!(t=i.n()).done;){var c=t.value;c.name===e&&(c.favorite=!c.favorite)}}catch(s){i.e(s)}finally{i.f()}r(Object(l.a)(n))}(t.name)},children:"\u2665"})}),Object(s.jsx)("div",{className:"del",children:Object(s.jsx)("span",{className:"delSpan",onClick:function(){return e=t.name,void r(a.filter((function(t){return t.name!==e})));var e},children:"\u2716"})})]})};n(19);var g=function(){var e=m(),t=e.friends,n=e.search,a=(0,e.getPaginatedData)(n);return r.a.useEffect((function(){window.localStorage.setItem("friends",JSON.stringify(t))}),[t]),console.log(a),Object(s.jsx)("div",{className:"frnlist",children:a.map((function(e,t){return Object(s.jsx)(x,{friend:e},t)}))})};n(20);var S=function(){var e=m(),t=e.setSortFavorite,n=e.sortFavorite,a=e.search,i=e.friends,c=e.filteredFriends,o=e.setPageCount,f=e.currPage,l=e.pages,u=e.setCurrPage;return r.a.useEffect((function(){o(a?Math.ceil(c.length/4):Math.ceil(i.length/4)),f===l&&f>0&&u(f-1)}),[i,f,l,o,u,a,c.length]),Object(s.jsxs)("div",{className:"footer",children:[Object(s.jsx)("button",{className:"previous round",onClick:function(){u((function(e){return e-1}))},disabled:f<1,children:"\u2039 Prev"}),Object(s.jsx)("button",{className:n?"red":"black",onClick:function(){return t(!n)},children:"Sort \u2665"}),Object(s.jsx)("button",{className:"next round",onClick:function(){u((function(e){return e+1}))},disabled:f===l-1||f===l,children:"Next \u203a"})]})};var p=function(){return Object(s.jsxs)("div",{className:"center",children:[Object(s.jsx)(f,{}),Object(s.jsxs)(h,{children:[Object(s.jsx)(b,{}),Object(s.jsx)(g,{}),Object(s.jsx)(S,{})]})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};c.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root")),F()}],[[21,1,2]]]);
//# sourceMappingURL=main.5b687070.chunk.js.map