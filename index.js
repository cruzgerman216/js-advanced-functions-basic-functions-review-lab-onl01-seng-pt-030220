// Your code here
function saturdayFun(activity = "roller-skate"){
  return "This Saturday, I want to " + activity + "!";
}

function mondayWork(activity = "go to the office"){
  return "This Monday, I will " + activity + ".";
}

function wrapAdjective(val = "*"){
  return function(str = "special"){
    return "You are " + val + str + val + "!";
  }
}

let Calculator = {add: function(a,b){return a+b;}, multiply: function(a,b){return a*b;}, subtract: function(a,b){return a-b;}, divide: function(a,b){return a/b;}};

function actionApplyer(num, arr){
  if (arr.length == 0){
    return num;
  }
  return arr[num];
}
