// document.getElementsByClassName("change").style.color = 'purple';
//selecting the element 
const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('click');
const myTextInput= document.getElementById('myTextInput');

//adding event and w

//fcoin w/ DOM manipulationijlvar heads -0--hvar it'sti'smyTextInput.valueeuat to

document.getElementById('click').onclick = click;
//flipcoin w/ DOM manipulation
var strawberry = 0;
var banana = 0;
function click() {  
    x = (Math.floor(Math.random() * 2) == 0);
    if(x){
        flip("strawberry");
        document.getElementById("coin").src="https://s.yimg.com/ny/api/res/1.2/rMpzMyl_OywRlP3KRmYvDw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY0MA--/https://s.yimg.com/uu/api/res/1.2/UHwkDMyUlKaU02J9dhSj9g--~B/aD01MDA7dz01MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/good_housekeeping_561/6bb3292dd35df9e3873980b973cc687f";
    }else{
        flip("banana");
        document.getElementById("coin").src= "data:image/jpeg;base64,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"
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
