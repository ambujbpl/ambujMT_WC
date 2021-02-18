import React from 'react';
import './../css/FilterArea.css';
const ui_data = require('./../utils/FilterArea.json');
const getHeaderIcons = () => {
	return (
		ui_data.headerIcons.map((icon,i) => {
			return <a className="ml5" key={i}><i className="material-icons  verticalAlignMiddle">{icon.name}</i></a> 
		})
	)
}
const FilterArea = () => {
	return(
		<div>
			<div>
				{getHeaderIcons()}
				<a className="btn-small ml5 verticalAlignMiddle"><i className="material-icons">record_voice_over</i> Assign</a>
			</div>
			<div><i className="material-icons">record_voice_over</i> Apply Filter <i className="material-icons right">add</i></div>
			<div>Difficulty Level</div>
			<div>
				<form>      
		      	<label>
			      <input name="remember"  type="checkbox"
			      />
			      My question bank
			    </label>
		      </form>
		      </div>
		</div>
	);
}

export default FilterArea;