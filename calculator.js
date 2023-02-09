function numButton(x){
    document.getElementById('display').value += x;
    // let text = document.getElementById('display').value
    // if (text.includes("/0")){
    //     console.log("HAHA")
    // }
    addToTape(x)
}

function clearIt(){
    document.getElementById('display').value = '';
}


function opButton(x){   
    switch(x) {
        case "pwr":
            addToTape("^2 = ")
            power()
     
          break;
        case "sqrt":
            addToTape("sqr = ")
            sqr()
            
          break;
        case "X!":
            addToTape("!=")
            factor()
            
          break;
        default:
            addToTape(x)
            basic4(x)
        
          // code block
      }
    
}

function basic4(x){
    equals();
    document.getElementById('display').value +=  x;
    
}
function factor(){
    equals();
    let currentValue = document.getElementById('display').value
    let factorized = factorialize(currentValue)
    document.getElementById('display').value = factorized
    addToTape(factorized)
    para.innerHTML += "<br>"
}

function power(){
    equals();
    let currentValue = document.getElementById('display').value
    let powered = currentValue * currentValue;
    document.getElementById('display').value = powered
    addToTape(powered)
    para.innerHTML += "<br>"
}

function sqr(){
    let currentValue = document.getElementById('display').value
    let sqrted =  Math.sqrt(currentValue)
    document.getElementById('display').value =sqrted;
    addToTape(sqrted)
}


// TAPING ///

let para = document.createElement("p");
let theEquation = document.createTextNode("");

let element = document.getElementById("tape");

function equals(){
    document.getElementById('display').value = eval(document.getElementById('display').value);
    console.log(typeof document.getElementById('display').value)
}

function equalClick(){
    document.getElementById('display').value = eval(document.getElementById('display').value);
    addToTape("=")
    addToTape(document.getElementById('display').value)


    let text = document.getElementById('display').value
    if (text.includes("/0")){
        console.log("HAHA")
    }

    element.append(para);
    para.innerHTML += "<br>"
}




function addToTape(x){
    para.innerText += x
    
    
}
function tapeCheckBox() {
    let status = true;
    let checkBox = document.getElementById("taping");
    let textPad = document.getElementById("tape");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        textPad.style.display = "block";
    }
    else{
        textPad.style.display = "none";

    }
  }

/// for the Factorial
function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
      else {
          return (num * factorialize(num - 1));}
      }

      // Add tape to Tape



