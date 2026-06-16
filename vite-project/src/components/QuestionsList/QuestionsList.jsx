import { useState } from 'react'
import useSidebarData from '../../hooks/useSidebarData'
import QuestionCard from '../QuestionCard/QuestionCard'
import Sidebar from '../Sidebar/Sidebar'
import './QuestionsList.css'

function QuestionsList() {
	const {
		specializations,
		skills,
		questions,
		loadingQuestions,
		errorQuestions,
		loadingSpec,
		errorSpec,
		loadingSkills,
		errorSkills,
	} = useSidebarData()
	const [difficulty, setDifficulty] = useState(null)
	const [rating, setRating] = useState(null)

	const filteredQuestions =
		questions?.filter(q => {
			let passDifficulty = true
			let passRating = true
			if (difficulty) {
				const [min, max] = difficulty.split('-').map(Number)
				passDifficulty = q.complexity >= min && q.complexity <= max
			}
			if (rating) {
				passRating = q.rate === rating
			}
			return passDifficulty && passRating
		}) || []

	return (
		<div className='page'>
			<header className='header'>
				<div className='subtitle'>Вопросы React, JavaScript</div>
			</header>

			<div className='main-grid'>
				<div className='question-section'>
					<QuestionCard
						questions={filteredQuestions}
						loading={loadingQuestions}
						error={errorQuestions}
					/>
				</div>

				<Sidebar
					specializations={specializations}
					skills={skills}
					questions={questions}
					loadingSpec={loadingSpec}
					errorSpec={errorSpec}
					loadingSkills={loadingSkills}
					errorSkills={errorSkills}
					loadingQuestions={loadingQuestions}
					errorQuestions={errorQuestions}
					onDifficultyChange={setDifficulty}
					onRatingChange={setRating}
				/>
			</div>
		</div>
	)
}

export default QuestionsList
