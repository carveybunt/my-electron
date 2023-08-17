module.exports = {
  packagerConfig: {
    asar: true,
    appVersion: "1.0.0",
    name: "诚城软件", // 软件名称
    appCopyright: "诚成城陈(376377656@qq.com)",
    // icon: '/path/to/icon' // 指定应用程序图标路径, mac 512*512 icns; g ;win 256*256 ico
    platform: "all" // 打包所有平台
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel', // 打包成 exe
      config: {
        name: "chegnchegnchengchen",   //不能是中文，否则安装时出错，可以不设置
        setupExe: "诚成城陈.exe",//可以是中文，可以不设置，如果不设置setupIcon，那么这里也可以不设置，用默认的名称就好
        // setupIcon: "./icon.ico",  //安装包图标，可以不设置，//如果使用中文应用名称，暂时不能设置setupIcon，否则报错   
        // loadingGif: "./installing.gif" // 安装时加载动画
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin','linux'], // 指定打包的系统平台, darwin = mac
    },
    {
      // Linux 系统应用文件
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          icon: '/path/to/icon.png' // 指定应用程序图标路径 Linux 512*512 pn
        }
      },
    },
    {
      // Path to the icon to use for the app in the DMG window
      name: '@electron-forge/maker-dmg', // 打包 dmg 应用
      config: {
        // icon: '/path/to/icon.icns' // 指定应用程序图标路径, mac 512*512 icns
        name: "诚成城陈-mac",   //可以是中文，但只是安装包名称。
        // background: "./share_parent_bg_blue.png" // 安装包背景图片
      }
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};
