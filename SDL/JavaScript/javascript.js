
function changeImage() {
    var image = document.getElementById('semestre');
    if (image.src.match("S1.png")) {
        image.src = "../image/S2.png";
    }
    else if (image.src.match("S1.png")) {
        image.src = "../image/S2.png";
    }
    else {
        image.src = "../image/S1.png";
    }
}
function imageClick(url){
    window.location = url
}

