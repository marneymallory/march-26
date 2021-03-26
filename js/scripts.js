$(document).ready(function () {
  $("#example-form").submit(function (event) {
    event.preventDefault();
    
    let question1val = $("#question1").val()
    let question2val = $("#question2").val() 
    let question3val = $("#question3").val()
    let question4val = $("#question4").val()
    let question5val = $("question5").val()
    let question6val = $("question6").val()

    let pythonPoints = 0;
    let cPoints = 0;
    let rubyPoints =0;

    if (question1val === "yes") {
      pythonPoints += 1;
     } else if (question1val === "no") {
      cPoints += 1;
     }
    if (question2val === "red") {
      rubyPoints += 1;
    } else if (question2val === "green") {
      pythonPoints += 1;
    } else if (question2val === "blue") {
      cPoints += 1;
    }    
    if (question3val === "yes") {
      cPoints += 1;
    } else if (question3val === "no") {
      rubyPoints += 1;
    }
    if (question4val <= 21) {
      pythonPoints += 1; 
    } else if (question4val >= 21) {
      cPoints += 1;
    }
    if (question5val === "yes") {
      rubyPoints += 1;
    } else if (question5val === "no") {
      pythonPoints += 1;
    }
    if (question6val === "coffee") {
      rubyPoints +=1;
    } else if (question6val === "tea") {
      pythonPoints +=1;
    }

    if (pythonPoints >= 3) {
      $("#quiz-result").show()
      $("#quiz-result").text("You should learn Python!")
    } else if (cPoints >= 3) {
      $("#quiz-result").show()
      $("#quiz-result").text("You should learn C#!")
    } else if (rubyPoints >= 3) {
      $("#quiz-result").show()
      $("#quiz-result").text("You should learn Ruby!")
    }
    
  });
})