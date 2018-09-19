function Sod() {

    //一行草地图片元素
    var sod1;
    //一行草地截取位置
    var sodX = 125;
    var sodY = 270;
    //一行草地截取大小
    var sodW = 0;
    var sodH = 117;
    //泥土图片元素
    var rollSoil;
    //泥土图片截取位置
    var rollSoilX = 125;
    var rollSoilY = 270;
    //泥土图片大小
    var rollSoilW = 34;
    var rollSoilH = 110;
    //草团图片元素
    var rollGrass;
    //草团位置
    var rollGrassX = 115;
    var rollGrassY = 335;
    //草团大小
    var rollGrassW = 50;
    var rollGrassH = 50;
    //豌豆数组
    this.peas = [];
    //豌豆对象
    var pea;
    //子弹数组
    this.bullets = [];
    //子弹对象
    var bullet;
    //僵尸数组
    var zombies = [];
    //僵尸对象
    var zombie;


    //草地分区
    var sodBlocks = [];
    //草地区块大小
    var sodBlockW = 83;
    var sodBlockH = 116;


    //初始化草地对象
    this.init = function () {
        //初始化草团
        this.initRollGrass();
        //初始化泥土
        this.initRollSoil();
        //初始化一行草地
        this.initSod1();
        //初始化草地区块定位的二维数组
        this.initSods();
        //初始化豌豆
        this.initPea();
        //初始化子弹
        this.initBullet();
        //初始化僵尸图片
        this.initZombieImg();
        // //初始化僵尸数组
        // this.initZombies();


    }
    //初始化草团
    this.initRollGrass = function () {
        //创建草团图片元素
        rollGrass = new Image();
        //图片路径
        rollGrass.src = "./img/bg/SodRollCap.png";
    }
    //初始化泥土
    this.initRollSoil = function () {
        //创建泥土图片元素
        rollSoil = new Image();
        //图片路径
        rollSoil.src = "./img/bg/SodRoll.png";
    }
    //初始化一行草地
    this.initSod1 = function () {
        //创建一行草地图片元素
        sod1 = new Image();
        //图片路径
        sod1.src = "./img/bg/sod1row.png";
    }

    //初始化豌豆
    this.initPea = function () {
        pea = new  Pea();
        pea.init();
    }


    var bulletImg;
    var bulletX = 0;
    var bulletY = 0;
    //初始化子弹
    this.initBullet = function () {
        bulletImg = new Image();
        bulletImg.src = "./img/plants/PB00.gif";
    }

    var bulletImgs = [];

    this.initBulletImg = function (bulletX,bulletY) {
        bullet = new Bullet();
        bullet.init(bulletImg,bulletX,bulletY);
        bulletImgs.push(bullet);
    }

    //初始化草地区块定位的二维数组
    this.initSods = function () {
        //地图位置区块二维数组
        var state = true;
        var x;
        var y = sodY;
        var index;
        for(var i = 0; i<Math.floor(sodH/sodBlockH);i++) {
            y = y + i * sodBlockH;
            for (var j = 0; j < Math.floor(755/sodBlockW); j++) {
                x = sodX + j*sodBlockW;
                index = i * Math.floor(755/sodBlockW) + j;
                sodBlocks[index] = {X: x, Y: y, W: sodBlockW, H: sodBlockH, State: state};
            }
        }
    }
    //初始化僵尸
    var zombieImgs = [];
    var DeadBox = [];
    var zombieImg;
    this.initZombieImg = function () {
        zombieImg = new ZombieImg();
        zombieImg.init();
        var buffer = zombieImg.zombies;
        for(var i = 0; i<buffer.length; i++){
            zombieImgs[i] = buffer[i]
        }
        var bufferD = zombieImg.zombieDeadBox;
        for(var i = 0; i<bufferD.length; i++){
            DeadBox[i] = bufferD[i];
        }
        this.initZombie();
    }


    this.initZombie = function () {
        zombie = new Zombie();
        zombie.init(zombieImgs,DeadBox)
        zombies.push(zombie);
    }

    var backCall;
    this.flagListener = function (call) {
        backCall = call;
    }

    var buffer;
    //草地点击事件_放豌豆
    var cutSun;
    this.isOnclick = function (call) {
        cutSun = call;
    }

    // var setPea;
    // this.setPeaListener = function (call) {
    //     setPea = call;
    // }

    this.onclick = function (x,y) {
        // if(setPea()){
            //遍历每个草地区块
            for(var i = 0; i<sodBlocks.length; i++){
                //如果在区块内
                if(x>sodBlocks[i].X&&x<(sodBlocks[i].X+sodBlocks[i].W)&&y>sodBlocks[i].Y&&y<(sodBlocks[i].Y+sodBlocks[i].H)){
                    //并且草地状态为true,没有放置植物
                    if(sodBlocks[i].State == true) {
                        // backCall;
                        // 存储植物位置坐标
                        var bufferX = sodBlocks[i].X;
                        var bufferY = sodBlocks[i].Y - 62 + sodBlocks[i].H / 2;
                        buffer = {X: bufferX, Y: bufferY};
                        this.peas.push(buffer);
                        //创建子弹图片对象
                        bulletX = sodBlocks[i].X + 30;
                        bulletY = sodBlocks[i].Y - 62 + sodBlocks[i].H / 2;
                        this.initBulletImg(bulletX,bulletY);
                        //修改草地区块状态为false，已放置植物
                        sodBlocks[i].State = false;
                        time = 1;
                        cutSun();
                    }
                }
            }
        // }

    }
    //铺草地的状态
    var SOD_ROOL = 0;
    //一行草地状态
    var SOD1 = SOD_ROOL + 1;
    var SOD3 = SOD1 + 1;
    //初始化为铺草地状态
    this.state = SOD_ROOL;



    //豌豆图片下标
    var peaIndex = -1;
    //画各个状态下的草地
    var time = 0;
    this.run = function (paint) {
        time++;
        switch (this.state){
            //画铺草地的动画
            case SOD_ROOL:
                if(sodW >=740){
                    sodW = 755;
                    //铺完后修改草地为一行草地状态
                    this.state = SOD1;
                }else{
                    //画铺草地动态图
                    sodW = sodW + 50;
                    paint.drawImage(sod1,0,0,sodW,sodH,sodX,sodY,sodW,sodH);
                    rollSoilX = rollSoilX + 50;
                    paint.drawImage(rollSoil,rollSoilX,rollSoilY,rollSoilW,rollSoilH);
                    rollGrassX = rollGrassX + 50;
                    paint.drawImage(rollGrass,rollGrassX,rollGrassY,rollGrassW,rollGrassH);
                }
                break;
            case SOD1:
                //画一行草地
                paint.drawImage(sod1,0,0,sodW,sodH,sodX,sodY,sodW,sodH);
                //按peas存储的位置，在草地上画出豌豆
                this.peas.forEach(function (p) {
                    if(peaIndex == 1)
                        peaIndex = -1;
                    peaIndex++;
                    var buffer = pea.init();
                    buffer.src = pea.peaImg[peaIndex];
                    paint.drawImage(buffer,p.X,p.Y);
                })
                //按bulletImgs存储的子弹图片对象，画出子弹
                bulletImgs.forEach(function (bullet) {
                    bullet.run(paint);
                })
                // 画出僵尸
                var radom = Math.floor(Math.random()*1000);
                if(radom>990){
                    this.initZombie();
                }

                for(var i = 0; i<zombies.length; i++){
                    zombies[i].run(paint);
                    zombies[i].collision(bulletImgs);
                    if(zombies[i].isDestroy()){
                        backCall();
                        var zombie = zombies[i];
                        zombies.splice(i,1);
                        zombie.destroy();
                        zombie = null;
                    }
                }

                break;
            case SOD3:
                break;
        }
    }

}