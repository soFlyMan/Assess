#Reference
## Front-end
### React

- **React**

[official docs](https://facebook.github.io/react/)

- **Components Library**

[antd](https://ant.design/)

- **react-router**

hashHistory - debug

browserHistory - product

- **react-router redirect**

[router documention](https://react-guide.github.io/react-router-cn/index.html)

- **webpack**

[webpack](https://hulufei.gitbooks.io/react-tutorial/content/webpack.html)

- **ES6**

[ES6 tutorial](http://es6.ruanyifeng.com/)

arrow function

generator

- **fetch API**

```
fetch = {
  url: string
  method: get,post,delete,put,jsonp 默认为 get
  dataType: method 为jsonp时无效。可选值 post (default), json, text, arraybuffer, blob, document, formdata
  responseType: method 为jsonp时无效。可选值 json (default), text, xml, arraybuffer, blob, document
  headers: method 为jsonp时无效。object
  timeout: 毫秒
  cache: 缓存，单位秒，大于0时有效。使用localStorage做长期缓存，需要注意缓存数据大小。
  withCredentials: method 为jsonp时无效。是否支持跨域 default false
  async: method 为jsonp时无效。是否同步 default true
  delay: 延时处理，单位毫秒，默认为0。
  then: function 处理服务端返回数据
}
```

### Redux

- **Redux Docs**

[redux docs](http://cn.redux.js.org/docs/introduction/Motivation.html)

- **redux-thunk**

async-redux

## Back-end
### Express 

[express API](http://expressjs.com/zh-cn/)

- **Using Q promise in mongoose**

[reference](https://joost.vunderink.net/blog/2015/09/18/combining-mongoose-and-q-in-node-js/)

- **Using Q/defer promise**

[reference](http://wiki.jikexueyuan.com/project/node-lessons/promise.html)

- **EventProxy:  An implementation of task/event based asynchronous pattern.**

[EventProxy Github](https://github.com/JacksonTian/eventproxy)

- **Get a random sample of documents from a collection**

[stackoverflow](http://stackoverflow.com/questions/24806721/mongodb-how-to-find-10-random-document-in-a-collection-of-100)
```
Model.aggregate({$sample: {size: 1}})
```

- **mongoose**

[mongoose API](http://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate)
