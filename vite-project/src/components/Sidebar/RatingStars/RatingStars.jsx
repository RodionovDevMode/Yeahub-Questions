import { useState } from 'react'
import './RatingStart.css'

function RatingStars({ onRatingChange }) {
	const [selected, setSelected] = useState(null)
	const numbersRating = [1, 2, 3, 4, 5]

	return (
		<div className='rating-block'>
			<h3>Рейтинг</h3>
			<div className='rating-numbers'>
				{numbersRating.map(num => (
					<span
						key={num}
						className={`rating-number ${selected === num ? 'active' : ''}`}
						onClick={() => {
							setSelected(num)
							onRatingChange(num)
						}}
					>
						{num}
					</span>
				))}
			</div>
		</div>
	)
}

export default RatingStars
