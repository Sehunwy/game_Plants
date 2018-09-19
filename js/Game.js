function Game() {

    //画布
    var canvas;
    //画笔
    var paint;
    //地图
    var map;
    //豌豆卡片
    var peaCard;
    //创建太阳计数框
    var sunBack;
    //暂停菜单按钮
    var button;
    //豌豆
    var pea;
    //僵尸
    var zombie;
    //草地
    var sod;
    //太阳
    var sun;
    var sunX = 600;
    var sunY = 0;
    //僵尸图片
    var zombieImg;
    //游戏进度条
    var flag;

    var that;

    this.init = function () {
        that = this;
        //得到画布创建画笔
        this.initPaint();
        //初始化游戏地图
        this.initMap();
        //初始化豌豆卡片
        this.initPeaCard();
        //初始化太阳计数框
        this.initSunBack();
        //初始化暂停菜单按钮
        this.initButton();
        //初始化豌豆
        this.initPea();
        //初始化僵尸
        // this.initZombie();
        // 初始化豌豆
        this.initPea();
        //初始化界面
        // this.initBegin();
        //初始化草地
        this.initSod();
        //初始化太阳
        this.initSun(paint,sunX,sunY);
        //豌豆可生产监听
        peaCard.addPeaListener(sunBack.sunNumListener);
        //太阳减少监听
        sod.isOnclick(sunBack.cutNumListener);
        //初始化进度条
        this.initFlag();
        //游戏进度监听
        sod.flagListener(flag.addListener);
        //可种豌豆监听
        // sod.setPeaListener(peaCard.PeaListener);

    }

    //得到画布创建画笔
    this.initPaint = function () {
        //得到画布
        canvas = document.getElementById('myCanvas');
        //创建画笔
        paint = canvas.getContext('2d');
    }
    //初始化游戏地图
    this.initMap = function () {
        map = new Map();
        map.init(paint);
    }
    //初始化豌豆卡片
    this.initPeaCard = function () {
        peaCard = new PeaCard();
        peaCard.init(paint);
    }
    //初始化太阳计数框
    this.initSunBack = function () {
        sunBack = new SunBack();
        sunBack.init(paint);
    }
    //初始化暂停菜单按钮
    this.initButton = function () {
        button = new Start_EndButton();
        button.init(paint);
    }
    //初始化僵尸
    this.initZombie = function () {
        zombie = new Zombie();
        zombie.init();
    }
    //初始化豌豆
    this.initPea = function () {
        pea = new  Pea();
        pea.init();
    }
    //初始化草地
    this.initSod = function () {
        sod = new Sod();
        sod.init();
    }
    //初始化进度条
    this.initFlag = function () {
        flag = new Flag();
        flag.init();
    }



    var suns=[];
    var sunImage;
    //初始化太阳
    this.initSun = function () {
        //创建太阳的图片
        sunImage= new Image();
        sunImage.src = "./img/card/Sun.gif";
        this.initSunImg();
    }

    this.initSunImg = function () {
        sunX = Math.floor(Math.random()*350)+200;
        sun = new Sun();
        // sun.setSunListener(this.sunListener);
        sun.init(sunX,sunY,sunImage);
        suns.push(sun);
        //太阳计数监听
        suns.forEach(function (sun) {
            sun.sunListener(sunBack.addSunListener);
        })
    }

    var time = 0;

    this.run = function () {

        //获得屏幕宽度
        var width = document.body.clientWidth;
        //画布左边距屏幕左边距离
        var dis = (width-900)/2;
        //画布点击事件
        canvas.onclick =function (ev) {
            //获得画布x,y定位
            var x = ev.clientX - dis;
            var y = ev.clientY - 50;
            //执行onclick方法
            that.onclick(x,y);
        }
        // 画布鼠标移动事件
        canvas.onmousemove = function (ev) {
            //获得画布x,y定位
            var x = ev.clientX - dis;
            var y = ev.clientY - 50;
            //执行onmousemove方法
            that.onmousemove(x,y);
        }
        //run方法计数器
        time++;
        //1,地图右移
        if(time>10&&time<30){
            map.moveRight(paint);
            //当地图移到最右边，画出暂停菜单按钮和僵尸群
            if(map.mapX == 500){
                button.run(paint);

                // paint.drawImage(zombie.init(),600,300);
                // paint.drawImage(zombie.init(),580,200);
                // paint.drawImage(zombie.init(),450,150);
                // paint.drawImage(zombie.init(),600,100);
                // paint.drawImage(zombie.init(),550,400);
            }
        }
        //2,地图左移
        else if(time>30&&time<70){
            //地图左移
            map.moveLeft(paint);
            //画暂停菜单按钮
            button.run(paint);
            //当地图左移到合适位置
            if(map.mapX == 120){
                //画豌豆卡片
                peaCard.run(paint);
                //画阳光收集框
                sunBack.run(paint);
                //铺草地
                sod.run(paint);
            }
        }
        //地图铺好后
        else if(time>70){

            // 画地图
            map.run(paint);
            //画进度条
            flag.run(paint);
            //画豌豆卡片
            peaCard.run(paint);
            //画阳光收集框
            sunBack.run(paint);
            //画暂停菜单按钮
            button.run(paint);
            //画草地
            sod.run(paint);
            //鼠标点击豌豆卡片
            if(peaCard.isPea()){
                //豌豆随鼠标移动
                pea.run(paint);
            }

            if(time%30==0)
                this.initSunImg();

            for(var i=0;i<suns.length;i++){
                suns[i].run(paint);
                if(suns[i].isDead()){
                    var sun= suns[i];
                    suns.splice(i,1);
                    sun.destroy();
                    sun=null;
                }
            }
            if(flag.fullListener()){
                paint.font = "bold 38px Courier New";
                paint.fillStyle = "#00CB08";
                paint.fillText("GAME OVER",400,200);
            }
        }

    }

    this.onclick = function (x,y) {
        //点击豌豆卡片事件
        peaCard.onclick(x,y);
        //点击草地事件
        sod.onclick(x,y);
        //点击太阳事件

        for(var i = 0; i<suns.length; i++){
            suns[i].onclick(x,y);
        }
    }

    this.onmousemove = function (x,y) {
        //豌豆随鼠标移动
        pea.onmousemove(x,y);
    }

}