function Flag() {

    var flagBack;
    var flagBackX = 600;
    var flagBackY = 570;
    var flag;
    var flagX = 600;
    var flagY = 570;
    var flagW = 0;
    var flagH = 21;
    var flagTitle;
    var flagTitleX = 650;
    var flagTitleY = 570;

    this.init = function () {
        flagBack = new Image();
        flagBack.src = "./img/bg/FlagMeterEmpty.png";
        flag = new Image();
        flag.src = "./img/bg/FlagMeterFull.png"
        flagTitle = new Image();
        flagTitle.src = "./img/bg/FlagMeterLevelProgress.png";

    }


    this.addListener = function () {
        if(flagW >=157)
            flag = 157;
        flagW = flagW + 30;
        console.log("调用")
    }

    this.fullListener = function () {
        var full = false;
        if(flagW>=160){
            full = true;
        }
        return full;
    }

    this.run = function (paint) {

        paint.drawImage(flagBack,flagBackX,flagBackY);
        paint.drawImage(flag,flagX,flagY,flagW,flagH);
        paint.drawImage(flagTitle,flagTitleX,flagTitleY);
        console.log(flagW)
    }
}