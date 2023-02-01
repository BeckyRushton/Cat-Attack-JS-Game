(()=>{"use strict";const t=[{name:"Loaf Cat",cuteness:10,stealth:7,agility:8,image:"https://ik.imagekit.io/cdrmfch7b/Loaf_cat.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675026372652"},{name:"Angry Cat",cuteness:9,stealth:6,agility:8,image:"https://ik.imagekit.io/cdrmfch7b/Angry_cat.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675028722701"},{name:"Gamer Cat",cuteness:9,stealth:7,agility:10,image:"https://ik.imagekit.io/cdrmfch7b/Gamer_cat.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675028611304"},{name:"Sock Cat",cuteness:8,stealth:10,agility:4,image:"https://ik.imagekit.io/cdrmfch7b/Sock_cat.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675028775424"},{name:"Cool Cat",cuteness:7,stealth:9,agility:8,image:"https://ik.imagekit.io/cdrmfch7b/Sunglasses_cat.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675028795278"},{name:"Winking Cat",cuteness:10,stealth:7,agility:7,image:"https://ik.imagekit.io/cdrmfch7b/Winking_cat.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675028816226"},{name:"Polite Cat",cuteness:7,stealth:8,agility:7,image:"https://ik.imagekit.io/cdrmfch7b/Smile_cat.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675028832602"},{name:"Vampire Cat",cuteness:5,stealth:10,agility:9,image:"https://ik.imagekit.io/cdrmfch7b/Vampire_cat.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675028896363"},{name:"Salad Cat",cuteness:6,stealth:7,agility:9,image:"https://ik.imagekit.io/cdrmfch7b/Salad_cat.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675026371910"},{name:"Bag Cat",cuteness:6,stealth:10,agility:7,image:"https://ik.imagekit.io/cdrmfch7b/Bag_cat.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675028945086"},{name:"Cowboy Cat",cuteness:8,stealth:6,agility:9,image:"https://ik.imagekit.io/cdrmfch7b/Cowboy_cat.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675026370700"},{name:"Chonk Cat",cuteness:9,stealth:7,agility:3,image:"https://ik.imagekit.io/cdrmfch7b/Chonk_cat.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675028922533"},{name:"Thief Cat",cuteness:6,stealth:10,agility:9,image:"https://ik.imagekit.io/cdrmfch7b/Hungry_cat.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675028980006"},{name:"Zoomies Cat",cuteness:5,stealth:8,agility:10,image:"https://ik.imagekit.io/cdrmfch7b/Bug_eye_cat.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675029008383"},{name:"Birthday Cat",cuteness:10,stealth:6,agility:7,image:"https://ik.imagekit.io/cdrmfch7b/Birthday_cat.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675029024815"},{name:"Bath Cat",cuteness:5,stealth:8,agility:8,image:"https://ik.imagekit.io/cdrmfch7b/Bath_cat.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675026369790"},{name:"Flower Cat",cuteness:9,stealth:7,agility:6,image:"https://ik.imagekit.io/cdrmfch7b/Flower_cat.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675028965063"},{name:"Cheeky Cat",cuteness:10,stealth:7,agility:8,image:"https://ik.imagekit.io/cdrmfch7b/Cheeky_cat.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675029038607"},{name:"Sleepy Cat",cuteness:10,stealth:6,agility:4,image:"https://ik.imagekit.io/cdrmfch7b/Sleeping_cat.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675028879339"},{name:"Moustache Cat",cuteness:7,stealth:8,agility:8,image:"https://ik.imagekit.io/cdrmfch7b/Moustache_cat.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675028172557"}],e=document.querySelector(".catCardComputer__card"),a=document.querySelector(".catCardUser__card"),i=document.querySelector("#duel"),s=document.querySelector("#stat01"),c=document.querySelector("#stat02"),n=document.querySelector("#stat03"),r=document.querySelector(".computerWaiting"),d=document.querySelector(".resultMessage__winner"),o=document.querySelector(".resultMessage__draw"),l=document.querySelector(".resultMessage__loser");let g=!1,m=null,k=null;const p=t=>`<div class="catCard">\n  <img class="catCard__image" src=${t.image} alt="image of ${t.name}" /> \n  <div class="catCard__stats">\n  <p>Name: ${t.name}</p>\n  <p>Cuteness: ${t.cuteness}</p>\n  <p>Stealth: ${t.stealth}</p>\n  <p>Agility: ${t.agility}</p>\n  </div>\n  </div>`;a.addEventListener("click",(()=>{if(g)return!1;const e=t[Math.random()*t.length|0];m=e,console.log(e),a.innerHTML=p(e);const i=t.filter((t=>t.name!==e.name))[Math.random()*t.length|0];k=i,console.log(i),g=!0}));const h=t=>{const e=t.target;console.log(e),s.checked=!1,c.checked=!1,n.checked=!1,e.checked=!0};s.addEventListener("click",h),c.addEventListener("click",h),n.addEventListener("click",h),i.addEventListener("click",(()=>{if(!g)return alert("Please select your card!"),!1;let t=null;if(s.checked)t="cuteness";else if(c.checked)t="stealth";else{if(!n.checked)return alert("Please choose an attack method!"),!1;t="agility"}console.log(t),console.log(m[t]),console.log(k[t]),e.innerHTML=p(k),m[t]>k[t]?(r.innerText="I'll get you next time!",d.innerText="Winner!",console.log("Winner!")):m[t]==k[t]?(r.innerText="Good, but not good enough!",o.innerText="It's a draw...",console.log("Draw!")):(r.innerText="Mwhahahaha!",l.innerText="Loser!",console.log("Loser!"))}))})();