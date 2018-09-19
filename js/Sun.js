function Sun() {
    var sunX;
    var sunY;
    var sunW = 76;
    var sunH = 75;

    var sun;

    this.init = function (x,y,img) {
        sunX = x;
        sunY = y;
        sun=img;
    }

    var callBack;
    this.setSunListener=function (call) {
        callBack=call;
    }

    this.onclick = function (x,y) {
        if(x>sunX&&x<sunX+sunW&&y>sunY&&y<sunY+sunH){
            sunX = 110;
            sunY = 0;
            sunW = sunW/2;
            sunH = sunH/2;
            state = SUN_GET;
            addSun();
        }
    }

    var addSun;
    this.sunListener = function (call) {
        addSun = call;
    }

    var SUN_FALL = 0;
    var SUN_GET = SUN_FALL + 1;
    var state = SUN_FALL;

    //随机的下落X坐标
    this.randomX = function () {
        var random = Math.floor(Math.random()*600)+200;
        sunX = random;
    }

    this.run = function (paint) {
        switch (state){
            case SUN_FALL:
                    sunW = 76;
                    sunH = 75;
                    sunY = sunY + 5;
                    paint.drawImage(sun,sunX,sunY,sunW,sunH);
                break;
            case SUN_GET:
                sunW = sunW + 1;
                    sunH = sunH + 1;
                    paint.drawImage(sun,sunX,sunY,sunW,sunH);
                break;
        }
    }
    
    this.isDead=function () {
        var isDead=false;
        switch (state){
            case SUN_FALL:
                if(sunY >=600){
                    isDead=true;
                }
                break;
            case SUN_GET:
                if(sunW>=50){
                    isDead=true;
                }
                break;
        }

        return isDead;
    }
    
    this.destroy=function () {
        sun=null;
        callBack=null;
    }
}