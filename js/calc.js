(function(window) {

    var calc = {};

    calc.result = "";

    calc.display = document.getElementById('display');

    calc.sevenButton = function() {
        this.display.value += document.getElementById('seven').firstChild.nodeValue;

    };


    calc.eightButton = function() {
        this.display.value += document.getElementById('eight').firstChild.nodeValue;
    };

    calc.nineButton = function() {
        this.display.value += document.getElementById('nine').firstChild.nodeValue;
    };

    calc.plusButton = function() {
        this.display.value += document.getElementById('plus').firstChild.nodeValue;
    };

    calc.fourButton = function() {
        this.display.value += document.getElementById('four').firstChild.nodeValue;
    };

    calc.fiveButton = function() {
        this.display.value += document.getElementById('five').firstChild.nodeValue;
    };

    calc.sixButton = function() {
        this.display.value += document.getElementById('six').firstChild.nodeValue;
    };

    calc.oneButton = function() {
        this.display.value += document.getElementById('one').firstChild.nodeValue;
    };

    calc.twoButton = function() {
        this.display.value += document.getElementById('two').firstChild.nodeValue;
    };


    calc.threeButton = function() {
        this.display.value += document.getElementById('three').firstChild.nodeValue;
    };

    calc.minusButton = function() {
        this.display.value += document.getElementById('minus').firstChild.nodeValue;
    };

    calc.divideButton = function() {
        this.display.value += document.getElementById('divide').firstChild.nodeValue;
    };

    calc.zeroButton = function() {
        this.display.value += document.getElementById('zero').firstChild.nodeValue;
    };

    calc.dotButton = function() {
        this.display.value += document.getElementById('dot').firstChild.nodeValue;
    };
    calc.multipleButton = function() {
        this.display.value += document.getElementById('multiple').firstChild.nodeValue;
    };

    calc.eraseButton = function() {

        this.display.value = "";

    };

    calc.delButton = function() {


        var removeNum = this.display.value.length;


        if (this.display.value !== "") {

            removeNum = removeNum - 1;

            this.display.value = this.display.value.slice(0, removeNum);
        }


    };



    calc.equalButton = function() {


        this.result = eval(this.display.value);

        this.display.value = this.result;



    };

    window.calc = calc;


})(window);
