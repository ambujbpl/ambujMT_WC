import React from 'react';
const questions = [
	{
		id: 1,
		title: 'The University of Waterloo does NOT have a building of this name?',
		options: [
			{
				key: 'a',
				name: 'B.C. Ma hews Hall.'
			},
			{
				key: 'b',
				name: 'Carl A. Pollock Hall.'
			},
			{
				key: 'c',
				name: 'I.L. Neilson Hall.'
			},
			{
				key: 'd',
				name: 'Douglas Wright Engineering Building.'
			}
		]
	},
	{
		id: 2,
		title: 'During what period was James Downey the president of Waterloo?',
		options: [
			{
				key: 'a',
				name: '1990-1996.'
			},
			{
				key: 'b',
				name: '1991-1997.'
			},
			{
				key: 'c',
				name: '1992-1998.'
			},
			{
				key: 'd',
				name: '1993-1999.'
			}
		]
	},
	{
		id: 3,
		title: 'The University of Waterloo does NOT have a building of this name?',
		options: [
			{
				key: 'a',
				name: '1990-1996.'
			},
			{
				key: 'b',
				name: '1991-1997.'
			},
			{
				key: 'c',
				name: '1992-1998.'
			},
			{
				key: 'd',
				name: '1993-1999.'
			}
		]
	},
	{
		id: 4,
		title: 'During what period was James Downey the president of Waterloo?',
		options: [
			{
				key: 'a',
				name: '1990-1996.'
			},
			{
				key: 'b',
				name: '1991-1997.'
			},
			{
				key: 'c',
				name: '1992-1998.'
			},
			{
				key: 'd',
				name: '1993-1999.'
			}
		]
	}

]

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
//<i class="material-icons">import_export</i> <i class="material-icons">more_vert</i>
const renderQuestion = () => {
	return (
		questions.map(ques => {
			return (
				<div>
					<div>Q. {ques.id} : {ques.title} <span className="right">(5) </span></div>
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