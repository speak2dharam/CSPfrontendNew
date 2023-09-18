$(window).on('scroll', function () {
    if ($(this).scrollTop() > 200) {
        $("header").addClass("stickyheader");
        $("#loginFormsctn").slideUp();
        $("#loginshort").slideDown();
    }
    else {
        $("header").removeClass("stickyheader");
        $("#loginFormsctn").slideDown();
        $("#loginshort").slideUp();
    }
});

function showloginform() {
    $("#loginFormsctn").toggle();
    $("#loginshort").toggle();
}