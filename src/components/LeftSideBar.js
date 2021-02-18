import React from 'react';
import './../css/LeftSideBar.css';
const ui_data = require('./../utils/LeftSideBar.json');
const renderLiftSideBarList = () => {
	return (
		ui_data.leftSideBar.map((item,i) => {
			return <li key={i}><a href={item.url}><i className="material-icons white-text">{item.name}</i></a></li>
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