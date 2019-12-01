var demo = document.querySelector('#demo')
var cool = document.querySelector('#cool')
var items = document.querySelectorAll('.item')
var moveup = document.querySelector('#moveup')
var partcontainer = document.querySelector('#container')
var email = document.querySelector('#email')
var ace98 = document.getElementById('ace-98')
var donut = document.getElementById('donutvr')
var donutroom = document.getElementById('donutroom')
var zombieunity = document.getElementById('zombieunity')
var fakenews = document.getElementById('fakenews')
var gait = document.getElementById('gait') 

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


var startTSnum = 0
setInterval(function(){
    var tsession = document.querySelectorAll('.tutoringsession')
    startTSnum++
    for(let i = 0;i < tsession.length; i++){
        var newColor = `hsl(${startTSnum}, 100%, 50%)`
        tsession[i].style.background = newColor
    }
},1000/60)

var clickpng = false;

setInterval(function(){
    if(clickpng == false){
        ace98.style.objectFit = "contain"
        ace98.src="portasset/click.png"
        clickpng = true}
    else if (clickpng == true){
        ace98.style.objectFit = "cover"
        ace98.src="portasset/fac-rec.jpg"
        clickpng = false}
}
            ,1000)

var clickgait = false;

setInterval(function(){
    if(clickgait == false){
        gait.style.objectFit = "contain"
        gait.src="portasset/click.png"
        clickgait = true}
    else if (clickgait == true){
        gait.style.objectFit = "cover"
        gait.src="portasset/gait.jpg"
        clickgait = false}
}
            ,1000)

var clickpngdonut = true;

setInterval(function(){
    if(clickpngdonut == false){
        donut.style.objectFit = "contain"
        donut.src="portasset/donut.png"
        clickpngdonut = true}
    else if (clickpngdonut == true){
        donut.style.objectFit = "cover"
        donut.src="portasset/donutvr.jpg"
        clickpngdonut = false}
}
            ,1000)

var clickpngdonutroom = true;

setInterval(function(){
    if(clickpngdonutroom == false){
        donutroom.style.objectFit = "contain"
        donutroom.src="portasset/donutroom.png"
        clickpngdonutroom = true}
    else if (clickpngdonutroom == true){
        donutroom.style.objectFit = "cover"
        donutroom.src="portasset/vrroom.png"
        clickpngdonutroom = false}
}
            ,1000)





var startTSnumIntro = 100
setInterval(function(){
    var introvid = document.getElementById('introvid')
    startTSnumIntro++
    var newColor = `hsl(${startTSnumIntro}, 100%, 50%)`
    introvid.style.background = newColor
}
            ,1000/60)