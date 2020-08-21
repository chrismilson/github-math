(this["webpackJsonpgithub-math"]=this["webpackJsonpgithub-math"]||[]).push([[0],{13:function(e,t,n){e.exports=n(31)},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),i=n.n(c),o=n(1),u=function(e){navigator.clipboard.writeText(e)},l=n(12),d=n.n(l),h=(n(25),n(26),n(27),function(e){var t=e.code,n=e.onChange,c=Object(a.useRef)(null),i=Object(a.useState)({width:0,height:0}),u=Object(o.a)(i,2),l=u[0],h=l.width,s=l.height,f=u[1];return Object(a.useEffect)((function(){var e=function(){if(c.current){var e=c.current.offsetWidth,t=c.current.offsetHeight;f({width:e,height:t})}};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[c]),r.a.createElement("div",{className:"Editor"},r.a.createElement("div",{ref:c,className:"Wrapper"},r.a.createElement(d.a,{name:"latex-input",placeholder:"Enter LaTeX math code here...",theme:"github",mode:"latex",onChange:n,fontSize:14,showPrintMargin:!1,showGutter:!1,highlightActiveLine:!1,value:t,width:"".concat(h,"px"),height:"".concat(s,"px")})))}),s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=Object(a.useState)(e),r=Object(o.a)(n,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){var n=setTimeout((function(){i(e)}),t);return function(){clearTimeout(n)}}),[e,t]),c},f=(n(28),function(){return r.a.createElement("div",{className:"Fallback"},"Invalid LaTeX Code")}),m=function(e){var t=e.url,n=Object(a.useState)(!1),c=Object(o.a)(n,2),i=c[0],l=c[1],d=Object(a.useState)(!1),h=Object(o.a)(d,2),m=h[0],v=h[1],b=s(t);return Object(a.useLayoutEffect)((function(){l(!1),v(!0)}),[b]),r.a.createElement("div",{className:"Display"+(m?" loading":"")},m&&r.a.createElement("div",{className:"Loading"},"Loading..."),i?r.a.createElement(f,null):r.a.createElement("img",{className:"Image",title:"Copy url to clipboard",src:b,alt:"Rendered LaTeX",onClick:function(){u(b)},onError:function(){l(!0),v(!1)},onLoad:function(){v(!1)}}))},v=function(e){var t=window.location.hash;return t?t.substring(1):e},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(a.useState)(decodeURIComponent(v(e))),n=Object(o.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){window.history.replaceState(null,"math-code",r?"/github-math/#".concat(encodeURIComponent(r)):"/github-math")}),[r]),[r,c]},g=function(e){return"https://render.githubusercontent.com/render/math?math="+encodeURIComponent(e)},E=(n(29),function(){var e=b(),t=Object(o.a)(e,2),n=t[0],c=t[1],i=g(n.trim());return Object(a.useEffect)((function(){var e=function(e){"s"===e.key&&e.getModifierState(-1!==navigator.userAgent.indexOf("Mac OS X")?"Meta":"Control")&&(e.preventDefault(),u(i))};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[i]),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Github Math"),r.a.createElement(h,{code:n,onChange:function(e){c(e)}}),r.a.createElement("h3",null,"Click the preview image to add the url to your clipboard."),r.a.createElement(m,{url:i}))});n(30);i.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.3bda78d2.chunk.js.map