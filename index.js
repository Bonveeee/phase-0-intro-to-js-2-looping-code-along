// Code your solutions in this file
const gifts = ["teddy bear","drone","doll"];

function wrapGifts(gifts) {
    let i = 0; 
    while (i < gifts.length) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
      i++; 
    }
  
    return gifts;
  }
  

for(let age=30;age<40;age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}

wrapGift(gifts);

function writeCards(stringArray,eventName){
        const stringLength = stringArray.length;
        const newArray = []
    for(let i=0;i<stringLength;i++){
        newArray.push(`Thank you, ${stringArray[i]}, for the wonderful ${eventName} gift!`);
        debugger
    }
    return newArray;
}

writeCards(["Guadalupe","Ollie","Aki"],"birthday");

function countDown(countNum){
    let i=countNum;
    while(i>=0){
        console.log(i);
        i--;
    }
}

countDown(10);