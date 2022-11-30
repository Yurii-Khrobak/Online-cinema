import React from 'react'

const Header = refContainer => {
	const handleChange = event => {
		event.target.select()
	}

	return (
		<header className='header'>
			<div className='container'>
				<div className='header_content'>
					<div className='logo'>
						<img src='./img/logo.png' alt='logo' />
					</div>
					<form className='search_form'>
						<input
							className='search_input typeahead'
							placeholder='Input movie title...'
							type='text'
							//ref={refContainer}
							onClick={handleChange}
							id='q'
						/>
					</form>
				</div>
			</div>
		</header>
	)
}

export default Header
