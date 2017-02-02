import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { Card, Table, Icon, message, Popconfirm } from 'antd'

import { fetchExampap } from '../actions/stuActions.js'
import { deleteItems,fetchSinglePaper } from '../actions/actions.js'

class PaperContainer extends Component{
	componentDidMount(){
		const { dispatch } = this.props
		dispatch(fetchExampap('/exam/exampaper',{
			method: 'GET',
			credentials: 'same-origin',
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
							credentials: 'same-origin',
					    	headers: {
					    		'Content-Type': 'application/json'
					    	},
					    	body: JSON.stringify(paperId)
					    }))
	    	yield message.info('删除成功！')
			yield dispatch(fetchExampap('/exam/exampaper',{
					methond: 'GET',
					credentials: 'same-origin',
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
	handleSingle = (record) => {
		const id = record._id
		const { dispatch } = this.props
		dispatch(fetchSinglePaper(`/exam/${id}`,{
			method: 'POST',
			credentials: 'same-origin',
		}))
	}
	render(){
		const columns = [{
				  title: '创建日期',
				  dataIndex: 'createAt',
				  key: 'createAt',
  				  render: (text,record) => <a onClick={()=>this.handleSingle(record)}><Link to="/admin/singlepapercontainer"><span>{text}</span></Link></a>,

				}, {
				  title: '操作',
				  key: 'action',
				  render: (text, record) => (
				    <span>
					    <Popconfirm title="确定要删除？"
					    			onConfirm={()=>this.onDel(record)}
					    			onText="确定"
					    			cancelText="取消"> 
					      <a>删除</a>
				        </Popconfirm>
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