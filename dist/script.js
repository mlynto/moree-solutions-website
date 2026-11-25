const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));

const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems=document.querySelectorAll('.reveal');
if(reduceMotion){revealItems.forEach(item=>item.classList.add('visible'));}else{
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.14,rootMargin:'0px 0px -40px'});
  revealItems.forEach(item=>observer.observe(item));
}

const counter=document.querySelector('[data-count]');
if(counter){let started=false;const counterObserver=new IntersectionObserver(entries=>{if(entries[0].isIntersecting&&!started){started=true;const end=Number(counter.dataset.count);const start=performance.now();const tick=now=>{const progress=Math.min((now-start)/1300,1);counter.textContent=String(Math.floor(end*(1-Math.pow(1-progress,3)))).padStart(2,'0');if(progress<1)requestAnimationFrame(tick);};requestAnimationFrame(tick);counterObserver.disconnect();}},{threshold:.4});counterObserver.observe(counter);}
