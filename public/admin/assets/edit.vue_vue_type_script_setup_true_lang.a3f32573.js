import{O as w,P as x,C as k,D as y,v as R,F as g}from"./element-plus.6c36063e.js";import{P as h}from"./index.10e5ad8b.js";import{a as U,b as N}from"./dict.5d6aa02e.js";import{d as q,s as _,r as A,e as I,a1 as P,o as O,c as T,W as l,O as a,a as c,u as z,U as f}from"./@vue.af680e04.js";const G={class:"edit-popup"},S=c("div",{class:"form-tips"},"\u6570\u503C\u8D8A\u5927\u8D8A\u6392\u524D",-1),W=f("\u6B63\u5E38"),j=f("\u505C\u7528"),Y=q({__name:"edit",emits:["success","close"],setup(H,{expose:v,emit:m}){const p=_(),d=_(),n=A("add"),F=I(()=>n.value=="edit"?"\u7F16\u8F91\u5B57\u5178\u6570\u636E":"\u65B0\u589E\u5B57\u5178\u6570\u636E"),u=P({id:"",type_value:"",name:"",value:"",sort:0,status:1,remark:"",type_id:0}),E={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u6570\u636E\u540D\u79F0",trigger:["blur"]}],value:[{required:!0,message:"\u8BF7\u8F93\u5165\u6570\u636E\u503C",trigger:["blur"]}]},b=async()=>{var o,e;await((o=p.value)==null?void 0:o.validate()),n.value=="edit"?await U(u):await N(u),(e=d.value)==null||e.close(),m("success")},B=()=>{m("close")};return v({open:(o="add")=>{var e;n.value=o,(e=d.value)==null||e.open()},setFormData:o=>{for(const e in u)o[e]!=null&&o[e]!=null&&(u[e]=o[e])}}),(o,e)=>{const r=k,s=y,V=R,i=w,C=x,D=g;return O(),T("div",G,[l(h,{ref_key:"popupRef",ref:d,title:z(F),async:!0,width:"550px",onConfirm:b,onClose:B},{default:a(()=>[l(D,{class:"ls-form",ref_key:"formRef",ref:p,rules:E,model:u,"label-width":"84px"},{default:a(()=>[l(s,{label:"\u5B57\u5178\u7C7B\u578B"},{default:a(()=>[l(r,{"model-value":u.type_value,placeholder:"\u8BF7\u8F93\u5165\u5B57\u5178\u7C7B\u578B",disabled:""},null,8,["model-value"])]),_:1}),l(s,{label:"\u6570\u636E\u540D\u79F0",prop:"name"},{default:a(()=>[l(r,{modelValue:u.name,"onUpdate:modelValue":e[0]||(e[0]=t=>u.name=t),placeholder:"\u8BF7\u8F93\u5165\u6570\u636E\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1}),l(s,{label:"\u6570\u636E\u503C",prop:"value"},{default:a(()=>[l(r,{modelValue:u.value,"onUpdate:modelValue":e[1]||(e[1]=t=>u.value=t),placeholder:"\u8BF7\u8F93\u5165\u6570\u636E\u503C",clearable:""},null,8,["modelValue"])]),_:1}),l(s,{label:"\u6392\u5E8F",prop:"sort"},{default:a(()=>[c("div",null,[l(V,{modelValue:u.sort,"onUpdate:modelValue":e[2]||(e[2]=t=>u.sort=t),min:0,max:9999},null,8,["modelValue"]),S])]),_:1}),l(s,{label:"\u72B6\u6001",required:"",prop:"status"},{default:a(()=>[l(C,{modelValue:u.status,"onUpdate:modelValue":e[3]||(e[3]=t=>u.status=t)},{default:a(()=>[l(i,{label:1},{default:a(()=>[W]),_:1}),l(i,{label:0},{default:a(()=>[j]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(s,{label:"\u5907\u6CE8",prop:"remark"},{default:a(()=>[l(r,{modelValue:u.remark,"onUpdate:modelValue":e[4]||(e[4]=t=>u.remark=t),type:"textarea",autosize:{minRows:4,maxRows:6},clearable:"",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{Y as _};
