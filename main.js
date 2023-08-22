// Modules to control application life and create native browser window
// electron 模块可以用来控制应用的生命周期和创建原生浏览窗口
const { app, BrowserWindow } = require('electron')
// app，它着您应用程序的事件生命周期。
// BrowserWindow，它负责创建和管理应用窗口。

// 大小写惯例
// 您可能注意到了 app 和 BrowserWindow 两个模块名的大小写差异。 Electron 遵循 JavaScript 传统约定，以帕斯卡命名法 (PascalCase) 命名可实例化的类 (如 BrowserWindow, Tray 和 Notification)，以驼峰命名法 (camelCase) 命名不可实例化的函数、变量等 (如 app, ipcRenderer, webContents) 。

const path = require('path')

// run this as early in the main process as possible
if (require('electron-squirrel-startup')) app.quit();

// let progressInterval // 应用程序启动时进度条 函数



function createWindow () {
  // Create the browser window.
  // 创建浏览窗口
  const mainWindow = new BrowserWindow({
    // frame: false,// 无边框窗口设置为 false
    // title: "Carveybunt App", // 应用窗口标题,如果是网页 默认使用 网页 title
    width: 1920,
    height: 1080,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      // nodeIntegration: true, // 使渲染进程拥有node环境
      // __dirname 字符串指向当前正在执行脚本的路径 (在本例中，它指向你的项目的根文件夹)。
      // path.join API 将多个路径联结在一起，创建一个跨平台的路径字符串。
      // webSecurity: false,  //禁用同源策略,解决跨域问题,并且将自动 allowRunningInsecureContent 属性置 true
      // allowRunningInsecureContent:true // 不允许网站在HTTPS中加载或执行非安全源(HTTP) 中的脚本代码、CSS或插件。设为true将禁用这种保护
    }
  })

  // and load the index.html of the app.
  // 加载 本地 index.html
  mainWindow.loadFile('./web/index.html')
  // 加载指定的网页
  // mainWindow.loadURL('http://127.0.0.1:8080/')

  // Open the DevTools.
  // 打开开发工具
  mainWindow.webContents.openDevTools()

  // 打开应用时的 进度条 ↓
  // const INCREMENT = 0.03
  // const INTERVAL_DELAY = 100 // ms

  // let c = 0
  // progressInterval = setInterval(() => {
  //   // update progress bar to next value
  //   // values between 0 and 1 will show progress, >1 will show indeterminate or stick at 100%
  //   mainWindow.setProgressBar(c)

  //   // increment or reset progress bar
  //   if (c < 1) {
  //     c += INCREMENT
  //   }
  //   //  else {
  //   //   c = (-INCREMENT * 5) // reset to a bit less than 0 to show reset state
  //   // }
  // }, INTERVAL_DELAY)
  // 打开应用时的 进度条 ↑
}

app.commandLine.appendSwitch('disable-web-security'); // 解决 跨域问题
app.commandLine.appendSwitch('ignore-certificate-errors') // 忽略证书检测 

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    // 在 macOS 系统内, 如果没有已开启的应用窗口点击托盘图标时通常会重新创建一个新窗口
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})



// before the app is terminated, clear both timers
// 在终止应用程序之前，请清除两个计时器
// app.on('before-quit', () => {
//   clearInterval(progressInterval)
// })

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此, 通常对应用程序和它们的菜单栏来说应该时刻保持激活状态, 直到用户使用 Cmd + Q 明确退出
// 在Windows和Linux上，关闭所有窗口通常会完全退出一个应用程序。
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// 在当前文件中你可以引入所有的主进程代码
// 也可以拆分成几个文件，然后用 require 导入。