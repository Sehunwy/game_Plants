function Bullet() {

    var bullet;
    this.bulletX;
    this.bulletY;
    this.bulletW = 24;
    this.bulletH = 24;
    var startX;

    this.init = function (bulletImg,x,y) {
        startX = x;
        this.bulletX = x;
        this.bulletY = y;
        bullet = bulletImg;
    }



    this.run = function (paint) {

        if(this.bulletX>=600){
            this.bulletX = startX;
        }
        this.bulletX = this.bulletX +30;
        paint.drawImage(bullet,this.bulletX,this.bulletY);
    }
}