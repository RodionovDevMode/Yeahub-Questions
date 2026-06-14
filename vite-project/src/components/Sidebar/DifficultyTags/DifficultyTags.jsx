import { useState } from 'react'

function DifficultyTags({ onDifficultyChange }) {
	const levels = ['1-3', '4-6', '7-8', '9-10']
	const [internalLoading, setInternalLoading] = useState(false)

	const handleClick = level => {
		if (internalLoading) return
		setInternalLoading(true)
		setTimeout(() => {
			onDifficultyChange(level)
			setInternalLoading(false)
		}, 5000)
	}

	return (
		<>
			<h3>Уровень сложности</h3>
			<div className='tags'>
				{levels.map(level => (
					<button key={level} onClick={() => handleClick(level)}>
						{internalLoading ? <p>Идёт загрузка...</p> : level}
					</button>
				))}
			</div>
		</>
	)
}

export default DifficultyTags
