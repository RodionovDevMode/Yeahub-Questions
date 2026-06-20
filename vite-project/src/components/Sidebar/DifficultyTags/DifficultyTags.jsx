import { useState } from 'react'
import './DifficultyTags.css'

function DifficultyTags({ onDifficultyChange }) {
	const levels = ['1-3', '4-6', '7-8', '9-10']

	const [selectedLevel, setSelectedLevel] = useState(null)

	const handleClick = level => {
		const newLevel = level === selectedLevel ? null : level
		setSelectedLevel(newLevel)
		onDifficultyChange(newLevel)
	}

	return (
		<>
			<h3>Уровень сложности</h3>
			<div className='tags'>
				{levels.map(level => (
					<button
						key={level}
						onClick={() => handleClick(level)}
						className={level === selectedLevel ? 'active' : null}
					>
						{level}
					</button>
				))}
			</div>
		</>
	)
}

export default DifficultyTags
