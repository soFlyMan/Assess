import React from 'react'

const SingleUser = ({fetched,singleUser}) => {
	if(fetched){
		return (
			<div>
				{singleUser.class}
			</div>
			)
	}else{
		return (
		<div>
			正在加载中……
		</div>
		)
	}
}

export default SingleUser