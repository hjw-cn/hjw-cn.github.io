let switchHandle=document.querySelector("#switch-color-scheme"),themeIcon=document.querySelector("#theme-icon");var html=document.documentElement;const switchMode=()=>{let o="light";"light"===html.getAttribute("color-mode")?(html.setAttribute("color-mode","dark"),themeIcon.classList="iconfont icon-sun",o="dark"):(html.setAttribute("color-mode","light"),themeIcon.classList="iconfont icon-moon",o="light"),localStorage.setItem("color-mode",o)};switchHandle.addEventListener("click",switchMode,!1);const currColorMode=localStorage.getItem("color-mode");themeIcon.classList="light"===currColorMode?"iconfont icon-moon":"iconfont icon-sun";