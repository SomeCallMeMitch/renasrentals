const slides=[...document.querySelectorAll('[data-hero-slide]')];
const dots=[...document.querySelectorAll('[data-hero-dot]')];
let current=0;
function showSlide(index){current=index;slides.forEach((slide,i)=>slide.classList.toggle('is-active',i===index));dots.forEach((dot,i)=>{dot.classList.toggle('is-active',i===index);dot.setAttribute('aria-selected',String(i===index));});}
dots.forEach((dot,i)=>dot.addEventListener('click',()=>showSlide(i)));
if(slides.length>1&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){window.setInterval(()=>showSlide((current+1)%slides.length),5500);}
document.addEventListener('click',event=>{const cta=event.target.closest('[data-cta]');if(cta&&typeof window.gtag==='function'){window.gtag('event','cta_click',{cta:cta.dataset.cta,page:'5011_ad_landing',label:cta.textContent.trim()});}});
const photoModal=document.querySelector('[data-photo-modal]');
const photos=document.querySelector('[data-all-photos]');
function openPhotoGallery(){if(!photos.children.length){for(let i=1;i<=20;i++){const image=document.createElement('img');image.src=`../assets/property-galleries/5011/5011-${String(i).padStart(2,'0')}.jpg`;image.alt=`5011 63rd St property photo ${i}`;image.loading='lazy';photos.append(image);}}photoModal.hidden=false;document.body.style.overflow='hidden';photoModal.querySelector('.modal-close').focus();}
document.querySelector('[data-view-photos]').addEventListener('click',openPhotoGallery);
document.querySelectorAll('[data-open-gallery]').forEach(button=>button.addEventListener('click',openPhotoGallery));
document.querySelectorAll('[data-close-modal]').forEach(button=>button.addEventListener('click',()=>{photoModal.hidden=true;document.body.style.overflow='';}));
const videoModal=document.querySelector('#video-modal');
const videoFrame=document.querySelector('[data-video-frame]');
document.querySelector('[data-video-trigger]').addEventListener('click',()=>{videoFrame.src='https://www.youtube.com/embed/uTAwdTavdIw?autoplay=1&rel=0';videoModal.classList.add('is-open');videoModal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';});
document.querySelectorAll('[data-close-video]').forEach(button=>button.addEventListener('click',()=>{videoModal.classList.remove('is-open');videoModal.setAttribute('aria-hidden','true');videoFrame.src='';document.body.style.overflow='';}));
const openHousePopup=document.querySelector('[data-open-house-popup]');
function closeOpenHousePopup(){if(!openHousePopup||openHousePopup.classList.contains('is-hidden'))return;openHousePopup.classList.add('is-hidden');window.setTimeout(()=>{openHousePopup.hidden=true;},320);}
document.querySelector('[data-close-open-house]')?.addEventListener('click',closeOpenHousePopup);
if(openHousePopup){window.setTimeout(closeOpenHousePopup,60000);}
document.addEventListener('keydown',event=>{if(event.key==='Escape'){if(!photoModal.hidden){photoModal.hidden=true;}if(videoModal.classList.contains('is-open')){videoModal.classList.remove('is-open');videoModal.setAttribute('aria-hidden','true');videoFrame.src='';}closeOpenHousePopup();document.body.style.overflow='';}});
