import { useState } from 'react'
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
						<span>{openId === question.id ? '▲' : '▼'}</span>
					</div>

					{openId === question.id && (
						<div className='question-content'>
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
									onClick={() =>
										onQuestionStatusChange(prev => ({
											...prev,
											[question.id]: 'know',
										}))
									}
								>
									✅ Знаю
								</button>
								<button
									className={
										questionsStatus[question.id] === 'unknown' ? 'active' : ''
									}
									onClick={() =>
										onQuestionStatusChange(prev => ({
											...prev,
											[question.id]: 'unknown',
										}))
									}
								>
									❌ Не знаю
								</button>
							</div>
						</div>
					)}
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
