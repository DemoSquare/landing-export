(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{35243:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return n(39319)}])},41705:function(e,t,n){"use strict";n.d(t,{t:function(){return a}});var i=n(8100),r=n(83276);function a(){var e=(0,r.a)(),t=(0,i.ZP)("/councillors",e.fetcher),n=t.data;return{councillors:n,isLoading:!n,isError:t.error}}},39319:function(e,t,n){"use strict";n.r(t),n.d(t,{AffairResults:function(){return L},default:function(){return M}});var i=n(14924),r=n(26042),a=n(69396),o=n(828),u=n(85893),l=n(11163),c=n(67294),s=n(11496),d=n(83321),f=n(18360),p=n(22224),h=n(49624),g=n(87357),m=n(15861),x=n(26447),v=n(86886),j=n(41705),Z=n(44593),y=n(83276),_={1:"Last month",2:"Last year",3:"Last five years"},P={1:"Objet du Conseil f\xe9d\xe9ral",2:"Objet du Parlement",3:"Initiative d\xe9pos\xe9e par un canton",4:"Initiative parlementaire",5:"Motion",6:"Postulat",7:"Recommandation",8:"Interpellation",9:"Interpellation urgente",10:"P\xe9tition",12:"Question ordinaire",13:"Question ordinaire urgente",14:"Heure des questions. Question",18:"Question",19:"Question urgente"};var S=n(41482),b=n(36810);function L(e){var t=e.results,n=e.isLoading;return(0,u.jsx)(v.ZP,{item:!0,md:12,sx:{mt:8},children:(0,u.jsx)(v.ZP,{container:!0,spacing:2,alignItems:"stretch",children:!n&&t.map((function(e,t){return e.affairs.map((function(e,n){return(0,u.jsx)(v.ZP,{item:!0,md:3,children:(0,u.jsx)(S.Z,{affair:e},"".concat(e.id,"-").concat(t,"-").concat(n))},"".concat(e.id,"-").concat(t,"-").concat(n))}))}))})})}var O=(0,s.ZP)(d.Z)((function(e){return{color:e.theme.palette.text.secondary,fontSize:"13px",fontWeight:"400"}})),I=(0,s.ZP)(f.Z)((function(e){return{height:"40px",backgroundColor:"white",boxShadow:"none",lineHeight:1.25,letterSpacing:"0.4px",color:e.theme.palette.text.secondary,fontSize:"13px",".MuiOutlinedInput-notchedOutline":{border:0}}})),z=(0,s.ZP)(p.Z)((function(e){return{lineHeight:1.25,letterSpacing:"0.4px",color:e.theme.palette.text.secondary,fontSize:"13px"}})),w=(0,s.ZP)("img")({marginBottom:"-2px",marginLeft:"4px",marginRight:"2px",borderRadius:20,width:16,height:16}),k=(0,s.ZP)(h.Z)((function(e){e.theme;return{"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{border:"1px solid #eee"},"& .MuiFormControl-root":{height:"40px"},"& .MuiOutlinedInput-root":{height:"40px",fontSize:"13px",lineHeight:1.25,letterSpacing:"0.4px",border:0},"& .MuiInput-root":{paddingLeft:"8px"}}})),C=function(e){var t=e.paramValue,n=e.updateFilters,i=function(e){var t="/images/councillors/profile/".concat(e,".jpg");return(0,u.jsx)(w,{src:t})},o=(0,j.t)(),l=o.councillors,c=o.isLoading,s=function(e){var t=null===l||void 0===l?void 0:l.find((function(t){return t.id==e}));return t?t.first_name+" "+t.last_name:""};return(0,u.jsx)(u.Fragment,{children:!c&&(0,u.jsx)(k,{id:"country-select-demo",options:null===l||void 0===l?void 0:l.map((function(e){return e.id})),autoHighlight:!0,blurOnSelect:!0,value:t||"",onChange:function(e,t){n({councillor_filter:t})},getOptionLabel:function(e){return s(e)},renderInput:function(e){return(0,u.jsx)(b.L,{placeholder:"All councillors",searchIcon:!1,paperBackground:!0,params:e,styles:{fontSize:"13px"}})},renderOption:function(e,t){return(0,u.jsxs)(g.Z,(0,a.Z)((0,r.Z)({component:"li",sx:{"& > img":{mr:2,flexShrink:0}}},e),{children:[i(t),s(t)]}))},ListboxProps:{style:{border:0,borderRadius:0}}})})},E=function(e){var t=e.data,n=e.emptyValue,r=e.paramName,a=e.paramValue,l=e.updateFilters;return(0,u.jsxs)(I,{value:a||0,onChange:function(e){l((0,i.Z)({},r,e.target.value))},displayEmpty:!0,children:[(0,u.jsx)(z,{value:0,children:(0,u.jsx)(m.Z,{lineHeight:"inherit",fontSize:"inherit",letterSpacing:"inherit",color:"text.disabled",children:n})}),Object.entries(t).map((function(e){var t=(0,o.Z)(e,2),n=t[0],i=t[1];return(0,u.jsx)(z,{value:n,children:i})}))]})},M=function(){var e=(0,l.useRouter)(),t=e.query,n=t.query,i=t.time_filter,a=t.affair_type_filter,o=t.councillor_filter,s=(0,c.useState)("fr"),f=s[0],p=(s[1],function(e){var t,n,i,r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"fr",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:20,s=function(t,n){if(n&&!n.affairs.length)return null;var i=t*c,r=(t+1)*c,s="/search/?query=".concat(e,"&language=").concat(a,"&skip=").concat(i,"&limit=").concat(r);return o&&o in _&&(s+="&time_filter=".concat(o)),u&&u in P&&(s+="&affair_type_filter=".concat(u)),l&&(s+="&councillor_filter=".concat(l)),s},d=(0,y.a)(),f=(0,Z.ZP)(s,d.fetcher),p=f.data,h=f.error,g=f.size,m=f.setSize,x=!p&&!h||g>0&&p&&"undefined"===typeof p[g-1],v=0===(null===p||void 0===p||null===(t=p[0])||void 0===t||null===(n=t.affairs)||void 0===n?void 0:n.length)||p&&(null===(i=p[p.length-1])||void 0===i||null===(r=i.affairs)||void 0===r?void 0:r.length)<c;return{isLoading:!p,isEmptySearch:!e,results:p,size:g,setSize:m,isLoadingMore:x,isReachingEnd:v}}(n,f,i,a,o)),h=p.results,g=p.isLoading,j=p.isLoadingMore,S=p.isReachingEnd,b=p.size,I=p.setSize,z=function(t){e.push({pathname:"/search/",query:(0,r.Z)({},e.query,t)})};return(0,u.jsx)(v.ZP,{container:!0,children:(0,u.jsxs)(v.ZP,{item:!0,xs:12,children:[n&&(0,u.jsxs)(m.Z,{variant:"h6",children:['Search results for "',n,'"']}),(0,u.jsxs)(x.Z,{direction:"row",spacing:2,sx:{pt:3},children:[(0,u.jsx)(E,{paramName:"time_filter",paramValue:i,data:_,emptyValue:"All times",updateFilters:z}),(0,u.jsx)(E,{paramName:"affair_type_filter",paramValue:a,data:P,emptyValue:"All affair types",updateFilters:z}),(0,u.jsx)(C,{paramValue:o,updateFilters:z}),(0,u.jsx)(O,{onClick:function(){e.push({pathname:"/search/",query:{query:""}})},children:"Reset filters"})]}),(0,u.jsx)(L,{results:h,isLoading:g}),(0,u.jsx)(v.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",sx:{p:5},children:(0,u.jsx)(d.Z,{onClick:function(){return I(b+1)},disabled:j||S,children:j?"loading...":S?"":"load more"})})]})})}}},function(e){e.O(0,[143,634,482,774,888,179],(function(){return t=35243,e(e.s=t);var t}));var t=e.O();_N_E=t}]);