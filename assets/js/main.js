window.onload = function () {
    var el = document.querySelector(".wrapper").querySelector(".content");
    var imgBox = document.querySelector(".wrapper").querySelector('.cover-inner');
    html2canvas(el).then(canvas => {
        var image = new Image();
        image.src = canvas.toDataURL("image/png");
        image.setAttribute('alt', imgBox.getAttribute('data-alt'))
        imgBox.appendChild(image)
    });

    var _picBtn = document.querySelector('footer .screenshots-btn');
    var _picBox = document.querySelector('.cover');
    var _closeBtn = document.querySelector('.cover .cover-close');
    var flag = true;
    // 生成按钮内容
    var initTxt = _picBtn.getAttribute('data-init-txt');
    var closeTxt = _picBtn.getAttribute('data-close-txt');
    _picBtn.addEventListener('click', function () {
        if (flag) {
            _picBox.style.display = 'block'
            this.innerHTML = closeTxt
            flag = false
        } else {
            _picBox.style.display = 'none'
            this.innerHTML = initTxt
            flag = true
        }

    })
    _closeBtn.addEventListener('click', function () {
        _picBox.style.display = 'none'
        _picBtn.innerHTML = initTxt
    })
}