(function(e){function t(t){for(var n,a,l=t[0],s=t[1],u=t[2],c=0,d=[];c<l.length;c++)a=l[c],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var l=r[a];0!==o[l]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o={app:0},i=[];function l(e){return s.p+"js/"+({detail:"detail"}[e]||e)+"."+{detail:"9fb8262e"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={detail:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({detail:"detail"}[e]||e)+"."+{detail:"43b1b548"}[e]+".css",o=s.p+n,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var u=i[l],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===n||c===o))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){u=d[l],c=u.getAttribute("data-href");if(c===n||c===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],f.parentNode.removeChild(f),r(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=l(e);var d=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(f);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/libraries/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"016b":function(e,t,r){"use strict";r("2a6c")},"034f":function(e,t,r){"use strict";r("85ec")},"2a6c":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{staticClass:"app",attrs:{id:"app"}},[r("router-view")],1)},o=[],i=(r("034f"),r("2877")),l={},s=Object(i["a"])(l,a,o,!1,null,null,null),u=s.exports,c=r("8c4f"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.errored?r("section",[r("p",[e._v("Сервис временно недоступен, повторите попытку позднее.")])]):r("section",[e.loading?r("Preloader"):r("div",[r("vue-good-table",{attrs:{title:"Список библиотек",columns:e.columns,rows:e.rows,lineNumbers:!0,"search-options":{enabled:!0,trigger:"enter"},"pagination-options":{enabled:!0,mode:"pages",perPage:20,perPageDropdown:[10,20,50],dropdownAllowAll:!1,ofLabel:"из",pageLabel:"Страница",nextLabel:"Вперед",prevLabel:"Назад",rowsPerPageLabel:"Элементов на странице"},compactMode:""},scopedSlots:e._u([{key:"table-row",fn:function(t){return["name"==t.column.field?r("span",[r("router-link",{staticClass:"link",attrs:{to:{name:"Detail",params:{id:t.row.params.id,params:t.row.params}}}},[e._v(" "+e._s(t.row.name)+" ")])],1):e._e()]}}])})],1)],1)])},f=[],p=r("bc3a"),m=r.n(p),b=(r("dac4"),r("f617")),h=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bookshelf_wrapper"},[r("ul",{staticClass:"books_list"},[r("li",{staticClass:"book_item first"}),r("li",{staticClass:"book_item second"}),r("li",{staticClass:"book_item third"}),r("li",{staticClass:"book_item fourth"}),r("li",{staticClass:"book_item fifth"}),r("li",{staticClass:"book_item sixth"})]),r("div",{staticClass:"shelf"}),r("div",{staticClass:"caption"},[e._v("Идёт загрузка...")])])}],g={name:"Preloader"},w=g,_=(r("d6d5"),Object(i["a"])(w,h,v,!1,null,"13174b32",null)),y=_.exports,k={name:"Table",components:{VueGoodTable:b["a"],Preloader:y},data:function(){return{loading:!0,errored:!1,rows:[],columns:[{label:"Наименование",field:"name"},{label:"Адрес",field:"address"}]}},mounted:function(){var e=this;m.a.get("data.json").then((function(t){t.data.map((function(t){var r={};return r.params=t.data.general,r.name=t.data.general.name,r.address=t.data.general.address.fullAddress,e.rows.push(r),e.rows}))})).catch((function(t){console.log(t),e.errored=!0})).finally((function(){return e.loading=!1}))}},C=k,P=(r("016b"),Object(i["a"])(C,d,f,!1,null,"b1be8b1c",null)),j=P.exports;n["a"].use(c["a"]);var O=[{path:"/",name:"Table",component:j},{path:"/:id",name:"Detail",props:!0,component:function(){return r.e("detail").then(r.bind(null,"c84b"))}}],E=new c["a"]({mode:"history",base:"/libraries/",routes:O}),x=E;n["a"].config.productionTip=!1,new n["a"]({router:x,render:function(e){return e(u)}}).$mount("#app")},"85ec":function(e,t,r){},adfa:function(e,t,r){},d6d5:function(e,t,r){"use strict";r("adfa")}});
//# sourceMappingURL=app.e30daec8.js.map