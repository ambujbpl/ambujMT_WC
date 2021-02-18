import React from 'react';
import QuestionArea from './QuestionArea';
import FilterArea from './FilterArea';
import './../css/MainArea.css';
const ui_data = require('./../utils/MainArea.json');
const MainArea = () => {
	return (
		<div className="mainAreaCss">
			<div className="row">
				<div className="col s9 p20">
					<h6>{ui_data.header}</h6>
					<div className="buttonAreaCss">
						<a className="waves-effect waves-light btn-large borderRadiousForButton">{ui_data.info}</a>
						<a className="waves-effect waves-light btn-large ml5 borderRadiousForButton">{ui_data.review}</a>
					</div>
					<div className="questionAreaCss"><QuestionArea /></div>					
				</div>
				<div className="col s3 filterAreaCss p20">
					<FilterArea />
				</div>
			</div>
		</div>		
	);
}

export default MainArea;