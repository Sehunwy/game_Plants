function Start_EndButton() {

    //菜单按钮图片元素
    var menu;
    //暂停按钮图片元素
    var endButton;

    //初始化
    this.init = function (paint) {
        //1,初始化菜单按钮
        this.initMenu(paint);
        //2,初始化暂停按钮
        this.initEnd(paint);
    }

    //初始化菜单按钮
    this.initMenu = function (paint) {
        //创建菜单按钮图片元素
        menu = new Image();
        //菜单按钮图片路径
        menu.src = "./img/bg/Button.png";
        //画菜单按钮
        menu.onload = function (ev) {
            paint.drawImage(menu,674,0);
            paint.font = "bold 16px Courier New";
            paint.fillStyle = "#00CB08";
            paint.fillText("暂停",710,28);
        }
    }
    //初始化暂停按钮
    this.initEnd = function (paint) {
        //创建暂停按钮图片元素
        endButton = new Image();
        //暂停按钮图片路径
        endButton.src = "./img/bg/Button.png";
        //画暂停按钮
        endButton.onload = function (ev) {
            paint.drawImage(menu,787,0);
            paint.font = "bold 16px Courier New";
            paint.fillStyle = "#00CB08";
            paint.fillText("菜单",823,28);
        }
    }

    //画暂停菜单按钮
    this.run = function (paint) {
        paint.drawImage(menu,674,0);
        paint.font = "bold 16px Courier New";
        paint.fillStyle = "#00CB08";
        paint.fillText("暂停",710,28);
        paint.drawImage(menu,787,0);
        paint.font = "bold 16px Courier New";
        paint.fillStyle = "#00CB08";
        paint.fillText("菜单",823,28);
    }
}