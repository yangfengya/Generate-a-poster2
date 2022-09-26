window.onload = function () {
    var el = document.querySelector(".wrapper").querySelector(".content")
    var imgBox = document.querySelector(".wrapper").querySelector('.cover-inner')
    var downBtn = document.querySelector('.down')
    // 判断微信/qq内置浏览器
    function is_weixn() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            return true;
        } else {
            return false;
        }
    }

    function is_qq() {
        var sUserAgent = navigator.userAgent.toLowerCase();
        if (sUserAgent.match(/QQ/i) == 'qq') {
            return true
        } else {
            return false
        }
    }
    html2canvas(el).then(canvas => {
        var image = new Image()
        image.src = canvas.toDataURL("image/png")
        imgBox.appendChild(image)
        if (is_weixn() || is_qq()) {
            downBtn.innerHTML = '长按图片保存'
            document.querySelector(".cover").classList.add('show')
        } else {
            downBtn.setAttribute('href', image.src)
        }
    });
}