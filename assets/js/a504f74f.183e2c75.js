"use strict";(self.webpackChunkhelp_site=self.webpackChunkhelp_site||[]).push([[92],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),h=a,m=s["".concat(l,".").concat(h)]||s[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3904:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},i="Machine Startup",c={unversionedId:"Gladius/Getting Started/Machine Startup",id:"Gladius/Getting Started/Machine Startup",title:"Machine Startup",description:"Turn on your Machine at the controller",source:"@site/docs/Gladius/Getting Started/Machine Startup.md",sourceDirName:"Gladius/Getting Started",slug:"/Gladius/Getting Started/Machine Startup",permalink:"/Gladius/Getting Started/Machine Startup",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"helpSidebar",previous:{title:"User Interface",permalink:"/Gladius/Getting Started/User Interface"},next:{title:"Moving the machine",permalink:"/Gladius/Getting Started/Moving the Machine"}},l={},u=[{value:"Connecting to the machine",id:"connecting-to-the-machine",level:2},{value:"Homing the machine",id:"homing-the-machine",level:2},{value:"Startup Procedure",id:"startup-procedure",level:2},{value:"Spindle Warmup",id:"spindle-warmup",level:3}],p={toc:u},s="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(s,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"machine-startup"},"Machine Startup"),(0,a.kt)("p",null,"Turn on your Machine at the controller"),(0,a.kt)("p",null,"Make sure the USB is connected to the Computer"),(0,a.kt)("h2",{id:"connecting-to-the-machine"},"Connecting to the machine"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open Gladius"),(0,a.kt)("li",{parentName:"ol"},'Click on the blue button "Disconnected" at the top right of Gladius. It will show a drop down menu.'),(0,a.kt)("li",{parentName:"ol"},'Select the com port that is connected to controller and hit "Open"')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(2463).Z,width:"352",height:"369"})),(0,a.kt)("p",null,'On the top left side of Gladius, the console should pop up with a black terminal and the "Disconnected" button should now be "Connected"\n',(0,a.kt)("img",{alt:"image",src:n(9167).Z,width:"1915",height:"1023"})),(0,a.kt)("h2",{id:"homing-the-machine"},"Homing the machine"),(0,a.kt)("p",null,'Press the "Homing" button at the top right of Gladius to home the machine. The machine should start moving to it\'s home position.\n',(0,a.kt)("img",{alt:"image",src:n(9729).Z,width:"757",height:"282"})),(0,a.kt)("p",null,"Before running up the machine we reccomend you follow the startup procedure and spindle warm up below."),(0,a.kt)("h2",{id:"startup-procedure"},"Startup Procedure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Run a tool change to set machine work co-ordinates\n")),(0,a.kt)("h3",{id:"spindle-warmup"},"Spindle Warmup"),(0,a.kt)("p",null,"The warm up should be performed before use to increase the longevity of your machine. Each stage should be held for 120 seconds (two minutes)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"7,500 RPM\n9,000 RPM\n11,500 RPM\n15,000 RPM\n18,000 RPM\n")))}d.isMDXComponent=!0},2463:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/GladiusConnect-3376d65ab7dfd1ef1a24dee420b2ed5e.png"},9167:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/GladiusConnected-b96c931d6eba4e2b5d9de95cad6c35be.png"},9729:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/homing-333073b87c1e9b73f8b87f97ff932bec.png"}}]);