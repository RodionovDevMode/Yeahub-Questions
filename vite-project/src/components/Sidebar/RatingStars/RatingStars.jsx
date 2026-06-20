import { useState } from 'react'
import './RatingStart.css'

function RatingStars({ onRatingChange }) {
	const [selected, setSelected] = useState(null)
	const numbersRating = [1, 2, 3, 4, 5]

	const handleClick = num => {
		if (selected === num) {
			setSelected(null)
			onRatingChange(null)
		} else {
			setSelected(num)
			onRatingChange(num)
		}
	}

	return (
		<div className='rating-block'>
			<h3>Рейтинг</h3>
			<div className='rating-numbers'>
				{numbersRating.map(num => (
					<span
						key={num}
						className={`rating-number ${selected === num ? 'active' : ''}`}
						onClick={() => handleClick(num)}
					>
						{num}
					</span>
				))}
			</div>
		</div>
	)
}

export default RatingStars
