import React from 'react';
import './../css/FilterArea.css';
// Using an ES6 transpiler like Babel
import Slider from 'react-rangeslider'
// To include the default styles
import 'react-rangeslider/lib/index.css'
// import InputRange from 'react-input-range-minmax-label';
// import 'react-input-range-minmax-label/lib/css/index.css';
const ui_data = require('./../utils/FilterArea.json');
const getHeaderIcons = () => {
	return (
		ui_data.headerIcons.map((icon,i) => {
			return <a className="ml5" key={i}><i className="material-icons  verticalAlignMiddle">{icon.name}</i></a> 
		})
	)
}
const handleCheckboxChange = event  => {
	console.log(event.target.checked);
}

const createMultipleCheckboxesSwitches = () => {
	return (
		ui_data.checkBoxList.map((checkbox,i) => {
			return (
				<div className="switch" key={i}>
					<label>
						<input type="checkbox" checked={checkbox.isChecked} onChange={(event)=> console.log(event)}/>
						<span className="lever"></span>						
					</label>{checkbox.name}
				</div>
			)
		})
	)
}

const FilterArea = () => {
	return(
		<div>
			<div>
				{getHeaderIcons()}
				<a className="waves-effect waves-light btn ml5 verticalAlignMiddle buttonCornerCss"><i className="material-icons left">record_voice_over</i>Assign</a>
			</div>
			<div className='mt25 row'><div className='valign-wrapper col s9'><i className="material-icons valign">record_voice_over</i>&nbsp;&nbsp;&nbsp;{ui_data.filterApply}</div><div className='right s3 col'><i className="material-icons circleCss right">add</i></div></div>
			<div className='mt25'>{ui_data.difficultyLevel}
				<Slider
          min={0}
          max={100}
          value={40}
        />
				<div className='row'>
					<div className='col s6 themeColor'>{ui_data.easy}</div>
					<div className='col s6'><span className="right themeColor">{ui_data.hard}</span></div>
				</div>
			</div>
			<div className='mt25 uiSeperator'></div>
			<div className='mt25'>
				{createMultipleCheckboxesSwitches()}
			</div>
			<div className='mt25 uiSeperator'></div>
			<div className='mt25 row'>
				<div className='col s6 themeColor verticalAlignMiddle'><i className="material-icons verticalAlignMiddle">settings</i>&nbsp;&nbsp;&nbsp;{ui_data.settings}</div>
				<div className='col s6'><i className="material-icons circleCss right">add</i></div>
			</div>
			<div className='mt25 uiSeperator'></div>
			<div className='mt25 row'>
				<div className='col s6 themeColor verticalAlignMiddle'><i className="material-icons verticalAlignMiddle">insert_invitation</i>&nbsp;&nbsp;&nbsp;{ui_data.schedule}</div>
				<div className='col s6'><i className="material-icons circleCss right">add</i></div>
			</div>
			<div className='mt25 uiSeperator'></div>
		</div>
	);
}

export default FilterArea;