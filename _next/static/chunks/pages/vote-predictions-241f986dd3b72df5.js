(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[296],{81216:function(n,t,i){"use strict";var o=i(95318);t.Z=void 0;var a=o(i(64938)),e=i(85893),r=(0,a.default)((0,e.jsx)("path",{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}),"FilterList");t.Z=r},87051:function(n,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vote-predictions",function(){return i(75911)}])},41705:function(n,t,i){"use strict";i.d(t,{t:function(){return e}});var o=i(8100),a=i(83276);function e(){var n=(0,a.a)(),t=(0,o.ZP)("/councillors",n.fetcher),i=t.data;return{councillors:i,isLoading:!i,isError:t.error}}},75911:function(n,t,i){"use strict";i.r(t),i.d(t,{default:function(){return Y}});var o=i(51351),a=i(85893),e=i(67294),r=i(86886),l=i(14924),s=i(26042),d=i(69396),c=i(828),u=i(29815),g=i(36810),v=i(81216),h=i(63366),f=i(87462),m=i(98216),p=i(27909),Z=i(27192),x=i(11496),j=i(71657),b=i(83321),I=i(98456),L=i(28979);function w(n){return(0,L.Z)("MuiLoadingButton",n)}var y=(0,i(76087).Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]);const P=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],_=(0,x.ZP)(b.Z,{shouldForwardProp:n=>(n=>"ownerState"!==n&&"theme"!==n&&"sx"!==n&&"as"!==n&&"classes"!==n)(n)||"classes"===n,name:"MuiLoadingButton",slot:"Root",overridesResolver:(n,t)=>[t.root,t.startIconLoadingStart&&{[`& .${y.startIconLoadingStart}`]:t.startIconLoadingStart},t.endIconLoadingEnd&&{[`& .${y.endIconLoadingEnd}`]:t.endIconLoadingEnd}]})((({ownerState:n,theme:t})=>(0,f.Z)({[`& .${y.startIconLoadingStart}, & .${y.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0}},"center"===n.loadingPosition&&{transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short}),[`&.${y.loading}`]:{color:"transparent"}},"start"===n.loadingPosition&&n.fullWidth&&{[`& .${y.startIconLoadingStart}, & .${y.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===n.loadingPosition&&n.fullWidth&&{[`& .${y.startIconLoadingStart}, & .${y.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginLeft:-8}}))),S=(0,x.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(n,t)=>{const{ownerState:i}=n;return[t.loadingIndicator,t[`loadingIndicator${(0,m.Z)(i.loadingPosition)}`]]}})((({theme:n,ownerState:t})=>(0,f.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{left:"small"===t.size?10:14},"start"===t.loadingPosition&&"text"===t.variant&&{left:6},"center"===t.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:n.palette.action.disabled},"end"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{right:"small"===t.size?10:14},"end"===t.loadingPosition&&"text"===t.variant&&{right:6},"start"===t.loadingPosition&&t.fullWidth&&{position:"relative",left:-10},"end"===t.loadingPosition&&t.fullWidth&&{position:"relative",right:-10})));var C=e.forwardRef((function(n,t){const i=(0,j.Z)({props:n,name:"MuiLoadingButton"}),{children:o,disabled:r=!1,id:l,loading:s=!1,loadingIndicator:d,loadingPosition:c="center",variant:u="text"}=i,g=(0,h.Z)(i,P),v=(0,p.Z)(l),x=null!=d?d:(0,a.jsx)(I.Z,{"aria-labelledby":v,color:"inherit",size:16}),b=(0,f.Z)({},i,{disabled:r,loading:s,loadingIndicator:x,loadingPosition:c,variant:u}),L=(n=>{const{loading:t,loadingPosition:i,classes:o}=n,a={root:["root",t&&"loading"],startIcon:[t&&`startIconLoading${(0,m.Z)(i)}`],endIcon:[t&&`endIconLoading${(0,m.Z)(i)}`],loadingIndicator:["loadingIndicator",t&&`loadingIndicator${(0,m.Z)(i)}`]},e=(0,Z.Z)(a,w,o);return(0,f.Z)({},o,e)})(b);return(0,a.jsx)(_,(0,f.Z)({disabled:r||s,id:v,ref:t},g,{variant:u,classes:L,ownerState:b,children:"end"===b.loadingPosition?(0,a.jsxs)(e.Fragment,{children:[o,s&&(0,a.jsx)(S,{className:L.loadingIndicator,ownerState:b,children:x})]}):(0,a.jsxs)(e.Fragment,{children:[s&&(0,a.jsx)(S,{className:L.loadingIndicator,ownerState:b,children:x}),o]})}))})),E=i(26447),W=i(69661),k=i(87357),$=i(66242),N=i(94054),F=i(22224),z=i(18360),M=i(7906),A=i(295),O=i(53252),T=i(72882),B=i(53184),R=i(53816),H=i(83276),V=i(41705),X=[{value:"avatar",label:"",minWidth:20},{value:"first_name",label:"First Name",minWidth:100},{value:"last_name",label:"Last Name",minWidth:100},{value:"parl_group_name",label:"Group",minWidth:100},{value:"canton_name",label:"Canton",minWidth:100},{value:"yes",label:"",minWidth:50},{value:"no",label:"",minWidth:50},{value:"prediction",label:"Yes [%]",minWidth:50}],G=function(n){var t=n.councillor,i="/images/councillors/profile/".concat(t.id,".jpg"),o=t.first_name.charAt(0)+t.last_name.charAt(0);return(0,a.jsx)(W.Z,{alt:o,src:i})},J=function(){var n=function(n){switch(n){case"yes":return 1;case"no":return 0;default:return null}},t=(0,H.a)(),i=(0,V.t)(),o=i.councillors,r=i.isLoading,h=(0,e.useState)({}),f=h[0],m=h[1],p=(0,e.useState)({}),Z=p[0],x=p[1],j=(0,e.useState)(!1),I=j[0],L=j[1];(0,e.useEffect)((function(){if(!r){var n,t=(n=Object).assign.apply(n,[{}].concat((0,u.Z)(o.map((function(n){return(0,l.Z)({},n.id,null)})))));m((0,s.Z)({},t)),x((0,s.Z)({},t));var i=null===o||void 0===o?void 0:o.map((function(n){return n.parl_group_name}));q((0,u.Z)(new Set(i)))}}),[r,o]);var w=(0,e.useState)(""),y=w[0],P=w[1],_=(0,e.useState)(""),S=_[0],W=_[1],J=(0,e.useState)([]),Y=J[0],q=J[1],D=(0,e.useCallback)((function(n,t){var i=f[n]!=t?t:null;m((function(t){return(0,d.Z)((0,s.Z)({},t),(0,l.Z)({},n,i))}))})),K=function(n){var t=n.councillor,i=n.vote,o=n.onClick,e=t.id,r=f[e]==i?"contained":"outlined",l="yes"==i?"success":"no"==i?"error":"warning";return(0,a.jsx)(b.Z,{size:"small",variant:r,color:l,onClick:o,children:i})},Q=function(n){var t=n.councillor.id,i=Z[t];if(null!==i&&void 0!==i){var o=(100*i).toFixed(0);return(0,a.jsx)(a.Fragment,{children:o+"%"})}return(0,a.jsx)(a.Fragment,{})},U=(0,e.memo)((function(n){var t=n.councillor,i=n.column,o=n.onClick;if("avatar"==i.value)return(0,a.jsx)(G,{councillor:t});if(["yes","abst","no"].includes(i.value)){var e=t.id,r=i.value;return(0,a.jsx)(K,{councillor:t,vote:i.value,onClick:function(){return o(e,r)}})}return"prediction"==i.value?(0,a.jsx)(Q,{councillor:t}):(0,a.jsx)(a.Fragment,{children:t[i.value]})}));return(0,a.jsxs)($.Z,{children:[(0,a.jsxs)(E.Z,{direction:"row",sx:{p:6,display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)(g.L,{onchange:function(n){P(n.target.value)}}),(0,a.jsxs)(E.Z,{direction:"row",children:[(0,a.jsx)(N.Z,{fullWidth:!0,children:(0,a.jsxs)(z.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",color:"info",value:S,onChange:function(n){W(n.target.value)},IconComponent:null,inputProps:{"aria-label":"Without label"},displayEmpty:!0,renderValue:function(n){return(0,a.jsxs)(k.Z,{sx:{display:"flex",gap:1},children:[(0,a.jsx)(v.Z,{}),n||"All parties"]})},children:[(0,a.jsx)(F.Z,{value:"",children:(0,a.jsx)("em",{children:"All parties"})}),Y.map((function(n){return(0,a.jsx)(F.Z,{value:n,children:n},n)}))]})}),(0,a.jsx)(C,{loading:I,variant:"contained",color:"primary",sx:{ml:4,pl:8,pr:8},onClick:function(){L(!0);var i={votes:Object.entries(f).map((function(t){var i=(0,c.Z)(t,2),o=i[0],a=i[1];return{councillor:parseInt(o),vote:n(a)}}))};t.fetcher("/vote-predictions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((function(n){x(n),L(!1)}))},children:"Predict"})]})]}),(0,a.jsx)(T.Z,{sx:{height:"75vh",minHeight:440},children:(0,a.jsxs)(M.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,a.jsx)(B.Z,{children:(0,a.jsx)(R.Z,{children:X.map((function(n){return(0,a.jsx)(O.Z,{align:n.align,sx:{minWidth:n.minWidth},children:n.label},n.value)}))})}),(0,a.jsx)(A.Z,{children:!r&&(null===o||void 0===o?void 0:o.filter((function(n){return t=n,(!S||t.parl_group_name==S)&&!(y&&!(t.first_name.toLowerCase().includes(y.toLowerCase())||t.last_name.toLowerCase().includes(y.toLowerCase())||"".concat(t.first_name.toLowerCase()," ").concat(t.last_name.toLowerCase()).includes(y.toLowerCase())));var t})).map((function(n){return(0,a.jsx)(R.Z,{hover:!0,role:"checkbox",tabIndex:-1,children:X.map((function(t,i){return(0,a.jsx)(O.Z,{align:t.align,children:(0,a.jsx)(U,{councillor:n,column:t,onClick:D})},t.value)}))},n.id)})))})]})})]})};var Y=function(n){return n=null!==n?n:(0,o.Z)(new TypeError("Cannot destructure undefined")),(0,a.jsx)(r.ZP,{container:!0,children:(0,a.jsx)(r.ZP,{item:!0,xs:12,children:(0,a.jsx)(J,{})})})}},828:function(n,t,i){"use strict";i.d(t,{Z:function(){return e}});var o=i(13375);var a=i(91566);function e(n,t){return function(n){if(Array.isArray(n))return n}(n)||(0,o.Z)(n,t)||(0,a.Z)(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},51351:function(n,t,i){"use strict";function o(n){throw n}i.d(t,{Z:function(){return o}})}},function(n){n.O(0,[143,411,774,888,179],(function(){return t=87051,n(n.s=t);var t}));var t=n.O();_N_E=t}]);