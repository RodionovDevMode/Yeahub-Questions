import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './QuestionCard.css'

function QuestionCard({
	questions,
	loading,
	error,
	limit,
	questionsStatus,
	onQuestionStatusChange,
	statusFilter,
}) {
	const [openId, setOpenId] = useState(null)
	const [showAll, setShowAll] = useState(false)

	if (questions === null || questions === undefined) return <p>Загрузка...</p>
	if (loading) return <p>Загрузка...</p>
	if (error) return <p>Ошибка: {error}</p>
	if (!questions || questions.length === 0) {
		return <p>Нет вопросов</p>
	}
	const toggleQuestion = id => {
		setOpenId(openId === id ? null : id)
	}

	const displayedItemsQuestions = showAll
		? questions
		: questions.slice(0, limit)

	return (
		<div>
			{displayedItemsQuestions.map(question => (
				<div key={question.id} className='question-card'>
					<div
						className='question-header'
						onClick={() => toggleQuestion(question.id)}
					>
						<h2>{question.title}</h2>
						<span className={`arrow ${openId === question.id ? 'open' : ''}`}>
							▼
						</span>
					</div>

					<div
						className={`question-content ${openId === question.id ? 'open' : ''}`}
					>
						<div className='question-content-inner'>
							<div className='info-row'>
								<span>Рейтинг: {question.rate || 0}</span>
								<span>Сложность: {question.complexity || 0}</span>
							</div>
							{question.imageSrc && <img src={question.imageSrc} alt='схема' />}
							<p className='description'>{question.description}</p>

							<div className='question-status-buttons'>
								<button
									className={
										questionsStatus[question.id] === 'know' ? 'active' : ''
									}
									onClick={e => {
										e.stopPropagation()
										onQuestionStatusChange(prev => ({
											...prev,
											[question.id]: 'know',
										}))
									}}
								>
									✅ Знаю
								</button>
								<button
									className={
										questionsStatus[question.id] === 'unknown' ? 'active' : ''
									}
									onClick={e => {
										e.stopPropagation()
										onQuestionStatusChange(prev => ({
											...prev,
											[question.id]: 'unknown',
										}))
									}}
								>
									❌ Не знаю
								</button>
								<NavLink to={`/question-detail/${question.id}`}>
									Подробнее
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			))}
			{statusFilter === 'know' || statusFilter === 'unknown' ? null : (
				<button
					className='question-show-all-btn'
					onClick={() => setShowAll(!showAll)}
				>
					{showAll ? 'Скрыть' : 'Показать всё'}
				</button>
			)}
		</div>
	)
}

export default QuestionCard
