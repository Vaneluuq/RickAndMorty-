(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,n){},3:function(e,t,n){e.exports={container:"styles_container___VR6U",containerCards:"styles_containerCards__3uTWJ",containerCard:"styles_containerCard__lrm2p",imgTarget:"styles_imgTarget__1icNI",containerText:"styles_containerText__2xhUj",containerFilter:"styles_containerFilter__2iMym"}},42:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(16),r=n.n(s),i=(n(22),n(4)),l=n(17),o=n.n(l),j=n(3),u=n.n(j),d=n(0),h=function(e){var t=e.character,n=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};return Object(d.jsxs)("div",{className:u.a.containerTarget,children:[Object(d.jsx)("img",{src:t.image,alt:t.name,className:u.a.imgTarget}),Object(d.jsxs)("div",{className:u.a.containerText,children:[Object(d.jsx)("h2",{children:t.name}),Object(d.jsxs)("p",{children:[n(Object.keys(t)[2])," : ",t.status]}),Object(d.jsxs)("p",{children:[n(Object.keys(t)[3])," : ",t.species]}),Object(d.jsxs)("p",{children:[n(Object.keys(t)[5])," : ",t.gender]}),Object(d.jsxs)("p",{children:[n(Object.keys(t)[6])," : ",t.origin.name]})]})]})},b=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{className:"form__label--name",htmlFor:"name",children:"Buscas a alguien en particular?"}),Object(d.jsx)("input",{className:"form__input",type:"text",name:"name",id:"name",value:e.nameFilter,placeholder:"Ej. Morty Smith",onChange:function(t){e.handleFilter({value:t.target.value,key:"name"})}})]})},m=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{htmlFor:"species",children:" Species: "}),Object(d.jsxs)("select",{name:"species",id:"species",onChange:function(t){e.handleFilter({value:t.target.value,key:"species"})},value:e.speciesFilter,children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"Human",children:"Human"}),Object(d.jsx)("option",{value:"Alien",children:"Alien"})]})]})},O=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{htmlFor:"status",children:" Status: "}),Object(d.jsxs)("select",{name:"status",id:"status",onChange:function(t){e.handleFilter({value:t.target.value,key:"status"})},value:e.deadFilter,children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"Dead",children:"Dead"}),Object(d.jsx)("option",{value:"Alive",children:"Alive"}),Object(d.jsx)("option",{value:"unknown",children:"unknown"})]})]})},p=function(e){return Object(d.jsx)("section",{className:u.a.containerFilter,children:Object(d.jsxs)("form",{className:"form",onSubmit:function(e){return e.preventDefault()},children:[Object(d.jsx)(b,{handleFilter:e.handleFilter,nameFilter:e.nameFilter}),Object(d.jsx)(m,{handleFilter:e.handleFilter,speciesFilter:e.speciesFilter}),Object(d.jsx)(O,{handleFilter:e.handleFilter,deadFilter:e.deadFilter})]})})},x=n.p+"static/media/rick.42c8df0b.png",f=function(){return Object(d.jsx)("header",{children:Object(d.jsx)("img",{src:x,alt:"logo Rick and Morty"})})},g=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),l=r[0],j=r[1],b=Object(a.useState)("all"),m=Object(i.a)(b,2),O=m[0],x=m[1],g=Object(a.useState)("all"),F=Object(i.a)(g,2),v=F[0],y=F[1];Object(a.useEffect)((function(){o.a.get("https://rickandmortyapi.com/api/character").then((function(e){c(e.data.results)})).catch((function(e){console.log(e)}))}),[]);var _=n.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())})).filter((function(e){return"all"===O||e.species===O})).filter((function(e){return"all"===v||e.status===v})).sort((function(e,t){return e.name>t.name?1:-1}));return Object(d.jsxs)("div",{className:u.a.container,children:[Object(d.jsx)(f,{}),Object(d.jsx)(p,{handleFilter:function(e){"name"===e.key?j(e.value):"species"===e.key?x(e.value):"status"===e.key&&y(e.value)},nameFilter:l,speciesFilter:O,deadFilter:v}),Object(d.jsx)("section",{className:u.a.containerCards,children:_.length>0?_.map((function(e){return Object(d.jsx)("div",{className:u.a.containerCard,children:Object(d.jsx)(h,{character:e},e.id)})})):Object(d.jsxs)("p",{children:["No se encuentra ningun personaje llamado ",Object(d.jsxs)("strong",{children:['"',l,'"']})," en este universo."]})})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),F()}},[[42,1,2]]]);
//# sourceMappingURL=main.4a16dc10.chunk.js.map