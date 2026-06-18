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
	const [search, setSearch] = useState('')
	const [selectedSkill, setSelectedSkill] = useState(null)

	const filteredQuestions =
		questions?.filter(q => {
			let passDifficulty = true
			let passRating = true
			let passSkill = true
			if (difficulty) {
				const [min, max] = difficulty.split('-').map(Number)
				passDifficulty = q.complexity >= min && q.complexity <= max
			}
			if (rating) {
				passRating = q.rate === rating
			}
			if (search) {
				const match = q.title.toLowerCase().includes(search.toLowerCase())
				if (!match) return false
			}
			if (selectedSkill) {
				passSkill = q.questionSkills?.some(skill => skill.id === selectedSkill)
			}
			return passDifficulty && passRating && passSkill
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
					onSearchChange={setSearch}
					onSkillSelect={setSelectedSkill}
					selectedSkill={selectedSkill}
				/>
			</div>
		</div>
	)
}

export default QuestionsList
