$(function () {

    //Fastclick JS - Remove 300ms delay on click
    FastClick.attach(document.body);

    // Handler for popup-box
    $("[data-trigger='popup']").click(function () {
        $(".app-inner").toggleClass("popup-open");
        $(".popup").toggleClass("open");
        $(".navbar").toggleClass("open");
    });
});