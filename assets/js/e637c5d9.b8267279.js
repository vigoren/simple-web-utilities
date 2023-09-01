/*! For license information please see e637c5d9.b8267279.js.LICENSE.txt */
"use strict";(self.webpackChunk_simple_web_utilities_documentation=self.webpackChunk_simple_web_utilities_documentation||[]).push([[686],{6943:(t,e,i)=>{i.d(e,{Z:()=>k});var a=i(2784);const n="exampleContainer_OAjT",l="code_WOWu",o="animation_Hb9N",s="previewWrapper_eHYJ",m="preview_o8ca",d="expandExample_x55K",p="collapseExample_SnLw",u="options_AoHf",r="title_iqoi",h="group_v4ez";var c=i(5e3);i(9741);class f extends a.Component{expandExample;collapseExample;constructor(t){super(t);const e=t.animation||"",i=t.text||"";this.expandExample=t.expandExample||!1,this.collapseExample=t.collapseExample||!1,this.state={animation:e,text:i,duration:"",repeat:"",delay:""}}onDurationChange(t){const e=t.target;if(e){const t=e.options[e.selectedIndex].value;t?this.setState({duration:t}):this.setState({duration:""})}}onRepeatChange(t){const e=t.target;if(e){const t=e.options[e.selectedIndex].value;t?this.setState({repeat:t}):this.setState({repeat:""})}}onDelayChange(t){const e=t.target;if(e){e.checked?this.setState({delay:"sa-delay"}):this.setState({delay:""})}}runAnimation(t){i(7274).U.initialize();const e=t.target;if(e){const t=e.dataset.animation,i=e.previousSibling.firstChild;t&&i&&(i.classList.remove(t),i.offsetWidth,i.classList.add(t))}}render(){let t=[this.state.duration,this.state.repeat,this.state.delay].filter((t=>t)).join(" ");return t&&(t=" "+t),a.createElement("div",null,a.createElement("div",{className:n},a.createElement("div",{className:o},a.createElement("div",{className:s},a.createElement("div",{"data-preview":"true",className:`${m} simple-animation ${t} ${this.expandExample?d:this.collapseExample?p:""}`},this.expandExample||this.collapseExample?a.createElement("ul",null,a.createElement("li",null,"Item 1"),a.createElement("li",null,"Item 2"),a.createElement("li",null,"Item 3"),a.createElement("li",null,"Item 4"),a.createElement("li",null,"Item 5")):this.state.text)),a.createElement("button",{type:"button","data-animation":this.state.animation,onClick:this.runAnimation,"data-sa-collapse":this.expandExample?`.${d}`:this.collapseExample?`.${p}`:""},"Run Animation")),a.createElement("div",{className:u},a.createElement("strong",{className:r},"Options"),a.createElement("div",{className:h},a.createElement("select",{onChange:this.onRepeatChange.bind(this)},a.createElement("option",{value:""},"No Repeat"),a.createElement("option",{value:"sa-infinite"},"Infinite Repeat")),a.createElement("label",null,"Repeat Animation")),a.createElement("div",{className:h},a.createElement("select",{defaultValue:"",onChange:this.onDurationChange.bind(this)},a.createElement("option",{value:"sa-duration-quadruple"},"Quadruple Duration"),a.createElement("option",{value:"sa-duration-triple"},"Triple Duration"),a.createElement("option",{value:"sa-duration-double"},"Double Duration"),a.createElement("option",{value:""},"Normal Duration"),a.createElement("option",{value:"sa-duration-half"},"Half Duration"),a.createElement("option",{value:"sa-duration-third"},"Third Duration"),a.createElement("option",{value:"sa-duration-quarter"},"Quarter Duration")),a.createElement("label",null,"Animation Duration")),a.createElement("div",null,a.createElement("label",null,a.createElement("input",{type:"checkbox",onChange:this.onDelayChange.bind(this)})," Delay Animation")))),a.createElement("div",{className:l},a.createElement(c.Z,{language:"html",showLineNumbers:!0},`<div className="simple-animation ${this.state.animation}${t}">${this.state.text}</div>`)))}}const k=f},517:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>m,toc:()=>p});var a=i(7896),n=(i(2784),i(876)),l=i(6943);const o={},s="Slide",m={unversionedId:"simple-animation/css-animations/slide",id:"simple-animation/css-animations/slide",title:"Slide",description:"Basic animations for sliding elements into their final position.",source:"@site/docs/simple-animation/css-animations/slide.mdx",sourceDirName:"simple-animation/css-animations",slug:"/simple-animation/css-animations/slide",permalink:"/simple-web-utilities/docs/simple-animation/css-animations/slide",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"simpleAnimationSidebar",previous:{title:"Fade",permalink:"/simple-web-utilities/docs/simple-animation/css-animations/fade"},next:{title:"Fade and Slide",permalink:"/simple-web-utilities/docs/simple-animation/css-animations/fade-and-slide"}},d={},p=[{value:"Slide In",id:"slide-in",level:2},{value:"Slide In Left",id:"slide-in-left",level:3},{value:"Slide In Right",id:"slide-in-right",level:3},{value:"Slide In Top",id:"slide-in-top",level:3},{value:"Slide In Bottom",id:"slide-in-bottom",level:3},{value:"Slide In Top Left",id:"slide-in-top-left",level:3},{value:"Slide In Top Right",id:"slide-in-top-right",level:3},{value:"Slide In Bottom Left",id:"slide-in-bottom-left",level:3},{value:"Slide In Bottom Right",id:"slide-in-bottom-right",level:3},{value:"Slide Out",id:"slide-out",level:2},{value:"Slide Out Left",id:"slide-out-left",level:3},{value:"Slide Out Right",id:"slide-out-right",level:3},{value:"Slide Out Top",id:"slide-out-top",level:3},{value:"Slide Out Bottom",id:"slide-out-bottom",level:3},{value:"Slide Out Top Left",id:"slide-out-top-left",level:3},{value:"Slide Out Top Right",id:"slide-out-top-right",level:3},{value:"Slide Out Bottom Left",id:"slide-out-bottom-left",level:3},{value:"Slide Out Bottom Right",id:"slide-out-bottom-right",level:3}],u={toc:p},r="wrapper";function h(t){let{components:e,...i}=t;return(0,n.kt)(r,(0,a.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"slide"},"Slide"),(0,n.kt)("p",null,"Basic animations for sliding elements into their final position."),(0,n.kt)("h2",{id:"slide-in"},"Slide In"),(0,n.kt)("p",null,"Slides an element in from the specified direction."),(0,n.kt)("p",null,"These animations can be combined with any utility class to delay, repeat or change the speed of the animation."),(0,n.kt)("h3",{id:"slide-in-left"},"Slide In Left"),(0,n.kt)("p",null,"Slides an element in from the left."),(0,n.kt)("p",null,"To use this animation add ",(0,n.kt)("inlineCode",{parentName:"p"},"simple-animation sa-slide-in-left")," classes to the element you want to animate."),(0,n.kt)(l.Z,{animation:"sa-slide-in-left",text:"Slide in from the left.",mdxType:"AnimationExample"}),(0,n.kt)("h3",{id:"slide-in-right"},"Slide In Right"),(0,n.kt)("p",null,"Slides an element in from the right."),(0,n.kt)("p",null,"To use this animation add ",(0,n.kt)("inlineCode",{parentName:"p"},"simple-animation sa-slide-in-right")," classes to the element you want to animate."),(0,n.kt)(l.Z,{animation:"sa-slide-in-right",text:"Slide in from the right.",mdxType:"AnimationExample"}),(0,n.kt)("h3",{id:"slide-in-top"},"Slide In Top"),(0,n.kt)("p",null,"Slides an element in from the top."),(0,n.kt)("p",null,"To use this animation add ",(0,n.kt)("inlineCode",{parentName:"p"},"simple-animation sa-slide-in-top")," classes to the element you want to animate."),(0,n.kt)(l.Z,{animation:"sa-slide-in-top",text:"Slide in from the top.",mdxType:"AnimationExample"}),(0,n.kt)("h3",{id:"slide-in-bottom"},"Slide In Bottom"),(0,n.kt)("p",null,"Slides an element in from the bottom."),(0,n.kt)("p",null,"To use this animation add ",(0,n.kt)("inlineCode",{parentName:"p"},"simple-animation sa-slide-in-bottom")," classes to the element you want to animate."),(0,n.kt)(l.Z,{animation:"sa-slide-in-bottom",text:"Slide in from the bottom.",mdxType:"AnimationExample"}),(0,n.kt)("h3",{id:"slide-in-top-left"},"Slide In Top Left"),(0,n.kt)("p",null,"Slides an element in from the top left."),(0,n.kt)("p",null,"To use this animation add ",(0,n.kt)("inlineCode",{parentName:"p"},"simple-animation sa-slide-in-top-left")," classes to the element you want to animate."),(0,n.kt)(l.Z,{animation:"sa-slide-in-top-left",text:"Slide in from the top left.",mdxType:"AnimationExample"}),(0,n.kt)("h3",{id:"slide-in-top-right"},"Slide In Top Right"),(0,n.kt)("p",null,"Slides an element in from the top right."),(0,n.kt)("p",null,"To use this animation add ",(0,n.kt)("inlineCode",{parentName:"p"},"simple-animation sa-slide-in-top-right")," classes to the element you want to animate."),(0,n.kt)(l.Z,{animation:"sa-slide-in-top-right",text:"Slide in from the top right.",mdxType:"AnimationExample"}),(0,n.kt)("h3",{id:"slide-in-bottom-left"},"Slide In Bottom Left"),(0,n.kt)("p",null,"Slides an element in from the bottom left."),(0,n.kt)("p",null,"To use this animation add ",(0,n.kt)("inlineCode",{parentName:"p"},"simple-animation sa-slide-in-bottom-left")," classes to the element you want to animate."),(0,n.kt)(l.Z,{animation:"sa-slide-in-bottom-left",text:"Slide in from the bottom left.",mdxType:"AnimationExample"}),(0,n.kt)("h3",{id:"slide-in-bottom-right"},"Slide In Bottom Right"),(0,n.kt)("p",null,"Slides an element in from the bottom right."),(0,n.kt)("p",null,"To use this animation add ",(0,n.kt)("inlineCode",{parentName:"p"},"simple-animation sa-slide-in-bottom-right")," classes to the element you want to animate."),(0,n.kt)(l.Z,{animation:"sa-slide-in-bottom-right",text:"Slide in from the bottom right.",mdxType:"AnimationExample"}),(0,n.kt)("h2",{id:"slide-out"},"Slide Out"),(0,n.kt)("p",null,"Slides an element out to the specified direction."),(0,n.kt)("p",null,"These animations can be combined with any utility class to delay, repeat or change the speed of the animation."),(0,n.kt)("h3",{id:"slide-out-left"},"Slide Out Left"),(0,n.kt)("p",null,"Slides an element out to the left."),(0,n.kt)("p",null,"To use this animation add ",(0,n.kt)("inlineCode",{parentName:"p"},"simple-animation sa-slide-out-left")," classes to the element you want to animate."),(0,n.kt)(l.Z,{animation:"sa-slide-out-left",text:"Slide out to the left.",mdxType:"AnimationExample"}),(0,n.kt)(l.Z,{animation:"sa-slide-out-left-then-display-none",text:"Slide out to the left.",mdxType:"AnimationExample"}),(0,n.kt)("h3",{id:"slide-out-right"},"Slide Out Right"),(0,n.kt)("p",null,"Slides an element out to the right."),(0,n.kt)("p",null,"To use this animation add ",(0,n.kt)("inlineCode",{parentName:"p"},"simple-animation sa-slide-out-right")," classes to the element you want to animate."),(0,n.kt)(l.Z,{animation:"sa-slide-out-right",text:"Slide out to the right.",mdxType:"AnimationExample"}),(0,n.kt)("h3",{id:"slide-out-top"},"Slide Out Top"),(0,n.kt)("p",null,"Slides an element out to the top."),(0,n.kt)("p",null,"To use this animation add ",(0,n.kt)("inlineCode",{parentName:"p"},"simple-animation sa-slide-out-top")," classes to the element you want to animate."),(0,n.kt)(l.Z,{animation:"sa-slide-out-top",text:"Slide out to the top.",mdxType:"AnimationExample"}),(0,n.kt)("h3",{id:"slide-out-bottom"},"Slide Out Bottom"),(0,n.kt)("p",null,"Slides an element out to the bottom."),(0,n.kt)("p",null,"To use this animation add ",(0,n.kt)("inlineCode",{parentName:"p"},"simple-animation sa-slide-out-bottom")," classes to the element you want to animate."),(0,n.kt)(l.Z,{animation:"sa-slide-out-bottom",text:"Slide out to the bottom.",mdxType:"AnimationExample"}),(0,n.kt)("h3",{id:"slide-out-top-left"},"Slide Out Top Left"),(0,n.kt)("p",null,"Slides an element out to the top left."),(0,n.kt)("p",null,"To use this animation add ",(0,n.kt)("inlineCode",{parentName:"p"},"simple-animation sa-slide-out-top-left")," classes to the element you want to animate."),(0,n.kt)(l.Z,{animation:"sa-slide-out-top-left",text:"Slide out to the top left.",mdxType:"AnimationExample"}),(0,n.kt)("h3",{id:"slide-out-top-right"},"Slide Out Top Right"),(0,n.kt)("p",null,"Slides an element out to the top right."),(0,n.kt)("p",null,"To use this animation add ",(0,n.kt)("inlineCode",{parentName:"p"},"simple-animation sa-slide-out-top-right")," classes to the element you want to animate."),(0,n.kt)(l.Z,{animation:"sa-slide-out-top-right",text:"Slide out to the top right.",mdxType:"AnimationExample"}),(0,n.kt)("h3",{id:"slide-out-bottom-left"},"Slide Out Bottom Left"),(0,n.kt)("p",null,"Slides an element out to the bottom left."),(0,n.kt)("p",null,"To use this animation add ",(0,n.kt)("inlineCode",{parentName:"p"},"simple-animation sa-slide-out-bottom-left")," classes to the element you want to animate."),(0,n.kt)(l.Z,{animation:"sa-slide-out-bottom-left",text:"Slide out to the bottom left.",mdxType:"AnimationExample"}),(0,n.kt)("h3",{id:"slide-out-bottom-right"},"Slide Out Bottom Right"),(0,n.kt)("p",null,"Slides an element out to the bottom right."),(0,n.kt)("p",null,"To use this animation add ",(0,n.kt)("inlineCode",{parentName:"p"},"simple-animation sa-slide-out-bottom-right")," classes to the element you want to animate."),(0,n.kt)(l.Z,{animation:"sa-slide-out-bottom-right",text:"Slide out to the bottom right.",mdxType:"AnimationExample"}))}h.isMDXComponent=!0},7274:(t,e,i)=>{i.d(e,{U:()=>u});var a,n,l,o,s,m,d=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},p=(t,e,i)=>(((t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)})(t,e,"access private method"),i);class u{constructor(){}static initialize(){p(this,a,n).call(this).forEach((t=>{if(t.addEventListener("click",p(this,s,m).bind(this)),t.dataset.saCollapse){const e=document.querySelector(t.dataset.saCollapse||"");e&&e.style.setProperty("--simple-animation-collapse-max-height",p(this,l,o).call(this,e))}}))}}a=new WeakSet,n=function(){return document.querySelectorAll("*[data-sa-collapse]")},l=new WeakSet,o=function(t){return`${Math.max(t.offsetHeight,t.scrollHeight,t.clientHeight)}px`},s=new WeakSet,m=function(t){const e=t.target;if(e){const t=e.closest("*[data-sa-collapse]");if(t&&t.dataset.saCollapse){const e=document.querySelector(t.dataset.saCollapse);e&&(e.classList.toggle("sa-collapse-up"),e.classList.toggle("sa-expand-down"))}}},d(u,a),d(u,l),d(u,s),u.initialize()}}]);