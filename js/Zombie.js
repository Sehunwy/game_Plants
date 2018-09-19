function Zombie() {

    //僵尸x坐标
    var zombieX = 900;
    var zombieY = 200;
    //僵尸被打图片数组
    var shoots = [];
    var zombies=[];
    var zombieDeadBox=[];
    var zombieW = 85;
    var zombieH = 120;
    var numDead;
    //初始化对象
    this.init = function (zombieImg,DeadBox) {

        numDead = DeadBox.length;

        for(var i = 0; i<zombieImg.length; i++){
            zombies[i] = zombieImg[i];
        }
        for(var i =0; i<numDead;i++){
            zombieDeadBox[i] = DeadBox[i];
        }

    }

    //正常行走的状态
    var NORMAL = 0;
    //被击中的状态
    var SHOOT = NORMAL + 1;
    //吃的状态
    var EAT = SHOOT + 1;
    //死亡状态
    var DEAD = EAT + 1;
    //状态初始化为正常行走
    this.state = NORMAL;

    //图片下标
    var index = 0;

    //判断僵尸与子弹是否发生碰撞
    var isCollision;

    this.collision = function (Bullets) {
        isCollision = false;
        Bullets.forEach(function (Bullet) {
            if ((Bullet.bulletX+Bullet.bulletW)>zombieX&&Bullet.bulletX<(zombieX+zombieW)){
                isCollision = true;
                return;
            }
        })
        return isCollision;
    }

    //画出僵尸
    var time = 0;
    var life = 20;

    var backCall;
    this.flagListener = function (call) {
        backCall = call;
    }

    this.run = function (paint) {
        if(isCollision)
            this.state = DEAD;
        switch (this.state) {

            //画正常行走的僵尸
            case NORMAL:

                // 僵尸图片坐标更改，得到动态

                if(index>=4)
                    index =0;

                //僵尸向左走
                zombieX = zombieX - 5;
                paint.drawImage(zombies[index],zombieX,zombieY,zombieW,zombieH);
                index++;
                break;
            //画出被击中的僵尸
            case SHOOT:
                backCall();
                break;
            //画出吃豌豆的僵尸
            case EAT:
                break;
            //画出死亡的僵尸
            case DEAD:
                time++;
                if(time>life){
                    // backCall();
                    this.state = SHOOT;
                    break;
                }
                if(index>=numDead){
                    index = 0;
                }
                //僵尸向左走
                zombieX = zombieX - 5;
                paint.drawImage(zombieDeadBox[index],zombieX,200);
                index++;
                break;
        }
    }

    this.isDestroy = function () {
        var isDes = false;
        if(this.state == SHOOT)
            isDes = true;
        return isDes;
    }

    this.destroy = function () {
        zombieImgs = null;
        zombieDeadBox = null;
        backCall = null;
    }
}