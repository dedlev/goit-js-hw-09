const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),r=document.querySelector("button[data-stop]");let o=null;e.addEventListener("click",(()=>{e.setAttribute("disabled",!1),o=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;t.style.backgroundColor=e}),1e3)})),r.addEventListener("click",(()=>{clearInterval(o),e.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.f5879650.js.map
