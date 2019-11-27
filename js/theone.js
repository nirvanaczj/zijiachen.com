var theone =  document.getElementById('theone')
function infoToggle(){
   theone.innerHTML = "<img src='portasset/InfoGraphics.png'>"
   TweenMax.to("#theone", 1.5, { ease: Power4.easeOut, y: '100vh' }) 
}