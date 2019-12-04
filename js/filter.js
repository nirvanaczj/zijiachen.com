localStorage.clear()
var demo = document.querySelector('#demo')
var part1 = document.getElementById('part1').querySelectorAll('.item')
var part1Whole = document.getElementById('part1')
var part2 = document.getElementById('part2').querySelectorAll('.item')
var part2Whole = document.getElementById('part2')
var part3 = document.getElementById('part3').querySelectorAll('.item')
var part3Whole = document.getElementById('part3')
var part4 = document.getElementById('part4').querySelectorAll('.item,.itemStady')
var part4Whole = document.getElementById('part4')
var part5 = document.getElementById('part5').querySelectorAll('.item,.itemStady')
var part5Whole = document.getElementById('part5')
var lyrics1 = document.getElementById('LyricsPart1').querySelectorAll('.item')
var lyrics2 = document.getElementById('LyricsPart2').querySelectorAll('.item')
var lyrics3 = document.getElementById('LyricsPart3').querySelectorAll('.item')
var lyrics4 = document.getElementById('LyricsPart4').querySelectorAll('.item')
var itemsArray = Array.prototype.slice.call(document.getElementsByClassName('item'))
var itemsClickArray = Array.prototype.slice.call(document.getElementsByClassName('itemClick'))
var itemLyricsArray = Array.prototype.slice.call(document.getElementsByClassName('itemLyrics'))
var stadyLogo = Array.prototype.slice.call((document.getElementsByClassName('itemStady')))
var part1itemClick = document.getElementById('part1').querySelectorAll('.itemClick')
var part3itemClick = document.getElementById('part3').querySelectorAll('.itemClick')
var allgrids = itemsArray.concat(itemLyricsArray).concat(stadyLogo)


var allitem = [
    part1,part2,part3,part4,lyrics1,lyrics2,lyrics3,lyrics4
]

console.log(allgrids.length)

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
//    disappear()
//    setTimeout(function(){
//        moveup.style.display = 'flex'
//        moveup.style.justifyContent = 'center'
//        moveup.style.alignItems = 'center'
//        part3Whole.style.display = 'none'
//        part2Whole.style.display = 'none'
//        part4Whole.style.display = 'flex'
//        part1Whole.style.display = 'none'
//        part4Whole.style.width = '100%'
//        part4Whole.style.height = 'auto'
//        for( i = 0 ; i < part4.length ; i++) {
//            appearflex(part4,i)
//            part4[i].style.height = `${(((100-(part1.length+1)*2.5)/part1.length)/3.2)*4}vh`
//        }
//    },1100)
    window.open('https://stady.app')
}



function handleFront(){
    disappear()
    setTimeout(function(){
        moveup.style.display = 'flex'
        moveup.style.justifyContent = 'center'
        moveup.style.alignItems = 'center'
        part3Whole.style.display = 'none'
        part2Whole.style.display = 'none'
        part4Whole.style.display = 'none'
        part1Whole.style.display = 'flex'
        part1Whole.style.width = '100%'
        part1Whole.style.height = 'auto'
        for( i = 0 ; i < part1.length ; i++) {
            appearflex(part1,i)
            part1[i].style.height = `${(((100-(part1.length+1)*2.5)/part1.length)/3.2)*4}vh`
        }
    },1100)
    
}



function handleSoft(){
    disappear()
    setTimeout(function(){
        moveup.style.display = 'flex'
        moveup.style.justifyContent = 'center'
        moveup.style.alignItems = 'center'
        part1Whole.style.display = 'none'
        part4Whole.style.display = 'none'
        part3Whole.style.display = 'none'
        part2Whole.style.display = 'flex'
        part2Whole.style.width = '100%'
        part2Whole.style.height = 'auto'
        for( i = 0 ; i < part2.length ; i++) {
            appearflex(part2,i)
            part2[i].style.height = `${(((100-(part2.length+1)*2.5)/part2.length)/3.2)*4}vh`
        }
    },1100)
}



function handleData(){
    disappear()
    setTimeout(function(){
        moveup.style.display = 'flex'
        moveup.style.justifyContent = 'center'
        moveup.style.alignItems = 'center'
        part1Whole.style.display = 'none'
        part2Whole.style.display = 'none'
        part4Whole.style.display = 'none'
        part3Whole.style.display = 'flex'
        part3Whole.style.width = '100%'
        part3Whole.style.height = 'auto'
        for( i = 0 ; i < part3.length ; i++) {
            appearflex(part3,i)
            part3[i].style.height = `${(((100-(part3.length+1)*2.5)/part3.length)/3.2)*4}vh`
        }
    },1100)
}


function appearflex(part,i){
    setTimeout(function(){
        part[i].style.margin = '0 0 0 0'
        part[0].style.marginLeft = '2.5vw'
        part[i].style.flex = '1'
        part[i].style.display = 'inline-flex'
        part[i].style.marginRight = '2.5vw'
        //        part[i].style.transform = 'scale(2,2)'
        //        part[i].style.marginLeft = `${part[i].style.marginLeft.slice(0,-2)*2}px`
    },i*50)
}

function appearWhole(){
    RestartFunction();
    part1Whole.style.display = 'inline'
    part2Whole.style.display = 'inline'
    part4Whole.style.display = 'inline'
    part3Whole.style.display = 'inline'
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
    
    for (var i  = 0 ; i < allgrids.length ; i++){
        allgrids[i].style.height = '4vh'
    }
    
    var timesrun1 = 0
    var interval1 = setInterval(function(){

        if(timesrun1 === allgrids.length-1){
            clearInterval(interval1);
        }
        allgrids[timesrun1].style.display = 'inline-flex'
        allgrids[timesrun1].style.margin = '1vw -5px 0px 1vw'
        timesrun1 += 1;
    }, (1000/(allgrids.length-1)))
    setTimeout(function(){demo.style.opacity = '0.8'},1050)
}
function disappear(){
    StopFunction()
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

        if(timesrun1 === allgrids.length-1){
            clearInterval(interval1);
        }
        allgrids[timesrun1].style.display = 'none'
        allgrids[timesrun1].style.flex = 'none'

        timesrun1 += 1;
    },(1000/(allgrids.length-1)))

    setTimeout(function(){
        demo.style.opacity = '0.8'  
        demo.style.backgroundColor = 'white'
        console.log(timesrun1)}
               ,1050)
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
