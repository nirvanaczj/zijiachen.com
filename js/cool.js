var demo = document.querySelector('#demo')
var cool = document.querySelector('#cool')
var items = document.querySelectorAll('.item')
var moveup = document.querySelector('#moveup')
var partcontainer = document.querySelector('#container')
var email = document.querySelector('#email')
var ace98 = document.getElementById('ace-98')
var ace98click = document.getElementById('ace-98click')
var donut = document.getElementById('donutvr')
var donutroom = document.getElementById('donutroom')
var donutclick = document.getElementById('donutvrclick')
var donutroomclick = document.getElementById('donutroomclick')
var zombieunity = document.getElementById('zombieunity')
var fakenews = document.getElementById('fakenews')
var gait = document.getElementById('gait') 
var gaitclick = document.getElementById('gaitclick') 
var textTrigger = document.querySelector('.texttrigger')

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
//    partcontainer.style.display = 'none'
    man = false;
    TweenMax.to("#moveup", 2.5, { ease: Elastic.easeOut.config(1, 0.3), y: '0vh' })
    setTimeout(function(){moveup.style.willChange = 'auto'},3000)
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
//    partcontainer.style.display = 'block'
    partcontainer.style.backgroundImage = "url('portasset/logo2.jpg')"
    partcontainer.style.backgroundSize = "750px 750px"
    partcontainer.style.backgroundRepeat = 'no-repeat'
    partcontainer.style.backgroundPosition = 'center'
    //    man = true;
    TweenMax.to("#moveup", 2.5, { ease: Power4.easeOut, y: '110vh' })
}

function handleCurrent(){
    document.getElementById('onworklist').style.display = 'block'
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

var myclickpng = setInterval(function(){
    if(clickpng == false){
        ace98.style.display = "none"
        ace98click.style.display = "inline-block"
        clickpng = true}
    else if (clickpng == true){
        ace98.style.display = "inline-block"
        ace98click.style.display = "none"
        clickpng = false}
}
                             ,1000)

var clickgait = false;

var myclickgait = setInterval(function(){
    if(clickgait == false){
        gait.style.display = "none"
        gaitclick.style.display = "inline-block"
        clickgait = true}
    else if (clickgait == true){
        gait.style.display = "inline-block"
        gaitclick.style.display = "none"
        clickgait = false}
}
                              ,1000)

var clickpngdonut = true;

var myclickdonut = setInterval(function(){
    if(clickpngdonut == false){
        donut.style.display = "none"
        donutclick.style.display = "inline-block"
        clickpngdonut = true}
    else if (clickpngdonut == true){
        donut.style.display = "inline-block"
        donutclick.style.display = "none"
        clickpngdonut = false}
}
                               ,1000)

var clickpngdonutroom = true;

var myclickdonutroom = setInterval(function(){
    if(clickpngdonutroom == false){
        donutroom.style.display = "none"
        donutroomclick.style.display = "inline-block"
        clickpngdonutroom = true}
    else if (clickpngdonutroom == true){
        donutroom.style.display = "inline-block"
        donutroomclick.style.display = "none"
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


function StopFunction() {
    // donutroom.style.display = "inline-block"
    donutroomclick.style.display = "none"
    // donut.style.display = "inline-block"
    donutclick.style.display = "none"
    // gait.style.display = "inline-block"
    gaitclick.style.display = "none"
    // ace98.style.display = "inline-block"
    ace98click.style.display = "none"
    clearInterval(myclickdonutroom);
    clearInterval(myclickdonut);
    clearInterval(myclickpng);
    clearInterval(myclickgait);
}

function RestartFunction() {
    // donutroomclick.style.display = "inline-block"
    donutroom.style.display = "none"
    // donutclick.style.display = "inline-block"
    donut.style.display = "none"
    // gaitclick.style.display = "inline-block"
    gait.style.display = "none"
    // ace98click.style.display = "inline-block"
    ace98.style.display = "none"
    
    clearInterval(myclickdonutroom);
    clearInterval(myclickdonut);
    clearInterval(myclickpng);
    clearInterval(myclickgait);
    
    myclickdonutroom = setInterval(function(){
    if(clickpngdonutroom == false){
        donutroom.style.display = "none"
        donutroomclick.style.display = "inline-block"
        clickpngdonutroom = true}
    else if (clickpngdonutroom == true){
        donutroom.style.display = "inline-block"
        donutroomclick.style.display = "none"
        clickpngdonutroom = false}
}
                                   ,1000)
    
    myclickdonut = setInterval(function(){
    if(clickpngdonut == false){
        donut.style.display = "none"
        donutclick.style.display = "inline-block"
        clickpngdonut = true}
    else if (clickpngdonut == true){
        donut.style.display = "inline-block"
        donutclick.style.display = "none"
        clickpngdonut = false}
}
                               ,1000)
    
    myclickgait = setInterval(function(){
    if(clickgait == false){
        gait.style.display = "none"
        gaitclick.style.display = "inline-block"
        clickgait = true}
    else if (clickgait == true){
        gait.style.display = "inline-block"
        gaitclick.style.display = "none"
        clickgait = false}
}
                              ,1000)
    
    myclickpng = setInterval(function(){
    if(clickpng == false){
        ace98.style.display = "none"
        ace98click.style.display = "inline-block"
        clickpng = true}
    else if (clickpng == true){
        ace98.style.display = "inline-block"
        ace98click.style.display = "none"
        clickpng = false}
}
                             ,1000)
}

cool.addEventListener('mouseover',function(){
    moveup.style.willChange = 'transform'
})


var scddot = document.getElementById('scddot')
var thddot = document.getElementById('thddot')

var scddotdisplayed = true
setInterval(function(){
    if(scddotdisplayed == true){
    scddot.style.display = 'inline'
    setTimeout(function(){
        thddot.style.display = 'inline'
        scddotdisplayed = false 
    },500)
}   else {
    scddot.style.display = 'none'
    thddot.style.display = 'none'
    scddotdisplayed = true
}
},1000)


if ((navigator.userAgent.match(/(phone|pod|iPhone|iPod|ios|Android|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
      window.location.href = 'https://www.zijiachen.com/mobile.html'
    }     