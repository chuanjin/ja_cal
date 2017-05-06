$(document).ready(function(){
  var totalString = "";
  var operators = ["+","-","/","*"];
  var nums=[0,1,2,3,4,5,6,7,8,9];

  function update(input){
    if(totalString.indexOf('.') !== -1 && input==="."){
      console.log("Duplicate '.'");
    }
    else if(totalString === "0"){
      if (operators.includes(input)===true || input==="."){
        totalString += input;
      }
      else {
        totalString = input;
      }
    }
    else if(operators.includes(totalString[totalString.length-1])===false){
      totalString += input;
    }
    else if(nums.includes(Number(input))){
      totalString += input;
    }
    $("#viewer").html(totalString);
  }

  function setResult(){
    var result = eval(totalString);
    totalString = result.toString();
    $("#viewer").html(eval(result));
  }

  $("button").on("click",function(){
    if(this.id==="clear"){
      totalString = "0";
      $("#viewer").html(totalString);
    }
    else if(this.id==="equals"){
      setResult();
    }
    else{
      update(this.id);
    }
  });

});
