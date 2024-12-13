import{r as z,e as j,f as B,D as C,o as r,c as t,a as n,n as s,g as v,t as o,E as q,m as D,k as S,_ as E,l as N,y as u,J as p,A as f,U as h,d as g,z as k,K as O,p as I,V as A,q as b,M as G,N as M}from"./C7w9Zl-J.js";import{u as P}from"./BtKmRJKM.js";const U={wrapper:"",inner:"",label:{wrapper:"flex content-center items-center justify-between",base:"block font-medium text-gray-700 dark:text-gray-200",required:"after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400"},size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},container:"mt-1 relative",description:"text-gray-500 dark:text-gray-400",hint:"text-gray-500 dark:text-gray-400",help:"mt-2 text-gray-500 dark:text-gray-400",error:"mt-2 text-red-500 dark:text-red-400",default:{size:"sm"}},R={class:"md:mx-28 mx-5 px-5 overflow-hidden bg-white"},F={class:"flex flex-wrap p-0 gap-1 lg:gap-10 justify-between"},J={class:"text-3xl md:text-4xl mb-5 font-extrabold"},K={class:"text-lg md:text-xl"},T={class:"lazy-image opacity-0 translate-x-36 transition-all duration-1000 ease-in-out w-full h-auto rounded-lg",alt:"Moving Company Image"},Y={__name:"Intro",props:{title:{type:String,default:""},text:{type:String,default:""},img:{default:""}},setup(e){const l=z(!1),d=e,a=z(null),m=i=>{i.forEach(y=>{y.isIntersecting&&(l.value=!0)})};return j(()=>{const i=new IntersectionObserver(m,{threshold:.1});a.value&&i.observe(a.value)}),B(()=>{a.value&&observer.unobserve(a.value)}),(i,y)=>{const c=C("lazy");return r(),t("div",R,[n("div",F,[n("div",{ref_key:"scrollElement",ref:a,class:s([{"opacity-100 translate-x-0":v(l),"opacity-0 -translate-x-36":!v(l)},"transition-all delay-300 duration-1000 ease-in-out flex flex-col gap-2 md:pb-56 pb-8 pt-16 flex-1"])},[n("h2",J,o(d.title),1),n("p",K,o(d.text),1)],2),n("div",{class:s([{"opacity-100 translate-x-0":v(l),"opacity-0 translate-x-36":!v(l)},"transition-all delay-300 duration-1000 ease-in-out relative rounded-2xl p-2 lg:w-1/2 flex pb-24 lg:pb-2 md:hidden flex-col justify-center lg:flex"])},[q(n("img",T,null,512),[[c,d.img]])],2)])])}}},$=D(S.ui.strategy,S.ui.formGroup,U),H=N({inheritAttrs:!1,props:{name:{type:String,default:null},size:{type:String,default:null,validator(e){return Object.keys($.size).includes(e)}},label:{type:String,default:null},description:{type:String,default:null},required:{type:Boolean,default:!1},help:{type:String,default:null},error:{type:[String,Boolean],default:null},hint:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},eagerValidation:{type:Boolean,default:!1}},setup(e){const{ui:l,attrs:d}=P("formGroup",I(e,"ui"),$,I(e,"class")),a=A("form-errors",null),m=b(()=>{var c,w;return e.error&&typeof e.error=="string"||typeof e.error=="boolean"?e.error:(w=(c=a==null?void 0:a.value)==null?void 0:c.find(V=>V.path===e.name))==null?void 0:w.message}),i=b(()=>l.value.size[e.size??$.default.size]),y=z(G());return M("form-group",{error:m,inputId:y,name:b(()=>e.name),size:b(()=>e.size),eagerValidation:b(()=>e.eagerValidation)}),{ui:l,attrs:d,inputId:y,size:i,error:m}}}),L=["for"];function Q(e,l,d,a,m,i){return r(),t("div",f({class:e.ui.wrapper},e.attrs),[n("div",{class:s(e.ui.inner)},[e.label||e.$slots.label?(r(),t("div",{key:0,class:s([e.ui.label.wrapper,e.size])},[n("label",{for:e.inputId,class:s([e.ui.label.base,e.required?e.ui.label.required:""])},[e.$slots.label?u(e.$slots,"label",p(f({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(r(),t(h,{key:1},[g(o(e.label),1)],64))],10,L),e.hint||e.$slots.hint?(r(),t("span",{key:0,class:s([e.ui.hint])},[e.$slots.hint?u(e.$slots,"hint",p(f({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(r(),t(h,{key:1},[g(o(e.hint),1)],64))],2)):k("",!0)],2)):k("",!0),e.description||e.$slots.description?(r(),t("p",{key:1,class:s([e.ui.description,e.size])},[e.$slots.description?u(e.$slots,"description",p(f({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(r(),t(h,{key:1},[g(o(e.description),1)],64))],2)):k("",!0)],2),n("div",{class:s([e.label?e.ui.container:""])},[u(e.$slots,"default",p(O({error:e.error}))),typeof e.error=="string"&&e.error?(r(),t("p",{key:0,class:s([e.ui.error,e.size])},[e.$slots.error?u(e.$slots,"error",p(f({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(r(),t(h,{key:1},[g(o(e.error),1)],64))],2)):e.help||e.$slots.help?(r(),t("p",{key:1,class:s([e.ui.help,e.size])},[e.$slots.help?u(e.$slots,"help",p(f({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(r(),t(h,{key:1},[g(o(e.help),1)],64))],2)):k("",!0)],2)],16)}const Z=E(H,[["render",Q]]);export{Z as _,Y as a};