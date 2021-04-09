let input = document.getElementById('input');
let btn = document.getElementById('btn');
let result = document.getElementById('result');
let counter = 0;


function randomNum(){
    return Math.floor(Math.random() * 11);
}


btn.addEventListener('click', function handler(){
        if (counter < 3){
            let guess = input.value;
            if (guess < 11 && guess >= 0){
                let num = randomNum();
                if (guess === num){
                    result.innerHTML = `Correct! The number is ${num}`;
                } else if (guess != num){
                    result.innerHTML = `Wrong! The number is ${num}`;
                }
                counter++;
            } else {
                result.innerHTML = `Input only from 1 to 10, refresh page & try again`;
            }
        } else {
            btn.disabled = true;
            result.innerHTML = `reached maximum guesses`;
        }

        
});

