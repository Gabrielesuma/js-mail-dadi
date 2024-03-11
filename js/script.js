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