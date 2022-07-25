import PropTypes from 'react';

function Header({ text, bgColor, textColor }) {
	const headerStyles = {
		backgroundColor: bgColor,
		color: textColor,
	};

	return (
		<header style={headerStyles}>
			<div className='container'>
				<h2>{text}</h2>
			</div>
		</header>
	);
}

Header.defaultProps = {
	text: 'Header TEXT',
	bgColor: 'rgba(0,0,0,0.4)',
	textColor: '#ff3a95',
};

Header.prototype = {
	text: PropTypes.string,
	bgColor: PropTypes.string,
	textColor: PropTypes.string,
};

export default Header;
