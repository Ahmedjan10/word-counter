
let quotes = prompt("enter your text")
let wordCounter = 0;
let spaces = 0;
for(let i = 0; i<=quotes.length; i++){
 if(quotes[i] ==(" ")){
    spaces++
    if(spaces>= 1){
        wordCounter = spaces+1;
    }
 }  
}  
alert(wordCounter) ;