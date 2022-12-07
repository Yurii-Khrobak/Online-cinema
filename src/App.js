import React, { useState, useEffect, useRef } from 'react'
import Bloodhound from 'bloodhound-js/lib/bloodhound'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import './styles/_main.scss'

function App() {
	const [movie, setMovie] = useState()
	const [movieID, setMovieID] = useState(122)

	const updateData = value => {
		setMovieID({ name: value })
	}

	const refContainer = useRef('search suggestion')

	const url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=df4a9e23de20147837323ac5cc7db615`

	const fetchMovie = async () => {
		const data = await fetch(url)
		const movie = await data.json()
		setMovie(movie)
	}

	useEffect(() => {
		fetchMovie()

		//	let suggests = new Bloodhound({
		//		datumTokenizer: function (datum) {
		//			return Bloodhound.tokenizers.whitespace(datum.value)
		//		},
		//		queryTokenizer: Bloodhound.tokenizers.whitespace,
		//		remote: {
		//			url: 'https://api.themoviedb.org/3/search/movie?query=%QUERY&api_key=cfe422613b250f702980a3bbf9e90716',
		//			filter: function (movies) {
		//				return $.map(movies.results, function (movie) {
		//					return {
		//						value: movie.original_title,
		//						id: movie.id,
		//					}
		//				})
		//			},
		//		},
		//	})

		//	suggests.initialize()

		//	//========================= END BLOODHOUND ==============================//

		//	//========================= TYPEAHEAD ==============================//
		//	$('.typeahead')
		//		.typeahead(
		//			{
		//				hint: true,
		//				highlight: true,
		//				minLength: 2,
		//			},
		//			{ source: suggests.ttAdapter() }
		//		)
		//		.on('typeahead:selected', function (obj, datum) {
		//			fetchMovie(datum.id)
		//		})
	}, [])

	return (
		<>
			<Header
				fetchMovie={fetchMovie}
				movieID={movieID}
				updateData={updateData}
				refContainer={refContainer}
			/>
			{movie ? <Card key={movie.id} movie={movie} /> : <h1>NO MOVIES</h1>}
			<Footer />
		</>
	)
}

export default App
