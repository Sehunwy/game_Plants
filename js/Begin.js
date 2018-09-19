function Begin() {

    //开始背景图片
    var beginBg;
    //开始背景图片大小
    var beginBgX = 900;
    var beginBgY = 600;

    //开始冒险吧
    var start;
    //图片截取坐标
    var startX = 0;
    var startY;
    //截取图片大小
    var startW = 331;
    var startH = 146;

    //挑战模式
    var challenges;
    //图片截取坐标
    var challengesX = 0;
    var challengesY = 0;
    //截取图片大小
    var challengesW = 313;
    var challengesH = 131;

    var menu;

    var buffer;

    var map;

    this.init = function (paint) {

        startY = 0;
        buffer = paint;
        beginBg = new Image();
        beginBg.src = "./img/bg/Surface.png";

        start = new Image();
        start.src = "./img/bg/SelectorScreenStartAdventur.png";

        challenges = new Image();
        challenges.src = "./img/bg/SelectorScreenSurvival.png";


        beginBg.onload = function (ev) {
            paint.drawImage(beginBg,0,0);

        }
        start.onload =function (ev) {
            paint.drawImage(start,startX,startY,startW,startH,470,80,331,146);
        }
        challenges.onload = function () {
            paint.drawImage(challenges,challengesX,challengesY,challengesW,challengesH,470,200,313,131);
        }
    }

    var NORMAL = 0;
    var STRAT = NORMAL + 1;
    var CHALLENGES = STRAT + 1;
    var BEGIN = CHALLENGES + 1;
    var state = NORMAL;



    this.onclick = function (x,y) {
        switch (state){
            case NORMAL:
                //点击事件_开始冒险吧
                if(x>=480&&x<=800&&y>=80&&y<=200){
                    startY = 146;
                    paint.drawImage(start,startX,startY,startW,startH,470,80,331,146);

                    menu = new Image();
                    menu.src = "./img/bg/OptionsMenuback8.png";

                    menu.onload = function (ev) {
                        paint.drawImage(menu,240,54);
                        paint.font = "bold 22px Courier New";
                        paint.fillStyle = "#FC6";
                        paint.fillText("第一大关 >>",390,210);
                        paint.font = "bold 15px MingLiU";
                        paint.fillStyle = "#FFF";
                        paint.fillText("第一关",370,250);
                        paint.fillText("第三关",370,280);
                        paint.fillText("第五关",370,310);
                        paint.fillText("第七关",370,340);
                        paint.fillText("第九关",370,370);
                        paint.fillText("第二关",485,250);
                        paint.fillText("第四关",485,280);
                        paint.fillText("第六关",485,310);
                        paint.fillText("第八关",485,340);
                        paint.fillText("第十关",485,370);
                        paint.font = "bold 36px Courier New";
                        paint.fillStyle = "#FC6";
                        paint.fillText("返   回",380,500);
                        state = STRAT;
                    }
                }
                //点击事件_玩玩小游戏
                if(x>=480&&x<=800&&y>=220&&y<=300) {
                    challengesY = challengesY + challengesH;
                    paint.drawImage(challenges, challengesX, challengesY, challengesW, challengesH, 470, 200, 313, 131);

                    menu = new Image();
                    menu.src = "./img/bg/OptionsMenuback8.png";

                    menu.onload = function (ev) {
                        paint.drawImage(menu, 240, 54);
                        paint.font = "bold 22px Courier New";
                        paint.fillStyle = "#FC6";
                        paint.fillText("第一大关 >>", 390, 210);
                        paint.font = "bold 15px MingLiU";
                        paint.fillStyle = "#FFF";
                        paint.fillText("第一关", 385, 250);
                        paint.fillText("第三关", 385, 280);
                        paint.fillText("第五关", 385, 310);
                        paint.fillText("第七关", 385, 340);
                        paint.fillText("第九关", 385, 370);
                        paint.fillText("第二关", 465, 250);
                        paint.fillText("第四关", 465, 280);
                        paint.fillText("第六关", 465, 310);
                        paint.fillText("第八关", 465, 340);
                        paint.fillText("第十关", 465, 370);
                        paint.font = "bold 36px Courier New";
                        paint.fillStyle = "#FC6";
                        paint.fillText("返   回",380,500);
                        state = CHALLENGES;
                    }
                }
                break;
            case STRAT:
                //点击事件_第一关
                if(x>=380&&x<=420&&y>=235&&y<=250){
                    state = BEGIN;
                    this.run();
                }
                if(x>=380&&x<=500&&y>=480&&y<=510){
                    this.init(paint);
                    state = NORMAL;
                }
                break;
            case CHALLENGES:
                if(x>=380&&x<=500&&y>=480&&y<=510){
                    this.init(paint);
                    state = NORMAL;
                }
                break;
            case BEGIN:
                break;
        }



    }

    this.run = function () {
        map = new Map();
        map.init(paint);
    }
}