function coinFlip(){
   let coin_side= ['heads', 'tails'];
   var answer= coin_side[Math.floor(Math.random() * coin_side.length)];
   //play ! there's an actual prompt
   if (answer== 'heads') {
       console.log(`the answer is ${answer}`)

   }
   else {console.log (`the answer is ${answer}`)}
}

coinFlip();
coinFlip();
coinFlip();
coinFlip();
//undefined bc nothing returned 
