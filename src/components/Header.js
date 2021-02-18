import React from 'react';
import logo from './../logo.jpg'; 
import './../css/Header.css';
const ui_data = require('./../utils/Header.json');
console.log(ui_data);
const renderLeftHeaders = () => {
	return(
		ui_data.leftHeaders.map(header => {
			return <li className="ml10"><a href={header.url}>{header.name}</a></li>
		})
	)
}
const renderRightHeaders = () => {
	return(
		ui_data.rightHeaders.map(header => {
			if(header.type.trim().toLowerCase() === 'icon')
			return <li className="ml10"><a href='/'><i class="material-icons">{header.name}</i></a></li>
			else return <li className="ml10"><a href='/'><img className="imageLogo" src={logo} alt="Logo"/></a></li>
		})
	)
}

const Header = () => {
	return (		
		  <nav>
		    <div className="nav-wrapper bgColor">
		      <a href="#" className="brand-logo"> <i class="material-icons">palette</i></a>
		      <ul id="nav-mobile" className="left ml150">
						{renderLeftHeaders()}
		      </ul>
		      <ul className="right hide-on-med-and-down">
						{renderRightHeaders()}
		      </ul>
		    </div>
		  </nav>
	);
}

export default Header;