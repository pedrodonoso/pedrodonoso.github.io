import i from"./38d6zDUZ.js";import{u as l}from"./DcOBaDQX.js";import{d as m,r as u,b as t,c as d,E as f,G as n}from"./BGBkLIbP.js";import"./qsMMcMsd.js";import"./DlAUqK2U.js";const h=m({__name:"CopyButton",props:{content:{type:String,default:""}},setup(c){const a=c,{copy:s}=l(),o=u("init"),p=r=>{s(a.content).then(()=>{o.value="copied",setTimeout(()=>{o.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(r,y)=>{const e=i;return t(),d("button",{class:"copy rounded-lg bg-gray-800 px-2 py-2 font-mono text-xs font-semibold leading-none text-gray-400 focus:outline-none dark:bg-black",onClick:p},[f(o)==="copied"?(t(),n(e,{key:0,name:"fa-check",class:"h-4 w-4"})):(t(),n(e,{key:1,name:"fa-copy",class:"h-4 w-4"}))])}}});export{h as default};
