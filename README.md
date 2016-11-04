## 安装nodejs

[nodejs](https://nodejs.org/en/download/)

[vscode](http://code.visualstudio.com/)

## 安装

```sh
npm install gulp typescript tslint -g --registry=https://registry.npm.taobao.org
npm install --registry=https://registry.npm.taobao.org
```

## 安装 vscode 扩展 *号必装

Blade Runner *

TSlint *

Path Intellisense

Less IntelliSense

TsTools

Document This

## 启动
(用vscode插件Blade Runner 会自启动)
```sh
gulp 
```

## 文件结构
* components 基础组件目录
    
    * global        全局样式 - 初始化页面js
        
    * ajax          ajax组件
        
    * button        按钮组件
        
    * util          常用函数
        
    * validate      验证组件
        
    * antd          antd 样式
        
* pages 基础组件目录
    
    * ajax          普通页面
        
        * components      组件 可以是个文件 也可以是一组组件
          
        * index.ts        入口
          
    * redux         redux页面
        
        * components      组件 可以是个文件 也可以是一组组件
          
        * index.ts        入口
          
        * action.ts       创建action
          
        * model.ts        创建typescript 类型
          
        * reducer.ts      创建默认数据 和 reducer
          
          
* index.js 全局框架 模块加载
* index.html 总入口

## 框架资料

[npm](http://www.runoob.com/nodejs/nodejs-npm.html)

[React](http://www.ruanyifeng.com/blog/2015/03/react.html)

[Redux](https://segmentfault.com/a/1190000003503338?_ea=323420)

[ES5](http://www.jb51.net/article/31527.htm)

[ES6](http://es6.ruanyifeng.com/)

[typescript](http://www.tslang.cn/)

[less](http://lesscss.cn/)

[redux-react-typescript 例子](https://github.com/jaysoo/todomvc-redux-react-typescript)



