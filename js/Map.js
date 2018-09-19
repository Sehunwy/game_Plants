function Map() {

    //地图图片元素
    var map;
    //地图大小
    var mapW = 900;
    var mapH = 600;
    //地图位置
    this.mapX = 120;
    var mapY = 0;

    this.init = function (paint) {
        //初始化地图
        this.initMap(paint);
        // //创建地图区块二维数组
        // this.initMapBlocks();
    }

    //初始化地图
    this.initMap = function (paint) {
        //创建地图图片元素
        map = document.createElement('img');
        //图片路径
        map.src = "./img/bg/background1unsodded.jpg";
        //画出图片
        map.onload = function (ev) {
            paint.drawImage(map,this.mapX,mapY,mapW,mapH,0,0,900,600);
        }
    }


    //地图右移
    this.moveRight = function (paint) {

        if(this.mapX <500){
            this.mapX = this.mapX + 30;
            paint.drawImage(map,this.mapX,mapY,mapW,mapH,0,0,900,600);
        }else{
            this.mapX = 500;
            paint.drawImage(map,this.mapX,mapY,mapW,mapH,0,0,900,600);

        }
        return this.mapX;
    }
    //地图左移
    this.moveLeft = function (paint) {
        if(this.mapX > 120){
            this.mapX = this.mapX - 30;
            paint.drawImage(map,this.mapX,mapY,mapW,mapH,0,0,900,600);

        }else{
            this.mapX = 120;
            paint.drawImage(map,this.mapX,mapY,mapW,mapH,0,0,900,600);
        }
        return this.mapX;
    }

    //画出地图
    this.run = function (paint) {
        paint.drawImage(map,this.mapX,mapY,mapW,mapH,0,0,900,600);

    }

}