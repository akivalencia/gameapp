// document.getElementsByClassName("change").style.color = 'purple';
//selecting the element 
const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('click');
const myTextInput= document.getElementById('myTextInput');

//adding event and w

//fcoin w/ DOM manipulationijlvar heads -0--hvar it'sti'smyTextInput.valueeuat to

document.getElementById('click').onclick = click;
//flipcoin w/ DOM manipulation
var heads = 0;
var tails = 0;
function click() {  
    x = (Math.floor(Math.random() * 2) == 0);
    if(x){
        flip("heads");
        document.getElementById("coin").src="images/heads.png";
    }else{
        flip("tails");
        document.getElementById("coin").src= "images/tails.png"
    }
};
function flip(coin) {
    document.getElementById("result").innerHTML = coin;
};



//call the coinFlip() as many times as user wants 
//since instructions say will allow user as many coins as wants 

let score = 0;





//let score=0
//inputs heads or tails 
//input= result of flip coin function 

function keepScore() {
    if (input == result) {
        score++;
    }
    
}

// function playTimes(){
//    for (i=1; i<=num; i++){
//        console.log(coinFlip());
//     }
// }
// playTimes(2);




// function changeText() {
//     // document.getElementById("change").style.color = 'purple';
//     var color = document.getElementById("change").style.color = 'purple';
//     // id.innerHTML = "ooops!";
//   }de 


//original code 
// function coinFlip(){
//    let coin_side= ['heads', 'tails'];
//    var answer= coin_side[Math.floor(Math.random() * coin_side.length)];
//    //play ! there's an actual prompt
//        return (`it's ${answer}`);
// }
//testing coinFlip()
//coinFlip();
//coinFlip();
//coinFlip();






//undefined bc nothing returned 
