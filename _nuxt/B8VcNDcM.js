import{d as p,r as a,b as f,c as _,e as t,g as v,n,E as r,a6 as h,ac as g}from"./BGBkLIbP.js";import y from"./38d6zDUZ.js";import{r as l}from"./D4F517S0.js";import{_ as V}from"./DlAUqK2U.js";import"./qsMMcMsd.js";import"./2ETV-d1z.js";const C={class:"summary"},w={class:"content"},k=p({__name:"Callout",props:{type:{type:String,default:"info",validator(o){return["info","success","warning","danger","primary"].includes(o)}},modelValue:{required:!1,default:()=>a(!1)}},emits:["update:modelValue"],setup(o,{emit:c}){const i=o,m=c,e=a(i.modelValue),u=()=>{e.value=!e.value,m("update:modelValue",e.value)};return(s,B)=>{const d=y;return f(),_("div",{class:n(["callout",[o.type]])},[t("span",{class:"preview",onClick:u},[t("span",C,[l(s.$slots,"summary",{},void 0,!0)]),v(d,{name:"heroicons-outline:chevron-right",class:n(["icon",[r(e)&&"rotate"]])},null,8,["class"])]),h(t("div",w,[l(s.$slots,"content",{},void 0,!0)],512),[[g,r(e)]])],2)}}}),b=V(k,[["__scopeId","data-v-63fa4c2e"]]);export{b as default};
