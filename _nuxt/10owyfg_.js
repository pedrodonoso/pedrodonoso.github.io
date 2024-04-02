import{_ as p}from"./DlAUqK2U.js";import{L as P,b as t,c as s,e as i,g as a,d as V,f as d,j as f,t as m,G as _,w as l,F as $,H as w,I as x,M as S,q as j,E as I,K as A}from"./Dcm-RDEy.js";import h from"./33uF3Sn2.js";import{_ as E}from"./DeQROfvV.js";import{_ as L}from"./DbJNsw5D.js";import{_ as O}from"./C-4TMzyd.js";import"./qsMMcMsd.js";const F={},T=P('<h1 class="text-3xl font-extrabold animate__animated animate__fadeIn animate__delay-0.5s" style="animation-duration:1s;">Hey! Hola, soy <span class="text-teal-400">Pedro</span>.👋</h1><div class="font-semibold animate__animated animate__fadeIn animate__delay-1s" style="animation-duration:2s;"> Soy <span class="text-teal-400">Ingeniero de Software</span> y <span class="text-teal-400">Patinador esporádico</span>. </div><div class="text-center animate__animated animate__fadeIn animate__delay-2s" style="animation-duration:3s;"><p>En este lugar puedes leer sobre algunos de los proyectos dónde he aportado mi granito de arena.</p></div><em class="text-xs animate__animated animate__fadeIn animate__delay-2s">En continuo aprendizaje  </em><p class="flex text-xs justify-center animate__animated animate__fadeIn animate__delay-2s"><span class="animate-[bounce_1s_infinite]">.</span><span class="animate-[bounce_1500ms_infinite]">.</span><span class="animate-[bounce_2s_infinite]">.</span></p>',5);function D(e,n){return T}const G=p(F,[["render",D]]),K={},M={class:"flex items-center justify-center pt-24 h-[50vh]"},J={class:"flex flex-col gap-3 sm:w-3/4"};function Q(e,n){const c=G;return t(),s("section",M,[i("div",J,[a(c)])])}const R=p(K,[["render",Q]]),U={class:"flex flex-row ps-2 md:ps-4 space-x-2"},W=["href","target"],X=["href","target"],Y=["href","target"],Z=V({__name:"Social",props:{github:String,linkedin:String,web:String,redirect:{type:Boolean,default:!0}},setup(e){return(n,c)=>{const o=h;return t(),s("div",U,[e.github?(t(),s("a",{key:0,href:e.github,target:e.redirect?"_blank":"",class:"p-0 m-0"},[a(o,{class:"text-teal-100 hover:-translate-y-1 duration-200",name:"uil:github"})],8,W)):d("",!0),e.linkedin?(t(),s("a",{key:1,href:e.linkedin,target:e.redirect?"_blank":""},[a(o,{class:"text-teal-100 hover:-translate-y-1 duration-200",name:"uil:linkedin"})],8,X)):d("",!0),e.web?(t(),s("a",{key:2,href:e.web,target:e.redirect?"_blank":""},[a(o,{class:"text-teal-100 hover:-translate-y-1 duration-200",name:"tabler:world-www"})],8,Y)):d("",!0)])}}}),ee={class:"flex justify-left items-center gap-6 space-y-7 text-pretty bg-teal-700 w-full p-9"},te={class:"flex flex-col text-left space-y-8 gap-6 w-full"},ne={class:"space-y-3 md:space-y-4"},ae={class:"flex text-xl font-extrabold"},se={class:"text-xs md:text-sm leading-tight text-teal-100"},oe={class:"text-sm md:text-base md:leading-tight"},ie={class:"flex justify-between"},ce={class:"flex gap-x-2"},le={__name:"ProjectItem",props:{name:String,description:String,tags:Array,urls:Object,responsabilities:String,is_copyright:Boolean,is_trademark:Boolean,is_registered:Boolean},setup(e){return(n,c)=>{const o=h,v=E,g=L,r=Z;return t(),s("article",ee,[i("div",te,[i("div",ne,[i("h1",ae,[f(m(e.name)+" ",1),e.is_copyright?(t(),_(o,{key:0,class:"size-3 align-top pt-0.1",name:"icon-park-outline:copyright"})):d("",!0),e.is_trademark?(t(),_(o,{key:1,class:"size-3.5 align-top",name:"ph:trademark"})):d("",!0),e.is_registered?(t(),_(o,{key:2,class:"size-3-5 align-top",name:"ph:trademark-registered"})):d("",!0)]),i("p",se,m(e.description),1),i("p",oe,m(e.responsabilities),1),i("div",ie,[i("nav",ce,[a(g,null,{default:l(()=>[(t(!0),s($,null,w(e.tags,y=>(t(),_(v,{key:y},{default:l(()=>[f(m(y),1)]),_:2},1024))),128))]),_:1})]),a(r,{class:"text-2xl lg:text-3xl items-end",github:e.urls.github,linkedin:e.urls.linkedin,web:e.urls.web},null,8,["github","linkedin","web"])])])])])}}},re=["id"],_e={class:"text-3xl font-extrabold text-teal-100"},de={__name:"SectionContainer",props:{title:String,icon:String,id:String},setup(e){return(n,c)=>{const o=h;return t(),s("section",{id:e.id,class:"text-left space-y-12"},[i("h2",_e,[a(o,{size:"2.2rem",name:e.icon},null,8,["name"]),f(" "+m(e.title),1)]),x(n.$slots,"default")],8,re)}}},me={class:"w-fit py-2 px-6 font-semibold text-sm md:text-md text-teal-50 bg-teal-900 text-center hover:-translate-y-1 duration-200 cursor-default"},ue={__name:"SkillItem",props:{title:String},setup(e){return(n,c)=>(t(),s("div",me,m(e.title),1))}},fe={},pe={class:"flex flex-wrap justify-center gap-2"};function xe(e,n){return t(),s("div",pe,[x(e.$slots,"default")])}const he=p(fe,[["render",xe]]),ge=["href"],ye={key:0,class:"font-semibold text-md text-teal-50 hidden lg:block"},be={__name:"ContactItem",props:{href:String,icon:String},setup(e){return(n,c)=>{const o=h;return t(),s("a",{class:"flex flex-row items-center gap-2 p-3 text-sm rounded-xl bg-teal-900 hover:-translate-y-1 duration-200 md:rounded-md lg:min-h-16",href:e.href,target:"”_blank”"},[a(o,{name:e.icon,class:"text-teal-100 size-7 md:size-9"},null,8,["name"]),n.$slots.default?(t(),s("div",ye,[x(n.$slots,"default")])):d("",!0)],8,ge)}}},ke={},$e={class:"flex flex-col gap-6 bg-teal-700 w-full p-9"},we=i("p",{class:"text-center text-teal-200"},"¡Trabajemos juntos!",-1),ve={class:"flex flex-row gap-2 justify-center"};function Se(e,n){return t(),s("div",$e,[we,i("div",ve,[x(e.$slots,"default")])])}const je=p(ke,[["render",Se]]),Ie={class:"animate__animated animate__fadeIn animate__delay-2s"},Ve={__name:"index",props:{projects:Array,skills:Array},async setup(e){let n,c;const o=([n,c]=S(()=>j("/_portfolio/projects").findOne().then(r=>r.body)),n=await n,c(),n),g=([n,c]=S(()=>j("/_portfolio/skills").findOne().then(r=>r.body)),n=await n,c(),n).map(r=>r.skill);return(r,y)=>{const C=R,B=le,b=de,z=ue,N=he,k=be,q=je,H=O;return t(),_(H,null,{default:l(()=>[a(C),i("aside",Ie,[a(b,{title:"Proyectos",icon:"tabler:folder-code",id:"projects",class:"pt-24"},{default:l(()=>[(t(!0),s($,null,w(I(o),u=>(t(),_(B,A(u,{key:u.name}),null,16))),128))]),_:1}),a(b,{title:"Habilidades",icon:"tabler:code-plus",id:"skills",class:"pt-24"},{default:l(()=>[a(N,null,{default:l(()=>[(t(!0),s($,null,w(I(g),u=>(t(),_(z,{key:u,title:u},null,8,["title"]))),128))]),_:1})]),_:1}),a(b,{title:"Contacto",icon:"tabler:message-circle-code",id:"contact",class:"pt-24 pb-24 md:pb-32"},{default:l(()=>[a(q,null,{default:l(()=>[a(k,{href:"https://github.com/pedrodonoso",icon:"uil:github"}),a(k,{href:"https://www.linkedin.com/in/pedrodonosoaguilera/",icon:"uil:linkedin"}),a(k,{href:"mailto:pedro.donosoa.dev@gmail.com?subject=[ Cotización ]&body=Buen día! Cuentame, qué necesitas? 🧐",icon:"bi:envelope-arrow-up-fill"},{default:l(()=>[f("Cotiza!")]),_:1})]),_:1})]),_:1})])]),_:1})}}};export{Ve as default};
