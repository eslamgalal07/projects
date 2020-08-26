import './SeasonDisplay.css';
import React from 'react';

const getSeason = (lat, month) => {
	// between 2 , 9
	if (2 < month < 9) {
		// North summer , South winter
		return lat > 0 ? 'summer ' : 'winter';
	}
};

const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	const text = season === 'summer ' ? "Let's hit the beach" : 'Burr ,  it is chilly';
	const iconName = season === 'summer ' ? 'sun' : 'snowflake';
	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left massive ${iconName}  icon`} />
			<h1>{text}</h1>
			<i className={`icon-right massive ${iconName}  icon`} />
		</div>
	);
};

export default SeasonDisplay;
