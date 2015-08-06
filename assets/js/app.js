$(function () {
    //Prevent 'bounce’ effect when scrolling past the top/bottom
    //document.addEventListener('touchmove', function (event) {
    //    event.preventDefault();
    //}, false);

    //Fastclick JS - Remove 300ms delay on click
    FastClick.attach(document.body);

    // Handler for popup
    $("[data-trigger='popup']").click(function () {
        $(".app-inner").toggleClass("popup-open");
        $(".popup").toggleClass("open");
        $(".navbar").toggleClass("open");
    });
});