$(document).ready(() => {
    setTimeout(() => {
        $(".loading-screen i").html("Nice :)");
        setTimeout(() => $(".loading-screen").addClass("loaded"), 500);
    }, 1000);
});