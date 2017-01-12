import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router,Route,hashHistory,IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Container from './redux/container/container.js'
import thunkMiddleware from 'redux-thunk'
import reducer from './redux/reducers/reducers.js'
import logger from 'redux-logger'

import Assess from './component/Assess.js'
import AssessScore from './component/student/AssessScore.js'
import Exam from './component/student/Exam.js'
import Course from './component/student/Course.js'

import Admin from './component/admin/Admin.js'
import AdminLogin from './component/admin/AdminLogin.js'

import ClassAdmin from './component/admin/user/ClassAdmin.js'
import UserList from './component/admin/user/UserList.js'

import Section from './component/admin/course/Section.js'
import Download from './component/admin/course/Download.js'

import Item from './component/admin/itemPool/Item.js'

import ExamParam from './component/admin/examAdmin/ExamParam.js'

const middleware = applyMiddleware(logger(),thunkMiddleware)
const store = createStore(reducer,middleware)
const history = syncHistoryWithStore(hashHistory,store)

ReactDOM.render((
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Assess}>
					<Route path="showscore" component={AssessScore} />
			</Route>

			<Route path="exam" component={Exam} />

			<Route path="admin" component={Admin}>
				<Route path="section" component={Section} />
				<Route path="download" component={Download} />
				<Route path="classadmin" component={ClassAdmin} />
				<Route path="userlist" component={UserList} />
				<Route path="container" component={Container} />
				<Route path="item" component={Item} />
				<Route path="examparam" component={ExamParam} /> 
			</Route>

			<Route path="adminlogin" component={AdminLogin}/>
			<Route path="course" component={Course}/>
			
		</Router>
	</Provider>
	), document.getElementById('root'))
