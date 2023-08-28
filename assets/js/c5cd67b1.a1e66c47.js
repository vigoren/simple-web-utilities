"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[353],{6943:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(2784);const i="exampleContainer_OAjT",l="code_WOWu",s="animation_Hb9N",o="previewWrapper_eHYJ",p="preview_o8ca",m="expandExample_x55K",r="collapseExample_SnLw",c="options_AoHf",d="title_iqoi",h="group_v4ez";var u=a(5e3);a(9741);class x extends n.Component{expandExample;collapseExample;constructor(e){super(e);const t=e.animation||"",a=e.text||"";this.expandExample=e.expandExample||!1,this.collapseExample=e.collapseExample||!1,this.state={animation:t,text:a,duration:"",repeat:"",delay:""}}onDurationChange(e){const t=e.target;if(t){const e=t.options[t.selectedIndex].value;e?this.setState({duration:e}):this.setState({duration:""})}}onRepeatChange(e){const t=e.target;if(t){const e=t.options[t.selectedIndex].value;e?this.setState({repeat:e}):this.setState({repeat:""})}}onDelayChange(e){const t=e.target;if(t){t.checked?this.setState({delay:"sa-delay"}):this.setState({delay:""})}}runAnimation(e){a(961).U.initialize();const t=e.target;if(t){const e=t.dataset.animation,a=t.previousSibling.firstChild;e&&a&&(a.classList.remove(e),a.offsetWidth,a.classList.add(e))}}render(){let e=[this.state.duration,this.state.repeat,this.state.delay].filter((e=>e)).join(" ");return e&&(e=" "+e),n.createElement("div",null,n.createElement("div",{className:i},n.createElement("div",{className:s},n.createElement("div",{className:o},n.createElement("div",{"data-preview":"true",className:`${p} simple-animation ${e} ${this.expandExample?m:this.collapseExample?r:""}`},this.expandExample||this.collapseExample?n.createElement("ul",null,n.createElement("li",null,"Item 1"),n.createElement("li",null,"Item 2"),n.createElement("li",null,"Item 3"),n.createElement("li",null,"Item 4"),n.createElement("li",null,"Item 5")):this.state.text)),n.createElement("button",{type:"button","data-animation":this.state.animation,onClick:this.runAnimation,"data-sa-collapse":this.expandExample?`.${m}`:this.collapseExample?`.${r}`:""},"Run Animation")),n.createElement("div",{className:c},n.createElement("strong",{className:d},"Options"),n.createElement("div",{className:h},n.createElement("select",{onChange:this.onRepeatChange.bind(this)},n.createElement("option",{value:""},"No Repeat"),n.createElement("option",{value:"sa-infinite"},"Infinite Repeat")),n.createElement("label",null,"Repeat Animation")),n.createElement("div",{className:h},n.createElement("select",{defaultValue:"",onChange:this.onDurationChange.bind(this)},n.createElement("option",{value:"sa-duration-quadruple"},"Quadruple Duration"),n.createElement("option",{value:"sa-duration-triple"},"Triple Duration"),n.createElement("option",{value:"sa-duration-double"},"Double Duration"),n.createElement("option",{value:""},"Normal Duration"),n.createElement("option",{value:"sa-duration-half"},"Half Duration"),n.createElement("option",{value:"sa-duration-third"},"Third Duration"),n.createElement("option",{value:"sa-duration-quarter"},"Quarter Duration")),n.createElement("label",null,"Animation Duration")),n.createElement("div",null,n.createElement("label",null,n.createElement("input",{type:"checkbox",onChange:this.onDelayChange.bind(this)})," Delay Animation")))),n.createElement("div",{className:l},n.createElement(u.Z,{language:"html",showLineNumbers:!0},`<div className="simple-animation ${this.state.animation}${e}">${this.state.text}</div>`)))}}const E=x},5550:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>r});var n=a(7896),i=(a(2784),a(876)),l=a(6943);const s={},o="Expand / Collapse",p={unversionedId:"simple-animation/css-animations/expand-collapse",id:"simple-animation/css-animations/expand-collapse",title:"Expand / Collapse",description:"These animations allow the expanding and collapsing of elements.",source:"@site/docs/simple-animation/css-animations/expand-collapse.mdx",sourceDirName:"simple-animation/css-animations",slug:"/simple-animation/css-animations/expand-collapse",permalink:"/simple-web-utilities/docs/simple-animation/css-animations/expand-collapse",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"simpleAnimationSidebar",previous:{title:"Fade and Slide",permalink:"/simple-web-utilities/docs/simple-animation/css-animations/fade-and-slide"},next:{title:"JavaScript Helpers",permalink:"/simple-web-utilities/docs/simple-animation/javascript-helpers/"}},m={},r=[{value:"Expand Down",id:"expand-down",level:2},{value:"Collapse Up",id:"collapse-up",level:2}],c={toc:r},d="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"expand--collapse"},"Expand / Collapse"),(0,i.kt)("p",null,"These animations allow the expanding and collapsing of elements."),(0,i.kt)("h2",{id:"expand-down"},"Expand Down"),(0,i.kt)("p",null,"Expand an element down from the top to its full height."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Unless the ",(0,i.kt)("a",{parentName:"p",href:"/simple-web-utilities/docs/simple-animation/javascript-helpers/"},"JavasScript Helpers")," have been included this animation will expand the element down to a max height of 1000px. This can cause the animation to appear to run too quickly for short elements. Including the ",(0,i.kt)("a",{parentName:"p",href:"/simple-web-utilities/docs/simple-animation/javascript-helpers/collapse"},"Collapse JavasScript Helper")," will set the correct max height for the element."),(0,i.kt)("p",{parentName:"admonition"},"Optionally you can set the max height of the element manually by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"--simple-animation-collapse-max-height")," CSS variable on the element.")),(0,i.kt)(l.Z,{animation:"sa-expand-down",expandExample:!0,mdxType:"AnimationExample"}),(0,i.kt)("h2",{id:"collapse-up"},"Collapse Up"),(0,i.kt)("p",null,"Collapse an element up from its full height to the top."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Unless the ",(0,i.kt)("a",{parentName:"p",href:"/simple-web-utilities/docs/simple-animation/javascript-helpers/"},"JavasScript Helpers")," have been included this animation will collapse the element up from a max height of 1000px. This can cause the animation to appear to be delayed before running for short elements. Including the ",(0,i.kt)("a",{parentName:"p",href:"/simple-web-utilities/docs/simple-animation/javascript-helpers/collapse"},"Collapse JavasScript Helper")," will set the correct max height for the element."),(0,i.kt)("p",{parentName:"admonition"},"Optionally you can set the max height of the element manually by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"--simple-animation-collapse-max-height")," CSS variable on the element.")),(0,i.kt)(l.Z,{animation:"sa-collapse-up",collapseExample:!0,mdxType:"AnimationExample"}))}h.isMDXComponent=!0},961:(e,t,a)=>{a.d(t,{U:()=>c});var n,i,l,s,o,p,m=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},r=(e,t,a)=>(((e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)})(e,t,"access private method"),a);class c{constructor(){}static initialize(){r(this,n,i).call(this).forEach((e=>{e.addEventListener("click",r(this,o,p).bind(this));const t=document.querySelector(e.dataset.saCollapse||"");t&&t.style.setProperty("--simple-animation-collapse-max-height",r(this,l,s).call(this,t))}))}}n=new WeakSet,i=function(){return document.querySelectorAll("*[data-sa-collapse]")},l=new WeakSet,s=function(e){return`${Math.max(e.offsetHeight,e.scrollHeight,e.clientHeight)}px`},o=new WeakSet,p=function(e){const t=e.target;if(t){const e=t.closest("*[data-sa-collapse]");if(e){const t=document.querySelector(e.dataset.saCollapse||"");t&&(t.classList.toggle("sa-collapse-up"),t.classList.toggle("sa-expand-down"))}}},m(c,n),m(c,l),m(c,o),c.initialize()}}]);