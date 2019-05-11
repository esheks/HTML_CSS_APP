

$(function(){
$(".error-messageusername").hide(); 
$(".error-messageimage").hide();
$(".error-messagetextarea").hide();


var error_username = false;
var error_image =false;
var error_textarea =false;

$("#formGroupExampleInput").focusout(function(){
    check_username();
    
});
$("#formGroupExampleInput2").focusout(function(){
    check_image();
    
});
$("#exampleFormControlTextarea1").focusout(function(){
    check_textarea();
    
});
function check_username(){
    var username_length = $("#formGroupExampleInput").val().length
    if (username_length < 6){
        $(".error-messageusername").html("username must be at least 6 characters.")
        $(".error-messageusername").show();
        error_username = true;
    }
    else{
        $(".error-messageusername").hide();
    }
}

function check_image(){
    var image_length = $("#formGroupExampleInput2").val().length
    if (image_length < 1){
        $(".error-messageimage").html("image title cannot be empty.")
        $(".error-messageimage").show();
        error_image = true;
    }
    else{
        $(".error-messageimage").hide();
    }
}

function check_textarea(){
    var textarea_length = $("#exampleFormControlTextarea1").val().length
    if (textarea_length < 1){
        $(".error-messagetextarea").html("comment cannot be empty.")
        $(".error-messagetextarea").show();
        error_username = true;
    }
    else{
        $(".error-messagetextarea").hide();
    }
}
$("#form_submit").click(function(e){
    e.preventDefault();
    
    var error_username = false;
    var error_image =false;
    var error_textarea =false;
    
    check_username();
    check_image();
    check_textarea();
    if(error_username==false && error_image==false && error_textarea==false)
    return true;
    else{
        return false;
    }

})

});








