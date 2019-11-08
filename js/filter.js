localStorage.clear()
var demo = document.querySelector('#demo')
var part1 = document.getElementById('part1').querySelectorAll('.item')
var part2 = document.getElementById('part2').querySelectorAll('.item')
var part3 = document.getElementById('part3').querySelectorAll('.item')
var part4 = document.getElementById('part4').querySelectorAll('.item,.itemStady')
var lyrics1 = document.getElementById('LyricsPart1').querySelectorAll('.item')
var lyrics2 = document.getElementById('LyricsPart2').querySelectorAll('.item')
var lyrics3 = document.getElementById('LyricsPart3').querySelectorAll('.item')
var lyrics4 = document.getElementById('LyricsPart4').querySelectorAll('.item')
var itemsArray = Array.prototype.slice.call(document.getElementsByClassName('item'))
var itemLyricsArray = Array.prototype.slice.call(document.getElementsByClassName('itemLyrics'))
var stadyLogo = Array.prototype.slice.call((document.getElementsByClassName('itemStady')))
var allgrids = itemsArray.concat(itemLyricsArray).concat(stadyLogo)

console.log(part1[2].style)
var allitem = [
    part1,part2,part3,part4,lyrics1,lyrics2,lyrics3,lyrics4
]


function handleMain(){
    if(localStorage.getItem('clicked')  == 'true'){
        appearWhole()
        localStorage.setItem('clicked','false')
    }
    else{
        disappear()
    }
}

function handleCEO(){
    disappear()
    setTimeout(function(){
        for( i = 0 ; i < part4.length ; i++) {
            appear(part4,i)
        }
        moveup.style.display = 'flex'
        moveup.style.justifyContent = 'center'
        moveup.style.alignItems = 'center'
    },1005)
}




function handleFront(){
    disappear()
    setTimeout(function(){
        for( i = 0 ; i < part1.length ; i++) {
            appear(part1,i)
        }
        moveup.style.display = 'flex'
        moveup.style.justifyContent = 'center'
        moveup.style.alignItems = 'center'
    },1005)
}



function handleSoft(){
    disappear()
    setTimeout(function(){
        for( i = 0 ; i < part2.length ; i++) {
            appear(part2,i)
        }
        moveup.style.display = 'flex'
        moveup.style.justifyContent = 'center'
        moveup.style.alignItems = 'center'
    },1005)
}



function handleData(){
    disappear()
    setTimeout(function(){
        for( i = 0 ; i < part3.length ; i++) {
            appear(part3,i)
        }
        moveup.style.display = 'flex'
        moveup.style.justifyContent = 'center'
        moveup.style.alignItems = 'center'
    },1005)
}











//methods

function appear(part,i){
    setTimeout(function(){
        part[i].style.display = 'inline-flex'
        //        part[i].style.transform = 'scale(2,2)'
        //        part[i].style.marginLeft = `${part[i].style.marginLeft.slice(0,-2)*2}px`
    },i*50)
}
function appearWhole(){
    moveup.style.display = 'block'
    var timesRun = 0
    var interval = setInterval(function(){
        timesRun += 1;
        if(timesRun === 10){
            clearInterval(interval);
        }
        var randomColor = `rgb(${(Math.random()*255)},${(Math.random()*255)},${(Math.random()*255)})`
        demo.style.backgroundColor = randomColor
        demo.style.opacity = '1'
    }, 100)

    var timesrun1 = 0
    var interval1 = setInterval(function(){

        if(timesrun1 === 82){
            clearInterval(interval1);
        }
        allgrids[timesrun1].style.display = 'inline-flex'

        timesrun1 += 1;
    }, 12)
    setTimeout(function(){demo.style.opacity = '0.8'},1005)
    }
function disappear(){
    localStorage.setItem('clicked','true')
    var timesRun = 0
    var interval = setInterval(function(){
        timesRun += 1;
        if(timesRun === 10){
            clearInterval(interval);
        }
        var randomColor = `rgb(${(Math.random()*255)},${(Math.random()*255)},${(Math.random()*255)})`
        demo.style.backgroundColor = randomColor
        demo.style.opacity = '1'
    }, 100)

    var timesrun1 = 0
    var interval1 = setInterval(function(){

        if(timesrun1 === 82){
            clearInterval(interval1);
        }
        allgrids[timesrun1].style.display = 'none'

        timesrun1 += 1;
    }, 12)
    setTimeout(function(){demo.style.opacity = '0.8'},1005)
    }

function generateArraytoSum(num){
    var list = []
    var listSum = 0
    const arrSum = arr => arr.reduce((a,b) => a + b, 0)

    while(listSum < num){
        if(listSum < num-10){
            list.push((Math.floor(Math.random()*10)))
            listSum = arrSum(list)
        }
        else{
            list.push(10)
            listSum = num
        }
    }
    return list
}


function generateArraytoSumFix(num,arrayLen){
    var list = []
    var listSum = 0
    const arrSum = arr => arr.reduce((a,b) => a + b, 0)

    while(listSum < arrayLen){
        if(listSum <= arrayLen-1){
            list.push(5+(Math.round(Math.random()*5)))
            listSum = list.length
        }
        else{
            list.push(num-arrSum(list))
            listSum = arrayLen
        }
    }
    return list
}
