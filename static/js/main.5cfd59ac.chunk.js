(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(4),l=c.n(s),r=(c(9),c(2)),o=c(0);function i(e){var t=Object(n.useState)(""),c=Object(r.a)(t,2),a=c[0],s=c[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"my-3",children:Object(o.jsx)("textarea",{className:"form-control",id:"myBox",value:a,rows:"8",onChange:function(e){s(e.target.value)}})}),Object(o.jsx)("button",{type:"button",className:"btn btn-primary mx-1 my-2",onClick:function(){var t=a.toUpperCase();s(t),e.showAlert("success","Yay! converted to upper case")},children:"ToUppercase"}),Object(o.jsx)("button",{type:"button",className:"btn btn-primary mx-1 my-2",onClick:function(){var t=a.toLowerCase();s(t),e.showAlert("success","Yay! converted to lower case")},children:"ToLowercase"}),Object(o.jsx)("button",{type:"button",className:"btn btn-primary mx-1 my-2",onClick:function(){var t=a.split("."),c="";t.forEach((function(e){var t=e.length;t&&(" "===e[0]&&t>=2?c+=e[0]+e[1].toUpperCase()+e.slice(2)+".":c+=e[0].toUpperCase()+e.slice(1)+".")})),s(c),e.showAlert("success","Yay! Set all fist letter capital")},children:"Capital first letter"}),Object(o.jsx)("button",{type:"button",className:"btn btn-primary mx-1 my-2",onClick:function(){var t=a.split(/[ ]+/);s(t.join(" ")),e.showAlert("success","Yay! removed all extra spaces")},children:"Remove Extra Space"}),Object(o.jsx)("button",{type:"button",className:"btn btn-primary mx-1 my-2",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("success","Yay! copied to clipboad")},children:"Copy"}),Object(o.jsx)("button",{type:"button",className:"btn btn-primary mx-1 my-2",onClick:function(){s(""),e.showAlert("success","Yay! Cleared text")},children:"Clear"}),Object(o.jsx)("h1",{children:"Text Summary"}),Object(o.jsxs)("p",{children:["total number of words ",0===a.length?0:a.split(" ").length," and total number of letters are ",a.length]}),Object(o.jsxs)("p",{children:[0===a.length?0:a.split(" ").length/150," Minutes read"]}),Object(o.jsx)("h1",{children:"Preview"}),Object(o.jsx)("p",{children:a})]})}function b(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:[Object(o.jsx)("a",{class:"navbar-brand",href:"/",children:"TextUtility"}),Object(o.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{class:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{class:"navbar-nav mr-auto",children:[Object(o.jsx)("li",{class:"nav-item active",children:Object(o.jsxs)("a",{class:"nav-link",href:"/",children:["Home ",Object(o.jsx)("span",{class:"sr-only",children:"(current)"})]})}),Object(o.jsx)("li",{class:"nav-item",children:Object(o.jsx)("a",{class:"nav-link",href:"/",children:"About"})}),Object(o.jsx)("li",{class:"nav-item",children:Object(o.jsx)("a",{class:"nav-link",href:"/",children:"Contact us"})})]}),Object(o.jsx)("form",{class:"form-inline my-2 my-lg-0",children:Object(o.jsxs)("div",{class:"form-check form-switch",children:[Object(o.jsx)("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),Object(o.jsx)("label",{class:"form-check-label",style:{color:"light"===e.mode?"black":"white"},for:"flexSwitchCheckDefault",children:"Enable dark mode"})]})})]})]})})}function d(e){return e.alert&&Object(o.jsx)("div",{children:Object(o.jsx)("div",{class:"alert  alert-".concat(e.alert.type),role:"alert",children:Object(o.jsx)("strong",{children:e.alert.msg})})})}var j=function(){var e=Object(n.useState)("light"),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(null),l=Object(r.a)(s,2),j=l[0],u=l[1],h=function(e,t){u({msg:t,type:e}),setTimeout((function(){u(null)}),1500)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b,{mode:c,toggleMode:function(){var e=document.getElementById("myBox");"light"===c?(a("dark"),h("success","dark mode enable"),document.body.style.backgroundColor="#212529",document.body.style.color="white",e.style.backgroundColor="grey",e.style.color="white"):(a("light"),document.body.style.backgroundColor="white",document.body.style.color="black",e.style.backgroundColor="white",e.style.color="black",h("success","light mode enable"))},showAlert:h}),Object(o.jsx)(d,{alert:j}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(i,{showAlert:h})})]})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,12)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,l=t.getTTFB;c(e),n(e),a(e),s(e),l(e)}))};l.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),u()},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.5cfd59ac.chunk.js.map