import QuestionCard from '../QuestionCard/QuestionCard'
import Sidebar from '../Sidebar/Sidebar'
import './QuestionsList.css'

function QuestionsList({ questions }) {
	return (
		<div className='page'>
			<header className='header'>
				<div className='subtitle'>Вопросы React, JavaScript</div>
			</header>

			<div className='main-grid'>
				<div className='question-section'>
					<QuestionCard questions={questions} />
				</div>

				<Sidebar />
			</div>
		</div>
	)
}

export default QuestionsList
