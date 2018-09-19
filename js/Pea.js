function Pea() {

    //豌豆图片元素
    var pea;
    //豌豆图片坐标
    this.canvasX;
    this.canvasY;
    //豌豆图片数组
    this.peaImg = ['./img/plants/0.gif','./img/plants/Repeater.gif'];

    var that;
    //初始化豌豆对象
    this.init = function () {
        //创建豌豆图片元素
        pea = new Image();
        //图片路径
        pea.src = this.peaImg[0];
        return pea;
    }

    //豌豆鼠标移动事件
    this.onmousemove = function (x,y) {
        that = this;
        //修改豌豆图片位置
        this.canvasX = x - 50;
        this.canvasY = y - 50;
    }

    this.plantsListener = function (paint) {
        paint.drawImage(pea,this.canvasX,this.canvasY);
    }
    //豌豆图片下标
    var index = -1;
    this.run = function (paint) {

            if(index == 1)
                index = -1;
            index++;
            //修改图片路径，使豌豆动态
            pea.src = this.peaImg[index];
            //豌豆的移动
            paint.drawImage(pea,this.canvasX,this.canvasY);
            // this.addStateListener(sod);
    }

}