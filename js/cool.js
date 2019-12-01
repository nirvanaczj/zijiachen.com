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
        ace98.src="portasset/click.png"
        ace98.style.objectFit = "contain"
        clickpng = true}
    else if (clickpng == true){
        ace98.src="portasset/fac-rec.jpg"
        ace98.style.objectFit = "cover"
        clickpng = false}
}
            ,1000)


var clickpngdonut = true;

setInterval(function(){
    if(clickpngdonut == false){
        donut.src="portasset/donut.png"
        donut.style.objectFit = "contain"
        clickpngdonut = true}
    else if (clickpngdonut == true){
        donut.src="portasset/donutvr.jpg"
        donut.style.objectFit = "cover"
        clickpngdonut = false}
}
            ,1000)

var clickpngdonutroom = true;

setInterval(function(){
    if(clickpngdonutroom == false){
        donutroom.src="portasset/donutroom.png"
        donutroom.style.objectFit = "contain"
        clickpngdonutroom = true}
    else if (clickpngdonutroom == true){
        donutroom.src="portasset/vrroom.png"
        donutroom.style.objectFit = "cover"
        clickpngdonutroom = false}
}
            ,1000)


//var clickpngunity = true;
//
//setInterval(function(){
//    if(clickpngdonutroom == false){
//    zombieunity.src="portasset/inprog.png"
//    zombieunity.style.objectFit = "contain"
//    clickpngunity = true}
//    else if (clickpngdonutroom == true){
//    zombieunity.src="portasset/zombie.jpg"
//    zombieunity.style.objectFit = "cover"
//    clickpngunity = false}
//    }
//,2500)
//
//var clickpngfake = true;
//
//setInterval(function(){
//    if(clickpngfake == false){
//    fakenews.src="portasset/inprog.png"
//    fakenews.style.objectFit = "contain"
//    clickpngfake = true}
//    else if (clickpngfake == true){
//    fakenews.src="portasset/fakenews.jpg"
//    fakenews.style.objectFit = "cover"
//    clickpngfake = false}
//    }
//,2500)

zombieunity.addEventListener('onmouseover',function(){
    document.getElementById('projname').innerHTML = 'Zombie game built with Unity3D';
    document.getElementById('zombieunity').src="portasset/inprog.png";
    document.getElementById('zombieunity').style.objectFit = "contain"})
fakenews.addEventListener('onmouseover',function(){
    fakenews.src="portasset/inprog.png";
    fakenews.style.objectFit = "contain"})
zombieunity.addEventListener('onmouseout',function(){
    zombieunity.src="portasset/zombie.jpg"; 
    zombieunity.style.objectFit = "cover"
    document.getElementById('projname').innerHTML = ''})
fakenews.addEventListener('onmouseout',function(){
    fakenews.src="portasset/fakenews.jpg" ;
    fakenews.style.objectFit = "cover"})

var startTSnumIntro = 100
setInterval(function(){
    var introvid = document.getElementById('introvid')
    startTSnumIntro++
    var newColor = `hsl(${startTSnumIntro}, 100%, 50%)`
    introvid.style.background = newColor
}
            ,1000/60)