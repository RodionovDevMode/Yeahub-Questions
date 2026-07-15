import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { API_URLS } from '../../API/endpoints'
import './QuestionDetail.css'

function QuestionDetail() {
	const { questionId } = useParams()
	const navigate = useNavigate()
	const {
		data: question,
		loading,
		error,
	} = useFetch(API_URLS.questionById(questionId))

	if (loading) return <p>Загрузка...</p>
	if (error) return <p>Ошибка: {error}</p>
	if (!question) return <p>Вопрос не найден</p>

	return (
		<div className='question-detail'>
			<h1>{question.title}</h1>

			<div className='info-row'>
				<span>Рейтинг: {question.rate || 0}</span>
				<span>Сложность: {question.complexity || 0}</span>
			</div>

			{question.imageSrc && <img src={question.imageSrc} alt='схема' />}

			<p className='description'>{question.description}</p>

			{question.questionSkills?.length > 0 && (
				<div className='skills'>
					<h3>Навыки:</h3>
					{question.questionSkills.map(skill => (
						<span key={skill.id} className='skill-tag'>
							{skill.title}
						</span>
					))}
				</div>
			)}

			{question.shortAnswer && (
				<div className='answer'>
					<h2>Краткий ответ</h2>
					<div dangerouslySetInnerHTML={{ __html: question.shortAnswer }} />
				</div>
			)}

			{question.longAnswer && (
				<div className='answer'>
					<h2>Развёрнутый ответ</h2>
					<div dangerouslySetInnerHTML={{ __html: question.longAnswer }} />
				</div>
			)}
			<button className='btn back' onClick={() => navigate(-1)}>
				Назад
			</button>
		</div>
	)
}

export default QuestionDetail
