(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const l=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),d=document.querySelector(".js-close-menu"),a=document.querySelector(".js-list"),s=()=>{const n=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!n),l.classList.toggle("is-open")};o.addEventListener("click",s);d.addEventListener("click",s);a.addEventListener("click",n=>{n.target.hasAttribute("modal-link")&&s()});window.matchMedia("(min-width: 768px)").addEventListener("change",n=>{n.matches&&(l.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))});
