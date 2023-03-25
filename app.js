let dugme = document.querySelectorAll(".btn")
let move_X = true; 
function iksoks(btn){
    if(move_X){
        move_X=false;
        btn.innerText= 'X';

    } else{
        move_X = true;
        btn.innerText= 'O';
    }
}



