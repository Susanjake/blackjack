
//BLACKJACK 
//to time out
setTimeout(function(){
    var msg = document.getElementById("rule");
    msg.parentNode.removeChild(msg);
},6000)

let count = 0
let isAlive = true
let cardsEl = document.getElementById("cardText")
let sum = 0
let messageEl = document.getElementById("cards")
let cardsArray = [] //declaring the arrray
//random card generator
function display(){
    cardsEl.textContent = "Cards: "
    console.log("display")
    for(i=0;i<cardsArray.length;i++){
       
        console.log(cardsArray[i])
        cardsEl.textContent += cardsArray[i] + " "
        }

        document.getElementById("sumText").textContent = "Sum : " + sum    
}
function callCard(){
    if(count < 5){
    let random = Math.random()*14
    let wholeRandom = Math.floor(random)
    sum += wholeRandom
    count++
    return wholeRandom
    }
    
}
function newbutton(){
    if(sum == 21){
        messageEl.textContent = "you don't have to pick a new card"
        return
    }
    else if(isAlive == false){
        messageEl.textContent = "Sorry you have lost!"
        return
    }
    else if(count >= 5){
    messageEl.textContent = "you can only pick 5 cards"
    return }
    else{
    cardsArray[cardsArray.length] = callCard()
    display()
    test()
    }
    
    
}
    
    


function begin(){
    count = 0
    isAlive = true
    sum = 0
    cardsArray = [] 
    
    cardsArray[0] = callCard()
    cardsArray[1] = callCard()
    
    
    sum = cardsArray[0] + cardsArray[1]
    console.log(cardsArray[0])
    console.log(cardsArray[1])
    console.log(sum)
    
    
    test()
}
    function test(){
    if(sum==21){
        display()
        messageEl.textContent = "You have won the game!"
        
        }
    else if(sum<21){
       display()
        
    messageEl.textContent = "Pick another card"
    
    }
    

    else{
        messageEl.textContent = "You have lost the game!"
        isAlive = false
        sum = 0
        
        }
}

