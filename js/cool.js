var demo = document.querySelector('#demo')
var cool = document.querySelector('#cool')
var items = document.querySelectorAll('.item')
var moveup = document.querySelector('#moveup')
function coolfunction(){
    cool.style.display = 'none'
    demo.style.display = 'block'
    var timesRun = 0;
    var interval = setInterval(function(){
        timesRun += 1;
        if(timesRun === 10){
            clearInterval(interval);
        }
        var randomColor = `rgb(${(Math.random()*255)},${(Math.random()*255)},${(Math.random()*255)})`
        demo.style.backgroundColor = randomColor
    }, 50)
    setTimeout(function(){
        demo.style.backgroundColor = 'white'
        demo.style.opacity = '0.9'
        man = false;
        TweenMax.to("#moveup", 3, { ease:  Elastic.easeOut.config(1, 0.3), y: '0vh' })

    },505);

}



//TweenMax.to('#moveup', duration 2.5, { ease: Power4.easeOut, y: -500 });


