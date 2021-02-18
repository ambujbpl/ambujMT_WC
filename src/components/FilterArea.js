import React from 'react';
const FilterArea = () => {
	return(
		<div>
			<div>
				<a className="ml5"><i className="material-icons">remove_red_eye</i></a>
				<a className="ml5"><i className="material-icons">picture_as_pdf</i></a>
				<a className="ml5"><i className="material-icons">screen_share</i></a>
				<a className="ml5"><i className="material-icons">save</i></a>
				<a className="btn-small ml5"><i className="material-icons">record_voice_over</i>Assign</a>
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