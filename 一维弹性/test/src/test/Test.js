var test = test || {};
test.Test = function () {
    var s = this;
    F2xContainer.call(s);
    s.initUI();
    s.init();
};
F2xExtend(test.Test, F2xContainer);
test.Test.prototype.initUI = function () {
    var s = this;
    //f2x_auto_created_init_start
    var _d0 = new test.backgroundLayer();
    _d0.name = "backgroundLayer";
    s.backgroundLayer = _d0;
    s.addChild(_d0);
    //f2x_auto_created_init_end

};
test.Test.prototype.init = function () {
    var s = this;
    s.spring = 0.1;
    s.fraction = 0.95;
    s.targetX = 320;
    s.vx = 0;

    s.ball = new test.Ball();
    s.addChild(s.ball);
    s.ball.y = 568;

    s.addEventListener(annie.Event.ENTER_FRAME, s.onEnterFrame.bind(this));
};

test.Test.prototype.onEnterFrame = function () {
    var s = this;

    var dx = s.targetX - s.ball.x;
    var ax = dx * s.spring;
    s.vx += ax;
    s.vx *= s.fraction;
    s.ball.x += s.vx;
};




