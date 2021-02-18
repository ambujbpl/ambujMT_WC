import React from 'react';
const LeftSideBar = () => {
	return (		
		<ul id="sidenav-1" className="sidenav sidenav-fixed bgColor" style={{width: '150px'}}>
			<div style={{marginTop: '150px'}}>
				<li><a href="/"><i class="material-icons white-text">casino</i></a></li>
				<li><a href="/"><i class="material-icons white-text">assignment</i></a></li>
				<li><a href="/"><i class="material-icons white-text">rate_review</i></a></li>
				<li><a href="/"><i class="material-icons white-text">speaker_notes</i></a></li>
				<li><a href="/"><i class="material-icons white-text">redeem</i></a></li>
				<li><a href="/"><i class="material-icons white-text">streetview</i></a></li>
				<li><a href="/"><i class="material-icons white-text">add_circle</i></a></li>
			</div>
		</ul>
	);
}

export default LeftSideBar;