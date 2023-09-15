"use strict";(self.webpackChunk_simple_web_utilities_documentation=self.webpackChunk_simple_web_utilities_documentation||[]).push([[525],{876:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var l=a(2784);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=l.createContext({}),o=function(e){var t=l.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=o(e.components);return l.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=o(a),m=n,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return a?l.createElement(k,i(i({ref:t},p),{},{components:a})):l.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var o=2;o<r;o++)i[o]=a[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5841:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var l=a(7896),n=(a(2784),a(876));const r={id:"MultiSelect",title:"Class: MultiSelect",sidebar_label:"MultiSelect",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},i=void 0,s={unversionedId:"simple-multi-select/javascript/api/classes/MultiSelect",id:"simple-multi-select/javascript/api/classes/MultiSelect",title:"Class: MultiSelect",description:"A class to convert a native select element into a multi-select that resembles a native select element.",source:"@site/docs/simple-multi-select/javascript/api/classes/MultiSelect.md",sourceDirName:"simple-multi-select/javascript/api/classes",slug:"/simple-multi-select/javascript/api/classes/MultiSelect",permalink:"/simple-web-utilities/docs/simple-multi-select/javascript/api/classes/MultiSelect",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"MultiSelect",title:"Class: MultiSelect",sidebar_label:"MultiSelect",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"simpleMultiSelectSidebar"},c={},o=[{value:"Constructors",id:"constructors",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Accessors",id:"accessors",level:2},{value:"selectedValues",id:"selectedvalues",level:3},{value:"Returns",id:"returns",level:4},{value:"Methods",id:"methods",level:2},{value:"registerOnChangeCallback",id:"registeronchangecallback",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4}],p={toc:o},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A class to convert a native select element into a multi-select that resembles a native select element."),(0,n.kt)("h2",{id:"constructors"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new MultiSelect"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"selectElement"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"onChangeCallback?"),")"),(0,n.kt)("p",null,"Creates a new MultiSelect"),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"selectElement")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"HTMLSelectElement")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"undefined")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The native select element to convert to a multi-select")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"onChangeCallback")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"null")," ","|"," ",(0,n.kt)("a",{parentName:"td",href:"/simple-web-utilities/docs/simple-multi-select/javascript/api/modules#onchangecallback"},(0,n.kt)("inlineCode",{parentName:"a"},"onChangeCallback"))),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"null")),(0,n.kt)("td",{parentName:"tr",align:"left"},"(Optional) The callback function to call when the selected values change. The function will be passed the multi-select id and an array of selected values")))),(0,n.kt)("h2",{id:"accessors"},"Accessors"),(0,n.kt)("h3",{id:"selectedvalues"},"selectedValues"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"get")," ",(0,n.kt)("strong",{parentName:"p"},"selectedValues"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,n.kt)("p",null,"Gets the currently selected values."),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,n.kt)("p",null,"Returns an array of selected values"),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"registeronchangecallback"},"registerOnChangeCallback"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"registerOnChangeCallback"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"onChangeCallback"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Registers a callback function to be called when the selected values change"),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"onChangeCallback")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/simple-web-utilities/docs/simple-multi-select/javascript/api/modules#onchangecallback"},(0,n.kt)("inlineCode",{parentName:"a"},"onChangeCallback"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"The function to call. The function will be passed the multi-select id and an array of selected values")))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")))}d.isMDXComponent=!0}}]);