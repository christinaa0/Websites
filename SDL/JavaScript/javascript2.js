function changeImage() {
    var image = document.getElementById('semestre');
    if (image.src.match("S3.png")) {
        image.src = "../image/S4.png";
    }
    else if (image.src.match("S3.png")) {
        image.src = "../image/S4.png";
    }
    else {
        image.src = "../image/S3.png";
    }
}
function imageClick(url){
    window.location = url
}