var demo = document.querySelector('#demo')
var cool = document.querySelector('#cool')
var items = document.querySelectorAll('.item')
var moveup = document.querySelector('#moveup')
var partcontainer = document.querySelector('#container')
function coolfunction(){
    cool.style.display = 'none'
    demo.style.display = 'block'
    moveup.style.display = 'block'
    var timesRun = 0;
//    var interval = setInterval(function(){
//        timesRun += 1;
//        if(timesRun === 10){
//            clearInterval(interval);
//        }
//        var randomColor = `rgb(${(Math.random()*255)},${(Math.random()*255)},${(Math.random()*255)})`
//        demo.style.backgroundColor = randomColor
//    }, 50)
    setTimeout(function(){
        demo.style.backgroundColor = 'white'
        demo.style.opacity = '0.8'
        partcontainer.style.background = 'transparent'
        man = false;
        TweenMax.to("#moveup", 2.5, { ease:  Elastic.easeOut.config(1, 0.3), y: '0vh' })

    },0);

}



//TweenMax.to('#moveup', duration 2.5, { ease: Power4.easeOut, y: -500 });


//var img = document.getElementById('logoPic')
//var logoHeightpx = img.clientHeight;
//var clientHeight = window.innerHeight;
//var clientWidth = window.innerWidth;
//var stadyblock = document.querySelector('.itemStady')
////stadyblock.style.padding = `calc(6vh + 1vw -${logoHeightpx})`
//console.log(0.12*clientHeight + 0.02*clientWidth)
//console.log(logoHeightpx)
//stadyblock.style.paddingTop = `${0.06*clientHeight + 0.01*clientWidth - logoHeightpx}px`
