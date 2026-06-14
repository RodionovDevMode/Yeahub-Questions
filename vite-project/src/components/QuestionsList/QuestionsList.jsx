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

	const filteredQuestions =
		questions?.filter(q => {
			if (!difficulty) return true
			const [min, max] = difficulty.split('-').map(Number)
			return q.complexity >= min && q.complexity <= max
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
					loadingSpec={loadingSpec}
					errorSpec={errorSpec}
					loadingSkills={loadingSkills}
					errorSkills={errorSkills}
					onDifficultyChange={setDifficulty}
				/>
			</div>
		</div>
	)
}

export default QuestionsList
