import{r as n,u as l,j as e,c as p}from"./index-efa7a843.js";import{C as h,a as m}from"./api-d1d0431c.js";import{T as t}from"./Typography-e4a9190f.js";const f=()=>{const[r,o]=n.useState([]),{movieId:a}=l();return n.useEffect(()=>{(async()=>{try{const s=await m.getReviews(a);o(s.results)}catch(s){console.log(s)}})()},[a]),e.jsx(e.Fragment,{children:r.length!==0?e.jsx(h,{children:r.map(({id:i,author:s,content:c})=>e.jsxs(p,{sx:{display:"flex",flexDirection:"column",alignItems:"center",gap:2,overflow:"hidden",mt:3,p:2},children:[e.jsxs(t,{variant:"h5",children:["Author: ",s]}),e.jsx(t,{variant:"p",children:c})]},i))}):e.jsx(t,{variant:"h5",children:"We don´t have any reviews for this movie."})})};export{f as default};