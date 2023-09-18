const {ipcRenderer,contextBridge}=require('electron')
let p1="",p2="";
let bridge={
    gameover:(turn)=>{
        let result = document.querySelector(".result");
        console.log(turn);
        if(turn=='o'){
        result.innerHTML=p1+' has won';
    }
    else if(turn=='draw'){
        result.innerHTML="Good Game its a Draw"
    }
    else{
        result.innerHTML = p2 + " has won";
    }
    }
    ,reset:()=>{
        ipcRenderer.invoke('reset')
    }
}
contextBridge.exposeInMainWorld('bridge',bridge)
ipcRenderer.on('names',(e,player1,player2)=>{
    p1=player1;
    p2=player2;
})