$(document).ready(function(){

    // Adding function
    $("#adding").click(function(){
        // Obtains value and makes it numeric data type
        var number1 = parseInt($("#number1").val());
        var number2 = parseInt($("#number2").val());
        // End of parseint
        var sum = number1+number2;
        $("#result").val(sum);
    });

    // Subtraction function
    $("#subtraction").click(function(){
        // Obtains value and makes it numeric data type
        var number1 = parseInt($("#number1").val());
        var number2 = parseInt($("#number2").val());
        // End of parseint
        var diff = number1-number2;
        $("#result").val(diff);
    });

    // Multiplication
    $("#multiplication").click(function(){
        // Obtains value and makes it numeric data type
        var number1 = parseInt($("#number1").val());
        var number2 = parseInt($("#number2").val());
        // End of parseint
        var product = number1*number2;
        $("#result").val(product);
    });

    // Division
    $("#division").click(function(){
        // Obtains value and makes it numeric data type
        var number1 = parseInt($("#number1").val());
        var number2 = parseInt($("#number2").val());
        // End of parseint


        // If number 2 is 0, provide error
        if(number2 === 0){
            $("#result").val("Cannot be divided by 0, please change input number 2");
        }
        
        else{
            var quotient = number1/number2;
            $("#result").val(quotient);
        }
    });
});