function SunBack() {

    var sunBack;

    var sunNum = 175;

    this.init = function (paint) {

        //创建太阳花计数框
        sunBack = new Image();
        sunBack.src = "./img/bg/SunBack.png";
        sunBack.onload = function (ev) {
            paint.drawImage(sunBack,110,0);
            paint.font = "bold 22px Courier New";
            paint.fillStyle = "#000";
            paint.fillText(sunNum,165,25);
        }
    }

    this.addSunListener = function () {
        sunNum = sunNum + 25;
    }

    this.sunNumListener = function () {
        if(sunNum >=100)
            return true;
        else
            return false;
    }
    this.cutNumListener = function () {
        sunNum = sunNum - 100;
    }

    this.run = function (paint) {

        paint.drawImage(sunBack,110,0);
        paint.font = "bold 22px Courier New";
        paint.fillStyle = "#000";
        paint.fillText(sunNum,165,25);
    }
}