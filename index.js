import{a as u,S as p,i as l}from"./assets/vendor-DtRopbQG.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(o){if(o.ep)return;o.ep=!0;const t=n(o);fetch(o.href,t)}})();const d=document.getElementById("loading-message"),m="49411735-b32ab4d57ab72698c2bda355f",f="https://pixabay.com/api/";async function y(s){try{return(await u.get(f,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data.hits}catch{(r=>{console.error("Error fetching images:",r),iziToast.error({message:"An error occurred while fetching images. Please try again!",position:"topRight",messageColor:"#FAFAFB",backgroundColor:"#EF4040"})}).finally(()=>{d.style.display="none"})}}const c=document.querySelector(".gallery");function h(s){c.innerHTML="";const r=s.map(e=>`
        <li class="img-card">
            <a href="${e.largeImageURL}">
                <img 
                    src="${e.webformatURL}" 
                    alt="${e.tags}" 
                    data-source="${e.largeImageURL}" 
                />
            </a>
            <div class="image-info">
                <p><strong>Likes:</strong> ${e.likes}</p>
                <p><strong>Views:</strong> ${e.views}</p>
                <p><strong>Comments:</strong> ${e.comments}</p>
                <p><strong>Downloads:</strong> ${e.downloads}</p>
            </div>
        </li>`).join("");c.innerHTML=`${r}`,new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const g=document.querySelector("form"),i=document.getElementById("loading-message");g.addEventListener("submit",async s=>{s.preventDefault();const n=s.target.querySelector("input").value.trim();if(n===""){l.error({message:"Please fill in the field!",position:"topRight",messageColor:"#FAFAFB",backgroundColor:"#EF4040"});return}i&&(i.style.display="block");try{const e=await y(n);if(!e||e.length===0){l.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"#FAFAFB",backgroundColor:"#EF4040"});return}h(e)}catch{l.error({message:"Error",position:"topRight",messageColor:"#FAFAFB",backgroundColor:"#EF4040"})}finally{i&&(i.style.display="none")}g.reset()});
//# sourceMappingURL=index.js.map
