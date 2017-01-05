import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Router,Route,hashHistory,IndexRoute } from 'react-router'

import Assess from './component/Assess.js'
import AssessScore from './component/student/AssessScore.js'
import Test from './component/student/Test.js'


import Admin from './component/admin/Admin.js'
import AdminLogin from './component/admin/AdminLogin.js'

import ClassAdmin from './component/admin/user/ClassAdmin.js'
import UserList from './component/admin/user/UserList.js'

import Section from './component/admin/course/Section.js'
import Download from './component/admin/course/Download.js'


ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={Assess}>
				<Route path="showscore" component={AssessScore} />
		</Route>

		<Route path="test" component={Test} />

		<Route path="admin" component={Admin}>
			<Route path="section" component={Section} />
			<Route path="download" component={Download} />
			<Route path="classadmin" component={ClassAdmin} />
			<Route path="userlist" component={UserList} />
		</Route>

		<Route path="adminlogin" component={AdminLogin}/>
		
	</Router>
	), document.getElementById('root'))
