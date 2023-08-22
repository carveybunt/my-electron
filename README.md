# 注意

使用 `yarn`  进行管理。

```shell
yarn config set electron_mirror https://npm.taobao.org/mirrors/electron/
yarn add electron --dev
```

`--verbose` 可以显示下载进度。

离线安装[下载地址](https://github.com/electron/electron/releases)
`mac` 使用 `uname -a` 查看对应系统。

## 打包工具

```shell
yarn add electron-packager --dev
```

## 静态资源位置

根目录下新建 `web` 文件夹，将静态资源放进去。

## bug

- 程序启动时进度条重复加载，且关闭程序时报错。
- s

