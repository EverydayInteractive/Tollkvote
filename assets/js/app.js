$(function () {

    /*** Fastclick JS - Remove 300ms delay on click ***/
    FastClick.attach(document.body);

    /*** Handler for popup-box **/
    $("[data-trigger='popup']").click(function () {
        $(".app-inner").toggleClass("popup-open");
        $(".popup").toggleClass("open");
        $(".navbar").toggleClass("open");
    });

    /*** Switchery initializer & handler ***/
    //Initializer
    var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

    elems.forEach(function (html) {
        var switchery = new Switchery(html, { color: '#2ecc71' });
    });

    //Get state of #switch-spirits
    var changeCheckbox1 = document.querySelector('#switch-spirits');
    changeCheckbox1.onchange = function () {
        calculateDeclareState();
    };

    //Get state of #switch-tobacco
    var changeCheckbox2 = document.querySelector('#switch-tobacco');
    changeCheckbox2.onchange = function () {
        calculateDeclareState();
    };

    /*** Powerange initializer & handler ***/
    //Initalize wine-slider
    var elem = document.querySelector('.js-range1');
    var init = new Powerange(elem, { step: 0.75, min: 0, max: 4.5, start: 0, decimal: true, hideRange: true });

    wineValue = 0;
    $(".js-range1").change(function () {
        wineValue = this.value;
        $(".wine-state").text(wineValue + " L");
        calculateDeclareState();
    });

    //Initalize beer-slider
    var elem = document.querySelector('.js-range2');
    var init = new Powerange(elem, { step: 0.5, min: 0, max: 6.5, start: 0, decimal: true, hideRange: true });

    beerValue = 0;
    $(".js-range2").change(function () {
        beerValue = this.value;
        $(".beer-state").text(beerValue + " L");
        calculateDeclareState();
    });

    /** Calculate DeclareState **/
    function calculateDeclareState() {
        if ((changeCheckbox1.checked && !changeCheckbox2.checked) || (changeCheckbox2.checked && !changeCheckbox1.checked)) {
            // If tobacco OR spirits is true
            maxWineAndBeerLiter = 5.0;
        } else if (changeCheckbox1.checked && changeCheckbox2.checked) {
            // If tobacco AND spirits is true
            maxWineAndBeerLiter = 3.5;

        } else {
            // If not tobacco AND/OR spirits is true
            maxWineAndBeerLiter = 6.5;
        };

        if (parseFloat(wineValue) + parseFloat(beerValue) > maxWineAndBeerLiter) {
            goodsToDeclare(true);
        } else {
            goodsToDeclare(false);
        };
    };


    /*** What to call this? Use goodsToDeclare(true/false); to call function ***/
    function goodsToDeclare(DeclareState) {
        var goodsToDeclareClass = "goodsToDeclare";
        if (DeclareState) {
            $("body").addClass(goodsToDeclareClass);
            $(".toll-condition").text("Varer å fortolle");
        } else {
            $("body").removeClass(goodsToDeclareClass);
            $(".toll-condition").text("Intet å fortolle");
        };
    };
});