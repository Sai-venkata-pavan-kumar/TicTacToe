const {app,BrowserWindow, ipcMain}=require('electron')
const {autoUpdater}=require('electron-updater')
const path=require('path')
let win;
function createWindow(){
    win=new BrowserWindow({
        webPreferences:{
            preload:path.join(__dirname,'preload.js')
        }
    });
    win.loadFile(path.join(__dirname,'index.html'))
}
app.on('ready',()=>{
    createWindow();
})
let board;
ipcMain.handle('start',(e,player1,player2)=>{
    win.hide();
    board=new BrowserWindow({
        webPreferences:{
            preload:path.join(__dirname,'bpreload.js')
        }
    })
    board.loadFile(path.join(__dirname,'board.html'))
    board.webContents.send('names',player1,player2)
    board.on("close", () => {
      app.quit();
    });
})
ipcMain.handle('reset',()=>{
    win.show();
    board.close();
})
