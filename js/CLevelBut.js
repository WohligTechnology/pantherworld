function CLevelBut(iXPos, iYPos, szText, oSprite, bActive, oParentContainer) {
    var _bActive;
    var _aCbCompleted;
    var _aCbOwner;
    var _aButton = new Array();
    var _aParams = [];

    var _oLevelText;
    var _oButton;
    var _oContainer;
    var _oParentContainer;

    this._init = function (iXPos, iYPos, szText, oSprite, bActive) {
        _aCbCompleted = new Array();
        _aCbOwner = new Array();

        _oContainer = new createjs.Container();
        _oParentContainer.addChild(_oContainer);

        _oButton = createBitmap(oSprite);

        _oButton.regX = oSprite.width * 0.5;
        _oButton.regY = oSprite.height * 0.5;

        _oButton.mouseEnabled = bActive;
        _oButton.x = iXPos;
        _oButton.y = iYPos;

        _bActive = true;

        if (!s_bMobile) {
            _oContainer.cursor = "pointer";
        }

        _oContainer.addChild(_oButton);
        _aButton.push(_oButton);

        _oLevelText = new createjs.Text(szText, "24px " + SECONDARY_FONT, TEXT_COLOR);
        _oLevelText.x = iXPos;
        _oLevelText.y = iYPos - 2;
        _oLevelText.textAlign = "center";
        _oLevelText.textBaseline = "middle";
        _oLevelText.lineWidth = 200;
        _oContainer.addChild(_oLevelText);

        this._initListener();
    };

    this.unload = function () {
        _oContainer.off("mousedown", this.buttonDown);
        _oContainer.off("pressup", this.buttonRelease);

        _oContainer.removeChild(_oButton);
    };

    this._initListener = function () {
        _oContainer.on("mousedown", this.buttonDown);
        _oContainer.on("pressup", this.buttonRelease);
    };

    this.viewBut = function (oButton) {
        _oContainer.addChild(oButton);
    };

    this.addEventListener = function (iEvent, cbCompleted, cbOwner) {
        _aCbCompleted[iEvent] = cbCompleted;
        _aCbOwner[iEvent] = cbOwner;
    };

    this.addEventListenerWithParams = function (iEvent, cbCompleted, cbOwner, aParams) {
        _aCbCompleted[iEvent] = cbCompleted;
        _aCbOwner[iEvent] = cbOwner;
        _aParams = aParams;
    };

    this.ifClickable = function () {
        if (_oContainer.mouseEnabled === true) {
            return 1;
        }
        return 0;
    };

    this.setActive = function (iLevel, bActive) {
        _bActive = bActive;
        _aButton[iLevel].gotoAndStop("state_" + _bActive);
        _aButton[iLevel].mouseEnabled = true;
    };

    this.buttonRelease = function () {
        if (!_bActive) {
            return;
        }

        if (_aCbCompleted[ON_MOUSE_UP]) {
            _aCbCompleted[ON_MOUSE_UP].call(_aCbOwner[ON_MOUSE_UP], _aParams);
        }
    };

    this.buttonDown = function () {
        if (_aCbCompleted[ON_MOUSE_DOWN]) {
            _aCbCompleted[ON_MOUSE_DOWN].call(_aCbOwner[ON_MOUSE_DOWN], _aParams);
        }
    };

    this.setPosition = function (iXPos, iYPos) {
        _oContainer.x = iXPos;
        _oContainer.y = iYPos;
    };

    this.setVisible = function (bVisible) {
        _oContainer.visible = bVisible;
    };

    _oParentContainer = oParentContainer;
    this._init(iXPos, iYPos, szText, oSprite, bActive, oParentContainer);
}