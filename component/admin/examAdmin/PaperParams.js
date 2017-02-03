import React from 'react'

const PaperParams = ({fetchingPaperParams}) => (
	<ul className="paperparams">
		<li>单项选择题：共<span className="items">{fetchingPaperParams.data.radioNumber}</span>题，每题<span className="items">{fetchingPaperParams.data.radioScore}</span>分</li>
		<li>多项项选择题：共<span className="items">{fetchingPaperParams.data.multiNumber}</span>题，每题<span className="items">{fetchingPaperParams.data.multiScore}</span>分</li>
		<li>填空题：共<span className="items">{fetchingPaperParams.data.fillblankNumber}</span>题，每题<span className="items">{fetchingPaperParams.data.fillblankScore}</span>分</li>
		<li>判断题：共<span className="items">{fetchingPaperParams.data.judgeNumber}</span>题，每题<span className="items">{fetchingPaperParams.data.judgeScore}</span>分</li>
		<li>改错题：共<span className="items">{fetchingPaperParams.data.correctNumber}</span>题，每题<span className="items">{fetchingPaperParams.data.correctScore}</span>分</li>
		<li>编程题：共<span className="items">{fetchingPaperParams.data.programmingNumber}</span>题，每题<span className="items">{fetchingPaperParams.data.programmingScore}</span>分</li>
	</ul>
	)

export default PaperParams