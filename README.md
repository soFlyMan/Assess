# 混合教学模式下在线考评系统的设计与实现
###毕业设计任务
混合教学模式是实现线上线下同步教学的学习模式，既能满足课堂学习课时的不足，又能满足完全网络学习的无助，而其中通过线上考试系统决定学生最后考试成绩，同时通过网络监测学生平时学习过程给予中肯的平时成绩，激发学生的学习积极性等起到重要作用。
###软件主要功能
1.出卷功能。（考试成绩）

2.追踪每位学生登陆时间，每次停留网站学习时间，过关练习通过情况等。（平时成绩）

3.根据公式得出学生的总评成绩。

## 概述

[跳转](#build)
>技术栈 react+nodejs+express+redux+webpack+ES6

**网站构建流程**
```
React，使用antd组件，Router进行前端路由匹配，Redux进行统一的状体管理,Redux配合Router,代码

使用ES6语法，babel进行转码,fetch代替传统的ajax请求，webpack打包.前端代码部署到node中expre

ss搭建的服务器上,服务器进行路由匹配，mongoose写mongoDB数据库代码.
```

###开发工具
- 操作系统: macOS Sierra
- 开发工具: Sublime Text3
- 编译环境: Node.js
- 包管理器: NPM
- 前端自动化构建工具: Webpack


###技术栈
#####前端

**react**

- react
- redux
- react-redux
- react-router
- react-router-redux
- Fetch
- Antd

#####后端

- Nodejs
- express

#####构建工具

- webpack
- babel

#####数据库
- mongoDB

## 后台管理
前台页面学生可以通过登陆查询自己的信息以及考评内容

后台管理通过react构建单页面应用的方式

react+react-router

<h3 id="build"></h3>

#### 后端 nodejs+express
**中间件**
- bodyParser
 
 bodyParser中间件用来解析http请求体，是express默认使用的中间件之一。

使用express应用生成器生成一个网站，它默认已经使用了 bodyParser.json 与 bodyParser.urlencoded 的解析功能，除了这两个，bodyParser还支持对text、raw的解析。

```
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
```
顾名思义，bodyParser.json是用来解析json数据格式的。

bodyParser.urlencoded则是用来解析我们通常的form表单提交的数据，也就是请求头中包含这样的信息： Content-Type: application/x-www-form-urlencoded

常见的四种Content-Type类型：

application/x-www-form-urlencoded 常见的form提交

multipart/form-data 文件提交

application/json 提交json格式的数据

text/xml 提交xml格式的数据


```
<Tooltip title="What do you want other to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
```

2016-12-30

React 子组件与父组件间通信

state变化，会触发由该state渲染视图更新 re render.

子组件向父组件递值，先由父组件定义function，作为props传递给子组件，子组件触发该props回调函数。
```
//Parent Component
handleTrans(val){
    this.setState({
        a: val
        })
}
<Child handleTrans={this.handleTrans}>

//Child Component
componentWillMount(){
    var val = 'soFly'
    this.props.handleTrans(val)
}
```


2016-1-01

[dropindex](http://stackoverflow.com/questions/24430220/e11000-duplicate-key-error-index-in-mongodb-mongoose)

**mongoose**



