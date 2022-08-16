window.onload = function () {
    var el = document.querySelector(".wrapper").querySelector(".content")
    var imgBox = document.querySelector(".wrapper").querySelector('.cover')
    html2canvas(el).then(canvas => {
        var image = new Image();
        image.src = canvas.toDataURL("image/png");
        imgBox.appendChild(image)
    });
}