import React from 'react'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer_content'>
					<div className='tmdb'>
						<img src='./img/tmdb.png' alt='TMDB' />
					</div>
					<div className='text'>
						<div className='author'>
							<p>Designed & developed by Yurii Khrobak</p>
						</div>
						<div className='git'>
							<p>View code</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
