$(document).ready(function(){
  
  var inputArr = [],
      inputNum = [],
      operator = ["+", "-", "*", "/"];      
  
  $(".calcbuttons").on('click',function(e){
    
    var clickButton = e.target;
    console.log(clickButton);
    
    if(clickButton.id == "ac"){
      inputArr = [];
      inputNum = [];
      $("#output").text("0");
      $("#input").text("");
    }
    
    if(clickButton.id == "ce"){
      inputNum = [];      
      $("#output").text("0");      
    }
    
    if($(clickButton).attr("class").indexOf("number") != -1 && inputNum.length<9){
      inputNum.push(clickButton.id);
      $("#output").text(inputNum.join(""));
    }
    
    if(clickButton.id == "."){
      if(inputNum.length == 0){
        inputNum.push("0");
        inputNum.push(".");
      }
      if(inputNum.join("").indexOf(".") === -1){
        var temp = Number(inputNum.join(""));
        inputNum = [];
        inputNum.push(temp);
        inputNum.push(clickButton.id);
      }
      
      $("#output").text(inputNum.join(""));      
    }
    
    if(clickButton.id == "%" && inputNum.length != 0){
      var x = Number(inputNum.join("")) / 100;     
      $("#output").text(x);
      inputNum = [];
      inputNum.push(x);
    }
    
    if($(clickButton).attr("class").indexOf("operator") != -1 && inputNum.length != 0){
      inputArr.push(inputNum.join(""));      
      inputArr.push(clickButton.id);
      inputNum = [];
      $("#input").text(inputArr.join(" "));
      $("#output").text("");      
    }else if($(clickButton).attr("class").indexOf("operator") != -1 && operator.indexOf(inputArr[inputArr.length-1]) != -1 && clickButton.id != "ce"){
      inputArr.pop();
      inputArr.push(clickButton.id);
      $("#input").text(inputArr.join(" "));
    }
    
    if(clickButton.id == "="){
      inputArr.push(inputNum.join(""));
      var result = eval(inputArr.join(""));
      
      
      
       if(result%1 != 0){        
        result = result.toFixed(9);
        result = parseFloat(result);        
      }
      inputNum = [];
      inputNum.push(result);
      $("#output").text(result);
      $("#input").text("");
      inputArr = [];
      
    }
    
  });
  
}); // /document ready