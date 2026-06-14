import { useState } from 'react'
import './QuestionCard.css'

function QuestionCard({ questions, loading, error }) {
	const [openId, setOpenId] = useState(null)

	if (loading) return <p>Загрузка...</p>
	if (error) return <p>Ошибка: {error}</p>

	const toggleQuestion = id => {
		setOpenId(openId === id ? null : id)
	}

	if (!questions || questions.length === 0) {
		return <p>Нет вопросов</p>
	}

	return (
		<div>
			{questions.map(question => (
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
						</div>
					)}
				</div>
			))}
		</div>
	)
}

export default QuestionCard
