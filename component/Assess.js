import React,{ Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { Button } from 'antd';

import { fetchParams } from '../redux/actions/actions.js'
import { fetchExamStatus } from '../redux/actions/stuActions.js'

import AssessShow from './AssessShow.js'
import Nav from './Nav.js'



class Assess extends Component{
	constructor(props){
		super(props);
		this.state={
			nav:'assessNav'
		};
	}
	handleScorll(e){
		if(document.body.scrollTop>0){
				this.setState({nav:'assessNavChange'});
		}else{
			this.setState({nav:'assessNav'});

		}
	}
	componentDidMount=()=>{
		const { dispatch } = this.props
		const self = this
		dispatch(fetchParams('/exam/params',{
			method: 'GET',
			credentials: 'same-origin'
		})).then(function(data){
			const id = self.props.id
			dispatch(fetchExamStatus(`/status/${id}`,{
				method: 'POST',
				credentials: 'same-origin'
			}))
		})
	}
	render(){
		const { fetchingParams, fetchingLoginStatus, dispatch, examStatus }  = this.props
		const exam = (fetchingParams) => {
			if(fetchingParams.data.limit=="禁止考试"||examStatus==false){
				return (
					<Button disabled>暂无考试</Button>
					)
			}else{
				return (
					<Button type="primary"><Link to="/examcontainer">开始考试</Link></Button>
				)
			}
		}
		return (
			<div style={{marginBottom:180}} onWheel={this.handleScorll.bind(this)}>
			<div>
				<Nav nav={this.state.nav}
					 />
				<div id="navImg">
			</div>
				<div style={{width:"20%",height:100,padding:40,margin:"0 auto"}}>
					{exam(fetchingParams)}
				</div>
					<AssessShow userid={fetchingLoginStatus.data.userid}/>
				<div>
					{this.props.children}
				</div>
			</div>
			
			</div>
			)
	}
}

const mapStateToProps = state => {
	return {
		fetchingParams: state.fetchingParams,
		fetchingLoginStatus: state.fetchingLoginStatus,
		id: state.fetchingLoginStatus.data.id,
		examStatus: state.examStatus.examstatus
	}
}

export default connect(mapStateToProps)(Assess)