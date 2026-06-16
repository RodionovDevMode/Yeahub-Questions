import { useState } from 'react'
import './DifficultyTags.css'

function DifficultyTags({ onDifficultyChange }) {
	const levels = ['1-3', '4-6', '7-8', '9-10']
	const [internalLoading, setInternalLoading] = useState(false)
	const [selectedLevel, setSelectedLevel] = useState(null)

	const handleClick = level => {
		if (internalLoading) return
		setInternalLoading(true)
		setTimeout(() => {
			const newLevel = level === selectedLevel ? null : level
			setSelectedLevel(newLevel)
			onDifficultyChange(newLevel)
			setInternalLoading(false)
		}, 1000)
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
						{internalLoading ? 'Идёт загрузка...' : level}
					</button>
				))}
			</div>
		</>
	)
}

export default DifficultyTags
