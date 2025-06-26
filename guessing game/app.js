const max = prompt("Enter the range of numbers");
const random = Math.floor(Math.random() * max) + 1;


while(true){
    let number = prompt("guess the number");
    if(number == "quit"){
        console.log("Quitting the game....");
        break;
    }
    else if(number == random){
        prompt("congrats you got it right it is " , random);
        console.log("congrats you got it right it is " , random);
        break;
    }
    else if(number > random){
        console.log("it's too bigger, try smaller one");
    }
    else if(number < random){
        console.log("it's too smaller, try bigger one");
    }
}