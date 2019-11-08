//Roboto-Regular
//var fontName = "https://cdn.glitch.com/6a98ee39-b203-42c3-b9d2-3e2213e5f4c5%2FRoboto-Regular.ttf?v=1573066194338"
//Montserrat-Regular
var fontName = "https://cdn.glitch.com/6a98ee39-b203-42c3-b9d2-3e2213e5f4c5%2FMontserrat-Regular.ttf?v=1573081292950"
//Raleway-Black
// var fontName = "https://cdn.glitch.com/6a98ee39-b203-42c3-b9d2-3e2213e5f4c5%2FRaleway-Black.ttf?v=1573144641112"
opentype.load(fontName, function(err, font) {
    window.font = font
    if (err) {
        alert("Font could not be loaded: " + err);
    } else {
        render(font)
    }
}
             );

// console.log(font)
var snapStrength = Math.random()*80;
snapStrength = 60
var snapDistance = 50;
var snapX = 0;
var snapY = 0;
function doSnap(path) {
    var i;
    var strength = snapStrength / 100.0;
    for (i = 0; i < path.commands.length; i++) {
        var cmd = path.commands[i];
        if (cmd.type !== "Z") {
            cmd.x = snap(cmd.x + snapX, snapDistance, strength) - snapX;
            cmd.y = snap(cmd.y + snapY, snapDistance, strength) - snapY;
        }
        if (cmd.type === "Q" || cmd.type === "C") {
            cmd.x1 = snap(cmd.x1 + snapX, snapDistance, strength) - snapX;
            cmd.y1 = snap(cmd.y1 + snapY, snapDistance, strength) - snapY;
        }
        if (cmd.type === "C") {
            cmd.x2 = snap(cmd.x2 + snapX, snapDistance, strength) - snapX;
            cmd.y2 = snap(cmd.y2 + snapY, snapDistance, strength) - snapY;
        }
    }
}

function snap(v, distance, strength) {
    return v * (1.0 - strength) + strength * Math.round(v / distance) * distance;
}


function render(font) {
    var snapPath = font.getPath("ZiJia Chen", 15, 218, 120);
    snapPath.fill = '#555'
    doSnap(snapPath);
    var snapCtx = document.getElementById("snap").getContext("2d");
    snapCtx.clearRect(0, 0, 940, 300);
    snapPath.draw(snapCtx);
}


document.addEventListener("mousemove", function(event){
    var clientWpercent = 10 + event.clientX/document.body.clientWidth * 90
    var clientHpercent = 10 + event.clientY/document.body.clientHeight * 90
    snapStrength = clientHpercent
    snapDistance = clientWpercent

    render(font)
}
                         );
