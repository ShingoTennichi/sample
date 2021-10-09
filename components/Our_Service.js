$(function () {
    $("#sub img").on("click", function () {
        img = $(this).attr("src");
        $("#sub li").removeClass("current");
        $(this).parent().addClass("current");
        $("#main img").fadeOut(50, function () {
            $("#main img").attr("src", img).on("load", function () {
                $(this).fadeIn();
            });
        });
    });
});
