import{a as p,i,S as m}from"./assets/vendor-DtRopbQG.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g=document.getElementById("loading-message"),f="49411735-b32ab4d57ab72698c2bda355f",y="https://pixabay.com/api/";async function h(s){try{return(await p.get(y,{params:{key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data.hits}catch(o){return console.error("Error fetching images:",o),i.error({message:"An error occurred while fetching images. Please try again!",position:"topRight",messageColor:"#FAFAFB",backgroundColor:"#EF4040"}),[]}finally{g&&(g.style.display="none")}}const u=document.querySelector(".gallery");let c;function b(s){u.innerHTML="";const o=s.map(r=>`
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
        </li>`).join("");u.innerHTML=o,c?c.refresh():c=new m(".gallery a",{captionsData:"alt",captionDelay:250})}const d=document.querySelector("form"),a=document.getElementById("loading-message"),F=document.querySelector(".gallery");d.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.querySelector("input").value.trim();if(r===""){i.error({message:"Please fill in the field!",position:"topRight",messageColor:"#FAFAFB",backgroundColor:"#EF4040"});return}a&&(a.style.display="block");try{const n=await h(r);if(!n||n.length===0){F.innerHTML="",i.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"#FAFAFB",backgroundColor:"#EF4040"});return}b(n)}catch{i.error({message:"Error",position:"topRight",messageColor:"#FAFAFB",backgroundColor:"#EF4040"})}finally{a&&(a.style.display="none")}d.reset()});
//# sourceMappingURL=index.js.map
