import{a as $}from"./Dx-oRPOO.js";import{E as u,O as a,d as _,aa as b,b as v,c as I,n as P,p as w,i as C,e as x,aj as z,r as D,U as i}from"./xKfPub33.js";import{_ as f}from"./DlAUqK2U.js";import E from"./Bt8Ntu5_.js";import"./eE2_lpAF.js";import"./M2zNM3fz.js";import"./BVuq4f48.js";import"./yzIB6J1W.js";import"./qsMMcMsd.js";import"./B4rRBT8b.js";import"./CKTiPUfT.js";import"./laUd0Eoi.js";import"./DyH4Tm1h.js";import"./BqnokN0P.js";import"./_oCryhOp.js";import"./Dgh5kTfz.js";async function j(e){const o=u(e);{const{data:n}=await $(`nuxt-component-meta${o?`-${o}`:""}`,()=>$fetch(`/api/component-meta${o?`/${o}`:""}`));return a(()=>n.value)}}const B=e=>(w("data-v-7d261f72"),e=e(),C(),e),O=B(()=>x("div",{class:"ellipsis-item"},null,-1)),R=[O],U=_({__name:"Ellipsis",props:{width:{type:String,default:"10rem"},height:{type:String,default:"10rem"},zIndex:{type:String,default:"10"},top:{type:String,default:"0"},left:{type:String,default:"auto"},right:{type:String,default:"auto"},blur:{type:String,default:"50px"},colors:{type:Array,default:()=>["rgba(0, 71, 225, 0.22)","rgba(26, 214, 255, 0.22)","rgba(0, 220, 130, 0.22)"]}},setup(e){const o=a(()=>((t=s)=>t.top)()),n=a(()=>((t=s)=>t.left)()),r=a(()=>((t=s)=>t.right)()),c=a(()=>((t=s)=>t.zIndex)()),l=a(()=>((t=s)=>t.width)()),g=a(()=>((t=s)=>t.height)()),h=a(()=>((t=s)=>`blur(${t.blur})`)()),y=a(()=>((t=s)=>{var p,m,d;return`linear-gradient(97.62deg, ${(p=t==null?void 0:t.colors)==null?void 0:p[0]} 2.27%, ${(m=t==null?void 0:t.colors)==null?void 0:m[1]} 50.88%, ${(d=t==null?void 0:t.colors)==null?void 0:d[2]} 98.48%)`})()),s=e,{$pinceau:S}=b(s,void 0,{_6HG_top:o,_31J_insetInlineStart:n,_Cy1_insetInlineEnd:r,_RFz_zIndex:c,_U3d_maxWidth:l,_Rmg_height:g,_MhW_filter:h,_LPh_background:y});return(t,p)=>(v(),I("div",{class:P(["ellipsis",[u(S)]])},R,2))}}),V=f(U,[["__scopeId","data-v-7d261f72"]]),W=_({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(e){const o=a(()=>z(e.component)),n=D({...e.props}),r=await j(e.component);return{as:o,formProps:n,componentData:r}},render(e){const o=Object.entries(this.$slots).reduce((n,[r,c])=>{if(r.startsWith("component-")){const l=r.replace("component-","");n[l]=c}return n},{});return i("div",{class:"component-playground"},[i("div",{class:"component-playground-wrapper"},[i(V,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),i(e.as,{...e.formProps,class:"component-playground-component"},{...o})]),i(E,{modelValue:e.formProps,componentData:e.componentData,"onUpdate:modelValue":n=>e.formProps=n})])}}),tt=f(W,[["__scopeId","data-v-9ca9b996"]]);export{tt as default};
