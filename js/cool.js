var demo = document.querySelector('#demo')
var cool = document.querySelector('#cool')
var items = document.querySelectorAll('.item')
var moveup = document.querySelector('#moveup')
var partcontainer = document.querySelector('#container')
var email = document.querySelector('#email')
function coolfunction(){
    
    cool.style.display = 'none'
    demo.style.display = 'block'
    moveup.style.display = 'block'
    moveup.style.background = 'transparent'
    moveup.style.opacity = '1'
    email.style.fontFamily = 'filicudi-striped, sans-serif'
    email.style.right = '20px'
    email.style.padding = '0'
    email.style.left = 'auto'
    demo.style.backgroundColor = 'white'
    demo.style.opacity = '0.8'
    partcontainer.style.background = 'transparent'
    man = false;
    TweenMax.to("#moveup", 2.5, { ease: Elastic.easeOut.config(1, 0.3), y: '0vh' })
}

// Elastic.easeOut.config(1, 0.3)

function undoCool(){
    appearWhole()
    cool.style.display = 'block'
    demo.style.display = 'none'
    moveup.style.display = 'block'
    moveup.style.background = 'white'
    moveup.style.opacity = '0.8'
    email.style.fontFamily = 'Gugi'
    email.style.fontStyle = 'cursive'
    email.style.right = 'auto'
    email.style.padding = '16px 20px'
    email.style.left = '16px'
    partcontainer.style.backgroundImage = "url('portasset/logo2.jpg')"
    partcontainer.style.backgroundSize = "750px 750px"
    partcontainer.style.backgroundRepeat = 'no-repeat'
    partcontainer.style.backgroundPosition = 'center'
//    man = true;
    TweenMax.to("#moveup", 2.5, { ease: Power4.easeOut, y: '110vh' })
}