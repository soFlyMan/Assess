import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router,Route,hashHistory,IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './redux/reducers/reducers.js'
import logger from 'redux-logger'

import UserInfoContainer from './redux/container/UserInfoContainer.js'

import CorrectContainer from './redux/container/CorrectContainer.js'
import RadioContainer from './redux/container/RadioContainer.js'
import MultiContainer from './redux/container/MultiContainer.js'
import JudgeContainer from './redux/container/JudgeContainer.js'
import FillblankContainer from './redux/container/FillblankContainer.js'
import ProgrammingContainer from './redux/container/ProgrammingContainer.js'


import Assess from './component/Assess.js'
import AssessScore from './component/student/AssessScore.js'
import ExamContainer from './redux/container/ExamContainer.js'
import Course from './component/course/Course.js'


import Admin from './component/admin/Admin.js'
import AdminLogin from './component/admin/AdminLogin.js'

import ClassAdmin from './component/admin/user/ClassAdmin.js'
import UserContainer from './redux/container/UserContainer.js'
import SingleUserContainer from './redux/container/SingleUserContainer.js'


import SectionContainer from './redux/container/SectionContainer.js'
import Download from './component/admin/course/Download.js'


import ExamParamContainer from './redux/container/ExamParamContainer.js'
import MakePaperContainer from './redux/container/MakePaperContainer.js'

import PaperContainer from './redux/container/PaperContainer.js'
import SinglePaperContainer from './redux/container/SinglePaperContainer.js'

const middleware = applyMiddleware(logger(),thunkMiddleware)
const store = createStore(reducer,middleware)
const history = syncHistoryWithStore(hashHistory,store)

ReactDOM.render((
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Assess}>
				<Route path="showscore" component={AssessScore} />
			</Route>

			<Route path="examcontainer" component={ExamContainer} />

			<Route path="admin" component={Admin}>
				<Route path="sectioncontainer" component={SectionContainer} />
				<Route path="download" component={Download} />
				<Route path="classadmin" component={ClassAdmin} />
				<Route path="usercontainer" component={UserContainer} />
				<Route path="radiocontainer" component={RadioContainer}/>
				<Route path="correctcontainer" component={CorrectContainer} />
				<Route path="multicontainer" component={MultiContainer} />
				<Route path="judgecontainer" component={JudgeContainer} />
				<Route path="fillblankcontainer" component={FillblankContainer} />
				<Route path="programmingcontainer" component={ProgrammingContainer}/>
				<Route path="examparamcontainer" component={ExamParamContainer} />
				<Route path="makepapercontainer" component={MakePaperContainer} />
				<Route path="papercontainer" component={PaperContainer} />
				<Route path="singlepapercontainer" component={SinglePaperContainer} />
				<Route path="singleusercontainer" component={SingleUserContainer} /> 
			</Route>

			<Route path="adminlogin" component={AdminLogin}/>
			<Route path="course" component={Course}/>
			<Route path="userinfocontainer" component={UserInfoContainer}/>
			
		</Router>
	</Provider>
	), document.getElementById('root'))
