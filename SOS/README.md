# hello_ruff
按照Ruff官方教程的小demo

------

>由于平时对硬件和嵌入式开发比较感兴趣，正巧最近两年一直在使用`javascript`，所以就买了[Ruff](https://ruff.io)玩玩。

Ruff 是一个 JavaScript 运行时，专为硬件开发而设计。Ruff 对硬件进行了抽象，使用了基于事件驱动、异步 I/O 的模型，使硬件开发变得轻量而且高效。

1.安装Ruff SDK

* 根据你的操作系统，下载并安装 Ruff SDK。
* 在安装完成后，在命令行中执行 rap --version，如果正确输出当前的 SDK 版本，则说明 Ruff SDK 安装成功

2.第二步：创建 “Hello Ruff” 项目
```
# 新建项目文件夹
$ mkdir hello-ruff
# 进入项目文件夹
$ cd hello-ruff
# 初始化 Ruff 应用
$ rap init
```

3.应用开发
打开由 `rap` 自动生成的 `src/index.js` 文件：
```
'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    $('#led-r').turnOn();
});

$.end(function () {
    $('#led-r').turnOff();
});
```
*这段代码的作用是在应用启动后点亮红色板载 LED（设备 ID 为 led-r，# 表示通过 ID 匹配设备），并在应用退出时将其关闭。

4.链接设备
* 将 Ruff 开发板上的 micro USB 接口与 USB 电源线连接，Ruff 开发板随即启动。
* 开发板成功启动后，会搭建一个名为 Ruff-[SN]（[SN] 为设备序列号）的无线热点。使用开发机连接该热点，成功后进行后续操作（该热点没有因特网接入）。

5.应用部署
开发机接入开发板架设的无线热点后，我们就可以进行应用的部署了。在命令行中继续执行如下命令：

```
$ rap deploy -s
```

如果一切顺利，在应用启动成功后稍等片刻，就可以看到红色板载 LED 已经点亮了。

恭喜，你的第一个 Ruff 应用已经成功地运行了起来！