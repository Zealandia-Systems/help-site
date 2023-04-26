"use strict";(self.webpackChunkhelp_site=self.webpackChunkhelp_site||[]).push([[4737],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1711:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={},o="Firmware",l={unversionedId:"Swordfish/Docs/Firmware",id:"Swordfish/Docs/Firmware",title:"Firmware",description:"These functions are mainly designed for service technicians, or those that feel comfortable fiddling. If you are uncomfortable and are having issues with Gladius and the machine contact us for support.",source:"@site/docs/Swordfish/Docs/Firmware.md",sourceDirName:"Swordfish/Docs",slug:"/Swordfish/Docs/Firmware",permalink:"/Swordfish/Docs/Firmware",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"swordfishSidebar",previous:{title:"Introduction",permalink:"/Swordfish/Introduction"},next:{title:"Workspace Settings",permalink:"/Swordfish/Docs/Workspace Settings"}},u={},c=[{value:"Firmware update",id:"firmware-update",level:2},{value:"Explanation of JSON string format",id:"explanation-of-json-string-format",level:2},{value:"Enabling Automatic Tool Changer Function",id:"enabling-automatic-tool-changer-function",level:2},{value:"Configuring VFD and Spindle",id:"configuring-vfd-and-spindle",level:2},{value:"Changzou H100",id:"changzou-h100",level:3},{value:"Fuling DZB",id:"fuling-dzb",level:3},{value:"Fuling H1",id:"fuling-h1",level:3},{value:"18000 RPM",id:"18000-rpm",level:3},{value:"24000 RPM",id:"24000-rpm",level:3},{value:"60000 RPM",id:"60000-rpm",level:3},{value:"Enable electric fan control",id:"enable-electric-fan-control",level:2},{value:"Enable ATC Dust Shoe",id:"enable-atc-dust-shoe",level:2}],s={toc:c},p="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"firmware"},"Firmware"),(0,a.kt)("h1",{id:"configuration-settings"},"Configuration Settings"),(0,a.kt)("h1",{id:"warning"},"WARNING!!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"These functions are mainly designed for service technicians, or those that feel comfortable fiddling. If you are uncomfortable and are having issues with Gladius and the machine contact us for ",(0,a.kt)("a",{parentName:"strong",href:"https://zealandia.systems/pages/support"},"support"),".")),(0,a.kt)("h2",{id:"firmware-update"},"Firmware update"),(0,a.kt)("p",null,"In order to do a firmware update, you will need to enter M997 into the console in Gladius. Once you do this, the controller will restart and open a USB drive on your PC. Click and drag or copy and past this attached firmware file into the USB drive. Once complete, the controller will automatically reboot and install the update."),(0,a.kt)("p",null,"Latest firmware ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Zealandia-Systems/Swordfish/releases"},"here")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:r(7028).Z,width:"1022",height:"603"})),(0,a.kt)("h2",{id:"explanation-of-json-string-format"},"Explanation of JSON string format"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"M2000 is the Mcode for accessing the settings")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"O","[function]",' is used for whether you are Creating a record, Reading, Updating or Deleting. Easily remembered by using the pnumonic, "CRUD"'))),(0,a.kt)("p",null,"O0 = Create\nO1 = Read\nO2 = Update\nO3 = Delete"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"?/","[file directory]","  is where the record is you wish to locate.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"{","[command]","}  is the function/command you with to perform")))),(0,a.kt)("h2",{id:"enabling-automatic-tool-changer-function"},"Enabling Automatic Tool Changer Function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'M2000 O2 ?/tooling >{"automatic":true}\n')),(0,a.kt)("h2",{id:"configuring-vfd-and-spindle"},"Configuring VFD and Spindle"),(0,a.kt)("h3",{id:"changzou-h100"},"Changzou H100"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'M2000 O0 ?/tooling/drivers/0 >{"type":0}\n')),(0,a.kt)("h3",{id:"fuling-dzb"},"Fuling DZB"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'M2000 O0 ?/tooling/drivers/0 >{"type":1}\n')),(0,a.kt)("h3",{id:"fuling-h1"},"Fuling H1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'M2000 O0 ?/tooling/drivers/0 >{"type":3}   \n')),(0,a.kt)("p",null,"as well as the maximum rpm supported by the spindle:"),(0,a.kt)("h3",{id:"18000-rpm"},"18000 RPM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'M2000 O0 ?/tooling/driverParameters/0 >{"driver":0,"id":10,"value":18000}\n')),(0,a.kt)("h3",{id:"24000-rpm"},"24000 RPM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'M2000 O0 ?/tooling/driverParameters/0 >{"driver":0,"id":10,"value":24000}\n')),(0,a.kt)("h3",{id:"60000-rpm"},"60000 RPM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'M2000 O0 ?/tooling/driverParameters/0 >{"driver":0,"id":10,"value":60000}\n')),(0,a.kt)("h2",{id:"enable-electric-fan-control"},"Enable electric fan control"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'M2000 O0 ?/tooling/driverParameters/1 >{"driver":0,"id":11,"value":"true"}\n')),(0,a.kt)("h2",{id:"enable-atc-dust-shoe"},"Enable ATC Dust Shoe"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'M2000 O2 ?/tooling >{"hasATCDustShoe":"true"}\n')))}d.isMDXComponent=!0},7028:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Firmware-3430ad5587523afb6f54319be09e69ac.png"}}]);