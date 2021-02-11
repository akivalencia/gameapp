// document.getElementsByClassName("change").style.color = 'purple';
//selecting the element 
const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput= document.getElementById('myTextInput');

//adding event and what to do 
myButton.addEventListener('click', () => {
    myHeading.style.color = myTextInput.value;
});




// function changeText() {
//     // document.getElementById("change").style.color = 'purple';
//     var color = document.getElementById("change").style.color = 'purple';
//     // id.innerHTML = "ooops!";
//   }

  
//     // Note that the listeners in this case are |this|, not this.handleEvent
//     element.addEventListener('click', this, false);
//     element.addEventListener('dblclick', this, false);
  
//     // You can properly remove the listeners this way:
//     element.removeEventListener('click', this, false);
//     element.removeEventListener('dblclick', this, false);
//   }
//   const s = new ColorChangeButton(document.body);




function coinFlip(){
   let coin_side= ['heads', 'tails'];
   var answer= coin_side[Math.floor(Math.random() * coin_side.length)];
   //play ! there's an actual prompt
       return (`it's ${answer}`);
}
//testing coinFlip()
//coinFlip();
//coinFlip();
//coinFlip();

//call the coinFlip() as many times as user wants 
//since instructions say will allow user to flip as many coins as wants 

function playTimes(num){
   for (i=1; i<=num; i++){
       console.log(coinFlip());
    }
}
playTimes(2);





//undefined bc nothing returned 
