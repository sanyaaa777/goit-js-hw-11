import{a as d,i as a,S as p}from"./assets/vendor-DtRopbQG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const c=document.getElementById("loading-message"),m="49411735-b32ab4d57ab72698c2bda355f",f="https://pixabay.com/api/";async function y(s){try{return(await d.get(f,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data.hits}catch(t){return console.error("Error fetching images:",t),a.error({message:"An error occurred while fetching images. Please try again!",position:"topRight",messageColor:"#FAFAFB",backgroundColor:"#EF4040"}),[]}finally{c&&(c.style.display="none")}}const g=document.querySelector(".gallery");function h(s){g.innerHTML="";const t=s.map(r=>`
        <li class="img-card">
            <a href="${r.largeImageURL}">
                <img 
                    src="${r.webformatURL}" 
                    alt="${r.tags}" 
                    data-source="${r.largeImageURL}" 
                />
            </a>
            <div class="image-info">
                <p><strong>Likes:</strong> ${r.likes}</p>
                <p><strong>Views:</strong> ${r.views}</p>
                <p><strong>Comments:</strong> ${r.comments}</p>
                <p><strong>Downloads:</strong> ${r.downloads}</p>
            </div>
        </li>`).join("");g.innerHTML=`${t}`,lightbox?lightbox.refresh():lightbox=new p(".gallery a",{captionsData:"alt",captionDelay:250})}const u=document.querySelector("form"),i=document.getElementById("loading-message"),b=document.querySelector(".gallery");u.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.querySelector("input").value.trim();if(r===""){a.error({message:"Please fill in the field!",position:"topRight",messageColor:"#FAFAFB",backgroundColor:"#EF4040"});return}i&&(i.style.display="block");try{const n=await y(r);if(!n||n.length===0){b.innerHTML="",a.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"#FAFAFB",backgroundColor:"#EF4040"});return}h(n)}catch{a.error({message:"Error",position:"topRight",messageColor:"#FAFAFB",backgroundColor:"#EF4040"})}finally{i&&(i.style.display="none")}u.reset()});
//# sourceMappingURL=index.js.map
