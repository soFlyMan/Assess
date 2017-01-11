# Redux Conclusion

- redux

reducers.js:
```
import { combineReducers } from 'redux'
```
- react-redux

container.js
```
import  React,{ Component } from 'react'
import { connect } from 'react-redux'

//引入action的function
import { fetchItems } from '../actions/actions.js'
import Item from '../../component/admin/itemPool/Item.js'

class Container extends Component{
    render(){
        const { dispatch, items } = this.props
        return (
            <Item onShow={payload=>dispatch(fetchItems(payload))}/>
            )
    }
} 

//mapStateToProps的作用是声明，当state树变化的时候，哪些属性是我们关心的？
const mapStateToProps = state => {
    return items
}
//mapDispatchToProps的作用是把store中的dispatch方法注入给组件
//function mapDispatchToProps(dispatch){
    return{
        actions : bindActionCreators({changeText:changeText,buttonClick:buttonClick},dispatch)
    }
}

export default connect(mapStateToProps)(Container)
```
index.js
```
import { Provider } from 'react-redux'
...
const store = createStore(reducer,applyMiddleware(thunkMiddleware))
const history = syncHistoryWithStore(browserHistory,store)

ReactDOM.render((
    <Provider store={store}>
...
```
- react-router-redux

reducers.js:
```
import { routerReducer } from 'react-router-redux'
...
const reducer = combineReducers({
    fetchItems,
    items,
    routing: routerReducer
})
```
index.js
```
import { syncHistoryWithStore } from 'react-router-redux'

```
- redux-thunk

//redux-promise

//redux-saga generator

redux异步流

index.js
```
import thunkMiddleware from 'redux-thunk'

```
##react-router
browserHistory: 用于实际项目
hashHistory: 用于开发
