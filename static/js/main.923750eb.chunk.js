(this["webpackJsonppokeman-app"]=this["webpackJsonppokeman-app"]||[]).push([[0],{43:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),i=n(29),r=n.n(i),o=(n(43),n(28)),s=n.n(o),l=n(30),m=n(16),h=n(76),j=n(79),u=n(80),d=n(78),p=n(3),b=Object(h.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},paper:{width:"40em",border:"2px solid gray !important"},column:{display:"flex",flexDirection:"column",border:"1px solid gray"},row:{display:"flex",flexDirection:"row",justifyContent:"space-between"},rowItem:{borderRight:"2px solid gray"},item:{padding:"1em",width:"9em",textAlign:"center",borderBottom:"2px solid gray"},image:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"15em"},imageItem:{width:"100%"}}}));var f=function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([]),r=Object(m.a)(i,2),o=r[0],h=r[1],f=b(),x=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,fetch("https://pokeapi.co/api/v2/pokemon/".concat(n)).then((function(e){return e.json()})).then((function(e){t.push(e),h(t)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)(j.a,{className:f.root,children:[Object(p.jsx)("h1",{style:{color:"green",margin:"0",marginTop:"2em"},children:"Enter a Pokemon Type"}),Object(p.jsx)("form",{onSubmit:function(e){e.preventDefault(),x()},children:Object(p.jsxs)("h2",{children:[Object(p.jsx)("input",{style:{height:"2.5em"},value:n,onChange:function(e){a(e.target.value.toLowerCase())}}),Object(p.jsx)("button",{style:{height:"2em",fontSize:"0.8em",marginLeft:"0.5em"},children:"Search"})]})}),o.map((function(e,t){return Object(p.jsxs)(u.a,{className:"".concat(f.row," ").concat(f.paper),variant:"outlined",children:[Object(p.jsx)(j.a,{className:"".concat(f.image),children:Object(p.jsx)("img",{className:"".concat(f.imageItem),src:e.sprites.front_shiny})}),Object(p.jsxs)(j.a,{className:"".concat(f.column),variant:"outlined",children:[Object(p.jsxs)(j.a,{className:"".concat(f.row),children:[Object(p.jsx)(d.a,{className:"".concat(f.rowItem," ").concat(f.item),variant:"h6",children:"Type"}),Object(p.jsx)(d.a,{fontWeight:"700",className:"".concat(f.item),variant:"h7",children:e.types[0].type.name})]}),Object(p.jsxs)(j.a,{className:"".concat(f.row),children:[Object(p.jsx)(d.a,{className:"".concat(f.rowItem," ").concat(f.item),variant:"h6",children:"Weight"}),Object(p.jsx)(d.a,{fontWeight:"700",className:"".concat(f.item),variant:"h7",children:"".concat(Math.round(e.weight/4.5)," pounds")})]}),Object(p.jsxs)(j.a,{className:"".concat(f.row),children:[Object(p.jsx)(d.a,{className:"".concat(f.rowItem," ").concat(f.item),variant:"h6",children:"Height"}),Object(p.jsx)(d.a,{fontWeight:"700",className:"".concat(f.item),variant:"h7",children:"".concat(Math.round(e.height/3.1)," ft")})]}),Object(p.jsxs)(j.a,{className:"".concat(f.row),children:[Object(p.jsx)(d.a,{className:"".concat(f.rowItem," ").concat(f.item),variant:"h6",children:"Number of Battles"}),Object(p.jsx)(d.a,{fontWeight:"700",className:"".concat(f.item),variant:"h7",children:e.game_indices.length})]})]})]})}))]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,82)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(f,{})}),document.getElementById("root")),x()}},[[51,1,2]]]);
//# sourceMappingURL=main.923750eb.chunk.js.map