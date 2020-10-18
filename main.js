
$(document).ready(function () {
   

    $("#gameThree").click(function(){
        $(".gameThree").hide();
        $("#qOne").show();
        $("#check-more").show();
        $( "#check-more" ).insertAfter(".quesContainer");
        $( ".gameTwo" ).insertAfter("#check-more");
        $( ".gameOne" ).insertAfter("#check-more");
        $('html, body').scrollTop($('.logo-container').offset().top)

    });

    $("#q1toq2").click(function(){
        $("#qOne").hide();
        $("#qTwo").show();
    });

    $("#q2toq3").click(function(){
        $("#qTwo").hide();
        $("#qThree").show();
    });

    $("#q3toq4").click(function(){
        $("#qThree").hide();
        $("#qFour").show();
    });

    $("#q4toq5").click(function(){
        $("#qFour").hide();
        $("#qFive").show();
    });
   

});
