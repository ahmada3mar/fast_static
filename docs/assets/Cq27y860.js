import{_ as d,r as x,e as u,D as p,E as _,o as f,c as m,a as e,n as l,g as a,t as i,y}from"./CFRI14Bu.js";const g={class:l("home-background  bg-cover bg-center relative")},b={class:"relative flex flex-col items-center justify-center gap-10 px-5 py-10 h-full"},v={class:"flex flex-col items-center gap-5 w-full text-center"},h={__name:"Banner",props:{background:{default:""},title:{type:String,default:""},text:{type:String,default:""}},setup(n){const t=x(!1);u(()=>{setTimeout(()=>{t.value=!0},400)});const s=n;return(r,o)=>{const c=p("lazy");return _((f(),m("div",g,[o[0]||(o[0]=e("div",{class:"absolute inset-0 bg-gradient-to-t to-black from-primary-500/50"},null,-1)),e("div",b,[e("div",v,[e("h1",{class:l([{"opacity-100 translate-y-0":a(t),"opacity-0 -translate-y-5":!a(t)},"transition-all duration-700 ease-in-out text-primary-500 text-3xl md:text-4xl lg:text-5xl font-extrabold"])},i(s.title),3),e("h2",{class:l([{"opacity-100":a(t),"opacity-0":!a(t)},"max-w-3xl transition-all duration-1000 delay-150 ease-in-out text-xl md:text-2xl lg:text-3xl text-white"])},i(s.text),3)]),y(r.$slots,"body",{isVisible:a(t)},void 0,!0)])])),[[c,s.background,"background-image"]])}}},w=d(h,[["__scopeId","data-v-7db3cb18"]]);export{w as _};