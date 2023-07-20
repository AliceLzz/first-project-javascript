let input = document.getElementById('inputBox');
let buttons = document.getElementsByClassName('calculatorBtn');

let number = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            number = eval(number);
            input.value = number;
        }

        else if(e.target.innerHTML == 'AC'){
            number = "";
            input.value = number;
        }
        else if(e.target.innerHTML == 'DEL'){
            number = number.substring(0, number.length-1);
            input.value = number;
        }

        else{
        number += e.target.innerHTML; 
        input.value = number;
        }
    })
})