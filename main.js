
$(document).ready(function () {
    let result=0;
   

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
        result += parseInt($("input[name='qOne']:checked").val(), 10);
        $("#qOne").hide();
        $("#qTwo").show();
        
    });

    $("#q2toq3").click(function(){
        result += parseInt($("input[name='qTwo']:checked").val(), 10);
        $("#qTwo").hide();
        $("#qThree").show();
    });

    $("#q3toq4").click(function(){
        result += parseInt($("input[name='qThree']:checked").val(), 10);
        $("#qThree").hide();
        $("#qFour").show();
    });

    $("#q4toq5").click(function(){
        result += parseInt($("input[name='qFour']:checked").val(), 10);
        $("#qFour").hide();
        $("#qFive").show();
    });
    $("#resultBtn").click(function(){
        result += parseInt($("input[name='qFive']:checked").val(), 10);
        $("#qFive").hide();   
        $("#ansResult").show();   

        // if(result===50){
        //     alert("Atel");
        // }
        // else if(result===150)
        // {
        //     alert("Backbencher");
        // }
        // else{
        //     alert("Medium");
        // }
    });



    /// game two

    $("#gameTwo").click(function(){
        alert("game two clicked");
    })
   

});
