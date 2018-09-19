function PeaCard() {

    //豌豆卡片图片元素
    var peaCard;
    // 卡片位置
    var peaCardX = 0;
    var peaCardY;
    //卡片大小
    var peaCardW = 100;
    var peaCarH = 120;
    //豌豆对象
    var pea;

    var backCall;
    this.setPlantsListener = function (call) {
        backCall = call;
    }

    //初始化对象
    this.init = function (paint) {
        //初始化豌豆卡片
        this.initPeaCard(paint);
    }
    //初始化豌豆卡片
    this.initPeaCard = function (paint) {
        //创建豌豆卡片元素
        peaCard = new Image();
        //图片路径
        peaCard.src = "./img/card/Peashooter.png";
        //画出豌豆卡片
        peaCard.onload = function (ev) {
            peaCardY = 0;
            paint.drawImage(peaCard,peaCardX,peaCardY,peaCardW,peaCarH/2,0,0,peaCardW,peaCarH/2);
            paint.font = "bold 16px Courier New";
            paint.fillStyle = "#000";
            paint.fillText("100",65,50);
        }
    }

    //豌豆卡片点击事件

    var isMove = false;

    this.onclick = function (x,y) {

        if(isMove == false){
            //点击中豌豆卡片
            if(x>peaCardX&&x<(peaCardX+peaCardW)&&y>peaCardY&&y<(peaCardY+peaCarH)){
                //状态修改为产出豌豆
                state = PEA;
            }
            isMove = true;
        }else {
            state = NORMAL;
            isMove = false;
        }

    }
    
    this.plantsListener = function () {
        state = NORMAL;
    }

    // 得到状态是否为产出豌豆
    this.isPea = function () {

        if(state == PEA){
            return true;
        }else{
            return false;
        }
    }

    // this.PeaListener = function () {
    //     if(state == PEA){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }

    //正常状态
    var NORMAL = 0;
    //产出豌豆状态
    var PEA = NORMAL +1;
    //灰色状态
    var FREEZE = PEA +1;
    //初始化为绿色正常状态
    var state = NORMAL;

    var backNum;

    this.addPeaListener = function (call) {
        backNum = call;
    }

    this.isFREEZE = function () {
        if( backNum() == false){
            state = FREEZE;
        }
    }


    //画豌豆卡片
    this.run = function (paint) {
        this.isFREEZE();
        // backNum();
        switch (state){
            //画正常状态豌豆卡片
            case NORMAL:
                //修改豌豆卡片为绿色
                peaCardY = 0;
                paint.drawImage(peaCard,peaCardX,peaCardY,peaCardW,peaCarH/2,0,0,peaCardW,peaCarH/2);
                paint.font = "bold 16px Courier New";
                paint.fillStyle = "#000";
                paint.fillText("100",65,50);
                break;
            case PEA:
                //修改豌豆卡片为灰色
                peaCardY = 60;
                paint.drawImage(peaCard,peaCardX,peaCardY,peaCardW,peaCarH/2,0,0,peaCardW,peaCarH/2);
                paint.font = "bold 16px Courier New";
                paint.fillStyle = "#000";
                paint.fillText("100",65,50);
                //再画豌豆
                // backCall;
                pea = new Pea();
                pea.init();
                pea.run(paint);
                break;
            case FREEZE:
                peaCardY = 60;
                paint.drawImage(peaCard,peaCardX,peaCardY,peaCardW,peaCarH/2,0,0,peaCardW,peaCarH/2);
                paint.font = "bold 16px Courier New";
                paint.fillStyle = "#000";
                paint.fillText("100",65,50);
                break;
        }

    }
}