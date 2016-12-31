import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router,Route,hashHistory,IndexRoute } from 'react-router';

import Assess from './component/Assess.js';
import AssessShow from './component/AssessShow.js';
import AssessScore from './component/student/AssessScore.js';
import Test from './component/student/Test.js';


import Admin from './component/admin/Admin.js';
import ClassAdmin from './component/admin/user/ClassAdmin.js';
import UserList from './component/admin/user/UserList.js'
import AdminLogin from './component/admin/AdminLogin.js';


ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={Assess}>
			<IndexRoute component={AssessShow} />
			<Route path="assess" component={AssessShow}>
				<Route path="showscore" component={AssessScore} />
			</Route>
		</Route>
		<Route path="test" component={Test} />
		<Route path="admin" component={Admin}>
			<Route path="classadmin" component={ClassAdmin} />
			<Route path="userlist" component={UserList}>
			</Route>
		</Route>
		<Route path="adminlogin" component={AdminLogin}/>
		
	</Router>
	), document.getElementById('root'));
