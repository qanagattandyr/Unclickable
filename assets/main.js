$(document).ready(function()
{
    console.log("Aloha!");
    
    var wid = $("#canvas").width();
    var hei = $("#canvas").height();
    
    $("#ball").mouseover(function()
    {
        var offX = Math.floor(Math.random() * wid);//offset X
        var offY = Math.floor(Math.random() * hei);

        // #ball
        // {
        //     left: 100px;
        // }
        $("#ball").css("left", offX + "px");
        $("#ball").css("top", offY + "px");
    });

});