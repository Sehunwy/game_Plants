function ZombieImg() {

    //僵尸图片数组
    zombieImgs = ['./img/Zombie/Zombie01.png','./img/Zombie/Zombie06.png','./img/Zombie/Zombie08.png','./img/Zombie/Zombie09.png'];
    zombieDead = ['./img/Zombie/ZombieDie.gif','./img/Zombie/ZombieHead.gif','./img/Zombie/ZombieLostHead.gif'];
    this.zombies=[];
    var num=zombieImgs.length;
    this.zombieDeadBox=[];
    var numDead=zombieDead.length;
    //初始化对象
    this.init = function () {
        for(var i=0;i<numDead;i++){
            var img = new Image();
            img.src=zombieDead[i];
            this.zombieDeadBox.push(img);
        }
        for(var i=0;i<num;i++){
            var img = new Image();
            img.src=zombieImgs[i];
            this.zombies.push(img);
        }
    }
}