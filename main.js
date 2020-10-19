
$(document).ready(function () {
    let result=0;

    // game one

    $("#gameOne").click(function(){

        setTimeout(function(){
            
            $(".result").hide();           
            $( ".card" ).show();
            $(".gameOne").hide();
            $(".quesContainer").show();        
            $("#gameOneResult").show();
            $("#check-more").show();
            $( "#check-more" ).insertAfter(".quesContainer");
            $( ".gameTwo" ).insertAfter("#check-more");
            $( ".gameThree" ).insertAfter("#check-more");
            $('html, body').scrollTop($('.logo-container').offset().top);

            $("#gameOneResult img").attr("src", "images/"+Math.floor((Math.random() * 5))+".jpg");
            



        }, 500);       

    });

   
    // game Three 

    $("#gameThree").click(function(){

        setTimeout(function(){
            $(".result").hide();   
            $( ".card" ).show();
            $(".gameThree").hide();
            $(".quesContainer").show();        
            $("#qOne").show();
            $("#check-more").show();
            $( "#check-more" ).insertAfter(".quesContainer");
            $( ".gameTwo" ).insertAfter("#check-more");
            $( ".gameOne" ).insertAfter("#check-more");
            $('html, body').scrollTop($('.logo-container').offset().top);

        }, 500);       

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
        $("#ansResultThree").show();   

        if(result===50){
            $("#ansResultThree img").attr("src", "images/atel.jpg");
        }
        else if(result===150)
        {
            $("#ansResultThree img").attr("src", "images/lasbencher.jpg");
        }
        else{
            $("#ansResultThree img").attr("src", "images/moddhbitto.jpg");

        }
    });

    $("#againBtnThree").click(function(){
        result = 0;
        $("#ansResultThree").hide(); 
        $("#qOne").show();
    });
    $("#againBtnOne").click(function(){
        $("#gameOneResult img").attr("src", "images/"+Math.floor((Math.random() * 5))+".jpg");
    });



    /// game two

    $("#gameTwo").click(function(){
        alert("game two clicked");
    })
   

});
