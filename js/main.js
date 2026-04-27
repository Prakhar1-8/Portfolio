// Typing
const texts = ["Python Developer","Data Analyst","ML Learner","Open to Internships"];
let i=0,j=0;
const el=document.getElementById("typing");

function type(){
  if(j<=texts[i].length){
    el.textContent=texts[i].slice(0,j++);
    setTimeout(type,70);
  }else{
    j=0;
    i=(i+1)%texts.length;
    setTimeout(type,1000);
  }
}
type();

// Scroll animation
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("show");
    }
  });
});
document.querySelectorAll(".fade-up").forEach(el=>{
  observer.observe(el);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener("click",function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({behavior:"smooth"});
  });
});