$(document).ready(function(){
    $("#animation").hover(function(){
        $(this).animate({height: "200px"});
    });

    $("#animation").mouseout(function(){
        $(this).animate({height: "100px"});
    });
})
