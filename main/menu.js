// 只能在主线程用
const { Menu, BrowserWindow } = require('electron')

var t = [
    {
        label:'Demo',
        submenu:[
            {
                label:'demo2',
                accelerator: `ctrl+n`,//设置快捷键
                click:()=>{//点击事件
                    var newWin = new BrowserWindow({
                        width: 500,
                        height: 500,
                        webPreferences: { nodeIntegration: true }//引入node,否则对应的js无法使用require
                    })
                    // newWin.webContents.openDevTools()//调试模式
                    newWin.loadFile('demo2.html')
                    newWin.on('close', () => { win = null })
                }
            },{
                label:'demo3',
                click: () => {
                    var newWin = new BrowserWindow({
                        width: 500,
                        height: 500,
                        webPreferences: { nodeIntegration: true }//引入node,否则对应的js无法使用require
                    })
                    // newWin.webContents.openDevTools()//调试模式
                    newWin.loadFile('demo3.html')
                    newWin.on('close', () => { win = null })
                }
            }, {
                label: 'index',
                click: () => {
                    var newWin = new BrowserWindow({
                        width: 500,
                        height: 500,
                        webPreferences: { nodeIntegration: true }//引入node,否则对应的js无法使用require
                    })
                    // newWin.webContents.openDevTools()//调试模式
                    newWin.loadFile('index.html')
                    newWin.on('close', () => { win = null })
                }
            }
        ]
    }, {
        label: '虞书欣',
        submenu: [{ label: '做作' }, { label: '蔡敏敏' }, { label: '菜瓜' }]
    }
]
var m= Menu.buildFromTemplate(t)
Menu.setApplicationMenu(m)