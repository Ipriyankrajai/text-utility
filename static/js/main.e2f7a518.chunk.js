(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),l=n(4),r=n.n(l),o=(n(9),n(2)),s=n(0);function i(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"my-3",children:Object(s.jsx)("textarea",{className:"form-control",id:"myBox",value:n,rows:"8",onChange:function(e){a(e.target.value)}})}),Object(s.jsx)("button",{type:"button",className:"btn btn-primary mx-1 my-2",onClick:function(){var e=n.toUpperCase();a(e)},children:"ToUppercase"}),Object(s.jsx)("button",{type:"button",className:"btn btn-primary mx-1 my-2",onClick:function(){var e=n.toLowerCase();a(e)},children:"ToLowercase"}),Object(s.jsx)("button",{type:"button",className:"btn btn-primary mx-1 my-2",onClick:function(){var e=n.split("."),t="";e.forEach((function(e){var n=e.length;n&&(" "===e[0]&&n>=2?t+=e[0]+e[1].toUpperCase()+e.slice(2)+".":t+=e[0].toUpperCase()+e.slice(1)+".")})),a(t)},children:"Capital first letter"}),Object(s.jsx)("button",{type:"button",className:"btn btn-primary mx-1 my-2",onClick:function(){var e=n.split(/[ ]+/);a(e.join(" "))},children:"Remove Extra Space"}),Object(s.jsx)("button",{type:"button",className:"btn btn-primary mx-1 my-2",onClick:function(){var e=document.getElementById("myBox");e.select(),navigator.clipboard.writeText(e.value)},children:"Copy"}),Object(s.jsx)("button",{type:"button",className:"btn btn-primary mx-1 my-2",onClick:function(){a("")},children:"Clear"}),Object(s.jsx)("h1",{children:"Text Summary"}),Object(s.jsxs)("p",{children:["total number of words ",0===n.length?0:n.split(" ").length," and total number of letters are ",n.length]}),Object(s.jsxs)("p",{children:[0===n.length?0:n.split(" ").length/150," Minutes read"]}),Object(s.jsx)("h1",{children:"Preview"}),Object(s.jsx)("p",{children:n})]})}function b(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:[Object(s.jsx)("a",{class:"navbar-brand",href:"/",children:"TextUtility"}),Object(s.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{class:"navbar-toggler-icon"})}),Object(s.jsxs)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(s.jsxs)("ul",{class:"navbar-nav mr-auto",children:[Object(s.jsx)("li",{class:"nav-item active",children:Object(s.jsxs)("a",{class:"nav-link",href:"/",children:["Home ",Object(s.jsx)("span",{class:"sr-only",children:"(current)"})]})}),Object(s.jsx)("li",{class:"nav-item",children:Object(s.jsx)("a",{class:"nav-link",href:"/",children:"About"})}),Object(s.jsx)("li",{class:"nav-item",children:Object(s.jsx)("a",{class:"nav-link",href:"/",children:"Contact us"})})]}),Object(s.jsx)("form",{class:"form-inline my-2 my-lg-0",children:Object(s.jsxs)("div",{class:"form-check form-switch",children:[Object(s.jsx)("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),Object(s.jsx)("label",{class:"form-check-label",style:{color:"light"===e.mode?"black":"white"},for:"flexSwitchCheckDefault",children:"Enable dark mode"})]})})]})]})})}var d=function(){var e=Object(c.useState)("light"),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(b,{mode:n,toggleMode:function(){var e=document.getElementById("myBox");"light"===n?(a("dark"),document.body.style.backgroundColor="#212529",document.body.style.color="white",e.style.backgroundColor="grey",e.style.color="white"):(a("light"),document.body.style.backgroundColor="white",document.body.style.color="black",e.style.backgroundColor="white",e.style.color="black")}}),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)(i,{})})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,l=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),l(e),r(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root")),j()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.e2f7a518.chunk.js.map