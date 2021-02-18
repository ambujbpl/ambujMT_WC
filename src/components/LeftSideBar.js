import React from 'react';
import './../css/LeftSideBar.css';
const ui_data = require('./../utils/LeftSideBar.json');
console.log(ui_data);
const renderLiftSideBarList = () => {
	return (
		ui_data.leftSideBar.map(item => {
			return <li><a href={item.url}><i class="material-icons white-text">{item.name}</i></a></li>
		})
	)
}
const LeftSideBar = () => {
	return (		
		<ul id="sidenav-1" className="sidenav sidenav-fixed bgColor leftSideBarCss">
			<div className="mt150">
				{renderLiftSideBarList()}
			</div>
		</ul>
	);
}

export default LeftSideBar;