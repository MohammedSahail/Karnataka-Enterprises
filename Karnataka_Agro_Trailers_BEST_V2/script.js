const ownerWhatsApp="918951143123";
const header=document.getElementById("siteHeader"),menuBtn=document.getElementById("menuBtn"),navLinks=document.getElementById("navLinks"),themeBtn=document.getElementById("themeBtn"),topBtn=document.getElementById("topBtn");
window.addEventListener("load",()=>{document.getElementById("preloader").style.display="none";document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
window.addEventListener("scroll",()=>{header.classList.toggle("scrolled",scrollY>30);topBtn.style.display=scrollY>500?"grid":"none"});
menuBtn.addEventListener("click",()=>{navLinks.classList.toggle("open");menuBtn.innerHTML=navLinks.classList.contains("open")?'<i class="bi bi-x-lg"></i>':'<i class="bi bi-list"></i>'});
navLinks.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));
topBtn.addEventListener("click",()=>scrollTo({top:0,behavior:"smooth"}));

const savedTheme=localStorage.getItem("katTheme")||"light";
let dark=savedTheme==="dark";
document.body.classList.toggle("dark-ui",dark);
themeBtn.innerHTML=dark?'<i class="bi bi-sun"></i>':'<i class="bi bi-moon-stars"></i>';
themeBtn.title=dark?"Switch to light mode":"Switch to dark mode";
themeBtn.addEventListener("click",()=>{
  dark=!dark;
  document.body.classList.toggle("dark-ui",dark);
  localStorage.setItem("katTheme",dark?"dark":"light");
  themeBtn.innerHTML=dark?'<i class="bi bi-sun"></i>':'<i class="bi bi-moon-stars"></i>';
  themeBtn.title=dark?"Switch to light mode":"Switch to dark mode";
});

const tilt=document.getElementById("tiltCard");
if(tilt && matchMedia("(pointer:fine)").matches){
  tilt.parentElement.addEventListener("mousemove",e=>{const r=tilt.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;tilt.style.transform=`rotateY(${-8+x*12}deg) rotateX(${3-y*10}deg)`});
  tilt.parentElement.addEventListener("mouseleave",()=>tilt.style.transform="rotateY(-8deg) rotateX(3deg)");
}

const loginModal=document.getElementById("loginModal"),openLogin=document.getElementById("openLogin"),closeLogin=document.getElementById("closeLogin"),authForm=document.getElementById("authForm");
openLogin.addEventListener("click",()=>loginModal.classList.add("open"));
closeLogin.addEventListener("click",()=>loginModal.classList.remove("open"));
loginModal.addEventListener("click",e=>{if(e.target===loginModal)loginModal.classList.remove("open")});
document.querySelectorAll(".auth-tabs button").forEach(tab=>tab.addEventListener("click",()=>{
  document.querySelectorAll(".auth-tabs button").forEach(x=>x.classList.remove("active"));tab.classList.add("active");
  loginModal.querySelector(".auth-modal").classList.toggle("signup",tab.dataset.auth==="signup");
  document.getElementById("authSubmit").textContent=tab.dataset.auth==="signup"?"Create account":"Sign in";
}));
authForm.addEventListener("submit",e=>{e.preventDefault();const email=document.getElementById("authEmail").value;const name=document.getElementById("authName").value||"Customer";localStorage.setItem("katUser",JSON.stringify({email,name}));alert("Demo account saved in this browser. You can now continue your enquiry.");loginModal.classList.remove("open")});

const productModal=document.getElementById("productModal"),productContent=document.getElementById("productModalContent");
document.querySelectorAll(".quick-view").forEach(btn=>btn.addEventListener("click",()=>{
  const card=btn.closest(".product-card"),name=card.dataset.product,img=card.querySelector("img").src;
  productContent.innerHTML=`<div class="product-detail"><img src="${img}" alt="${name}"><div><div class="section-tag">MACHINE DETAILS</div><h3>${name}</h3><p>Contact the owner directly for current specifications, pricing, availability, customization and delivery details.</p><a class="btn btn-primary" target="_blank" href="https://wa.me/${ownerWhatsApp}?text=${encodeURIComponent("Hello Karnataka Agro Trailers, I am interested in the "+name+". Please share price, specifications and availability.")}"><i class="bi bi-whatsapp"></i> Enquire on WhatsApp</a></div></div>`;
  productModal.classList.add("open");
}));
document.getElementById("closeProduct").addEventListener("click",()=>productModal.classList.remove("open"));
productModal.addEventListener("click",e=>{if(e.target===productModal)productModal.classList.remove("open")});
document.querySelectorAll(".whatsapp-product").forEach(btn=>btn.addEventListener("click",()=>{
  const name=btn.closest(".product-card").dataset.product;
  const user=JSON.parse(localStorage.getItem("katUser")||"{}");
  const greeting=user.name?`Hello, I am ${user.name}.`:"Hello Karnataka Agro Trailers.";
  const text=`${greeting} I am interested in the ${name}. Please share the price, specifications, availability and delivery details.`;
  window.open(`https://wa.me/${ownerWhatsApp}?text=${encodeURIComponent(text)}`,"_blank","noopener");
}));
document.addEventListener("keydown",e=>{if(e.key==="Escape"){loginModal.classList.remove("open");productModal.classList.remove("open")}});
