let cells=document.querySelectorAll('.cell')
let reset=document.querySelector('.reset')
let turn='x';
let win=false;
let counter=1;
if(!win){
    cells.forEach((e)=>{
        e.addEventListener('click',(event)=>{
            if (win) {
                
            }
            else{
            let box=e.querySelector('.boxtext')
            turn=changeturn();
            box.innerText = turn;
            checkWin();
            counter++;
            }
            console.log(counter);
            if (counter >= 10) {
              let t = "draw";
              window.bridge.gameover(t);
            }
        },{once:true})
    })
}
function changeturn(){
    return turn==='x'?"o":'x';
}
function checkWin(){
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    let flag=0;
    wins.forEach((e)=>{
        let boxtext = document.getElementsByClassName("boxtext");
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!=="")){
            boxtext[e[0]].style.backgroundColor='green'
            boxtext[e[1]].style.backgroundColor='green'
            boxtext[e[2]].style.backgroundColor='green'
            win=true;
            window.bridge.gameover(turn)
        } 
    })
}
reset.addEventListener('click',()=>{
    window.bridge.reset();
})