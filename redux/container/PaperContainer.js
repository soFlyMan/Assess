import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card, Table, Icon, message } from 'antd'

import { fetchExampap } from '../actions/stuActions.js'
import { deleteItems } from '../actions/actions.js'

import { PaperParams } from '../../component/admin/examAdmin/PaperParams.js'
import { Paper } from '../../component/admin/examAdmin/Paper.js'

class PaperContainer extends Component{
	componentDidMount(){
		const { dispatch } = this.props
		dispatch(fetchExampap('/exam/exampaper',{
			methond: 'GET'
		}))
	}
	onDel = (record) => {
		const paperId = {
			_id: record._id
		}
		var { dispatch, fetchStatus } = this.props
		function* gen(){
			yield dispatch(deleteItems('/exam/delPaper',{
					    	method: 'DELETE',
					    	headers: {
					    		'Content-Type': 'application/json'
					    	},
					    	body: JSON.stringify(paperId)
					    }))
	    	yield message.info('删除成功！')
			yield dispatch(fetchExampap('/exam/exampaper',{
					methond: 'GET'
				}))
		}
		var g = new gen()
		g.next()
	    if(fetchStatus.fetched){
	    	g.next()
	    	g.next()
	    }else{
	    	message.info('删除失败！')
	    }

	}
	render(){
		const columns = [{
				  title: '创建日期',
				  dataIndex: 'createAt',
				  key: 'createAt',
  				  render: text => <a href="#">{text}</a>,

				}, {
				  title: '操作',
				  key: 'action',
				  render: (text, record) => (
				    <span>
				      <a onClick={()=>this.onDel(record)}>删除</a>
				    </span>
				  ),
				}]
		return (
			<Card title="试卷管理">
				<Table columns={columns} dataSource={this.props.data} />
			</Card>
			)
	}
}


const mapStateToProps = state => {
	return {
		data: state.fetchingExampap.data,
		fetched: state.fetchingExampap.fetched,
		fetchStatus: state.fetchStatus
	}
}

export default connect(mapStateToProps)(PaperContainer)