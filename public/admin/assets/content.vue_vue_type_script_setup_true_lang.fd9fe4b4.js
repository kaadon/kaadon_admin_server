import s from"./decoration-img.b7260141.js";import{d as c,e as r,o,c as i,a as l,W as h,u as m,a0 as u}from"./@vue.af680e04.js";const d={class:"banner-image w-full h-full"},p=c({__name:"content",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})},height:{type:String,default:"170px"}},setup(e){const a=e,n=r(()=>{const{data:t}=a.content;return Array.isArray(t)&&t[0]?t[0].image:""});return(t,f)=>(o(),i("div",{class:"banner",style:u(e.styles)},[l("div",d,[h(s,{width:"100%",height:e.styles.height||e.height,src:m(n),fit:"contain"},null,8,["height","src"])])],4))}});export{p as _};
