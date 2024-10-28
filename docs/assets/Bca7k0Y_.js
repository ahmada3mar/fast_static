import{i as x,_ as D,u as ee,c as ae}from"./ClWjvnk1.js";import{N as ne,H as N,r as E,O as te,l as g,m as le,i as C,_ as T,j as W,k,A as ie,e as Y,p as ue,q as w,o as $,c as j,a as re,y as se,v as O,n as S,b as q,x as U,D as oe,K as de,M as ce,P as fe,I as ve,f as ge,J as A,Q as me}from"./DDC3yqor.js";const z=new Map;function ye(e){const l=ne();function u(s){var d;const v=z.get(e)||new Set;v.add(s),z.set(e,v);const t=()=>n(s);return(d=l==null?void 0:l.cleanups)==null||d.push(t),t}function a(s){function d(...v){n(d),s(...v)}return u(d)}function n(s){const d=z.get(e);d&&(d.delete(s),d.size||i())}function i(){z.delete(e)}function c(s,d){var v;(v=z.get(e))==null||v.forEach(t=>t(s,d))}return{on:u,once:a,off:n,emit:c,reset:i}}const be=(e,l,u=!0)=>{const a=N("form-events",void 0),n=N("form-group",void 0),i=N("form-inputs",void 0);n&&(!u||e!=null&&e.legend?n.inputId.value=void 0:e!=null&&e.id&&(n.inputId.value=e==null?void 0:e.id),i&&(i.value[n.name.value]=n.inputId.value));const c=E(!1);function s(r,f){a&&a.emit({type:r,path:f})}function d(){s("blur",n==null?void 0:n.name.value),c.value=!0}function v(){s("change",n==null?void 0:n.name.value)}const t=te(()=>{(c.value||n!=null&&n.eagerValidation.value)&&s("input",n==null?void 0:n.name.value)},300);return{inputId:g(()=>(e==null?void 0:e.id)??(n==null?void 0:n.inputId.value)),name:g(()=>(e==null?void 0:e.name)??(n==null?void 0:n.name.value)),size:g(()=>{var f;const r=l.size[n==null?void 0:n.size.value]?n==null?void 0:n.size.value:null;return(e==null?void 0:e.size)??r??((f=l.default)==null?void 0:f.size)}),color:g(()=>{var r;return(r=n==null?void 0:n.error)!=null&&r.value?"red":e==null?void 0:e.color}),emitFormBlur:d,emitFormInput:t,emitFormChange:v}},h=le(C.ui.strategy,C.ui.input,x),he=W({components:{UIcon:D},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>h.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(h.size).includes(e)}},color:{type:String,default:()=>h.default.color,validator(e){return[...C.ui.colors,...Object.keys(h.color)].includes(e)}},variant:{type:String,default:()=>h.default.variant,validator(e){return[...Object.keys(h.variant),...Object.values(h.color).flatMap(l=>Object.keys(l))].includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur","change"],setup(e,{emit:l,slots:u}){const{ui:a,attrs:n}=ee("input",k(e,"ui"),h,k(e,"class")),{size:i,rounded:c}=ae({ui:a,props:e}),{emitFormBlur:s,emitFormInput:d,size:v,color:t,inputId:r,name:f}=be(e,h),m=g(()=>i.value??v.value),y=E(ie({},e.modelModifiers,{trim:!1,lazy:!1,number:!1})),b=E(null),L=()=>{var o;e.autofocus&&((o=b.value)==null||o.focus())},V=o=>{y.value.trim&&(o=o.trim()),(y.value.number||e.type==="number")&&(o=oe(o)),l("update:modelValue",o),d()},R=o=>{y.value.lazy||V(o.target.value)},Z=o=>{if(e.type==="file"){const I=o.target.files;l("change",I)}else{const I=o.target.value;l("change",I),y.value.lazy&&V(I),y.value.trim&&(o.target.value=I.trim())}},H=o=>{s(),l("blur",o)};Y(()=>{setTimeout(()=>{L()},e.autofocusDelay)});const K=g(()=>{var I,J;const o=((J=(I=a.value.color)==null?void 0:I[t.value])==null?void 0:J[e.variant])||a.value.variant[e.variant];return ue(w(a.value.base,a.value.form,c.value,a.value.placeholder,e.type==="file"&&a.value.file.base,a.value.size[m.value],e.padded?a.value.padding[m.value]:"p-0",o==null?void 0:o.replaceAll("{color}",t.value),(B.value||u.leading)&&a.value.leading.padding[m.value],(M.value||u.trailing)&&a.value.trailing.padding[m.value]),e.inputClass)}),B=g(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),M=g(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),Q=g(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),X=g(()=>e.loading&&!B.value?e.loadingIcon:e.trailingIcon||e.icon),_=g(()=>w(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[m.value])),p=g(()=>w(a.value.icon.base,t.value&&C.ui.colors.includes(t.value)&&a.value.icon.color.replaceAll("{color}",t.value),a.value.icon.size[m.value],e.loading&&a.value.icon.loading)),G=g(()=>w(a.value.icon.trailing.wrapper,a.value.icon.trailing.pointer,a.value.icon.trailing.padding[m.value])),P=g(()=>w(a.value.icon.base,t.value&&C.ui.colors.includes(t.value)&&a.value.icon.color.replaceAll("{color}",t.value),a.value.icon.size[m.value],e.loading&&!B.value&&a.value.icon.loading));return{ui:a,attrs:n,name:f,inputId:r,input:b,isLeading:B,isTrailing:M,inputClass:K,leadingIconName:Q,leadingIconClass:p,leadingWrapperIconClass:_,trailingIconName:X,trailingIconClass:P,trailingWrapperIconClass:G,onInput:R,onChange:Z,onBlur:H}}}),Ie=["id","name","type","required","placeholder","disabled"];function we(e,l,u,a,n,i){const c=D;return $(),j("div",{class:S(e.type==="hidden"?"hidden":e.ui.wrapper)},[re("input",se({id:e.inputId,ref:"input",name:e.name,type:e.type,required:e.required,placeholder:e.placeholder,disabled:e.disabled,class:e.inputClass},e.type==="file"?e.attrs:{...e.attrs,value:e.modelValue},{onInput:l[0]||(l[0]=(...s)=>e.onInput&&e.onInput(...s)),onBlur:l[1]||(l[1]=(...s)=>e.onBlur&&e.onBlur(...s)),onChange:l[2]||(l[2]=(...s)=>e.onChange&&e.onChange(...s))}),null,16,Ie),O(e.$slots,"default"),e.isLeading&&e.leadingIconName||e.$slots.leading?($(),j("span",{key:0,class:S(e.leadingWrapperIconClass)},[O(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[q(c,{name:e.leadingIconName,class:S(e.leadingIconClass)},null,8,["name","class"])])],2)):U("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?($(),j("span",{key:1,class:S(e.trailingWrapperIconClass)},[O(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[q(c,{name:e.trailingIconName,class:S(e.trailingIconClass)},null,8,["name","class"])])],2)):U("",!0)],2)}const ke=T(he,[["render",we]]);class F extends Error{constructor(l){super(l),this.message=l,Object.setPrototypeOf(this,F.prototype)}}const Se=W({props:{schema:{type:[Object,Function],default:void 0},state:{type:Object,required:!0},validate:{type:Function,default:()=>[]},validateOn:{type:Array,default:()=>["blur","input","change","submit"]}},emits:["submit","error"],setup(e,{expose:l,emit:u}){const a=ve(),n=ye(`form-${a}`);Y(()=>{n.on(async t=>{var r;t.type!=="submit"&&((r=e.validateOn)!=null&&r.includes(t.type))&&await d(t.path,{silent:!0})})}),ge(()=>{n.reset()});const i=E([]);A("form-errors",i),A("form-events",n);const c=E({});A("form-inputs",c);async function s(){let t=await e.validate(e.state);if(e.schema)if(Be(e.schema))t=t.concat(await $e(e.state,e.schema));else if(ze(e.schema))t=t.concat(await Ee(e.state,e.schema));else if(je(e.schema))t=t.concat(await Fe(e.state,e.schema));else if(Ne(e.schema))t=t.concat(await Ae(e.state,e.schema));else throw new Error("Form validation failed: Unsupported form schema");return t}async function d(t,r={silent:!1}){let f=t;if(t&&!Array.isArray(t)&&(f=[t]),f){const m=i.value.filter(b=>!f.includes(b.path)),y=(await s()).filter(b=>f.includes(b.path));i.value=m.concat(y)}else i.value=await s();if(i.value.length>0){if(r.silent)return!1;throw new F(`Form validation failed: ${JSON.stringify(i.value,null,2)}`)}return e.state}async function v(t){var f;const r=t;try{(f=e.validateOn)!=null&&f.includes("submit")&&await d(),r.data=e.state,u("submit",r)}catch(m){if(!(m instanceof F))throw m;const y={...r,errors:i.value.map(b=>({...b,id:c.value[b.path]}))};u("error",y)}}return l({validate:d,errors:i,setErrors(t,r){r?i.value=i.value.filter(f=>f.path!==r).concat(t):i.value=t},async submit(){await v(new Event("submit"))},getErrors(t){return t?i.value.filter(r=>r.path===t):i.value},clear(t){t?i.value=i.value.filter(r=>r.path!==t):i.value=[]}}),{onSubmit:v,errors:me(i)}}});function ze(e){return e.validate&&e.__isYupSchema__}function Ce(e){return e.inner!==void 0}async function Ee(e,l){try{return await l.validate(e,{abortEarly:!1}),[]}catch(u){if(Ce(u))return u.inner.map(a=>({path:a.path??"",message:a.message}));throw u}}function Be(e){return e.parse!==void 0}async function $e(e,l){const u=await l.safeParseAsync(e);return u.success===!1?u.error.issues.map(a=>({path:a.path.join("."),message:a.message})):[]}function je(e){return e.validateAsync!==void 0&&e.id!==void 0}function Oe(e){return e.isJoi===!0}async function Fe(e,l){try{return await l.validateAsync(e,{abortEarly:!1}),[]}catch(u){if(Oe(u))return u.details.map(a=>({path:a.path.join("."),message:a.message}));throw u}}function Ne(e){return"_parse"in e||"_run"in e||typeof e=="function"&&"schema"in e}async function Ae(e,l){var a;return((a=(await("_parse"in l?l._parse(e):"_run"in l?l._run({typed:!1,value:e},{}):l(e))).issues)==null?void 0:a.map(n=>{var i;return{path:((i=n.path)==null?void 0:i.map(c=>c.key).join("."))||"",message:n.message}}))||[]}function Ve(e,l,u,a,n,i){return $(),j("form",{onSubmit:l[0]||(l[0]=fe((...c)=>e.onSubmit&&e.onSubmit(...c),["prevent"]))},[O(e.$slots,"default",de(ce({errors:e.errors})))],32)}const qe=T(Se,[["render",Ve]]);export{ke as _,qe as a,be as u};
