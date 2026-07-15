import { useEffect, useState } from 'react'
import useSidebarData from '../../hooks/useSidebarData'
import QuestionCard from '../QuestionCard/QuestionCard'
import Sidebar from '../Sidebar/Sidebar'
import { useSearchParams } from 'react-router-dom'
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
	const [selectedSkill, setSelectedSkill] = useState(null)
	const [questionsStatus, setQuestionsStatus] = useState({})
	const [statusFilter, setStatusFilter] = useState('all')
	const [searchParams] = useSearchParams()
	const search = searchParams.get('search') || ''

	useEffect(() => {
		const saved = localStorage.getItem('questionsStatus')
		if (saved) {
			setQuestionsStatus(JSON.parse(saved))
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('questionsStatus', JSON.stringify(questionsStatus))
	}, [questionsStatus])

	const filteredQuestions =
		questions?.filter(q => {
			let passDifficulty = true
			let passRating = true
			let passSkill = true
			let passStatus = true
			if (difficulty) {
				const [min, max] = difficulty.split('-').map(Number)
				passDifficulty = q.complexity >= min && q.complexity <= max
			}
			if (rating) {
				passRating = q.rate === rating
			}

			if (selectedSkill) {
				passSkill = q.questionSkills?.some(skill => skill.id === selectedSkill)
			}
			if (search) {
				const match = q.title.toLowerCase().includes(search.toLowerCase())
				if (!match) return false
			}

			if (statusFilter === null) {
				if (
					questionsStatus[q.id] === 'know' ||
					questionsStatus[q.id] === 'unknown'
				)
					return false
			} else if (statusFilter === 'know') {
				if (questionsStatus[q.id] !== 'know') return false
			} else if (statusFilter === 'unknown') {
				if (questionsStatus[q.id] !== 'unknown') return false
			} else if (questionsStatus[q.id] === 'all') {
				if (questionsStatus[q.id] !== 'all') return false
			}
			return passDifficulty && passRating && passSkill && passStatus
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
						limit={10}
						onQuestionStatusChange={setQuestionsStatus}
						questionsStatus={questionsStatus}
						statusFilter={statusFilter}
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
					onSkillSelect={setSelectedSkill}
					selectedSkill={selectedSkill}
					statusFilter={statusFilter}
					onStatusFilterChange={setStatusFilter}
				/>
			</div>
		</div>
	)
}

export default QuestionsList
