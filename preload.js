const {ipcRenderer,contextBridge}=require('electron')
let bridge={
    start:(player1,player2)=>{
        ipcRenderer.invoke('start',player1,player2)
    }
}
contextBridge.exposeInMainWorld('bridge',bridge)