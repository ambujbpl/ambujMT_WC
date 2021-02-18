import React from 'react';
const {questions} = require('./../utils/QuestionArea.json');

const optionList = (ques) => {

	return (
		ques.map(options => {
			return (
				<div className="col s6">
					{options.key}.) {options.name}
				</div>
			)
		})
	)
}
const renderQuestion = () => {
	return (
		questions.map(ques => {
			return (
				<div>
					<div>Q. {ques.id} : {ques.title} <span className="right">(5) <i class="material-icons">import_export</i> <i class="material-icons">more_vert</i></span></div>
					<div className="row">{optionList(ques.options)}</div>
				</div>
			)
		})
	);
}
const QuestionArea = () => {
	return(
		<div>{renderQuestion()}</div>
	);
}

export default QuestionArea;