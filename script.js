let cursor = document.querySelector('.cursor');
window.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
})
var tl = gsap.timeline();
tl.from(".nav",{
y:50,
  opacity:0,
  duration:2
})
tl.from('.nav h3',{
    opacity:0,
    stagger:0.3,
    duration:2,
    delay:2
},"-=3.5")
tl.from('.left h1',{
    x:-50,
opacity:0,
stagger:0.2
},"-=2")
tl.from('.left h1 span img',{
    x:50,opacity:0,
stagger:0.2
    
},"-=2")

tl.from('.left p',{
    y:-50,opacity:0,
stagger:0.2
    

},"-=2")

tl.from('.right img',{
    x:50,
    scale:0,
    duration:2,
    opacity:0
},"-=3")