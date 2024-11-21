// When data length has more than 10 characters
$("#Input-error").blur(function(){
    // Gets character length using val().length
    var datalength = $(this).val().length; 

    // If condition when data is more than 10
    if (datalength > 10){
        $(this).addClass("error");
    } 
    else {
        $(this).removeClass("error");
    }
});
// End data length error

// When out of focus
$("#Input-error").blur(function(){
    $(this).addClass("error");
});
// End of out of focus
