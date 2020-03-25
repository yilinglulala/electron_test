var fs = require('fs');
const BrowserWindow = require('electron').remote.BrowserWindow
window.onload = function () {
    var btn = this.document.querySelector('#btn')
    var btn2 = this.document.querySelector('#btn2')
    var mybaby = this.document.querySelector('#mybaby')
    btn.onclick = function () {
        fs.readFile('xiaojiejie.txt', (err, data) => {
            mybaby.innerHTML = data
        })
    }
    btn2.onclick = () => {
        var newWin = new BrowserWindow({
            width: 500,
            height: 500,
            webPreferences: { nodeIntegration: true }
        })
        newWin.webContents.openDevTools()
        newWin.loadFile('demo2.html')
        newWin.on('close', () => { win = null })

    }
} 