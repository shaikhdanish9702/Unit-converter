var input = document.getElementById("input");
var result = document.getElementById("result");
var inputType = document.getElementById("input-type");
var resultType = document.getElementById("result-type");
var inputTypeValue, resultTypeValue;
input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult)
resultType.addEventListener("change", myResult)
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult() {
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;
    //meter input to result 

    if (inputTypeValue === "meter" && resultTypeValue === "kilometer") {
        result.value = Number(input.value) * 0.001;
    }else if(inputTypeValue === "meter" && resultTypeValue === "centimeter") {
        result.value = Number(input.value) * 100;
    }
    else if(inputTypeValue === "meter" && resultTypeValue === "meter") {
        result.value = input.value;
    }
    else if (inputTypeValue === "meter" && resultTypeValue === "inches") {
        result.value = Number(input.value) * 39.3701;
    }
     else if(inputTypeValue === "meter" && resultTypeValue === "feet") {
        result.value = Number(input.value) * 3.28084;
    }
    //kilometer input to result

    if (inputTypeValue === "kilometer" && resultTypeValue === "kilometer") {
        result.value =input.value;
    }else if(inputTypeValue === "kilometer" && resultTypeValue === "centimeter") {
        result.value = Number(input.value) * 100000;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue === "meter") {
        result.value = Number(input.value) * 1000;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue === "inches") {
        result.value = Number(input.value) * 39370.1;
    }
     else if(inputTypeValue === "kilometer" && resultTypeValue === "feet") {
        result.value = Number(input.value) * 3280.84;
    }
    //centimeter input to result

    if (inputTypeValue === "centimeter" && resultTypeValue === "centimeter") {
        result.value =input.value;
    }else if(inputTypeValue === "centimeter" && resultTypeValue === "kilometer") {
        result.value = Number(input.value) * 0.000001;
    }
    else if(inputTypeValue === "centimeter" && resultTypeValue === "meter") {
        result.value = Number(input.value) * 0.01;
    }
     else if(inputTypeValue === "centimeter" && resultTypeValue === "inches") {
        result.value = Number(input.value) * 0.393701;
    }
     else if(inputTypeValue === "centimeter" && resultTypeValue === "feet") {
        result.value = Number(input.value) * 39.3701;
    }
    //inches input to result
    if (inputTypeValue === "inches" && resultTypeValue === "inches") {
        result.value =input.value;
    }else if(inputTypeValue === "inches" && resultTypeValue === "centimeter") {
        result.value = Number(input.value) * 2.54;
    }
    else if(inputTypeValue === "inches" && resultTypeValue === "meter") {
        result.value = Number(input.value) * 0.0254;
    }
    else if(inputTypeValue === "inches" && resultTypeValue === "kilometer") {
        result.value = Number(input.value) * 0.0000254;
    }
     else if(inputTypeValue === "inches" && resultTypeValue === "feet") {
        result.value = Number(input.value) / 12;
    }
    //feet input to result
    if (inputTypeValue === "feet" && resultTypeValue === "feet") {
        result.value =input.value;
    }else if(inputTypeValue === "feet" && resultTypeValue === "centimeter") {
        result.value = Number(input.value) * 30.48;
    }
    else if(inputTypeValue === "feet" && resultTypeValue === "meter") {
        result.value = Number(input.value) * 0.3048;
    }
    else if(inputTypeValue === "feet" && resultTypeValue === "kilometer") {
        result.value = Number(input.value) * 0.0003048;
    }
     else if(inputTypeValue === "feet" && resultTypeValue === "inches") {
        result.value = Number(input.value) * 12;
    }
}
result.addEventListener("keyup", myInput);
inputType.addEventListener("change", myInput)
resultType.addEventListener("change", myInput)
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;
function myInput() {
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;
    //centimeter result to input
    if (resultTypeValue === "centimeter" && inputTypeValue === "centimeter") {
        input.value =result.value;
    }else if(resultTypeValue === "centimeter" && inputTypeValue === "kilometer") {
        input.value = Number(result.value) * 0.000001;
    }
    else if(resultTypeValue === "centimeter" && inputTypeValue === "meter") {
        input.value = Number(result.value) * 0.01;
    }
     else if(resultTypeValue === "centimeter" && inputTypeValue === "inches") {
        input.value = Number(result.value) * 0.393701;
    }
     else if(resultTypeValue === "centimeter" && inputTypeValue === "feet") {
        input.value = Number(result.value) * 39.3701;
    }
    //meter result to input
    if (resultTypeValue === "meter" && inputTypeValue === "kilometer") {
        input.value = Number(result.value) * 0.001;
    }else if(resultTypeValue === "meter" && inputTypeValue === "centimeter") {
        input.value = Number(result.value) * 100;
    }
    else if(resultTypeValue === "meter" && inputTypeValue === "meter") {
        input.value = result.value;
    }
     else if(resultTypeValue === "meter" && inputTypeValue === "inches") {
        input.value = Number(result.value) * 39.3701;
    }
     else if(resultTypeValue === "meter" && inputTypeValue === "feet") {
        input.value = Number(result.value) * 3.28084;
    }
//kilometer result to input
    if (resultTypeValue === "kilometer" && inputTypeValue === "kilometer") {
        input.value =result.value;
    }else if(resultTypeValue === "kilometer" && inputTypeValue === "centimeter") {
        input.value = Number(result.value) * 100000;
    }
    else if(resultTypeValue === "kilometer" && inputTypeValue === "meter") {
        input.value = Number(result.value) * 1000;
    }
    else if(resultTypeValue === "kilometer" && inputTypeValue === "inches") {
        input.value = Number(result.value) * 39370.1;
    }
     else if(resultTypeValue === "kilometer" && inputTypeValue === "feet") {
        input.value = Number(result.value) * 3280.84;
    }
    //inches result to input
    if (resultTypeValue === "inches" && inputTypeValue === "inches") {
        input.value =result.value;
    }else if(resultTypeValue === "inches" && inputTypeValue === "centimeter") {
        input.value = Number(result.value) * 2.54;
    }
    else if(resultTypeValue === "inches" && inputTypeValue === "meter") {
        input.value = Number(result.value) * 0.0254;
    }
    else if(resultTypeValue === "inches" && inputTypeValue === "kilometer") {
        input.value = Number(result.value) * 0.0000254;
    }
     else if(resultTypeValue === "inches" && inputTypeValue === "feet") {
        input.value = Number(result.value) / 12;
    }
    //feet result to input
    if (resultTypeValue === "feet" && inputTypeValue === "feet") {
        input.value =result.value;
    }else if(resultTypeValue === "feet" && inputTypeValue === "centimeter") {
        input.value = Number(result.value) * 30.48;
    }
    else if(resultTypeValue === "feet" && inputTypeValue === "meter") {
        input.value = Number(result.value) * 0.3048;
    }
    else if(resultTypeValue === "feet" && inputTypeValue === "kilometer") {
        input.value = Number(result.value) * 0.0003048;
    }
     else if(resultTypeValue === "feet" && inputTypeValue === "inches") {
        input.value = Number(result.value) * 12;
    }
}
