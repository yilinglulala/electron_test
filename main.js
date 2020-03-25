var electron = require('electron')
var app = electron.app   // 创建electron引用
var BrowserWindow = electron.BrowserWindow;  //创建窗口引用
var mainWindow = null;  //声明要打开的主窗口

var BrowserView = electron.BrowserView //引入BrowserView，只能主进程中用
var globalShortcut = electron.globalShortcut// 全局快捷键，只能主进程中用

require('./main/menu.js')
app.on('ready', () => {
    
    mainWindow = new BrowserWindow({ 
         //设置打开的窗口大小
        width: 800, height: 500, 
        //引入node,否则对应的js无法使用require
        webPreferences: { nodeIntegration: true }
    })  

    // mainWindow.loadFile('index.html')  //加载那个页面
    mainWindow.loadFile('demo4.html')  //加载那个页面
    //* 打开调试模式菜单
    // mainWindow.webContents.openDevTools()

    //* 嵌入网页
    // var view = new BrowserView()   //new出对象，需要在ready之后
    // mainWindow.setBrowserView(view)   // 在主窗口中设置view可用
    // view.setBounds({ x: 0, y: 50, width: 800, height: 600 })  //定义view的具体样式和位置
    // view.webContents.loadURL('https://www.baidu.com/')  //wiew载入的页面

    //* 注册全局快捷键
    globalShortcut.register('ctrl+e', () => {
        mainWindow.loadURL('https://www.baidu.com/')
    })
    //* 监听关闭事件，把主窗口设置为null
    mainWindow.on('closed', () => {
        mainWindow = null
    })

})
