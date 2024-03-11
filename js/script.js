const button = document.querySelector('.btn');

button.addEventListener('click', function(){
    let list = ['gabsum@gmail.com', 'marioRossi@gmail.com', 'luigibello75@libero.it', 'nessuno@ciao.org'];
    let userWord = document.getElementById('userValue').value;
    let trovato = false;
    for(let i = 0; i < list.length; i++){
        if(userWord === list[i]){
            trovato = true;
        }
    }
    const result = document.getElementById('result');
    if(trovato){
        result.innerHTML = 'Access allowed';
    } else {
        result.innerHTML = 'Access denied';
    }
})

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let userNum = random(1, 6);
let computerNum = random(1, 6);

let dice = document.getElementById('winner');
if(userNum > computerNum){
    dice.innerHTML = `L'utente ha vinto con il numero ${userNum} rispetto al numero del computer ${computerNum}`;
} else if(userNum < computerNum){
    dice.innerHTML = `Il computer ha vinto con il numero ${computerNum} rispetto al numero dell'utente ${userNum}`;
} else {
    dice.innerHTML = `C'è stato un pareggio con il numero ${userNum}`;
}