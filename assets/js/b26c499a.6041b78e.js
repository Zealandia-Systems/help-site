"use strict";(self.webpackChunkhelp_site=self.webpackChunkhelp_site||[]).push([[2318],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>k});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var d=n.createContext({}),p=function(t){var e=n.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},s=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,d=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=p(r),c=a,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||o;return r?n.createElement(k,l(l({ref:e},s),{},{components:r})):n.createElement(k,l({ref:e},s))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[m]="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1667:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},l="G-Code Commands",i={unversionedId:"Swordfish/Docs/Supported G Codes",id:"Swordfish/Docs/Supported G Codes",title:"G-Code Commands",description:"Current GCode Commands Supported by SwordFish",source:"@site/docs/Swordfish/Docs/Supported G Codes.md",sourceDirName:"Swordfish/Docs",slug:"/Swordfish/Docs/Supported G Codes",permalink:"/Swordfish/Docs/Supported G Codes",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"swordfishSidebar",previous:{title:"M-Code Commands",permalink:"/Swordfish/Docs/Supported M Codes"},next:{title:"Post Processors",permalink:"/Swordfish/Docs/CAM Post Processors"}},d={},p=[{value:"Current GCode Commands Supported by SwordFish",id:"current-gcode-commands-supported-by-swordfish",level:2}],s={toc:p},m="wrapper";function u(t){let{components:e,...r}=t;return(0,a.kt)(m,(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"g-code-commands"},"G-Code Commands"),(0,a.kt)("h2",{id:"current-gcode-commands-supported-by-swordfish"},"Current GCode Commands Supported by SwordFish"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"G Commands"),(0,a.kt)("th",{parentName:"tr",align:null},"Use"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"G0"),(0,a.kt)("td",{parentName:"tr",align:null},"Rapid move, Linear")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"G1"),(0,a.kt)("td",{parentName:"tr",align:null},"Feed move, Linear")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"G2"),(0,a.kt)("td",{parentName:"tr",align:null},"Arc or circle, CW")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"G3"),(0,a.kt)("td",{parentName:"tr",align:null},"Arc or circle, CCW")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"G4"),(0,a.kt)("td",{parentName:"tr",align:null},"Dwell, (P) in MilliSeconds or (S) in Seconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"G17-G19"),(0,a.kt)("td",{parentName:"tr",align:null},"Workspace Planes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"G20"),(0,a.kt)("td",{parentName:"tr",align:null},"Inch Units")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"G21"),(0,a.kt)("td",{parentName:"tr",align:null},"mm units")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"G28.2"),(0,a.kt)("td",{parentName:"tr",align:null},"Homing an axis to saved stops")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"G28.2 A"),(0,a.kt)("td",{parentName:"tr",align:null},"Reset Homing using endstops  i.e     G28.8 A X Y Z  will home the machine,   G28.8 A Z will home Z axis only.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"G37"),(0,a.kt)("td",{parentName:"tr",align:null},"Single Z-Probe. Tool must be positioned above the probe, which is set by WCS (work coordinate system) G59.9 X0 Y0 position")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"G54 - G59.9"),(0,a.kt)("td",{parentName:"tr",align:null},"Workspace Coordinates")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"G90"),(0,a.kt)("td",{parentName:"tr",align:null},"Absolute Positioning")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"G91"),(0,a.kt)("td",{parentName:"tr",align:null},"Relative Positioning")))))}u.isMDXComponent=!0}}]);