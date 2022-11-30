import React from 'react'
let numeral = require('numeral')

const Movie = ({ movie }) => {
	let posterIMG = 'https://image.tmdb.org/t/p/w500' + movie.poster_path,
		production = movie.production_companies,
		genres = movie.genres,
		totalRevenue = movie.revenue,
		productionList = nestedDataToString(production),
		noData = '-',
		genresList = nestedDataToString(genres),
		backdropIMG = 'https://image.tmdb.org/t/p/original' + movie.backdrop_path

	if (movie.vote_average === 'undefined' || movie.vote_average === 0) {
		movie.vote_average = noData
	} else {
		movie.vote = movie.vote_average + ' / 10'
	}

	if (totalRevenue === 'undefined' || totalRevenue === 0) {
		totalRevenue = noData
	} else {
		totalRevenue = numeral(movie.revenue).format('($0,0)')
	}

	if (movie.poster_path == null) {
		posterIMG =
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g'
	}

	document.body.style.backgroundImage = 'url(' + backdropIMG + ')'

	return (
		<main className='main'>
			<div className='container'>
				<div className='main_content'>
					<div className='poster'>
						<img src={posterIMG} alt={'Poster to ' + movie.title} />
					</div>
					<div className='movie_info'>
						<h1 className='movie_title'>{movie.title}</h1>
						<span className='movie_tagline'>{movie.tagline}</span>
						<p className='movie_overview'>{movie.overview}</p>
						<div className='movie_details'>
							<span className='genre_list'>{genresList}</span>
							<br />
							<span className='production_list'>{productionList}</span>
							<div className='release_details'>
								<div className='info-data-container'>
									<div className='info-data'>
										Original Release:
										<span className='meta-data'>{movie.release_date}</span>
									</div>
									<div className='info-data'>
										Running Time:
										<span className='meta-data'>{movie.runtime} mins</span>
									</div>
								</div>
								<div className='info-data-container'>
									<div className='info-data'>
										Box Office:
										<span className='meta-data'>{totalRevenue}</span>
									</div>
									<div className='info-data'>
										Vote Average:
										<span className='meta-data'>{movie.vote}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)

	function nestedDataToString(nestedData) {
		let nestedArray = [],
			resultString
		if (nestedData !== undefined) {
			nestedData.forEach(function (item) {
				nestedArray.push(item.name)
			})
		}
		resultString = nestedArray.join(', ')
		return resultString
	}
}

export default Movie
