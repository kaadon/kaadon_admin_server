import{O as w,P as D,w as v,D as z,C as R,F as k}from"./element-plus.6c36063e.js";import{f as F}from"./index.a2c778dd.js";import{P as N}from"./index.10e5ad8b.js";import{d as O,s as C,a1 as E,o as x,c as U,W as u,O as t,a as i,U as _,V as d,M as q,T as S}from"./@vue.af680e04.js";const M={class:"export-data"},P=_("\u5BFC\u51FA"),j=_("\u5168\u90E8\u5BFC\u51FA"),I=_("\u5206\u9875\u5BFC\u51FA"),L={class:"flex"},T=i("span",{class:"flex-none ml-2 mr-2"},"\u9875\uFF0C\u81F3",-1),K=O({__name:"index",props:{params:{type:Object,default:()=>({})},pageSize:{type:Number,default:25},fetchFun:{type:Function,required:!0}},setup(y){const s=y,f=C(),c=C(),a=E({page_type:0,page_start:1,page_end:200,file_name:""}),A={page_start:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D77\u59CB\u9875\u7801"},{type:"number",message:"\u9875\u7801\u5FC5\u987B\u662F\u6574\u6570"},{validator:(o,e,l)=>{if(e<=0)return l(new Error("\u9875\u7801\u5FC5\u987B\u5927\u4E8E0"));l()}}],page_end:[{required:!0,message:"\u8BF7\u8F93\u5165\u7ED3\u675F\u9875\u7801"},{type:"number",message:"\u9875\u7801\u5FC5\u987B\u662F\u6574\u6570"},{validator:(o,e,l)=>{if(e<=0)return l(new Error("\u9875\u7801\u5FC5\u987B\u5927\u4E8E0"));l()}}]},p=E({count:0,sum_page:0,page_size:0,max_page:0,all_max_size:0}),g=async()=>{const o=await s.fetchFun({...s.params,page_size:s.pageSize,export:1});Object.assign(p,o),a.file_name=o.file_name,a.page_end=o.page_end,a.page_start=o.page_start},V=async()=>{var o,e;await((o=f.value)==null?void 0:o.validate()),F.loading("\u6B63\u5728\u5BFC\u51FA\u4E2D...");try{await s.fetchFun({...s.params,...a,page_size:s.pageSize,export:2}),(e=c.value)==null||e.close(),F.closeLoading()}catch{F.closeLoading()}};return g(),(o,e)=>{const l=v,r=z,B=w,b=D,m=R,h=k;return x(),U("div",M,[u(N,{ref_key:"popupRef",ref:c,title:"\u5BFC\u51FA\u8BBE\u7F6E",width:"500px","confirm-button-text":"\u786E\u8BA4\u5BFC\u51FA",onConfirm:V,async:!0,onOpen:g},{trigger:t(()=>[u(l,null,{default:t(()=>[P]),_:1})]),default:t(()=>[i("div",null,[u(h,{ref_key:"formRef",ref:f,model:a,"label-width":"120px",rules:A},{default:t(()=>[u(r,{label:"\u6570\u636E\u91CF\uFF1A"},{default:t(()=>[_(" \u9884\u8BA1\u5BFC\u51FA"+d(p.count)+"\u6761\u6570\u636E\uFF0C \u5171"+d(p.sum_page)+"\u9875\uFF0C\u6BCF\u9875"+d(p.page_size)+"\u6761\u6570\u636E ",1)]),_:1}),u(r,{label:"\u5BFC\u51FA\u9650\u5236\uFF1A"},{default:t(()=>[_(" \u6BCF\u6B21\u5BFC\u51FA\u6700\u5927\u5141\u8BB8"+d(p.max_page)+"\u9875\uFF0C\u5171"+d(p.all_max_size)+"\u6761\u6570\u636E ",1)]),_:1}),u(r,{prop:"page_type",label:"\u5BFC\u51FA\u8303\u56F4\uFF1A",required:""},{default:t(()=>[u(b,{modelValue:a.page_type,"onUpdate:modelValue":e[0]||(e[0]=n=>a.page_type=n)},{default:t(()=>[u(B,{label:0},{default:t(()=>[j]),_:1}),u(B,{label:1},{default:t(()=>[I]),_:1})]),_:1},8,["modelValue"])]),_:1}),a.page_type==1?(x(),q(r,{key:0,label:"\u5206\u9875\u8303\u56F4\uFF1A"},{default:t(()=>[i("div",L,[u(r,{prop:"page_start"},{default:t(()=>[u(m,{style:{width:"140px"},modelValue:a.page_start,"onUpdate:modelValue":e[1]||(e[1]=n=>a.page_start=n),modelModifiers:{number:!0},placeholder:""},null,8,["modelValue"])]),_:1}),T,u(r,{prop:"page_end"},{default:t(()=>[u(m,{style:{width:"140px"},modelValue:a.page_end,"onUpdate:modelValue":e[2]||(e[2]=n=>a.page_end=n),modelModifiers:{number:!0},placeholder:""},null,8,["modelValue"])]),_:1})])]),_:1})):S("",!0),u(r,{label:"\u5BFC\u51FA\u6587\u4EF6\u540D\u79F0\uFF1A",prop:"file_name"},{default:t(()=>[u(m,{modelValue:a.file_name,"onUpdate:modelValue":e[3]||(e[3]=n=>a.file_name=n),placeholder:"\u8BF7\u8F93\u5165\u5BFC\u51FA\u6587\u4EF6\u540D\u79F0"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])])]),_:1},512)])}}});export{K as _};
