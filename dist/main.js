(()=>{"use strict";const e=function(e,t,n){try{e.style.height="100vh"}catch(e){}try{t.addEventListener("click",(function(){e.style.display="block";try{n()}catch(e){}}))}catch(e){}e.addEventListener("click",(function(t){var n=t.target;(n.matches(".overlay")||n.matches(".close_icon")||n.matches(".close-btn"))&&(e.style.display="none")}))},t=function(e){var t=e.querySelector("input[type=checkbox]"),n=document.getElementById("thanks"),r=e.querySelector("input[type=tel]"),o=e.querySelectorAll("input[name=club-name]"),c=e.querySelector("input[name=name]"),i=function(){var i,a=document.getElementById("thanks-text");o[0]?o[0].checked?i={name:null!==c?c.value:"Имя не указано",phone:r.value,club:"Мозаика",card:"Карта не указана"}:o[1].checked&&(i={name:null!==c?c.value:"Имя не указано",phone:r.value,club:"Щелково",card:"Карта не указана"}):i={name:null!==c.value?c.value:"Имя не указано",phone:r.value,card:"Карта не указана"},e.querySelectorAll("input[name=card-type]").forEach((function(e){if(e.checked)switch(e.value){case"1":case"1s":i.card="1 Месяц, Соло";break;case"6":case"6s":i.card="6 Месяцев, Соло";break;case"9":case"9s":i.card="9 Месяцев, Соло";break;case"12":case"12s":i.card="12 Месяцев, Соло";break;case"12d":i.card="12 Месяцев, Дневная"}})),function(){try{e.closest(".popup").style.display="none"}catch(e){}n.style.display="block",setTimeout((function(){n.style.display="none"}),5e3)}();var l=function(){e.querySelectorAll("input").forEach((function(e){e.value=""}));try{t.checked=!1,document.querySelectorAll("input[name=card-type]")[0].checked=!0}catch(e){}};a.textContent="Загрузка",fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then((function(e){if(200!==e.status)throw a.innerHTML="\n                    При отправке произошла ошибка!. <br />\n                    Статус ошибки ".concat(e.status,".\n                "),new Error("status network not 200.");a.innerHTML="\n                    Ваша заявка отправлена. <br />\n                    Мы свяжемся с вами в ближайшее время.\n                "})).then((function(){l()})).catch((function(e){l(),console.error(e)}))};r.addEventListener("change",(function(){r.value=r.value.match(/^\+?[1-9]{1,2}[-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/g),r.value=r.value.split(",").join("")}));try{c.addEventListener("change",(function(){var e=function(e){c.value=e};e(c.value.replace(/( |\-){1}[a-z]( |\-){1}/gi,"")),e(c.value.replace(/\d/gi,"")),e(c.value.replace(/((\-){2,}|)*((\-){2,}|)*/gi,"")),e(c.value.replace(/\s+/gi," ")),e(c.value.replace(/( |^)[а-яё]/g,(function(e){return e.toUpperCase()}))),e(c.value.replace(/(\w)/gi,""));try{c.value.length<2&&(c.value="")," "===c.value[0]&&(c.value=c.value.substr(1))}catch(e){}}))}catch(e){}e.addEventListener("submit",(function(n){n.preventDefault();try{if(!t.checked){var r='<p style="color: white; margin-top: 10px" id="checkbox-error">Поставьте галочку!</p>';return"banner-form"!==e.id?(e.querySelector("button").insertAdjacentHTML("afterend",r),void setTimeout((function(){document.getElementById("checkbox-error").style.display="none"}),3e3)):(r='<p style="color: white; margin-top: 10px" id="checkbox-error">Поставьте галочку!</p>',e.querySelector("button").insertAdjacentHTML("afterend",r),void setTimeout((function(){document.getElementById("checkbox-error").style.display="none"}),3e3))}}catch(e){}try{"footer_form"==e.id?o[0].checked||o[1].checked?i():alert("Выберите клуб!"):i()}catch(e){i()}}))};var n,r,o,c,i,a,l,d,s,u,m,p,h;n=document.querySelector(".club-select"),r=n.querySelector("ul"),n.addEventListener("click",(function(){n.classList.contains("list-active")?(n.classList.remove("list-active"),r.style.display="none"):(n.classList.add("list-active"),r.style.display="block")})),e(document.getElementById("free_visit_form"),document.querySelector(".open-popup")),e(document.getElementById("callback_form"),document.querySelector(".callback-btn")),e(document.getElementById("thanks"));try{e(document.getElementById("gift"),document.querySelector(".fixed-gift"),(function(){document.querySelector(".fixed-gift").style.display="none"}))}catch(e){}o=document.querySelector(".main-slider").querySelectorAll(".slide"),c=0,function e(){setTimeout((function(){c+1===o.length&&(c=-1);try{o[c].style.display="none"}catch(e){o[o.length-1].style.display="none"}o[c+1].style.display="flex",c++,e()}),3e3)}(),t(document.getElementById("form1")),t(document.getElementById("form2")),t(document.getElementById("banner-form")),t(document.getElementById("card_order")),t(document.getElementById("footer_form")),function(){var e,t,n,r,o=document.querySelector(".services-slider"),c=document.getElementById("services-slider-wrapper"),i=document.getElementById("serv-slider-wrapper"),a=o.querySelectorAll(".slide"),l=0,d=0;window.screen.width>900&&(e=210),window.screen.width<=900&&(e=190),t="\n            width: 50px;\n            height: 50px;\n            border-radius: 50%;\n            background-color: ".concat("#ffd11a",";\n            position: absolute;\n            top: 50%;\n            transform: translateY(-50%);\n            font-size: 25px;\n            border: none;\n        "),n=document.createElement("button"),r=document.createElement("button"),n.style.cssText=t+"left: -50px",r.style.cssText=t+"right: -50px",n.id="serv-prev",r.id="serv-next",n.textContent="<",r.textContent=">",i.insertAdjacentElement("afterbegin",n),i.insertAdjacentElement("afterbegin",r);var s,u=document.getElementById("serv-prev"),m=document.getElementById("serv-next");(s=document.createElement("style")).textContent="\n            @media (max-width: 1330px) {\n                #services-slider-wrapper {\n                    width: 890px !important;\n                }\n\n                #serv-next {\n                    right: 50px !important;\n                }\n\n                #serv-prev {\n                    left: 50px !important;\n                }\n            }\n\n            @media (max-width: 1120px) {\n                #services-slider-wrapper {\n                    width: 665px !important;\n                }\n\n                #serv-prev {\n                    left: 5% !important;\n                }\n\n                #serv-next {\n                    right: 5% !important;\n                }\n            }\n\n            @media (max-width: 900px) {\n                #serv-prev {\n                    left: 3% !important;\n                }\n\n                #serv-next {\n                    right: 3% !important;\n                }\n\n                #serv-prev, #serv-next {\n                    width: 40px !important;\n                    height: 40px !important;\n                    font-size: 20px !important;\n                }\n\n                .services-slider .slide {\n                    width: 190px;\n                    min-width: 190px !important;\n                }\n\n                #services-slider-wrapper {\n                    width: 605px !important;\n                }\n            }\n\n            @media (max-width: 750px) {\n                #services-slider-wrapper {\n                    width: 405px !important;\n                }\n\n                #serv-prev {\n                    left: 7% !important;\n                }\n\n                #serv-next {\n                    right: 7% !important;\n                }\n            }\n\n            @media (max-width: 600px) {\n                #services-slider-wrapper {\n                    width: 205px !important;\n                }\n\n                #serv-prev {\n                    left: 10% !important;\n                }\n\n                #serv-next {\n                    right: 10% !important;\n                }\n            }\n\n            @media (max-width: 390px) {\n                #serv-prev, #serv-next {\n                    width: 35px !important;\n                    height: 35px !important;\n                    font-size: 18px !important;\n                }\n                \n                #serv-prev {\n                    left: 4% !important;\n                }\n\n                #serv-next {\n                    right: 4% !important;\n                }\n            }\n        ",document.head.appendChild(s);var p=function(){window.screen.width>1330&&d+5===a.length||window.screen.width<=1330&&window.screen.width>1120&&d+4===a.length||window.screen.width<=1120&&window.screen.width>750&&d+3===a.length||window.screen.width<=750&&window.screen.width>600&&d+2===a.length||window.screen.width<=600&&d+1===a.length||(l+=e+12,o.style.transform="translateX(".concat(-l,"px)"),d++)},h=function(){l>0&&(l-=e+12,o.style.transform="translateX(".concat(-l,"px)"),d--)};c.style.cssText="\n            overflow: hidden;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            width: 1110px;\n        ",i.style.cssText="\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            position: relative;\n        ",o.style.cssText="\n            padding: 0;\n            transition: 0.4s;\n        ",a.forEach((function(t){t.style.minWidth="".concat(e,"px")})),m.addEventListener("click",p),u.addEventListener("click",h),i.addEventListener("mouseenter",(function(){var e=function(e){37===e.keyCode?h():39===e.keyCode&&p()};document.addEventListener("keydown",e),i.addEventListener("mouseleave",(function(){document.removeEventListener("keydown",e)}))}))}(),function(){var e,t=document.querySelector(".gallery-slider"),n=document.getElementById("gallery-wrapper"),r=t.querySelectorAll(".slide"),o=document.querySelector(".dots-wrapper"),c="#ffd11a",i=0;!function(){var e="\n            width: 50px;\n            height: 50px;\n            border-radius: 50%;\n            background-color: ".concat(c,";\n            position: absolute;\n            top: 50%;\n            transform: translateY(-50%);\n            font-size: 25px;\n            border: none;\n            z-index: 10;\n        ");n.style.position="relative";var t=document.createElement("button"),r=document.createElement("button");t.style.cssText=e+"left: 50px",r.style.cssText=e+"right: 50px",t.id="gl-prev",r.id="gl-next",t.textContent="<",r.textContent=">",n.insertAdjacentElement("afterbegin",t),n.insertAdjacentElement("afterbegin",r)}();var a=document.getElementById("gl-prev"),l=document.getElementById("gl-next"),d=function(){r.forEach((function(e){e.style.display="none"}))};!function(){var e;t.style.position="relative",o.style.cssText="\n            display: flex;\n            position: absolute;\n            left: 50%;\n            transform: translateX(-50%);\n            bottom: 40px;\n        ",r.forEach((function(){(e=document.createElement("div")).classList.add("dot"),e.style.cssText="\n                width: 37px;\n                height: 7px;\n                margin-left: 8px;\n                margin-rigth: 8px;\n                background-color: rgba(0, 0, 0, 0.3);\n                cursor: pointer;\n            ",o.insertAdjacentElement("afterbegin",e)}));var n,a=o.querySelectorAll("div");(n=document.createElement("style")).textContent="\n                @media (max-width: 550px) {\n                    #gl-prev, #gl-next {\n                        width: 40px !important;\n                        height: 40px !important;\n                        font-size: 22px !important;\n                    }\n\n                    .dots-wrapper {\n                        bottom: 20px !important;\n                    }\n\n                    .dot {\n                        width: 30px !important;\n                        height: 6px !important;\n                    }\n                }\n\n                @media (max-width: 400px) {\n                    #gl-prev, #gl-next {\n                        width: 30px !important;\n                        height: 30px !important;\n                        font-size: 19px !important;\n                    }\n\n                    .dots-wrapper {\n                        bottom: 13px !important;\n                    }\n\n                    .dot {\n                        width: 25px !important;\n                        height: 5px !important;\n                    }\n                }\n            ",document.head.appendChild(n),a.forEach((function(e,t){e.addEventListener("click",(function(){d(),i=t;for(var n=0;n<a.length;n++)a[n].style.backgroundColor="rgba(0, 0, 0, 0.3)";e.style.backgroundColor=c,r[t].style.display="block"}))}))}();var s=o.querySelectorAll("div"),u=function(){for(var e=0;e<s.length;e++)s[e].style.backgroundColor="rgba(0, 0, 0, 0.3)";s[i].style.backgroundColor=c},m=function(){d(),r[i].style.display="block",u(),e=setTimeout((function(){if(i+1===r.length)return i=0,void m();i++,m()}),3e3)},p=function(){if(i<=0)return i=r.length-1,d(),r[i].style.display="block",void u();d(),i--,r[i].style.display="block",u()},h=function(){if(i+1===r.length)return d(),r[i=0].style.display="block",void u();d(),i++,r[i].style.display="block",u()};a.addEventListener("click",p),l.addEventListener("click",h),n.addEventListener("click",(function(t){var n=t.target;(n.matches("#gl-prev")||n.matches("#gl-next")||n.matches(".dot"))&&clearTimeout(e)})),n.addEventListener("mouseenter",(function(){document.onkeydown=function(t){return 37===t.keyCode?(clearTimeout(e),void p()):39===t.keyCode?(clearTimeout(e),void h()):void 0},n.onmouseleave=function(){document.onkeydown=""}})),m()}();try{i=document.getElementById("card_order"),a=document.getElementById("price-total"),l=document.getElementById("promocode"),d=1999,s=function(e){var t=function(e){var t=document.getElementById("card_leto_mozaika"),n=document.getElementById("card_leto_schelkovo"),r=e.target;if(t.checked){if(r.matches("input[name=card-type]"))switch(+r.value){case 1:d=1999;break;case 6:d=9990;break;case 9:d=13900;break;case 12:d=19900}}else if(n.checked&&r.matches("input[name=card-type]"))switch(+r.value){case 1:d=2999;break;case 6:d=14990;break;case 9:d=21990;break;case 12:d=24990}return d}(e);"ТЕЛО2019"===l.value?a.textContent=Math.floor(t-.3*t):a.textContent=t},l.addEventListener("input",s),i.addEventListener("click",s)}catch(e){}u=document.getElementById("totop"),m=document.querySelector(".head"),p=document.querySelector(".top-menu"),h=document.querySelector(".head-slider"),document.addEventListener("scroll",(function(){var e=h.clientHeight+m.clientHeight+p.clientHeight;document.documentElement.scrollTop>=e?(u.style.display="block",u.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(".head").scrollIntoView({behavior:"smooth",block:"start"})}))):u.style.display="none"})),document.querySelectorAll('a[href*="#"]').forEach((function(e){e.getAttribute("href").length>1&&e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("href").substr(1);document.getElementById(n).scrollIntoView({behavior:"smooth",block:"start"})}))})),function(){var e=document.getElementById("menu-btn"),t=document.getElementById("hidden-menu"),n=document.querySelector(".head"),r=document.querySelector(".menu-button"),o=document.querySelector(".top-menu");e.addEventListener("click",(function(){t.style.display="flex"})),t.addEventListener("click",(function(e){var n=e.target;(n.closest("#close-btn")||n.closest(".scroll"))&&(t.style.display="none")})),document.addEventListener("scroll",(function(){var e=n.clientHeight+r.clientHeight;window.screen.width<=768&&(document.documentElement.scrollTop>=e?o.style.cssText="\n                position: fixed;\n                z-index: 10;\n            ":o.style.cssText="\n                    position: relative;\n                ")}))}()})();