import React from 'react'
import './style.css'
const Header = (props) => {
		const { Title } = props
	return (
		<div className="headerContainer">
			<p className="titleStyle">{Title}</p>
		</div>
		)
}

export default Header
