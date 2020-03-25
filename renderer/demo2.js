// 通过链接打开浏览器
var { shell } = require('electron')
var aHref = document.querySelector('#aHref') 
aHref.onclick = function (e) {
    e.preventDefault()
    var href = this.getAttribute('href')
    shell.openExternal(href)
}
// 打开子窗口
var mybtn = document.querySelector('#mybtn')
mybtn.onclick = function (e) {
    // window.open('https://www.baidu.com/')
    window.open('pop_page.html')
}
// 监听子窗口传递消息过来，只能是本地的子窗口
window.addEventListener('message', (msg) => {
    let mytext = document.querySelector('#mytext')
    mytext.innerHTML = JSON.stringify(msg)
})