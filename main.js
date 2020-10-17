
$(document).ready(function () {

   

    $("#gameThree").click(function(){
        $(".card").hide();
        $("#qOne").show();
    });

    $(".qOneAns").click(function(){
        $("#qOne").hide();
        $("#qTwo").show();        
    });

    $(".qTwoAns").click(function(){
        $("#qTwo").hide();
        $("#qThree").show();
    });
    $(".qThreeAns").click(function(){
        $("#qThree").hide();
        $("#qFour").show();
    });
    $(".qFourAns").click(function(){
        $("#qFour").hide();
        $("#qFive").show();
    });
    $(".qFiveAns").click(function(){
        $("#qFive").hide();
        $("#ansResult").show();
        
    });

});
